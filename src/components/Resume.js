import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiFile, FiCalendar, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Resume = () => {
  const handleDownload = () => {
    // TODO: Replace with your actual resume file
    // For now, this is a placeholder - you can add your resume file to the public folder
    // and update this function to download it
   const link = document.createElement("a");
  link.href = "/Nikhil_mendiratta_resume.pdf";
  link.download = "Nikhil_mendiratta_resume.pdf";
  document.body.appendChild(link); // Append to DOM
  link.click();
  document.body.removeChild(link);
    // Example implementation:
    // const link = document.createElement('a');
    // link.href = '/resume.pdf'; // Add your resume file to public folder
    // link.download = 'Nikhil_Mendiratta_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    // alert('Resume download functionality ready! Add your resume file to the public folder and update this function.');
  };

  const handlePreview = () => {
     window.open("/Nikhil_mendiratta_resume.pdf", "_blank");
  };


  const resumeSections = [
    {
      title: 'Experience',
      items: [
        {
          role: 'Freelance Web Developer',
          company: 'Self-Employed',
          duration: '2023 - Present',
          description: 'Building full-stack web applications for clients using MERN stack and modern development practices.'
        },
        {
          role: 'Data Analysis Intern',
          company: 'Tech Company',
          duration: '2023',
          description: 'Performed data analysis and created visualizations using Tableau and other BI tools.'
        }
      ]
    },
    {
      title: 'Education',
      items: [
        {
          role: 'Bachelor of Technology',
          company: 'BPIT, Delhi',
          duration: '2022 - 2026',
          description: 'Computer Science Engineering with focus on software development and web technologies.'
        }
      ]
    }
  ];

  return (
    <section id="resume" className="section-padding bg-slate-800 relative overflow-hidden">
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
            My  Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Download my detailed resume to learn more about my experience and qualifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
              {/* Resume Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <FiFile size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Nikhil Mendiratta</h3>
                    <p className="text-primary-100">Web Developer & Data Analyst</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <FiMail size={16} />
                    <span>nikhilmendiratta2003@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiPhone size={16} />
                    <span>+91 8920389123</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiMapPin size={16} />
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>

              {/* Resume Content */}
              <div className="p-6">
                {resumeSections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-8">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white mr-3">
                        <FiFile size={16} />
                      </div>
                      {section.title}
                    </h4>

                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-l-4 border-primary-500 pl-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h5 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                              {item.role}
                            </h5>
                            <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                              <FiCalendar size={14} />
                              <span>{item.duration}</span>
                            </div>
                          </div>
                          <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                            {item.company}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Download Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiDownload size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  Download Resume
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Get the complete version of my resume in PDF format
                </p>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="w-full button-primary flex items-center justify-center space-x-2"
                >
                  <FiDownload size={20} />
                  <span>Download PDF</span>
                </motion.button>


                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePreview}
                  className="w-full button-secondary flex items-center justify-center space-x-2"
                >
                  <FiEye size={20} />
                  <span>Preview</span>
                </motion.button>

              </div>
            </div>

            {/* Skills Summary */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">
                Skills Summary
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Frontend</span>
                    <span className="text-slate-600 dark:text-slate-400">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Backend</span>
                    <span className="text-slate-600 dark:text-slate-400">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Database</span>
                    <span className="text-slate-600 dark:text-slate-400">80%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Data Analysis</span>
                    <span className="text-slate-600 dark:text-slate-400">75%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
              <p className="text-primary-100 mb-4">
                Ready to work together? Let's discuss your project requirements.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 