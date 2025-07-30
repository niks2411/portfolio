import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiBarChart2, FiMessageCircle } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCode size={24} />,
      title: 'Full Stack Development',
      description: 'Building complete web applications with modern technologies and best practices.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Problem Solving',
      description: 'Analytical approach to complex challenges with efficient solutions.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <FiMessageCircle size={24} />,
      title: 'Team Collaboration',
      description: 'Effective communication and teamwork in dynamic development environments.',
      color: 'from-pink-500 to-red-600'
    }
  ];

  const stats = [
    // { number: '7+', label: 'Projects Completed', icon: <FiAward size={20} /> },
    // { number: '3rd', label: 'Year B.Tech', icon: <FiTrendingUp size={20} /> },
    // { number: '4+', label: 'Years Experience', icon: <FiUser size={20} /> }
  ];

  return (
    <section id="about" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
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
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 animate-pulse-gentle"></div>
                <FiUser size={80} className="text-white sm:w-24 sm:h-24 relative z-10" />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                <span className="text-white font-bold text-base sm:text-lg">4+</span>
              </div>
            </div>

            {/* Bio Text */}
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
                Motivated and detail-oriented Computer Science undergraduate with strong skills in software development, problem-solving, and teamwork. Passionate about building scalable web applications and solving real-world challenges through technology.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
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
                className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                      <p className="text-sm sm:text-base text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-6 sm:pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="text-purple-400 mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.icon}
              </div>
              </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 