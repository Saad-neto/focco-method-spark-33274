// Cloudflare Pages Functions Middleware
// Serve index.html for all routes (SPA routing)

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  // Bypass para arquivos estáticos (assets)
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/_app/') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.ttf') ||
    url.pathname.endsWith('.eot') ||
    url.pathname.endsWith('.json') ||
    url.pathname.endsWith('.xml') ||
    url.pathname.endsWith('.txt')
  ) {
    return next();
  }

  // Para todas as outras rotas, tenta servir normalmente
  const response = await next();

  // Se retornar 404, serve o index.html (React Router cuida do resto)
  if (response.status === 404) {
    // Busca o index.html
    const indexUrl = new URL('/', url.origin);
    const indexRequest = new Request(indexUrl, request);
    return fetch(indexRequest);
  }

  return response;
}
