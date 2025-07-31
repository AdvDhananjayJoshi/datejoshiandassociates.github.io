import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = '🏛️ Privacy Policy - Date Joshi & Associates';
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-2">
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '3rem', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)' }}>
            Your privacy is important to us. This policy explains how we collect and use your information.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you fill out our contact form, request information, or communicate with us. This may include:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
              <li>Your name and contact information (email address, phone number)</li>
              <li>Information about your legal inquiry or the services you're interested in</li>
              <li>Any other information you choose to provide in your communications with us</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
              <li>Respond to your inquiries and provide legal services</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              3. Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety, or that of others</li>
              <li>With service providers who assist us in operating our website or conducting our business, provided they agree to keep information confidential</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              4. Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              5. Cookies and Website Analytics
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to other websites. We are not responsible for the privacy practices or content of such third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              7. Your Rights
            </h2>
            <p>
              You have the right to:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to our processing of your personal information</li>
              <li>Request that we restrict our processing of your personal information</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              8. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              9. Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date below.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div style={{ background: 'var(--light-gray)', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
              <p><strong>Date Joshi & Associates</strong></p>
              <p>759/12a, prasad, arvind ranade path,<br />
              deccan gymkhana, pune - 411004<br />
              india</p>
              <p>Email: info@datejoshiandassociates.com</p>
              <p>Phone: Pratik Date - +91 94230 76884 | Dhananjay Joshi - +91 96234 52565</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--light-gray)', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ margin: '0', fontStyle: 'italic', color: 'var(--text-gray)' }}>
              Last updated: {new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
