-- =====================================================
-- AUTHOR PROFILE TABLE - PERFIL DO AUTOR
-- Tabela para armazenar informações do autor do blog
-- =====================================================

-- Criar tabela author_profile
CREATE TABLE IF NOT EXISTS author_profile (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  email TEXT,
  instagram TEXT,
  facebook TEXT,
  linkedin TEXT,
  twitter TEXT,
  whatsapp TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Criar índice
CREATE INDEX IF NOT EXISTS idx_author_profile_name ON author_profile(name);

-- Enable Row Level Security
ALTER TABLE author_profile ENABLE ROW LEVEL SECURITY;

-- Policy para leitura pública
CREATE POLICY "Allow public read access to author profile"
  ON author_profile
  FOR SELECT
  USING (true);

-- Policy para usuários autenticados gerenciarem
CREATE POLICY "Allow authenticated users to manage author profile"
  ON author_profile
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Trigger para updated_at
CREATE TRIGGER update_author_profile_updated_at
  BEFORE UPDATE ON author_profile
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Inserir perfil inicial da Valéria
INSERT INTO author_profile (name, bio, avatar_url, email, instagram, whatsapp)
VALUES (
  'Valéria Dias',
  'Coach de Vida e Desenvolvimento Pessoal. Criadora do Método FOCCO, uma abordagem transformadora que ajuda profissionais a encontrarem clareza, propósito e equilíbrio em suas vidas.',
  '/assets/valeria-foto-optimized.png',
  'contato@focconavida.com.br',
  'https://www.instagram.com/focconavida',
  'https://wa.me/5511999999999'
)
ON CONFLICT DO NOTHING;

-- =====================================================
-- STORAGE BUCKET PARA FOTOS DE PERFIL
-- =====================================================

-- Criar bucket para fotos de perfil
INSERT INTO storage.buckets (id, name, public)
VALUES ('author-avatars', 'author-avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Policy para leitura pública
CREATE POLICY "Allow public read access to author avatars"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'author-avatars');

-- Policy para upload de usuários autenticados
CREATE POLICY "Allow authenticated users to upload author avatars"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'author-avatars' AND
    auth.role() = 'authenticated'
  );

-- Policy para atualização
CREATE POLICY "Allow authenticated users to update author avatars"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'author-avatars' AND
    auth.role() = 'authenticated'
  );

-- Policy para deleção
CREATE POLICY "Allow authenticated users to delete author avatars"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'author-avatars' AND
    auth.role() = 'authenticated'
  );
