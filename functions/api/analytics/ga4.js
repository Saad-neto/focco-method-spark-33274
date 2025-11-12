/**
 * Cloudflare Worker: Google Analytics 4 Data API
 *
 * Busca métricas do GA4 de forma segura usando Service Account
 * Endpoint: /api/analytics/ga4
 */

export const onRequest = async (context) => {
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // Handle OPTIONS request
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { searchParams } = new URL(context.request.url);
    const days = parseInt(searchParams.get('days') || '30');
    const startDate = searchParams.get('startDate') || `${days}daysAgo`;
    const endDate = searchParams.get('endDate') || 'today';

    // Validar autenticação básica (opcional)
    const authHeader = context.request.headers.get('Authorization');
    const expectedAuth = context.env.DASHBOARD_PASSWORD;

    if (expectedAuth && authHeader !== `Bearer ${expectedAuth}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Obter credenciais da Service Account do environment
    const credentialsJson = context.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    const propertyId = context.env.GA4_PROPERTY_ID;

    if (!credentialsJson || !propertyId) {
      throw new Error('Missing GA4 configuration');
    }

    // Parse JSON com tratamento de erro mais robusto
    let credentials;
    try {
      // Se o JSON já for um objeto, usar diretamente
      credentials = typeof credentialsJson === 'string'
        ? JSON.parse(credentialsJson)
        : credentialsJson;
    } catch (parseError) {
      throw new Error(`Failed to parse credentials: ${parseError.message}`);
    }

    // Obter access token do Google
    const accessToken = await getGoogleAccessToken(
      credentials.client_email,
      credentials.private_key
    );

    // Buscar métricas do GA4
    const metrics = await fetchGA4Metrics(
      propertyId,
      accessToken,
      startDate,
      endDate
    );

    return new Response(JSON.stringify(metrics), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // Cache 5 minutos
      },
    });
  } catch (error) {
    console.error('GA4 API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch GA4 metrics',
        message: errorMessage
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

/**
 * Gera JWT e obtém access token do Google
 */
async function getGoogleAccessToken(serviceAccountEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const expiry = now + 3600;

  // Criar JWT header
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  // Criar JWT payload
  const payload = {
    iss: serviceAccountEmail,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: expiry,
    iat: now,
  };

  // Encode base64url
  const base64url = (data) =>
    btoa(JSON.stringify(data))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');

  const headerEncoded = base64url(header);
  const payloadEncoded = base64url(payload);
  const signatureInput = `${headerEncoded}.${payloadEncoded}`;

  // Assinar com a chave privada
  const privateKeyPem = privateKey.replace(/\\n/g, '\n');
  const signature = await signJWT(signatureInput, privateKeyPem);

  const jwt = `${signatureInput}.${signature}`;

  // Trocar JWT por access token
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok) {
    throw new Error(`Token error: ${JSON.stringify(tokenData)}`);
  }

  return tokenData.access_token;
}

/**
 * Assina JWT usando RS256
 */
async function signJWT(data, privateKey) {
  // Importar chave privada
  const pemHeader = '-----BEGIN PRIVATE KEY-----';
  const pemFooter = '-----END PRIVATE KEY-----';
  const pemContents = privateKey
    .replace(pemHeader, '')
    .replace(pemFooter, '')
    .replace(/\s/g, '');

  const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

  const key = await crypto.subtle.importKey(
    'pkcs8',
    binaryDer,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  );

  // Assinar
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(data)
  );

  // Converter para base64url
  return btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

/**
 * Busca métricas do Google Analytics 4 Data API
 */
async function fetchGA4Metrics(propertyId, accessToken, startDate, endDate) {
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;

  // Request principal com métricas gerais
  const mainReport = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'bounceRate' },
        { name: 'averageSessionDuration' },
        { name: 'conversions' },
      ],
    }),
  });

  const mainData = await mainReport.json();

  if (!mainReport.ok) {
    throw new Error(`GA4 API error: ${JSON.stringify(mainData)}`);
  }

  // Request para top páginas
  const pagesReport = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10,
    }),
  });

  const pagesData = await pagesReport.json();

  // Request para fontes de tráfego
  const sourcesReport = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'sessionSource' }],
      metrics: [{ name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      limit: 10,
    }),
  });

  const sourcesData = await sourcesReport.json();

  // Processar dados
  const mainMetrics = mainData.rows?.[0]?.metricValues || [];
  const activeUsers = parseInt(mainMetrics[0]?.value || '0');
  const sessions = parseInt(mainMetrics[1]?.value || '0');
  const pageviews = parseInt(mainMetrics[2]?.value || '0');
  const bounceRate = parseFloat(mainMetrics[3]?.value || '0');
  const avgSessionDuration = parseFloat(mainMetrics[4]?.value || '0');
  const conversions = parseInt(mainMetrics[5]?.value || '0');

  const topPages = (pagesData.rows || []).map((row) => ({
    page: row.dimensionValues[0].value,
    views: parseInt(row.metricValues[0].value),
  }));

  const trafficSources = (sourcesData.rows || []).map((row) => ({
    source: row.dimensionValues[0].value,
    users: parseInt(row.metricValues[0].value),
  }));

  return {
    activeUsers,
    sessions,
    pageviews,
    bounceRate: bounceRate * 100, // Converter para porcentagem
    avgSessionDuration: Math.round(avgSessionDuration),
    conversions,
    conversionRate: sessions > 0 ? (conversions / sessions) * 100 : 0,
    topPages,
    trafficSources,
    period: {
      startDate,
      endDate,
    },
  };
}
