from flask import Blueprint, request, jsonify
from src.models.assessment import Assessment, Response, AnalysisResult, db
from src.analysis_engine import BusinessAnalysisEngine
import json
from datetime import datetime

analysis_bp = Blueprint('analysis', __name__)

@analysis_bp.route('/analyze/<int:assessment_id>', methods=['POST'])
def analyze_assessment(assessment_id):
    """
    Trigger AI analysis for a completed assessment
    """
    try:
        # Get the assessment
        assessment = Assessment.query.get_or_404(assessment_id)
        
        # Check if assessment is complete
        if assessment.status != 'completed':
            return jsonify({'error': 'Assessment must be completed before analysis'}), 400
        
        # Get all responses for this assessment
        responses = Response.query.filter_by(assessment_id=assessment_id).all()
        
        if not responses:
            return jsonify({'error': 'No responses found for this assessment'}), 400
        
        # Convert responses to the format expected by the analysis engine
        response_data = []
        for response in responses:
            response_data.append({
                'question_key': response.question_key,
                'response_value': response.response_value
            })
        
        # Prepare assessment data
        assessment_data = {
            'id': assessment.id,
            'business_type': assessment.business_type,
            'business_name': assessment.business_name,
            'business_size': assessment.business_size,
            'annual_revenue_range': assessment.annual_revenue_range,
            'years_in_business': assessment.years_in_business,
            'industry_sector': assessment.industry_sector
        }
        
        # Initialize the analysis engine
        engine = BusinessAnalysisEngine()
        
        # Perform the analysis
        analysis_results = engine.analyze_assessment(assessment_data, response_data)
        
        # Save the analysis results
        existing_result = AnalysisResult.query.filter_by(assessment_id=assessment_id).first()
        
        if existing_result:
            # Update existing result
            existing_result.analysis_data = json.dumps(analysis_results)
            existing_result.updated_at = datetime.utcnow()
        else:
            # Create new result
            analysis_result = AnalysisResult(
                assessment_id=assessment_id,
                analysis_data=json.dumps(analysis_results)
            )
            db.session.add(analysis_result)
        
        # Update assessment status
        assessment.status = 'analyzed'
        
        db.session.commit()
        
        return jsonify({
            'message': 'Analysis completed successfully',
            'analysis_id': existing_result.id if existing_result else analysis_result.id,
            'analysis_results': analysis_results
        })
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': f'Analysis failed: {str(e)}'}), 500

@analysis_bp.route('/results/<int:assessment_id>', methods=['GET'])
def get_analysis_results(assessment_id):
    """
    Get analysis results for an assessment
    """
    try:
        # Get the analysis result
        analysis_result = AnalysisResult.query.filter_by(assessment_id=assessment_id).first()
        
        if not analysis_result:
            return jsonify({'error': 'No analysis results found for this assessment'}), 404
        
        # Parse the analysis data
        analysis_data = json.loads(analysis_result.analysis_data)
        
        return jsonify({
            'assessment_id': assessment_id,
            'analysis_id': analysis_result.id,
            'created_at': analysis_result.created_at.isoformat(),
            'updated_at': analysis_result.updated_at.isoformat(),
            'analysis_results': analysis_data
        })
        
    except Exception as e:
        return jsonify({'error': f'Failed to retrieve analysis results: {str(e)}'}), 500

@analysis_bp.route('/summary/<int:assessment_id>', methods=['GET'])
def get_analysis_summary(assessment_id):
    """
    Get a summary of analysis results for quick overview
    """
    try:
        # Get the analysis result
        analysis_result = AnalysisResult.query.filter_by(assessment_id=assessment_id).first()
        
        if not analysis_result:
            return jsonify({'error': 'No analysis results found for this assessment'}), 404
        
        # Parse the analysis data
        analysis_data = json.loads(analysis_result.analysis_data)
        
        # Create summary
        summary = {
            'assessment_id': assessment_id,
            'business_type': analysis_data.get('business_type'),
            'analysis_timestamp': analysis_data.get('analysis_timestamp'),
            'pain_points_count': len(analysis_data.get('pain_points', [])),
            'ai_opportunities_count': len(analysis_data.get('ai_opportunities', [])),
            'executive_summary': analysis_data.get('executive_summary'),
            'roi_estimates': analysis_data.get('roi_estimates', {}),
            'top_pain_points': analysis_data.get('pain_points', [])[:3],  # Top 3
            'top_opportunities': analysis_data.get('ai_opportunities', [])[:3]  # Top 3
        }
        
        return jsonify(summary)
        
    except Exception as e:
        return jsonify({'error': f'Failed to retrieve analysis summary: {str(e)}'}), 500

@analysis_bp.route('/test-analysis', methods=['POST'])
def test_analysis():
    """
    Test endpoint for the analysis engine with sample data
    """
    try:
        # Sample assessment data
        sample_assessment = {
            'id': 999,
            'business_type': 'retail',
            'business_name': 'Test Retail Store',
            'business_size': '6-20',
            'annual_revenue_range': '$500K - $1M',
            'years_in_business': '5',
            'industry_sector': 'Electronics'
        }
        
        # Sample responses
        sample_responses = [
            {
                'question_key': 'business_description',
                'response_value': 'We run a small electronics retail store with both online and physical locations. We struggle with inventory management and often have stockouts or overstock situations. Customer service is mostly manual and we spend too much time on repetitive tasks like order processing and invoice generation.'
            },
            {
                'question_key': 'daily_challenges',
                'response_value': 'Our biggest challenges are managing inventory levels, processing orders manually, and keeping track of customer inquiries. We waste a lot of time on spreadsheets and manual data entry.'
            },
            {
                'question_key': 'business_goals',
                'response_value': 'We want to grow our business by 50% in the next year, improve customer satisfaction, and reduce operational costs. We need better systems to handle increased volume.'
            },
            {
                'question_key': 'tech_comfort_level',
                'response_value': '3'
            }
        ]
        
        # Initialize the analysis engine
        engine = BusinessAnalysisEngine()
        
        # Perform the analysis
        analysis_results = engine.analyze_assessment(sample_assessment, sample_responses)
        
        return jsonify({
            'message': 'Test analysis completed successfully',
            'analysis_results': analysis_results
        })
        
    except Exception as e:
        return jsonify({'error': f'Test analysis failed: {str(e)}'}), 500



