import Header from '@/components/Header';
import Footer from '@/components/Footer';
import valeriaProfile from '@/assets/valeria-profile.jpg';
import valeriaFoto from '@/assets/valeria-foto.png';

const Sobre = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá, seja bem-vindo! Como posso te ajudar?';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const valores = [
    {
      icon: 'fa-heart',
      title: 'Autenticidade',
      description: 'Valorizamos a verdade pessoal e o desenvolvimento do seu eu genuíno.',
    },
    {
      icon: 'fa-users',
      title: 'Empatia',
      description: 'Compreensão profunda e conexão humana em cada interação.',
    },
    {
      icon: 'fa-star',
      title: 'Excelência',
      description: 'Compromisso com a qualidade e resultados transformadores.',
    },
  ];

  const diferenciais = [
    {
      icon: 'fa-chart-line',
      title: 'Abordagem Científica',
      text: 'Metodologia baseada em neurociência, psicologia positiva e inteligência emocional.',
    },
    {
      icon: 'fa-user-check',
      title: 'Personalização Total',
      text: 'Cada jornada é única, com planos adaptados às suas necessidades específicas.',
    },
    {
      icon: 'fa-handshake',
      title: 'Suporte Contínuo',
      text: 'Acompanhamento próximo durante toda sua jornada de transformação.',
    },
    {
      icon: 'fa-trophy',
      title: 'Resultados Mensuráveis',
      text: 'Ferramentas e métricas para acompanhar sua evolução de forma concreta.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-56 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading mb-6">Sobre o Método FOCCO</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Uma jornada de autoconhecimento, clareza mental e transformação profunda para alcançar seu máximo potencial.
            </p>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-6">
              <h2 className="font-heading">Nossa História</h2>
              <p className="text-muted-foreground leading-relaxed">
                O Método FOCCO nasceu da observação de que muitas pessoas talentosas e dedicadas vivem vidas que não refletem seu verdadeiro potencial. Apesar de conquistas externas, sentem-se perdidas, desconectadas de seu propósito e sobrecarregadas emocionalmente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvido ao longo de anos de estudo em neurociência, psicologia positiva e inteligência emocional, o método integra ferramentas práticas com autoconhecimento profundo, criando um caminho claro para a transformação sustentável.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje, já ajudamos centenas de pessoas a encontrarem clareza, propósito e equilíbrio - tanto na vida pessoal quanto profissional.
              </p>
            </div>
            <div className="md:col-span-2 relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <img
                src={valeriaFoto}
                alt="Valéria Dias - Fundadora do Método FOCCO"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-3xl text-primary"></i>
              </div>
              <h3 className="font-heading text-2xl mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Guiar pessoas na jornada de autoconhecimento e transformação, desenvolvendo clareza mental e inteligência emocional para vidas mais plenas e realizadas.
              </p>
            </div>
            
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-3xl text-accent"></i>
              </div>
              <h3 className="font-heading text-2xl mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em desenvolvimento pessoal integrado, reconhecidos pela qualidade das transformações que facilitamos e pelo impacto positivo na vida das pessoas.
              </p>
            </div>
            
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-gem text-3xl text-success"></i>
              </div>
              <h3 className="font-heading text-2xl mb-4">Valores</h3>
              <div className="space-y-3 text-left">
                {valores.map((valor, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <i className={`fas ${valor.icon} text-primary mt-1`}></i>
                    <div>
                      <h4 className="font-semibold">{valor.title}</h4>
                      <p className="text-sm text-muted-foreground">{valor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4">Nossos Diferenciais</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              O que torna o Método FOCCO único e eficaz
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="card-outline group">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <i className={`fas ${diferencial.icon} text-2xl text-primary group-hover:text-primary-foreground transition-colors`}></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">{diferencial.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{diferencial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Sou - Valéria Dias */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-center mb-4">Quem Sou</h2>
            <h3 className="text-2xl text-center text-primary font-semibold mb-12">Valéria Dias</h3>

            <div className="grid md:grid-cols-5 gap-8 items-start mb-12">
              <div className="md:col-span-2 max-w-sm mx-auto">
                <img
                  src={valeriaProfile}
                  alt="Valéria Dias - Idealizadora do Método FOCCO"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="md:col-span-3 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A história de Valéria é sobre <strong>redescoberta e autotransformação</strong>. Depois de 12 anos lidando com dor crônica e um cansaço que parecia interminável, ela encontrou no mindfulness uma verdadeira luz no fim do túnel.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  "Através dessa prática, consegui melhorar minha qualidade de vida de um jeito que nunca imaginei possível", conta Valéria. O impacto foi tão profundo que ela decidiu ir além: se formou <strong>Instrutora de Mindfulness</strong>, tornou-se <strong>Analista Comportamental</strong> e se especializou em <strong>Neurociência e Comportamento</strong>, se tornando terapeuta integrativa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hoje, sua missão é ajudar pessoas a descobrirem os mesmos benefícios que transformaram sua vida. Ela acredita que podemos treinar nossa mente para conseguirmos mais foco, através da observação, cultivando mais consciência e clareza para chegar nos nossos objetivos com saúde e bem-estar, encontrando paz em meio às adversidades.
                </p>
                <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-primary font-semibold text-lg">
                    <i className="fas fa-users mr-2"></i>
                    Mais de 1.000 pessoas impactadas pelo Método FOCCO
                  </p>
                </div>
              </div>
            </div>

            {/* Credenciais */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-heading text-2xl mb-6 text-center">Formação e Credenciais</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-brain text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Idealizadora do Método FOCCO</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvimento Humano baseado em Mindfulness, Neurociência e Comportamento</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-lotus text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Terapeuta Integrativa</h4>
                    <p className="text-sm text-muted-foreground">Abordagem holística e científica</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-certificate text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instrutora de Mindfulness</h4>
                    <p className="text-sm text-muted-foreground">Formada pelo MTI (Mindfulness Trainings International)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-graduation-cap text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pós-Graduação em Neurociência</h4>
                    <p className="text-sm text-muted-foreground">Neurociência e Comportamento pela PUC</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user-md text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Analista Corporal e Comportamental</h4>
                    <p className="text-sm text-muted-foreground">Especialista em padrões comportamentais</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-dna text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reprogramação Biológica</h4>
                    <p className="text-sm text-muted-foreground">Técnicas de reestruturação neural</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-book text-accent text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Autora do Livro</h4>
                    <p className="text-sm text-muted-foreground">"De Bem Com a Dor"</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-microphone text-accent text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Palestrante</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvimento pessoal e corporativo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading text-primary-foreground">
              Comece sua jornada de transformação
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Descubra como o Método FOCCO pode ajudar você a alcançar clareza, propósito e realização.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-12 py-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <i className="fab fa-whatsapp mr-3"></i>
                Falar no WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
