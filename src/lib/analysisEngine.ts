import { Assessment, Response, AnalysisResult, PainPoint, AIOpportunity, Recommendation, ROIEstimates, RoadmapPhase } from '../types/assessment';

export class AnalysisEngine {
  private painPointKeywords = {
    time_management: ['time', 'slow', 'delay', 'hours', 'manual', 'tedious', 'repetitive'],
    efficiency: ['inefficient', 'bottleneck', 'waste', 'duplicate', 'redundant', 'streamline'],
    customer_service: ['complaint', 'dissatisfied', 'wait', 'response time', 'support'],
    inventory: ['stockout', 'overstock', 'shortage', 'surplus', 'tracking', 'count'],
    financial: ['cash flow', 'payment', 'invoice', 'billing', 'cost', 'expense'],
    staffing: ['turnover', 'training', 'scheduling', 'shortage', 'overwhelmed'],
    technology: ['outdated', 'manual', 'spreadsheet', 'paper', 'system', 'integration'],
    marketing: ['leads', 'conversion', 'visibility', 'reach', 'engagement'],
    data: ['tracking', 'analysis', 'reporting', 'insights', 'metrics']
  };

  private aiSolutions = {
    time_management: {
      solutions: ['Task automation', 'Workflow optimization', 'Scheduling AI', 'Process automation'],
      tools: ['Zapier', 'Microsoft Power Automate', 'Calendly', 'Asana'],
      roi_factor: 0.25
    },
    efficiency: {
      solutions: ['Process automation', 'Workflow optimization', 'Predictive analytics', 'Smart routing'],
      tools: ['RPA tools', 'Business process management', 'AI workflow engines'],
      roi_factor: 0.30
    },
    customer_service: {
      solutions: ['AI chatbots', 'Automated ticketing', 'Sentiment analysis', 'Response automation'],
      tools: ['Intercom', 'Zendesk AI', 'ChatGPT integration', 'Freshdesk'],
      roi_factor: 0.40
    },
    inventory: {
      solutions: ['Demand forecasting', 'Automated reordering', 'Inventory optimization', 'Predictive analytics'],
      tools: ['TradeGecko', 'Cin7', 'NetSuite', 'Custom AI models'],
      roi_factor: 0.20
    },
    financial: {
      solutions: ['Automated invoicing', 'Payment reminders', 'Cash flow forecasting', 'Expense categorization'],
      tools: ['QuickBooks AI', 'Xero', 'FreshBooks', 'Custom integrations'],
      roi_factor: 0.15
    },
    staffing: {
      solutions: ['Automated scheduling', 'Performance analytics', 'Training automation', 'Recruitment AI'],
      tools: ['When I Work', 'BambooHR', 'Workday', 'LinkedIn Talent'],
      roi_factor: 0.25
    },
    technology: {
      solutions: ['System integration', 'Data automation', 'Cloud migration', 'API connections'],
      tools: ['Zapier', 'Microsoft Power Platform', 'AWS', 'Google Cloud'],
      roi_factor: 0.35
    },
    marketing: {
      solutions: ['Lead scoring', 'Automated campaigns', 'Personalization', 'Analytics automation'],
      tools: ['HubSpot', 'Mailchimp', 'Google Analytics', 'Facebook Ads AI'],
      roi_factor: 0.30
    },
    data: {
      solutions: ['Automated reporting', 'Business intelligence', 'Predictive analytics', 'Data visualization'],
      tools: ['Tableau', 'Power BI', 'Google Data Studio', 'Custom dashboards'],
      roi_factor: 0.45
    }
  };

  async analyzeAssessment(assessment: Assessment, responses: Response[]): Promise<AnalysisResult> {
    const responseDict = this.createResponseDictionary(responses);
    
    const painPoints = this.identifyPainPoints(responseDict, assessment);
    const aiOpportunities = this.generateAIOpportunities(painPoints, assessment);
    const recommendations = this.createRecommendations(painPoints, aiOpportunities, assessment);
    const roiEstimates = this.calculateROIEstimates(aiOpportunities, assessment);
    const implementationRoadmap = this.createImplementationRoadmap(aiOpportunities);
    const executiveSummary = this.generateExecutiveSummary(painPoints, aiOpportunities, roiEstimates);

    return {
      id: '', // Will be set by database
      assessment_id: assessment.id,
      pain_points: painPoints,
      ai_opportunities: aiOpportunities,
      recommendations,
      roi_estimates: roiEstimates,
      implementation_roadmap: implementationRoadmap,
      executive_summary: executiveSummary,
      created_at: new Date().toISOString()
    };
  }

