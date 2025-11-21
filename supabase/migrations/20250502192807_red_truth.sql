/*
  # Fix storage bucket policies and initialization

  1. Security
    - Add policies for bucket access
    - Ensure bucket exists with proper configuration
    - Add policies for listing bucket contents
*/

-- Ensure the bot-knowledge bucket exists
DO $$
BEGIN
    INSERT INTO storage.buckets (id, name)
    VALUES ('bot-knowledge', 'bot-knowledge')
    ON CONFLICT (id) DO NOTHING;
END $$;

-- Policy to allow authenticated users to list buckets
CREATE POLICY "Allow authenticated users to list buckets"
ON storage.buckets FOR SELECT
TO authenticated
USING (true);

-- Policy to allow authenticated users to list objects in buckets
CREATE POLICY "Allow authenticated users to list objects"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'bot-knowledge');

-- Enable RLS on buckets
ALTER TABLE storage.buckets ENABLE ROW LEVEL SECURITY;

-- Enable RLS on objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;