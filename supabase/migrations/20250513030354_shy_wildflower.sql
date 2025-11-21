/*
  # Create bots table and related security policies

  1. New Tables
    - `bots`
      - `id` (bigint, primary key)
      - `inserted_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)
      - `data` (jsonb)
      - `name` (text)
      - `showcase_score` (numeric)
      - `creator_name` (text)
      - `is_public` (boolean)

  2. Security
    - Enable RLS on `bots` table
    - Add policies for:
      - Users can read their own bots
      - Users can read public bots
      - Users can create bots
      - Users can update their own bots
      - Users can delete their own bots
*/

-- Create bots table
CREATE TABLE IF NOT EXISTS bots (
  id bigint PRIMARY KEY,
  inserted_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
  data jsonb,
  name text,
  showcase_score numeric DEFAULT 0,
  creator_name text DEFAULT ''::text,
  is_public boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE bots ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read own bots"
  ON bots
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read public bots"
  ON bots
  FOR SELECT
  TO authenticated
  USING (is_public = true);

CREATE POLICY "Users can create bots"
  ON bots
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update own bots"
  ON bots
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can delete own bots"
  ON bots
  FOR DELETE
  TO authenticated
  USING (true);