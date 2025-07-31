import React, { useState } from 'react';

const PracticeAreas = () => {
  const [activeArea, setActiveArea] = useState(0);

  const practiceAreas = [
    {
      title: "Corporate Law",
      description: "We provide comprehensive corporate legal services including company incorporation, compliance, mergers & acquisitions, joint ventures, and corporate governance. Our team assists businesses of all sizes in navigating complex regulatory frameworks and ensuring legal compliance in their operations."
    },
    {
      title: "Civil Litigation",
      description: "Our litigation team handles a wide range of civil disputes including contract disputes, property matters, consumer protection cases, and commercial litigation. We provide aggressive representation while maintaining the highest standards of professional ethics and client service."
    },
    {
      title: "Criminal Defense",
      description: "We offer robust criminal defense services for individuals and organizations facing criminal charges. Our experienced criminal lawyers handle cases ranging from white-collar crimes to serious felonies, ensuring our clients receive fair treatment under the law."
    },
    {
      title: "Family Law",
      description: "Our family law practice covers divorce proceedings, child custody, maintenance, adoption, and domestic violence cases. We understand the sensitive nature of family disputes and provide compassionate yet effective legal representation to protect our clients' interests."
    },
    {
      title: "Intellectual Property",
      description: "We help clients protect their intellectual property rights through trademark registration, copyright protection, patent applications, and IP litigation. Our team assists businesses in developing comprehensive IP strategies to safeguard their innovations and creative works."
    }
  ];

  const toggleArea = (index) => {
    setActiveArea(activeArea === index ? -1 : index);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-2">
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '3rem', marginBottom: '1rem' }}>Practice Areas</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Our firm offers comprehensive legal services across multiple practice areas, ensuring expert representation for diverse legal needs.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {practiceAreas.map((area, index) => (
            <div key={index} className="practice-area">
              <button 
                className="practice-toggle"
                onClick={() => toggleArea(index)}
              >
                <span>{area.title}</span>
                <span>{activeArea === index ? '−' : '+'}</span>
              </button>
              <div className={`practice-content ${activeArea === index ? 'active' : ''}`}>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
