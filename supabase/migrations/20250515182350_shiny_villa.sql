/*
  # Add tier management columns

  1. Changes
    - Add team_members column for collaboration
    - Add tier_features column for feature flags
    - Add usage_stats column for analytics
*/

ALTER TABLE bots
ADD COLUMN team_members jsonb DEFAULT '[]'::jsonb,
ADD COLUMN tier_features jsonb DEFAULT '{
  "file_upload": false,
  "api_access": false,
  "white_label": false,
  "team_access": false,
  "advanced_analytics": false
}'::jsonb,
ADD COLUMN usage_stats jsonb DEFAULT '{
  "total_messages": 0,
  "successful_interactions": 0,
  "failed_interactions": 0,
  "last_interaction": null
}'::jsonb;

-- Add indexes for performance
CREATE INDEX idx_bot_team_members ON bots USING gin (team_members);
CREATE INDEX idx_bot_tier_features ON bots USING gin (tier_features);
CREATE INDEX idx_bot_usage_stats ON bots USING gin (usage_stats);

-- Update RLS policies for team access
CREATE POLICY "Team members can access shared bots"
  ON bots
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = ANY(ARRAY(SELECT jsonb_array_elements_text(team_members)))
  );