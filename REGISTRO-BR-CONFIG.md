# 🌐 Configuração do Domínio FOCCONAVIDA.COM.BR

Domínio registrado em: **Registro.br**

---

## 📋 Opções de Configuração

Você tem **3 opções** para configurar seu domínio. Recomendo a **Opção 1** (mais completa).

---

## ✅ OPÇÃO 1: Cloudflare (RECOMENDADA)

### Por que usar Cloudflare?
- ✅ **100% Gratuito**
- ✅ **SSL/HTTPS automático** (site seguro)
- ✅ **CDN Global** (site rápido em todo o Brasil)
- ✅ **Proteção DDoS** (segurança contra ataques)
- ✅ **Dashboard completo** (estatísticas, analytics)
- ✅ **Email forwarding grátis** (encaminhar emails)

### Passo a Passo Completo

#### 1️⃣ Criar Conta no Cloudflare

1. Acesse: **https://dash.cloudflare.com/sign-up**
2. Preencha:
   - Email: (seu email)
   - Senha: (crie uma senha forte)
3. Clique em **Sign Up**
4. Confirme seu email (verifique caixa de entrada/spam)

---

#### 2️⃣ Adicionar o Domínio no Cloudflare

1. Faça login no Cloudflare
2. No painel principal, clique em **Add a Site**
3. Digite: `focconavida.com.br`
4. Clique em **Add Site**
5. Selecione o plano **Free** (R$ 0,00)
6. Clique em **Continue**

O Cloudflare vai escanear seus DNS atuais (aguarde 1-2 minutos).

---

#### 3️⃣ Anotar os Nameservers do Cloudflare

Após o scan, o Cloudflare vai fornecer **2 nameservers**, algo como:

```
Nameserver 1: aisha.ns.cloudflare.com
Nameserver 2: dolf.ns.cloudflare.com
```

**⚠️ IMPORTANTE: Anote esses 2 nameservers!** Você vai precisar deles no próximo passo.

**NÃO CLIQUE EM "DONE" AINDA!** Deixe essa aba aberta.

---

#### 4️⃣ Configurar Nameservers no Registro.br

Agora vamos alterar os nameservers no Registro.br:

1. **Acesse:** https://registro.br
2. **Faça login** com seu CPF/CNPJ e senha
3. Vá em **Meus Domínios**
4. Clique em **FOCCONAVIDA.COM.BR**
5. No menu lateral, clique em **Servidores DNS**
6. Você verá as opções:
   - ⭕ Usar servidores DNS do Registro.br
   - ⭕ Usar meus servidores DNS (DNSSEC habilitado)
   - ⭕ Usar meus servidores DNS (DNSSEC desabilitado)

7. **Selecione:** "Usar meus servidores DNS (DNSSEC desabilitado)"

8. **Adicione os 2 nameservers do Cloudflare:**

```
Servidor DNS 1: aisha.ns.cloudflare.com
Servidor DNS 2: dolf.ns.cloudflare.com
```

(Use os nameservers que o Cloudflare forneceu para VOCÊ - podem ser diferentes)

9. Clique em **Salvar**

10. **Confirme a alteração** (pode pedir senha novamente)

✅ **Pronto!** Nameservers configurados no Registro.br

---

#### 5️⃣ Finalizar no Cloudflare

1. Volte para a aba do Cloudflare
2. Clique em **Done, check nameservers**
3. O Cloudflare vai verificar (pode levar alguns minutos)
4. Você verá a mensagem: **"Waiting for nameserver updates"**

⏱️ **Aguarde de 2 a 48 horas** para a propagação DNS completa.
(Normalmente funciona em 2-6 horas, mas pode levar até 48h)

---

#### 6️⃣ Configurar Cloudflare Pages

Enquanto aguarda a propagação DNS, configure o Cloudflare Pages:

1. No painel do Cloudflare, clique em **Workers & Pages** (menu lateral)
2. Clique em **Create Application**
3. Selecione **Pages**
4. Clique em **Connect to Git**
5. Clique em **Connect GitHub**
6. Autorize o Cloudflare no GitHub
7. Selecione o repositório: **focco-method-spark-33274**
8. Configure o projeto:

