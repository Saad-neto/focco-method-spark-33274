import { Link } from 'react-router-dom';
import logoFocco from '@/assets/logo-focco-small.png';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const whatsappNumber = '558399387450';
  const whatsappMessage = 'Olá! Gostaria de receber atualizações do Método FOCCO.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const socialLinks = [
    { icon: 'fa-instagram', url: 'https://instagram.com/metodofocco', label: 'Instagram' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-3 inline-block backdrop-blur-sm">
              <img 
                src={logoFocco} 
                alt="FOCCO Mindfulness" 
                className="h-20 md:h-24 w-auto"
              />
            </div>
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
                  href="https://wa.me/558399387450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (83) 99378-7450
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Receba insights sobre desenvolvimento pessoal
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent text-sm"
              />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="btn-accent">
                  <i className="fab fa-whatsapp"></i>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Método FOCCO. Todos os direitos reservados.
            </p>
            
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

export default Footer;
