/*
  # Create Assessment System Tables

  1. New Tables
    - `assessments` - Main assessment records
    - `question_templates` - Question templates for the assessment
    - `responses` - User responses to questions
    - `analysis_results` - AI analysis results

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create assessments table
CREATE TABLE IF NOT EXISTS assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  business_name text NOT NULL,
  business_type text NOT NULL CHECK (business_type IN ('retail', 'restaurant', 'service', 'non-profit', 'other')),
  contact_email text NOT NULL,
  contact_name text NOT NULL,
  phone text,
  business_website text,
  business_location text,
  employee_count text,
  annual_revenue text,
  products_services text,
  status text DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'analyzed')),
  progress_percentage numeric DEFAULT 0,
  current_section text DEFAULT 'business_profile'
);

-- Create question_templates table
CREATE TABLE IF NOT EXISTS question_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  section text NOT NULL,
  question_key text NOT NULL UNIQUE,
  question_text text NOT NULL,
  question_type text NOT NULL CHECK (question_type IN ('text', 'textarea', 'multiple_choice', 'scale')),
  options jsonb,
  is_required boolean DEFAULT true,
  order_index integer DEFAULT 0,
  applies_to_retail boolean DEFAULT true,
  applies_to_restaurant boolean DEFAULT true,
  applies_to_service boolean DEFAULT true,
  applies_to_nonprofit boolean DEFAULT true,
  applies_to_other boolean DEFAULT true
);

-- Create responses table
CREATE TABLE IF NOT EXISTS responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  assessment_id uuid REFERENCES assessments(id) ON DELETE CASCADE,
  question_key text NOT NULL,
  response_value text,
  response_type text DEFAULT 'text',
  UNIQUE(assessment_id, question_key)
);

-- Create analysis_results table
CREATE TABLE IF NOT EXISTS analysis_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  assessment_id uuid REFERENCES assessments(id) ON DELETE CASCADE,
  pain_points jsonb DEFAULT '[]'::jsonb,
  ai_opportunities jsonb DEFAULT '[]'::jsonb,
  recommendations jsonb DEFAULT '[]'::jsonb,
  roi_estimates jsonb DEFAULT '{}'::jsonb,
  implementation_roadmap jsonb DEFAULT '[]'::jsonb,
  executive_summary text,
  UNIQUE(assessment_id)
);

-- Enable RLS
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE analysis_results ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public assessment tool)
CREATE POLICY "Anyone can create assessments"
  ON assessments FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read their assessments"
  ON assessments FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update their assessments"
  ON assessments FOR UPDATE
  TO anon
  USING (true);

CREATE POLICY "Anyone can read question templates"
  ON question_templates FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can create responses"
  ON responses FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read responses"
  ON responses FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update responses"
  ON responses FOR UPDATE
  TO anon
  USING (true);

CREATE POLICY "Anyone can create analysis results"
  ON analysis_results FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read analysis results"
  ON analysis_results FOR SELECT
  TO anon
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_assessments_status ON assessments(status);
CREATE INDEX idx_assessments_business_type ON assessments(business_type);
CREATE INDEX idx_question_templates_section ON question_templates(section);
CREATE INDEX idx_responses_assessment_id ON responses(assessment_id);
CREATE INDEX idx_analysis_results_assessment_id ON analysis_results(assessment_id);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_assessments_updated_at
    BEFORE UPDATE ON assessments
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_responses_updated_at
    BEFORE UPDATE ON responses
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();