  private createResponseDictionary(responses: Response[]): Record<string, string> {
    return responses.reduce((dict, response) => {
      dict[response.question_key] = response.response_value;
      return dict;
    }, {} as Record<string, string>);
  }

  private identifyPainPoints(responses: Record<string, string>, assessment: Assessment): PainPoint[] {
    const painPoints: PainPoint[] = [];
    const textResponses = Object.entries(responses).filter(([_, value]) => 
      typeof value === 'string' && value.length > 10
    );

    for (const [category, keywords] of Object.entries(this.painPointKeywords)) {
      let painScore = 0;
      const evidence: Array<{ question: string; response_excerpt: string; keywords_found: string[] }> = [];

      for (const [questionKey, response] of textResponses) {
        const responseLower = response.toLowerCase();
        const matchedKeywords = keywords.filter(keyword => responseLower.includes(keyword));
        
        if (matchedKeywords.length > 0) {
          painScore += matchedKeywords.length;
          evidence.push({
            question: questionKey,
            response_excerpt: response.substring(0, 200),
            keywords_found: matchedKeywords
          });
        }
      }

      if (painScore >= 2) {
        const severity = painScore >= 5 ? 'High' : painScore >= 3 ? 'Medium' : 'Low';
        
        painPoints.push({
          category,
          severity,
          title: this.getPainPointTitle(category),
          description: this.getPainPointDescription(category),
          business_impact: this.assessBusinessImpact(category, severity),
          evidence
        });
      }
    }

    return painPoints.sort((a, b) => {
      const severityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return severityOrder[b.severity] - severityOrder[a.severity];
    });
  }

  private generateAIOpportunities(painPoints: PainPoint[], assessment: Assessment): AIOpportunity[] {
    const opportunities: AIOpportunity[] = [];

    for (const painPoint of painPoints) {
      const category = painPoint.category as keyof typeof this.aiSolutions;
      
      if (this.aiSolutions[category]) {
        const solutionData = this.aiSolutions[category];
        
        opportunities.push({
          title: `AI-Powered ${category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())} Solution`,
          description: this.generateOpportunityDescription(category, painPoint),
          pain_point_category: category,
          solutions: solutionData.solutions,
          recommended_tools: solutionData.tools,
          implementation_complexity: this.assessImplementationComplexity(category, assessment),
          expected_roi: solutionData.roi_factor,
          time_to_value: this.estimateTimeToValue(category),
          success_metrics: this.defineSuccessMetrics(category)
        });
      }
    }

    return opportunities;
  }

  private createRecommendations(painPoints: PainPoint[], opportunities: AIOpportunity[], assessment: Assessment): Recommendation[] {
    const recommendations: Recommendation[] = [];

    // Quick wins
    const quickWins = opportunities.filter(opp => 
      opp.implementation_complexity === 'Low' && opp.expected_roi > 0.2
    );

    if (quickWins.length > 0) {
      recommendations.push({
        category: 'Quick Wins',
        priority: 'High',
        title: 'Immediate AI Implementation Opportunities',
        description: 'Low-complexity, high-impact solutions that can be implemented quickly.',
        timeline: '1-3 months',
        opportunities: quickWins.slice(0, 3)
      });
    }

    // Strategic initiatives
    const strategicOpportunities = opportunities.filter(opp => 
      opp.implementation_complexity === 'High' && opp.expected_roi > 0.3
    );

    if (strategicOpportunities.length > 0) {
      recommendations.push({
        category: 'Strategic Initiatives',
        priority: 'Medium',
        title: 'Long-term AI Transformation',
        description: 'Complex solutions that require more planning but offer substantial returns.',
        timeline: '6-12 months',
        opportunities: strategicOpportunities.slice(0, 2)
      });
    }

    return recommendations;
  }

