import React, { useEffect, useState } from 'react';
import './About.css'; // Import the CSS file
import profilePic from '../assets/sakthipassprt.jpg'; // Make sure to replace with the path to your image

function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="about" className='section'>
<<<<<<< HEAD
      <h2>About Me</h2>
=======
      <h2 className='abtext'>About Me</h2>
>>>>>>> 5ea4e0f (Initial commit)
      <div className="about-container">
        <img src={profilePic} alt="Sakthivel" className="about-image" />
        <div className="about-details">
          <p>Hello! I am Sakthivel, a passionate software developer with expertise in front-end development. I have a strong background in HTML, CSS, JavaScript, and React. I enjoy creating dynamic and responsive web applications that provide excellent user experiences.</p>
          <p>In addition to my technical skills, I have experience in financial analysis, having completed a Financial Analyst Certification. I am always eager to learn new technologies and improve my skills. In my free time, I enjoy reading, exploring new tools, and working on personal projects.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
