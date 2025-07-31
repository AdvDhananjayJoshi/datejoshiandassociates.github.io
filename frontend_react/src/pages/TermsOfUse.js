import React, { useEffect } from 'react';

const TermsOfUse = () => {
  useEffect(() => {
    document.title = '🏛️ Terms of Use - Date Joshi & Associates';
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-2">
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '3rem', marginBottom: '1rem' }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)' }}>
            Please read these terms carefully before using our website
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Date Joshi & Associates website ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              2. Disclaimer
            </h2>
            <p>
              Date Joshi & Associates is in compliance with Rule 36 of the Bar Council of India Rules that prohibits law firms from soliciting work or advertising its services in any manner. The information on this website is provided solely for informational purposes and does not constitute legal advice.
            </p>
            <p>
              By continuing to browse this website, you acknowledge that:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
              <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website</li>
              <li>You wish to gain more information about us for your own information and use</li>
              <li>The information about us is provided to you only on your specific request</li>
              <li>Any information obtained or materials downloaded from this website is completely at your volition</li>
              <li>Any transmission, receipt or use of this site would not create any lawyer-client relationship</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              3. No Attorney-Client Relationship
            </h2>
            <p>
              The use of this website or the contact form does not create an attorney-client relationship between you and Date Joshi & Associates. Such a relationship will be established only through a separate written agreement that specifically defines the scope of the legal services to be provided.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              4. Information Accuracy
            </h2>
            <p>
              While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the information contained on the website.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              5. Confidentiality
            </h2>
            <p>
              Any information you provide through our contact form or other means of communication through this website may not be treated as confidential or privileged unless and until we have agreed to represent you and have established an attorney-client relationship.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Date Joshi & Associates and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              7. Limitation of Liability
            </h2>
            <p>
              Date Joshi & Associates shall not be liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              8. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              9. Changes to Terms
            </h2>
            <p>
              Date Joshi & Associates reserves the right to modify these terms at any time without prior notice. Your continued use of the website after any changes indicates your acceptance of the new terms.
            </p>
          </div>

          <div className="legal-section">
            <h2 style={{ color: 'var(--primary-blue)', marginTop: '2rem', marginBottom: '1rem' }}>
              10. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
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

export default TermsOfUse;
