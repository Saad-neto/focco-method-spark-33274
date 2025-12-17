import { Button } from '@/components/ui/button';
import valeriaDias from '@/assets/valeria-dias.png';

// Bio-3: Vibrant Energy
// Gradientes modernos e coloridos com glassmorphism
// Estilo: Dinâmico, jovem, transformação e energia

const Bio3 = () => {
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
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Background Gradient Animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F6F] via-[#4A9BAD] to-[#6BBFC9] animate-gradient"></div>

      {/* Círculos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4A574]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2C5F6F]/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#4A9BAD]/20 to-[#D4A574]/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-lg relative z-10">
        {/* Card Principal com Glassmorphism */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 space-y-6 border border-white/50">

          {/* Header - Foto + Nome */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              {/* Anel de luz animado */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2C5F6F] via-[#D4A574] to-[#4A9BAD] blur-lg opacity-50 scale-110 animate-pulse"></div>

              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl">
                <img
                  src={valeriaDias}
                  alt="Valéria Dias"
                  className="w-full h-full object-cover scale-125 object-[center_20%]"
                />
              </div>

              {/* Badge Moderno */}
              <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#2C5F6F] to-[#4A9BAD] text-white rounded-full p-2.5 shadow-xl ring-4 ring-white">
                <i className="fas fa-sparkles text-sm"></i>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2C5F6F] via-[#4A9BAD] to-[#2C5F6F] bg-clip-text text-transparent">
                Valéria Dias
              </h1>
              <p className="text-[#2C5F6F] text-sm sm:text-base font-semibold">
                Psicóloga | Mestre & Profissional
              </p>
              <div className="inline-block bg-gradient-to-r from-[#2C5F6F] to-[#4A9BAD] px-6 py-2 rounded-full shadow-lg">
                <p className="text-white text-base sm:text-lg font-bold tracking-wider">
                  MÉTODO FOCCO
                </p>
              </div>
            </div>
          </div>

          {/* Headline Impactante */}
          <div className="bg-gradient-to-r from-[#2C5F6F]/10 to-[#4A9BAD]/10 rounded-2xl p-5 text-center border border-[#2C5F6F]/20">
            <p className="text-[#2C5F6F] text-base sm:text-lg font-bold leading-relaxed">
              Está estressado? Sente ansiedade?
            </p>
            <p className="text-[#4A9BAD] text-sm sm:text-base font-semibold mt-2">
              ✨ Transforme sua vida agora mesmo
            </p>
          </div>

          {/* Stats/Prova Social */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/60 backdrop-blur rounded-xl p-4 text-center border border-white/50 shadow-md">
              <p className="text-2xl font-bold text-[#2C5F6F]">4.9</p>
              <p className="text-xs text-[#2C5F6F]/70 font-medium">Avaliação Google</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="fas fa-star text-[#D4A574] text-xs"></i>
                ))}
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-xl p-4 text-center border border-white/50 shadow-md">
              <p className="text-2xl font-bold text-[#2C5F6F]">100+</p>
              <p className="text-xs text-[#2C5F6F]/70 font-medium">Vidas transformadas</p>
              <i className="fas fa-heart text-[#D4A574] mt-1"></i>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            {/* CTA Primário Vibrante */}
            <a
              href={agendamentoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-14 bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FFA94D] hover:from-[#FF5252] hover:to-[#FF9A3D] text-white text-base sm:text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <i className="fas fa-calendar-check text-lg"></i>
                  <span>Agendar Agora</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </span>
              </Button>
            </a>

            {/* CTA Secundário Glass */}
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-12 bg-white/40 backdrop-blur hover:bg-white/60 border-2 border-white/50 text-[#2C5F6F] text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md">
                <i className="fas fa-compass mr-2"></i>
                <span>Conheça o Método FOCCO</span>
              </Button>
            </a>

            {/* WhatsApp Moderno */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                <i className="fab fa-whatsapp mr-2 text-lg"></i>
                <span>WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Divisor Gradiente */}
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#2C5F6F]/30 to-transparent"></div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2C5F6F]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#4A9BAD]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#2C5F6F]/30 to-transparent"></div>
          </div>

          {/* Redes Sociais Modernas */}
          <div className="flex justify-center gap-3">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl sm:text-2xl"></i>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 sm:w-14 sm:h-14 bg-[#0A66C2] rounded-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl sm:text-2xl"></i>
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 sm:w-14 sm:h-14 bg-[#FF0000] rounded-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-xl sm:text-2xl"></i>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-3 border-t border-white/30">
            <p className="text-[10px] sm:text-xs text-[#2C5F6F]/60">
              © 2025 FOCCO NA VIDA • Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Bio3;
