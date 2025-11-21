/*
  # Fix bots table schema

  1. Drop and recreate bots table with correct schema
  2. Add all required columns
  3. Set up RLS policies
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS bots;

-- Create bots table with all required columns
CREATE TABLE bots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  gender text NOT NULL,
  personality jsonb NOT NULL,
  knowledge jsonb NOT NULL,
  design jsonb NOT NULL,
  settings jsonb NOT NULL,
  is_public boolean DEFAULT false,
  showcase_score numeric DEFAULT 0,
  creator_name text DEFAULT ''
);

-- Enable RLS
ALTER TABLE bots ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read own bots"
  ON bots
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read public bots"
  ON bots
  FOR SELECT
  TO authenticated
  USING (is_public = true);

CREATE POLICY "Users can create bots"
  ON bots
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bots"
  ON bots
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bots"
  ON bots
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);