import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-12">
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
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-lg">
              NM
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Nikhil Mendiratta</h3>
              <p className="text-xs sm:text-sm text-slate-400">Web Developer</p>
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
            <p className="text-sm sm:text-base text-slate-400">
              © {currentYear} Nikhil Mendiratta. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
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
          className="w-full h-px bg-slate-700 my-6 sm:my-8"
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
            <p className="text-sm sm:text-base text-slate-400">
              Ready to start your next project?
            </p>
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="#contact"
              className="text-sm sm:text-base text-slate-400 hover:text-primary-400 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#about"
              className="text-sm sm:text-base text-slate-400 hover:text-primary-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm sm:text-base text-slate-400 hover:text-primary-400 transition-colors duration-300"
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
