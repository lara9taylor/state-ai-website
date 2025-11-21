/*
  # Add support for public bots without authentication

  1. Changes
    - Add public access policy for bots
    - Update bot table to support public access
*/

-- Add policy for public access to bots
CREATE POLICY "Anyone can read public bots"
  ON bots
  FOR SELECT
  TO anon
  USING (is_public = true);

-- Add policy for anonymous bot creation
CREATE POLICY "Anyone can create public bots"
  ON bots
  FOR INSERT
  TO anon
  WITH CHECK (is_public = true);

-- Add policy for public file access
CREATE POLICY "Anyone can read public files"
  ON storage.objects
  FOR SELECT
  TO anon
  USING (bucket_id = 'bot-knowledge' AND position('public/' in name) = 1);