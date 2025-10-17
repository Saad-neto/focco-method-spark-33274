import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Servicos = () => {
  const servicos = [
    {
      id: 'individual',
      icon: 'fa-user',
      title: 'Mentoria Individual',
      subtitle: 'Transformação personalizada e profunda',
      descricao: [
        'A Mentoria Individual é uma jornada profundamente personalizada de autoconhecimento e desenvolvimento. Através de sessões semanais estruturadas, exploramos suas crenças limitantes, padrões comportamentais e objetivos mais profundos.',
        'Utilizamos ferramentas de psicologia positiva, neurociência e inteligência emocional para criar mudanças reais e duradouras. Cada sessão é cuidadosamente planejada para seu momento atual, respeitando seu ritmo e seus desafios únicos.',
        'O processo inclui avaliações periódicas, exercícios práticos entre sessões e material de apoio personalizado. Você terá suporte contínuo para integrar os aprendizados no seu dia a dia.',
      ],
      beneficios: [
        'Autoconhecimento profundo e clareza sobre propósito de vida',
        'Gestão efetiva de emoções e desenvolvimento de resiliência',
        'Identificação e transformação de crenças limitantes',
        'Desenvolvimento de alta performance sustentável',
        'Melhoria significativa nos relacionamentos pessoais e profissionais',
        'Plano de ação personalizado com metas claras e alcançáveis',
      ],
      detalhes: {
        duracao: '1h30 por sessão',
        frequencia: 'Semanal ou quinzenal',
        investimento: 'A partir de R$ 500/sessão',
        paraQuem: 'Profissionais, empreendedores e líderes que buscam transformação profunda e resultados sustentáveis',
      },
    },
    {
      id: 'grupo',
      icon: 'fa-users',
      title: 'Workshop em Grupo',
      subtitle: 'Experiências transformadoras coletivas',
      descricao: [
        'Os Workshops em Grupo são experiências intensivas e transformadoras, onde você compartilha aprendizados com outras pessoas em jornadas similares. O ambiente de grupo potencializa insights e cria conexões significativas.',
        'Cada workshop tem duração de 3 horas e foca em temas específicos como inteligência emocional, clareza de propósito, gestão do estresse ou desenvolvimento de liderança autêntica.',
        'Utilizamos dinâmicas práticas, exercícios experienciais e ferramentas que você pode aplicar imediatamente. O formato combina teoria fundamentada com muita prática e reflexão.',
      ],
      beneficios: [
        'Aprendizado acelerado através da troca de experiências',
        'Desenvolvimento de habilidades socioemocionais',
        'Networking com pessoas em jornadas similares',
        'Ferramentas práticas aplicáveis no dia seguinte',
        'Ambiente seguro para experimentação e vulnerabilidade',
        'Investimento mais acessível que mentorias individuais',
      ],
      detalhes: {
        duracao: '3 horas por workshop',
        frequencia: 'Mensal (temas rotativos)',
        investimento: 'R$ 350 por workshop',
        paraQuem: 'Pessoas buscando crescimento pessoal em ambiente de apoio mútuo e aprendizado coletivo',
      },
    },
    {
      id: 'corporativo',
      icon: 'fa-building',
      title: 'Programa Corporativo',
      subtitle: 'Desenvolvimento de equipes e lideranças',
      descricao: [
        'O Programa Corporativo é desenhado para organizações que valorizam o desenvolvimento humano como estratégia de alta performance. Trabalhamos com lideranças e equipes para criar culturas organizacionais mais saudáveis e produtivas.',
        'Cada programa é totalmente personalizado de acordo com os desafios e objetivos da organização. Pode incluir mentorias executivas, workshops para equipes, palestras, diagnósticos organizacionais e programas de desenvolvimento contínuo.',
        'Utilizamos metodologias comprovadas de desenvolvimento de liderança, inteligência emocional organizacional, comunicação não-violenta e gestão de mudanças. Todos os programas incluem métricas de acompanhamento e relatórios de evolução.',
      ],
      beneficios: [
        'Desenvolvimento de lideranças autênticas e inspiradoras',
        'Melhoria significativa no clima organizacional',
        'Redução de turnover e aumento de engajamento',
        'Equipes mais resilientes e adaptáveis a mudanças',
        'Comunicação mais efetiva entre áreas e níveis hierárquicos',
        'Cultura organizacional alinhada aos valores da empresa',
      ],
      detalhes: {
        duracao: 'Personalizado (3 a 12 meses)',
        frequencia: 'Definida conforme necessidade',
        investimento: 'Sob consulta (proposta customizada)',
        paraQuem: 'Empresas comprometidas com desenvolvimento humano e que buscam alta performance sustentável',
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading mb-6">Nossos Serviços</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Soluções personalizadas para cada etapa da sua jornada de transformação
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      {servicos.map((servico, index) => (
        <section 
          key={servico.id} 
          id={servico.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
        >
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              {/* Header do Serviço */}
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`fas ${servico.icon} text-4xl text-primary`}></i>
                </div>
                <h2 className="font-heading mb-3">{servico.title}</h2>
                <p className="text-xl text-accent font-semibold">{servico.subtitle}</p>
              </div>

              {/* Descrição */}
              <div className="space-y-4 mb-12">
                {servico.descricao.map((paragrafo, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                    {paragrafo}
                  </p>
                ))}
              </div>

              {/* Benefícios */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl mb-6">Benefícios</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {servico.beneficios.map((beneficio, i) => (
                    <div key={i} className="flex items-start gap-3 card-outline p-4">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fas fa-check text-success-foreground text-xs"></i>
                      </div>
                      <span className="text-muted-foreground">{beneficio}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detalhes e Investimento */}
              <div className="card-elevated bg-primary/5">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-heading text-lg mb-4">Detalhes do Programa</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <i className="fas fa-clock text-primary mt-1"></i>
                        <div>
                          <span className="font-semibold">Duração: </span>
                          <span className="text-muted-foreground">{servico.detalhes.duracao}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-calendar-alt text-primary mt-1"></i>
                        <div>
                          <span className="font-semibold">Frequência: </span>
                          <span className="text-muted-foreground">{servico.detalhes.frequencia}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="fas fa-dollar-sign text-primary mt-1"></i>
                        <div>
                          <span className="font-semibold">Investimento: </span>
                          <span className="text-muted-foreground">{servico.detalhes.investimento}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg mb-4">Para quem é indicado</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {servico.detalhes.paraQuem}
                    </p>
                    <Link to="/contato">
                      <Button className="btn-hero mt-6 w-full">
                        <i className="fas fa-calendar-check mr-2"></i>
                        Agendar Consulta
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                {
                  pergunta: 'Como funciona a primeira sessão?',
                  resposta: 'A primeira sessão é gratuita e serve para nos conhecermos, entender seus objetivos e avaliar se há fit entre suas necessidades e nossa metodologia. Sem compromisso.',
                },
                {
                  pergunta: 'Quanto tempo leva para ver resultados?',
                  resposta: 'Muitos clientes relatam insights transformadores já nas primeiras sessões. Mudanças profundas e sustentáveis geralmente aparecem entre 3-6 meses de trabalho consistente.',
                },
                {
                  pergunta: 'Qual a diferença entre mentoria e terapia?',
                  resposta: 'A mentoria foca em desenvolvimento, crescimento e conquista de objetivos futuros. A terapia trata questões clínicas do passado. Ambas são complementares e podem ser feitas simultaneamente.',
                },
                {
                  pergunta: 'Posso pausar o programa se necessário?',
                  resposta: 'Sim! Entendemos que imprevistos acontecem. Oferecemos flexibilidade para pausar e retomar quando estiver pronto, respeitando seu ritmo.',
                },
              ].map((item, index) => (
                <div key={index} className="card-outline">
                  <h3 className="font-heading text-lg mb-3 flex items-start gap-3">
                    <i className="fas fa-question-circle text-primary mt-1"></i>
                    {item.pergunta}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-9">
                    {item.resposta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading text-primary-foreground">
              Não sabe qual serviço escolher?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Agende uma conversa gratuita e vamos encontrar juntos a melhor solução para sua jornada.
            </p>
            <Link to="/contato">
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-12 py-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <i className="fas fa-comments mr-3"></i>
                Falar com um Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
