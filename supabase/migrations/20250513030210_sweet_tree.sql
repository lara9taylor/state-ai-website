/*
  # Fix bots table schema

  1. Drop and recreate bots table with correct schema
  2. Add all required columns with proper constraints
  3. Set up RLS policies for public access
*/

-- Drop existing table and recreate with correct schema
DROP TABLE IF EXISTS bots;

CREATE TABLE bots (
  id text PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  gender text NOT NULL,
  personality jsonb NOT NULL DEFAULT '{}'::jsonb,
  knowledge jsonb NOT NULL DEFAULT '{}'::jsonb,
  design jsonb NOT NULL DEFAULT '{}'::jsonb,
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  is_public boolean DEFAULT true,
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