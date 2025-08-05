import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, FiExternalLink, FiCode, FiDatabase, 
  FiSmartphone, FiZap 
} from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Selected projects only (1st, 2nd, 4th, 5th)
  const allProjects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'frontend',
      github: 'https://github.com/niks2411/portfolio',
      live: 'https://nikhilmendiratta.vercel.app/',
      featured: false
    },
   
    {
      id: 2,
      title: 'Leofitt Corporate Programs',
      description: 'The gym will collabrate with companies for programs. this is B2B model',
      image: 'https://media.istockphoto.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=0&k=20&c=VnTSyKHKl-YFOmpFqW_hNyIlis0sFksfcR9Ei3-r29s=',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion','MERN'],
      category: 'fullstack',
      github: 'https://github.com/niks2411/leofit',
      live: 'https://leofit.vercel.app/',
      featured: true
    },
    
    {
      id: 5,
      title: 'Diet Project',
      description: 'Here Diet will be provided on Daily Basis according to Customer usecase',
      image: 'https://imgs.search.brave.com/nZswr-4IKk3r-baOp6J6PfmCAkB-GTrFJk3lzYwZiF0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by95b3VuZy13/b21hbi1kaWV0aWNp/YW4td3JpdGluZy1v/bi0yNjBudy0yMjM1/Njg3MzQ1LmpwZw',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React','Tailwind'],
      category: 'fullstack',
      github: 'https://github.com/niks2411/diet-website',
      live: 'https://www.thediet4u.com/',
      featured: false
    }, {
      id: 3,
      title: 'Resume Screening',
      description: 'A very efficient website where you can know about your Resume from Ats score to format',
      image: 'https://imgs.search.brave.com/w0Z6ov5IK9tHm8Vlbl1kI3STnBLfj4df_37GLRnpuoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib3Vs/b3NvbHV0aW9ucy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDIvd2hhdC1p/cy1hdXRvbWF0ZWQt/cmVzdW1lLXNjcmVl/bmluZy1zdHJhdGVn/aWVzLWJlbmVmaXRz/LWFuZC1waXRmYWxs/cy53ZWJw',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com/niks2411/resume-screening',
      live: '#',
      featured: true
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-slate-900 relative overflow-hidden">
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
            My Featured Work
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Selected projects that showcase my expertise in web development and problem-solving.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <FiZap className="mr-1" size={12} />
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:bg-slate-600/50 hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300 flex items-center"
                        title="View Code"
                      >
                        <FiGithub size={18} className="mr-1" />
                        <span className="text-xs">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                          target="_blank" // 👈 opens in new tab
                          rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300 flex items-center"
                        title="Live Demo"
                      >
                        <FiExternalLink size={18} className="mr-1" />
                        <span className="text-xs">Demo</span>
                      </motion.a>
                    </div>
                    <div className="text-slate-400 text-xs flex items-center">
                      {project.category === 'fullstack' && <FiCode className="mr-1" size={14} />}
                      {project.category === 'frontend' && <FiSmartphone className="mr-1" size={14} />}
                      {project.category === 'backend' && <FiDatabase className="mr-1" size={14} />}
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-slate-300 mb-6">
            Want to see more? Check out my GitHub or let's discuss your project!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="https://github.com/niks2411"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center space-x-2 bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl border border-slate-700 hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FiGithub size={20} />
              <span>View All Projects</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FiZap size={20} />
              <span>Get In Touch</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;