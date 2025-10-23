-- ==================================================
-- OPÇÃO 1: DELETAR ARTIGOS ANTIGOS E INSERIR NOVOS
-- Use se quiser começar do zero
-- ==================================================

-- Descomente as linhas abaixo se quiser deletar e recomeçar:
-- DELETE FROM blog_posts WHERE author = 'Valéria Dias';
-- Depois execute o blog-posts-complete.sql normalmente

-- ==================================================
-- OPÇÃO 2: APENAS ADICIONAR AS IMAGENS (RECOMENDADO)
-- Use se os artigos já existem
-- ==================================================

-- Atualizar artigos existentes com as imagens
UPDATE blog_posts
SET cover_image = '/assets/blog/procrastinacao.svg',
    updated_at = NOW()
WHERE slug = 'por-que-procrastino-tanto';

UPDATE blog_posts
SET cover_image = '/assets/blog/dizer-nao.svg',
    updated_at = NOW()
WHERE slug = 'importancia-de-aprender-dizer-nao';

UPDATE blog_posts
SET cover_image = '/assets/blog/respiracao.svg',
    updated_at = NOW()
WHERE slug = 'importancia-respiracao-consciente';

UPDATE blog_posts
SET cover_image = '/assets/blog/transicao-carreira.svg',
    updated_at = NOW()
WHERE slug = 'transicao-de-carreira-com-qualidade';

UPDATE blog_posts
SET cover_image = '/assets/blog/diminuir-estresse.svg',
    updated_at = NOW()
WHERE slug = 'como-diminuir-estresse';

UPDATE blog_posts
SET cover_image = '/assets/blog/equilibrio-emocional.svg',
    updated_at = NOW()
WHERE slug = 'desenvolvendo-equilibrio-emocional';

UPDATE blog_posts
SET cover_image = '/assets/blog/ansiedade-moderna.svg',
    updated_at = NOW()
WHERE slug = 'por-que-tanta-gente-ansiosa';

UPDATE blog_posts
SET cover_image = '/assets/blog/pausas-diarias.svg',
    updated_at = NOW()
WHERE slug = 'importancia-da-pausa-na-vida-diaria';

UPDATE blog_posts
SET cover_image = '/assets/blog/regular-emocoes.svg',
    updated_at = NOW()
WHERE slug = 'regular-emocoes-profissional-notado';

UPDATE blog_posts
SET cover_image = '/assets/blog/estilo-vida.svg',
    updated_at = NOW()
WHERE slug = 'investir-mudar-estilo-vida-transforma-futuro';

-- Verificar quantos artigos foram atualizados
SELECT
  COUNT(*) as total_artigos,
  COUNT(cover_image) as artigos_com_imagem
FROM blog_posts
WHERE author = 'Valéria Dias';

-- Ver todos os artigos com suas imagens
SELECT
  title,
  slug,
  cover_image,
  is_published
FROM blog_posts
WHERE author = 'Valéria Dias'
ORDER BY published_at DESC;
