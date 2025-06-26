import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A modern personal portfolio built with React and custom CSS.</p>
        </div>
        <div className="project-card">
          <h3>Shopping Cart App</h3>
          <p>Frontend React app using Context API and dynamic cart features.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;