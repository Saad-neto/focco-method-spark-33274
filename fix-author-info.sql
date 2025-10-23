-- =====================================================
-- CORRIGIR INFORMAÇÕES DO AUTOR NOS POSTS E PERFIL
-- Execute este script no Supabase SQL Editor
-- =====================================================

-- 1. ATUALIZAR PERFIL DO AUTOR
-- Atualizar o perfil existente da Valéria Dias
UPDATE author_profile
SET
  name = 'Valéria Dias',
  bio = 'Coach de Vida e Desenvolvimento Pessoal. Criadora do Método FOCCO, uma abordagem transformadora que ajuda profissionais a encontrarem clareza, propósito e equilíbrio em suas vidas.',
  avatar_url = '/assets/valeria-foto-optimized.png',
  email = 'contato@focconavida.com.br',
  instagram = 'https://www.instagram.com/focconavida',
  whatsapp = 'https://wa.me/5583993787450',
  updated_at = NOW()
WHERE id = (SELECT id FROM author_profile LIMIT 1);

-- 2. ATUALIZAR NOME E AVATAR EM TODOS OS POSTS
-- Corrigir qualquer nome ou avatar incorreto nos posts
UPDATE blog_posts
SET
  author = 'Valéria Dias',
  author_avatar = '/assets/valeria-foto-optimized.png',
  updated_at = NOW();

-- 3. VERIFICAR AS ATUALIZAÇÕES

-- Verificar o perfil atualizado
SELECT
  name,
  avatar_url,
  email,
  instagram,
  whatsapp
FROM author_profile;

-- Verificar os posts atualizados
SELECT
  title,
  author,
  author_avatar,
  is_published
FROM blog_posts
ORDER BY published_at DESC;

-- 4. CONTAR RESULTADOS
SELECT
  COUNT(*) as total_posts,
  COUNT(DISTINCT author) as distinct_authors,
  COUNT(DISTINCT author_avatar) as distinct_avatars
FROM blog_posts;
