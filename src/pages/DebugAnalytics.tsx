import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const DebugAnalytics = () => {
  const { user, loading: authLoading } = useAuth();
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<any>({});

  const testAPI = async (name: string, url: string) => {
    try {
      console.log(`Testing ${name}:`, url);
      const response = await fetch(url);
      const data = await response.json();

      return {
        status: response.ok ? 'success' : 'error',
        statusCode: response.status,
        data: response.ok ? data : null,
        error: !response.ok ? data : null,
      };
    } catch (error) {
      console.error(`Error testing ${name}:`, error);
      return {
        status: 'error',
        statusCode: 0,
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  };

  const runTests = async () => {
    setTesting(true);
    setResults({});

    // Test 1: GA4 API
    const ga4Result = await testAPI('Google Analytics 4', '/api/analytics/ga4?days=7');
    setResults((prev: any) => ({ ...prev, ga4: ga4Result }));

    // Test 2: Google Ads API
    const adsResult = await testAPI('Google Ads', '/api/analytics/google-ads?days=7');
    setResults((prev: any) => ({ ...prev, ads: adsResult }));

    setTesting(false);
  };

  useEffect(() => {
    runTests();
  }, []);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Debug Analytics APIs</h1>
            <p className="text-gray-600 mt-1">Teste das APIs do Google Analytics e Google Ads</p>
          </div>
          <Button
            onClick={runTests}
            disabled={testing}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {testing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Testando...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4 mr-2" />
                Testar Novamente
              </>
            )}
          </Button>
        </div>

        {/* Environment Variables */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Variáveis de Ambiente</h2>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">VITE_API_URL:</span>
              <span className="text-purple-600">
                {import.meta.env.VITE_API_URL || '(vazio - usando URL relativa)'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">VITE_DASHBOARD_PASSWORD:</span>
              <span className="text-purple-600">
                {import.meta.env.VITE_DASHBOARD_PASSWORD ? '***configurado***' : '(não configurado)'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Mode:</span>
              <span className="text-purple-600">{import.meta.env.MODE}</span>
            </div>
          </div>
        </div>

        {/* Google Analytics 4 Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-bold text-gray-900">Google Analytics 4 API</h2>
            {results.ga4?.status === 'success' && (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            {results.ga4?.status === 'error' && (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
            {testing && !results.ga4 && (
              <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
            )}
          </div>

          {results.ga4 && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="font-semibold">Status HTTP:</span>
                <span className={`px-2 py-1 rounded ${
                  results.ga4.statusCode === 200
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {results.ga4.statusCode}
                </span>
              </div>

              <div>
                <span className="font-semibold text-sm block mb-2">Resposta:</span>
                <pre className="bg-gray-50 p-4 rounded-lg text-xs overflow-auto max-h-96">
                  {JSON.stringify(results.ga4.data || results.ga4.error, null, 2)}
                </pre>
              </div>

              {results.ga4.data && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-gray-600">Usuários Ativos</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {results.ga4.data.activeUsers || 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Sessões</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {results.ga4.data.sessions || 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Visualizações</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {results.ga4.data.pageviews || 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Taxa de Rejeição</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {results.ga4.data.bounceRate?.toFixed(1) || 0}%
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Google Ads Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-bold text-gray-900">Google Ads API</h2>
            {results.ads?.status === 'success' && (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            {results.ads?.status === 'error' && (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
            {testing && !results.ads && (
              <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
            )}
          </div>

          {results.ads && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="font-semibold">Status HTTP:</span>
                <span className={`px-2 py-1 rounded ${
                  results.ads.statusCode === 200
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {results.ads.statusCode}
                </span>
              </div>

              <div>
                <span className="font-semibold text-sm block mb-2">Resposta:</span>
                <pre className="bg-gray-50 p-4 rounded-lg text-xs overflow-auto max-h-96">
                  {JSON.stringify(results.ads.data || results.ads.error, null, 2)}
                </pre>
              </div>

              {results.ads.status === 'error' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Nota:</strong> O erro do Google Ads é esperado se você não tiver o Developer Token configurado.
                    O Developer Token é necessário para acessar a API do Google Ads.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-2">Como interpretar os resultados:</h3>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>✅ <strong>Status 200 + dados:</strong> API funcionando perfeitamente!</li>
            <li>❌ <strong>Status 500:</strong> Erro no servidor (verificar credenciais)</li>
            <li>❌ <strong>Status 404:</strong> Endpoint não encontrado (Functions não deployadas)</li>
            <li>⚠️ <strong>Google Ads com erro:</strong> Normal se não tiver Developer Token</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DebugAnalytics;
