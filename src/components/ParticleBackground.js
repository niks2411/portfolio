import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
    color: Math.random() > 0.5 ? 'from-purple-400 to-pink-400' : 'from-indigo-400 to-purple-400',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-1 h-1 bg-gradient-to-r ${particle.color} rounded-full opacity-40`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground; 