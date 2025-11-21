/*
  # Add storage bucket policies for bot-knowledge

  1. Security
    - Add policies for:
      - Users can read their own files
      - Users can upload files to their own directory
      - Users can delete their own files
*/

-- Enable storage policies for bot-knowledge bucket
BEGIN;

-- Policy to allow users to read their own files
CREATE POLICY "Users can read own files"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'bot-knowledge' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Policy to allow users to upload files to their own directory
CREATE POLICY "Users can upload own files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'bot-knowledge' 
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy to allow users to delete their own files
CREATE POLICY "Users can delete own files"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'bot-knowledge' AND (storage.foldername(name))[1] = auth.uid()::text);

COMMIT;