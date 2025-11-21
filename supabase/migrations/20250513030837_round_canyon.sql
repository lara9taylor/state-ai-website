-- Drop existing table and objects if they exist
DROP TABLE IF EXISTS bots;
DROP FUNCTION IF EXISTS update_updated_at_column CASCADE;

-- Create bots table with correct schema
CREATE TABLE bots (
  id text PRIMARY KEY,
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  gender text NOT NULL CHECK (gender IN ('male', 'female')),
  personality jsonb NOT NULL DEFAULT '{}'::jsonb,
  knowledge jsonb NOT NULL DEFAULT '{}'::jsonb,
  design jsonb NOT NULL DEFAULT '{}'::jsonb,
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  is_public boolean DEFAULT true,
  showcase_score numeric DEFAULT 0,
  creator_name text DEFAULT 'Anonymous'
);

-- Enable RLS
ALTER TABLE bots ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Anyone can read public bots"
  ON bots
  FOR SELECT
  TO anon
  USING (is_public = true);

CREATE POLICY "Anyone can create public bots"
  ON bots
  FOR INSERT
  TO anon
  WITH CHECK (is_public = true);

-- Create storage bucket if it doesn't exist
DO $$
BEGIN
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('bot-knowledge', 'bot-knowledge', true)
  ON CONFLICT (id) DO NOTHING;
EXCEPTION
  WHEN undefined_table THEN
    -- Handle case where storage schema doesn't exist
    NULL;
END $$;

-- Enable RLS on storage if the schema exists
DO $$
BEGIN
  EXECUTE 'ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY';
EXCEPTION
  WHEN undefined_table THEN
    -- Handle case where storage schema doesn't exist
    NULL;
END $$;

-- Storage policies for public access
DO $$
BEGIN
  EXECUTE $policy$
    CREATE POLICY "Anyone can read public files"
    ON storage.objects FOR SELECT
    TO anon
    USING (
      bucket_id = 'bot-knowledge' 
      AND name LIKE 'public/%'
    )
  $policy$;

  EXECUTE $policy$
    CREATE POLICY "Anyone can upload public files"
    ON storage.objects FOR INSERT
    TO anon
    WITH CHECK (
      bucket_id = 'bot-knowledge'
      AND name LIKE 'public/%'
    )
  $policy$;
EXCEPTION
  WHEN undefined_table THEN
    -- Handle case where storage schema doesn't exist
    NULL;
END $$;

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bots_updated_at
    BEFORE UPDATE ON bots
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();