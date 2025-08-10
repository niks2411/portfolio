import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';

// Example component showing how to implement theme support
const ThemeExample = () => {
  const { isDarkMode } = useTheme();
  const { themeStyles, getThemeClasses } = useThemeStyles();

  return (
    <section className={`py-16 transition-colors duration-300 ${themeStyles.background.secondary}`}>
      <div className="container mx-auto px-4">
        
        {/* Method 1: Using isDarkMode directly */}
        <motion.h2 
          className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Theme Example Component
        </motion.h2>

        {/* Method 2: Using themeStyles object */}
        <div className={`p-6 rounded-lg mb-6 transition-colors duration-300 ${themeStyles.background.card}`}>
          <h3 className={`text-xl font-semibold mb-4 ${themeStyles.text.primary}`}>
            Using Theme Styles Object
          </h3>
          <p className={themeStyles.text.secondary}>
            This card uses the predefined theme styles from the useThemeStyles hook.
          </p>
        </div>

        {/* Method 3: Using getThemeClasses function */}
        <div className={`p-6 rounded-lg mb-6 transition-colors duration-300 ${
          getThemeClasses(
            'bg-white border border-gray-200 shadow-md',
            'bg-slate-800 border border-slate-700'
          )
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${
            getThemeClasses('text-slate-800', 'text-white')
          }`}>
            Using getThemeClasses Function
          </h3>
          <p className={getThemeClasses('text-slate-600', 'text-slate-300')}>
            This card uses the getThemeClasses function for custom styling.
          </p>
        </div>

        {/* Interactive elements */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.button
            className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Themed Button
          </motion.button>

          <motion.div
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              isDarkMode 
                ? 'border-purple-500 bg-purple-500/10' 
                : 'border-purple-300 bg-purple-50'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <p className={themeStyles.text.primary}>
              Hover effect with theme awareness
            </p>
          </motion.div>
        </div>

        {/* Status indicator */}
        <div className="mt-8 text-center">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            isDarkMode 
              ? 'bg-slate-700 text-slate-300' 
              : 'bg-gray-100 text-gray-700'
          }`}>
            Current theme: {isDarkMode ? 'Dark' : 'Light'} Mode
          </span>
        </div>
      </div>
    </section>
  );
};

export default ThemeExample;