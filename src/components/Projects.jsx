import React from 'react';
import './Projects.css';
import login from '../assets/login.png';
import portfolio from '../assets/portfolio.png';
<<<<<<< HEAD
import qr from '../assets/qr.png'
=======
import qr from '../assets/qr.png';
>>>>>>> 5ea4e0f (Initial commit)

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-cards-container">
        <div className="projects-card">
<<<<<<< HEAD
          <img src={login} />
          <h3>Login SignUp - React Router</h3>
          <p>I have successfully developed frontend login and signup forms using React, incorporating polished CSS styling and React Router for seamless page navigation, ensuring a smooth and user-friendly experience.</p>
          <a href="https://signinupreact.vercel.app">View Project</a>
        </div>
        <div className="projects-card">
          <img src={portfolio} alt="Calculator" />
          <h3>Personal POrtfolio Website</h3>
          <p>I built a dynamic personal portfolio website with React, featuring sections for projects, education, and skills. The site utilizes FontAwesome icons and responsive design for optimal viewing on all devices, and integrates GitHub icons to showcase project repositories.</p>
        </div>
        <div className="projects-card">
          <img src={qr} alt="Another Project" />
          <h3>QR Generator - Javascript</h3>
          <p>Built a QR code generator in HTML, CSS, and JavaScript with API integration for seamless functionality. Features a styled container with a blurred, semi-transparent white background for a polished user interface.</p>
=======
          <img src={login} alt="Login SignUp" />
          <h3>Login SignUp - React Router</h3>
          <p>I have successfully developed frontend login and signup forms using React, incorporating polished CSS styling and React Router for seamless page navigation, ensuring a smooth and user-friendly experience.</p>
          <div className="container">
            <a href="https://signinupreact.vercel.app" className='proview'>View Project</a>
          </div>
        </div>
        <div className="projects-card">
          <img src={portfolio} alt="Personal Portfolio Website" />
          <h3>Personal Portfolio Website</h3>
          <p>I built a dynamic personal portfolio website with React, featuring sections for projects, education, and skills. The site utilizes FontAwesome icons and responsive design for optimal viewing on all devices, and integrates GitHub icons to showcase project repositories.</p>
          <div className="container">
            <a href="https://signinupreact.vercel.app" className='proview'>View Project</a>
          </div>
        </div>
        <div className="projects-card">
          <img src={qr} alt="QR Generator" />
          <h3>QR Generator - JavaScript</h3>
          <p>Built a QR code generator in HTML, CSS, and JavaScript with API integration for seamless functionality. Features a styled container with a blurred, semi-transparent white background for a polished user interface.</p>
          <div className="container">
            <a href="https://signinupreact.vercel.app" className='proview'>View Project</a>
          </div>
>>>>>>> 5ea4e0f (Initial commit)
        </div>
      </div>
    </section>
  );
}

export default Projects;
