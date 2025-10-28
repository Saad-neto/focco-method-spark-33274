import { Button } from '@/components/ui/button';

const GoogleMapsLocation = () => {
  const googleMapsLink = 'https://maps.app.goo.gl/6mLXML44sgmziWrL8';
  // URL de embed do Google Maps usando place_id
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6584762890423!2d-43.334993699999996!3d-22.936557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd94f894260dd%3A0xe9a65081321b28f7!2sFOCCO%20NA%20VIDA%20-%20Desenvolvimento%20Humano%20por%20Val%C3%A9ria%20Dias!5e0!3m2!1spt-BR!2sbr!4v1698765432100!5m2!1spt-BR!2sbr';

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading mb-4">Nossa Localização</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre-nos facilmente e agende sua visita
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mapa */}
          <div className="order-2 lg:order-1">
            <div className="card-elevated overflow-hidden h-full min-h-[400px]">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Método FOCCO"
              ></iframe>
            </div>
          </div>

          {/* Informações */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="card-outline h-full flex flex-col justify-center">
              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Endereço</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      FOCCO NA VIDA
                      <br />
                      Desenvolvimento Humano por Valéria Dias
                      <br />
                      Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Horário de Atendimento</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                      <br />
                      <span className="text-accent font-medium">Agendamento prévio necessário</span>
                    </p>
                  </div>
                </div>

                {/* Modalidades */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-video text-xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Modalidades</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <i className="fas fa-check text-accent mr-2"></i>Atendimento Presencial
                      <br />
                      <i className="fas fa-check text-accent mr-2"></i>Atendimento Online
                    </p>
                  </div>
                </div>

                {/* Botões */}
                <div className="pt-4 space-y-3">
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="btn-primary w-full">
                      <i className="fas fa-directions mr-2"></i>
                      Ver no Google Maps
                    </Button>
                  </a>

                  <a
                    href="https://wa.me/5583993787450?text=Olá, gostaria de agendar uma visita!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="btn-outline w-full">
                      <i className="fab fa-whatsapp mr-2"></i>
                      Agendar Visita
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Como Chegar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="card-outline bg-primary/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-info-circle text-xl text-accent"></i>
              </div>
              <div>
                <h3 className="font-heading text-lg mb-2">Como Chegar</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Estacionamento disponível nas proximidades. Para atendimento presencial,
                  recomendamos agendar com antecedência pelo WhatsApp. Também oferecemos
                  atendimento 100% online para sua comodidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapsLocation;
