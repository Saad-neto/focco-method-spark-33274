# Corrigir Informações do Autor nos Artigos

## Problema Identificado

Os artigos estão exibindo informações incorretas do autor:
- **Nome incorreto:** pode estar aparecendo "FireShot Capture 037..." ou outro texto
- **Foto incorreta:** não está aparecendo a foto correta da Valéria

## Solução

Execute os passos abaixo para corrigir:

---

## PASSO 1: Atualizar no Banco de Dados Supabase

### 1.1 Acessar o Supabase

1. Acesse: https://app.supabase.com
2. Faça login com sua conta
3. Selecione o projeto **focconavida**

### 1.2 Abrir SQL Editor

1. No menu lateral esquerdo, clique em **"SQL Editor"**
2. Clique em **"New Query"** (Nova consulta)

### 1.3 Executar o Script de Correção

1. Abra o arquivo: `fix-author-info.sql`
2. Copie TODO o conteúdo do arquivo
3. Cole no SQL Editor do Supabase
4. Clique no botão **"Run"** (Executar) ou pressione `Ctrl + Enter`

### 1.4 Verificar os Resultados

Após executar, você verá 3 resultados:

1. **Perfil do Autor atualizado:**
   - Nome: Valéria Dias
   - Avatar: /assets/valeria-foto-optimized.png
   - Email: contato@focconavida.com.br

2. **Lista de Posts:**
   - Todos devem mostrar "Valéria Dias" como autor
   - Todos devem ter "/assets/valeria-foto-optimized.png" como avatar

3. **Contagem:**
   - Total de posts
   - 1 autor distinto
   - 1 avatar distinto

---

## PASSO 2: Fazer Deploy da Nova Imagem

A imagem já foi atualizada nos arquivos do projeto em:
- `src/assets/valeria-foto-optimized.png`
- `public/assets/valeria-foto-optimized.png`

### 2.1 Fazer Build e Deploy

Execute os comandos:

```bash
cd /root/projetos/landpage-focco/focco-method-spark-33274
npm run build
```

### 2.2 Deploy no Cloudflare Pages

Se estiver usando Cloudflare Pages, faça o deploy:

```bash
npx wrangler pages deploy dist --project-name=focco-method
```

Ou faça commit e push para o GitHub (se tiver configurado deploy automático):

```bash
git add .
git commit -m "Atualiza foto e nome da autora Valéria Dias"
git push origin main
```

---

## PASSO 3: Verificar no Site

1. Aguarde alguns minutos para o deploy finalizar
2. Limpe o cache do navegador (`Ctrl + Shift + R` ou `Cmd + Shift + R`)
3. Acesse: https://focconavida.com.br/blog
4. Clique em qualquer artigo
5. Verifique se aparece:
   - **Nome:** Valéria Dias
   - **Foto:** A nova foto que você configurou na dashboard

---

## Resolução de Problemas

### Se a foto não aparecer:

1. Verifique se o arquivo existe:
   - `public/assets/valeria-foto-optimized.png`

2. Verifique o console do navegador (F12) para erros de carregamento

3. Certifique-se de que fez o build e deploy após copiar a imagem

### Se o nome não mudar:

1. Verifique se executou o script SQL no Supabase
2. Verifique se a query foi executada com sucesso (sem erros)
3. Limpe o cache do navegador

---

## Arquivos Criados

- ✅ `fix-author-info.sql` - Script principal de correção
- ✅ `update-author-profile.sql` - Script apenas para o perfil
- ✅ Imagens atualizadas em `src/assets/` e `public/assets/`

---

## Próximos Passos

Depois de executar esses passos, todos os artigos do blog devem exibir:
- **Autor:** Valéria Dias (nome correto)
- **Foto:** A imagem que você usou na dashboard

Se tiver qualquer problema, revise cada passo acima! 🚀