```
Project name: focconavida (ou deixe o padrão)
Production branch: main
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: (deixe vazio)
Environment variables: (nenhuma)
```

9. Clique em **Save and Deploy**

⏱️ **Aguarde 3-5 minutos** - O site será buildado e deployed.

Após o deploy, você receberá uma URL temporária:
```
https://focconavida.pages.dev
```

**✅ Teste o site nessa URL antes de continuar!**

---

#### 7️⃣ Conectar o Domínio ao Cloudflare Pages

1. No projeto do Cloudflare Pages, vá em **Custom Domains**
2. Clique em **Set up a custom domain**
3. Digite: `focconavida.com.br`
4. Clique em **Continue**
5. Cloudflare vai configurar automaticamente! ✅
6. Repita para o subdomínio:
   - Clique em **Set up a custom domain** novamente
   - Digite: `www.focconavida.com.br`
   - Clique em **Continue**

---

#### 8️⃣ Configurar SSL/HTTPS

1. No painel do Cloudflare, clique em **SSL/TLS** (menu lateral)
2. Em **Overview**, selecione: **Full**
3. Aguarde alguns minutos para o certificado SSL ser emitido

✅ Seu site agora terá HTTPS automático!

---

#### 9️⃣ Verificar Propagação DNS

Após algumas horas, verifique se o DNS propagou:

**Opção 1 - Online:**
1. Acesse: https://www.whatsmydns.net/
2. Digite: `focconavida.com.br`
3. Selecione tipo: **A**
4. Clique em **Search**
5. Veja se está propagando globalmente

**Opção 2 - Linha de comando:**
```bash
nslookup focconavida.com.br
```

Se retornar IPs do Cloudflare, está funcionando!

---

#### 🔟 Teste Final

Após a propagação completa, teste:

1. **https://focconavida.com.br** ✅
2. **https://www.focconavida.com.br** ✅
3. Verifique se o **cadeado SSL** aparece ✅
4. Teste no **celular** ✅
5. Teste os **CTAs do WhatsApp** ✅

---

## 🎯 RESUMO - Opção 1 (Cloudflare)

1. ✅ Criar conta no Cloudflare
2. ✅ Adicionar domínio focconavida.com.br
3. ✅ Anotar nameservers do Cloudflare
4. ✅ Configurar nameservers no Registro.br
5. ✅ Aguardar propagação (2-48h)
6. ✅ Configurar Cloudflare Pages
7. ✅ Conectar domínio customizado
8. ✅ Configurar SSL
9. ✅ Testar site

**Tempo total: 2-48h (maior parte é aguardar propagação DNS)**

---

---

## ⚡ OPÇÃO 2: Cloudflare Pages SEM Cloudflare DNS (Mais Rápido)

Se você quiser manter os DNS no Registro.br:

### Passo a Passo

#### 1️⃣ Configurar Cloudflare Pages

(Siga os passos 6 do Opção 1 acima)

#### 2️⃣ Obter Registros DNS

Ao adicionar domínio customizado no Cloudflare Pages, você verá:

```
Adicione estes registros no seu DNS:

Tipo: CNAME
Nome: focconavida.com.br
Destino: focco-method-spark-33274.pages.dev

Tipo: CNAME
Nome: www
Destino: focco-method-spark-33274.pages.dev
```

**PROBLEMA:** Registro.br NÃO permite CNAME no domínio raiz!

**SOLUÇÃO:** Use CNAME Flattening ou registros A:

#### 3️⃣ Configurar DNS no Registro.br

1. Acesse: https://registro.br
2. Faça login
3. Vá em **Meus Domínios**
4. Clique em **FOCCONAVIDA.COM.BR**
5. Clique em **Editar Zona**
6. Adicione os registros:

**Para www:**
```
Tipo: CNAME
Nome: www
Dados: focco-method-spark-33274.pages.dev
TTL: 3600
```

**Para domínio raiz (focconavida.com.br):**

Opção A - Se Registro.br suportar ALIAS/ANAME:
```
Tipo: ALIAS
Nome: @
Dados: focco-method-spark-33274.pages.dev
TTL: 3600
```

Opção B - Usar redirecionamento no Registro.br:
```
Configure um redirecionamento de focconavida.com.br para www.focconavida.com.br
```

