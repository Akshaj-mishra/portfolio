import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../assets/personal';

const Profiles: React.FC = () => {
  const { socialLinks } = personalData;

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.1, backgroundColor: "#63B3ED", color: "#FFFFFF", transition: { duration: 0.2 } },
  };

  return (
    <section id="profiles" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-light-accent dark:text-dark-accent">Profiles</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {socialLinks.map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-light-card dark:bg-dark-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 group"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {profile.icon && <profile.icon className="h-12 w-12 text-light-accent dark:text-dark-accent mb-3 group-hover:text-white transition-colors duration-200" />}
            <p className="text-lg font-semibold text-light-text dark:text-dark-text group-hover:text-white transition-colors duration-200">{profile.name}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Profiles;
