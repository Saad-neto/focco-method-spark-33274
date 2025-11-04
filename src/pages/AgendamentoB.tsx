/**
 * Landing Page B - Profissional em Transição
 * Persona: Carlos, 32 anos, Analista/Consultor
 * Dor: Preso em carreira que não ama, indecisão
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DoresSection } from '@/components/landing/DoresSection';
import { SolucaoSection } from '@/components/landing/SolucaoSection';
import { DepoimentosSection } from '@/components/landing/DepoimentosSection';
import { FormularioSection } from '@/components/landing/FormularioSection';
import { CTAWhatsAppSection } from '@/components/landing/CTAWhatsAppSection';

const AgendamentoB = () => {
  const whatsappNumber = '5583993787450';

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click_landing_b', {
        page_variant: 'b',
        cta_type: 'primary_hero',
      });
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view_landing_b', {
      page_variant: 'b',
      page_title: 'Profissional em Transição',
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content - padding-top para não ficar atrás do header fixo */}
      <div className="pt-24 md:pt-32">
        <HeroSection
        variant="transicao"
        headline="Preso em uma carreira que não te realiza mais?"
        subheadline="Descubra seu verdadeiro propósito e tenha clareza para fazer a transição certa, sem medo de se arrepender"
        ctaPrimary={{
          text: 'Quero clareza para mudar de carreira',
          icon: '🎯',
        }}
        ctaSecondary={{
          text: 'Tirar dúvidas no WhatsApp',
          icon: '💬',
          href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vi a página sobre Transição de Carreira e gostaria de conversar.')}`,
        }}
        proofText="⭐ 150+ profissionais mudaram de carreira com sucesso e sem arrependimento"
        onCtaPrimaryClick={scrollToForm}
      />

      <DoresSection
        titulo="Segunda-feira é um pesadelo para você?"
        subtitulo="Se você chegou até aqui, provavelmente se identifica com essas situações:"
        dores={[
          {
            icon: '😔',
            titulo: 'Infeliz no Trabalho',
            descricao: 'Acorda com aperto no peito. Trabalha no automático, sem paixão nenhuma.',
          },
          {
            icon: '🤷',
            titulo: 'Indecisão Paralisante',
            descricao: 'Quer mudar mas não sabe para onde. "E se eu me arrepender?" te paralisa.',
          },
          {
            icon: '👀',
            titulo: 'Inveja dos Outros',
            descricao: 'Vê amigos felizes no trabalho e se pergunta "por que eu não?"',
          },
          {
            icon: '😰',
            titulo: 'Preso pelo Medo',
            descricao: 'Família diz "você tem um bom emprego", mas você morre por dentro.',
          },
        ]}
        textoFinal="Você não está sozinho. E NÃO precisa viver assim pelos próximos 30 anos."
      />

      <SolucaoSection
        titulo="É possível mudar SEM arrependimento"
        subtitulo="Você pode descobrir o que realmente quer e fazer a transição com segurança. Não é sobre arriscar tudo. É sobre ter CLAREZA antes de decidir."
        beneficios={[
          { icon: '✅', text: 'Descobrir seu verdadeiro propósito e paixão profissional' },
          { icon: '✅', text: 'Ter clareza total antes de tomar a decisão de mudar' },
          { icon: '✅', text: 'Planejar transição sem perder segurança financeira' },
          { icon: '✅', text: 'Vencer o medo e ter coragem para mudar' },
          { icon: '✅', text: 'Trabalhar com algo que te realiza de verdade' },
          { icon: '✅', text: 'Acordar segunda-feira feliz e motivado' },
        ]}
        textoFinal="O Método FOCCO te dá a clareza necessária para tomar a melhor decisão da sua vida profissional."
      />

      <DepoimentosSection
        titulo="Profissionais que mudaram e estão felizes"
        subtitulo="Veja histórias de quem estava EXATAMENTE na sua situação:"
        depoimentos={[
          {
            nome: 'Carlos Mendes',
            profissao: 'Ex-Contador → Coach de Carreira',
            depoimento: 'Passei 8 anos infeliz na contabilidade. Com o FOCCO descobri minha paixão por ajudar pessoas. Fiz transição planejada em 6 meses. Hoje ganho o mesmo, mas acordo FELIZ todo dia. Melhor decisão da minha vida.',
            rating: 5,
          },
          {
            nome: 'Mariana Silva',
            profissao: 'Ex-Advogada → Designer UX',
            depoimento: 'Direito era o sonho dos meus pais, não meu. Tive coragem de mudar aos 35 anos. O FOCCO me ajudou a ter clareza do caminho. Hoje trabalho com criatividade, ganho melhor e sou realizada.',
            rating: 5,
          },
          {
            nome: 'Roberto Alves',
            profissao: 'Ex-Engenheiro → Empreendedor',
            depoimento: 'Estava preso em emprego estável mas morto por dentro. FOCCO me deu clareza e coragem. Abri meu negócio, levou 1 ano para igualar salário, mas hoje tenho liberdade e propósito.',
            rating: 5,
          },
        ]}
      />

      <FormularioSection
        titulo="Descubra qual carreira te realizaria de verdade"
        subtitulo="Sessão diagnóstica gratuita de 60 min para identificar seu propósito profissional"
        ctaText="🎯 Quero clareza para mudar"
        variant="b"
      />

      <CTAWhatsAppSection
        headline="Pronto para mudar de vida?"
        subheadline="Converse comigo e descubra o primeiro passo da sua transição"
        whatsappMessage="Olá! Vi a página sobre Transição de Carreira e quero saber mais sobre como o Método FOCCO pode me ajudar a descobrir meu propósito e mudar de carreira sem arrependimento."
        whatsappNumber={whatsappNumber}
        variant="b"
      />
      </div>

      <Footer />
    </div>
  );
};

export default AgendamentoB;
