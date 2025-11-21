#!/usr/bin/env python3
"""
Script to populate the database with comprehensive assessment questions
"""
import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from src.models.assessment import db, QuestionTemplate
from src.main import app
import json

def create_questions():
    """Create comprehensive question database based on the new questionnaire"""
    
    questions = [
        # Part 1: Business Profile
        {
            'section': 'business_profile',
            'question_key': 'business_name',
            'question_text': 'Business Name',
            'question_type': 'text',
            'is_required': True,
            'order_index': 1,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'contact_name',
            'question_text': 'Contact Name',
            'question_type': 'text',
            'is_required': True,
            'order_index': 2,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'email_address',
            'question_text': 'Email Address',
            'question_type': 'text',
            'is_required': True,
            'order_index': 3,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'phone_number',
            'question_text': 'Phone Number',
            'question_type': 'text',
            'is_required': False,
            'order_index': 4,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'business_website',
            'question_text': 'Business Website',
            'question_type': 'text',
            'is_required': False,
            'order_index': 5,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'business_location',
            'question_text': 'Business Location (City, State)',
            'question_type': 'text',
            'is_required': False,
            'order_index': 6,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'business_type',
            'question_text': 'What type of business do you operate?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['Retail', 'Restaurant', 'Service', 'Non-profit', 'Other']),
            'is_required': True,
            'order_index': 7,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'employee_count',
            'question_text': 'How many employees do you currently have?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['1-5', '6-20', '21-50', '51-100', '100+']),
            'is_required': True,
            'order_index': 8,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'annual_revenue',
            'question_text': 'What is your estimated annual revenue?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['Under $100K', '$100K - $500K', '$500K - $1M', '$1M - $5M', '$5M - $10M', 'Over $10M']),
            'is_required': True,
            'order_index': 9,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'business_profile',
            'question_key': 'products_services',
            'question_text': 'What are your main products or services?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 10,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        
        # Part 2: Operational Insight
        {
            'section': 'operational_insight',
            'question_key': 'operational_challenges',
            'question_text': 'What are your biggest operational challenges right now?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 11,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'operational_insight',
            'question_key': 'current_systems',
            'question_text': 'What systems do you currently use to manage daily operations? (POS, CRM, spreadsheets, etc.)',
            'question_type': 'text',
            'is_required': True,
            'order_index': 12,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'operational_insight',
            'question_key': 'system_effectiveness',
            'question_text': 'Do you feel like your current systems are effective? Why or why not?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 13,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'operational_insight',
            'question_key': 'manual_processes',
            'question_text': 'Are any processes still manual that you wish were automated?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 14,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        
        # Part 3: Marketing & Customer Engagement
        {
            'section': 'marketing_engagement',
            'question_key': 'marketing_channels',
            'question_text': 'What are your main marketing channels?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['Social Media', 'Email', 'Paid Ads', 'Word of Mouth', 'Other']),
            'is_required': True,
            'order_index': 15,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'marketing_engagement',
            'question_key': 'marketing_software',
            'question_text': 'Do you use any marketing or CRM software?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 16,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'marketing_engagement',
            'question_key': 'marketing_tracking',
            'question_text': 'How do you track marketing success? (KPIs, dashboard, none, etc.)',
            'question_type': 'text',
            'is_required': True,
            'order_index': 17,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'marketing_engagement',
            'question_key': 'customer_struggles',
            'question_text': 'What are your biggest struggles in gaining or retaining customers?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 18,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        
        # Part 4: HR, Hiring & Team Workflow
        {
            'section': 'hr_workflow',
            'question_key': 'hiring_training',
            'question_text': 'How do you currently hire and train new employees?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 19,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'hr_workflow',
            'question_key': 'staff_pain_point',
            'question_text': 'What\'s your biggest pain point when it comes to managing staff?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 20,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'hr_workflow',
            'question_key': 'hr_tools',
            'question_text': 'Do you use any tools for HR, training, or scheduling?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 21,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        
        # Part 5: Finances & Cash Flow
        {
            'section': 'finances',
            'question_key': 'bookkeeping_budgeting',
            'question_text': 'How do you handle bookkeeping and budgeting?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 22,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'finances',
            'question_key': 'accounting_software',
            'question_text': 'Are you using any accounting software? If yes, which one?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 23,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'finances',
            'question_key': 'financial_challenges',
            'question_text': 'What are your most common financial challenges? (Late payments, forecasting, taxes, etc.)',
            'question_type': 'text',
            'is_required': True,
            'order_index': 24,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        
        # Part 6: AI & Automation Readiness
        {
            'section': 'ai_readiness',
            'question_key': 'ai_tools_used',
            'question_text': 'Have you tried using AI tools before? If yes, which ones?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 25,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'ai_readiness',
            'question_key': 'ai_concerns',
            'question_text': 'What concerns (if any) do you have about using AI in your business?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 26,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'ai_readiness',
            'question_key': 'ai_help_areas',
            'question_text': 'Where do you think AI could help you the most?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 27,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'ai_readiness',
            'question_key': 'tech_comfort',
            'question_text': 'How comfortable are you with technology overall?',
            'question_type': 'scale',
            'options': json.dumps(['1 - Not comfortable at all', '2 - Slightly comfortable', '3 - Moderately comfortable', '4 - Very comfortable', '5 - Extremely comfortable']),
            'is_required': True,
            'order_index': 28,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'ai_readiness',
            'question_key': 'tool_preference',
            'question_text': 'Do you prefer self-service tools or someone guiding you?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['Self-service tools', 'Guided implementation', 'A mix of both', 'Not sure']),
            'is_required': True,
            'order_index': 29,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        
        # Part 7: Goals & Growth
        {
            'section': 'goals_growth',
            'question_key': 'top_goals',
            'question_text': 'What are your top 3 goals for the next 1–2 years?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 30,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'goals_growth',
            'question_key': 'growth_obstacles',
            'question_text': 'What\'s holding you back from reaching those goals?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 31,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        {
            'section': 'goals_growth',
            'question_key': 'scaling_importance',
            'question_text': 'How important is scaling, automation, or freeing up your time?',
            'question_type': 'scale',
            'options': json.dumps(['1 - Not important', '2 - Slightly important', '3 - Moderately important', '4 - Very important', '5 - Extremely important']),
            'is_required': True,
            'order_index': 32,
            'applies_to_retail': True,
            'applies_to_restaurant': True,
            'applies_to_service': True,
            'applies_to_nonprofit': True,
            'applies_to_other': True
        },
        
        # Part 8: Industry-Specific Questions - Retail
        {
            'section': 'industry_specific',
            'question_key': 'retail_sales_split',
            'question_text': 'What percentage of your sales are online vs in-store?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['100% in-store', '75% in-store / 25% online', '50% in-store / 50% online', '25% in-store / 75% online', '100% online']),
            'is_required': True,
            'order_index': 33,
            'applies_to_retail': True,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'retail_inventory_issues',
            'question_text': 'Are stockouts or overstocks common?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['Yes, frequently', 'Sometimes', 'Rarely', 'Never', 'Not applicable']),
            'is_required': True,
            'order_index': 34,
            'applies_to_retail': True,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'retail_product_tracking',
            'question_text': 'How do you track product performance?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 35,
            'applies_to_retail': True,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'retail_personalization',
            'question_text': 'Do you personalize promotions for customers?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['Yes, extensively', 'Sometimes', 'No, but interested', 'No, not interested']),
            'is_required': True,
            'order_index': 36,
            'applies_to_retail': True,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        
        # Part 8: Industry-Specific Questions - Restaurant
        {
            'section': 'industry_specific',
            'question_key': 'restaurant_turnover',
            'question_text': 'What is your average staff turnover rate?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['Less than 10%', '10-25%', '26-50%', '51-75%', 'More than 75%', 'Not sure']),
            'is_required': True,
            'order_index': 37,
            'applies_to_retail': False,
            'applies_to_restaurant': True,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'restaurant_menu_planning',
            'question_text': 'How are menus planned and updated?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 38,
            'applies_to_retail': False,
            'applies_to_restaurant': True,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'restaurant_reservations',
            'question_text': 'Do you take reservations? How?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 39,
            'applies_to_retail': False,
            'applies_to_restaurant': True,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'restaurant_software',
            'question_text': 'What software (if any) runs your front-of-house or kitchen?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 40,
            'applies_to_retail': False,
            'applies_to_restaurant': True,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        
        # Part 8: Industry-Specific Questions - Service
        {
            'section': 'industry_specific',
            'question_key': 'service_scheduling',
            'question_text': 'How do you schedule clients or projects?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 41,
            'applies_to_retail': False,
            'applies_to_restaurant': False,
            'applies_to_service': True,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'service_communication',
            'question_text': 'How do you communicate with clients before/after service?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 42,
            'applies_to_retail': False,
            'applies_to_restaurant': False,
            'applies_to_service': True,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'service_deliverables',
            'question_text': 'What\'s your biggest challenge in tracking deliverables?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 43,
            'applies_to_retail': False,
            'applies_to_restaurant': False,
            'applies_to_service': True,
            'applies_to_nonprofit': False,
            'applies_to_other': False
        },
        
        # Part 8: Industry-Specific Questions - Non-Profit
        {
            'section': 'industry_specific',
            'question_key': 'nonprofit_donor_management',
            'question_text': 'What\'s your donor management system (if any)?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 44,
            'applies_to_retail': False,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': True,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'nonprofit_volunteers',
            'question_text': 'How do you organize volunteers?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 45,
            'applies_to_retail': False,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': True,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'nonprofit_impact',
            'question_text': 'How do you measure success or impact?',
            'question_type': 'text',
            'is_required': True,
            'order_index': 46,
            'applies_to_retail': False,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': True,
            'applies_to_other': False
        },
        {
            'section': 'industry_specific',
            'question_key': 'nonprofit_funding',
            'question_text': 'Are you grant funded? Crowdfunded?',
            'question_type': 'multiple_choice',
            'options': json.dumps(['Grant funded', 'Crowdfunded', 'Both', 'Neither', 'Other']),
            'is_required': True,
            'order_index': 47,
            'applies_to_retail': False,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': True,
            'applies_to_other': False
        },
        
        # Part 8: Industry-Specific Questions - Other
        {
            'section': 'industry_specific',
            'question_key': 'other_workflow',
            'question_text': 'Please describe your daily workflow and pain points in more detail.',
            'question_type': 'text',
            'is_required': True,
            'order_index': 48,
            'applies_to_retail': False,
            'applies_to_restaurant': False,
            'applies_to_service': False,
            'applies_to_nonprofit': False,
            'applies_to_other': True
        }
    ]
    
    return questions

def populate_database():
    """Populate the database with questions"""
    with app.app_context():
        # Clear existing questions
        QuestionTemplate.query.delete()
        
        questions = create_questions()
        
        for q_data in questions:
            question = QuestionTemplate(**q_data)
            db.session.add(question)
        
        db.session.commit()
        print(f"Successfully added {len(questions)} questions to the database.")

if __name__ == '__main__':
    populate_database()