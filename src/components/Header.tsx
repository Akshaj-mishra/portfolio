import React from 'react';
import { Sparkle } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="sticky top-0 z-50 bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-md shadow-sm dark:shadow-lg transition-colors duration-300 py-4"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sparkle className="h-8 w-8 text-light-accent dark:text-dark-accent" />
          <span className="text-xl font-bold text-light-text dark:text-dark-text">Akshaj Mishra</span>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-6">
            {['Hero', 'Skills', 'Academics', 'Projects', 'Profiles', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <DarkModeToggle />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
