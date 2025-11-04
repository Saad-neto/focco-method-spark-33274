# 🔧 TROUBLESHOOTING - Erro 404 nas Landing Pages

## ❌ PROBLEMA
As páginas `/agendamento-a`, `/agendamento-b`, `/agendamento-c`, `/agendamento-d` retornam erro 404 no Cloudflare Pages.

---

## ✅ SOLUÇÕES IMPLEMENTADAS

### 1. Middleware Cloudflare Pages Functions
**Arquivo:** `functions/_middleware.js`
- Intercepta requisições 404
- Serve index.html para rotas SPA
- Permite assets estáticos normalmente

### 2. Arquivo _redirects
**Arquivo:** `public/_redirects`
```
/* /index.html 200
```
- Redireciona todas as rotas para index.html
- Mantém status 200 (não é redirect real)

### 3. Arquivo 404.html Fallback
- Gerado automaticamente no build
- Cópia do index.html

### 4. Headers de Segurança
**Arquivo:** `public/_headers`
- Headers de segurança padrão

---

## 🔍 VERIFICAÇÕES OBRIGATÓRIAS

### 1️⃣ VERIFICAR DASHBOARD CLOUDFLARE PAGES

1. **Acesse:** https://dash.cloudflare.com/pages
2. **Selecione o projeto:** `focco-method-spark-33274`
3. **Verifique:**
   - ✅ Último deploy tem status "Success"
   - ✅ Data/hora do último deploy é recente
   - ✅ Branch está correta (main)

### 2️⃣ VERIFICAR CONFIGURAÇÕES DO PROJETO

No dashboard do Cloudflare Pages:

1. **Settings → Builds & deployments**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (vazio = raiz)

2. **Settings → Functions**
   - ✅ Verificar se Functions está HABILITADO
   - ✅ Deve aparecer o arquivo `_middleware.js`

### 3️⃣ VERIFICAR ARQUIVOS NO BUILD

No dashboard, clique no último deploy e verifique se existem:
- ✅ `index.html`
- ✅ `404.html`
- ✅ `_redirects`
- ✅ `_headers`
- ✅ Pasta `assets/`
- ✅ Pasta `functions/` (se Functions estiver habilitado)

---

## 🚨 PROBLEMA COMUM: Functions Desabilitado

O Cloudflare Pages pode ter **Functions desabilitado** no seu projeto.

### SOLUÇÃO:

1. **Acesse:** Dashboard → Seu Projeto → Settings → Functions
2. **Habilite Functions** (pode ser um toggle/switch)
3. **Salve as configurações**
4. **Force um novo deploy:**
   - Settings → Builds & deployments
   - "Retry deployment" no último deploy

---

## 🔄 SOLUÇÃO ALTERNATIVA: Forçar Novo Deploy

Se o problema persistir, force um novo deploy:

```bash
# No terminal local
git commit --allow-empty -m "Force redeploy to fix 404"
git push origin main
```

Ou no dashboard:
- Builds & deployments → View builds
- Clique no último build
- "Retry deployment"

---

## 🧪 TESTE CADA ETAPA

### 1. Teste a URL do Cloudflare Pages primeiro:
```
https://focco-method-spark-33274.pages.dev/agendamento-a
https://focco-method-spark-33274.pages.dev/agendamento-b
https://focco-method-spark-33274.pages.dev/agendamento-c
https://focco-method-spark-33274.pages.dev/agendamento-d
```

### 2. Depois teste o domínio customizado:
```
https://focconavida.com.br/agendamento-a
https://focconavida.com.br/agendamento-b
https://focconavida.com.br/agendamento-c
https://focconavida.com.br/agendamento-d
```

---

## 📱 TESTE NO NAVEGADOR

1. **Abra DevTools (F12)**
2. **Aba Network**
3. **Acesse:** https://focco-method-spark-33274.pages.dev/agendamento-a
4. **Verifique:**
   - Qual arquivo HTML foi servido?
   - Status code (200, 404, etc)?
   - Headers da resposta

---

## 🔧 SE AINDA NÃO FUNCIONAR

### Opção 1: Usar HashRouter (solução temporária)

Editar `src/App.tsx`:
```tsx
import { HashRouter, Routes, Route } from "react-router-dom";

// Trocar BrowserRouter por HashRouter
<HashRouter>
  <Routes>
    ...
  </Routes>
</HashRouter>
```

As URLs ficariam:
```
https://focconavida.com.br/#/agendamento-a
https://focconavida.com.br/#/agendamento-b
```

### Opção 2: Deploy em Vercel/Netlify

Essas plataformas têm melhor suporte para SPA:

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📞 PRÓXIMOS PASSOS

1. **Verifique o dashboard do Cloudflare** conforme instruções acima
2. **Tire screenshots** se encontrar algo diferente
3. **Teste as URLs** do Cloudflare Pages (não o domínio custom)
4. **Me envie:**
   - Status do último deploy
   - Screenshot do dashboard
   - Mensagem de erro completa (F12 → Console)

---

## ✅ CHECKLIST FINAL

- [ ] Dashboard mostra "Success"
- [ ] Functions está habilitado
- [ ] Build output é `dist`
- [ ] Arquivos `_redirects` e `404.html` existem no build
- [ ] Testei com Cloudflare Pages URL (.pages.dev)
- [ ] Limpei cache do navegador
- [ ] Testei em aba anônima
- [ ] Testei em outro navegador
- [ ] Aguardei pelo menos 5 minutos após deploy

---

**Última atualização:** 04/11/2025
