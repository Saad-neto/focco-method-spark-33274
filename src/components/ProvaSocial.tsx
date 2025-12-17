const ProvaSocial = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            {/* Google Reviews */}
            <div className="space-y-2">
              <div className="flex justify-center items-center gap-2 mb-2">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png" alt="Google" className="h-6" />
                <span className="text-sm font-semibold text-muted-foreground">Avaliações</span>
              </div>
              <div className="flex justify-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="fas fa-star text-yellow-500 text-xl"></i>
                ))}
              </div>
              <p className="text-3xl font-heading font-bold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Nota média no Google</p>
            </div>

            {/* Pessoas Impactadas */}
            <div className="space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-users text-primary text-2xl"></i>
              </div>
              <p className="text-3xl font-heading font-bold text-primary">1.000+</p>
              <p className="text-sm text-muted-foreground">Pessoas transformadas</p>
            </div>

            {/* Anos de Experiência */}
            <div className="space-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-award text-accent text-2xl"></i>
              </div>
              <p className="text-3xl font-heading font-bold text-accent">15+</p>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
