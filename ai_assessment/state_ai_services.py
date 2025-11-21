"""
State AI Strategies Services Integration

This module maps business pain points to specific State AI Strategies services
from stateaistrategies.com to provide actionable, real solutions.
"""

from typing import Dict, List, Any

class StateAIServicesMapper:
    """
    Maps business pain points to State AI Strategies services
    """
    
    def __init__(self):
        self.services = {
            'ai_readiness_assessment': {
                'name': 'AI Readiness Assessment',
                'tagline': 'Best for Beginners',
                'description': 'Discover how AI can transform your Mississippi business with a quick, affordable assessment.',
                'best_for': ['technology_gaps', 'ai_knowledge', 'getting_started'],
                'pain_point_categories': ['technology', 'knowledge_gaps', 'strategic_planning'],
                'implementation_complexity': 'Low',
                'time_to_value': '1-2 weeks',
                'typical_roi': 0.15,
                'price_range': '$500-$1,500'
            },
            'mississippi_ai_starter_kit': {
                'name': 'Mississippi AI Starter Kit',
                'tagline': 'Best for Quick AI Wins',
                'description': 'Launch AI for your Mississippi business with a pre-configured chatbot and content tools.',
                'best_for': ['customer_service', 'content_creation', 'basic_automation'],
                'pain_point_categories': ['customer_service', 'marketing', 'time_management'],
                'implementation_complexity': 'Low',
                'time_to_value': '2-4 weeks',
                'typical_roi': 0.25,
                'price_range': '$1,500-$3,000'
            },
            'ai_strategy_workshop': {
                'name': 'AI Strategy Workshop',
                'tagline': 'Best for Planning',
                'description': 'Map your AI opportunities in a clear, collaborative session tailored for Mississippi businesses.',
                'best_for': ['strategic_planning', 'team_alignment', 'roadmap_development'],
                'pain_point_categories': ['strategic_planning', 'leadership', 'process_optimization'],
                'implementation_complexity': 'Medium',
                'time_to_value': '1-3 weeks',
                'typical_roi': 0.20,
                'price_range': '$2,000-$5,000'
            },
            'private_ai_training': {
                'name': 'Private AI Training',
                'tagline': 'Best for Skill-Building',
                'description': 'Empower your Mississippi team with tailored, ethical AI training to boost productivity.',
                'best_for': ['team_training', 'skill_development', 'productivity_improvement'],
                'pain_point_categories': ['human_resources', 'training', 'productivity'],
                'implementation_complexity': 'Medium',
                'time_to_value': '4-8 weeks',
                'typical_roi': 0.30,
                'price_range': '$3,000-$8,000'
            },
            'ai_powered_dashboards': {
                'name': 'AI-Powered Dashboards',
                'tagline': 'Best for Data Insights',
                'description': 'Transform your Mississippi business data into clear, actionable insights with custom dashboards.',
                'best_for': ['data_analysis', 'reporting', 'decision_making'],
                'pain_point_categories': ['data_management', 'reporting', 'analytics'],
                'implementation_complexity': 'High',
                'time_to_value': '6-12 weeks',
                'typical_roi': 0.40,
                'price_range': '$5,000-$15,000'
            },
            'custom_ai_assistants': {
                'name': 'Custom AI Assistants',
                'tagline': 'Best for Automation',
                'description': 'Get a branded chatbot or AI tool built to solve your Mississippi business challenges.',
                'best_for': ['process_automation', 'customer_support', 'workflow_optimization'],
                'pain_point_categories': ['automation', 'customer_service', 'operations'],
                'implementation_complexity': 'High',
                'time_to_value': '8-16 weeks',
                'typical_roi': 0.50,
                'price_range': '$8,000-$25,000'
            },
            'starkville_ai_workshop_series': {
                'name': 'Starkville AI Workshop Series',
                'tagline': 'Best for Community Learning',
                'description': 'Empower your Starkville team with practical AI skills through hands-on, community-driven workshops.',
                'best_for': ['team_development', 'community_learning', 'local_networking'],
                'pain_point_categories': ['training', 'team_development', 'local_community'],
                'implementation_complexity': 'Low',
                'time_to_value': '2-6 weeks',
                'typical_roi': 0.20,
                'price_range': '$1,000-$3,000'
            }
        }
        
        # Pain point to service mapping
        self.pain_point_service_mapping = {
            'technology': ['ai_readiness_assessment', 'mississippi_ai_starter_kit', 'ai_powered_dashboards'],
            'customer_service': ['mississippi_ai_starter_kit', 'custom_ai_assistants'],
            'time_management': ['mississippi_ai_starter_kit', 'private_ai_training', 'custom_ai_assistants'],
            'marketing': ['mississippi_ai_starter_kit', 'ai_powered_dashboards'],
            'data_management': ['ai_powered_dashboards', 'ai_strategy_workshop'],
            'process_optimization': ['ai_strategy_workshop', 'custom_ai_assistants', 'private_ai_training'],
            'strategic_planning': ['ai_strategy_workshop', 'ai_readiness_assessment'],
            'training': ['private_ai_training', 'starkville_ai_workshop_series'],
            'automation': ['custom_ai_assistants', 'mississippi_ai_starter_kit'],
            'productivity': ['private_ai_training', 'custom_ai_assistants'],
            'reporting': ['ai_powered_dashboards'],
            'analytics': ['ai_powered_dashboards', 'ai_strategy_workshop'],
            'operations': ['custom_ai_assistants', 'ai_strategy_workshop'],
            'human_resources': ['private_ai_training', 'starkville_ai_workshop_series'],
            'financial': ['ai_powered_dashboards', 'ai_strategy_workshop'],
            'inventory': ['ai_powered_dashboards', 'custom_ai_assistants'],
            'communication': ['mississippi_ai_starter_kit', 'custom_ai_assistants']
        }
    
    def get_recommended_services(self, pain_points: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Get recommended State AI Strategies services based on identified pain points
        """
        recommended_services = []
        service_scores = {}
        
        # Score services based on pain point matches
        for pain_point in pain_points:
            category = pain_point.get('category', 'general')
            severity = pain_point.get('severity', 'Medium')
            
            # Get matching services for this pain point category
            matching_services = self.pain_point_service_mapping.get(category, [])
            
            # Score each matching service
            severity_multiplier = {'High': 3, 'Medium': 2, 'Low': 1}.get(severity, 2)
            
            for service_key in matching_services:
                if service_key not in service_scores:
                    service_scores[service_key] = 0
                service_scores[service_key] += severity_multiplier
        
        # Sort services by score and get top recommendations
        sorted_services = sorted(service_scores.items(), key=lambda x: x[1], reverse=True)
        
        # Build recommended services list
        for service_key, score in sorted_services[:4]:  # Top 4 recommendations
            service_info = self.services[service_key].copy()
            service_info['recommendation_score'] = score
            service_info['service_key'] = service_key
            
            # Add specific benefits based on pain points
            service_info['specific_benefits'] = self._get_specific_benefits(service_key, pain_points)
            
            recommended_services.append(service_info)
        
        return recommended_services
    
    def _get_specific_benefits(self, service_key: str, pain_points: List[Dict[str, Any]]) -> List[str]:
        """
        Get specific benefits of a service based on the identified pain points
        """
        service = self.services[service_key]
        benefits = []
        
        # Map service capabilities to pain point solutions
        benefit_mapping = {
            'ai_readiness_assessment': {
                'technology': 'Identify your current technology gaps and AI readiness level',
                'strategic_planning': 'Develop a clear AI implementation roadmap',
                'knowledge_gaps': 'Understand AI opportunities specific to your business'
            },
            'mississippi_ai_starter_kit': {
                'customer_service': 'Deploy AI chatbot to handle customer inquiries 24/7',
                'marketing': 'Automate content creation and social media management',
                'time_management': 'Reduce manual tasks with pre-configured AI tools'
            },
            'ai_strategy_workshop': {
                'strategic_planning': 'Collaborative session to map your AI transformation journey',
                'process_optimization': 'Identify and prioritize automation opportunities',
                'leadership': 'Align leadership team on AI strategy and implementation'
            },
            'private_ai_training': {
                'training': 'Custom training program tailored to your team\'s needs',
                'productivity': 'Boost team productivity with practical AI skills',
                'human_resources': 'Develop internal AI capabilities and expertise'
            },
            'ai_powered_dashboards': {
                'data_management': 'Transform raw data into actionable business insights',
                'reporting': 'Automate report generation and data visualization',
                'analytics': 'Advanced analytics to drive data-driven decisions'
            },
            'custom_ai_assistants': {
                'automation': 'Custom AI solutions for your specific business processes',
                'operations': 'Streamline operations with intelligent automation',
                'customer_service': 'Branded AI assistant to enhance customer experience'
            },
            'starkville_ai_workshop_series': {
                'training': 'Hands-on AI workshops for your local team',
                'team_development': 'Build AI skills through community learning',
                'local_community': 'Connect with other Starkville businesses implementing AI'
            }
        }
        
        service_benefits = benefit_mapping.get(service_key, {})
        
        for pain_point in pain_points:
            category = pain_point.get('category', '')
            if category in service_benefits:
                benefits.append(service_benefits[category])
        
        # Add general benefits if no specific matches
        if not benefits:
            general_benefits = {
                'ai_readiness_assessment': 'Comprehensive assessment of your AI opportunities',
                'mississippi_ai_starter_kit': 'Quick AI implementation with immediate results',
                'ai_strategy_workshop': 'Strategic planning session for AI transformation',
                'private_ai_training': 'Professional AI training for your team',
                'ai_powered_dashboards': 'Custom dashboards for better business insights',
                'custom_ai_assistants': 'Tailored AI solutions for your business needs',
                'starkville_ai_workshop_series': 'Community-based AI learning and networking'
            }
            benefits.append(general_benefits.get(service_key, 'Professional AI solution'))
        
        return benefits[:3]  # Return top 3 benefits
    
    def get_service_details(self, service_key: str) -> Dict[str, Any]:
        """
        Get detailed information about a specific service
        """
        return self.services.get(service_key, {})
    
    def get_all_services(self) -> Dict[str, Dict[str, Any]]:
        """
        Get all available services
        """
        return self.services
    
    def estimate_implementation_cost(self, recommended_services: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Estimate implementation costs for recommended services
        """
        total_min_cost = 0
        total_max_cost = 0
        service_costs = []
        
        for service in recommended_services:
            price_range = service.get('price_range', '$0-$0')
            # Parse price range (e.g., "$1,500-$3,000")
            try:
                price_parts = price_range.replace('$', '').replace(',', '').split('-')
                min_cost = int(price_parts[0])
                max_cost = int(price_parts[1]) if len(price_parts) > 1 else min_cost
                
                total_min_cost += min_cost
                total_max_cost += max_cost
                
                service_costs.append({
                    'service_name': service['name'],
                    'min_cost': min_cost,
                    'max_cost': max_cost,
                    'expected_roi': service.get('typical_roi', 0.2)
                })
            except (ValueError, IndexError):
                # Handle parsing errors gracefully
                continue
        
        return {
            'total_min_cost': total_min_cost,
            'total_max_cost': total_max_cost,
            'average_cost': (total_min_cost + total_max_cost) / 2,
            'service_breakdown': service_costs,
            'total_services': len(service_costs)
        }

