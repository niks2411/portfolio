import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiBarChart2, FiMessageCircle } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCode size={24} />,
      title: 'Full Stack Development',
      description: 'Building complete web applications with modern technologies and best practices.'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Problem Solving',
      description: 'Analytical approach to complex challenges with efficient solutions.'
    },
    {
      icon: <FiMessageCircle size={24} />,
      title: 'Team Collaboration',
      description: 'Effective communication and teamwork in dynamic development environments.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-2xl">
                <FiUser size={80} className="text-white sm:w-24 sm:h-24" />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-base sm:text-lg">4+</span>
              </div>
            </div>

            {/* Bio Text */}
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Motivated and detail-oriented Computer Science undergraduate with strong skills in software development, problem-solving, and teamwork. Passionate about building scalable web applications and solving real-world challenges through technology.
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Adaptable, fast learner, and eager to contribute to dynamic development teams. Currently pursuing B.Tech in Computer Science at Bhagwan Parshuram Institute of Technology (GGSIPU).
              </p>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-6 sm:pt-8"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">7+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">3rd</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Year B.Tech</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 