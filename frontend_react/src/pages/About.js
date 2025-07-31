import React from 'react';

const About = () => {
  const founders = [
    {
      name: "Pratik Date",
      position: "Co-Founder & Senior Partner",
      description: "Pratik brings over 15 years of experience in corporate law and litigation. He specializes in mergers & acquisitions, corporate governance, and commercial disputes. His strategic approach and deep understanding of business law have helped numerous clients navigate complex legal challenges."
    },
    {
      name: "Dhananjay Joshi",
      position: "Co-Founder & Senior Partner", 
      description: "Dhananjay is an expert in civil litigation and property law with over 12 years of experience. His meticulous attention to detail and aggressive advocacy have earned him recognition in high-stakes litigation matters. He is known for his innovative legal strategies and client-focused approach."
    }
  ];

  const associates = [
    {
      name: "Adv. Priya Sharma",
      position: "Associate Partner - Family Law"
    },
    {
      name: "Adv. Rahul Mehta", 
      position: "Senior Associate - Criminal Law"
    },
    {
      name: "Adv. Sneha Patel",
      position: "Associate - Intellectual Property"
    },
    {
      name: "Adv. Amit Gupta",
      position: "Associate - Tax Law"
    },
    {
      name: "Adv. Kavya Iyer",
      position: "Junior Associate - Research"
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-2">
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '3rem', marginBottom: '1rem' }}>About Date Joshi & Associates</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Founded on principles of integrity, excellence, and client service, our firm has grown to become a trusted legal partner for individuals and businesses across various industries.
          </p>
        </div>

        {/* Co-Founders Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-blue)', textAlign: 'center', marginBottom: '2rem' }}>Our Co-Founders</h2>
          <div className="card-container founders">
            {founders.map((founder, index) => (
              <div key={index} className="card">
                <h3>{founder.name}</h3>
                <div className="position">{founder.position}</div>
                <p>{founder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Associates Section */}
        <div>
          <h2 style={{ color: 'var(--primary-blue)', textAlign: 'center', marginBottom: '2rem' }}>Our Associates</h2>
          <div className="card-container associates">
            {associates.map((associate, index) => (
              <div key={index} className="card">
                <h3>{associate.name}</h3>
                <div className="position">{associate.position}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
