import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Certificates from './components/Certificate';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main className="relative overflow-hidden">
        {/* Background gradient overlay for smooth blending */}
        <div className="fixed inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-purple-50/30 dark:from-gray-900/30 dark:via-transparent dark:to-gray-900/30 pointer-events-none" />
        
        {/* Sections with smooth transitions */}
        <div className="relative z-10">
          {/* Hero - No background needed as it has its own */}
          <Hero />
          
          {/* Skills - With subtle gradient blend */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-gray-900/50 pointer-events-none" />
            <Skills />
          </div>
          
          {/* Projects - With subtle gradient blend */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-800/50 pointer-events-none" />
            <Projects />
          </div>
          
          {/* Academics - With subtle gradient blend */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-gray-900/50 pointer-events-none" />
            <Academics />
          </div>
          
          {/* Certificates - With subtle gradient blend */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-800/50 pointer-events-none" />
            <Certificates />
          </div>
          
          {/* Profiles - With subtle gradient blend */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-gray-900/50 pointer-events-none" />
            <Profiles />
          </div>
          
          {/* Contact - With subtle gradient blend */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-800/50 pointer-events-none" />
            <Contact />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;