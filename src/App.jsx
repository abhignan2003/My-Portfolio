import React, { useEffect } from 'react';
import CyberBackground from './components/CyberBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  // Prevent hydration styling flashes
  useEffect(() => {
    document.body.style.visibility = 'visible';
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative', overflowX: 'hidden' }}>
      <CustomCursor />
      <CyberBackground />
      <Navbar />
      
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
