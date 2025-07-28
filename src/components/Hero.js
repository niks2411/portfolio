import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

// Custom SVG Icons
const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0l1.09 3.09L16 2l-1.09 3.09L18 6l-3.09 1.09L16 10l-3.09-1.09L12 12l-1.09-3.09L8 10l1.09-3.09L6 6l3.09-1.09L8 2l3.09 1.09L12 0z"/>
  </svg>
);

// TypeWriter Effect Component
const TypeWriter = ({ texts, speed = 100, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.substring(0, currentText.length + 1));
        if (currentText === text) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay]);

  return <span className="text-gradient">{currentText}</span>;
};

// Particle System
const ParticleSystem = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 10 + 15}s`
          }}
        />
      ))}
    </div>
  );
};

// Animated Lines
const AnimatedLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="20%" x2="100%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-line-draw" />
        <line x1="100%" y1="30%" x2="0" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-line-draw-reverse" />
      </svg>
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Dark Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`
        }}
      />
      
      <ParticleSystem />
      <AnimatedLines />

      {/* Floating geometric shapes with dark theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg animate-drift"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Text Content (70% width on large screens) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 text-center lg:text-left lg:pr-8 xl:pr-12"
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start space-x-2"
              >
                <SparkleIcon className="text-purple-400 animate-pulse-gentle" />
                <span className="text-base sm:text-lg text-slate-300 font-medium">
                  Welcome to my portfolio
                </span>
                <SparkleIcon className="text-purple-400 animate-pulse-gentle" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Nikhil</span>
              </motion.h1>

              {/* Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-200"
              >
                I'm a{' '}
                <TypeWriter 
                  texts={['Web Developer', 'Full Stack Developer', 'Problem Solver', 'Creative Thinker']}
                  speed={100}
                  delay={2000}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Passionate about creating innovative web solutions and turning ideas into reality through code. 
                Specialized in modern web technologies and user-centric design.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <DownloadIcon />
                    <span>Download My Resume</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="group relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <MailIcon />
                    <span>Hire Me</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Spline 3D Element (30% width on large screens) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-5/12 relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <Spline
                scene="https://prod.spline.design/s3b37gyKaoNgA9SO/scene.splinecode"
                className="!bg-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="flex flex-col items-center space-y-2 text-slate-400">
            <span className="text-xs sm:text-sm font-medium animate-bounce-gentle">Scroll Down</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-500 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-slate-400 rounded-full mt-1 sm:mt-2 animate-pulse-gentle"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-10px); }
          50% { transform: translateX(0px) translateY(-20px); }
          75% { transform: translateX(-10px) translateY(-10px); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        @keyframes line-draw {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        @keyframes line-draw-reverse {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-drift { animation: drift 8s ease-in-out infinite; }
        .animate-float-particle { animation: float-particle 20s linear infinite; }
        .animate-line-draw { animation: line-draw 3s ease-in-out infinite; }
        .animate-line-draw-reverse { animation: line-draw-reverse 3s ease-in-out infinite reverse; }
        .text-gradient { 
          background: linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-gradient 3s ease-in-out infinite;
        }
        .gradient-shift {
          background: linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;