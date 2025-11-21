export interface Assessment {
  id: string;
  created_at: string;
  updated_at: string;
  business_name: string;
  business_type: 'retail' | 'restaurant' | 'service' | 'non-profit' | 'other';
  contact_email: string;
  contact_name: string;
  phone?: string;
  business_website?: string;
  business_location?: string;
  employee_count: string;
  annual_revenue: string;
  products_services: string;
  status: 'in_progress' | 'completed' | 'analyzed';
  progress_percentage: number;
  current_section: string;
}

export interface QuestionTemplate {
  id: string;
  section: string;
  question_key: string;
  question_text: string;
  question_type: 'text' | 'multiple_choice' | 'scale' | 'textarea';
  options?: string[];
  is_required: boolean;
  order_index: number;
  applies_to_retail: boolean;
  applies_to_restaurant: boolean;
  applies_to_service: boolean;
  applies_to_nonprofit: boolean;
  applies_to_other: boolean;
}

export interface Response {
  id: string;
  assessment_id: string;
  question_key: string;
  response_value: string;
  response_type: string;
  created_at: string;
}

export interface AnalysisResult {
  id: string;
  assessment_id: string;
  pain_points: PainPoint[];
  ai_opportunities: AIOpportunity[];
  recommendations: Recommendation[];
  roi_estimates: ROIEstimates;
  implementation_roadmap: RoadmapPhase[];
  executive_summary: string;
  created_at: string;
}

export interface PainPoint {
  category: string;
  severity: 'High' | 'Medium' | 'Low';
  title: string;
  description: string;
  business_impact: string;
  evidence: Array<{
    question: string;
    response_excerpt: string;
    keywords_found: string[];
  }>;
}

export interface AIOpportunity {
  title: string;
  description: string;
  pain_point_category: string;
  solutions: string[];
  recommended_tools: string[];
  implementation_complexity: 'Low' | 'Medium' | 'High';
  expected_roi: number;
  time_to_value: string;
  success_metrics: string[];
}

export interface Recommendation {
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  title: string;
  description: string;
  timeline: string;
  opportunities: AIOpportunity[];
  actions?: string[];
}

export interface ROIEstimates {
  total_potential_savings: number;
  total_implementation_cost: number;
  payback_period_months: number;
  annual_roi_percentage: number;
  opportunity_breakdown: Array<{
    opportunity_title: string;
    potential_annual_savings: number;
    implementation_cost: number;
    payback_period_months: number;
    annual_roi_percentage: number;
  }>;
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  duration: string;
  objectives: string[];
  opportunities: AIOpportunity[];
  key_milestones: string[];
}