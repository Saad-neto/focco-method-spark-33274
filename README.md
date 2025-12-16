# Método FOCCO - Site Institucional

Site institucional do Método FOCCO, desenvolvido para divulgar os serviços de desenvolvimento humano e bem-estar oferecidos por Valéria Dias.

## 🌐 Site em Produção

- **URL Principal:** https://focconavida.com.br
- **URL Alternativa:** https://www.focconavida.com.br
- **URL Temporária:** https://focco-method-spark-33274-1k8.pages.dev

## 📋 Sobre o Projeto

Site institucional com informações sobre:
- Método FOCCO e seus benefícios
- Serviços oferecidos
- Depoimentos de clientes
- Blog com artigos sobre desenvolvimento humano
- Formulário de contato e CTAs para agendamento via WhatsApp

## 🛠️ Tecnologias Utilizadas

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Routing:** React Router
- **Database:** Supabase
- **Deploy:** Cloudflare Pages
- **Hospedagem:** 100% Gratuita

## 🚀 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ ([instalar com nvm](https://github.com/nvm-sh/nvm))
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/focconavida/focco-method-spark-33274.git

# Navegue até a pasta
cd focco-method-spark-33274

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://vtsqvmmhgekwdwihyaax.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0c3F2bW1oZ2Vrd2R3aWh5YWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjkzMzQsImV4cCI6MjA3Njc0NTMzNH0.r-9HdIIiga2DHQoBqSI1FE5__o5jrjFvg1nLAGGjwog
```

## 📦 Build de Produção

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run preview
```

Os arquivos de produção estarão em `dist/`

## 🚀 Deploy

O site utiliza **deploy automático** via Cloudflare Pages conectado ao GitHub.

### Como Funciona

1. **Faça commit** das suas alterações:
```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

2. **Aguarde 2-5 minutos** - O Cloudflare Pages irá automaticamente:
   - Detectar o commit
   - Fazer o build (`npm run build`)
   - Publicar em produção
   - Atualizar https://focconavida.com.br

### Configuração do Deploy

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** Vite
- **Environment variables:** Configuradas no Cloudflare Dashboard

Para mais detalhes, consulte [DEPLOY-GUIDE.md](./DEPLOY-GUIDE.md)

## 🏗️ Estrutura do Projeto

```
focco-method-spark-33274/
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes shadcn/ui
│   │   └── ...           # Componentes customizados
│   ├── pages/            # Páginas do site
│   ├── lib/              # Utilitários e configurações
│   ├── hooks/            # React hooks customizados
│   ├── assets/           # Imagens e arquivos estáticos
│   └── styles/           # Arquivos CSS globais
├── public/               # Arquivos públicos
├── dist/                 # Build de produção (gerado)
└── ...
```

## 📞 Contato e Suporte

- **Site:** https://focconavida.com.br
- **WhatsApp:** +55 83 99378-7450
- **Email:** focconavida@gmail.com
- **Instagram:** [@focconavida](https://www.instagram.com/focconavida/)

## 📄 Licença

© 2025 FOCCO NA VIDA - Todos os direitos reservados

## 👨‍💻 Desenvolvido com

- React + TypeScript
- Vite
- Tailwind CSS
- Cloudflare Pages
- Supabase
