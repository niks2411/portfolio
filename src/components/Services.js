import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiSmartphone, FiDatabase, FiBarChart2, 
  FiSettings, FiShield, FiZap, FiMessageCircle 
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode size={32} />,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Node.js, and MongoDB. From concept to deployment.',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Deployment'],
      price: 'Starting from $500',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FiSmartphone size={32} />,
      title: 'Responsive Design',
      description: 'Mobile-first, responsive designs that work perfectly across all devices and screen sizes.',
      features: ['Mobile-First Design', 'Cross-Browser Compatible', 'Performance Optimized', 'SEO Friendly'],
      price: 'Starting from $300',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FiDatabase size={32} />,
      title: 'Database Solutions',
      description: 'Custom database design and optimization for both SQL and NoSQL databases.',
      features: ['Database Design', 'Query Optimization', 'Data Migration', 'Backup Solutions'],
      price: 'Starting from $400',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FiBarChart2 size={32} />,
      title: 'Data Analysis',
      description: 'Business intelligence and data visualization using Tableau and other analytics tools.',
      features: ['Data Visualization', 'Business Intelligence', 'Custom Dashboards', 'Performance Reports'],
      price: 'Starting from $600',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FiSettings size={32} />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with proper documentation and testing.',
      features: ['REST APIs', 'GraphQL', 'API Documentation', 'Testing & Debugging'],
      price: 'Starting from $350',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FiShield size={32} />,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your applications.',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support'],
      price: 'Starting from $200/month',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive web development and data analysis services to bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                        <FiZap size={12} className="text-primary-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                    {service.price}
                  </span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="w-full button-primary"
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why Choose Me?
              </h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                I combine technical expertise with a passion for creating exceptional user experiences. 
                Every project is approached with attention to detail, clean code practices, and a focus on delivering value.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <FiZap size={20} className="text-yellow-300" />
                  <span className="text-sm">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiShield size={20} className="text-yellow-300" />
                  <span className="text-sm">Quality Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMessageCircle size={20} className="text-yellow-300" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiSettings size={20} className="text-yellow-300" />
                  <span className="text-sm">Maintenance</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Ready to Start?</h4>
                <p className="text-primary-100 mb-6">
                  Let's discuss your project requirements and create something amazing together.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300"
                >
                  Start Project
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 