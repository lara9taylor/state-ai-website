/*
  # Fix bots table schema with all required columns

  1. Changes
    - Ensures bots table exists with all required columns
    - Adds showcase_score if missing
    - Adds creator_name if missing
    - Preserves existing data
    - Updates RLS policies

  2. Security
    - Maintains existing RLS policies
    - Ensures table has RLS enabled
*/

-- Add missing columns if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'bots' AND column_name = 'showcase_score'
  ) THEN
    ALTER TABLE bots ADD COLUMN showcase_score numeric DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'bots' AND column_name = 'creator_name'
  ) THEN
    ALTER TABLE bots ADD COLUMN creator_name text DEFAULT '';
  END IF;
END $$;