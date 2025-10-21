import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Servicos = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá, seja bem-vindo! Como posso te ajudar?';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const servicos = [
    {
      id: 'individual',
      icon: 'fa-lotus',
      title: 'Sessões Individuais de FOCCO',
      subtitle: 'Prática guiada de Mindfulness e autorregulação emocional',
      descricao: [
        'Uma prática guiada que ensina a estar presente no aqui e agora. As sessões individuais ajudam na regulação emocional e no fortalecimento da atenção plena, promovendo uma vivência mais consciente e menos reativa.',
        'Através do Método FOCCO (Mindfulness, Neurociência e Comportamento), você aprende a observar seu corpo, respiração e comportamentos. Cultivando mais consciência e clareza para alcançar seus objetivos com qualidade, saúde e bem-estar.',
        'Cada sessão é personalizada para suas necessidades específicas, utilizando técnicas cientificamente comprovadas de mindfulness e autorregulação emocional.',
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
      id: 'reprogramacao',
      icon: 'fa-brain',
      title: 'Reprogramação Neural',
      subtitle: 'Reestruturação de padrões mentais negativos',
      descricao: [
        'Utilizando conceitos de neurociência, ensinamos técnicas para reestruturar padrões mentais negativos, promovendo um estado mental mais calmo e positivo.',
        'Este método se concentra em identificar e modificar hábitos prejudiciais de pensamento e comportamento, criando novos circuitos neurais mais saudáveis e produtivos.',
        'Através de práticas específicas baseadas em neuroplasticidade, você aprende a reprogramar sua mente para alcançar maior bem-estar e performance.',
      ],
      beneficios: [
        'Redução de ansiedade e estresse crônico',
        'Mudança de crenças limitantes',
        'Melhoria na qualidade do sono',
        'Aumento da capacidade de foco e concentração',
        'Desenvolvimento de pensamento positivo sustentável',
        'Maior controle sobre reações emocionais',
      ],
      detalhes: {
        duracao: '1h por sessão',
        frequencia: 'Programa de 8 a 12 sessões',
        investimento: 'Sob consulta',
        paraQuem: 'Pessoas que desejam transformar padrões mentais e emocionais arraigados',
      },
    },
    {
      id: 'consultoria',
      icon: 'fa-user-cog',
      title: 'Consultoria em Desenvolvimento Comportamental',
      subtitle: 'Análise profunda e construção de novos caminhos',
      descricao: [
        'Com base em uma análise comportamental aprofundada, Valéria trabalha junto ao cliente para estabelecer novos caminhos de desenvolvimento, focados em autoconhecimento e na construção de uma vida mais equilibrada.',
        'A consultoria inclui avaliação comportamental completa, identificação de padrões disfuncionais e criação de estratégias personalizadas de mudança.',
        'Um processo de transformação consciente que integra mindfulness, neurociência e análise comportamental para resultados profundos e duradouros.',
      ],
      beneficios: [
        'Autoconhecimento profundo através de análise comportamental',
        'Identificação de padrões inconscientes',
        'Plano de desenvolvimento personalizado',
        'Ferramentas práticas de autorregulação',
        'Acompanhamento próximo e suporte contínuo',
        'Transformação sustentável e mensurável',
      ],
      detalhes: {
        duracao: 'Programa completo de 3 a 6 meses',
        frequencia: 'Sessões quinzenais',
        investimento: 'Sob consulta (proposta customizada)',
        paraQuem: 'Pessoas comprometidas com transformação profunda e mudança de vida',
      },
    },
    {
      id: 'grupo',
      icon: 'fa-users',
      title: 'Treinamentos de Longo Prazo',
      subtitle: 'Programas de acompanhamento contínuo',
      descricao: [
        'Valéria oferece programas de acompanhamento contínuo para quem deseja realizar mudanças profundas e graduais, com encontros regulares e suporte personalizado.',
        'Estes programas são ideais para quem busca transformação sustentável, com tempo para integrar os aprendizados e desenvolver novos hábitos de forma consistente.',
        'Inclui sessões regulares, material de apoio, exercícios práticos e acompanhamento próximo durante toda a jornada de transformação.',
      ],
      beneficios: [
        'Transformação profunda e sustentável',
        'Suporte contínuo durante todo o processo',
        'Mudanças graduais e bem integradas',
        'Desenvolvimento de novos hábitos duradouros',
        'Acompanhamento personalizado',
        'Resultados mensuráveis ao longo do tempo',
      ],
      detalhes: {
        duracao: 'Programas de 6 a 12 meses',
        frequencia: 'Encontros regulares (semanal ou quinzenal)',
        investimento: 'Sob consulta (planos mensais ou pacotes)',
        paraQuem: 'Pessoas comprometidas com transformação profunda e que valorizam o processo gradual',
      },
    },
    {
      id: 'corporativo',
      icon: 'fa-building',
      title: 'Palestras e Treinamentos Corporativos',
      subtitle: 'Desenvolvimento de equipes e lideranças',
      descricao: [
        'Valéria oferece palestras e treinamentos corporativos sobre mindfulness, inteligência emocional, gestão de estresse e burnout, desenvolvimento de lideranças conscientes e alta performance sustentável.',
        'Os programas corporativos são totalmente personalizados de acordo com as necessidades da organização. Podem incluir palestras inspiradoras, workshops práticos, treinamentos de equipe e programas de desenvolvimento de lideranças.',
        'Mindfulness ajuda na prevenção de dor crônica, um grande problema nas empresas. Colaboradores que aprendem a lidar com suas emoções têm melhor saúde mental, reduzem ansiedade, depressão, estresse e síndrome de burnout, ficando mais focados e produtivos.',
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
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="btn-hero mt-6 w-full">
                        <i className="fab fa-whatsapp mr-2"></i>
                        Falar no WhatsApp
                      </Button>
                    </a>
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
              Fale conosco no WhatsApp e vamos encontrar juntos a melhor solução para sua jornada.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-12 py-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <i className="fab fa-whatsapp mr-3"></i>
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
