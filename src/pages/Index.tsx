import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviews from '@/components/GoogleReviews';
import heroImage from '@/assets/hero-bg.jpg';
import beneficiosImage from '@/assets/beneficios-focco.jpg';

const Index = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá, seja bem-vindo! Como posso te ajudar?';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const pilaresFocco = [
    {
      letter: 'F',
      title: 'FOCO',
      subtitle: 'Foco na sua vida',
      description: 'Clareza sobre o que realmente importa. Desenvolva a capacidade de identificar e priorizar o que é essencial em sua vida pessoal e profissional, eliminando distrações e direcionando sua energia para seus verdadeiros objetivos.',
      icon: 'fa-bullseye',
      color: 'from-[#2C5F6F] to-[#3A7A8E]'
    },
    {
      letter: 'O',
      title: 'OBSERVAÇÃO',
      subtitle: 'Atenção ao que importa',
      description: 'Observação ao que é importante no seu processo de desenvolvimento pessoal e profissional. Cultive a habilidade de perceber padrões, comportamentos e oportunidades que impulsionam seu crescimento contínuo.',
      icon: 'fa-eye',
      color: 'from-[#3A7A8E] to-[#4A94A8]'
    },
    {
      letter: 'C',
      title: 'CONSCIÊNCIA',
      subtitle: 'Decisões assertivas',
      description: 'Consciência para melhor tomada de decisão. Aprenda a reconhecer seus pensamentos, emoções e reações, permitindo escolhas mais alinhadas com seus valores e objetivos de vida.',
      icon: 'fa-brain',
      color: 'from-[#4A94A8] to-[#5AAEC2]'
    },
    {
      letter: 'C',
      title: 'CLAREZA',
      subtitle: 'Vida com qualidade',
      description: 'Clareza para uma vida com qualidade, saúde e bem-estar. Elimine a confusão mental e emocional, conquistando tranquilidade, propósito e equilíbrio em todas as áreas da sua vida.',
      icon: 'fa-lightbulb',
      color: 'from-[#5AAEC2] to-[#6AC8DC]'
    },
    {
      letter: 'O',
      title: 'OBJETIVO',
      subtitle: 'Conquistas autênticas',
      description: 'Objetivo: Sustentabilidade e autenticidade nas conquistas. Alcance seus objetivos de forma consistente e verdadeira, construindo resultados duradouros que refletem quem você realmente é.',
      icon: 'fa-flag-checkered',
      color: 'from-[#6AC8DC] to-[#7AE2F6]'
    }
  ];

  const servicos = [
    {
      icon: 'fa-om',
      title: 'Sessões de FOCCO',
      description: 'Prática guiada de mindfulness e autorregulação emocional para uma vida mais consciente.',
      duracao: 'Individual',
      link: '/servicos#individual',
    },
    {
      icon: 'fa-brain',
      title: 'Reprogramação Neural',
      description: 'Reestruturação de padrões mentais usando neurociência para bem-estar e performance.',
      duracao: '8-12 sessões',
      link: '/servicos#reprogramacao',
    },
    {
      icon: 'fa-user-cog',
      title: 'Consultoria Comportamental',
      description: 'Análise profunda e estratégias personalizadas para transformação sustentável.',
      duracao: '3-6 meses',
      link: '/servicos#consultoria',
    },
    {
      icon: 'fa-building',
      title: 'Treinamentos Corporativos',
      description: 'Palestras e programas para desenvolvimento de equipes e prevenção de burnout.',
      duracao: 'Personalizado',
      link: '/servicos#corporativo',
    },
  ];

  const beneficios = [
    { icon: 'fa-compass', text: 'Clareza de propósito e direção' },
    { icon: 'fa-heart', text: 'Gestão emocional efetiva' },
    { icon: 'fa-lightbulb', text: 'Autoconhecimento profundo' },
    { icon: 'fa-chart-line', text: 'Alta performance sustentável' },
    { icon: 'fa-shield-halved', text: 'Resiliência mental' },
    { icon: 'fa-handshake', text: 'Relacionamentos saudáveis' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(44, 95, 111, 0.85), rgba(58, 122, 142, 0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom text-center relative z-10 px-4">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-primary-foreground font-heading font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
              Transforme sua vida com o Método FOCCO
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Clareza mental, inteligência emocional e alta performance para uma vida com propósito
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero text-lg px-10 py-6">
                  <i className="fab fa-whatsapp mr-3"></i>
                  Falar no WhatsApp
                </Button>
              </a>
              <Link to="/sobre">
                <Button className="btn-outline bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 py-6">
                  <i className="fas fa-compass mr-3"></i>
                  Conhecer o Método
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Pilares FOCCO Section - Cards Verticais */}
      <section className="section-padding bg-gradient-to-b from-background to-muted">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading mb-4">Os 5 Pilares do Método FOCCO</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              FOCCO é um acrônimo que representa os cinco pilares fundamentais do método
            </p>
          </div>

          {/* Cards Verticais - Scroll Natural */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {pilaresFocco.map((pilar, index) => (
              <div
                key={index}
                className={`card-elevated p-8 md:p-12 bg-gradient-to-br ${pilar.color} text-primary-foreground animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
                  {/* Ícone e Letra */}
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary-foreground/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 shadow-xl">
                      <i className={`fas ${pilar.icon} text-5xl text-primary-foreground`}></i>
                    </div>
                    <div className="text-6xl font-bold font-heading text-primary-foreground/30">
                      {pilar.letter}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-4 text-center md:text-left">
                    <div>
                      <h3 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-primary-foreground">
                        {pilar.title}
                      </h3>
                      <p className="text-lg text-primary-foreground/90 font-semibold">
                        {pilar.subtitle}
                      </p>
                    </div>
                    <p className="text-base text-primary-foreground/95 leading-relaxed">
                      {pilar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4">Nossos Serviços</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções personalizadas para cada etapa da sua jornada
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div key={index} className="card-outline group">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <i className={`fas ${servico.icon} text-3xl text-accent group-hover:text-accent-foreground transition-colors`}></i>
                </div>
                <h3 className="font-heading text-2xl mb-3">{servico.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{servico.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    <i className="far fa-clock mr-2"></i>
                    {servico.duracao}
                  </span>
                  <Link to={servico.link}>
                    <Button className="btn-accent">
                      Saiba Mais
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading mb-6">Benefícios da Transformação</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Desenvolva as habilidades essenciais para uma vida plena e uma carreira de sucesso, com equilíbrio entre realização pessoal e profissional.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-success transition-colors">
                      <i className={`fas ${beneficio.icon} text-success group-hover:text-success-foreground transition-colors`}></i>
                    </div>
                    <span className="font-semibold">{beneficio.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={beneficiosImage}
                alt="Benefícios do Método FOCCO"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações Google Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">O que dizem nossos clientes</h2>
            <p className="text-muted-foreground text-lg">
              Avaliações reais do Google Meu Negócio
            </p>
          </div>
          <GoogleReviews />
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading text-primary-foreground">
              Pronto para começar sua transformação?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Fale conosco no WhatsApp e descubra como o Método FOCCO pode transformar sua vida pessoal e profissional.
            </p>
            <div className="flex justify-center px-4 sm:px-6 mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto max-w-md">
                <Button className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-8 md:px-12 py-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full">
                  <i className="fab fa-whatsapp mr-3"></i>
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
            <p className="text-primary-foreground/70 text-sm mt-4">
              Sem compromisso • Resposta em 24h
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
