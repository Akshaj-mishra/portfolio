import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../assets/personal';
import { GraduationCap } from 'lucide-react';

const Academics: React.FC = () => {
  const { academics } = personalData;

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  return (
    <section id="academics" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-light-accent dark:text-dark-accent">Academics</span>
      </motion.h2>

      <div className="relative border-l-2 border-light-accent dark:border-dark-accent pl-6 ml-4 md:ml-12">
        {academics.map((academic, index) => (
          <motion.div
            key={index}
            className="mb-10 p-6 bg-light-card dark:bg-dark-card rounded-lg shadow-lg relative left-0 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute -left-9 top-0 flex items-center justify-center w-8 h-8 bg-light-accent dark:bg-dark-accent rounded-full">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-light-text dark:text-dark-text">{academic.institution}</h3>
            <p className="text-light-accent dark:text-dark-accent font-medium mb-1">{academic.degree}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{academic.year}</p>
            <p className="text-gray-700 dark:text-gray-300">{academic.details}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Academics;
