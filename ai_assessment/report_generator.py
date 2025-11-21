"""
Report Generation System for AI Business Assessment Tool

This module generates comprehensive, professional PDF reports from analysis results.
The reports are designed to deliver exceptional value worth $250 to business owners.
"""

import os
import json
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyBboxPatch
import seaborn as sns
import pandas as pd
from datetime import datetime
from typing import Dict, List, Any
import numpy as np
from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
from reportlab.graphics.shapes import Drawing, Rect
from reportlab.graphics.charts.barcharts import VerticalBarChart
from reportlab.graphics.charts.piecharts import Pie
from reportlab.graphics import renderPDF

class BusinessReportGenerator:
    """
    Generates comprehensive business assessment reports
    """
    
    def __init__(self, output_dir: str = "/tmp/reports"):
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)
        
        # Set up matplotlib style
        plt.style.use('seaborn-v0_8')
        sns.set_palette("husl")
        
        # Report styling
        self.primary_color = '#2E86AB'
        self.secondary_color = '#A23B72'
        self.accent_color = '#F18F01'
        self.success_color = '#C73E1D'
        
    def generate_comprehensive_report(self, analysis_results: Dict, assessment_data: Dict) -> str:
        """
        Generate a comprehensive PDF report from analysis results
        """
        # Create filename
        business_name = assessment_data.get('business_name', 'Business').replace(' ', '_')
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        filename = f"AI_Assessment_Report_{business_name}_{timestamp}.pdf"
        filepath = os.path.join(self.output_dir, filename)
        
        # Create the PDF document
        doc = SimpleDocTemplate(
            filepath,
            pagesize=A4,
            rightMargin=72,
            leftMargin=72,
            topMargin=72,
            bottomMargin=18
        )
        
        # Build the story (content)
        story = []
        styles = getSampleStyleSheet()
        
        # Custom styles
        title_style = ParagraphStyle(
            'CustomTitle',
            parent=styles['Heading1'],
            fontSize=24,
            spaceAfter=30,
            alignment=TA_CENTER,
            textColor=colors.HexColor(self.primary_color)
        )
        
        heading_style = ParagraphStyle(
            'CustomHeading',
            parent=styles['Heading2'],
            fontSize=16,
            spaceAfter=12,
            spaceBefore=20,
            textColor=colors.HexColor(self.primary_color)
        )
        
        subheading_style = ParagraphStyle(
            'CustomSubheading',
            parent=styles['Heading3'],
            fontSize=14,
            spaceAfter=8,
            spaceBefore=12,
            textColor=colors.HexColor(self.secondary_color)
        )
        
        body_style = ParagraphStyle(
            'CustomBody',
            parent=styles['Normal'],
            fontSize=11,
            spaceAfter=8,
            alignment=TA_JUSTIFY
        )
        
        # Title Page
        story.extend(self._create_title_page(analysis_results, assessment_data, title_style, body_style))
        story.append(PageBreak())
        
        # Table of Contents
        story.extend(self._create_table_of_contents(heading_style, body_style))
        story.append(PageBreak())
        
        # Executive Summary
        story.extend(self._create_executive_summary(analysis_results, heading_style, body_style))
        story.append(PageBreak())
        
        # Business Overview
        story.extend(self._create_business_overview(assessment_data, analysis_results, heading_style, subheading_style, body_style))
        story.append(PageBreak())
        
        # Pain Points Analysis
        story.extend(self._create_pain_points_section(analysis_results, heading_style, subheading_style, body_style))
        story.append(PageBreak())
        
        # AI Opportunities
        story.extend(self._create_ai_opportunities_section(analysis_results, heading_style, subheading_style, body_style))
        story.append(PageBreak())
        
        # ROI Analysis
        story.extend(self._create_roi_analysis_section(analysis_results, heading_style, subheading_style, body_style))
        story.append(PageBreak())
        
        # Implementation Roadmap
        story.extend(self._create_implementation_roadmap(analysis_results, heading_style, subheading_style, body_style))
        story.append(PageBreak())
        
        # Recommendations
        story.extend(self._create_recommendations_section(analysis_results, heading_style, subheading_style, body_style))
        story.append(PageBreak())
        
        # Appendices
        story.extend(self._create_appendices(analysis_results, heading_style, subheading_style, body_style))
        
        # Build the PDF
        doc.build(story)
        
        return filepath
    
    def _create_title_page(self, analysis_results: Dict, assessment_data: Dict, title_style, body_style) -> List:
        """Create the title page"""
        story = []
        
        # Main title
        story.append(Paragraph("AI BUSINESS ASSESSMENT REPORT", title_style))
        story.append(Spacer(1, 20))
        
        # Business name
        business_name = assessment_data.get('business_name', 'Your Business')
        story.append(Paragraph(f"<b>{business_name}</b>", ParagraphStyle(
            'BusinessName',
            parent=body_style,
            fontSize=18,
            alignment=TA_CENTER,
            spaceAfter=30
        )))
        
        # Assessment details
        assessment_date = datetime.now().strftime('%B %d, %Y')
        business_type = assessment_data.get('business_type', 'Business').title()
        
        details = f"""
        <b>Assessment Date:</b> {assessment_date}<br/>
        <b>Business Type:</b> {business_type}<br/>
        <b>Business Size:</b> {assessment_data.get('business_size', 'Not specified')}<br/>
        <b>Industry:</b> {assessment_data.get('industry_sector', 'Not specified')}<br/>
        """
        
        story.append(Paragraph(details, body_style))
        story.append(Spacer(1, 40))
        
        # Key metrics summary
        pain_points_count = len(analysis_results.get('pain_points', []))
        opportunities_count = len(analysis_results.get('ai_opportunities', []))
        roi_percentage = analysis_results.get('roi_estimates', {}).get('annual_roi_percentage', 0)
        
        summary_box = f"""
        <b>ASSESSMENT HIGHLIGHTS</b><br/><br/>
        • {pain_points_count} Key Pain Points Identified<br/>
        • {opportunities_count} AI Automation Opportunities<br/>
        • {roi_percentage:.1f}% Projected Annual ROI<br/>
        • Comprehensive Implementation Roadmap Included
        """
        
        story.append(Paragraph(summary_box, ParagraphStyle(
            'SummaryBox',
            parent=body_style,
            fontSize=12,
            alignment=TA_LEFT,
            borderWidth=2,
            borderColor=colors.HexColor(self.primary_color),
            borderPadding=20,
            backColor=colors.HexColor('#F8F9FA')
        )))
        
        story.append(Spacer(1, 60))
        
        # Footer
        story.append(Paragraph(
            "This report contains confidential and proprietary information. All recommendations are based on comprehensive AI analysis of your business operations.",
            ParagraphStyle(
                'Footer',
                parent=body_style,
                fontSize=10,
                alignment=TA_CENTER,
                textColor=colors.grey
            )
        ))
        
        return story
    
    def _create_table_of_contents(self, heading_style, body_style) -> List:
        """Create table of contents"""
        story = []
        
        story.append(Paragraph("TABLE OF CONTENTS", heading_style))
        story.append(Spacer(1, 20))
        
        toc_items = [
            ("Executive Summary", "3"),
            ("Business Overview", "4"),
            ("Pain Points Analysis", "5"),
            ("AI Automation Opportunities", "6"),
            ("ROI Analysis & Financial Projections", "7"),
            ("Implementation Roadmap", "8"),
            ("Strategic Recommendations", "9"),
            ("Appendices", "10")
        ]
        
        for item, page in toc_items:
            story.append(Paragraph(f"{item} {'.' * (50 - len(item))} {page}", body_style))
        
        return story
    
    def _create_executive_summary(self, analysis_results: Dict, heading_style, body_style) -> List:
        """Create executive summary section"""
        story = []
        
        story.append(Paragraph("EXECUTIVE SUMMARY", heading_style))
        story.append(Spacer(1, 12))
        
        # Get the executive summary from analysis results
        executive_summary = analysis_results.get('executive_summary', '')
        
        # Split into paragraphs and format
        paragraphs = executive_summary.split('\n\n')
        for paragraph in paragraphs:
            if paragraph.strip():
                story.append(Paragraph(paragraph.strip(), body_style))
                story.append(Spacer(1, 8))
        
        # Key findings box
        pain_points = analysis_results.get('pain_points', [])
        opportunities = analysis_results.get('ai_opportunities', [])
        roi_data = analysis_results.get('roi_estimates', {})
        
        key_findings = f"""
        <b>KEY FINDINGS AT A GLANCE:</b><br/><br/>
        
        <b>Critical Areas for Improvement:</b><br/>
        """
        
        for i, pain_point in enumerate(pain_points[:3], 1):
            key_findings += f"• {pain_point.get('title', 'Pain Point')} ({pain_point.get('severity', 'Medium')} Priority)<br/>"
        
        key_findings += f"""<br/>
        <b>Top AI Opportunities:</b><br/>
        """
        
        for i, opportunity in enumerate(opportunities[:3], 1):
            key_findings += f"• {opportunity.get('title', 'Opportunity')} (ROI: {opportunity.get('expected_roi', 0)*100:.0f}%)<br/>"
        
        key_findings += f"""<br/>
        <b>Financial Impact:</b><br/>
        • Total Potential Annual Savings: ${roi_data.get('total_potential_savings', 0):,.0f}<br/>
        • Implementation Investment: ${roi_data.get('total_implementation_cost', 0):,.0f}<br/>
        • Payback Period: {roi_data.get('payback_period_months', 0):.1f} months<br/>
        • Annual ROI: {roi_data.get('annual_roi_percentage', 0):.1f}%
        """
        
        story.append(Paragraph(key_findings, ParagraphStyle(
            'KeyFindings',
            parent=body_style,
            fontSize=11,
            borderWidth=1,
            borderColor=colors.HexColor(self.accent_color),
            borderPadding=15,
            backColor=colors.HexColor('#FFF9E6')
        )))
        
        return story
    
    def _create_business_overview(self, assessment_data: Dict, analysis_results: Dict, heading_style, subheading_style, body_style) -> List:
        """Create business overview section"""
        story = []
        
        story.append(Paragraph("BUSINESS OVERVIEW", heading_style))
        story.append(Spacer(1, 12))
        
        # Business profile
        story.append(Paragraph("Business Profile", subheading_style))
        
        profile_text = f"""
        <b>Company:</b> {assessment_data.get('business_name', 'Not specified')}<br/>
        <b>Industry:</b> {assessment_data.get('industry_sector', 'Not specified')}<br/>
        <b>Business Type:</b> {assessment_data.get('business_type', 'Not specified').title()}<br/>
        <b>Size:</b> {assessment_data.get('business_size', 'Not specified')} employees<br/>
        <b>Years in Operation:</b> {assessment_data.get('years_in_business', 'Not specified')}<br/>
        <b>Annual Revenue Range:</b> {assessment_data.get('annual_revenue_range', 'Not specified')}<br/>
        """
        
        story.append(Paragraph(profile_text, body_style))
        story.append(Spacer(1, 15))
        
        # Current state analysis
        story.append(Paragraph("Current State Analysis", subheading_style))
        
        positive_patterns = analysis_results.get('positive_patterns', [])
        if positive_patterns:
            story.append(Paragraph("<b>Identified Strengths:</b>", body_style))
            for pattern in positive_patterns:
                story.append(Paragraph(f"• {pattern.get('title', 'Strength')}: {pattern.get('description', '')}", body_style))
            story.append(Spacer(1, 10))
        
        # Technology readiness assessment
        story.append(Paragraph("Technology Readiness Assessment", subheading_style))
        
        tech_readiness = self._assess_technology_readiness(analysis_results)
        story.append(Paragraph(tech_readiness, body_style))
        
        return story
    
    def _create_pain_points_section(self, analysis_results: Dict, heading_style, subheading_style, body_style) -> List:
        """Create pain points analysis section"""
        story = []
        
        story.append(Paragraph("PAIN POINTS ANALYSIS", heading_style))
        story.append(Spacer(1, 12))
        
        pain_points = analysis_results.get('pain_points', [])
        
        if not pain_points:
            story.append(Paragraph("No significant pain points were identified in your current operations.", body_style))
            return story
        
        # Overview
        story.append(Paragraph(
            f"Our analysis identified {len(pain_points)} key areas where your business is experiencing operational challenges. "
            "These pain points represent opportunities for significant improvement through AI automation.",
            body_style
        ))
        story.append(Spacer(1, 15))
        
        # Detailed pain point analysis
        for i, pain_point in enumerate(pain_points, 1):
            story.append(Paragraph(f"{i}. {pain_point.get('title', 'Pain Point')}", subheading_style))
            
            # Severity indicator
            severity = pain_point.get('severity', 'Medium')
            severity_color = '#DC3545' if severity == 'High' else '#FFC107' if severity == 'Medium' else '#28A745'
            
            story.append(Paragraph(
                f"<b>Severity Level:</b> <font color='{severity_color}'>{severity}</font>",
                body_style
            ))
            
            # Description
            story.append(Paragraph(
                f"<b>Description:</b> {pain_point.get('description', 'No description available')}",
                body_style
            ))
            
            # Business impact
            story.append(Paragraph(
                f"<b>Business Impact:</b> {pain_point.get('business_impact', 'Impact assessment needed')}",
                body_style
            ))
            
            # Evidence
            evidence = pain_point.get('evidence', [])
            if evidence:
                story.append(Paragraph("<b>Supporting Evidence:</b>", body_style))
                for item in evidence[:2]:  # Show top 2 pieces of evidence
                    excerpt = item.get('response_excerpt', '')[:150] + '...' if len(item.get('response_excerpt', '')) > 150 else item.get('response_excerpt', '')
                    story.append(Paragraph(f"• \"{excerpt}\"", body_style))
            
            story.append(Spacer(1, 15))
        
        return story
    
    def _create_ai_opportunities_section(self, analysis_results: Dict, heading_style, subheading_style, body_style) -> List:
        """Create AI opportunities section"""
        story = []
        
        story.append(Paragraph("AI AUTOMATION OPPORTUNITIES", heading_style))
        story.append(Spacer(1, 12))
        
        opportunities = analysis_results.get('ai_opportunities', [])
        
        if not opportunities:
            story.append(Paragraph("No specific AI opportunities were identified based on the current assessment.", body_style))
            return story
        
        # Overview
        story.append(Paragraph(
            f"Based on your pain points analysis, we have identified {len(opportunities)} specific AI automation opportunities "
            "that can significantly improve your business operations and profitability.",
            body_style
        ))
        story.append(Spacer(1, 15))
        
        # Detailed opportunities
        for i, opportunity in enumerate(opportunities, 1):
            story.append(Paragraph(f"{i}. {opportunity.get('title', 'AI Opportunity')}", subheading_style))
            
            # Key metrics
            roi = opportunity.get('expected_roi', 0) * 100
            complexity = opportunity.get('implementation_complexity', 'Medium')
            time_to_value = opportunity.get('time_to_value', 'Unknown')
            
            metrics_text = f"""
            <b>Expected ROI:</b> {roi:.0f}%<br/>
            <b>Implementation Complexity:</b> {complexity}<br/>
            <b>Time to Value:</b> {time_to_value}
            """
            
            story.append(Paragraph(metrics_text, body_style))
            story.append(Spacer(1, 8))
            
            # Description
            story.append(Paragraph(
                f"<b>Description:</b> {opportunity.get('description', 'No description available')}",
                body_style
            ))
            
            # Solutions
            solutions = opportunity.get('solutions', [])
            if solutions:
                story.append(Paragraph("<b>Recommended Solutions:</b>", body_style))
                for solution in solutions:
                    story.append(Paragraph(f"• {solution}", body_style))
            
            # Tools
            tools = opportunity.get('recommended_tools', [])
            if tools:
                story.append(Paragraph(f"<b>Recommended Tools:</b> {', '.join(tools[:4])}", body_style))
            
            # Success metrics
            metrics = opportunity.get('success_metrics', [])
            if metrics:
                story.append(Paragraph("<b>Success Metrics:</b>", body_style))
                for metric in metrics[:3]:
                    story.append(Paragraph(f"• {metric}", body_style))
            
            story.append(Spacer(1, 15))
        
        return story
    
    def _create_roi_analysis_section(self, analysis_results: Dict, heading_style, subheading_style, body_style) -> List:
        """Create ROI analysis section"""
        story = []
        
        story.append(Paragraph("ROI ANALYSIS & FINANCIAL PROJECTIONS", heading_style))
        story.append(Spacer(1, 12))
        
        roi_data = analysis_results.get('roi_estimates', {})
        
        # Overall financial summary
        story.append(Paragraph("Financial Impact Summary", subheading_style))
        
        total_savings = roi_data.get('total_potential_savings', 0)
        total_cost = roi_data.get('total_implementation_cost', 0)
        payback_months = roi_data.get('payback_period_months', 0)
        annual_roi = roi_data.get('annual_roi_percentage', 0)
        
        financial_summary = f"""
        <b>Total Potential Annual Savings:</b> ${total_savings:,.0f}<br/>
        <b>Total Implementation Investment:</b> ${total_cost:,.0f}<br/>
        <b>Payback Period:</b> {payback_months:.1f} months<br/>
        <b>Annual Return on Investment:</b> {annual_roi:.1f}%<br/>
        <b>3-Year Net Benefit:</b> ${(total_savings * 3 - total_cost):,.0f}
        """
        
        story.append(Paragraph(financial_summary, ParagraphStyle(
            'FinancialSummary',
            parent=body_style,
            fontSize=12,
            borderWidth=1,
            borderColor=colors.HexColor(self.success_color),
            borderPadding=15,
            backColor=colors.HexColor('#F8F9FA')
        )))
        story.append(Spacer(1, 15))
        
        # Individual opportunity breakdown
        story.append(Paragraph("Opportunity-by-Opportunity Breakdown", subheading_style))
        
        opportunity_breakdown = roi_data.get('opportunity_breakdown', [])
        
        if opportunity_breakdown:
            # Create table data
            table_data = [['Opportunity', 'Annual Savings', 'Implementation Cost', 'Payback (Months)', 'ROI %']]
            
            for opp in opportunity_breakdown:
                table_data.append([
                    opp.get('opportunity_title', 'Unknown')[:30] + '...' if len(opp.get('opportunity_title', '')) > 30 else opp.get('opportunity_title', 'Unknown'),
                    f"${opp.get('potential_annual_savings', 0):,.0f}",
                    f"${opp.get('implementation_cost', 0):,.0f}",
                    f"{opp.get('payback_period_months', 0):.1f}",
                    f"{opp.get('annual_roi_percentage', 0):.1f}%"
                ])
            
            # Create table
            table = Table(table_data, colWidths=[2.5*inch, 1.2*inch, 1.2*inch, 1*inch, 0.8*inch])
            table.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor(self.primary_color)),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('FONTSIZE', (0, 0), (-1, 0), 10),
                ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
                ('GRID', (0, 0), (-1, -1), 1, colors.black)
            ]))
            
            story.append(table)
        
        return story
    
    def _create_implementation_roadmap(self, analysis_results: Dict, heading_style, subheading_style, body_style) -> List:
        """Create implementation roadmap section"""
        story = []
        
        story.append(Paragraph("IMPLEMENTATION ROADMAP", heading_style))
        story.append(Spacer(1, 12))
        
        roadmap = analysis_results.get('implementation_roadmap', [])
        
        if not roadmap:
            story.append(Paragraph("No implementation roadmap was generated.", body_style))
            return story
        
        # Overview
        story.append(Paragraph(
            "This roadmap provides a phased approach to implementing AI solutions in your business. "
            "Each phase builds upon the previous one, ensuring manageable change and continuous value delivery.",
            body_style
        ))
        story.append(Spacer(1, 15))
        
        # Detailed phases
        for phase in roadmap:
            phase_num = phase.get('phase', 1)
            phase_title = phase.get('title', 'Implementation Phase')
            duration = phase.get('duration', 'Unknown')
            
            story.append(Paragraph(f"Phase {phase_num}: {phase_title}", subheading_style))
            story.append(Paragraph(f"<b>Duration:</b> {duration}", body_style))
            
            # Objectives
            objectives = phase.get('objectives', [])
            if objectives:
                story.append(Paragraph("<b>Key Objectives:</b>", body_style))
                for objective in objectives:
                    story.append(Paragraph(f"• {objective}", body_style))
            
            # Opportunities in this phase
            phase_opportunities = phase.get('opportunities', [])
            if phase_opportunities:
                story.append(Paragraph("<b>AI Solutions to Implement:</b>", body_style))
                for opp in phase_opportunities:
                    story.append(Paragraph(f"• {opp.get('title', 'Solution')}", body_style))
            
            # Milestones
            milestones = phase.get('key_milestones', [])
            if milestones:
                story.append(Paragraph("<b>Key Milestones:</b>", body_style))
                for milestone in milestones:
                    story.append(Paragraph(f"• {milestone}", body_style))
            
            story.append(Spacer(1, 15))
        
        return story
    
    def _create_recommendations_section(self, analysis_results: Dict, heading_style, subheading_style, body_style) -> List:
        """Create strategic recommendations section"""
        story = []
        
        story.append(Paragraph("STRATEGIC RECOMMENDATIONS", heading_style))
        story.append(Spacer(1, 12))
        
        recommendations = analysis_results.get('recommendations', [])
        
        if not recommendations:
            story.append(Paragraph("No specific recommendations were generated.", body_style))
            return story
        
        # Overview
        story.append(Paragraph(
            "Based on our comprehensive analysis, here are our strategic recommendations for maximizing "
            "the value of AI implementation in your business:",
            body_style
        ))
        story.append(Spacer(1, 15))
        
        # Detailed recommendations
        for i, rec in enumerate(recommendations, 1):
            category = rec.get('category', 'Recommendation')
            priority = rec.get('priority', 'Medium')
            title = rec.get('title', 'Strategic Recommendation')
            description = rec.get('description', '')
            timeline = rec.get('timeline', 'Unknown')
            
            story.append(Paragraph(f"{i}. {title}", subheading_style))
            
            # Priority and timeline
            priority_color = '#DC3545' if priority == 'High' else '#FFC107' if priority == 'Medium' else '#28A745'
            story.append(Paragraph(
                f"<b>Priority:</b> <font color='{priority_color}'>{priority}</font> | <b>Timeline:</b> {timeline}",
                body_style
            ))
            
            # Description
            story.append(Paragraph(f"<b>Description:</b> {description}", body_style))
            
            # Specific opportunities or actions
            opportunities = rec.get('opportunities', [])
            actions = rec.get('actions', [])
            
            if opportunities:
                story.append(Paragraph("<b>Specific Opportunities:</b>", body_style))
                for opp in opportunities:
                    story.append(Paragraph(f"• {opp.get('title', 'Opportunity')}", body_style))
            
            if actions:
                story.append(Paragraph("<b>Recommended Actions:</b>", body_style))
                for action in actions:
                    story.append(Paragraph(f"• {action}", body_style))
            
            story.append(Spacer(1, 15))
        
        return story
    
    def _create_appendices(self, analysis_results: Dict, heading_style, subheading_style, body_style) -> List:
        """Create appendices section"""
        story = []
        
        story.append(Paragraph("APPENDICES", heading_style))
        story.append(Spacer(1, 12))
        
        # Appendix A: Methodology
        story.append(Paragraph("Appendix A: Analysis Methodology", subheading_style))
        methodology_text = """
        This assessment was conducted using advanced AI algorithms that analyze business operations across multiple dimensions:
        
        • <b>Pain Point Identification:</b> Natural language processing to identify operational challenges from assessment responses
        • <b>Pattern Recognition:</b> Machine learning algorithms to detect efficiency patterns and bottlenecks
        • <b>Opportunity Matching:</b> AI-powered matching of business challenges to appropriate automation solutions
        • <b>ROI Calculation:</b> Financial modeling based on industry benchmarks and business-specific factors
        • <b>Risk Assessment:</b> Evaluation of implementation complexity and success probability
        
        All recommendations are based on proven AI solutions and industry best practices.
        """
        story.append(Paragraph(methodology_text, body_style))
        story.append(Spacer(1, 15))
        
        # Appendix B: Implementation Support
        story.append(Paragraph("Appendix B: Implementation Support Resources", subheading_style))
        support_text = """
        To ensure successful implementation of these recommendations, consider the following resources:
        
        • <b>Technology Partners:</b> Vetted AI solution providers and implementation specialists
        • <b>Training Programs:</b> Staff training resources for new technologies and processes
        • <b>Change Management:</b> Best practices for managing organizational change
        • <b>Performance Monitoring:</b> KPIs and metrics to track implementation success
        • <b>Ongoing Support:</b> Maintenance and optimization strategies for long-term success
        """
        story.append(Paragraph(support_text, body_style))
        story.append(Spacer(1, 15))
        
        # Appendix C: Next Steps
        story.append(Paragraph("Appendix C: Recommended Next Steps", subheading_style))
        next_steps_text = """
        To begin implementing these recommendations:
        
        1. <b>Prioritize Quick Wins:</b> Start with low-complexity, high-impact solutions
        2. <b>Secure Leadership Buy-in:</b> Present this report to key stakeholders
        3. <b>Develop Implementation Team:</b> Assign project managers and technical resources
        4. <b>Create Detailed Project Plans:</b> Break down each phase into specific tasks and timelines
        5. <b>Establish Success Metrics:</b> Define KPIs to measure implementation success
        6. <b>Begin Pilot Programs:</b> Start with small-scale implementations to prove value
        7. <b>Scale Successful Solutions:</b> Expand proven solutions across the organization
        """
        story.append(Paragraph(next_steps_text, body_style))
        
        return story
    
    def _assess_technology_readiness(self, analysis_results: Dict) -> str:
        """Assess technology readiness based on analysis results"""
        # This is a simplified assessment - in a real implementation, 
        # this would be more sophisticated
        
        pain_points = analysis_results.get('pain_points', [])
        tech_pain_points = [p for p in pain_points if p.get('category') == 'technology']
        
        if tech_pain_points:
            if any(p.get('severity') == 'High' for p in tech_pain_points):
                return ("Your business shows significant technology gaps that need to be addressed before "
                       "implementing advanced AI solutions. We recommend starting with foundational "
                       "technology improvements and basic automation tools.")
            else:
                return ("Your business has moderate technology capabilities with some areas for improvement. "
                       "You're well-positioned to implement AI solutions with proper planning and support.")
        else:
            return ("Your business demonstrates good technology readiness for AI implementation. "
                   "You can proceed with confidence to implement the recommended solutions.")
    
    def generate_visualizations(self, analysis_results: Dict) -> Dict[str, str]:
        """
        Generate visualization charts for the report
        """
        viz_paths = {}
        
        # Pain Points Severity Chart
        pain_points = analysis_results.get('pain_points', [])
        if pain_points:
            viz_paths['pain_points_chart'] = self._create_pain_points_chart(pain_points)
        
        # ROI Comparison Chart
        roi_data = analysis_results.get('roi_estimates', {})
        if roi_data.get('opportunity_breakdown'):
            viz_paths['roi_chart'] = self._create_roi_chart(roi_data['opportunity_breakdown'])
        
        # Implementation Timeline
        roadmap = analysis_results.get('implementation_roadmap', [])
        if roadmap:
            viz_paths['timeline_chart'] = self._create_timeline_chart(roadmap)
        
        return viz_paths
    
    def _create_pain_points_chart(self, pain_points: List[Dict]) -> str:
        """Create pain points severity visualization"""
        # Count pain points by severity
        severity_counts = {'High': 0, 'Medium': 0, 'Low': 0}
        for pp in pain_points:
            severity = pp.get('severity', 'Medium')
            severity_counts[severity] += 1
        
        # Create the chart
        fig, ax = plt.subplots(figsize=(10, 6))
        
        severities = list(severity_counts.keys())
        counts = list(severity_counts.values())
        colors_map = {'High': '#DC3545', 'Medium': '#FFC107', 'Low': '#28A745'}
        chart_colors = [colors_map[s] for s in severities]
        
        bars = ax.bar(severities, counts, color=chart_colors)
        
        # Customize the chart
        ax.set_title('Pain Points by Severity Level', fontsize=16, fontweight='bold', pad=20)
        ax.set_ylabel('Number of Pain Points', fontsize=12)
        ax.set_xlabel('Severity Level', fontsize=12)
        
        # Add value labels on bars
        for bar in bars:
            height = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., height,
                   f'{int(height)}', ha='center', va='bottom', fontsize=12, fontweight='bold')
        
        # Style the chart
        ax.grid(axis='y', alpha=0.3)
        ax.set_axisbelow(True)
        plt.tight_layout()
        
        # Save the chart
        chart_path = os.path.join(self.output_dir, 'pain_points_chart.png')
        plt.savefig(chart_path, dpi=300, bbox_inches='tight')
        plt.close()
        
        return chart_path
    
    def _create_roi_chart(self, roi_breakdown: List[Dict]) -> str:
        """Create ROI comparison chart"""
        # Prepare data
        opportunities = [opp.get('opportunity_title', 'Unknown')[:20] + '...' 
                        if len(opp.get('opportunity_title', '')) > 20 
                        else opp.get('opportunity_title', 'Unknown') 
                        for opp in roi_breakdown]
        roi_percentages = [opp.get('annual_roi_percentage', 0) for opp in roi_breakdown]
        
        # Create the chart
        fig, ax = plt.subplots(figsize=(12, 8))
        
        bars = ax.barh(opportunities, roi_percentages, color=self.primary_color)
        
        # Customize the chart
        ax.set_title('AI Opportunities - Annual ROI Comparison', fontsize=16, fontweight='bold', pad=20)
        ax.set_xlabel('Annual ROI (%)', fontsize=12)
        ax.set_ylabel('AI Opportunities', fontsize=12)
        
        # Add value labels on bars
        for i, bar in enumerate(bars):
            width = bar.get_width()
            ax.text(width + 5, bar.get_y() + bar.get_height()/2.,
                   f'{roi_percentages[i]:.1f}%', ha='left', va='center', fontsize=10, fontweight='bold')
        
        # Style the chart
        ax.grid(axis='x', alpha=0.3)
        ax.set_axisbelow(True)
        plt.tight_layout()
        
        # Save the chart
        chart_path = os.path.join(self.output_dir, 'roi_chart.png')
        plt.savefig(chart_path, dpi=300, bbox_inches='tight')
        plt.close()
        
        return chart_path
    
    def _create_timeline_chart(self, roadmap: List[Dict]) -> str:
        """Create implementation timeline chart"""
        # This is a simplified timeline visualization
        fig, ax = plt.subplots(figsize=(12, 6))
        
        phases = [f"Phase {r.get('phase', i+1)}: {r.get('title', 'Phase')}" for i, r in enumerate(roadmap)]
        durations = [r.get('duration', 'Unknown') for r in roadmap]
        
        # Create a simple timeline
        y_pos = range(len(phases))
        
        # Create horizontal bars
        bars = ax.barh(y_pos, [1] * len(phases), color=self.accent_color, alpha=0.7)
        
        # Customize
        ax.set_yticks(y_pos)
        ax.set_yticklabels(phases)
        ax.set_xlabel('Implementation Timeline')
        ax.set_title('AI Implementation Roadmap', fontsize=16, fontweight='bold', pad=20)
        
        # Add duration labels
        for i, (bar, duration) in enumerate(zip(bars, durations)):
            ax.text(0.5, bar.get_y() + bar.get_height()/2.,
                   duration, ha='center', va='center', fontsize=10, fontweight='bold')
        
        plt.tight_layout()
        
        # Save the chart
        chart_path = os.path.join(self.output_dir, 'timeline_chart.png')
        plt.savefig(chart_path, dpi=300, bbox_inches='tight')
        plt.close()
        
        return chart_path

