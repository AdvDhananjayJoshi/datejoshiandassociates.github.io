import React, { useState, useEffect } from 'react';

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://google.com';
  };

  if (!showDisclaimer) return null;

  return (
    <div className="disclaimer-modal">
      <div className="disclaimer-content">
        <h2>Disclaimer & Confirmation</h2>
        <p>
          <strong>Date Joshi & Associates</strong> is in compliance with rule 36 of the Bar Council of India that prohibits law firms from soliciting work or advertising its services in any manner.
        </p>
        <p>By continuing to browse this website, you are agreeing to:</p>
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website</li>
          <li>The user wishes to gain more information about us for his/her own information and use</li>
          <li>The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site would not create any lawyer-client relationship</li>
        </ul>
        <p>
          Please read and accept our website's{' '}
          <a href="#" style={{ color: '#2c5282' }}>Terms of Use</a> and{' '}
          <a href="#" style={{ color: '#2c5282' }}>Privacy Policy</a>
        </p>
        <div className="disclaimer-buttons">
          <button className="btn-accept" onClick={handleAccept}>
            I Accept
          </button>
          <button className="btn-decline" onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
