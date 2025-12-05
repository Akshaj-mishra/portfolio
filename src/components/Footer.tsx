import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
      className="bg-light-card dark:bg-dark-card py-6 text-center text-gray-600 dark:text-gray-400 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Akshaj Mishra . All rights reserved.</p>
        <p className="text-sm mt-1">Made with ❤️ and lots of coffee.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
