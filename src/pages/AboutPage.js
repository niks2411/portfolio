import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-pink-900/30 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-500 to-red-500 rounded-full blur-3xl opacity-10 z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative z-10">
        <About />
      </div>
    </div>
  );
};

export default AboutPage; 