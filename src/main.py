import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_migrate import Migrate
from src.models.user import db
from src.models.assessment import Assessment, QuestionTemplate, Response, AnalysisResult
from src.routes.user import user_bp
from src.routes.assessment import assessment_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(user_bp, url_prefix='/api/users')
app.register_blueprint(assessment_bp, url_prefix='/api/assessments')

app.config['SECRET_KEY'] = 'your-secret-key-here'
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
migrate = Migrate(app, db)
with app.app_context():
    db.create_all()

@app.route('/')
def serve_frontend():
    return send_from_directory('static', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True)