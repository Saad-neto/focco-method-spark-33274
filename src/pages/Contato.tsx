import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'nome':
        return value.trim().length < 3 ? 'Nome deve ter no mínimo 3 caracteres' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'E-mail inválido' : '';
      case 'telefone':
        return !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(value) && value.length > 0 
          ? 'Formato: (00) 00000-0000' : '';
      case 'assunto':
        return !value ? 'Selecione um assunto' : '';
      case 'mensagem':
        return value.trim().length < 10 ? 'Mensagem deve ter no mínimo 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Máscara de telefone
    let formattedValue = value;
    if (name === 'telefone') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2')
        .slice(0, 15);
    }
    
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    
    // Validação em tempo real
    const error = validateField(name, formattedValue);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, assunto: value }));
    const error = validateField('assunto', value);
    setErrors(prev => ({ ...prev, assunto: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar todos os campos
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Por favor, corrija os erros no formulário');
      return;
    }

    setIsSubmitting(true);

    // Simulação de envio
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Mensagem enviada com sucesso!', {
        description: 'Retornaremos em até 24 horas.',
      });

      // Limpar formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
      });
      setErrors({});
    } catch (error) {
      toast.error('Erro ao enviar mensagem', {
        description: 'Tente novamente ou entre em contato via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contatosDiretos = [
    {
      icon: 'fa-envelope',
      titulo: 'E-mail',
      valor: 'contato@metodofocco.com.br',
      link: 'mailto:contato@metodofocco.com.br',
    },
    {
      icon: 'fa-whatsapp',
      titulo: 'WhatsApp',
      valor: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999',
    },
    {
      icon: 'fa-instagram',
      titulo: 'Instagram',
      valor: '@metodofocco',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading mb-6">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos prontos para ouvir você e iniciar sua jornada de transformação
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Informações de Contato */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-heading text-2xl mb-6">Fale Conosco</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Escolha o canal mais conveniente para você. Respondemos todas as mensagens em até 24 horas.
                </p>
              </div>

              {contatosDiretos.map((contato, index) => (
                <a
                  key={index}
                  href={contato.link}
                  target={contato.link.startsWith('http') ? '_blank' : undefined}
                  rel={contato.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-outline group block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                      <i className={`fab ${contato.icon} text-2xl text-primary group-hover:text-primary-foreground transition-colors`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{contato.titulo}</h3>
                      <p className="text-muted-foreground text-sm">{contato.valor}</p>
                    </div>
                  </div>
                </a>
              ))}

              <div className="card-elevated bg-accent/5 border-l-4 border-accent">
                <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                  <i className="fas fa-gift text-accent"></i>
                  Primeira Sessão Gratuita
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conheça o Método FOCCO sem compromisso. Agende sua sessão experimental gratuita.
                </p>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="card-elevated">
                <h2 className="font-heading text-2xl mb-6">Envie sua Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="block font-semibold mb-2">
                      Nome Completo <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleChange}
                      className={errors.nome ? 'border-destructive' : ''}
                      placeholder="Seu nome completo"
                    />
                    {errors.nome && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <i className="fas fa-exclamation-circle"></i>
                        {errors.nome}
                      </p>
                    )}
                  </div>

                  {/* Email e Telefone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-semibold mb-2">
                        E-mail <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'border-destructive' : ''}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <i className="fas fa-exclamation-circle"></i>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block font-semibold mb-2">
                        Telefone <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleChange}
                        className={errors.telefone ? 'border-destructive' : ''}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.telefone && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <i className="fas fa-exclamation-circle"></i>
                          {errors.telefone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Assunto */}
                  <div>
                    <label htmlFor="assunto" className="block font-semibold mb-2">
                      Assunto <span className="text-destructive">*</span>
                    </label>
                    <Select value={formData.assunto} onValueChange={handleSelectChange}>
                      <SelectTrigger className={errors.assunto ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Selecione um assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mentoria">Mentoria Individual</SelectItem>
                        <SelectItem value="workshop">Workshop em Grupo</SelectItem>
                        <SelectItem value="corporativo">Programa Corporativo</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.assunto && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <i className="fas fa-exclamation-circle"></i>
                        {errors.assunto}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="mensagem" className="block font-semibold mb-2">
                      Mensagem <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      className={`min-h-[150px] ${errors.mensagem ? 'border-destructive' : ''}`}
                      placeholder="Conte-nos sobre seus objetivos e como podemos ajudar..."
                    />
                    {errors.mensagem && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <i className="fas fa-exclamation-circle"></i>
                        {errors.mensagem}
                      </p>
                    )}
                  </div>

                  {/* Botão Submit */}
                  <Button 
                    type="submit" 
                    className="btn-hero w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <p className="text-muted-foreground text-sm text-center">
                    Ao enviar, você concorda com nossa política de privacidade
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
