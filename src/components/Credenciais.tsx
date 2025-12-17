const Credenciais = () => {
  const credenciais = [
    {
      icon: 'fa-brain',
      titulo: 'Idealizadora do Método FOCCO',
      descricao: 'Desenvolvimento Humano baseado em Mindfulness, Neurociência e Comportamento',
      color: 'primary'
    },
    {
      icon: 'fa-om',
      titulo: 'Terapeuta Integrativa',
      descricao: 'Abordagem holística e científica',
      color: 'primary'
    },
    {
      icon: 'fa-certificate',
      titulo: 'Instrutora de Mindfulness',
      descricao: 'Formada pelo MTI (Mindfulness Trainings International)',
      color: 'primary'
    },
    {
      icon: 'fa-graduation-cap',
      titulo: 'Pós-Graduação em Neurociência',
      descricao: 'Neurociência e Comportamento pela PUC',
      color: 'primary'
    },
    {
      icon: 'fa-user-md',
      titulo: 'Analista Corporal e Comportamental',
      descricao: 'Especialista em padrões comportamentais',
      color: 'primary'
    },
    {
      icon: 'fa-dna',
      titulo: 'Reprogramação Biológica',
      descricao: 'Técnicas de reestruturação neural',
      color: 'primary'
    },
    {
      icon: 'fa-book',
      titulo: 'Autora do Livro',
      descricao: '"De Bem Com a Dor"',
      color: 'accent'
    },
    {
      icon: 'fa-microphone',
      titulo: 'Palestrante',
      descricao: 'Desenvolvimento pessoal e corporativo',
      color: 'accent'
    },
    {
      icon: 'fa-briefcase',
      titulo: 'Administradora de Empresa',
      descricao: 'Experiência em gestão empresarial',
      color: 'primary'
    },
    {
      icon: 'fa-heart-pulse',
      titulo: 'Criadora do Programa',
      descricao: 'De Bem Com a Vida - Autorregulação Emocional',
      color: 'success'
    },
    {
      icon: 'fa-certificate',
      titulo: 'Implementadora do NR1',
      descricao: 'Certificada pelo MEC',
      color: 'primary'
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Formação e Credenciais</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combinação única de ciência, experiência prática e vivência pessoal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credenciais.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className={`w-12 h-12 bg-${item.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <i className={`fas ${item.icon} text-${item.color} text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm">{item.titulo}</h4>
                  <p className="text-xs text-muted-foreground">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credenciais;
