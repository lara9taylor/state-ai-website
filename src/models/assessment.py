from datetime import datetime
from src.models.user import db

class Assessment(db.Model):
    __tablename__ = 'assessments'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    business_name = db.Column(db.String(200), nullable=False)
    business_type = db.Column(db.String(50), nullable=False)  # retail, restaurant, service, non-profit, other
    contact_email = db.Column(db.String(200), nullable=False)
    contact_name = db.Column(db.String(200), nullable=False)
    phone = db.Column(db.String(50))
    business_website = db.Column(db.String(200))
    business_location = db.Column(db.String(200))
    business_size = db.Column(db.String(50))  # employees count range
    industry = db.Column(db.String(100))
    years_in_business = db.Column(db.Integer)
    annual_revenue_range = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    status = db.Column(db.String(20), default='in_progress')  # in_progress, completed, archived
    
    # Relationships
    responses = db.relationship('Response', backref='assessment', lazy=True, cascade='all, delete-orphan')
    analysis_results = db.relationship('AnalysisResult', backref='assessment', lazy=True, cascade='all, delete-orphan')

class QuestionTemplate(db.Model):
    __tablename__ = 'question_templates'
    
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100), nullable=False)  # e.g., 'digital_presence', 'operations', 'marketing'
    question_text = db.Column(db.Text, nullable=False)
    question_type = db.Column(db.String(50), nullable=False)  # multiple_choice, text, rating, boolean
    options = db.Column(db.JSON)  # For multiple choice questions
    weight = db.Column(db.Float, default=1.0)  # Importance weight for scoring
    order_index = db.Column(db.Integer, default=0)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Response(db.Model):
    __tablename__ = 'responses'
    
    id = db.Column(db.Integer, primary_key=True)
    assessment_id = db.Column(db.Integer, db.ForeignKey('assessments.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('question_templates.id'), nullable=False)
    answer = db.Column(db.Text)  # Store answer as text/JSON
    score = db.Column(db.Float)  # Calculated score for this response
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    question = db.relationship('QuestionTemplate', backref='responses')

class AnalysisResult(db.Model):
    __tablename__ = 'analysis_results'
    
    id = db.Column(db.Integer, primary_key=True)
    assessment_id = db.Column(db.Integer, db.ForeignKey('assessments.id'), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    score = db.Column(db.Float, nullable=False)
    max_score = db.Column(db.Float, nullable=False)
    percentage = db.Column(db.Float, nullable=False)
    recommendations = db.Column(db.JSON)  # Store as JSON array
    strengths = db.Column(db.JSON)  # Store as JSON array
    weaknesses = db.Column(db.JSON)  # Store as JSON array
    priority_actions = db.Column(db.JSON)  # Store as JSON array
    created_at = db.Column(db.DateTime, default=datetime.utcnow)