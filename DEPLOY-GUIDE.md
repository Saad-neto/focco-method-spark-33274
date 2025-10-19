# 🚀 Guia de Deploy - Método FOCCO

## Hospedagem Gratuita com Cloudflare Pages + Domínio Registro.br

---

## 📦 Passo 1: Preparar o Repositório GitHub

### 1.1. Fazer commit das alterações
```bash
cd /root/projetos/focco/focco-method-spark-33274

# Adicionar todas as alterações
git add .

# Criar commit
git commit -m "Finalização do projeto para entrega ao cliente

- Atualização de informações de contato
- Redesign da página de contato com CTA WhatsApp
- Atualização de todos os CTAs para WhatsApp
- Correção da página 404
- Melhorias de código e lint"

# Enviar para GitHub
git push origin main
```

### 1.2. Se ainda não estiver no GitHub
```bash
# Já está no GitHub em: https://github.com/Saad-neto/focco-method-spark-33274
# Basta fazer o push conforme acima
```

---

## ☁️ Passo 2: Deploy no Cloudflare Pages

### 2.1. Criar conta no Cloudflare
1. Acesse: https://dash.cloudflare.com/sign-up
2. Crie uma conta gratuita
3. Confirme seu email

### 2.2. Configurar Cloudflare Pages
1. No painel do Cloudflare, vá em **Workers & Pages**
2. Clique em **Create Application**
3. Selecione **Pages** → **Connect to Git**
4. Conecte sua conta do GitHub
5. Selecione o repositório: `focco-method-spark-33274`
6. Configure o build:

```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (deixe vazio)
Environment variables: (nenhuma necessária)
```

7. Clique em **Save and Deploy**

⏱️ **Aguarde 2-5 minutos** - O Cloudflare vai fazer o build e deploy automático

### 2.3. Verificar Deploy
Após o deploy, você receberá um URL temporário:
```
https://focco-method-spark-33274.pages.dev
```

Teste o site neste URL antes de conectar o domínio!

---

## 🌐 Passo 3: Configurar Domínio no Registro.br

### 3.1. Adicionar Domínio ao Cloudflare Pages

1. No painel do Cloudflare Pages, vá até seu projeto
2. Clique em **Custom Domains**
3. Clique em **Set up a custom domain**
4. Digite seu domínio (exemplo: `metodofocco.com.br`)
5. Clique em **Continue**

O Cloudflare vai fornecer os registros DNS necessários.

### 3.2. Configurar DNS no Registro.br

#### Opção A: Usando Nameservers do Cloudflare (RECOMENDADO)

**Vantagens:**
- SSL automático
- CDN gratuito
- Proteção DDoS
- Dashboard unificado

**Passos:**

1. **No Cloudflare**, adicione seu domínio:
   - Vá em **Websites** → **Add a Site**
   - Digite seu domínio: `seudominio.com.br`
   - Escolha o plano **Free**
   - O Cloudflare vai escanear seus DNS atuais

2. **Cloudflare vai fornecer 2 nameservers**, algo como:
   ```
   aisha.ns.cloudflare.com
   dolf.ns.cloudflare.com
   ```

3. **No Registro.br**, altere os nameservers:
   - Acesse: https://registro.br
   - Faça login com sua conta
   - Vá em **Meus Domínios**
   - Clique no domínio desejado
   - Vá em **Servidores DNS**
   - Selecione **Usar servidores DNS externos**
   - Adicione os 2 nameservers do Cloudflare
   - Clique em **Salvar**

4. **Volte ao Cloudflare** e clique em **Done, check nameservers**

⏱️ **Propagação DNS**: 2-48 horas (geralmente 2-6 horas)

---

#### Opção B: Usando DNS do Registro.br (Mais Simples)

**Se preferir manter os DNS no Registro.br:**

1. **No Cloudflare Pages**, ao adicionar o domínio, você verá os registros necessários

2. **Registros DNS para adicionar no Registro.br:**

```
Tipo: CNAME
Nome: @  (ou deixe vazio)
Destino: focco-method-spark-33274.pages.dev
TTL: 3600

Tipo: CNAME
Nome: www
Destino: focco-method-spark-33274.pages.dev
TTL: 3600
```

**IMPORTANTE:** O Registro.br NÃO permite CNAME no domínio raiz (@).
**Solução:** Use registros A apontando para os IPs do Cloudflare:

