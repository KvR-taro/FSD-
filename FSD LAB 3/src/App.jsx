import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-app">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