7. Clique em **Salvar**

⏱️ **Aguarde 2-24h** para propagação

---

## 🔧 OPÇÃO 3: Vercel

Alternativa ao Cloudflare Pages:

### Passo a Passo

1. Acesse: https://vercel.com
2. Clique em **Sign Up**
3. Faça login com **GitHub**
4. Clique em **Import Project**
5. Selecione o repositório: **focco-method-spark-33274**
6. Configure:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   ```
7. Clique em **Deploy**

⏱️ **Aguarde 2-3 minutos** - Site no ar!

Você receberá: `focco-method-spark-33274.vercel.app`

### Adicionar Domínio Customizado

1. No projeto, vá em **Settings** → **Domains**
2. Digite: `focconavida.com.br`
3. Clique em **Add**
4. Vercel vai fornecer os registros DNS

### Configurar no Registro.br

1. Acesse Registro.br
2. **Editar Zona**
3. Adicione os registros fornecidos pela Vercel
4. Aguarde propagação (2-24h)

---

## 📊 Comparação das Opções

| Recurso | Cloudflare (Op. 1) | Cloudflare Pages (Op. 2) | Vercel (Op. 3) |
|---------|-------------------|-------------------------|----------------|
| **Custo** | R$ 0 | R$ 0 | R$ 0 |
| **SSL Grátis** | ✅ | ✅ | ✅ |
| **CDN Global** | ✅ | ✅ | ✅ |
| **Proteção DDoS** | ✅ | ❌ | ❌ |
| **Email Forwarding** | ✅ | ❌ | ❌ |
| **Analytics** | ✅ | Básico | ✅ |
| **Tempo Setup** | Médio (2-48h) | Rápido (2-24h) | Rápido (2-24h) |
| **Complexidade** | Média | Baixa | Baixa |

**🏆 Recomendação:** **Opção 1 (Cloudflare completo)** - Mais recursos, mais proteção.

---

## 🆘 Troubleshooting

### Problema: "Nameservers não atualizaram"
**Solução:**
- Aguarde mais tempo (pode levar até 48h)
- Verifique se digitou corretamente os nameservers
- Limpe cache DNS:
  ```bash
  ipconfig /flushdns  # Windows
  sudo dscacheutil -flushcache  # Mac
  ```

### Problema: "Site não carrega após propagação"
**Solução:**
- Teste em modo anônimo do navegador
- Verifique se o Cloudflare Pages está conectado ao domínio
- Verifique SSL/TLS (deve estar em "Full")

### Problema: "Erro de certificado SSL"
**Solução:**
- Aguarde 24h para emissão do certificado
- Verifique se SSL/TLS está em "Full" (não "Flexible")
- Force renovação do certificado no painel Cloudflare

### Problema: "www não funciona"
**Solução:**
- Adicione www.focconavida.com.br como domínio customizado separado
- Configure Page Rule para redirecionar www para domínio principal

---

## ✅ Checklist de Verificação

Após configuração completa:

- [ ] focconavida.com.br carrega o site
- [ ] www.focconavida.com.br carrega o site
- [ ] HTTPS funcionando (cadeado verde)
- [ ] Site carrega rápido (teste em 4G)
- [ ] CTAs WhatsApp funcionam
- [ ] Email exibido: focconavida@gmail.com
- [ ] WhatsApp exibido: (83) 99378-7450
- [ ] Site responsivo em mobile
- [ ] Todas as imagens carregam
- [ ] Links de redes sociais funcionam

---

## 📞 Suporte

**Registro.br:**
- Site: https://registro.br/ajuda/
- Email: info@registro.br
- Telefone: 0800 770 1112

**Cloudflare:**
- Docs: https://developers.cloudflare.com/
- Community: https://community.cloudflare.com/
- Status: https://www.cloudflarestatus.com/

**Vercel:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

---

## 🎯 Próximos Passos Após Deploy

1. **Configurar Google Analytics** (opcional)
2. **Configurar Google Search Console** (SEO)
3. **Testar performance** (PageSpeed Insights)
4. **Compartilhar nas redes sociais**
5. **Entregar ao cliente!** 🎉

---

**Boa sorte com o deploy! 🚀**
