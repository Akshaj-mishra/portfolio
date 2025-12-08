import React, { useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Certificates from './components/Certificate';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AppContext } from './context/Appcontext';

const App: React.FC = () => {
  const context = useContext(AppContext);

  // 1. Safety Check: prevent crash if context is null
  if (!context) {
    return <div>Loading...</div>;
  }

  // Make sure your AppContext actually has 'showheader' defined in its interface!
  const { showheader } = context;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* 2. Logic Fix: Condition goes FIRST */}
      {showheader && <Header />}
      
      <main className="relative overflow-hidden">
        {/* Background gradient overlay for smooth blending */}
        <div className="fixed inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-purple-50/30 dark:from-gray-900/30 dark:via-transparent dark:to-gray-900/30 pointer-events-none" />
        
        {/* Sections with smooth transitions */}
        <div className="relative z-10">
          
          <div id="hero">
            <Hero />
          </div>
          
          <div id="skills" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-gray-900/50 pointer-events-none" />
            <Skills />
          </div>
          
          <div id="projects" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-800/50 pointer-events-none" />
            <Projects />
          </div>
          
          <div id="academics" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-gray-900/50 pointer-events-none" />
            <Academics />
          </div>
          
          <div id="certificates" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-800/50 pointer-events-none" />
            <Certificates />
          </div>
          
          <div id="profiles" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-gray-900/50 pointer-events-none" />
            <Profiles />
          </div>
          
          <div id="contact" className="relative">
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