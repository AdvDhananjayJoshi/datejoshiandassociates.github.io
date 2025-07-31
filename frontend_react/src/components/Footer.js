import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Date Joshi & Associates</h3>
            <p>Trusted legal excellence with integrity, expertise, and dedication. We provide comprehensive legal solutions for individuals and businesses.</p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Disclaimer:</strong> This website is in compliance with Bar Council of India rules.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/practice-areas">Practice Areas</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-section">
            <h3>Practice Areas</h3>
            <a href="#">Corporate Law</a>
            <a href="#">Civil Litigation</a>
            <a href="#">Criminal Defense</a>
            <a href="#">Family Law</a>
            <a href="#">Intellectual Property</a>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>759/12A, Prasad, Arvind Ranade 
                    path,</p><p>Deccan Gymkhana, Pune, MH- 411004</p>
            <p>Pratik Date: +91 94230 76884</p>
            <p>Dhananjay Joshi: +91 96234 52565</p>
            <p>info@datejoshiandassociates.com</p>
            <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="footer-bottom">
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  }}>
    {/* Left side - Copyright and legal links */}
    <p style={{ margin: '0', flex: 'left' }}>
      &copy; 2025 Date Joshi & Associates. All rights reserved. | 
      <Link 
        to="/terms-of-use" 
        style={{ 
          color: 'var(--light-blue)', 
          textDecoration: 'none',
          marginLeft: '5px',
          marginRight: '5px'
        }}
      >
        Terms of Use
      </Link> | 
      <Link 
        to="/privacy-policy" 
        style={{ 
          color: 'var(--light-blue)', 
          textDecoration: 'none',
          marginLeft: '5px'
        }}
      >
        Privacy Policy
      </Link>
    </p>
    
    {/* Right side - Designer credit */}
    <p style={{ margin: '0', textAlign: 'right' }}>
      Designed by{' '}
      <a 
        href="https://harishkulkarni.in/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          color: 'var(--light-blue)', 
          textDecoration: 'none',
          fontWeight: '500'
        }}
      >
        Harish Kulkarni
      </a>
    </p>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
