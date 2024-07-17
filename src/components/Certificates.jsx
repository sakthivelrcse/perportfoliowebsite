import React from 'react';
import './Certificates.css'; 
import html from '../assets/fincer.jpg'

function Certificates() {
  const certificates = [
    {
      title: 'Financial Analyst Certification',
      provider: '365 Careers (Udemy)',
      date: 'Completed: July 2024',
      image: html, // Replace with the actual image URL
    },
    {
      title: 'HTML, CSS, and Javascript for Web Developers',
      provider: 'Coursera',
      date: 'Completed: June 2024',
      image: html ,// Replace with the actual image URL
    },
    // Add more certificates here
  ];

  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-cards-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificates-card">
            <img src={certificate.image} alt={certificate.title} className="certificates-image" />
            <div className="certificates-details">
              <h3>{certificate.title}</h3>
              <p>{certificate.provider}</p>
              <p>{certificate.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
