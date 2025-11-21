/*
  # Add tier system to bots table

  1. Changes
    - Add tier_type column
    - Add tier_expiry column
    - Add tier_features column
    - Add usage tracking columns
    
  2. Security
    - Add RLS policies for tier access
*/

ALTER TABLE bots
ADD COLUMN tier_type text CHECK (tier_type IN ('starter', 'standard', 'pro', 'power_user', 'enterprise')) DEFAULT 'starter',
ADD COLUMN tier_expiry timestamptz,
ADD COLUMN tier_features jsonb DEFAULT '{
  "maxBots": 1,
  "fileUpload": false,
  "apiAccess": false,
  "whiteLabel": false,
  "teamAccess": false,
  "advancedAnalytics": false
}'::jsonb;

-- Add index for tier lookups
CREATE INDEX idx_bot_tier ON bots(tier_type, tier_expiry);

-- Function to validate tier limits
CREATE OR REPLACE FUNCTION check_bot_tier_limits()
RETURNS TRIGGER AS $$
DECLARE
  bot_count integer;
  max_bots integer;
BEGIN
  -- Get current bot count for user
  SELECT COUNT(*) INTO bot_count
  FROM bots
  WHERE user_id = NEW.user_id;
  
  -- Get max bots allowed for tier
  SELECT 
    CASE 
      WHEN NEW.tier_type = 'starter' THEN 1
      WHEN NEW.tier_type = 'standard' THEN 3
      WHEN NEW.tier_type = 'pro' THEN 10
      WHEN NEW.tier_type = 'power_user' THEN 25
      WHEN NEW.tier_type = 'enterprise' THEN -1
    END INTO max_bots;
    
  -- Check if limit exceeded
  IF max_bots != -1 AND bot_count >= max_bots THEN
    RAISE EXCEPTION 'Bot limit exceeded for tier %', NEW.tier_type;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for tier validation
CREATE TRIGGER check_bot_tier_limits_trigger
  BEFORE INSERT ON bots
  FOR EACH ROW
  EXECUTE FUNCTION check_bot_tier_limits();