# 📝 Setup dos Artigos do Blog - Método FOCCO

## 🎯 Visão Geral

Este documento contém instruções para popular o blog do Método FOCCO com 10 artigos de alta qualidade, cuidadosamente elaborados para estabelecer autoridade nas áreas de:

- ✅ Produtividade e combate à procrastinação
- ✅ Desenvolvimento pessoal e limites saudáveis
- ✅ Bem-estar e práticas de mindfulness
- ✅ Desenvolvimento profissional e transição de carreira
- ✅ Saúde mental e gestão de estresse
- ✅ Inteligência emocional e regulação
- ✅ Qualidade de vida e transformação de estilo de vida

---

## 📊 Os 10 Artigos Criados

### 1. **Por que procrastino tanto?** (8 min leitura)
- **Categoria:** Produtividade
- **Foco:** Causas da procrastinação e estratégias práticas do Método FOCCO
- **Tags:** procrastinação, produtividade, ação, método focco

### 2. **A importância de aprender a dizer não** (9 min leitura)
- **Categoria:** Desenvolvimento Pessoal
- **Foco:** Estabelecer limites saudáveis e proteger energia
- **Tags:** limites, assertividade, autocuidado, relacionamentos

### 3. **A importância da respiração consciente** (10 min leitura)
- **Categoria:** Bem-estar
- **Foco:** Técnicas de respiração para regulação emocional
- **Tags:** respiração, mindfulness, ansiedade, estresse

### 4. **Como se preparar para transição de carreira** (12 min leitura)
- **Categoria:** Carreira
- **Foco:** Estratégias para mudança de área profissional com saúde
- **Tags:** transição de carreira, desenvolvimento profissional, planejamento

### 5. **Como diminuir seu estresse** (11 min leitura)
- **Categoria:** Bem-estar
- **Foco:** Estratégias científicas para redução de estresse crônico
- **Tags:** estresse, saúde mental, resiliência, qualidade de vida

### 6. **Desenvolvendo equilíbrio emocional** (13 min leitura)
- **Categoria:** Desenvolvimento Pessoal
- **Foco:** 4 pilares da regulação emocional
- **Tags:** equilíbrio emocional, inteligência emocional, mindfulness

### 7. **Por que tanta gente está ficando ansiosa** (14 min leitura)
- **Categoria:** Saúde Mental
- **Foco:** Causas estruturais da epidemia de ansiedade moderna
- **Tags:** ansiedade, saúde mental, sociedade, psicologia

### 8. **A importância da pausa na vida diária** (12 min leitura)
- **Categoria:** Produtividade
- **Foco:** Ciência das pausas e produtividade sustentável
- **Tags:** pausas, produtividade, bem-estar, descanso

### 9. **Como regular emoções e ser profissional notado** (13 min leitura)
- **Categoria:** Carreira
- **Foco:** Alta performance sem sacrifício da saúde mental
- **Tags:** carreira, regulação emocional, alta performance

### 10. **Investir em mudar estilo de vida transforma futuro** (15 min leitura)
- **Categoria:** Desenvolvimento Pessoal
- **Foco:** Mudança de estilo de vida como melhor investimento
- **Tags:** estilo de vida, transformação, bem-estar, saúde

---

## 🗄️ Estrutura do Banco de Dados

Os artigos estão prontos para inserção na tabela `blog_posts` do Supabase com a seguinte estrutura:

```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  author TEXT NOT NULL DEFAULT 'Valéria Dias',
  author_avatar TEXT DEFAULT '/assets/valeria-foto-optimized.png',
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  is_published BOOLEAN DEFAULT true,
  views INTEGER DEFAULT 0,
  reading_time INTEGER NOT NULL,
  category TEXT,
  tags TEXT[]
);
```

---

## 🚀 Como Executar o SQL

### Opção 1: Via Supabase Dashboard (Recomendado)

1. **Acesse o Supabase Dashboard:**
   - Faça login em https://app.supabase.com
   - Selecione seu projeto

2. **Vá para SQL Editor:**
   - No menu lateral, clique em "SQL Editor"

3. **Execute o script:**
   - Abra o arquivo `blog-posts-complete.sql`
   - Copie todo o conteúdo
   - Cole no SQL Editor
   - Clique em "Run" ou pressione `Ctrl+Enter`

4. **Verifique os resultados:**
   - Vá para "Table Editor" > "blog_posts"
   - Você deve ver 10 novos artigos inseridos

### Opção 2: Via CLI do Supabase

```bash
# Se você tiver o Supabase CLI instalado
supabase db reset
psql $DATABASE_URL -f blog-posts-complete.sql
```

### Opção 3: Via Script Node.js/TypeScript

Você pode criar um script para inserir os dados usando o cliente Supabase:

```typescript
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

const sql = fs.readFileSync('blog-posts-complete.sql', 'utf-8');
// Execute o SQL via cliente Supabase
```

---

## ✅ Checklist Pós-Inserção

Após executar o SQL, verifique:

- [ ] 10 artigos foram inseridos com sucesso
- [ ] Todos os posts estão com `is_published = true`
- [ ] Os slugs estão únicos e corretos
- [ ] As datas de publicação estão escalonadas (últimos 10 dias)
- [ ] O autor está como "Valéria Dias"
- [ ] O avatar está apontando para `/assets/valeria-foto-optimized.png`
- [ ] As categorias estão corretas
- [ ] As tags estão como arrays

