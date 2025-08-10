import { useTheme } from '../contexts/ThemeContext';

export const useThemeStyles = () => {
  const { isDarkMode } = useTheme();

  const getThemeClasses = (lightClasses, darkClasses) => {
    return isDarkMode ? darkClasses : lightClasses;
  };

  const themeStyles = {
    // Background styles
    background: {
      primary: getThemeClasses('bg-white', 'bg-slate-900'),
      secondary: getThemeClasses('bg-gray-50', 'bg-slate-800'),
      card: getThemeClasses('bg-white shadow-lg border border-gray-200', 'bg-slate-800 shadow-xl'),
      gradient: getThemeClasses(
        'bg-gradient-to-br from-blue-50 via-white to-purple-50',
        'bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20'
      )
    },

    // Text styles
    text: {
      primary: getThemeClasses('text-slate-800', 'text-white'),
      secondary: getThemeClasses('text-slate-600', 'text-slate-300'),
      muted: getThemeClasses('text-slate-500', 'text-slate-400'),
      accent: getThemeClasses('text-purple-600', 'text-purple-400')
    },

    // Border styles
    border: {
      primary: getThemeClasses('border-gray-200', 'border-slate-700'),
      secondary: getThemeClasses('border-gray-300', 'border-slate-600')
    },

    // Button styles
    button: {
      primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700',
      secondary: getThemeClasses(
        'bg-gray-100 text-slate-800 hover:bg-gray-200',
        'bg-slate-700 text-white hover:bg-slate-600'
      )
    },

    // Navigation styles
    nav: {
      background: getThemeClasses('bg-white/90', 'bg-slate-900/90'),
      text: getThemeClasses('text-slate-600', 'text-slate-300'),
      hover: getThemeClasses('hover:text-purple-600', 'hover:text-purple-400')
    }
  };

  return { themeStyles, getThemeClasses, isDarkMode };
};