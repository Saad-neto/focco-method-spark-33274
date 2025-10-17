import Header from '@/components/Header';
import Footer from '@/components/Footer';
import mentorImage from '@/assets/mentor.jpg';

const Sobre = () => {
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <img 
                src={mentorImage} 
                alt="Mentor do Método FOCCO" 
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

      {/* Fundador Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-center mb-12">Sobre o Fundador</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <img 
                  src={mentorImage} 
                  alt="Fundador do Método FOCCO" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Com mais de 15 anos de experiência em desenvolvimento humano, psicologia aplicada e coaching executivo, o criador do Método FOCCO dedicou sua carreira a entender os mecanismos da transformação pessoal profunda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Formado em Psicologia e com especializações em Neurociência Aplicada, Inteligência Emocional e Mindfulness, combina conhecimento científico com uma abordagem humanizada e prática.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Já trabalhou com executivos, empreendedores e profissionais de diversas áreas, sempre com foco em resultados mensuráveis e transformações sustentáveis.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <i className="fas fa-graduation-cap text-primary"></i>
                    <span>Psicologia</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <i className="fas fa-brain text-primary"></i>
                    <span>Neurociência</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <i className="fas fa-certificate text-primary"></i>
                    <span>15+ anos</span>
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
            <a href="/contato">
              <button className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-12 py-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <i className="fas fa-calendar-check mr-3"></i>
                Agendar Sessão Gratuita
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
