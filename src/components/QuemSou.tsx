import { Button } from '@/components/ui/button';

const QuemSou = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá! Gostaria de conhecer mais sobre o Método FOCCO.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-center mb-4">Quem Sou</h2>
          <h3 className="text-2xl text-center text-primary font-semibold mb-12">Valéria Dias</h3>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <img
                  src="/assets/quem-sou.jpg"
                  alt="Valéria Dias - Idealizadora do Método FOCCO"
                  className="rounded-2xl w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A história de Valéria é sobre <strong className="text-primary">redescoberta e autotransformação</strong>. Depois de 12 anos lidando com dor crônica e um cansaço que parecia interminável, ela encontrou no mindfulness uma verdadeira luz no fim do túnel.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "Através dessa prática, consegui melhorar minha qualidade de vida de um jeito que nunca imaginei possível", conta Valéria. O impacto foi tão profundo que ela decidiu ir além: se formou <strong className="text-primary">Instrutora de Mindfulness</strong>, tornou-se <strong className="text-primary">Analista Comportamental</strong> e se especializou em <strong className="text-primary">Neurociência e Comportamento</strong>, se tornando terapeuta integrativa.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Hoje, sua missão é ajudar pessoas a descobrirem os mesmos benefícios que transformaram sua vida. Ela acredita que podemos treinar nossa mente para conseguirmos mais foco, através da observação, cultivando mais consciência e clareza para chegar nos nossos objetivos com saúde e bem-estar.
                </p>
              </div>
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl p-6 border-l-4 border-primary shadow-lg">
                <p className="text-primary font-bold text-xl flex items-center gap-3">
                  <i className="fas fa-users text-2xl"></i>
                  <span>Mais de 1.000 pessoas impactadas pelo Método FOCCO</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="btn-hero">
                <i className="fab fa-whatsapp mr-3"></i>
                Falar com Valéria
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSou;
