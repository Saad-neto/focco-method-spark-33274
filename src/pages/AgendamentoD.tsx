/**
 * Landing Page D - Busca de Propósito
 * Persona: Ana, 35 anos, Profissional
 * Dor: Vazio existencial, falta de sentido
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DoresSection } from '@/components/landing/DoresSection';
import { SolucaoSection } from '@/components/landing/SolucaoSection';
import { DepoimentosSection } from '@/components/landing/DepoimentosSection';
import { FormularioSection } from '@/components/landing/FormularioSection';
import { CTAWhatsAppSection } from '@/components/landing/CTAWhatsAppSection';

const AgendamentoD = () => {
  const whatsappNumber = '5583993787450';

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click_landing_d', {
        page_variant: 'd',
        cta_type: 'primary_hero',
      });
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view_landing_d', {
      page_variant: 'd',
      page_title: 'Busca de Propósito',
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content - padding-top para não ficar atrás do header fixo */}
      <div className="pt-24 md:pt-32">
        <HeroSection
        variant="proposito"
        headline="Você tem tudo na vida, mas sente que falta algo?"
        subheadline="Descubra seu propósito autêntico, quebre padrões limitantes e viva com plenitude e significado"
        ctaPrimary={{
          text: 'Quero descobrir meu propósito de vida',
          icon: '✨',
        }}
        ctaSecondary={{
          text: 'Começar conversa',
          icon: '💬',
          href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vi a página sobre Propósito de Vida e gostaria de conversar.')}`,
        }}
        proofText="⭐ 300+ pessoas encontraram seu propósito e vivem com plenitude"
        onCtaPrimaryClick={scrollToForm}
      />

      <DoresSection
        titulo="Você se sente assim?"
        subtitulo="Esse vazio é mais comum do que você imagina:"
        dores={[
          {
            icon: '😶',
            titulo: 'Vazio Inexplicável',
            descricao: 'Tem emprego, casa, família... mas sente que falta algo fundamental.',
          },
          {
            icon: '🔁',
            titulo: 'Vida no Automático',
            descricao: 'Acorda, trabalha, dorme, repete. "Qual o sentido de tudo isso?"',
          },
          {
            icon: '🎭',
            titulo: 'Não Se Conhece',
            descricao: 'Vive para agradar outros. Não sabe quem você realmente é por dentro.',
          },
          {
            icon: '😔',
            titulo: 'Infeliz Sem Motivo',
            descricao: 'Deveria estar feliz, mas não está. Bloqueios emocionais que se repetem.',
          },
        ]}
        textoFinal="Não há nada de errado com você. Você só ainda não descobriu quem você REALMENTE é."
      />

      <SolucaoSection
        titulo="Da Sobrevivência para a Plenitude"
        subtitulo="É possível viver com propósito, autenticidade e significado. Não é sobre ter mais. É sobre SER quem você realmente é."
        beneficios={[
          { icon: '✅', text: 'Descobrir seu propósito autêntico de vida' },
          { icon: '✅', text: 'Autoconhecimento profundo e verdadeiro' },
          { icon: '✅', text: 'Quebrar padrões limitantes que se repetem' },
          { icon: '✅', text: 'Viver com autenticidade, não para agradar outros' },
          { icon: '✅', text: 'Relacionamentos verdadeiros e significativos' },
          { icon: '✅', text: 'Sentir-se pleno e feliz de verdade' },
        ]}
        textoFinal="O Método FOCCO é uma jornada de autodescoberta que transforma sua vida por completo."
      />

      <DepoimentosSection
        titulo="Transformações reais de pessoas como você"
        subtitulo="Veja histórias de quem encontrou significado:"
        depoimentos={[
          {
            nome: 'Ana Paula',
            profissao: 'Professora, 38 anos',
            depoimento: 'Vivia no automático há anos. Tinha tudo mas me sentia vazia. FOCCO me ajudou a me reconectar comigo mesma. Descobri meu propósito de impactar vidas. Hoje acordo com sentido e gratidão.',
            rating: 5,
          },
          {
            nome: 'Fernanda Reis',
            profissao: 'Arquiteta, 42 anos',
            depoimento: 'Sempre vivi para agradar os outros. Não sabia quem eu era. A jornada FOCCO foi libertadora. Hoje vivo minha verdade, tenho relacionamentos autênticos e sou genuinamente feliz.',
            rating: 5,
          },
          {
            nome: 'Lucas Martins',
            profissao: 'Empresário, 45 anos',
            depoimento: 'Sucesso financeiro mas vazio por dentro. FOCCO me fez olhar para dentro. Descobri que meu propósito era servir. Mudou completamente minha perspectiva de vida e realização.',
            rating: 5,
          },
        ]}
      />

      <FormularioSection
        titulo="Comece sua jornada de autodescoberta"
        subtitulo="Sessão gratuita de 60 min para iniciar seu processo de autoconhecimento profundo"
        ctaText="✨ Quero descobrir meu propósito"
        variant="d"
      />

      <CTAWhatsAppSection
        headline="Sua história pode ser a próxima"
        subheadline="Converse comigo e dê o primeiro passo para viver com propósito"
        whatsappMessage="Olá! Vi a página sobre Propósito de Vida e quero saber mais sobre como o Método FOCCO pode me ajudar a descobrir meu propósito autêntico e viver com plenitude."
        whatsappNumber={whatsappNumber}
        variant="d"
        urgencia={true}
      />
      </div>

      <Footer />
    </div>
  );
};

export default AgendamentoD;
