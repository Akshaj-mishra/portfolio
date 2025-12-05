import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../assets/personal';

interface SkillCategory {
  [key: string]: typeof personalData.skills;
}

const Skills: React.FC = () => {
  const { skills } = personalData;

  // Group skills by category
  const categorizedSkills: SkillCategory = skills.reduce((acc: SkillCategory, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" },
  };

  return (
    <section id="skills" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-light-accent dark:text-dark-accent">Skills</span>
      </motion.h2>

      {Object.entries(categorizedSkills).map(([category, skillList], index) => (
        <motion.div
          key={category}
          className="mb-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-light-text dark:text-dark-text border-b border-light-card dark:border-dark-card pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillList.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md flex flex-col items-center justify-center space-y-3 transform hover:-translate-y-2 transition-transform duration-300 border border-light-card dark:border-dark-card"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
              >
                {skill.logo && <skill.logo className="h-10 w-10 text-light-accent dark:text-dark-accent" />}
                <p className="text-lg font-medium text-light-text dark:text-dark-text">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Skills;
