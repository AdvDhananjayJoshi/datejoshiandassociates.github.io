from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

# Zoho Email configuration
app.config['MAIL_SERVER'] = 'smtp.zoho.in'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USERNAME')

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        print(f"Email username: {app.config['MAIL_USERNAME']}")
        data = request.get_json()
        print(f"Received form data: {data}")
        
        # Email to the firm (internal notification)
        firm_msg = Message(
            subject=f"Inquiry: {data['subject']}",
            sender=app.config['MAIL_USERNAME'],
            recipients=['pratik@datejoshiandassociates.com', 'dhananjay@datejoshiandassociates.com'],
            reply_to=data['email']
        )
        
        firm_msg.html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">
                NEW CONTACT FORM SUBMISSION
            </h2>
            
            <h3 style="color: #2c5282;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 5px; font-weight: bold;">Full Name:</td><td style="padding: 5px;">{data['name']}</td></tr>
                <tr><td style="padding: 5px; font-weight: bold;">Email:</td><td style="padding: 5px;"><a href="mailto:{data['email']}">{data['email']}</a></td></tr>
                <tr><td style="padding: 5px; font-weight: bold;">Phone:</td><td style="padding: 5px;">{data['phone']}</td></tr>
                <tr><td style="padding: 5px; font-weight: bold;">Subject:</td><td style="padding: 5px;">{data['subject']}</td></tr>
            </table>
            
            <h3 style="color: #2c5282;">Message:</h3>
            <div style="background: #f7fafc; padding: 15px; border-left: 4px solid #2c5282; margin: 10px 0;">
                {data['message']}
            </div>
            
            <hr style="margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">
                This inquiry was submitted through the Date Joshi & Associates website contact form.<br>
            </p>
        </body>
        </html>
        """
        
        # Email to customer (acknowledgment)
        customer_msg = Message(
            subject="Thank you for your inquiry - Date Joshi & Associates",
            sender=app.config['MAIL_USERNAME'],
            recipients=[data['email']]
        )
        
        customer_msg.html = f"""
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e3a5f;">Dear {data['name']},</h2>
        
        <p>Thank you for your inquiry. Our legal team will get back to you shortly with further details.</p>
        
        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2c5282; margin-top: 0;">Your Inquiry Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Full Name:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">{data['name']}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">{data['email']}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">{data['phone']}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Subject:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">{data['subject']}</td></tr>
            </table>
            
            <h4 style="color: #2c5282; margin-bottom: 5px;">Message:</h4>
            <p style="background: white; padding: 10px; border-radius: 4px; margin: 0;">{data['message']}</p>
        </div>
        
        <p>Thank you once again for visiting our website. We look forward to hearing from you soon and assisting you with your legal needs.</p>
        
        <div style="text-align: left; margin: 30px 0;">
                <h3 style="color: #1e3a5f;">Regards,</h3>
                <h4 style="color: #2c5282; margin: 5px 0;">Date Joshi & Associates</h4>
                <p style="font-style: italic; color: #666;">Legal Excellence with Integrity</p>
        </div>

        <div style="background: #1e3a5f; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: white; margin-top: 0;">Date Joshi & Associates</h3>
            
            <!-- Updated 2-Column Layout -->
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <!-- Left Column - Contact Details -->
                <div style="flex: 1; min-width: 250px;">
                    <p style="margin: 5px 0;">📧 <a href="mailto:info@datejoshiandassociates.com" style="color: #4299e1;">info@datejoshiandassociates.com</a></p>
                    <p style="margin: 5px 0;">📞 Pratik Date: +91 94230 76884</p>
                    <p style="margin: 5px 0;">📞 Dhananjay Joshi: +91 96234 52565</p>
                    <p style="margin: 15px 0 5px 0;">🌐 <a href="https://datejoshiandassociates.com" style="color: #4299e1;">datejoshiandassociates.com</a></p>
                </div>
                
                <!-- Right Column - Office Address -->
                <div style="flex: 1; min-width: 250px;">
                    <p style="margin: 15px 0 5px 0;"><strong>Office Address:</strong></p>
                    <p style="margin: 5px 0;">Date Joshi and Associates<br>
                    759/12A, Prasad, Arvind Ranade path,<br>
                    Deccan Gymkhana, Pune, MH- 411004<br>
                </div>
            </div>
        </div>
        
        
        <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="font-size: 12px; color: #666; text-align: center;">
            This is an automated response confirming receipt of your inquiry.<br>
            A member of our legal team will contact you personally within 24-48 hours.
        </p>
    </div>
</body>
</html>
"""
        
        print("Attempting to send emails...")
        mail.send(firm_msg)
        mail.send(customer_msg)
        print("Both emails sent successfully!")
        
        return jsonify({'success': True, 'message': 'Message sent successfully! You will receive a confirmation email shortly.'})
    
    except Exception as e:
        print(f"Email failed with error: {str(e)}")
        return jsonify({'success': False, 'message': f'Failed to send message: {str(e)}'}), 500

@app.route('/api/articles', methods=['GET'])
def get_articles():
    articles = [
        {
            'id': 1,
            'title': 'Understanding Corporate Law in Modern Business',
            'excerpt': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'date': '2024-01-15',
            'author': 'Pratik Date'
        },
        {
            'id': 2,
            'title': 'Recent Developments in Intellectual Property Rights',
            'excerpt': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'content': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'date': '2024-01-10',
            'author': 'Dhananjay Joshi'
        },
        {
            'id': 3,
            'title': 'Navigating Employment Law Complexities',
            'excerpt': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            'content': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            'date': '2024-01-05',
            'author': 'Legal Team'
        }
    ]
    return jsonify(articles)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
