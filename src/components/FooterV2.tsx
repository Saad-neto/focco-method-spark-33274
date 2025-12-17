import { Link } from 'react-router-dom';
import logoFocco from '@/assets/logo-vertical-transparent.png';

const FooterV2 = () => {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá! Gostaria de receber atualizações do Método FOCCO.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const socialLinks = [
    { icon: 'fa-instagram', url: 'https://www.instagram.com/focconavida/', label: 'Instagram' },
    { icon: 'fa-facebook', url: 'https://www.facebook.com/profile.php?id=100063709680264', label: 'Facebook' },
    { icon: 'fa-youtube', url: 'https://www.youtube.com/@focconavida2012', label: 'YouTube' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/valéria-dias-a80877293/', label: 'LinkedIn' },
    { icon: 'fa-whatsapp', url: whatsappLink, label: 'WhatsApp' },
  ];

  const quickLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src={logoFocco}
              alt="FOCCO Mindfulness"
              className="h-52 md:h-64 lg:h-72 w-auto"
              style={{
                filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
              }}
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transformando vidas através de clareza mental, inteligência emocional e propósito autêntico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <i className="fas fa-envelope text-accent mt-1"></i>
                <a
                  href="mailto:focconavida@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  focconavida@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <i className="fab fa-whatsapp text-accent mt-1"></i>
                <a
                  href="https://wa.me/5583993787450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (83) 99378-7450
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Método FOCCO. Todos os direitos reservados.
              </p>
              <p className="text-primary-foreground/40 text-xs mt-1">
                Desenvolvido por{' '}
                <a
                  href="https://digitalizarmkt.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline"
                >
                  Digitalizar
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all hover:scale-110"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
