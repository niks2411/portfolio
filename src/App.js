import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
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
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20">
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
    </ThemeProvider>
  );
}

export default App; 