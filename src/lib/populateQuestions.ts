import { supabase } from './supabase';

export const populateQuestions = async () => {
  const questions = [
    // Business Profile Section
    {
      section: 'business_profile',
      question_key: 'business_name',
      question_text: 'Business Name',
      question_type: 'text',
      is_required: true,
      order_index: 1,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'business_profile',
      question_key: 'contact_name',
      question_text: 'Contact Name',
      question_type: 'text',
      is_required: true,
      order_index: 2,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    
    // Operational Insight Section
    {
      section: 'operational_insight',
      question_key: 'operational_challenges',
      question_text: 'What are your biggest operational challenges right now?',
      question_type: 'textarea',
      is_required: true,
      order_index: 11,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'operational_insight',
      question_key: 'current_systems',
      question_text: 'What systems do you currently use to manage daily operations? (POS, CRM, spreadsheets, etc.)',
      question_type: 'textarea',
      is_required: true,
      order_index: 12,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'operational_insight',
      question_key: 'system_effectiveness',
      question_text: 'Do you feel like your current systems are effective? Why or why not?',
      question_type: 'textarea',
      is_required: true,
      order_index: 13,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'operational_insight',
      question_key: 'manual_processes',
      question_text: 'Are any processes still manual that you wish were automated?',
      question_type: 'textarea',
      is_required: true,
      order_index: 14,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    
    // Marketing & Customer Engagement
    {
      section: 'marketing_engagement',
      question_key: 'marketing_channels',
      question_text: 'What are your main marketing channels?',
      question_type: 'multiple_choice',
      options: ['Social Media', 'Email', 'Paid Ads', 'Word of Mouth', 'Other'],
      is_required: true,
      order_index: 15,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'marketing_engagement',
      question_key: 'marketing_software',
      question_text: 'Do you use any marketing or CRM software?',
      question_type: 'textarea',
      is_required: true,
      order_index: 16,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'marketing_engagement',
      question_key: 'marketing_tracking',
      question_text: 'How do you track marketing success? (KPIs, dashboard, none, etc.)',
      question_type: 'textarea',
      is_required: true,
      order_index: 17,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'marketing_engagement',
      question_key: 'customer_struggles',
      question_text: 'What are your biggest struggles in gaining or retaining customers?',
      question_type: 'textarea',
      is_required: true,
      order_index: 18,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    
    // HR, Hiring & Team Workflow
    {
      section: 'hr_workflow',
      question_key: 'hiring_training',
      question_text: 'How do you currently hire and train new employees?',
      question_type: 'textarea',
      is_required: true,
      order_index: 19,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'hr_workflow',
      question_key: 'staff_pain_point',
      question_text: 'What\'s your biggest pain point when it comes to managing staff?',
      question_type: 'textarea',
      is_required: true,
      order_index: 20,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'hr_workflow',
      question_key: 'hr_tools',
      question_text: 'Do you use any tools for HR, training, or scheduling?',
      question_type: 'textarea',
      is_required: true,
      order_index: 21,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    
    // Finances & Cash Flow
    {
      section: 'finances',
      question_key: 'bookkeeping_budgeting',
      question_text: 'How do you handle bookkeeping and budgeting?',
      question_type: 'textarea',
      is_required: true,
      order_index: 22,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'finances',
      question_key: 'accounting_software',
      question_text: 'Are you using any accounting software? If yes, which one?',
      question_type: 'textarea',
      is_required: true,
      order_index: 23,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'finances',
      question_key: 'financial_challenges',
      question_text: 'What are your most common financial challenges? (Late payments, forecasting, taxes, etc.)',
      question_type: 'textarea',
      is_required: true,
      order_index: 24,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    
    // AI & Automation Readiness
    {
      section: 'ai_readiness',
      question_key: 'ai_tools_used',
      question_text: 'Have you tried using AI tools before? If yes, which ones?',
      question_type: 'textarea',
      is_required: true,
      order_index: 25,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'ai_readiness',
      question_key: 'ai_concerns',
      question_text: 'What concerns (if any) do you have about using AI in your business?',
      question_type: 'textarea',
      is_required: true,
      order_index: 26,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'ai_readiness',
      question_key: 'ai_help_areas',
      question_text: 'Where do you think AI could help you the most?',
      question_type: 'textarea',
      is_required: true,
      order_index: 27,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'ai_readiness',
      question_key: 'tech_comfort',
      question_text: 'How comfortable are you with technology overall?',
      question_type: 'scale',
      options: ['1 - Not comfortable at all', '2 - Slightly comfortable', '3 - Moderately comfortable', '4 - Very comfortable', '5 - Extremely comfortable'],
      is_required: true,
      order_index: 28,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'ai_readiness',
      question_key: 'tool_preference',
      question_text: 'Do you prefer self-service tools or someone guiding you?',
      question_type: 'multiple_choice',
      options: ['Self-service tools', 'Guided implementation', 'A mix of both', 'Not sure'],
      is_required: true,
      order_index: 29,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    
    // Goals & Growth
    {
      section: 'goals_growth',
      question_key: 'top_goals',
      question_text: 'What are your top 3 goals for the next 1–2 years?',
      question_type: 'textarea',
      is_required: true,
      order_index: 30,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'goals_growth',
      question_key: 'growth_obstacles',
      question_text: 'What\'s holding you back from reaching those goals?',
      question_type: 'textarea',
      is_required: true,
      order_index: 31,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    {
      section: 'goals_growth',
      question_key: 'scaling_importance',
      question_text: 'How important is scaling, automation, or freeing up your time?',
      question_type: 'scale',
      options: ['1 - Not important', '2 - Slightly important', '3 - Moderately important', '4 - Very important', '5 - Extremely important'],
      is_required: true,
      order_index: 32,
      applies_to_retail: true,
      applies_to_restaurant: true,
      applies_to_service: true,
      applies_to_nonprofit: true,
      applies_to_other: true
    },
    
    // Industry-Specific Questions - Retail
    {
      section: 'industry_specific',
      question_key: 'retail_sales_split',
      question_text: 'What percentage of your sales are online vs in-store?',
      question_type: 'multiple_choice',
      options: ['100% in-store', '75% in-store / 25% online', '50% in-store / 50% online', '25% in-store / 75% online', '100% online'],
      is_required: true,
      order_index: 33,
      applies_to_retail: true,
      applies_to_restaurant: false,
      applies_to_service: false,
      applies_to_nonprofit: false,
      applies_to_other: false
    },
    {
      section: 'industry_specific',
      question_key: 'retail_inventory_issues',
      question_text: 'Are stockouts or overstocks common?',
      question_type: 'multiple_choice',
      options: ['Yes, frequently', 'Sometimes', 'Rarely', 'Never', 'Not applicable'],
      is_required: true,
      order_index: 34,
      applies_to_retail: true,
      applies_to_restaurant: false,
      applies_to_service: false,
      applies_to_nonprofit: false,
      applies_to_other: false
    },
    
    // Industry-Specific Questions - Restaurant
    {
      section: 'industry_specific',
      question_key: 'restaurant_turnover',
      question_text: 'What is your average staff turnover rate?',
      question_type: 'multiple_choice',
      options: ['Less than 10%', '10-25%', '26-50%', '51-75%', 'More than 75%', 'Not sure'],
      is_required: true,
      order_index: 37,
      applies_to_retail: false,
      applies_to_restaurant: true,
      applies_to_service: false,
      applies_to_nonprofit: false,
      applies_to_other: false
    },
    
    // Industry-Specific Questions - Service
    {
      section: 'industry_specific',
      question_key: 'service_scheduling',
      question_text: 'How do you schedule clients or projects?',
      question_type: 'textarea',
      is_required: true,
      order_index: 41,
      applies_to_retail: false,
      applies_to_restaurant: false,
      applies_to_service: true,
      applies_to_nonprofit: false,
      applies_to_other: false
    },
    
    // Industry-Specific Questions - Non-Profit
    {
      section: 'industry_specific',
      question_key: 'nonprofit_donor_management',
      question_text: 'What\'s your donor management system (if any)?',
      question_type: 'textarea',
      is_required: true,
      order_index: 44,
      applies_to_retail: false,
      applies_to_restaurant: false,
      applies_to_service: false,
      applies_to_nonprofit: true,
      applies_to_other: false
    },
    
    // Industry-Specific Questions - Other
    {
      section: 'industry_specific',
      question_key: 'other_workflow',
      question_text: 'Please describe your daily workflow and pain points in more detail.',
      question_type: 'textarea',
      is_required: true,
      order_index: 48,
      applies_to_retail: false,
      applies_to_restaurant: false,
      applies_to_service: false,
      applies_to_nonprofit: false,
      applies_to_other: true
    }
  ];

  try {
    // Clear existing questions
    await supabase.from('question_templates').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    
    // Insert new questions
    const { error } = await supabase
      .from('question_templates')
      .insert(questions);

    if (error) {
      console.error('Error populating questions:', error);
      throw error;
    }

    console.log(`Successfully populated ${questions.length} questions`);
    return true;
  } catch (error) {
    console.error('Failed to populate questions:', error);
    throw error;
  }
};