import React, { useEffect, useState } from 'react';
import { Sparkle, Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const sections = ['Hero', 'Skills', 'Projects', 'Academics', 'Certificates', 'Profiles', 'Contact'];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 1. Initialize Theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // 2. Handle Scroll (Appearance & Scroll Spy)
    const handleScroll = () => {
      // Toggle sticky header style
      setIsScrolled(window.scrollY > 10);

      // Scroll Spy: Highlight active section based on scroll position
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // 3. Smooth Scroll Function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault(); // Stop default "jump"
    setIsMobileMenuOpen(false); // Close mobile menu if open
    setActiveSection(section);

    const targetId = section.toLowerCase();
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 85; // Height of your fixed header to prevent covering content
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg dark:shadow-xl py-3' 
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('Hero');
            }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <Sparkle className="h-9 w-9 text-blue-600 dark:text-blue-400 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Akshaj Mishra
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-1 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1.5 shadow-inner">
              {sections.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 block ${
                      activeSection === item
                        ? 'text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {activeSection === item && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg shadow-blue-500/30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 inset-x-0 z-40 md:hidden"
          >
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 shadow-2xl">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <ul className="space-y-2">
                  {sections.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: sections.indexOf(item) * 0.05 }}
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                          activeSection === item
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span>{item}</span>
                        {activeSection === item && (
                          <motion.div
                            animate={{ rotate: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            <Sparkle className="h-5 w-5" />
                          </motion.div>
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;