from src.models.user import db
from datetime import datetime
import json

class Assessment(db.Model):
    __tablename__ = 'assessments'
    
    id = db.Column(db.Integer, primary_key=True)
    business_name = db.Column(db.String(200), nullable=False)
    business_type = db.Column(db.String(50), nullable=False)  # retail, restaurant, service, non-profit, other
    contact_email = db.Column(db.String(200), nullable=False)
    contact_name = db.Column(db.String(200), nullable=False)
    phone = db.Column(db.String(50))
    business_size = db.Column(db.String(50))  # employees count range
    industry = db.Column(db.String(100))
    years_in_business = db.Column(db.Integer)
    annual_revenue_range = db.Column(db.String(50))
    
    # Assessment status
    status = db.Column(db.String(50), default='in_progress')  # in_progress, completed, analyzed
    current_section = db.Column(db.String(100), default='business_info')
    progress_percentage = db.Column(db.Float, default=0.0)
    
    # Timestamps
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    completed_at = db.Column(db.DateTime)
    analyzed_at = db.Column(db.DateTime)
    
    # Payment info
    payment_status = db.Column(db.String(50), default='pending')  # pending, paid, failed
    payment_id = db.Column(db.String(200))
    
    # Relationships
    responses = db.relationship('Response', backref='assessment', lazy=True, cascade='all, delete-orphan')
    analysis_results = db.relationship('AnalysisResult', backref='assessment', lazy=True, cascade='all, delete-orphan')

class QuestionTemplate(db.Model):
    __tablename__ = 'question_templates'
    
    id = db.Column(db.Integer, primary_key=True)
    section = db.Column(db.String(100), nullable=False)  # business_info, operations, marketing, etc.
    question_key = db.Column(db.String(200), nullable=False, unique=True)
    question_text = db.Column(db.Text, nullable=False)
    question_type = db.Column(db.String(50), nullable=False)  # text, number, scale, multiple_choice, checkbox
    options = db.Column(db.Text)  # JSON string for multiple choice options
    is_required = db.Column(db.Boolean, default=True)
    order_index = db.Column(db.Integer, default=0)
    
    # Business type applicability
    applies_to_retail = db.Column(db.Boolean, default=True)
    applies_to_restaurant = db.Column(db.Boolean, default=True)
    applies_to_service = db.Column(db.Boolean, default=True)
    applies_to_nonprofit = db.Column(db.Boolean, default=True)
    applies_to_other = db.Column(db.Boolean, default=True)
    
    # Conditional logic
    depends_on_question = db.Column(db.String(200))  # question_key that this depends on
    depends_on_value = db.Column(db.String(500))  # value that triggers this question
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Response(db.Model):
    __tablename__ = 'responses'
    
    id = db.Column(db.Integer, primary_key=True)
    assessment_id = db.Column(db.Integer, db.ForeignKey('assessments.id'), nullable=False)
    question_key = db.Column(db.String(200), nullable=False)
    response_value = db.Column(db.Text)  # JSON string for complex responses
    response_type = db.Column(db.String(50), nullable=False)
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class AnalysisResult(db.Model):
    __tablename__ = 'analysis_results'
    
    id = db.Column(db.Integer, primary_key=True)
    assessment_id = db.Column(db.Integer, db.ForeignKey('assessments.id'), nullable=False)
    
    # Analysis data
    pain_points = db.Column(db.Text)  # JSON string
    positive_patterns = db.Column(db.Text)  # JSON string
    ai_opportunities = db.Column(db.Text)  # JSON string
    recommendations = db.Column(db.Text)  # JSON string
    roi_estimates = db.Column(db.Text)  # JSON string
    implementation_roadmap = db.Column(db.Text)  # JSON string
    
    # Report generation
    report_generated = db.Column(db.Boolean, default=False)
    report_path = db.Column(db.String(500))
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def get_pain_points(self):
        return json.loads(self.pain_points) if self.pain_points else []
    
    def set_pain_points(self, data):
        self.pain_points = json.dumps(data)
    
    def get_positive_patterns(self):
        return json.loads(self.positive_patterns) if self.positive_patterns else []
    
    def set_positive_patterns(self, data):
        self.positive_patterns = json.dumps(data)
    
    def get_ai_opportunities(self):
        return json.loads(self.ai_opportunities) if self.ai_opportunities else []
    
    def set_ai_opportunities(self, data):
        self.ai_opportunities = json.dumps(data)
    
    def get_recommendations(self):
        return json.loads(self.recommendations) if self.recommendations else []
    
    def set_recommendations(self, data):
        self.recommendations = json.dumps(data)
    
    def get_roi_estimates(self):
        return json.loads(self.roi_estimates) if self.roi_estimates else {}
    
    def set_roi_estimates(self, data):
        self.roi_estimates = json.dumps(data)
    
    def get_implementation_roadmap(self):
        return json.loads(self.implementation_roadmap) if self.implementation_roadmap else []
    
    def set_implementation_roadmap(self, data):
        self.implementation_roadmap = json.dumps(data)

