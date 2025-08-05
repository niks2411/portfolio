import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageCircle,
  FiGithub, FiLinkedin} from 'react-icons/fi';
import LoadingSpinner from './LoadingSpinner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'nikhilmendiratta2003@gmail.com',
      link: 'mailto:nikhilmendiratta2003@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+91 8920389123',
      link: 'tel:+918920389123'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'New Delhi, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/niks2411', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/nikhil-mendiratta-20a2b7297/', label: 'LinkedIn' },
    // { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    // { icon: <FiInstagram />, href: '#', label: 'Instagram' },
    // { icon: <FiGlobe />, href: '#', label: 'Website' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
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
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <FiMessageCircle className="absolute left-3 top-3 text-slate-400" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm sm:text-base resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full button-primary flex items-center justify-center space-x-2 py-3 px-6 text-sm sm:text-base font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 dark:text-green-400 text-sm sm:text-base text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 sm:p-6 bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                        {info.title}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-slate-200">
                Follow Me
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 