import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { useBlogPost, useRelatedPosts } from '@/hooks/useBlogPosts';
import { Calendar, Clock, Eye, ArrowLeft, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || '');
  const { data: relatedPosts } = useRelatedPosts(slug || '', post?.category);
  const { toast } = useToast();

  const handleShare = async () => {
    const url = window.location.href;
    const title = post?.title || 'Método FOCCO';

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error('Erro ao compartilhar:', err);
      }
    } else {
      // Fallback: copiar para clipboard
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: 'Link copiado!',
          description: 'O link foi copiado para a área de transferência.',
        });
      } catch (err) {
        console.error('Erro ao copiar:', err);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex justify-center items-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#8B5CF6]" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
          <p className="text-gray-600 mb-8">
            O post que você está procurando não existe ou foi removido.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white rounded-full hover:bg-[#7C3AED] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = format(new Date(post.published_at), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Back Button */}
      <div className="pt-32 md:pt-36 pb-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#8B5CF6] transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Link>
        </div>
      </div>

      {/* Cover Image */}
      {post.cover_image && (
        <div className="w-full h-[320px] md:h-[400px] overflow-hidden">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category */}
          {post.category && (
            <div className="pt-8 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B5CF6] text-white text-xs font-semibold uppercase tracking-wide">
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              {post.author_avatar && (
                <img
                  src={post.author_avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#8B5CF6]/20"
                />
              )}
              <div>
                <p className="font-semibold text-sm text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">Autora</p>
              </div>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.reading_time} min
              </span>
              {post.views > 0 && (
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />
                  {post.views}
                </span>
              )}
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 hover:text-[#8B5CF6] transition-colors ml-2"
                aria-label="Compartilhar"
              >
                <Share2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Excerpt */}
          <div className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed italic border-l-4 border-[#8B5CF6] pl-6 py-2">
            {post.excerpt}
          </div>

          {/* Content */}
          <div
            className="prose prose-base max-w-none
                       prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                       prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                       prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:leading-snug
                       prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
                       prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                       prose-a:text-[#8B5CF6] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-ul:my-6 prose-ul:text-gray-700 prose-li:my-2
                       prose-ol:my-6 prose-ol:text-gray-700
                       prose-blockquote:border-l-4 prose-blockquote:border-[#8B5CF6] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-[#8B5CF6] hover:text-white transition-all duration-200 cursor-pointer border border-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Posts Relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende uma sessão de diagnóstico e descubra como o Método FOCCO pode ajudá-lo
          </p>
          <Link
            to="/contato"
            className="inline-block px-8 py-4 bg-white text-[#8B5CF6] rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Agendar Consulta
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
