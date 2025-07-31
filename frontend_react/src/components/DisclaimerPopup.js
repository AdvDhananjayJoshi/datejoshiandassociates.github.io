import React, { useState, useEffect } from 'react';

const DisclaimerPopup = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Always show disclaimer when component mounts (removed localStorage check)
    setShowDisclaimer(true);
  }, []);

  const handleAccept = () => {
    // Just hide the disclaimer (removed localStorage.setItem)
    setShowDisclaimer(false);
  };

  const handleDecline = () => {
    const referrer = document.referrer;
    const currentDomain = window.location.hostname;
    
    console.log('Referrer:', referrer);
    console.log('Current domain:', currentDomain);
    
    // Check if referrer exists and is from external domain
    if (referrer && !referrer.includes(currentDomain)) {
      console.log('Redirecting to referrer:', referrer);
      window.location.href = referrer;
      return;
    }
    
    // Try to use browser history if available
    if (window.history.length > 1) {
      console.log('Going back in history');
      window.history.back();
      
      // Fallback: if user doesn't navigate away in 100ms, redirect to search engine
      setTimeout(() => {
        if (window.location.hostname === currentDomain) {
          console.log('Fallback: redirecting to Google');
          window.location.href = 'https://google.com';
        }
      }, 100);
      return;
    }
    
    // Final fallback
    console.log('No history available, redirecting to Google');
    window.location.href = 'https://google.com';
  };

  if (!showDisclaimer) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <div className="disclaimer-content">
          <h2>Disclaimer & Confirmation</h2>
          <div className="disclaimer-text">
            <p>
              <strong>Date Joshi & Associates</strong> is in compliance with rule 36 of the Bar Council of India that prohibits law firms from soliciting work or advertising its services in any manner.
            </p>
            <p>By continuing to browse this website, you are agreeing to:</p>
            <ul>
              <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website</li>
              <li>The user wishes to gain more information about us for his/her own information and use</li>
              <li>The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site would not create any lawyer-client relationship</li>
            </ul>
            <p>
              Please read and accept our website's{' '}
              <a 
                href="/terms-of-use" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2c5282', textDecoration: 'underline' }}
              >
                Terms of Use
              </a>
              {' '}and{' '}
              <a 
                href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2c5282', textDecoration: 'underline' }}
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="disclaimer-buttons">
            <button 
              className="btn-accept"
              onClick={handleAccept}
            >
              I Accept & Continue
            </button>
            <button 
              className="btn-decline"
              onClick={handleDecline}
            >
              Decline & Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
