import { Button } from '@/components/ui/button';
import valeriaDias from '@/assets/valeria-dias.png';

// Bio-1: Professional Teal
// Identidade visual forte baseada no azul petróleo presente em todas as plataformas
// Estilo: Clean, espaçado, profissional e elegante

const Bio1 = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-[#2C5F6F] via-[#3A7A8E] to-[#2C5F6F] flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-md">
        {/* Card Principal com Glassmorphism */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-10 space-y-8">

          {/* Header - Foto + Nome */}
          <div className="text-center space-y-5">
            <div className="relative inline-block">
              {/* Anel decorativo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2C5F6F] to-[#D4A574] blur-xl opacity-30 scale-110"></div>

              <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden ring-4 ring-[#2C5F6F]/30 shadow-2xl">
                <img
                  src={valeriaDias}
                  alt="Valéria Dias"
                  className="w-full h-full object-cover scale-125 object-[center_20%]"
                />
              </div>

              {/* Badge Verificado */}
              <div className="absolute bottom-1 right-1 bg-[#2C5F6F] text-white rounded-full p-2 shadow-lg ring-4 ring-white">
                <i className="fas fa-check text-sm"></i>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#2C5F6F]">
                Valéria Dias
              </h1>
              <p className="text-[#2C5F6F]/70 text-sm md:text-base font-semibold">
                Psicóloga | Mestre & Profissional
              </p>
              <p className="text-[#D4A574] text-base md:text-lg font-bold tracking-wide">
                MÉTODO FOCCO
              </p>
              <p className="text-[#2C5F6F]/60 text-xs md:text-sm italic max-w-xs mx-auto leading-relaxed">
                "De bem com a vida através do desenvolvimento humano"
              </p>
            </div>
          </div>

          {/* Divisor Elegante */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#2C5F6F]/30 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#D4A574]"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#2C5F6F]/30 to-transparent"></div>
          </div>

          {/* Prova Social */}
          <div className="bg-[#2C5F6F]/5 rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="fas fa-star text-[#D4A574] text-lg"></i>
              ))}
            </div>
            <p className="text-center text-[#2C5F6F] text-sm font-semibold">
              4.9/5 • Avaliações Google
            </p>
            <p className="text-center text-[#2C5F6F]/60 text-xs">
              Centenas de vidas transformadas
            </p>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            {/* CTA Primário */}
            <a
              href={agendamentoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-14 bg-gradient-to-r from-[#2C5F6F] to-[#3A7A8E] hover:from-[#1E4450] hover:to-[#2C5F6F] text-white text-base font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <i className="fas fa-calendar-check mr-2.5 text-lg"></i>
                <span>Agendar Sessão</span>
              </Button>
            </a>

            {/* CTA Secundário */}
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="outline" className="w-full h-12 border-2 border-[#2C5F6F] text-[#2C5F6F] hover:bg-[#2C5F6F] hover:text-white text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <i className="fas fa-compass mr-2"></i>
                <span>Conheça o Método FOCCO</span>
              </Button>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="outline" className="w-full h-12 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <i className="fab fa-whatsapp mr-2 text-lg"></i>
                <span>Falar no WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Divisor */}
          <div className="relative py-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#2C5F6F]/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-[#2C5F6F]/60 font-medium">
                Conecte-se
              </span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md hover:shadow-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#0A66C2] rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#FF0000] rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md hover:shadow-xl"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-[#2C5F6F]/10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <i className="fas fa-shield-alt text-[#2C5F6F]"></i>
              <p className="text-xs text-[#2C5F6F]/70">
                Atendimento profissional e confidencial
              </p>
            </div>
            <p className="text-[10px] text-[#2C5F6F]/50">
              © 2025 FOCCO NA VIDA • Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio1;
