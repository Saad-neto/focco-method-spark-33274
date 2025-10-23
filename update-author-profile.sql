-- =====================================================
-- ATUALIZAR PERFIL DO AUTOR
-- Execute este script no Supabase para atualizar o perfil
-- =====================================================

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

-- Verificar o perfil atualizado
SELECT * FROM author_profile;
