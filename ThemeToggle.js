import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <div className="theme-toggle">
      <label className="switch">
        <input type="checkbox" onChange={() => setIsDark(!isDark)} />
        <span className="slider" />
      </label>
      <span>{isDark ? '🌙 Dark' : '☀ Light'}</span>
    </div>
  );
};

export default ThemeToggle;