---

## 🧪 Testando o Blog

### 1. Acesse a página de Blog

```
http://localhost:5173/blog
```

### 2. Verifique funcionalidades:

- [ ] **Listagem:** Todos os 10 posts aparecem?
- [ ] **Post em Destaque:** O primeiro post aparece destacado?
- [ ] **Busca:** Funciona buscar por palavras-chave?
- [ ] **Filtro por Categoria:** Filtros funcionam corretamente?
- [ ] **Página Individual:** Clicar em um post abre a página completa?
- [ ] **Leitura:** Conteúdo HTML está renderizando corretamente?
- [ ] **Metadados:** Autor, tempo de leitura, data estão aparecendo?

### 3. SEO e Performance:

- [ ] Títulos são descritivos e únicos
- [ ] Slugs são amigáveis para SEO
- [ ] Excerpts resumem bem os artigos
- [ ] Tempo de leitura é realista
- [ ] Imagens do autor carregam rapidamente

---

## 🎨 Customizações Futuras

### Adicionar Imagens de Capa

Atualmente, os posts não têm imagens de capa (`cover_image`). Para adicionar:

1. **Crie imagens de capa** (1200x630px recomendado)
2. **Faça upload** para `/public/assets/blog/`
3. **Atualize os registros:**

```sql
UPDATE blog_posts
SET cover_image = '/assets/blog/procrastinacao-cover.jpg'
WHERE slug = 'por-que-procrastino-tanto';
```

### Adicionar Mais Posts

Use a estrutura dos artigos existentes como template:

```sql
INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  author,
  author_avatar,
  published_at,
  is_published,
  reading_time,
  category,
  tags
) VALUES (
  'Título do Novo Artigo',
  'titulo-novo-artigo',
  'Resumo do artigo...',
  '<h2>Conteúdo HTML do artigo...</h2>',
  'Valéria Dias',
  '/assets/valeria-foto-optimized.png',
  NOW(),
  true,
  10,
  'Categoria',
  ARRAY['tag1', 'tag2', 'tag3']
);
```

---

## 🔧 Troubleshooting

### Erro: "relation blog_posts does not exist"

**Solução:** Crie a tabela primeiro:

```sql
CREATE TABLE blog_posts (
  -- estrutura completa acima
);
```

### Erro: "duplicate key value violates unique constraint"

**Solução:** Os posts já foram inseridos. Para resetar:

```sql
DELETE FROM blog_posts WHERE author = 'Valéria Dias';
```

E execute o SQL novamente.

### Posts não aparecem no frontend

**Verifique:**
1. `.env` tem as credenciais corretas do Supabase
2. Coluna `is_published` está como `true`
3. Tabela tem Row Level Security (RLS) desabilitado ou políticas corretas

---

## 📈 Métricas e Analytics

Após lançar o blog, monitore:

- **Visualizações:** Coluna `views` incrementa automaticamente
- **Artigos mais lidos:** Query por `ORDER BY views DESC`
- **Categorias populares:** Analise engajamento por categoria
- **Tempo de leitura real:** Compare `reading_time` com analytics

```sql
-- Top 5 posts mais lidos
SELECT title, views, category
FROM blog_posts
WHERE is_published = true
ORDER BY views DESC
LIMIT 5;

-- Posts por categoria
SELECT category, COUNT(*) as total
FROM blog_posts
WHERE is_published = true
GROUP BY category;
```

---

## 🎯 Próximos Passos

1. **Execute o SQL** para popular o banco
2. **Teste o blog** completo no frontend
3. **Compartilhe** os artigos nas redes sociais
4. **Monitore métricas** de engajamento
5. **Crie novos artigos** regularmente (1-2 por mês)
6. **Adicione imagens de capa** para melhorar visual
7. **Configure SEO** (meta tags, Open Graph)
8. **Implemente newsletter** para capturar emails

---

## 💬 Suporte

Se encontrar problemas:

1. Verifique os logs do Supabase
2. Confirme estrutura da tabela
3. Teste queries SQL diretamente no dashboard
4. Verifique configurações de RLS (Row Level Security)

---

## ✨ Características dos Artigos

### 🎨 Qualidade do Conteúdo:
- ✅ 8-15 minutos de leitura cada
- ✅ Estrutura com H2 e H3 bem organizados
- ✅ Conteúdo baseado em ciência e pesquisas
- ✅ Estratégias práticas e acionáveis
- ✅ CTAs para o Método FOCCO ao final
- ✅ Tom profissional mas acessível
- ✅ Exemplos práticos e listas

### 🔍 SEO e Descoberta:
- ✅ Títulos otimizados para busca
- ✅ Slugs limpos e descritivos
- ✅ Tags relevantes e específicas
- ✅ Excerpts informativos
- ✅ Conteúdo aprofundado (> 2000 palavras)

### 🎯 Alinhamento com Método FOCCO:
- ✅ Cada artigo conecta com pilares do método
- ✅ CTAs naturais e não forçados
- ✅ Conteúdo autêntico da Valéria
- ✅ Autoridade e credibilidade

---

**🚀 Pronto para lançar um blog de autoridade!**

Desenvolvido com [Claude Code](https://claude.com/claude-code) 🤖
