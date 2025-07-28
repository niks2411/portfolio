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
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
              className="bg-white dark:bg-slate-700 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                  {skill.name}
                </h3>
                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 sm:h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shimmer-effect"
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
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800 dark:text-slate-200">
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
                className="bg-white dark:bg-slate-700 rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mx-auto mb-3 sm:mb-4`}>
                  {category.icon}
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
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
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-800 dark:text-slate-200">
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
                className="px-3 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs sm:text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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