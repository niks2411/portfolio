import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiDatabase, FiServer } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Gym Consultant Website (B2B)',
      description: 'A B2B platform for gym consultants to manage clients, create workout plans, and track progress.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'Full Stack',
      liveLink: '#',
      githubLink: '#',
      features: ['Consultant Dashboard', 'Client Management', 'Workout Plans', 'Business Analytics'],
      icon: <FiCode />
    },
    {
      title: 'Diet Website',
      description: 'A comprehensive website offering personalized diet plans, nutrition tracking, and healthy recipes.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'Frontend',
      liveLink: '#',
      githubLink: '#',
      features: ['Personalized Meal Plans', 'Nutrition Tracking', 'Health Monitoring', 'Consultant Booking'],
      icon: <FiDatabase />
    },
    {
      title: 'E-Commerce Platform (Full Stack)',
      description: 'A fully functional e-commerce application with cart functionality, user authentication, and payment integration using MERN stack.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      category: 'Full Stack',
      liveLink: '#',
      githubLink: '#',
      features: ['User Authentication', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard'],
      icon: <FiServer />
    },
    {
      title: 'Farmers Helpline Platform',
      description: 'A support system for farmers with crop advisory, pricing updates, and community features using MERN stack.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
      category: 'Full Stack',
      liveLink: '#',
      githubLink: '#',
      features: ['Crop Advisory', 'Price Updates', 'Community Forum', 'Real-time Data'],
      icon: <FiCode />
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing my latest work and demonstrating my skills in building modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600">
                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      className="flex-1 button-primary text-center flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <FiExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      className="flex-1 button-secondary text-center flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 