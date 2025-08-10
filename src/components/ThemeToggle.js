import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

// Custom SVG Icons
const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const ThemeToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-2 rounded-lg transition-all duration-300 ${
        isDarkMode 
          ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
          : 'bg-white text-slate-600 hover:bg-gray-100 shadow-md'
      } ${className}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDarkMode ? 0 : 180,
          scale: isDarkMode ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </motion.div>
      
      {/* Glow effect for dark mode */}
      {isDarkMode && (
        <div className="absolute inset-0 rounded-lg bg-yellow-400/20 animate-pulse-gentle pointer-events-none" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;