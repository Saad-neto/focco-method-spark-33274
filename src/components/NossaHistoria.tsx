import valeriaFoto from '@/assets/valeria-foto.png';

const NossaHistoria = () => {
  return (
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
  );
};

export default NossaHistoria;