  private calculateROIEstimates(opportunities: AIOpportunity[], assessment: Assessment): ROIEstimates {
    const estimatedRevenue = this.estimateRevenue(assessment.annual_revenue);
    const sizeFactor = this.getSizeFactor(assessment.employee_count);

    let totalSavings = 0;
    let totalCost = 0;
    const breakdown: ROIEstimates['opportunity_breakdown'] = [];

    for (const opportunity of opportunities) {
      const potentialSavings = estimatedRevenue * opportunity.expected_roi * 0.1;
      const implementationCost = this.estimateImplementationCost(opportunity.implementation_complexity, sizeFactor);
      const paybackMonths = implementationCost / (potentialSavings / 12);

      totalSavings += potentialSavings;
      totalCost += implementationCost;

      breakdown.push({
        opportunity_title: opportunity.title,
        potential_annual_savings: potentialSavings,
        implementation_cost: implementationCost,
        payback_period_months: paybackMonths,
        annual_roi_percentage: (potentialSavings / implementationCost) * 100
      });
    }

    return {
      total_potential_savings: totalSavings,
      total_implementation_cost: totalCost,
      payback_period_months: totalCost / (totalSavings / 12),
      annual_roi_percentage: (totalSavings / totalCost) * 100,
      opportunity_breakdown: breakdown
    };
  }

  private createImplementationRoadmap(opportunities: AIOpportunity[]): RoadmapPhase[] {
    const phases: RoadmapPhase[] = [];

    // Phase 1: Quick wins
    const phase1Opportunities = opportunities.filter(opp => opp.implementation_complexity === 'Low').slice(0, 2);
    if (phase1Opportunities.length > 0) {
      phases.push({
        phase: 1,
        title: 'Foundation and Quick Wins',
        duration: '1-3 months',
        objectives: [
          'Establish AI implementation foundation',
          'Achieve early wins to build momentum',
          'Train team on new technologies'
        ],
        opportunities: phase1Opportunities,
        key_milestones: [
          'Complete technology assessment',
          'Implement first AI solution',
          'Measure initial results'
        ]
      });
    }

    // Phase 2: Core improvements
    const phase2Opportunities = opportunities.filter(opp => opp.implementation_complexity === 'Medium').slice(0, 2);
    if (phase2Opportunities.length > 0) {
      phases.push({
        phase: 2,
        title: 'Core Process Improvements',
        duration: '4-8 months',
        objectives: [
          'Implement core AI solutions',
          'Optimize existing processes',
          'Scale successful initiatives'
        ],
        opportunities: phase2Opportunities,
        key_milestones: [
          'Deploy core AI systems',
          'Achieve target efficiency gains',
          'Expand to additional processes'
        ]
      });
    }

    return phases;
  }

  private generateExecutiveSummary(painPoints: PainPoint[], opportunities: AIOpportunity[], roiEstimates: ROIEstimates): string {
    return `
Executive Summary:

Our comprehensive AI assessment has identified ${painPoints.length} key areas for improvement and ${opportunities.length} specific AI automation opportunities for your business.

Key Findings:
• ${painPoints.length} operational pain points requiring attention
• ${opportunities.length} AI automation opportunities identified
• Estimated annual ROI of ${roiEstimates.annual_roi_percentage.toFixed(1)}% from AI implementation
• Payback period of ${roiEstimates.payback_period_months.toFixed(1)} months

Top Recommendations:
1. Focus on quick wins with immediate impact
2. Build technology foundation for long-term success
3. Implement AI solutions in phases for manageable change
4. Measure and optimize continuously

This assessment provides a clear roadmap for leveraging AI to transform your business operations, reduce costs, and improve efficiency.
    `.trim();
  }

