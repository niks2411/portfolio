import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Education from './components/Education';
// import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20">
      <ScrollIndicator />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        {/* <Education /> */}
        {/* <Services /> */}
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 