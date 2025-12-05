import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../assets/personal';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const { projects } = personalData;

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: ["-5%", "5%"],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Featured <span className="text-light-accent dark:text-dark-accent">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-light-card dark:bg-dark-card rounded-lg shadow-xl overflow-hidden group border border-light-card dark:border-dark-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="relative"
              variants={floatVariants}
              initial="initial"
              animate="animate"
              style={{ paddingBottom: "56.25%" }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="p-6"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-semibold mb-3 text-light-text dark:text-dark-text">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-light-accent dark:text-dark-accent hover:underline font-medium hover:scale-105 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5 mr-2" /> GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-light-accent dark:text-dark-accent hover:underline font-medium hover:scale-105 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
