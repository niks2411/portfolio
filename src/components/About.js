import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiBarChart2, FiMessageCircle, FiAward, FiTrendingUp, FiLayers } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiRedux } from 'react-icons/si';

const About = () => {
  const features = [
    {
      icon: <FiCode size={24} />,
      title: 'Full Stack Development',
      description: 'Building complete web applications with modern technologies like React, Node.js, and MongoDB. Experienced in creating responsive, performant, and accessible web applications.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: 'Problem Solving',
      description: 'Strong analytical skills with a track record of solving complex challenges. 200+ problems solved on LeetCode and CodeChef with consistent performance.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <FiMessageCircle size={24} />,
      title: 'Team Collaboration',
      description: 'Experienced in Agile methodologies with excellent communication skills. Successfully collaborated on 10+ group projects with efficient version control practices.',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: <FiLayers size={24} />,
      title: 'Continuous Learning',
      description: 'Committed to staying updated with emerging technologies through courses, hackathons, and personal projects. Currently exploring Web3 and Blockchain technologies.',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed', icon: <FiAward size={20} /> },
    { number: '200+', label: 'DSA Problems Solved', icon: <FiTrendingUp size={20} /> },
    // { number: '4+', label: 'Years Experience', icon: <FiClock size={20} /> }
  ];

  const technologies = [
    { name: 'React', icon: <FaReact className="text-blue-400" size={24} />, level: '90%' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={24} />, level: '85%' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={24} />, level: '80%' },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" size={24} />, level: '95%' },
    { name: 'Python', icon: <FaPython className="text-blue-500" size={24} />, level: '75%' },
    { name: 'Databases', icon: <FaDatabase className="text-yellow-400" size={24} />, level: '85%' },
    { name: 'Firebase', icon: <SiFirebase className="text-orange-400" size={24} />, level: '70%' },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" size={24} />, level: '80%' }
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
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves turning ideas into reality through code. Below you'll find more about my skills, experience, and what drives me in this field.
          </p>
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
                I'm a Computer Science undergraduate with a passion for creating elegant solutions to complex problems. My journey in programming began with Python in high school, and since then I've expanded my skills to full-stack web development.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
                When I'm not coding, you can find me contributing to open-source projects, participating in hackathons, or exploring new technologies. I believe in the power of technology to create positive change and I'm always looking for opportunities to make an impact.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Currently pursuing B.Tech in Computer Science at Bhagwan Parshuram Institute of Technology (GGSIPU) with a CGPA of 8.5+.
              </p>
            </div>

            {/* Technology Stack */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4 text-center lg:text-left">My Tech Stack</h3>
              <div className="grid grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-2 shadow-md">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-slate-300">{tech.name}</span>
                    <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" 
                        style={{ width: tech.level }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
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

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                    <FiUser size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">B.Tech in Computer Science</h4>
                    <p className="text-slate-300">Bhagwan Parshuram Institute of Technology (GGSIPU)</p>
                    <p className="text-sm text-slate-400">2021 - 2025 | CGPA: 8.5</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                    <FiAward size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Higher Secondary Education</h4>
                    <p className="text-slate-300">Delhi Public School, Rohini</p>
                    <p className="text-sm text-slate-400">2019 - 2021 | Percentage: 92%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;