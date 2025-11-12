/**
 * Cloudflare Worker: Google Ads API
 *
 * Busca métricas do Google Ads de forma segura
 * Endpoint: /api/analytics/google-ads
 */

export const onRequest = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { searchParams } = new URL(context.request.url);
    const days = parseInt(searchParams.get('days') || '30');

    // Calcular datas
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const startDateStr = formatDate(startDate);
    const endDateStr = formatDate(endDate);

    // Validar autenticação
    const authHeader = context.request.headers.get('Authorization');
    const expectedAuth = context.env.DASHBOARD_PASSWORD;

    if (expectedAuth && authHeader !== `Bearer ${expectedAuth}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Obter access token
    const accessToken = await getGoogleAdsAccessToken(
      context.env.GOOGLE_ADS_CLIENT_ID,
      context.env.GOOGLE_ADS_CLIENT_SECRET,
      context.env.GOOGLE_ADS_REFRESH_TOKEN
    );

    // Buscar métricas
    const metrics = await fetchGoogleAdsMetrics(
      context.env.GOOGLE_ADS_CUSTOMER_ID,
      context.env.GOOGLE_ADS_DEVELOPER_TOKEN,
      accessToken,
      startDateStr,
      endDateStr
    );

    return new Response(JSON.stringify(metrics), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // Cache 5 minutos
      },
    });
  } catch (error) {
    console.error('Google Ads API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch Google Ads metrics',
        message: errorMessage,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

/**
 * Obtém access token usando refresh token
 */
async function getGoogleAdsAccessToken(clientId, clientSecret, refreshToken) {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Token error: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

/**
 * Busca métricas do Google Ads usando Google Ads API
 */
async function fetchGoogleAdsMetrics(customerId, developerToken, accessToken, startDate, endDate) {
  const customerIdClean = customerId.replace(/-/g, '');

  // Query 1: Métricas gerais da conta
  const mainQuery = `
    SELECT
      metrics.impressions,
      metrics.clicks,
      metrics.ctr,
      metrics.cost_micros,
      metrics.conversions,
      metrics.conversions_from_interactions_rate
    FROM customer
    WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
  `;

  const mainReport = await executeGoogleAdsQuery(
    customerIdClean,
    developerToken,
    accessToken,
    mainQuery
  );

  // Query 2: Performance por campanha
  const campaignQuery = `
    SELECT
      campaign.name,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions
    FROM campaign
    WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
      AND campaign.status = 'ENABLED'
    ORDER BY metrics.impressions DESC
    LIMIT 10
  `;

  const campaignReport = await executeGoogleAdsQuery(
    customerIdClean,
    developerToken,
    accessToken,
    campaignQuery
  );

  // Query 3: Performance diária
  const dailyQuery = `
    SELECT
      segments.date,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions
    FROM customer
    WHERE segments.date BETWEEN '${startDate}' AND '${endDate}'
    ORDER BY segments.date DESC
  `;

  const dailyReport = await executeGoogleAdsQuery(
    customerIdClean,
    developerToken,
    accessToken,
    dailyQuery
  );

  // Processar dados principais
  const mainData = mainReport[0] || {};
  const impressions = parseInt(mainData.metrics?.impressions || '0');
  const clicks = parseInt(mainData.metrics?.clicks || '0');
  const ctr = parseFloat(mainData.metrics?.ctr || '0') * 100;
  const costMicros = parseInt(mainData.metrics?.costMicros || '0');
  const cost = costMicros / 1_000_000; // Converter de micros para BRL
  const conversions = parseFloat(mainData.metrics?.conversions || '0');
  const conversionRate = parseFloat(mainData.metrics?.conversionsFromInteractionsRate || '0') * 100;
  const cpc = clicks > 0 ? cost / clicks : 0;
  const cpa = conversions > 0 ? cost / conversions : 0;

  // Processar performance por campanha
  const campaignPerformance = campaignReport.map((row) => ({
    campaign: row.campaign?.name || 'Unknown',
    impressions: parseInt(row.metrics?.impressions || '0'),
    clicks: parseInt(row.metrics?.clicks || '0'),
    cost: parseInt(row.metrics?.costMicros || '0') / 1_000_000,
    conversions: parseFloat(row.metrics?.conversions || '0'),
  }));

  // Processar performance diária
  const dailyPerformance = dailyReport.map((row) => ({
    date: row.segments?.date || '',
    impressions: parseInt(row.metrics?.impressions || '0'),
    clicks: parseInt(row.metrics?.clicks || '0'),
    cost: parseInt(row.metrics?.costMicros || '0') / 1_000_000,
    conversions: parseFloat(row.metrics?.conversions || '0'),
  }));

  return {
    impressions,
    clicks,
    ctr,
    cost,
    conversions,
    conversionRate,
    cpc,
    cpa,
    campaignPerformance,
    dailyPerformance,
    period: {
      startDate,
      endDate,
    },
  };
}

/**
 * Executa query no Google Ads API
 */
async function executeGoogleAdsQuery(customerId, developerToken, accessToken, query) {
  const url = `https://googleads.googleapis.com/v16/customers/${customerId}/googleAds:searchStream`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'developer-token': developerToken,
      'login-customer-id': customerId,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Ads API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.results || [];
}

/**
 * Formata data para YYYY-MM-DD
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
