import DashboardLayout from '@/components/DashboardLayout';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useDeletePost, useTogglePublish } from '@/hooks/useBlogAdmin';
import { useAuth } from '@/hooks/useAuth';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Clock,
  Calendar,
  Loader2,
  Search,
} from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';

const DashboardPosts = () => {
  const { user, loading: authLoading } = useAuth();
  const { data: posts, isLoading } = useBlogPosts();
  const deletePost = useDeletePost();
  const togglePublish = useTogglePublish();

  const [searchTerm, setSearchTerm] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

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

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (postId: string) => {
    setPostToDelete(postId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (postToDelete) {
      deletePost.mutate(postToDelete);
      setDeleteDialogOpen(false);
      setPostToDelete(null);
    }
  };

  const handleTogglePublish = (postId: string, currentStatus: boolean) => {
    togglePublish.mutate({ id: postId, isPublished: !currentStatus });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gerenciar Posts</h1>
            <p className="text-gray-600 mt-1">
              {posts?.length || 0} post{posts?.length !== 1 ? 's' : ''} no total
            </p>
          </div>
          <Link to="/dashboard/posts/new">
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
              <Plus className="h-4 w-4 mr-2" />
              Novo Post
            </Button>
          </Link>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Posts List */}
        {isLoading ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#8B5CF6]" />
          </div>
        ) : filteredPosts && filteredPosts.length > 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Categoria
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">
                      Views
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-4">
                          {post.cover_image && (
                            <img
                              src={post.cover_image}
                              alt={post.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                          )}
                          <div className="min-w-0">
                            <h3 className="font-medium text-sm text-gray-900 mb-1">{post.title}</h3>
                            <p className="text-xs text-gray-600 line-clamp-1 mb-1">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar className="h-3 w-3" />
                              {post.published_at
                                ? format(new Date(post.published_at), 'dd/MM/yyyy', {
                                    locale: ptBR,
                                  })
                                : 'Não publicado'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        {post.is_published ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Publicado
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Rascunho
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 hidden lg:table-cell">
                        {post.category || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 hidden xl:table-cell">
                        {post.views || 0}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleTogglePublish(post.id, post.is_published)}
                            title={post.is_published ? 'Despublicar' : 'Publicar'}
                          >
                            {post.is_published ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                          <Link to={`/dashboard/posts/${post.id}/edit`}>
                            <Button size="sm" variant="ghost" title="Editar">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteClick(post.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            title="Deletar"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm ? 'Nenhum post encontrado' : 'Nenhum post ainda'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm
                ? 'Tente buscar por outro termo'
                : 'Comece criando seu primeiro post!'}
            </p>
            {!searchTerm && (
              <Link to="/dashboard/posts/new">
                <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Primeiro Post
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja deletar este post? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              Deletar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardLayout>
  );
};

export default DashboardPosts;
