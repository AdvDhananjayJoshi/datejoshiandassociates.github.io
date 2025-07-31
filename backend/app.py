from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# CORS configuration
CORS(app, origins=[
    'http://localhost:3000', 
    'https://datejoshiandassociates.com',
    'https://www.datejoshiandassociates.com'
])

# Zoho Email configuration
app.config['MAIL_SERVER'] = 'smtp.zoho.in'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USERNAME')

mail = Mail(app)

@app.route('/')
def health_check():
    return jsonify({'status': 'Date Joshi & Associates API is running'})

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Your existing email sending code here
        # (Copy from your previous working Flask code)
        
        return jsonify({'success': True, 'message': 'Message sent successfully!'})
    
    except Exception as e:
        return jsonify({'success': False, 'message': f'Failed to send message: {str(e)}'}), 500

@app.route('/api/articles', methods=['GET'])
def get_articles():
    # Your existing articles code
    return jsonify([])
