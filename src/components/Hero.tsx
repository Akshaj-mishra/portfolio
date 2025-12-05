import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../assets/personal';

const Hero: React.FC = () => {
  const { name, title, shortAbout, profilePhotoUrl } = personalData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] text-center md:text-left py-16 px-4">
      <motion.div
        className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-light-text dark:text-dark-text" variants={itemVariants}>
          Hi, my self <span className="text-light-accent dark:text-dark-accent">{name}</span>
        </motion.h1>
        <motion.p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300" variants={itemVariants}>
          {title}
        </motion.p>
        <motion.p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400" variants={itemVariants}>
          {shortAbout}
        </motion.p>
      </motion.div>
      <motion.div
        className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
      >
        <img
          src={profilePhotoUrl}
          alt={`${name}'s profile`}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-light-accent dark:border-dark-accent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
