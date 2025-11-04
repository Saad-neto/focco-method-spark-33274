/**
 * Landing Page A - Executiva em Burnout
 * Persona: Mariana, 38 anos, Diretora/Gerente
 * Dor: Ansiedade, burnout, exaustão
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DoresSection } from '@/components/landing/DoresSection';
import { SolucaoSection } from '@/components/landing/SolucaoSection';
import { DepoimentosSection } from '@/components/landing/DepoimentosSection';
import { FormularioSection } from '@/components/landing/FormularioSection';
import { CTAWhatsAppSection } from '@/components/landing/CTAWhatsAppSection';

const AgendamentoA = () => {
  const whatsappNumber = '5583993787450';

  // Scroll suave para formulário
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click_landing_a', {
        page_variant: 'a',
        cta_type: 'primary_hero',
      });
    }
  };

  // Track page view
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view_landing_a', {
      page_variant: 'a',
      page_title: 'Executiva em Burnout',
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content - padding-top para não ficar atrás do header fixo */}
      <div className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <HeroSection
        variant="executiva"
        headline="Você conquistou tudo na carreira, mas perdeu a si mesma no caminho?"
        subheadline="Recupere seu equilíbrio, saúde mental e qualidade de vida sem abrir mão do seu sucesso profissional"
        ctaPrimary={{
          text: 'Quero ter equilíbrio SEM perder meu sucesso',
          icon: '✨',
        }}
        ctaSecondary={{
          text: 'Falar no WhatsApp',
          icon: '💬',
          href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vi a página para Executivas e gostaria de agendar uma sessão.')}`,
        }}
        proofText="⭐ Mais de 200 executivas recuperaram o equilíbrio e a saúde mental"
        onCtaPrimaryClick={scrollToForm}
      />

      {/* DORES SECTION */}
      <DoresSection
        titulo="Você se sente assim?"
        subtitulo="Se você chegou até aqui, provavelmente se identifica com pelo menos uma dessas situações:"
        dores={[
          {
            icon: '😰',
            titulo: 'Ansiedade Constante',
            descricao: 'Sua mente não desliga nunca. Trabalho persegue você até nos sonhos.',
          },
          {
            icon: '😴',
            titulo: 'Insônia Crônica',
            descricao: 'Acorda 3h da manhã pensando no trabalho. Café é seu melhor amigo.',
          },
          {
            icon: '💔',
            titulo: 'Relacionamentos em Crise',
            descricao: 'Não vê família, amigos. Quando está presente, mente está no trabalho.',
          },
          {
            icon: '🤯',
            titulo: 'Burnout Iminente',
            descricao: 'Sente que vai colapsar a qualquer momento. Pressão é insustentável.',
          },
        ]}
        textoFinal="E o pior: você sabe que PRECISA mudar, mas tem medo de que desacelerar signifique perder tudo que conquistou."
      />

      {/* SOLUÇÃO SECTION */}
      <SolucaoSection
        titulo="E se eu te dissesse que é possível..."
        subtitulo="Você pode manter sua excelência profissional E ter qualidade de vida. Não é sobre desistir do sucesso. É sobre alcançá-lo de forma SUSTENTÁVEL."
        beneficios={[
          { icon: '✅', text: 'Manter sua alta performance sem se destruir no processo' },
          { icon: '✅', text: 'Liderar com eficiência E saúde mental equilibrada' },
          { icon: '✅', text: 'Reduzir ansiedade sem abrir mão da sua carreira' },
          { icon: '✅', text: 'Ter equilíbrio vida-trabalho sendo executiva de sucesso' },
          { icon: '✅', text: 'Dormir bem mesmo em cargo de alta pressão' },
          { icon: '✅', text: 'Tomar decisões claras sob pressão sem se esgotar' },
        ]}
        textoFinal="O Método FOCCO foi desenvolvido especialmente para profissionais de alta performance que precisam de equilíbrio sem perder a excelência."
      />

      {/* DEPOIMENTOS SECTION */}
      <DepoimentosSection
        titulo="Executivas que já se transformaram"
        subtitulo="Veja o que outras profissionais como você alcançaram:"
        depoimentos={[
          {
            nome: 'Paula Andrade',
            profissao: 'Diretora Comercial, SP',
            depoimento: 'Eu estava em depressão profunda. Trabalhava 14h/dia, não via minha filha crescer, e estava medicada para ansiedade. Com o Método FOCCO, em 3 meses reduzi para 9h/dia, mantive minhas metas, saí dos remédios e recuperei minha família. Hoje lidero com clareza e durmo bem.',
            rating: 5,
          },
          {
            nome: 'Juliana Costa',
            profissao: 'Gerente de Projetos, RJ',
            depoimento: 'Burnout me fez parar no hospital. Achei que teria que largar tudo. O FOCCO me mostrou que o problema não era meu cargo, era minha relação com ele. Voltei mais forte, com limites claros e performance ainda melhor.',
            rating: 5,
          },
          {
            nome: 'Roberta Lima',
            profissao: 'CEO Startup, MG',
            depoimento: 'Como CEO, achava que tinha que estar disponível 24/7. Estava destruindo minha saúde. Aprendi a delegar, priorizar e liderar sem me perder. Empresa cresceu 40% no ano e eu trabalho menos horas.',
            rating: 5,
          },
        ]}
      />

      {/* FORMULÁRIO SECTION */}
      <FormularioSection
        titulo="Agende sua Sessão Diagnóstica Gratuita"
        subtitulo="60 minutos para identificar seu padrão de esgotamento e traçar um caminho de equilíbrio sustentável"
        ctaText="💫 Quero recuperar meu equilíbrio"
        variant="a"
      />

      {/* CTA WHATSAPP FINAL */}
      <CTAWhatsAppSection
        headline="Prefere falar direto no WhatsApp?"
        subheadline="Entre em contato agora e tire suas dúvidas sobre o Método FOCCO"
        whatsappMessage="Olá! Vi a página para Executivas em Burnout e gostaria de saber mais sobre como o Método FOCCO pode me ajudar a recuperar o equilíbrio sem perder meu sucesso profissional."
        whatsappNumber={whatsappNumber}
        variant="a"
      />
      </div>

      <Footer />
    </div>
  );
};

export default AgendamentoA;
