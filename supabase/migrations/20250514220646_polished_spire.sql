/*
  # Add message tracking to bots table

  1. Changes
    - Add messages_remaining column
    - Add purchased_tier column
    - Add purchase_date column
*/

ALTER TABLE bots 
ADD COLUMN messages_remaining integer DEFAULT 0,
ADD COLUMN purchased_tier text CHECK (purchased_tier IN ('starter', 'standard', 'pro', 'power_user', 'enterprise')),
ADD COLUMN purchase_date timestamptz;

-- Create an index for faster lookups
CREATE INDEX idx_bot_messages ON bots(id, messages_remaining);