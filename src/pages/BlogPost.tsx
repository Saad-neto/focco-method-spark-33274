import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { useBlogPost, useRelatedPosts } from '@/hooks/useBlogPosts';
import { Calendar, Clock, Eye, ArrowLeft, Share2, ChevronUp, ThumbsUp, ThumbsDown, Send, Home, ChevronRight, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = useBlogPost(slug || '');
  const { data: relatedPosts } = useRelatedPosts(slug || '', post?.category);
  const { toast } = useToast();

  // Estados para as novas funcionalidades
  const [readProgress, setReadProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadProgress(Math.min(scrollPercentage, 100));

      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar se o conteúdo é Markdown ou HTML
  const isMarkdown = useMemo(() => {
    if (!post?.content) return false;
    // Se contém ## ou ### no início de linhas, é Markdown
    return /^#{2,3}\s+.+$/m.test(post.content);
  }, [post?.content]);

  // Extrair headings do conteúdo para tabela de conteúdo
  const tableOfContents = useMemo(() => {
    if (!post?.content) return [];

    if (isMarkdown) {
      // Extrair de Markdown
      const headingRegex = /^(#{2,3})\s+(.+)$/gm;
      const headings: { level: number; text: string; id: string }[] = [];
      let match;

      while ((match = headingRegex.exec(post.content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        headings.push({ level, text, id });
      }

      return headings;
    } else {
      // Extrair de HTML
      const headingRegex = /<h([23])(?:\s+id="([^"]*)")?[^>]*>([^<]+)<\/h\1>/gi;
      const headings: { level: number; text: string; id: string }[] = [];
      let match;

      while ((match = headingRegex.exec(post.content)) !== null) {
        const level = parseInt(match[1]);
        const text = match[3].trim();
        const id = match[2] || text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        headings.push({ level, text, id });
      }

      return headings;
    }
  }, [post?.content, isMarkdown]);

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

  const handleSocialShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || 'Método FOCCO');

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    toast({
      title: type === 'helpful' ? 'Obrigado!' : 'Feedback recebido',
      description: type === 'helpful'
        ? 'Ficamos felizes que este conteúdo foi útil para você!'
        : 'Vamos trabalhar para melhorar nosso conteúdo.',
    });
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

  // Schema.org JSON-LD
  const schemaData = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.cover_image,
    "datePublished": post.published_at,
    "dateModified": post.updated_at || post.published_at,
    "author": {
      "@type": "Person",
      "name": post.author,
      "image": post.author_avatar,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Método FOCCO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://focconavida.com.br/favicon.png"
      }
    },
    "description": post.excerpt,
    "articleBody": post.content,
    "keywords": post.tags?.join(', '),
  } : null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      {/* Barra de Progresso de Leitura */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <Header />

      {/* Breadcrumbs */}
      <div className="pt-32 md:pt-36 pb-2 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-[#8B5CF6] transition-colors flex items-center gap-1">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/blog" className="hover:text-[#8B5CF6] transition-colors">
              Blog
            </Link>
            {post?.category && (
              <>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-gray-400">{post.category}</span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Back Button */}
      <div className="pb-6 px-4">
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
              <img
                src={post.author_avatar || '/assets/valeria-foto-optimized.png'}
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#8B5CF6]/20"
                onError={(e) => {
                  e.currentTarget.src = '/assets/valeria-foto-optimized.png';
                }}
              />
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
          <div className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic border-l-4 border-[#8B5CF6] pl-6 py-2">
            {post.excerpt}
          </div>

          {/* Tabela de Conteúdo */}
          {tableOfContents.length > 0 && (
            <div className="mb-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Neste Artigo
              </h2>
              <nav className="space-y-2">
                {tableOfContents.map((heading, index) => (
                  <a
                    key={index}
                    href={`#${heading.id}`}
                    className={`block text-sm hover:text-[#8B5CF6] transition-colors ${
                      heading.level === 3 ? 'pl-4' : ''
                    } ${
                      activeSection === heading.id ? 'text-[#8B5CF6] font-semibold' : 'text-gray-700'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(heading.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Botões de Compartilhamento Social */}
          <div className="mb-8 flex flex-wrap items-center gap-3 pb-8 border-b border-gray-200">
            <span className="text-sm font-semibold text-gray-700">Compartilhar:</span>
            <button
              onClick={() => handleSocialShare('facebook')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1877F2] text-white hover:bg-[#0c63d4] transition-colors text-sm"
              aria-label="Compartilhar no Facebook"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </button>
            <button
              onClick={() => handleSocialShare('twitter')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1DA1F2] text-white hover:bg-[#0d8bd9] transition-colors text-sm"
              aria-label="Compartilhar no Twitter"
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </button>
            <button
              onClick={() => handleSocialShare('linkedin')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors text-sm"
              aria-label="Compartilhar no LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </button>
            <button
              onClick={() => handleSocialShare('whatsapp')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#1da851] transition-colors text-sm"
              aria-label="Compartilhar no WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </button>
          </div>

          {/* Content - Suporta Markdown e HTML */}
          <div className="prose prose-base max-w-none
                       prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                       prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-h2:scroll-mt-24
                       prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:leading-snug prose-h3:scroll-mt-24
                       prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
                       prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                       prose-a:text-[#8B5CF6] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-ul:my-6 prose-ul:text-gray-700 prose-li:my-2
                       prose-ol:my-6 prose-ol:text-gray-700
                       prose-blockquote:border-l-4 prose-blockquote:border-[#8B5CF6] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                       prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8">
            {isMarkdown ? (
              <ReactMarkdown
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children, ...props }) => {
                    const text = children?.toString() || '';
                    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                    return <h2 id={id} {...props}>{children}</h2>;
                  },
                  h3: ({ children, ...props }) => {
                    const text = children?.toString() || '';
                    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                    return <h3 id={id} {...props}>{children}</h3>;
                  },
                  img: ({ ...props }) => (
                    <img loading="lazy" {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </div>

          {/* CTA Newsletter no Meio do Post */}
          <div className="my-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#8B5CF6] rounded-full mb-4">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                💜 Gostando do conteúdo?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Receba insights exclusivos sobre desenvolvimento pessoal, inteligência emocional e alta performance diretamente no seu email. Sem spam, apenas conteúdo de valor.
              </p>
              <a
                href="https://wa.me/5511976830647?text=Olá!%20Gostaria%20de%20receber%20a%20newsletter%20do%20Método%20FOCCO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white rounded-full font-semibold hover:bg-[#7C3AED] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Quero Receber Conteúdos
              </a>
            </div>
          </div>

          {/* Seção de Feedback */}
          <div className="mt-16 pt-8 border-t border-gray-200 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Este conteúdo foi útil para você?
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Seu feedback nos ajuda a criar conteúdos cada vez melhores!
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleFeedback('helpful')}
                  disabled={feedback !== null}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    feedback === 'helpful'
                      ? 'bg-[#8B5CF6] text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#8B5CF6] hover:text-[#8B5CF6]'
                  } ${feedback !== null && feedback !== 'helpful' ? 'opacity-50' : ''}`}
                >
                  <ThumbsUp className="h-5 w-5" />
                  {feedback === 'helpful' ? 'Obrigado!' : 'Sim, foi útil'}
                </button>
                <button
                  onClick={() => handleFeedback('not-helpful')}
                  disabled={feedback !== null}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    feedback === 'not-helpful'
                      ? 'bg-gray-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                  } ${feedback !== null && feedback !== 'not-helpful' ? 'opacity-50' : ''}`}
                >
                  <ThumbsDown className="h-5 w-5" />
                  {feedback === 'not-helpful' ? 'Feedback recebido' : 'Precisa melhorar'}
                </button>
              </div>
            </div>
          </div>

          {/* Tags Clicáveis */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-[#8B5CF6] hover:text-white transition-all duration-200 border border-gray-200"
                  >
                    #{tag}
                  </Link>
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

      {/* Botão Floating Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-[#8B5CF6] text-white rounded-full shadow-lg hover:bg-[#7C3AED] transition-all duration-300 hover:scale-110 z-40"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default BlogPost;
