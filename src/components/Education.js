import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin, FiBook } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Bhagwan Parshuram Institute of Technology (GGSIPU)',
      duration: 'Nov 2022 - Jun 2026',
      location: 'New Delhi, India',
      description: 'Currently in 3rd year pursuing B.Tech in Computer Science with focus on software development, algorithms, and modern web technologies.',
      achievements: [
        '3rd Year Student',
        'Active participation in technical events',
        'Learning modern development practices',
        'Strong foundation in programming'
      ],
      gpa: 'Ongoing',
      status: 'In Progress'
    },
    {
      degree: '12th CBSE',
      institution: 'CBSE Board',
      duration: '2022',
      location: 'India',
      description: 'Completed 12th standard with excellent academic performance in Science stream.',
      achievements: [
        'Science Stream',
        'Mathematics & Computer Science',
        'Strong analytical skills',
        'Excellent academic record'
      ],
      gpa: 'Completed',
      status: 'Completed'
    },
    {
      degree: '10th CBSE',
      institution: 'CBSE Board',
      duration: '2020',
      location: 'India',
      description: 'Completed 10th standard with strong foundation in core subjects.',
      achievements: [
        'All-round development',
        'Strong academic base',
        'Foundation for higher studies',
        'Consistent performance'
      ],
      gpa: 'Completed',
      status: 'Completed'
    }
  ];

  const certifications = [
    {
      name: 'MERN Stack Development',
      issuer: 'Online Platform',
      date: '2023',
      description: 'Complete full-stack development certification'
    },
    {
      name: 'Data Analysis with Tableau',
      issuer: 'Tableau Official',
      date: '2023',
      description: 'Business intelligence and data visualization'
    },
    {
      name: 'React.js Advanced Concepts',
      issuer: 'Udemy',
      date: '2023',
      description: 'Advanced React patterns and best practices'
    }
  ];

  return (
    <section id="education" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Education</span> & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My academic journey and professional certifications that shape my expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center">
              <FiBook className="mr-3 text-primary-500" size={28} />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300"></div>
                  
                  <div className="relative bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-12">
                    {/* Timeline Dot */}
                    <div className="absolute -left-6 top-6 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                                             <FiBook size={20} className="text-white" />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                        {edu.status}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center space-x-1">
                          <FiCalendar size={14} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiMapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiAward size={14} />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center">
              <FiAward className="mr-3 text-primary-500" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                      {cert.name}
                    </h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-semibold mb-3">Continuous Learning</h4>
              <p className="text-primary-100 mb-4">
                I believe in continuous learning and staying updated with the latest technologies and industry best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Online Courses', 'Tech Blogs', 'Open Source', 'Hackathons'].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 