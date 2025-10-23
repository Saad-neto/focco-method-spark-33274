-- =====================================================
-- VERIFICAR E INSERIR PERFIL INICIAL
-- Execute este script para verificar e criar o perfil
-- =====================================================

-- 1. Verificar se a tabela foi criada
SELECT EXISTS (
  SELECT FROM information_schema.tables
  WHERE table_name = 'author_profile'
) as tabela_existe;

-- 2. Verificar se já existe algum perfil
SELECT COUNT(*) as total_perfis FROM author_profile;

-- 3. Inserir perfil inicial da Valéria (se não existir)
INSERT INTO author_profile (name, bio, avatar_url, email, instagram, whatsapp)
SELECT
  'Valéria Dias',
  'Coach de Vida e Desenvolvimento Pessoal. Criadora do Método FOCCO, uma abordagem transformadora que ajuda profissionais a encontrarem clareza, propósito e equilíbrio em suas vidas.',
  '/assets/valeria-foto-optimized.png',
  'contato@focconavida.com.br',
  'https://www.instagram.com/focconavida',
  'https://wa.me/5511999999999'
WHERE NOT EXISTS (
  SELECT 1 FROM author_profile LIMIT 1
);

-- 4. Verificar o perfil inserido
SELECT * FROM author_profile;
