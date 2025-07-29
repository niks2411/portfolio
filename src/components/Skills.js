import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiServer, FiGitBranch,
  FiLayout
} from 'react-icons/fi';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'MySQL', level: 75, category: 'Database' },
    { name: 'C++', level: 80, category: 'Language' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' }
  ];

  const categories = [
    { name: 'Frontend', icon: <FiLayout />, color: 'from-blue-500 to-blue-600' },
    { name: 'Backend', icon: <FiServer />, color: 'from-green-500 to-green-600' },
    { name: 'Database', icon: <FiDatabase />, color: 'from-purple-500 to-purple-600' },
    { name: 'Languages', icon: <FiCode />, color: 'from-orange-500 to-orange-600' },
    { name: 'Tools', icon: <FiGitBranch />, color: 'from-red-500 to-red-600' }
  ];

  const additionalSkills = [
    'Bootstrap', 'Tableau', 'Python', 'Firebase', 'REST APIs', 'JWT'
  ];

  return (
    <section id="skills" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
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
            Technical <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            My expertise in various technologies and tools for building modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/50"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-xs sm:text-sm text-slate-300">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2 sm:h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full shimmer-effect"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            Skill Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-purple-500/50"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mx-auto mb-3 sm:mb-4`}>
                  {category.icon}
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  {category.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 