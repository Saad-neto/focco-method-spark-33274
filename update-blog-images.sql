-- ==================================================
-- ATUALIZAR IMAGENS DOS ARTIGOS DO BLOG
-- Execute DEPOIS de inserir os artigos
-- ==================================================

-- Artigo 1: Procrastinação
UPDATE blog_posts 
SET cover_image = '/assets/blog/procrastinacao.svg'
WHERE slug = 'por-que-procrastino-tanto';

-- Artigo 2: Dizer Não
UPDATE blog_posts 
SET cover_image = '/assets/blog/dizer-nao.svg'
WHERE slug = 'importancia-de-aprender-dizer-nao';

-- Artigo 3: Respiração
UPDATE blog_posts 
SET cover_image = '/assets/blog/respiracao.svg'
WHERE slug = 'importancia-respiracao-consciente';

-- Artigo 4: Transição de Carreira
UPDATE blog_posts 
SET cover_image = '/assets/blog/transicao-carreira.svg'
WHERE slug = 'transicao-de-carreira-com-qualidade';

-- Artigo 5: Diminuir Estresse
UPDATE blog_posts 
SET cover_image = '/assets/blog/diminuir-estresse.svg'
WHERE slug = 'como-diminuir-estresse';

-- Artigo 6: Equilíbrio Emocional
UPDATE blog_posts 
SET cover_image = '/assets/blog/equilibrio-emocional.svg'
WHERE slug = 'desenvolvendo-equilibrio-emocional';

-- Artigo 7: Ansiedade Moderna
UPDATE blog_posts 
SET cover_image = '/assets/blog/ansiedade-moderna.svg'
WHERE slug = 'por-que-tanta-gente-ansiosa';

-- Artigo 8: Pausas Diárias
UPDATE blog_posts 
SET cover_image = '/assets/blog/pausas-diarias.svg'
WHERE slug = 'importancia-da-pausa-na-vida-diaria';

-- Artigo 9: Regular Emoções
UPDATE blog_posts 
SET cover_image = '/assets/blog/regular-emocoes.svg'
WHERE slug = 'regular-emocoes-profissional-notado';

-- Artigo 10: Estilo de Vida
UPDATE blog_posts 
SET cover_image = '/assets/blog/estilo-vida.svg'
WHERE slug = 'investir-mudar-estilo-vida-transforma-futuro';

-- Verificar
SELECT slug, cover_image FROM blog_posts ORDER BY published_at DESC;
