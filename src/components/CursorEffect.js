import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full pointer-events-none z-40 opacity-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
      />
    </>
  );
};

export default CursorEffect; 