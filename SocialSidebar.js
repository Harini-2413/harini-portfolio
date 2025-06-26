import React from 'react';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <ul>
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:your@email.com">
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;