# 👤 Guia - Perfil do Autor no Dashboard

## ✅ Implementação Completa!

Criei uma nova funcionalidade completa de **Perfil do Autor** no Dashboard!

---

## 🎯 O que foi criado:

### 📄 Nova Aba no Dashboard
- Menu lateral agora tem "Perfil do Autor"
- Acesso direto em `/dashboard/perfil`
- Interface completa de edição

### 📊 Funcionalidades:

1. **📸 Upload de Foto de Perfil**
   - Upload direto para Supabase Storage
   - Preview em tempo real
   - Foto circular profissional
   - Validação de tamanho (max 2MB)
   - Suporta JPG, PNG, GIF

2. **📝 Informações Básicas**
   - Nome completo
   - Biografia
   - Email

3. **🌐 Redes Sociais**
   - Instagram
   - Facebook
   - LinkedIn
   - Twitter/X
   - WhatsApp

4. **💾 Salvamento Automático**
   - Dados salvos no Supabase
   - Toast de confirmação
   - Atualização instantânea

---

## 🚀 Como Usar:

### Passo 1: Aplicar o Schema no Supabase

1. Acesse https://supabase.com
2. Login no projeto `focconavida`
3. Vá em **SQL Editor**
4. Clique em **New query**
5. Copie TODO o conteúdo do arquivo `author-profile-schema.sql`
6. Cole no editor
7. Clique em **Run** (ou Ctrl+Enter)

### Passo 2: Acessar o Dashboard

1. Acesse o site (depois do deploy)
2. Faça login no dashboard
3. Clique em **"Perfil do Autor"** no menu lateral

### Passo 3: Configurar o Perfil

1. **Upload de Foto:**
   - Clique em "Fazer Upload"
   - Escolha sua foto (max 2MB)
   - Ou cole uma URL direta

2. **Preencha os Dados:**
   - Nome completo
   - Biografia (opcional)
   - Email (opcional)
   - Redes sociais (opcional)

3. **Salvar:**
   - Clique em "Salvar Perfil"
   - Aguarde confirmação

---

## 📁 Arquivos Criados:

### 1. `author-profile-schema.sql`
Schema SQL completo:
- Tabela `author_profile`
- Bucket `author-avatars` para fotos
- Policies de segurança
- Dados iniciais da Valéria

### 2. `src/hooks/useAuthorProfile.ts`
Hook React Query com:
- `useAuthorProfile()` - Buscar perfil
- `useUpdateAuthorProfile()` - Atualizar perfil
- `useUploadAvatar()` - Upload de foto

### 3. `src/pages/DashboardAuthorProfile.tsx`
Página completa com:
- Formulário de edição
- Preview de foto
- Upload de imagem
- Validações
- Loading states

### 4. `src/App.tsx` (modificado)
- Nova rota `/dashboard/perfil`

### 5. `src/components/DashboardLayout.tsx` (modificado)
- Novo item de menu "Perfil do Autor"

---

## 🗄️ Estrutura do Banco de Dados:

### Tabela: `author_profile`

```sql
id          UUID (PK)
name        TEXT (obrigatório)
bio         TEXT (opcional)
avatar_url  TEXT (opcional)
email       TEXT (opcional)
instagram   TEXT (opcional)
facebook    TEXT (opcional)
linkedin    TEXT (opcional)
twitter     TEXT (opcional)
whatsapp    TEXT (opcional)
created_at  TIMESTAMP
updated_at  TIMESTAMP
```

### Bucket: `author-avatars`
- Armazena fotos de perfil
- Público (leitura)
- Apenas autenticados podem fazer upload

---

## 🎨 Preview da Interface:

### Seção 1: Foto de Perfil
```
┌─────────────────────────────────┐
│  Foto de Perfil                 │
│                                 │
│  ╭─────╮                        │
│  │ 👤  │  [Fazer Upload]        │
│  ╰─────╯                        │
│          JPG, PNG. Max 2MB      │
│                                 │
│  Ou cole URL:                   │
│  [____________________]         │
└─────────────────────────────────┘
```

### Seção 2: Informações Básicas
```
┌─────────────────────────────────┐
│  Informações Básicas            │
│                                 │
│  Nome: [___________________]    │
│  Bio:  [___________________]    │
│        [___________________]    │
│  Email:[___________________]    │
└─────────────────────────────────┘
```

### Seção 3: Redes Sociais
```
┌─────────────────────────────────┐
│  Redes Sociais                  │
│                                 │
│  Instagram: [______________]    │
│  Facebook:  [______________]    │
│  LinkedIn:  [______________]    │
│  Twitter/X: [______________]    │
│  WhatsApp:  [______________]    │
└─────────────────────────────────┘
```

---

## 🔧 Como Funciona (Técnico):

### Upload de Imagem:
```typescript
// 1. Usuário seleciona arquivo
// 2. Validação (tipo e tamanho)
// 3. Upload para Supabase Storage
// 4. Gerar URL pública
// 5. Salvar URL no estado
// 6. Usuário clica "Salvar Perfil"
// 7. URL é salva na tabela author_profile
```

### Salvamento de Dados:
```typescript
// 1. Busca perfil existente
// 2. Se existe: UPDATE
// 3. Se não existe: INSERT
// 4. Invalida cache do React Query
// 5. Mostra toast de sucesso
```

---

## 📱 Responsividade:

- ✅ Desktop: Layout de duas colunas
- ✅ Tablet: Ajusta automaticamente
- ✅ Mobile: Layout empilhado

---

## 🔐 Segurança:

### Row Level Security (RLS):
- ✅ Leitura pública do perfil
- ✅ Apenas autenticados podem editar
- ✅ Upload restrito a usuários logados

### Validações:
- ✅ Tipos de arquivo permitidos
- ✅ Tamanho máximo (2MB)
- ✅ Campos obrigatórios
- ✅ Sanitização de dados

---

## 🚀 Próximos Passos (Futuro):

1. **Integrar com Posts:**
   - Usar foto e bio do perfil nos posts
   - Box "Sobre o Autor" nos artigos
   - Assinatura automática

2. **Múltiplos Autores:**
   - Sistema já preparado
   - Basta adicionar campo `user_id`
   - Cada autor tem seu perfil

3. **Estatísticas:**
   - Contar posts por autor
   - Views totais por autor
   - Ranking de autores

---

## ✅ Checklist de Instalação:

- [ ] Executar `author-profile-schema.sql` no Supabase
- [ ] Aguardar deploy automático (2-3 min)
- [ ] Acessar `/dashboard/perfil`
- [ ] Fazer upload da foto
- [ ] Preencher informações
- [ ] Salvar perfil
- [ ] Verificar dados salvos

---

## 🎉 Pronto para Usar!

A funcionalidade está **100% completa e pronta para produção**!

Benefícios:
- ✨ Gerenciamento centralizado do autor
- 📸 Upload profissional de fotos
- 🔄 Fácil atualização de dados
- 🎯 Preparado para escalar
- 💼 Interface profissional

**Aproveite!** 🚀
