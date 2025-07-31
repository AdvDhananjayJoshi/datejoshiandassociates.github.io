import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   useEffect(() => {
    document.title = 'Date Joshi & Associates | Home - Legal Firm';
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Trusted Legal Excellence</h1>
          <p>
            Date Joshi & Associates is a premier law firm committed to providing comprehensive legal solutions with integrity, expertise, and dedication. We combine years of experience with innovative approaches to deliver exceptional results for our clients.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn-primary">Learn More About Us</Link>
            <Link to="/contact" className="btn-outline">Get Consultation</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-2">
            <h2 style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', marginBottom: '1rem' }}>About Our Firm</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              With years of combined experience, Date Joshi & Associates has established itself as a leading law firm specializing in various areas of law. Our commitment to excellence and client satisfaction has made us a trusted name in the legal community.
            </p>
          </div>
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
              We pride ourselves on providing personalized legal services tailored to meet each client's unique needs. Our team of experienced attorneys brings deep expertise across multiple practice areas, ensuring comprehensive legal support for individuals, businesses, and organizations.
            </p>
            <Link to="/about" className="btn-primary">Meet Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