```
Tipo: A
Nome: @
Endereço IPv4: (IPs fornecidos pelo Cloudflare)
TTL: 3600
```

**Passos no Registro.br:**

1. Acesse: https://registro.br
2. Faça login
3. Vá em **Meus Domínios**
4. Clique no domínio
5. Vá em **Editar Zona**
6. Adicione os registros conforme acima
7. Clique em **Salvar**

⏱️ **Propagação**: 2-24 horas

---

## ✅ Passo 4: Verificação Final

### 4.1. Testar o Domínio
Após a propagação DNS, teste:
```bash
# Verificar se o DNS propagou
nslookup seudominio.com.br

# Testar no navegador
https://seudominio.com.br
https://www.seudominio.com.br
```

### 4.2. Verificar SSL/HTTPS
- O Cloudflare Pages gera SSL automático
- Aguarde até 24h para o certificado ser emitido
- Seu site deve abrir com **https://** automaticamente

### 4.3. Checklist Final
- [ ] Site carrega corretamente
- [ ] HTTPS funcionando
- [ ] www redireciona para domínio principal
- [ ] Todos os CTAs do WhatsApp funcionam
- [ ] Email (focconavida@gmail.com) está correto
- [ ] Número do WhatsApp está correto
- [ ] Imagens carregando
- [ ] Design responsivo (mobile/desktop)

---

## 🔄 Deploy Automático

Com Cloudflare Pages + GitHub, todo commit que você fizer na branch `main` vai automaticamente:

1. Rodar o build
2. Fazer deploy
3. Atualizar o site

**Fluxo de trabalho:**
```bash
# Fazer alterações no código
git add .
git commit -m "Descrição das alterações"
git push origin main

# ⏱️ 2-5 minutos depois, site atualizado automaticamente!
```

---

## 🆘 Troubleshooting

### Problema: DNS não propagou
**Solução:**
```bash
# Limpar cache DNS local
ipconfig /flushdns  # Windows
sudo dscacheutil -flushcache  # Mac
sudo systemd-resolve --flush-caches  # Linux

# Testar em modo anônimo/privado do navegador
```

### Problema: SSL não funciona
**Solução:**
- Aguarde 24h para emissão do certificado
- No Cloudflare, vá em SSL/TLS → Overview
- Selecione **Full** ou **Full (strict)**

### Problema: Site não atualiza após commit
**Solução:**
- Verifique o build no painel do Cloudflare Pages
- Veja os logs de build
- Certifique-se que o commit foi para a branch `main`

### Problema: Imagens não carregam
**Solução:**
- Verifique se as imagens estão na pasta `src/assets/`
- Verifique se os imports estão corretos
- Limpe cache do navegador

---

## 📊 Monitoramento

### Analytics (Opcional - Gratuito)
Adicione Google Analytics ou Cloudflare Web Analytics:

1. **Cloudflare Web Analytics** (Recomendado - sem cookies)
   - No painel Cloudflare: **Analytics** → **Web Analytics**
   - Copie o script
   - Adicione no `index.html`

2. **Google Analytics**
   - Crie uma propriedade em analytics.google.com
   - Copie o código de tracking
   - Adicione no `index.html`

---

## 💰 Custos

### Cloudflare Pages: **R$ 0,00/mês**
- Build ilimitados
- Bandwidth ilimitado
- CDN global
- SSL gratuito

### Domínio .com.br: **~R$ 40,00/ano** (Registro.br)
- Renovação anual
- Menor preço do Brasil

**Total: ~R$ 40/ano** (apenas o domínio!)

---

## 🎯 Resumo

1. ✅ Código está pronto e testado
2. ✅ Push para GitHub
3. ✅ Deploy no Cloudflare Pages (2-5 min)
4. ✅ Configurar domínio no Registro.br (2-24h propagação)
5. ✅ Testar site no domínio final
6. ✅ **Entregar ao cliente!** 🎉

---

## 📞 Links Úteis

- Cloudflare Pages: https://pages.cloudflare.com/
- Registro.br: https://registro.br
- Documentação Cloudflare: https://developers.cloudflare.com/pages/
- Status DNS: https://www.whatsmydns.net/

---

**Dúvidas? Problemas?**
Consulte a documentação oficial ou entre em contato com o suporte do Cloudflare (muito eficiente!).
