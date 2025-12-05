import DashboardLayout from '@/components/DashboardLayout';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useAuth } from '@/hooks/useAuth';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Eye,
  Clock,
  TrendingUp,
  Plus,
  CheckCircle,
  XCircle,
  Loader2,
} from 'lucide-react';

const Dashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const { data: posts, isLoading } = useBlogPosts();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#8B5CF6]" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const publishedPosts = posts?.filter((p) => p.is_published) || [];
  const draftPosts = posts?.filter((p) => !p.is_published) || [];
  const totalViews = posts?.reduce((acc, post) => acc + (post.views || 0), 0) || 0;
  const recentPosts = posts?.slice(0, 5) || [];

  const stats = [
    {
      label: 'Total de Posts',
      value: posts?.length || 0,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      label: 'Publicados',
      value: publishedPosts.length,
      icon: CheckCircle,
      color: 'bg-green-500',
    },
    {
      label: 'Rascunhos',
      value: draftPosts.length,
      icon: XCircle,
      color: 'bg-yellow-500',
    },
    {
      label: 'Total de Visualizações',
      value: totalViews,
      icon: Eye,
      color: 'bg-purple-500',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Bem-vinda de volta, Valéria!</p>
          </div>
          <Link to="/dashboard/posts/new">
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
              <Plus className="h-4 w-4 mr-2" />
              Novo Post
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytics Dashboard */}
        <AnalyticsDashboard />

        {/* Recent Posts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Posts Recentes</h2>
              <Link
                to="/dashboard/posts"
                className="text-sm text-[#8B5CF6] hover:text-[#7C3AED] font-medium"
              >
                Ver todos →
              </Link>
            </div>
          </div>

          {isLoading ? (
            <div className="p-12 flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-[#8B5CF6]" />
            </div>
          ) : recentPosts.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum post ainda</h3>
              <p className="text-gray-600 mb-6">Comece criando seu primeiro post!</p>
              <Link to="/dashboard/posts/new">
                <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Primeiro Post
                </Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/dashboard/posts/${post.id}/edit`}
                  className="block p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-sm text-gray-900 truncate leading-tight">{post.title}</h3>
                        {post.is_published ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Publicado
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Rascunho
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-1 mb-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.reading_time} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views || 0} visualizações
                        </span>
                        {post.category && <span>• {post.category}</span>}
                      </div>
                    </div>
                    {post.cover_image && (
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
