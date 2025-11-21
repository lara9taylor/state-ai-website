/*
  # Create bots table with showcase score

  1. New Tables
    - `bots`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with timezone)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `gender` (text) 
      - `personality` (jsonb)
      - `knowledge` (jsonb)
      - `design` (jsonb)
      - `settings` (jsonb)
      - `is_public` (boolean)
      - `showcase_score` (numeric)

  2. Security
    - Enable RLS
    - Add policies for CRUD operations
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS bots;

-- Create bots table
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
  showcase_score numeric DEFAULT 0
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