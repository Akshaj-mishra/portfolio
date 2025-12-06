import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Sparkles, Cpu, Code, Brain, Rocket } from 'lucide-react';
import { personalData } from '../assets/personal';

const Hero: React.FC = () => {
  const { name, title, shortAbout, profilePhotoUrl, socialLinks, contactEmail } = personalData;
  const [isHovered, setIsHovered] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const controls = useAnimation();

  // Extract titles from your existing data
  const titles = [
    "Full Stack Developer | AI Enthusiast",
    "MERN Stack Expert",
    "Problem Solver",
    "Open Source Contributor",
    "AI & Machine Learning"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
      });
    };
    sequence();
  }, [controls]);

  // Use your existing social links
  const socialButtons = socialLinks.map(link => {
    const iconMap: Record<string, React.ReactNode> = {
      'GitHub': <Github className="h-6 w-6" />,
      'LinkedIn': <Linkedin className="h-6 w-6" />,
      'Gmail': <Mail className="h-6 w-6" />
    };

    const colorMap: Record<string, string> = {
      'GitHub': 'bg-gray-800 hover:bg-gray-900',
      'LinkedIn': 'bg-blue-600 hover:bg-blue-700',
      'Gmail': 'bg-red-500 hover:bg-red-600'
    };

    return {
      name: link.name,
      url: link.url,
      icon: iconMap[link.name] || <Github className="h-6 w-6" />,
      color: colorMap[link.name] || 'bg-gray-800 hover:bg-gray-900'
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Welcome Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-blue-500 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            >
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {name.split(' ')[0]}
              </span>
              <span className="block text-gray-900 dark:text-white">
                {name.split(' ')[1]}
              </span>
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              variants={itemVariants}
              className="mb-6 h-12 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                >
                  {titles[currentTitleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              {shortAbout}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <span className="flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  View Projects
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {socialButtons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center w-12 h-12 ${social.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                  aria-label={`Visit my ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70 blur-md" />
                <img
                  src={profilePhotoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face"}
                  alt={`${name}'s profile`}
                  className="relative w-full h-full rounded-full object-cover border-8 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;