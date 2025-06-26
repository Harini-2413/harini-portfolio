import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="intro-box">
        <p className="hello">Hello! 👋</p>
        <h1>I'm <span className="highlight">Harini</span></h1>
        <p className="role">UI/UX Designer, Front-End Developer & Thinker.</p>
        <div className="buttons">
          <button className="btn primary">Download CV</button>
          <button className="btn secondary">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;