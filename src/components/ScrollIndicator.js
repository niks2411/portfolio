import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default ScrollIndicator; 