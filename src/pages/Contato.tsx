import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleMapsLocation from '@/components/GoogleMapsLocation';

const Contato = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá, seja bem-vindo! Como posso te ajudar?';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const contatosDiretos = [
    {
      icon: 'fa-envelope',
      titulo: 'E-mail',
      valor: 'focconavida@gmail.com',
      link: 'mailto:focconavida@gmail.com',
      descricao: 'Envie sua mensagem por e-mail',
    },
    {
      icon: 'fa-whatsapp',
      titulo: 'WhatsApp',
      valor: '(83) 99378-7450',
      link: whatsappLink,
      descricao: 'Fale conosco diretamente',
    },
    {
      icon: 'fa-instagram',
      titulo: 'Instagram',
      valor: '@focconavida',
      link: '#',
      descricao: 'Siga-nos nas redes sociais',
    },
  ];

  const beneficios = [
    {
      icon: 'fa-bolt',
      titulo: 'Resposta Rápida',
      descricao: 'Retornamos seu contato em até 24 horas',
    },
    {
      icon: 'fa-calendar-check',
      titulo: 'Agendamento Flexível',
      descricao: 'Horários que se adaptam à sua rotina',
    },
    {
      icon: 'fa-lock',
      titulo: 'Confidencialidade',
      descricao: 'Suas informações são 100% seguras',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Agende uma Sessão */}
      <section className="pt-56 pb-24 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Emoji/Icon */}
            <div className="mb-6">
              <span className="text-6xl">😰</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tá estressado?<br />Se sente ansioso?
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Agende uma sessão e <strong className="text-yellow-300">SINTA a diferença</strong><br />
              já na primeira conversa.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <a
                href="https://lastlink.com/p/C6DC1AE9C/checkout-payment/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white text-purple-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/50 hover:scale-105 transform">
                  <i className="fas fa-calendar-check mr-3"></i>
                  Quero Agendar Agora
                </button>
              </a>
            </div>

            {/* Benefícios */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-yellow-300"></i>
                <span>Primeira sessão focada em VOCÊ</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-yellow-300"></i>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-yellow-300"></i>
                <span>Sentir alívio é possível</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ondas decorativas */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Benefícios de Entrar em Contato */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4">Por Que Entrar em Contato?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra como o Método FOCCO pode transformar sua vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="card-outline text-center group hover:border-accent transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <i className={`fas ${beneficio.icon} text-2xl text-primary group-hover:text-accent-foreground transition-colors`}></i>
                </div>
                <h3 className="font-heading text-lg mb-2">{beneficio.titulo}</h3>
                <p className="text-muted-foreground text-sm">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canais de Contato Direto */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Outros Canais de Contato</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o canal mais conveniente para você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contatosDiretos.map((contato, index) => (
              <a
                key={index}
                href={contato.link}
                target={contato.link.startsWith('http') ? '_blank' : undefined}
                rel={contato.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-elevated group hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <i className={`fab ${contato.icon} text-3xl text-primary group-hover:text-primary-foreground transition-colors`}></i>
                  </div>
                  <h3 className="font-heading text-xl mb-2 group-hover:text-accent transition-colors">
                    {contato.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{contato.descricao}</p>
                  <p className="font-semibold text-primary">{contato.valor}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Localização Google Maps */}
      <GoogleMapsLocation />

      {/* FAQ Rápido */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-center mb-12">Perguntas Frequentes</h2>

            <div className="space-y-6">
              <div className="card-outline">
                <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                  <i className="fas fa-question-circle text-accent"></i>
                  Quanto tempo leva para ter resultados?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed ml-7">
                  Muitos clientes relatam mudanças significativas já nas primeiras semanas.
                  No entanto, o processo de transformação é individual e depende do seu comprometimento.
                </p>
              </div>

              <div className="card-outline">
                <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                  <i className="fas fa-question-circle text-accent"></i>
                  Qual a diferença entre mentoria individual e workshops?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed ml-7">
                  A mentoria individual é personalizada e focada 100% em você. Os workshops são
                  em grupo e promovem troca de experiências enquanto todos aprendem juntos.
                </p>
              </div>

              <div className="card-outline">
                <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                  <i className="fas fa-question-circle text-accent"></i>
                  As sessões são online ou presenciais?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed ml-7">
                  Oferecemos as duas modalidades! Você escolhe o formato que melhor se adapta à sua rotina.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-outline">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Fale Conosco Agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
