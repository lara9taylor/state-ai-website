/*
  # Add is_public column to bots table

  1. Changes
    - Add `is_public` boolean column to `bots` table with default value false
    
  2. Security
    - Update RLS policies to handle public bot visibility
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'bots' AND column_name = 'is_public'
  ) THEN
    ALTER TABLE bots ADD COLUMN is_public boolean DEFAULT false;
  END IF;
END $$;

-- Update policies for public visibility
DROP POLICY IF EXISTS "Users can read public bots" ON bots;
CREATE POLICY "Users can read public bots"
  ON bots
  FOR SELECT
  TO authenticated
  USING (is_public = true);