import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-purple-200 dark:border-purple-800"></div>
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-r-pink-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-b-indigo-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 