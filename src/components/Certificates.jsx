import React from 'react';
import './Certificates.css'; 
<<<<<<< HEAD
import html from '../assets/fincer.jpg'
=======
import fincer from '../assets/fincer.jpg';
import html from '../assets/html.png'
>>>>>>> 5ea4e0f (Initial commit)

function Certificates() {
  const certificates = [
    {
      title: 'Financial Analyst Certification',
      provider: '365 Careers (Udemy)',
      date: 'Completed: July 2024',
<<<<<<< HEAD
      image: html, // Replace with the actual image URL
=======
      image: fincer,
      link: '/' 
>>>>>>> 5ea4e0f (Initial commit)
    },
    {
      title: 'HTML, CSS, and Javascript for Web Developers',
      provider: 'Coursera',
      date: 'Completed: June 2024',
<<<<<<< HEAD
      image: html ,// Replace with the actual image URL
    },
    // Add more certificates here
=======
      image: html,
      link: '/' 
    },
    {
      title: 'JavaScript Programming with React, Node & MongoDB Specialization',
      provider: 'Coursera',
      date: 'Started: June 2024',
      image: html,
      link: '/' 
    },
    {
      title: 'Application Development using Microservices and Serverless',
      provider: 'Coursera',
      date: 'Started: June 2024',
      image: html,
      link: '/' 
    },
    {
      title: 'Introduction to Microsoft Azure Cloud Services',
      provider: 'Coursera',
      date: 'Started: June 2024',
      image: html,
      link: '/' 
    }
>>>>>>> 5ea4e0f (Initial commit)
  ];

  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-cards-container">
        {certificates.map((certificate, index) => (
<<<<<<< HEAD
          <div key={index} className="certificates-card">
=======
          <a key={index} href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificates-card">
>>>>>>> 5ea4e0f (Initial commit)
            <img src={certificate.image} alt={certificate.title} className="certificates-image" />
            <div className="certificates-details">
              <h3>{certificate.title}</h3>
              <p>{certificate.provider}</p>
              <p>{certificate.date}</p>
            </div>
<<<<<<< HEAD
          </div>
=======
          </a>
>>>>>>> 5ea4e0f (Initial commit)
        ))}
      </div>
    </section>
  );
}

export default Certificates;
