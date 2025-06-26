import React from 'react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SocialSidebar/>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;