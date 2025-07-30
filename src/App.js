import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Education from './components/Education';
// import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20">
        <ScrollIndicator />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                {/* <About /> */}
                <Skills />
                <Projects />
                {/* <Education /> */}
                {/* <Services /> */}
                <Resume />
                <Contact />
              </main>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 