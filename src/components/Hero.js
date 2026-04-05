import React from 'react';


function Hero({ scrollToProjects }) {
  return (
    <section id="home" className="hero">
      <div className="hero-text animate">
        <h1>Hi, I'm Musafirunnisa 👋</h1>
        <p>Frontend Developer | ML Enthusiast</p>
        <button onClick={scrollToProjects}>View Projects</button>
      </div>
      <div className="hero-img animate">
        <img src="/profile.jpeg" alt="profile" />
      </div>
    </section>
  );
}

export default Hero;