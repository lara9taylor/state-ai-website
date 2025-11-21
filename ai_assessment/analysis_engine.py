"""
AI Analysis Engine for Business Assessment Tool

This module contains the core AI analysis logic that processes assessment responses
and generates comprehensive insights, pain point identification, and AI automation recommendations.
"""

import json
import re
from typing import Dict, List, Tuple, Any
from collections import defaultdict, Counter
from datetime import datetime
import math
from src.state_ai_services import StateAIServicesMapper

class BusinessAnalysisEngine:
    """
    Core analysis engine that processes assessment responses and generates insights
    """
    
    def __init__(self):
        # Initialize State AI Strategies services mapper
        self.state_ai_services = StateAIServicesMapper()
        
        self.pain_point_keywords = {
            'time_management': ['time', 'slow', 'delay', 'hours', 'manual', 'tedious', 'repetitive'],
            'efficiency': ['inefficient', 'bottleneck', 'waste', 'duplicate', 'redundant', 'streamline'],
            'customer_service': ['complaint', 'dissatisfied', 'wait', 'response time', 'support'],
            'inventory': ['stockout', 'overstock', 'shortage', 'surplus', 'tracking', 'count'],
            'financial': ['cash flow', 'payment', 'invoice', 'billing', 'cost', 'expense'],
            'staffing': ['turnover', 'training', 'scheduling', 'shortage', 'overwhelmed'],
            'technology': ['outdated', 'manual', 'spreadsheet', 'paper', 'system', 'integration'],
            'marketing': ['leads', 'conversion', 'visibility', 'reach', 'engagement'],
            'data': ['tracking', 'analysis', 'reporting', 'insights', 'metrics']
        }
        
        self.positive_keywords = {
            'efficiency': ['efficient', 'streamlined', 'automated', 'optimized', 'smooth'],
            'customer_satisfaction': ['satisfied', 'happy', 'loyal', 'positive', 'excellent'],
            'growth': ['growing', 'expanding', 'increasing', 'successful', 'profitable'],
            'technology': ['modern', 'advanced', 'integrated', 'digital', 'automated'],
            'team': ['skilled', 'experienced', 'dedicated', 'trained', 'motivated']
        }
        
        self.ai_solutions = {
            'time_management': {
                'solutions': ['Task automation', 'Workflow optimization', 'Scheduling AI', 'Process automation'],
                'tools': ['Zapier', 'Microsoft Power Automate', 'Calendly', 'Asana'],
                'roi_factor': 0.25  # 25% time savings
            },
            'efficiency': {
                'solutions': ['Process automation', 'Workflow optimization', 'Predictive analytics', 'Smart routing'],
                'tools': ['RPA tools', 'Business process management', 'AI workflow engines'],
                'roi_factor': 0.30  # 30% efficiency gain
            },
            'customer_service': {
                'solutions': ['AI chatbots', 'Automated ticketing', 'Sentiment analysis', 'Response automation'],
                'tools': ['Intercom', 'Zendesk AI', 'ChatGPT integration', 'Freshdesk'],
                'roi_factor': 0.40  # 40% response time improvement
            },
            'inventory': {
                'solutions': ['Demand forecasting', 'Automated reordering', 'Inventory optimization', 'Predictive analytics'],
                'tools': ['TradeGecko', 'Cin7', 'NetSuite', 'Custom AI models'],
                'roi_factor': 0.20  # 20% inventory cost reduction
            },
            'financial': {
                'solutions': ['Automated invoicing', 'Payment reminders', 'Cash flow forecasting', 'Expense categorization'],
                'tools': ['QuickBooks AI', 'Xero', 'FreshBooks', 'Custom integrations'],
                'roi_factor': 0.15  # 15% financial process improvement
            },
            'staffing': {
                'solutions': ['Automated scheduling', 'Performance analytics', 'Training automation', 'Recruitment AI'],
                'tools': ['When I Work', 'BambooHR', 'Workday', 'LinkedIn Talent'],
                'roi_factor': 0.25  # 25% HR efficiency gain
            },
            'technology': {
                'solutions': ['System integration', 'Data automation', 'Cloud migration', 'API connections'],
                'tools': ['Zapier', 'Microsoft Power Platform', 'AWS', 'Google Cloud'],
                'roi_factor': 0.35  # 35% technology efficiency gain
            },
            'marketing': {
                'solutions': ['Lead scoring', 'Automated campaigns', 'Personalization', 'Analytics automation'],
                'tools': ['HubSpot', 'Mailchimp', 'Google Analytics', 'Facebook Ads AI'],
                'roi_factor': 0.30  # 30% marketing efficiency gain
            },
            'data': {
                'solutions': ['Automated reporting', 'Business intelligence', 'Predictive analytics', 'Data visualization'],
                'tools': ['Tableau', 'Power BI', 'Google Data Studio', 'Custom dashboards'],
                'roi_factor': 0.45  # 45% data insights improvement
            }
        }
    
    def analyze_assessment(self, assessment_data: Dict, responses: List[Dict]) -> Dict:
        """
        Main analysis function that processes all assessment data
        """
        analysis_results = {
            'assessment_id': assessment_data['id'],
            'business_type': assessment_data['business_type'],
            'analysis_timestamp': datetime.utcnow().isoformat(),
            'pain_points': [],
            'positive_patterns': [],
            'ai_opportunities': [],
            'recommendations': [],
            'roi_estimates': {},
            'implementation_roadmap': [],
            'executive_summary': '',
            'detailed_insights': {}
        }
        
        # Convert responses to a more workable format
        response_dict = {r['question_key']: r['response_value'] for r in responses}
        
        # Analyze pain points
        analysis_results['pain_points'] = self._identify_pain_points(response_dict, assessment_data)
        
        # Analyze positive patterns
        analysis_results['positive_patterns'] = self._identify_positive_patterns(response_dict, assessment_data)
        
        # Generate AI opportunities
        analysis_results['ai_opportunities'] = self._generate_ai_opportunities(
            analysis_results['pain_points'], assessment_data
        )
        
        # Create recommendations
        analysis_results['recommendations'] = self._create_recommendations(
            analysis_results['pain_points'], 
            analysis_results['ai_opportunities'],
            assessment_data
        )
        
        # Calculate ROI estimates
        analysis_results['roi_estimates'] = self._calculate_roi_estimates(
            analysis_results['ai_opportunities'], 
            assessment_data
        )
        
        # Create implementation roadmap
        analysis_results['implementation_roadmap'] = self._create_implementation_roadmap(
            analysis_results['ai_opportunities']
        )
        
        # Generate executive summary
        analysis_results['executive_summary'] = self._generate_executive_summary(analysis_results)
        
        # Generate detailed insights
        analysis_results['detailed_insights'] = self._generate_detailed_insights(
            response_dict, analysis_results
        )
        
        return analysis_results
    
    def _identify_pain_points(self, responses: Dict, assessment_data: Dict) -> List[Dict]:
        """
        Identify pain points from assessment responses
        """
        pain_points = []
        
        # Analyze text responses for pain point keywords
        text_responses = {k: v for k, v in responses.items() if isinstance(v, str) and len(v) > 10}
        
        for category, keywords in self.pain_point_keywords.items():
            pain_score = 0
            evidence = []
            
            for question_key, response in text_responses.items():
                response_lower = response.lower()
                matches = sum(1 for keyword in keywords if keyword in response_lower)
                
                if matches > 0:
                    pain_score += matches
                    evidence.append({
                        'question': question_key,
                        'response_excerpt': response[:200] + '...' if len(response) > 200 else response,
                        'keywords_found': [kw for kw in keywords if kw in response_lower]
                    })
            
            if pain_score >= 2:  # Threshold for identifying a pain point
                severity = 'High' if pain_score >= 5 else 'Medium' if pain_score >= 3 else 'Low'
                
                pain_point = {
                    'category': category,
                    'severity': severity,
                    'score': pain_score,
                    'title': self._get_pain_point_title(category),
                    'description': self._get_pain_point_description(category, evidence),
                    'evidence': evidence,
                    'business_impact': self._assess_business_impact(category, severity, assessment_data)
                }
                pain_points.append(pain_point)
        
        # Sort by severity and score
        pain_points.sort(key=lambda x: (x['severity'] == 'High', x['score']), reverse=True)
        
        return pain_points
    
    def _identify_positive_patterns(self, responses: Dict, assessment_data: Dict) -> List[Dict]:
        """
        Identify positive patterns and strengths
        """
        positive_patterns = []
        
        text_responses = {k: v for k, v in responses.items() if isinstance(v, str) and len(v) > 10}
        
        for category, keywords in self.positive_keywords.items():
            strength_score = 0
            evidence = []
            
            for question_key, response in text_responses.items():
                response_lower = response.lower()
                matches = sum(1 for keyword in keywords if keyword in response_lower)
                
                if matches > 0:
                    strength_score += matches
                    evidence.append({
                        'question': question_key,
                        'response_excerpt': response[:200] + '...' if len(response) > 200 else response,
                        'keywords_found': [kw for kw in keywords if kw in response_lower]
                    })
            
            if strength_score >= 1:  # Lower threshold for positive patterns
                strength_level = 'Strong' if strength_score >= 3 else 'Moderate'
                
                positive_pattern = {
                    'category': category,
                    'strength_level': strength_level,
                    'score': strength_score,
                    'title': self._get_positive_pattern_title(category),
                    'description': self._get_positive_pattern_description(category, evidence),
                    'evidence': evidence,
                    'amplification_opportunities': self._get_amplification_opportunities(category)
                }
                positive_patterns.append(positive_pattern)
        
        return positive_patterns
    
    def _generate_ai_opportunities(self, pain_points: List[Dict], assessment_data: Dict) -> List[Dict]:
        """
        Generate AI automation opportunities based on identified pain points,
        including specific State AI Strategies services
        """
        opportunities = []
        
        # Get State AI Strategies service recommendations
        state_ai_recommendations = self.state_ai_services.get_recommended_services(pain_points)
        
        # Create opportunities from State AI Strategies services
        for service in state_ai_recommendations:
            opportunity = {
                'pain_point_category': 'multiple',  # Services can address multiple categories
                'pain_point_severity': 'High',  # Prioritize these recommendations
                'title': service['name'],
                'description': service['description'],
                'tagline': service['tagline'],
                'solutions': service['specific_benefits'],
                'recommended_tools': [service['name']],  # The service itself is the tool
                'implementation_complexity': service['implementation_complexity'],
                'expected_roi': service['typical_roi'],
                'time_to_value': service['time_to_value'],
                'prerequisites': ['Contact State AI Strategies for consultation'],
                'success_metrics': self._get_service_success_metrics(service),
                'service_type': 'state_ai_strategies',
                'price_range': service['price_range'],
                'recommendation_score': service.get('recommendation_score', 0)
            }
            opportunities.append(opportunity)
        
        # Also generate generic AI opportunities for comprehensive coverage
        for pain_point in pain_points:
            category = pain_point['category']
            
            if category in self.ai_solutions:
                solution_data = self.ai_solutions[category]
                
                opportunity = {
                    'pain_point_category': category,
                    'pain_point_severity': pain_point['severity'],
                    'title': f"AI-Powered {category.replace('_', ' ').title()} Solution",
                    'description': self._generate_opportunity_description(category, pain_point),
                    'solutions': solution_data['solutions'],
                    'recommended_tools': solution_data['tools'],
                    'implementation_complexity': self._assess_implementation_complexity(category, assessment_data),
                    'expected_roi': solution_data['roi_factor'],
                    'time_to_value': self._estimate_time_to_value(category),
                    'prerequisites': self._get_prerequisites(category, assessment_data),
                    'success_metrics': self._define_success_metrics(category),
                    'service_type': 'generic'
                }
                opportunities.append(opportunity)
        
        # Sort by State AI services first (higher priority), then by ROI and implementation complexity
        opportunities.sort(key=lambda x: (
            x['service_type'] == 'state_ai_strategies',  # State AI services first
            x.get('recommendation_score', 0),  # Then by recommendation score
            x['expected_roi'],  # Then by ROI
            -self._complexity_score(x['implementation_complexity'])  # Then by complexity (lower is better)
        ), reverse=True)
        
        return opportunities
    
    def _create_recommendations(self, pain_points: List[Dict], ai_opportunities: List[Dict], assessment_data: Dict) -> List[Dict]:
        """
        Create actionable recommendations, prioritizing State AI Strategies services
        """
        recommendations = []
        
        # Separate State AI Strategies services from generic opportunities
        state_ai_opportunities = [opp for opp in ai_opportunities if opp.get('service_type') == 'state_ai_strategies']
        generic_opportunities = [opp for opp in ai_opportunities if opp.get('service_type') == 'generic']
        
        # State AI Strategies Quick Wins (prioritize these)
        state_ai_quick_wins = [opp for opp in state_ai_opportunities if opp['implementation_complexity'] in ['Low', 'Medium']]
        
        if state_ai_quick_wins:
            recommendations.append({
                'category': 'State AI Strategies - Quick Wins',
                'priority': 'High',
                'title': 'Immediate AI Solutions from State AI Strategies',
                'description': 'Professional AI services specifically designed for Mississippi businesses. These solutions can be implemented quickly with expert guidance.',
                'opportunities': state_ai_quick_wins[:3],  # Top 3 State AI quick wins
                'timeline': '2-8 weeks',
                'contact_info': 'Contact State AI Strategies at stateaistrategies.com for consultation'
            })
        
        # State AI Strategies Strategic Initiatives
        state_ai_strategic = [opp for opp in state_ai_opportunities if opp['implementation_complexity'] == 'High']
        
        if state_ai_strategic:
            recommendations.append({
                'category': 'State AI Strategies - Strategic Initiatives',
                'priority': 'Medium',
                'title': 'Comprehensive AI Transformation with State AI Strategies',
                'description': 'Advanced AI solutions that require more planning but offer substantial returns with professional implementation support.',
                'opportunities': state_ai_strategic[:2],  # Top 2 State AI strategic initiatives
                'timeline': '2-6 months',
                'contact_info': 'Contact State AI Strategies at stateaistrategies.com for detailed consultation'
            })
        
        # Generic Quick wins (as additional options)
        generic_quick_wins = [opp for opp in generic_opportunities if opp['implementation_complexity'] in ['Low', 'Medium'] and opp['expected_roi'] > 0.2]
        
        if generic_quick_wins:
            recommendations.append({
                'category': 'Additional Quick Wins',
                'priority': 'Medium',
                'title': 'Alternative AI Implementation Opportunities',
                'description': 'Additional AI solutions that can be implemented with various providers or in-house development.',
                'opportunities': generic_quick_wins[:2],  # Top 2 generic quick wins
                'timeline': '1-4 months'
            })
        
        # Foundation building (if needed)
        tech_comfort = assessment_data.get('tech_comfort_level', '3')
        if isinstance(tech_comfort, str) and tech_comfort.isdigit():
            tech_comfort = int(tech_comfort)
        else:
            tech_comfort = 3
            
        if tech_comfort < 3:
            recommendations.append({
                'category': 'Foundation Building',
                'priority': 'High',
                'title': 'Technology Readiness Preparation',
                'description': 'Build the foundation for successful AI implementation. Consider starting with State AI Strategies\' AI Readiness Assessment.',
                'opportunities': [],
                'actions': [
                    'Schedule AI Readiness Assessment with State AI Strategies',
                    'Invest in staff technology training',
                    'Upgrade core business systems',
                    'Establish data collection processes',
                    'Create change management plan'
                ],
                'timeline': '1-6 months',
                'contact_info': 'State AI Strategies offers AI Readiness Assessment - perfect for beginners'
            })
        
        return recommendations
    
    def _calculate_roi_estimates(self, ai_opportunities: List[Dict], assessment_data: Dict) -> Dict:
        """
        Calculate ROI estimates for AI opportunities
        """
        roi_estimates = {
            'total_potential_savings': 0,
            'total_implementation_cost': 0,
            'payback_period_months': 0,
            'annual_roi_percentage': 0,
            'opportunity_breakdown': []
        }
        
        # Estimate business size factor for cost calculations
        business_size = assessment_data.get('business_size', '1-5')
        size_factor = self._get_size_factor(business_size)
        
        # Estimate annual revenue for calculations
        revenue_range = assessment_data.get('annual_revenue_range', 'Under $100K')
        estimated_revenue = self._estimate_revenue(revenue_range)
        
        for opportunity in ai_opportunities:
            # Calculate potential savings
            roi_factor = opportunity['expected_roi']
            potential_savings = estimated_revenue * roi_factor * 0.1  # 10% of revenue impact
            
            # Estimate implementation cost
            complexity = opportunity['implementation_complexity']
            base_cost = 5000 if complexity == 'Low' else 15000 if complexity == 'Medium' else 35000
            implementation_cost = base_cost * size_factor
            
            # Calculate payback period
            monthly_savings = potential_savings / 12
            payback_months = implementation_cost / monthly_savings if monthly_savings > 0 else 999
            
            opportunity_roi = {
                'opportunity_title': opportunity['title'],
                'potential_annual_savings': potential_savings,
                'implementation_cost': implementation_cost,
                'payback_period_months': min(payback_months, 999),
                'annual_roi_percentage': (potential_savings / implementation_cost * 100) if implementation_cost > 0 else 0
            }
            
            roi_estimates['opportunity_breakdown'].append(opportunity_roi)
            roi_estimates['total_potential_savings'] += potential_savings
            roi_estimates['total_implementation_cost'] += implementation_cost
        
        # Calculate overall ROI
        if roi_estimates['total_implementation_cost'] > 0:
            roi_estimates['annual_roi_percentage'] = (roi_estimates['total_potential_savings'] / roi_estimates['total_implementation_cost']) * 100
            roi_estimates['payback_period_months'] = (roi_estimates['total_implementation_cost'] / (roi_estimates['total_potential_savings'] / 12))
        
        return roi_estimates
    
    def _create_implementation_roadmap(self, ai_opportunities: List[Dict]) -> List[Dict]:
        """
        Create a phased implementation roadmap
        """
        roadmap = []
        
        # Phase 1: Foundation and Quick Wins (Months 1-3)
        phase1_opportunities = [opp for opp in ai_opportunities if opp['implementation_complexity'] == 'Low'][:2]
        
        if phase1_opportunities:
            roadmap.append({
                'phase': 1,
                'title': 'Foundation and Quick Wins',
                'duration': '1-3 months',
                'objectives': [
                    'Establish AI implementation foundation',
                    'Achieve early wins to build momentum',
                    'Train team on new technologies'
                ],
                'opportunities': phase1_opportunities,
                'key_milestones': [
                    'Complete technology assessment',
                    'Implement first AI solution',
                    'Measure initial results'
                ]
            })
        
        # Phase 2: Core Improvements (Months 4-8)
        phase2_opportunities = [opp for opp in ai_opportunities if opp['implementation_complexity'] == 'Medium'][:2]
        
        if phase2_opportunities:
            roadmap.append({
                'phase': 2,
                'title': 'Core Process Improvements',
                'duration': '4-8 months',
                'objectives': [
                    'Implement core AI solutions',
                    'Optimize existing processes',
                    'Scale successful initiatives'
                ],
                'opportunities': phase2_opportunities,
                'key_milestones': [
                    'Deploy core AI systems',
                    'Achieve target efficiency gains',
                    'Expand to additional processes'
                ]
            })
        
        # Phase 3: Advanced Transformation (Months 9-12)
        phase3_opportunities = [opp for opp in ai_opportunities if opp['implementation_complexity'] == 'High'][:1]
        
        if phase3_opportunities:
            roadmap.append({
                'phase': 3,
                'title': 'Advanced AI Transformation',
                'duration': '9-12 months',
                'objectives': [
                    'Implement advanced AI capabilities',
                    'Achieve full process automation',
                    'Establish competitive advantage'
                ],
                'opportunities': phase3_opportunities,
                'key_milestones': [
                    'Complete advanced AI deployment',
                    'Achieve full ROI realization',
                    'Establish continuous improvement process'
                ]
            })
        
        return roadmap
    
    def _generate_executive_summary(self, analysis_results: Dict) -> str:
        """
        Generate an executive summary of the analysis
        """
        pain_points_count = len(analysis_results['pain_points'])
        opportunities_count = len(analysis_results['ai_opportunities'])
        total_roi = analysis_results['roi_estimates'].get('annual_roi_percentage', 0)
        
        summary = f"""
        Executive Summary:
        
        Our comprehensive AI assessment has identified {pain_points_count} key areas for improvement and {opportunities_count} specific AI automation opportunities for your business.
        
        Key Findings:
        • {pain_points_count} operational pain points requiring attention
        • {opportunities_count} AI automation opportunities identified
        • Estimated annual ROI of {total_roi:.1f}% from AI implementation
        • Payback period of {analysis_results['roi_estimates'].get('payback_period_months', 0):.1f} months
        
        Top Recommendations:
        1. Focus on quick wins with immediate impact
        2. Build technology foundation for long-term success
        3. Implement AI solutions in phases for manageable change
        4. Measure and optimize continuously
        
        This assessment provides a clear roadmap for leveraging AI to transform your business operations, reduce costs, and improve efficiency.
        """
        
        return summary.strip()
    
    def _generate_detailed_insights(self, responses: Dict, analysis_results: Dict) -> Dict:
        """
        Generate detailed insights for the report
        """
        insights = {
            'response_analysis': self._analyze_response_patterns(responses),
            'industry_benchmarks': self._get_industry_benchmarks(analysis_results),
            'risk_assessment': self._assess_implementation_risks(analysis_results),
            'success_factors': self._identify_success_factors(analysis_results)
        }
        
        return insights
    
    # Helper methods
    def _get_pain_point_title(self, category: str) -> str:
        titles = {
            'time_management': 'Time Management and Process Efficiency',
            'efficiency': 'Operational Efficiency Challenges',
            'customer_service': 'Customer Service and Support Issues',
            'inventory': 'Inventory Management Problems',
            'financial': 'Financial Process Inefficiencies',
            'staffing': 'Human Resources and Staffing Challenges',
            'technology': 'Technology and System Limitations',
            'marketing': 'Marketing and Lead Generation Issues',
            'data': 'Data Management and Analytics Gaps'
        }
        return titles.get(category, category.replace('_', ' ').title())
    
    def _get_pain_point_description(self, category: str, evidence: List[Dict]) -> str:
        descriptions = {
            'time_management': 'Significant time is being spent on manual, repetitive tasks that could be automated.',
            'efficiency': 'Operational bottlenecks and inefficient processes are impacting productivity.',
            'customer_service': 'Customer service challenges are affecting satisfaction and retention.',
            'inventory': 'Inventory management issues are causing stockouts, overstocking, or tracking problems.',
            'financial': 'Financial processes are manual and time-consuming, affecting cash flow management.',
            'staffing': 'Human resource challenges including turnover, scheduling, and training inefficiencies.',
            'technology': 'Outdated or disconnected technology systems are limiting operational efficiency.',
            'marketing': 'Marketing efforts lack automation and data-driven optimization.',
            'data': 'Limited data analysis capabilities are preventing data-driven decision making.'
        }
        return descriptions.get(category, 'Operational challenges identified in this area.')
    
    def _get_positive_pattern_title(self, category: str) -> str:
        titles = {
            'efficiency': 'Strong Operational Efficiency',
            'customer_satisfaction': 'High Customer Satisfaction',
            'growth': 'Strong Growth Trajectory',
            'technology': 'Advanced Technology Adoption',
            'team': 'Skilled and Motivated Team'
        }
        return titles.get(category, category.replace('_', ' ').title())
    
    def _get_positive_pattern_description(self, category: str, evidence: List[Dict]) -> str:
        descriptions = {
            'efficiency': 'Your business demonstrates strong operational efficiency and streamlined processes.',
            'customer_satisfaction': 'High levels of customer satisfaction indicate strong service delivery.',
            'growth': 'Your business shows positive growth trends and market success.',
            'technology': 'Good technology adoption provides a strong foundation for AI implementation.',
            'team': 'A skilled and motivated team is a key asset for successful transformation.'
        }
        return descriptions.get(category, 'Positive patterns identified in this area.')
    
    def _get_amplification_opportunities(self, category: str) -> List[str]:
        opportunities = {
            'efficiency': ['Automate additional processes', 'Implement predictive analytics', 'Scale successful practices'],
            'customer_satisfaction': ['Implement AI-powered personalization', 'Automate customer feedback analysis', 'Predictive customer service'],
            'growth': ['AI-powered market analysis', 'Automated growth tracking', 'Predictive demand forecasting'],
            'technology': ['Advanced AI integration', 'Machine learning implementation', 'Intelligent automation'],
            'team': ['AI-powered training programs', 'Performance analytics', 'Automated skill development']
        }
        return opportunities.get(category, ['Leverage this strength for AI implementation'])
    
    def _generate_opportunity_description(self, category: str, pain_point: Dict) -> str:
        base_descriptions = {
            'time_management': 'Implement AI-powered automation to eliminate manual tasks and optimize time allocation.',
            'efficiency': 'Deploy intelligent process automation to streamline operations and eliminate bottlenecks.',
            'customer_service': 'Utilize AI chatbots and automated support systems to improve response times and satisfaction.',
            'inventory': 'Implement predictive analytics and automated inventory management to optimize stock levels.',
            'financial': 'Automate financial processes with AI-powered invoicing, payment tracking, and cash flow forecasting.',
            'staffing': 'Use AI for intelligent scheduling, performance analytics, and automated HR processes.',
            'technology': 'Integrate AI-powered systems to modernize technology infrastructure and improve connectivity.',
            'marketing': 'Deploy AI-driven marketing automation, lead scoring, and personalized campaign management.',
            'data': 'Implement AI-powered analytics and automated reporting for data-driven decision making.'
        }
        return base_descriptions.get(category, 'AI-powered solution to address identified challenges.')
    
    def _assess_implementation_complexity(self, category: str, assessment_data: Dict) -> str:
        # Base complexity by category
        base_complexity = {
            'time_management': 'Low',
            'customer_service': 'Low',
            'marketing': 'Medium',
            'financial': 'Medium',
            'efficiency': 'Medium',
            'staffing': 'Medium',
            'inventory': 'High',
            'technology': 'High',
            'data': 'High'
        }
        
        complexity = base_complexity.get(category, 'Medium')
        
        # Adjust based on business size and tech comfort
        business_size = assessment_data.get('business_size', '1-5')
        tech_comfort = assessment_data.get('tech_comfort_level', '3')
        
        if business_size in ['1-5', '6-20'] and tech_comfort < '3':
            # Increase complexity for smaller, less tech-savvy businesses
            if complexity == 'Low':
                complexity = 'Medium'
            elif complexity == 'Medium':
                complexity = 'High'
        
        return complexity
    
    def _estimate_time_to_value(self, category: str) -> str:
        time_estimates = {
            'time_management': '2-4 weeks',
            'customer_service': '4-6 weeks',
            'marketing': '6-8 weeks',
            'financial': '8-12 weeks',
            'efficiency': '6-10 weeks',
            'staffing': '8-12 weeks',
            'inventory': '12-16 weeks',
            'technology': '16-24 weeks',
            'data': '12-20 weeks'
        }
        return time_estimates.get(category, '8-12 weeks')
    
    def _get_prerequisites(self, category: str, assessment_data: Dict) -> List[str]:
        prerequisites = {
            'time_management': ['Process documentation', 'Task identification'],
            'customer_service': ['Customer data collection', 'Support process mapping'],
            'marketing': ['Customer database', 'Marketing process documentation'],
            'financial': ['Financial system integration', 'Data standardization'],
            'efficiency': ['Process mapping', 'Performance baseline'],
            'staffing': ['HR system setup', 'Employee data organization'],
            'inventory': ['Inventory tracking system', 'Supplier data integration'],
            'technology': ['System audit', 'Infrastructure assessment'],
            'data': ['Data collection processes', 'Analytics platform setup']
        }
        return prerequisites.get(category, ['Basic system setup'])
    
    def _define_success_metrics(self, category: str) -> List[str]:
        metrics = {
            'time_management': ['Time saved per task', 'Process completion time', 'Employee productivity'],
            'customer_service': ['Response time', 'Customer satisfaction score', 'Resolution rate'],
            'marketing': ['Lead conversion rate', 'Campaign ROI', 'Customer acquisition cost'],
            'financial': ['Invoice processing time', 'Payment collection time', 'Cash flow accuracy'],
            'efficiency': ['Process cycle time', 'Error reduction', 'Throughput improvement'],
            'staffing': ['Scheduling efficiency', 'Employee satisfaction', 'Turnover reduction'],
            'inventory': ['Stock accuracy', 'Turnover rate', 'Stockout reduction'],
            'technology': ['System uptime', 'Integration success', 'User adoption'],
            'data': ['Report generation time', 'Data accuracy', 'Insight generation']
        }
        return metrics.get(category, ['Efficiency improvement', 'Cost reduction'])
    
    def _complexity_score(self, complexity: str) -> int:
        scores = {'Low': 1, 'Medium': 2, 'High': 3}
        return scores.get(complexity, 2)
    
    def _get_size_factor(self, business_size: str) -> float:
        factors = {
            '1-5': 0.5,
            '6-20': 1.0,
            '21-50': 1.5,
            '51-100': 2.0,
            '100+': 3.0
        }
        return factors.get(business_size, 1.0)
    
    def _estimate_revenue(self, revenue_range: str) -> float:
        estimates = {
            'Under $100K': 75000,
            '$100K - $500K': 300000,
            '$500K - $1M': 750000,
            '$1M - $5M': 3000000,
            '$5M - $10M': 7500000,
            'Over $10M': 15000000
        }
        return estimates.get(revenue_range, 300000)
    
    def _assess_business_impact(self, category: str, severity: str, assessment_data: Dict) -> str:
        impact_levels = {
            'High': 'Significant negative impact on business operations and profitability',
            'Medium': 'Moderate impact affecting efficiency and growth potential',
            'Low': 'Minor impact with room for optimization'
        }
        return impact_levels.get(severity, 'Impact assessment needed')
    
    def _analyze_response_patterns(self, responses: Dict) -> Dict:
        """Analyze patterns in responses"""
        return {
            'response_completeness': len([v for v in responses.values() if v and str(v).strip()]) / len(responses) * 100,
            'detailed_responses': len([v for v in responses.values() if isinstance(v, str) and len(v) > 50]),
            'common_themes': ['efficiency', 'automation', 'growth']  # Simplified for demo
        }
    
    def _get_industry_benchmarks(self, analysis_results: Dict) -> Dict:
        """Get industry benchmarks"""
        return {
            'average_pain_points': 3.5,
            'typical_roi': 25.0,
            'implementation_success_rate': 78.0
        }
    
    def _assess_implementation_risks(self, analysis_results: Dict) -> List[Dict]:
        """Assess implementation risks"""
        return [
            {
                'risk': 'Change Management',
                'probability': 'Medium',
                'impact': 'High',
                'mitigation': 'Comprehensive training and gradual rollout'
            },
            {
                'risk': 'Technical Integration',
                'probability': 'Low',
                'impact': 'Medium',
                'mitigation': 'Thorough testing and professional implementation'
            }
        ]
    
    def _identify_success_factors(self, analysis_results: Dict) -> List[str]:
        """Identify key success factors"""
        return [
            'Strong leadership commitment',
            'Adequate training and support',
            'Phased implementation approach',
            'Regular monitoring and optimization',
            'Clear success metrics and goals'
        ]


    def _get_service_success_metrics(self, service: Dict[str, Any]) -> List[str]:
        """
        Get success metrics for State AI Strategies services
        """
        service_metrics = {
            'AI Readiness Assessment': [
                'AI readiness score improvement',
                'Number of opportunities identified',
                'Implementation roadmap completion'
            ],
            'Mississippi AI Starter Kit': [
                'Chatbot response accuracy',
                'Customer inquiry resolution time',
                'Content creation efficiency'
            ],
            'AI Strategy Workshop': [
                'Strategy alignment score',
                'Number of prioritized opportunities',
                'Team buy-in and engagement'
            ],
            'Private AI Training': [
                'Team AI proficiency scores',
                'Productivity improvement metrics',
                'Tool adoption rates'
            ],
            'AI-Powered Dashboards': [
                'Data visualization usage',
                'Decision-making speed',
                'Insight generation frequency'
            ],
            'Custom AI Assistants': [
                'Process automation percentage',
                'Task completion time reduction',
                'User satisfaction scores'
            ],
            'Starkville AI Workshop Series': [
                'Workshop attendance rates',
                'Skill assessment improvements',
                'Community engagement metrics'
            ]
        }
        
        service_name = service.get('name', '')
        return service_metrics.get(service_name, [
            'Implementation success rate',
            'User adoption metrics',
            'ROI achievement'
        ])

