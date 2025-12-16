# 🚀 Guia Completo de Deploy - Método FOCCO

## ✅ Configuração Atual (Dezembro 2025)

**Site em Produção:**
- 🌐 https://focconavida.com.br
- 🌐 https://www.focconavida.com.br
- 🌐 https://focco-method-spark-33274-1k8.pages.dev (URL temporária)

**Infraestrutura:**
- **GitHub:** [focconavida/focco-method-spark-33274](https://github.com/focconavida/focco-method-spark-33274)
- **Deploy:** Cloudflare Pages (deploy automático)
- **DNS:** Cloudflare (nameservers: mustafa.ns / virginia.ns)
- **Domínio:** Registro.br (focconavida.com.br)
- **SSL/HTTPS:** Ativo e automático via Cloudflare
- **Custo:** R$ 0,00/mês (apenas R$ 40/ano do domínio)

---

## 🔄 Deploy Automático

### Como Funciona

Toda vez que você faz `git push` para a branch `main`, o Cloudflare Pages automaticamente:

1. ✅ Detecta o novo commit
2. ✅ Clona o repositório
3. ✅ Instala dependências (`npm install`)
4. ✅ Executa o build (`npm run build`)
5. ✅ Publica o site em produção
6. ✅ Atualiza focconavida.com.br

**Tempo total:** 2-5 minutos

### Fazer Update no Site

```bash
# 1. Faça suas alterações no código

# 2. Commit das mudanças
git add .
git commit -m "Descrição clara das alterações"

# 3. Push para GitHub
git push origin main

# 4. Aguarde 2-5 minutos
# O site será atualizado automaticamente!
```

### Acompanhar Deploy

1. Acesse https://dash.cloudflare.com
2. Vá em **Workers & Pages** → **focco-method-spark-33274**
3. Aba **Deployments**
4. Veja o status em tempo real

---

## 🏗️ Configuração Técnica

### Build Settings

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (vazio)
Node version: 18.x
```

### Environment Variables

Configuradas no Cloudflare Dashboard:

```env
VITE_SUPABASE_URL=https://vtsqvmmhgekwdwihyaax.supabase.co
VITE_SUPABASE_ANON_KEY=[chave configurada no dashboard]
```

**Como adicionar/editar:**
1. Dashboard → Workers & Pages → focco-method-spark-33274
2. Settings → Environment Variables
3. Add variable / Edit

---

## 🌐 Configuração DNS

### Domínio Principal

**Registro no Registro.br:**
- Domínio: focconavida.com.br
- Nameservers:
  - `mustafa.ns.cloudflare.com`
  - `virginia.ns.cloudflare.com`

### Registros DNS no Cloudflare

```
Type: CNAME
Name: focconavida.com.br (ou @)
Target: focco-method-spark-33274-1k8.pages.dev
Proxy: Proxied (laranja)
TTL: Auto

Type: CNAME
Name: www
Target: focconavida.com.br
Proxy: Proxied (laranja)
TTL: Auto
```

**Resultado:**
- ✅ https://focconavida.com.br → Funciona
- ✅ https://www.focconavida.com.br → Funciona
- ✅ SSL automático
- ✅ CDN global ativo

---

## 🔧 Administração

### Acessos

**Conta do Cliente:**
- Email: focconavida@gmail.com
- GitHub: https://github.com/focconavida
- Cloudflare: https://dash.cloudflare.com
- Registro.br: https://registro.br

**Repositório:**
- GitHub URL: https://github.com/focconavida/focco-method-spark-33274
- Branch principal: `main`

### Cloudflare Dashboard

**Principais Seções:**
- **Deployments:** Ver histórico de deploys
- **Custom domains:** Gerenciar domínios
- **Settings:** Configurações e variáveis de ambiente
- **Analytics:** Métricas de acesso (se habilitado)

---

## 🆘 Troubleshooting

### Site não atualiza após commit

**Verificar:**
1. Commit foi para branch `main`?
   ```bash
   git branch  # Verifica branch atual
   ```
2. Push foi bem-sucedido?
   ```bash
   git push origin main
   ```
3. Build passou no Cloudflare?
   - Dashboard → Deployments → Verificar status

**Solução:**
- Se build falhou: Veja os logs de erro
- Se build passou mas site não mudou: Limpe cache do navegador (Ctrl+Shift+R)

### Erro 500 ou site não carrega

**Verificar:**
1. Variáveis de ambiente configuradas?
   - Dashboard → Settings → Environment Variables
2. Build gerou a pasta `dist/` corretamente?
   - Veja logs do último deployment

**Solução:**
- Retry deployment no dashboard
- Verificar se todas as dependências estão no `package.json`

### SSL/HTTPS com erro

**Verificar:**
1. Cloudflare → SSL/TLS → Overview
2. Modo deve estar em: **Full** ou **Full (strict)**

**Solução:**
- Aguardar propagação (pode levar até 24h para novos domínios)
- Verificar se domínio está apontando para nameservers corretos

### DNS não propaga

**Testar propagação:**
```bash
# Linux/Mac
dig focconavida.com.br

# Windows
nslookup focconavida.com.br
```

**Verificar online:**
- https://www.whatsmydns.net/

**Solução:**
- Aguardar (propagação pode levar 2-48h)
- Verificar nameservers no Registro.br
- Limpar cache DNS local:
  ```bash
  # Windows
  ipconfig /flushdns

  # Mac
  sudo dscacheutil -flushcache

  # Linux
  sudo systemd-resolve --flush-caches
  ```

---

## 📊 Performance e Otimizações

### Cloudflare CDN

O site está automaticamente otimizado com:
- ✅ Cache global em 200+ cidades
- ✅ Compressão Brotli/Gzip
- ✅ Minificação automática (HTML/CSS/JS)
- ✅ HTTP/2 e HTTP/3
- ✅ IPv6

### Build Otimizado

Vite já faz automaticamente:
- ✅ Tree-shaking (remove código não usado)
- ✅ Code splitting
- ✅ Minificação de JavaScript
- ✅ Otimização de CSS
- ✅ Compressão de assets

---

## 💰 Custos

### Atual (Dezembro 2025)

| Serviço | Custo |
|---------|-------|
| **Cloudflare Pages** | R$ 0,00/mês |
| **Cloudflare CDN** | R$ 0,00/mês |
| **Cloudflare SSL** | R$ 0,00/mês |
| **GitHub** | R$ 0,00/mês |
| **Domínio .com.br** | ~R$ 40,00/ano |
| **TOTAL** | **~R$ 3,33/mês** |

### Limites do Plano Free

Cloudflare Pages - Plano Free:
- ✅ 500 builds/mês
- ✅ Bandwidth ilimitado
- ✅ 100 custom domains
- ✅ 20.000 requests/dia
- ✅ Preview deployments ilimitados

**Para o site FOCCO:** Limites mais que suficientes!

---

## 🎯 Checklist de Manutenção

### Semanal
- [ ] Verificar se site está acessível
- [ ] Testar formulários de contato
- [ ] Verificar links do WhatsApp

### Mensal
- [ ] Revisar analytics (se configurado)
- [ ] Verificar tempo de carregamento
- [ ] Testar em diferentes dispositivos

### Anual
- [ ] Renovar domínio no Registro.br
- [ ] Revisar e atualizar conteúdo
- [ ] Atualizar dependências (`npm update`)

---

## 📞 Links Úteis

- **Site:** https://focconavida.com.br
- **GitHub Repo:** https://github.com/focconavida/focco-method-spark-33274
- **Cloudflare Dashboard:** https://dash.cloudflare.com
- **Registro.br:** https://registro.br
- **Status DNS:** https://www.whatsmydns.net/
- **Docs Cloudflare Pages:** https://developers.cloudflare.com/pages/

---

## 🤝 Suporte

**Problemas técnicos:**
1. Verifique este guia primeiro
2. Consulte documentação do Cloudflare
3. Veja logs de deployment no dashboard

**Alterações no site:**
1. Faça commit das mudanças
2. Push para GitHub
3. Aguarde deploy automático

---

**Última atualização:** Dezembro 2025
**Status:** ✅ Produção - 100% Funcional
**Desenvolvido com:** Claude Code 🤖
