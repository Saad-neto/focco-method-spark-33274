import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-bg.jpg';
import clarityImage from '@/assets/clarity-illustration.jpg';

const Index = () => {
  const pilares = [
    {
      icon: 'fa-bullseye',
      title: 'Foco',
      description: 'Clareza sobre suas prioridades e objetivos, eliminando distrações e desenvolvendo concentração profunda.',
    },
    {
      icon: 'fa-brain',
      title: 'Consciência',
      description: 'Autoconhecimento profundo através da inteligência emocional e compreensão dos seus padrões mentais.',
    },
    {
      icon: 'fa-rocket',
      title: 'Transformação',
      description: 'Mudança real e sustentável através de ações consistentes alinhadas ao seu propósito autêntico.',
    },
  ];

  const servicos = [
    {
      icon: 'fa-user',
      title: 'Mentoria Individual',
      description: 'Jornada personalizada de autoconhecimento e desenvolvimento com sessões semanais de 1h30.',
      duracao: 'Sessões semanais',
      link: '/servicos#individual',
    },
    {
      icon: 'fa-users',
      title: 'Workshop em Grupo',
      description: 'Experiências transformadoras em grupo com práticas de inteligência emocional e clareza mental.',
      duracao: '3 horas mensais',
      link: '/servicos#grupo',
    },
    {
      icon: 'fa-building',
      title: 'Programa Corporativo',
      description: 'Desenvolvimento de lideranças e equipes de alta performance com programas personalizados.',
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

  const depoimentos = [
    {
      nome: 'Ana Silva',
      profissao: 'Executiva de Marketing',
      texto: 'O Método FOCCO transformou completamente minha visão sobre liderança. Aprendi a equilibrar alta performance com bem-estar emocional.',
      avatar: 'AS',
    },
    {
      nome: 'Carlos Mendes',
      profissao: 'Empreendedor',
      texto: 'Encontrei clareza e propósito que faltavam no meu negócio. As ferramentas são práticas e os resultados, concretos.',
      avatar: 'CM',
    },
    {
      nome: 'Marina Costa',
      profissao: 'Psicóloga',
      texto: 'Uma abordagem inovadora que integra autoconhecimento com ação. Recomendo para quem busca transformação real.',
      avatar: 'MC',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(44, 95, 111, 0.85), rgba(58, 122, 142, 0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom text-center relative z-10 px-4">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-primary-foreground font-heading font-bold leading-tight">
              Transforme sua vida com o Método FOCCO
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Clareza mental, inteligência emocional e alta performance para uma vida com propósito
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contato">
                <Button className="btn-hero text-lg px-10 py-6">
                  <i className="fas fa-calendar-check mr-3"></i>
                  Agendar Sessão Gratuita
                </Button>
              </Link>
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

      {/* Pilares Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading mb-4">Os 3 Pilares do Método FOCCO</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma abordagem integrada para transformação pessoal e profissional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pilares.map((pilar, index) => (
              <div 
                key={index} 
                className="card-elevated text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <i className={`fas ${pilar.icon} text-4xl text-primary group-hover:text-primary-foreground transition-colors`}></i>
                </div>
                <h3 className="font-heading text-2xl mb-4 text-gradient">{pilar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pilar.description}</p>
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
                src={clarityImage} 
                alt="Clareza mental e transformação" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4">O que dizem nossos clientes</h2>
            <p className="text-muted-foreground text-lg">
              Transformações reais de pessoas reais
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="card-elevated">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {depoimento.avatar}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold">{depoimento.nome}</h4>
                    <p className="text-sm text-muted-foreground">{depoimento.profissao}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{depoimento.texto}"
                </p>
                <div className="flex gap-1 mt-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
              Agende uma sessão gratuita e descubra como o Método FOCCO pode transformar sua vida pessoal e profissional.
            </p>
            <Link to="/contato">
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-12 py-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <i className="fas fa-calendar-check mr-3"></i>
                Agende sua Sessão Gratuita
              </Button>
            </Link>
            <p className="text-primary-foreground/70 text-sm mt-4">
              Sem compromisso • Primeira sessão gratuita • Resposta em 24h
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
