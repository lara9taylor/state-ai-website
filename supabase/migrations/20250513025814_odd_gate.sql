/*
  # Add missing columns to bots table

  1. Changes
    - Add design column for bot appearance configuration
    - Add personality column for bot personality traits
    - Add knowledge column for bot knowledge sources
    - Add settings column for bot configuration
    - Add gender column for bot gender selection
    - Add creator_name column for bot creator identification
    - Add is_public column for public/private visibility
*/

-- Create the bots table if it doesn't exist
CREATE TABLE IF NOT EXISTS bots (
  id text PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add JSON columns for complex data structures
DO $$ 
BEGIN 
  -- Add design column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'bots' AND column_name = 'design') THEN
    ALTER TABLE bots ADD COLUMN design jsonb DEFAULT '{}'::jsonb;
  END IF;

  -- Add personality column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'bots' AND column_name = 'personality') THEN
    ALTER TABLE bots ADD COLUMN personality jsonb DEFAULT '{}'::jsonb;
  END IF;

  -- Add knowledge column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'bots' AND column_name = 'knowledge') THEN
    ALTER TABLE bots ADD COLUMN knowledge jsonb DEFAULT '{}'::jsonb;
  END IF;

  -- Add settings column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'bots' AND column_name = 'settings') THEN
    ALTER TABLE bots ADD COLUMN settings jsonb DEFAULT '{}'::jsonb;
  END IF;

  -- Add name column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'bots' AND column_name = 'name') THEN
    ALTER TABLE bots ADD COLUMN name text;
  END IF;

  -- Add gender column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'bots' AND column_name = 'gender') THEN
    ALTER TABLE bots ADD COLUMN gender text;
  END IF;

  -- Add creator_name column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'bots' AND column_name = 'creator_name') THEN
    ALTER TABLE bots ADD COLUMN creator_name text DEFAULT 'Anonymous';
  END IF;

  -- Add is_public column if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'bots' AND column_name = 'is_public') THEN
    ALTER TABLE bots ADD COLUMN is_public boolean DEFAULT false;
  END IF;
END $$;

-- Enable RLS
ALTER TABLE bots ENABLE ROW LEVEL SECURITY;

-- Ensure policies exist
DO $$ 
BEGIN
  -- Check if the policy exists before creating it
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'bots' 
    AND policyname = 'Anyone can read public bots'
  ) THEN
    CREATE POLICY "Anyone can read public bots"
      ON bots
      FOR SELECT
      TO anon
      USING (is_public = true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'bots' 
    AND policyname = 'Anyone can create public bots'
  ) THEN
    CREATE POLICY "Anyone can create public bots"
      ON bots
      FOR INSERT
      TO anon
      WITH CHECK (is_public = true);
  END IF;
END $$;