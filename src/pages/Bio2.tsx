import { Button } from '@/components/ui/button';
import valeriaDias from '@/assets/valeria-dias.png';

// Bio-2: Warm Wellness
// Tons terrosos e acolhedores com toques de azul petróleo
// Estilo: Mindfulness, orgânico, calmo e sereno

const Bio2 = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1E8] via-[#E8DCC4] to-[#F0E6D2] flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-md">
        {/* Card Principal */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-7 border border-[#E8DCC4]">

          {/* Header - Foto + Nome */}
          <div className="text-center space-y-5">
            <div className="relative inline-block">
              {/* Círculo decorativo orgânico */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B9D83]/20 to-[#D4A574]/20 blur-2xl scale-110"></div>

              <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden ring-[6px] ring-[#8B9D83]/20 shadow-xl">
                <img
                  src={valeriaDias}
                  alt="Valéria Dias"
                  className="w-full h-full object-cover scale-150 object-center"
                />
              </div>

              {/* Badge natural */}
              <div className="absolute bottom-1 right-1 bg-[#8B9D83] text-white rounded-full p-2 shadow-lg ring-4 ring-white">
                <i className="fas fa-leaf text-sm"></i>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#2C5F6F]">
                Valéria Dias
              </h1>
              <p className="text-[#8B9D83] text-sm md:text-base font-semibold">
                Psicóloga | Especialista em Mindfulness
              </p>
              <div className="inline-block bg-gradient-to-r from-[#8B9D83]/10 to-[#D4A574]/10 px-5 py-2 rounded-full">
                <p className="text-[#2C5F6F] text-base md:text-lg font-bold">
                  MÉTODO FOCCO
                </p>
              </div>
              <p className="text-[#6B7280] text-xs md:text-sm italic max-w-xs mx-auto leading-relaxed pt-2">
                "Transforme sua vida com clareza e propósito"
              </p>
            </div>
          </div>

          {/* Benefícios/Features */}
          <div className="bg-gradient-to-br from-[#8B9D83]/5 to-[#E8DCC4]/30 rounded-2xl p-5 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#8B9D83]/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-spa text-[#8B9D83] text-sm"></i>
              </div>
              <div>
                <p className="text-[#2C5F6F] text-sm font-semibold">Práticas de Atenção Plena</p>
                <p className="text-[#6B7280] text-xs">Mindfulness aplicado ao dia a dia</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-heart text-[#D4A574] text-sm"></i>
              </div>
              <div>
                <p className="text-[#2C5F6F] text-sm font-semibold">Desenvolvimento Humano</p>
                <p className="text-[#6B7280] text-xs">Autoconhecimento e crescimento pessoal</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2C5F6F]/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-user-shield text-[#2C5F6F] text-sm"></i>
              </div>
              <div>
                <p className="text-[#2C5F6F] text-sm font-semibold">Atendimento Profissional</p>
                <p className="text-[#6B7280] text-xs">Confidencial e personalizado</p>
              </div>
            </div>
          </div>

          {/* Prova Social */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="fas fa-star text-[#D4A574] text-base"></i>
              ))}
            </div>
            <p className="text-[#2C5F6F] text-sm font-semibold">
              4.9/5 • Centenas de vidas transformadas
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
              <Button className="w-full h-14 bg-gradient-to-r from-[#8B9D83] to-[#2C5F6F] hover:from-[#6B7D63] hover:to-[#1E4450] text-white text-base font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <i className="fas fa-calendar-check mr-2.5 text-lg"></i>
                <span>Agendar Minha Sessão</span>
              </Button>
            </a>

            {/* CTA Secundário */}
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-12 bg-[#E8DCC4] hover:bg-[#D4A574] text-[#2C5F6F] text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
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
              <Button className="w-full h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <i className="fab fa-whatsapp mr-2 text-lg"></i>
                <span>WhatsApp Direto</span>
              </Button>
            </a>
          </div>

          {/* Divisor */}
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#8B9D83]/30 to-transparent"></div>
            <i className="fas fa-om text-[#D4A574] text-sm"></i>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#8B9D83]/30 to-transparent"></div>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#FF0000] rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform shadow-md"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-3">
            <p className="text-[10px] text-[#6B7280]">
              © 2025 FOCCO NA VIDA • Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio2;
