import { Button } from '@/components/ui/button';
import valeriaDias from '@/assets/valeria-dias.png';

// Página Bio - Link in Bio para Instagram - Repositório transferido para conta focconavida
const Bio = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá! Vim do Instagram e gostaria de agendar uma sessão.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const agendamentoLink = 'https://lastlink.com/p/C6DC1AE9C/checkout-payment/';
  const siteLink = 'https://focconavida.com.br/';

  const socialLinks = {
    instagram: 'https://www.instagram.com/focconavida/',
    linkedin: 'https://www.linkedin.com/in/valéria-dias-a80877293/',
    youtube: 'https://www.youtube.com/@focconavida2012',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-white to-[#e8f4f8] flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-lg">
        {/* Card Principal */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">

          {/* Header - Foto + Nome */}
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="relative inline-block">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                <img
                  src={valeriaDias}
                  alt="Valéria Dias"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge Verificado */}
              <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-1.5 sm:p-2 shadow-lg">
                <i className="fas fa-check text-xs sm:text-sm"></i>
              </div>
            </div>

            <div>
              <h1 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">
                Valéria Dias
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm font-medium px-2">
                Especialista em Desenvolvimento Humano
              </p>
              <p className="text-primary text-xs sm:text-sm font-semibold mt-1">
                Método FOCCO
              </p>
            </div>
          </div>

          {/* Headline Emocional */}
          <div className="text-center px-2 sm:px-4">
            <p className="text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed">
              Está estressado? Sente ansiedade?
              <br />
              <span className="font-semibold text-primary">
                Agende uma sessão e já sinta a diferença
              </span>
            </p>
          </div>

          {/* Prova Social */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm flex-wrap">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="fas fa-star text-yellow-500 text-sm sm:text-base"></i>
              ))}
            </div>
            <span className="text-muted-foreground font-medium">
              4.9/5 • Google Reviews
            </span>
          </div>

          {/* CTAs */}
          <div className="space-y-2.5 sm:space-y-3">
            {/* CTA Primário */}
            <a
              href={agendamentoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full min-h-[52px] h-auto py-3.5 sm:py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:from-[#FF5252] hover:to-[#FF7A3D] text-white text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                <i className="fas fa-calendar-check mr-2"></i>
                <span>Agendar Sessão Agora</span>
              </Button>
            </a>

            {/* CTA Secundário */}
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="outline" className="w-full min-h-[48px] h-auto py-3 sm:py-3.5 border-2 border-primary/30 text-primary hover:bg-primary/5 text-sm sm:text-base font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                <i className="fas fa-compass mr-2"></i>
                <span>Conheça o Método FOCCO</span>
              </Button>
            </a>

            {/* WhatsApp Alternativo */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="outline" className="w-full min-h-[48px] h-auto py-3 sm:py-3.5 border-2 border-green-500/30 text-green-600 hover:bg-green-50 text-sm sm:text-base font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                <i className="fab fa-whatsapp mr-2"></i>
                <span>Falar no WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Divisor */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="bg-white px-3 sm:px-4 text-muted-foreground font-medium">
                Siga nas redes sociais
              </span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-3 sm:gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md hover:shadow-lg"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-lg sm:text-xl md:text-2xl"></i>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#0A66C2] rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-lg sm:text-xl md:text-2xl"></i>
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#FF0000] rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md hover:shadow-lg"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-lg sm:text-xl md:text-2xl"></i>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-3 sm:pt-4 border-t border-border">
            <p className="text-[10px] sm:text-xs text-muted-foreground px-2">
              © 2025 FOCCO NA VIDA • Todos os direitos reservados
            </p>
          </div>
        </div>

        {/* Credibilidade Extra - Abaixo do Card */}
        <div className="text-center mt-4 sm:mt-6 space-y-1.5 sm:space-y-2 px-2">
          <p className="text-xs sm:text-sm text-muted-foreground/80">
            <i className="fas fa-shield-alt mr-1.5 sm:mr-2 text-primary"></i>
            Atendimento profissional e confidencial
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground/60">
            Centenas de vidas transformadas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
