import React from 'react';


function About() {
  return (
    <section id="about" className="section animate">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-img">
          <img src="/profile.jpeg" alt="Musafirunnisa" />
        </div>
        <div className="about-text">
          <p>
            Passionate pre-final year Computer Science student building responsive
            and user-friendly web applications. Skilled in frontend development
            and integrating machine learning for smarter user experiences.
          </p>
          <h3>Skills & Expertise</h3>
          <div className="skills-cards">
            <div className="skill-card">
              <h4>Frontend</h4>
              <p>HTML, CSS, JavaScript, React.js</p>
            </div>
            <div className="skill-card">
              <h4>Backend</h4>
              <p>Node.js, Express.js, MongoDB</p>
            </div>
            <div className="skill-card">
              <h4>Programming</h4>
              <p>Java, Python, Haskell</p>
            </div>
            <div className="skill-card">
              <h4>Tools & Soft Skills</h4>
              <p>Git, VS Code, Communication, Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;