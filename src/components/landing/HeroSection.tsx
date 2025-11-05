/**
 * HeroSection Component - Landing Pages
 * 4 variantes para cada persona
 */

import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  variant: 'executiva' | 'transicao' | 'empreendedor' | 'proposito';
  headline: string;
  subheadline: string;
  ctaPrimary: {
    text: string;
    icon?: string;
  };
  ctaSecondary?: {
    text: string;
    icon?: string;
    href: string;
  };
  proofText: string;
  onCtaPrimaryClick: () => void;
}

const variantConfig = {
  executiva: {
    gradient: 'from-[#1E3A8A] to-[#06B6D4]',
    accentColor: 'bg-white text-primary',
  },
  transicao: {
    gradient: 'from-[#059669] to-[#EAB308]',
    accentColor: 'bg-white text-primary',
  },
  empreendedor: {
    gradient: 'from-[#EA580C] to-[#1E40AF]',
    accentColor: 'bg-white text-primary',
  },
  proposito: {
    gradient: 'from-[#7C3AED] to-[#EC4899]',
    accentColor: 'bg-white text-primary',
  },
};

export const HeroSection = ({
  variant,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  proofText,
  onCtaPrimaryClick,
}: HeroSectionProps) => {
  const config = variantConfig[variant];

  return (
    <section className={`relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br ${config.gradient} pt-32 pb-16`}>
      <div className="container-custom px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-white animate-fade-in">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className={`${config.accentColor} text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105`}
              onClick={onCtaPrimaryClick}
            >
              {ctaPrimary.icon && <span className="mr-2">{ctaPrimary.icon}</span>}
              {ctaPrimary.text}
            </Button>

            {ctaSecondary && (
              <a href={ctaSecondary.href} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl font-semibold transition-all"
                >
                  {ctaSecondary.icon && <span className="mr-2">{ctaSecondary.icon}</span>}
                  {ctaSecondary.text}
                </Button>
              </a>
            )}
          </div>

          {/* Prova Social */}
          <p className="text-sm md:text-base opacity-80 pt-4">
            {proofText}
          </p>
        </div>
      </div>

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
