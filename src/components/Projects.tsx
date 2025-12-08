import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, Code, Brain, Server, Database, CheckCircle } from 'lucide-react';
import { personalData } from '../assets/personal';

const Projects: React.FC = () => {
  const { projects } = personalData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('plant')) return <Brain className="h-6 w-6" />;
    if (title.toLowerCase().includes('safe')) return <Brain className="h-6 w-6" />;
    if (title.toLowerCase().includes('portfolio')) return <Code className="h-6 w-6" />;
    return <Server className="h-6 w-6" />;
  };

  // Get tech badges for a project
  const getTechBadges = (project: typeof projects[0]) => {
    if (project.techStack) {
      return project.techStack.slice(0, 3); // Show only first 3 tech badges
    }
    return [];
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full bg-blue-500 text-white">
                    {getProjectIcon(project.title)}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {getTechBadges(project).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Project Points Preview (show first 2 points) */}
                <div className="mb-4">
                  {project.points && project.points.slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-start mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                        {point}
                      </span>
                    </div>
                  ))}
                  {project.points && project.points.length > 2 && (
                    <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      +{project.points.length - 2} more features
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      View Code
                    </a>
                    
                    {/* Live Link Button - Only show if not '#' */}
                    {project.liveLink && project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 dark:text-green-400 hover:underline"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack in Modal */}
                  {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Detailed Project Points */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                      Key Features & Details:
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.points && selectedProject.points.map((point, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      View on GitHub
                    </a>
                    
                    {/* Conditional Live Link Button */}
                    {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                    
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;