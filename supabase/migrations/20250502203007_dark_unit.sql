/*
  # Fix bots table schema

  1. Changes
    - Ensure bots table exists with all required columns
    - Ensure is_public column exists and has correct default value
    
  2. Security
    - Recreate RLS policies if needed
*/

-- Recreate bots table if it doesn't exist
CREATE TABLE IF NOT EXISTS bots (
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

-- Ensure is_public column exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'bots' AND column_name = 'is_public'
  ) THEN
    ALTER TABLE bots ADD COLUMN is_public boolean DEFAULT false;
  END IF;
END $$;

-- Enable RLS if not already enabled
ALTER TABLE bots ENABLE ROW LEVEL SECURITY;

-- Recreate policies (will fail silently if they already exist)
DO $$ 
BEGIN
  BEGIN
    CREATE POLICY "Users can read own bots"
      ON bots
      FOR SELECT
      TO authenticated
      USING (auth.uid() = user_id);
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;

  BEGIN
    CREATE POLICY "Users can read public bots"
      ON bots
      FOR SELECT
      TO authenticated
      USING (is_public = true);
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;

  BEGIN
    CREATE POLICY "Users can create bots"
      ON bots
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = user_id);
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;

  BEGIN
    CREATE POLICY "Users can update own bots"
      ON bots
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = user_id)
      WITH CHECK (auth.uid() = user_id);
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;

  BEGIN
    CREATE POLICY "Users can delete own bots"
      ON bots
      FOR DELETE
      TO authenticated
      USING (auth.uid() = user_id);
  EXCEPTION WHEN duplicate_object THEN NULL;
  END;
END $$;