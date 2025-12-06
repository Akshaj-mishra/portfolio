import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className="relative p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="relative h-6 w-6">
        <motion.div
          initial={false}
          animate={{
            rotate: isDarkMode ? 0 : 180,
            scale: isDarkMode ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            rotate: isDarkMode ? -180 : 0,
            scale: isDarkMode ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <Sun className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default DarkModeToggle;