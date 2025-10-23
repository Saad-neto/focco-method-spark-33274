import { useEffect, useState, useCallback, useRef } from 'react';

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // 3 colunas no desktop
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Place ID do Google (extraído do link)
  const placeId = '0x9bd94f894260dd:0xe9a65081321b28f7';

  // Link do perfil do Google
  const googleProfileLink = 'https://maps.app.goo.gl/6mLXML44sgmziWrL8';

  useEffect(() => {
    // Por enquanto, vamos usar reviews estáticas até configurar a API
    // Essas serão substituídas por reviews reais da API do Google
    // APENAS avaliações com 4+ estrelas
    const mockReviews: Review[] = [
      {
        author: "Maria Silva",
        rating: 5,
        text: "Experiência transformadora! A Valéria é uma profissional excepcional que me ajudou a encontrar clareza e propósito. O Método FOCCO realmente funciona!",
        time: "2 semanas atrás"
      },
      {
        author: "João Santos",
        rating: 5,
        text: "O Método FOCCO mudou minha vida profissional. Consegui organizar minhas prioridades e hoje trabalho com muito mais foco e produtividade.",
        time: "1 mês atrás"
      },
      {
        author: "Ana Paula Costa",
        rating: 5,
        text: "Excelente trabalho! Consegui clareza sobre minha carreira e aprendi técnicas práticas para gerenciar meu estresse. Recomendo muito!",
        time: "2 meses atrás"
      },
      {
        author: "Carlos Oliveira",
        rating: 5,
        text: "Profissional incrível! As sessões me ajudaram a desenvolver inteligência emocional e melhorar meus relacionamentos no trabalho.",
        time: "3 meses atrás"
      },
      {
        author: "Fernanda Lima",
        rating: 4,
        text: "Muito bom! A abordagem é prática e os resultados aparecem rapidamente. Estou mais confiante e focada nos meus objetivos.",
        time: "1 mês atrás"
      },
      {
        author: "Ricardo Mendes",
        rating: 5,
        text: "Transformação real! Aprendi a dizer não sem culpa e a estabelecer limites saudáveis. Minha qualidade de vida melhorou muito.",
        time: "2 semanas atrás"
      }
    ];

    // Simular loading
    setTimeout(() => {
      // Filtrar apenas avaliações 4+ estrelas
      const filteredReviews = mockReviews.filter(review => review.rating >= 4);
      setReviews(filteredReviews);
      setRating(4.9);
      setTotalReviews(filteredReviews.length);
      setLoading(false);
    }, 500);
  }, []);

  // Detectar tamanho da tela e ajustar itens por visualização
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 coluna
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 colunas
      } else {
        setItemsPerView(3); // Desktop: 3 colunas
      }
    };

    handleResize(); // Executar na montagem
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcular número máximo de slides baseado no itemsPerView
  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  // Navegação do carrossel
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (reviews.length === 0 || isPaused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a cada 5 segundos

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [reviews.length, isPaused, nextSlide]);

  // Suporte a touch/swipe para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400"></i>);
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="text-muted-foreground mt-4">Carregando avaliações...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header com nota geral */}
      <div className="text-center">
        <a
          href={googleProfileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-6"
            />
            <span className="text-2xl font-bold text-gray-700">Avaliações</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl font-bold text-primary">{rating.toFixed(1)}</span>
            <div className="flex gap-1">
              {renderStars(rating)}
            </div>
          </div>
        </a>
      </div>

      {/* Carrossel de reviews */}
      <div className="relative px-12">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused(!isPaused)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `calc(${100 / itemsPerView}% - 1rem)` }}
              >
                <div className="card-elevated hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user text-primary text-lg"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base truncate">{review.author}</h4>
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-[100px]">
                    "{review.text}"
                  </p>
                  <p className="text-xs text-muted-foreground">{review.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setas de navegação */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Avaliações anteriores"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        {currentIndex < maxIndex && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Próximas avaliações"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        )}

        {/* Indicadores (dots) */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para grupo ${index + 1}`}
            />
          ))}
        </div>

        {/* Indicador de pausa/play */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <i className={`fas ${isPaused ? 'fa-pause' : 'fa-play'} text-xs`}></i>
            <span>{isPaused ? 'Pausado' : 'Reproduzindo automaticamente'}</span>
          </div>
        </div>
      </div>

      {/* Link para ver todas */}
      <div className="text-center pt-4">
        <a
          href={googleProfileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          Ver todas as avaliações no Google
          <i className="fas fa-external-link-alt text-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;