@analysis_bp.route('/generate-report/<int:assessment_id>', methods=['POST'])
def generate_report(assessment_id):
    """
    Generate a comprehensive PDF report for an assessment
    """
    try:
        # Get the assessment
        assessment = Assessment.query.get_or_404(assessment_id)
        
        # Get the analysis result
        analysis_result = AnalysisResult.query.filter_by(assessment_id=assessment_id).first()
        
        if not analysis_result:
            return jsonify({'error': 'No analysis results found. Please run analysis first.'}), 404
        
        # Parse the analysis data
        analysis_data = json.loads(analysis_result.analysis_data)
        
        # Prepare assessment data
        assessment_data = {
            'business_name': assessment.business_name,
            'business_type': assessment.business_type,
            'business_size': assessment.business_size,
            'industry_sector': assessment.industry,
            'years_in_business': assessment.years_in_business,
            'annual_revenue_range': assessment.annual_revenue_range,
            'contact_name': assessment.contact_name,
            'contact_email': assessment.contact_email
        }
        
        # Import the report generator
        from src.report_generator import BusinessReportGenerator
        
        # Generate the report
        generator = BusinessReportGenerator()
        report_path = generator.generate_comprehensive_report(analysis_data, assessment_data)
        
        # Update assessment status
        assessment.status = 'report_generated'
        db.session.commit()
        
        return jsonify({
            'message': 'Report generated successfully',
            'report_path': report_path,
            'download_url': f'/api/download-report/{assessment_id}'
        })
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': f'Report generation failed: {str(e)}'}), 500

@analysis_bp.route('/download-report/<int:assessment_id>', methods=['GET'])
def download_report(assessment_id):
    """
    Download the generated report
    """
    try:
        from flask import send_file
        
        # Get the assessment
        assessment = Assessment.query.get_or_404(assessment_id)
        
        # Find the report file
        business_name = assessment.business_name.replace(' ', '_')
        report_dir = "/tmp/reports"
        
        # Look for the most recent report file for this business
        import glob
        pattern = f"{report_dir}/AI_Assessment_Report_{business_name}_*.pdf"
        report_files = glob.glob(pattern)
        
        if not report_files:
            return jsonify({'error': 'Report file not found'}), 404
        
        # Get the most recent file
        latest_report = max(report_files, key=os.path.getctime)
        
        return send_file(
            latest_report,
            as_attachment=True,
            download_name=f"AI_Assessment_Report_{business_name}.pdf",
            mimetype='application/pdf'
        )
        
    except Exception as e:
        return jsonify({'error': f'Download failed: {str(e)}'}), 500

@analysis_bp.route('/test-report', methods=['POST'])
def test_report_generation():
    """
    Test endpoint for report generation with sample data
    """
    try:
        # Sample assessment data
        sample_assessment = {
            'id': 999,
            'business_name': 'Tech Retail Store',
            'business_type': 'retail',
            'business_size': '6-20',
            'industry_sector': 'Electronics',
            'years_in_business': 5,
            'annual_revenue_range': '$500K - $1M',
            'contact_name': 'John Smith',
            'contact_email': 'john.smith@techretail.com'
        }
        
        # Sample responses
        sample_responses = [
            {
                'question_key': 'business_description',
                'response_value': 'We run a small electronics retail store with both online and physical locations. We struggle with inventory management and often have stockouts or overstock situations. Customer service is mostly manual and we spend too much time on repetitive tasks like order processing and invoice generation.'
            },
            {
                'question_key': 'daily_challenges',
                'response_value': 'Our biggest challenges are managing inventory levels, processing orders manually, and keeping track of customer inquiries. We waste a lot of time on spreadsheets and manual data entry.'
            },
            {
                'question_key': 'business_goals',
                'response_value': 'We want to grow our business by 50% in the next year, improve customer satisfaction, and reduce operational costs. We need better systems to handle increased volume.'
            },
            {
                'question_key': 'tech_comfort_level',
                'response_value': '3'
            }
        ]
        
        # Initialize the analysis engine
        from src.analysis_engine import BusinessAnalysisEngine
        engine = BusinessAnalysisEngine()
        
        # Perform the analysis
        analysis_results = engine.analyze_assessment(sample_assessment, sample_responses)
        
        # Import the report generator
        from src.report_generator import BusinessReportGenerator
        
        # Generate the report
        generator = BusinessReportGenerator()
        report_path = generator.generate_comprehensive_report(analysis_results, sample_assessment)
        
        return jsonify({
            'message': 'Test report generated successfully',
            'report_path': report_path,
            'analysis_results': analysis_results
        })
        
    except Exception as e:
        return jsonify({'error': f'Test report generation failed: {str(e)}'}), 500

