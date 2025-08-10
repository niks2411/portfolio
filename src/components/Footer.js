import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 sm:py-12 transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-100 text-slate-800'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-4 sm:mb-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-lg">
              NM
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Nikhil Mendiratta</h3>
              <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>Web Developer</p>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center sm:text-right"
          >
            <p className={`text-sm sm:text-base transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              © {currentYear} Nikhil Mendiratta. All rights reserved.
            </p>
            <p className={`text-xs sm:text-sm mt-1 transition-colors duration-300 ${
              isDarkMode ? 'text-slate-500' : 'text-slate-600'
            }`}>
              Built with React & Tailwind CSS
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`w-full h-px my-6 sm:my-8 transition-colors duration-300 ${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-300'
          }`}
        />

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left"
        >
          <div className="mb-4 sm:mb-0">
            <p className={`text-sm sm:text-base transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Ready to start your next project?
            </p>
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="#contact"
              className={`text-sm sm:text-base transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-slate-400 hover:text-purple-400'
                  : 'text-slate-500 hover:text-purple-600'
              }`}
            >
              Contact
            </a>
            <a
              href="#about"
              className={`text-sm sm:text-base transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-slate-400 hover:text-purple-400'
                  : 'text-slate-500 hover:text-purple-600'
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`text-sm sm:text-base transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-slate-400 hover:text-purple-400'
                  : 'text-slate-500 hover:text-purple-600'
              }`}
            >
              Projects
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
