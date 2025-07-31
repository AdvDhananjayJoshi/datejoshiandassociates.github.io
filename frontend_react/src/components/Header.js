import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../img/lawfirm.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src={logoImage}  
              alt="Date Joshi & Associates Logo" 
              className="logo-image"
            />
            <span className="logo-text">Date Joshi & Associates</span>
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            <Link to="/practice-areas" className={location.pathname === '/practice-areas' ? 'active' : ''}>Practice Areas</Link>
            <Link to="/articles" className={location.pathname === '/articles' ? 'active' : ''}>Articles</Link>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="contact-btn">Contact Us</Link>
            <div 
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
