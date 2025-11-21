import { supabase } from './supabase';
import { Assessment, QuestionTemplate, Response, AnalysisResult } from '../types/assessment';

export class AssessmentService {
  // Create a new assessment
  static async createAssessment(assessmentData: Partial<Assessment>): Promise<Assessment> {
    const { data, error } = await supabase
      .from('assessments')
      .insert([{
        ...assessmentData,
        status: 'in_progress',
        progress_percentage: 0,
        current_section: 'business_profile'
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Get assessment by ID
  static async getAssessment(id: string): Promise<Assessment> {
    const { data, error } = await supabase
      .from('assessments')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  // Update assessment
  static async updateAssessment(id: string, updates: Partial<Assessment>): Promise<Assessment> {
    const { data, error } = await supabase
      .from('assessments')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Get questions for a specific section and business type
  static async getQuestions(section: string, businessType: string): Promise<QuestionTemplate[]> {
    const { data, error } = await supabase
      .from('question_templates')
      .select('*')
      .eq('section', section)
      .eq(`applies_to_${businessType.replace('-', '')}`, true)
      .order('order_index');

    if (error) throw error;
    return data;
  }

  // Save response
  static async saveResponse(assessmentId: string, questionKey: string, responseValue: string): Promise<Response> {
    const { data, error } = await supabase
      .from('responses')
      .upsert([{
        assessment_id: assessmentId,
        question_key: questionKey,
        response_value: responseValue,
        response_type: 'text'
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Get responses for an assessment
  static async getResponses(assessmentId: string): Promise<Response[]> {
    const { data, error } = await supabase
      .from('responses')
      .select('*')
      .eq('assessment_id', assessmentId);

    if (error) throw error;
    return data;
  }

  // Complete assessment
  static async completeAssessment(id: string): Promise<Assessment> {
    return this.updateAssessment(id, {
      status: 'completed',
      progress_percentage: 100
    });
  }

  // Get sections for navigation
  static getSections(): Array<{ key: string; display_name: string; description: string }> {
    return [
      {
        key: 'business_profile',
        display_name: 'Business Profile',
        description: 'Basic information about your business'
      },
      {
        key: 'operational_insight',
        display_name: 'Operations',
        description: 'Your current operational challenges and systems'
      },
      {
        key: 'marketing_engagement',
        display_name: 'Marketing',
        description: 'Marketing channels and customer engagement'
      },
      {
        key: 'hr_workflow',
        display_name: 'HR & Team',
        description: 'Hiring, training, and team management'
      },
      {
        key: 'finances',
        display_name: 'Finances',
        description: 'Financial management and cash flow'
      },
      {
        key: 'ai_readiness',
        display_name: 'AI Readiness',
        description: 'Your experience and comfort with AI and automation'
      },
      {
        key: 'goals_growth',
        display_name: 'Goals & Growth',
        description: 'Your business goals and growth objectives'
      },
      {
        key: 'industry_specific',
        display_name: 'Industry Specific',
        description: 'Questions specific to your industry'
      }
    ];
  }
}