  // Helper methods
  private getPainPointTitle(category: string): string {
    const titles: Record<string, string> = {
      time_management: 'Time Management and Process Efficiency',
      efficiency: 'Operational Efficiency Challenges',
      customer_service: 'Customer Service and Support Issues',
      inventory: 'Inventory Management Problems',
      financial: 'Financial Process Inefficiencies',
      staffing: 'Human Resources and Staffing Challenges',
      technology: 'Technology and System Limitations',
      marketing: 'Marketing and Lead Generation Issues',
      data: 'Data Management and Analytics Gaps'
    };
    return titles[category] || category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  private getPainPointDescription(category: string): string {
    const descriptions: Record<string, string> = {
      time_management: 'Significant time is being spent on manual, repetitive tasks that could be automated.',
      efficiency: 'Operational bottlenecks and inefficient processes are impacting productivity.',
      customer_service: 'Customer service challenges are affecting satisfaction and retention.',
      inventory: 'Inventory management issues are causing stockouts, overstocking, or tracking problems.',
      financial: 'Financial processes are manual and time-consuming, affecting cash flow management.',
      staffing: 'Human resource challenges including turnover, scheduling, and training inefficiencies.',
      technology: 'Outdated or disconnected technology systems are limiting operational efficiency.',
      marketing: 'Marketing efforts lack automation and data-driven optimization.',
      data: 'Limited data analysis capabilities are preventing data-driven decision making.'
    };
    return descriptions[category] || 'Operational challenges identified in this area.';
  }

  private assessBusinessImpact(category: string, severity: string): string {
    const impactLevels: Record<string, string> = {
      'High': 'Significant negative impact on business operations and profitability',
      'Medium': 'Moderate impact affecting efficiency and growth potential',
      'Low': 'Minor impact with room for optimization'
    };
    return impactLevels[severity] || 'Impact assessment needed';
  }

  private generateOpportunityDescription(category: string, painPoint: PainPoint): string {
    const descriptions: Record<string, string> = {
      time_management: 'Implement AI-powered automation to eliminate manual tasks and optimize time allocation.',
      efficiency: 'Deploy intelligent process automation to streamline operations and eliminate bottlenecks.',
      customer_service: 'Utilize AI chatbots and automated support systems to improve response times and satisfaction.',
      inventory: 'Implement predictive analytics and automated inventory management to optimize stock levels.',
      financial: 'Automate financial processes with AI-powered invoicing, payment tracking, and cash flow forecasting.',
      staffing: 'Use AI for intelligent scheduling, performance analytics, and automated HR processes.',
      technology: 'Integrate AI-powered systems to modernize technology infrastructure and improve connectivity.',
      marketing: 'Deploy AI-driven marketing automation, lead scoring, and personalized campaign management.',
      data: 'Implement AI-powered analytics and automated reporting for data-driven decision making.'
    };
    return descriptions[category] || 'AI-powered solution to address identified challenges.';
  }

  private assessImplementationComplexity(category: string, assessment: Assessment): 'Low' | 'Medium' | 'High' {
    const baseComplexity: Record<string, 'Low' | 'Medium' | 'High'> = {
      time_management: 'Low',
      customer_service: 'Low',
      marketing: 'Medium',
      financial: 'Medium',
      efficiency: 'Medium',
      staffing: 'Medium',
      inventory: 'High',
      technology: 'High',
      data: 'High'
    };
    return baseComplexity[category] || 'Medium';
  }

  private estimateTimeToValue(category: string): string {
    const timeEstimates: Record<string, string> = {
      time_management: '2-4 weeks',
      customer_service: '4-6 weeks',
      marketing: '6-8 weeks',
      financial: '8-12 weeks',
      efficiency: '6-10 weeks',
      staffing: '8-12 weeks',
      inventory: '12-16 weeks',
      technology: '16-24 weeks',
      data: '12-20 weeks'
    };
    return timeEstimates[category] || '8-12 weeks';
  }

  private defineSuccessMetrics(category: string): string[] {
    const metrics: Record<string, string[]> = {
      time_management: ['Time saved per task', 'Process completion time', 'Employee productivity'],
      customer_service: ['Response time', 'Customer satisfaction score', 'Resolution rate'],
      marketing: ['Lead conversion rate', 'Campaign ROI', 'Customer acquisition cost'],
      financial: ['Invoice processing time', 'Payment collection time', 'Cash flow accuracy'],
      efficiency: ['Process cycle time', 'Error reduction', 'Throughput improvement'],
      staffing: ['Scheduling efficiency', 'Employee satisfaction', 'Turnover reduction'],
      inventory: ['Stock accuracy', 'Turnover rate', 'Stockout reduction'],
      technology: ['System uptime', 'Integration success', 'User adoption'],
      data: ['Report generation time', 'Data accuracy', 'Insight generation']
    };
    return metrics[category] || ['Efficiency improvement', 'Cost reduction'];
  }

  private estimateRevenue(revenueRange: string): number {
    const estimates: Record<string, number> = {
      'Under $100K': 75000,
      '$100K - $500K': 300000,
      '$500K - $1M': 750000,
      '$1M - $5M': 3000000,
      '$5M - $10M': 7500000,
      'Over $10M': 15000000
    };
    return estimates[revenueRange] || 300000;
  }

  private getSizeFactor(employeeCount: string): number {
    const factors: Record<string, number> = {
      '1-5': 0.5,
      '6-20': 1.0,
      '21-50': 1.5,
      '51-100': 2.0,
      '100+': 3.0
    };
    return factors[employeeCount] || 1.0;
  }

  private estimateImplementationCost(complexity: string, sizeFactor: number): number {
    const baseCosts: Record<string, number> = {
      'Low': 5000,
      'Medium': 15000,
      'High': 35000
    };
    return (baseCosts[complexity] || 15000) * sizeFactor;
  }
}