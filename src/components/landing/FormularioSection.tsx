/**
 * FormularioSection Component
 * Formulário de captura de leads
 */

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface FormularioSectionProps {
  titulo: string;
  subtitulo?: string;
  ctaText: string;
  variant: 'a' | 'b' | 'c' | 'd';
}

export const FormularioSection = ({ titulo, subtitulo, ctaText, variant }: FormularioSectionProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track GA4 event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', `form_submit_landing_${variant}`, {
        page_variant: variant,
        nome: formData.nome,
      });
    }

    // Simular envio (implementar backend depois)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Redirecionar para WhatsApp após sucesso
      const whatsappMessage = `Olá! Estou passando por burnout/ansiedade e preciso de ajuda. Preenchi o formulário no site. Meu nome é ${formData.nome} e meu WhatsApp é ${formData.whatsapp}.`;
      const whatsappLink = `https://wa.me/5583993787450?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappLink, '_blank');

      // Resetar form
      setFormData({ nome: '', whatsapp: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground" id="formulario">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              {titulo}
            </h2>
            {subtitulo && (
              <p className="text-lg opacity-90">
                {subtitulo}
              </p>
            )}
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-xl">
            <div>
              <Input
                type="text"
                placeholder="Seu nome completo *"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="text-lg py-6"
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="WhatsApp (com DDD) *"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="text-lg py-6"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-accent hover:bg-accent-light text-accent-foreground text-lg py-7 font-bold rounded-xl"
            >
              {isSubmitting ? '⏳ Enviando...' : submitStatus === 'success' ? '✅ Enviado!' : ctaText}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              🔒 Seus dados estão seguros • Resposta em até 2h
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
