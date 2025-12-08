import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Activity, Mail } from 'lucide-react';
import { personalData } from '../assets/personal';

const Profiles: React.FC = () => {
  const { socialLinks, contactEmail } = personalData;
  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);

  const enhancedProfiles = socialLinks.map((profile, index) => {
    // For Gmail, create a proper mailto URL with subject and body if desired
    let processedUrl = profile.url;
    let isGmail = false;
    
    if (profile.name === 'Gmail') {
      isGmail = true;
      // Extract email from the URL (remove mailto: if present)
      const email = profile.url.replace('mailto:', '');
      // Create a proper mailto URL with subject and optional body
      processedUrl = `mailto:${email}?subject=Portfolio Inquiry&body=Hi Akshaj, I came across your portfolio and wanted to connect...`;
    }

    const baseProfile = {
      ...profile,
      url: processedUrl,
      color: '',
      gradient: '',
      description: '',
      stats: { value: '', label: '' },
      isGmail // Add this flag
    };

    switch (profile.name) {
      case 'GitHub':
        return {
          ...baseProfile,
          color: 'bg-black', 
          gradient: 'from-gray-900 to-black',
          description: 'Code repositories and projects',
          stats: { value: '15+', label: 'Repos' }
        };
      case 'LinkedIn':
        return {
          ...baseProfile,
          color: 'bg-blue-600',
          gradient: 'from-blue-600 to-blue-700',
          description: 'Professional network',
          stats: { value: '500+', label: 'Connections' }
        };
      case 'Gmail':
        return {
          ...baseProfile,
          color: 'bg-red-500',
          gradient: 'from-red-500 to-red-600',
          description: 'Direct email contact',
          stats: { value: '24h', label: 'Response' }
        };
      default:
        return {
          ...baseProfile,
          color: 'bg-purple-600',
          gradient: 'from-purple-600 to-purple-700',
          description: 'Social profile',
          stats: { value: 'Active', label: 'Status' }
        };
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const floatVariants = {
    float: {
      y: ["0%", "-10%", "0%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Function to handle Gmail click with better mailto formatting
  const handleGmailClick = (e: React.MouseEvent, profileUrl: string) => {
    // For Gmail, we want to open the default mail client
    // No need to prevent default or stop propagation since we want the browser to handle it
    console.log('Opening email client with:', profileUrl);
    // The browser will handle the mailto: link automatically
  };

  return (
    <section id="profiles" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Connect With <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find me on these platforms. Let's connect and create something amazing!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {enhancedProfiles.map((profile, index) => {
            const IconComponent = profile.icon;
            const isGmail = profile.name === 'Gmail';
            
            return (
              <motion.div
                key={profile.name}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                whileTap="tap"
                onMouseEnter={() => setHoveredProfile(profile.name)}
                onMouseLeave={() => setHoveredProfile(null)}
                onClick={() => setActiveProfile(profile.name)}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-10`}
                    animate={{
                      rotate: hoveredProfile === profile.name ? [0, 5, -5, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        variants={floatVariants}
                        animate="float"
                        className={`p-4 rounded-xl ${profile.color} text-white shadow-lg`}
                      >
                        <IconComponent className="h-8 w-8" />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: hoveredProfile === profile.name ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                      >
                        {isGmail ? (
                          <Mail className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                        ) : (
                          <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                        )}
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {profile.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                      {profile.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                          <Activity className="h-4 w-4 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Status</div>
                          <div className="font-semibold text-gray-900 dark:text-white">{profile.stats.label}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Response</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{profile.stats.value}</div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <motion.a
                      href={profile.url}
                      target={isGmail ? '_self' : '_blank'}
                      rel={isGmail ? '' : 'noopener noreferrer'}
                      className={`flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium text-white ${profile.color} hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        if (isGmail) {
                          // For Gmail, we don't need to prevent default
                          // The browser will handle the mailto: link
                          handleGmailClick(e, profile.url);
                        } else {
                          // For other links, prevent event bubbling to parent
                          e.stopPropagation();
                        }
                      }}
                    >
                      <span>{isGmail ? 'Send Email' : 'Visit Profile'}</span>
                      {isGmail ? <Mail className="ml-2 h-4 w-4" /> : <ExternalLink className="ml-2 h-4 w-4" />}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {activeProfile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveProfile(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const profile = enhancedProfiles.find(p => p.name === activeProfile);
                  if (!profile) return null;
                  const IconComponent = profile.icon;
                  const isGmail = profile.name === 'Gmail';

                  return (
                    <>
                      <div className={`p-8 ${profile.color} rounded-t-2xl`}>
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-white/20 rounded-xl">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                            <p className="text-white/80">{profile.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                              Platform
                            </h4>
                            <p className="text-gray-900 dark:text-white font-medium">{profile.name}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
                              <div className="text-xl font-bold text-gray-900 dark:text-white">{profile.stats.label}</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <div className="text-sm text-gray-500 dark:text-gray-400">Response</div>
                              <div className="text-xl font-bold text-gray-900 dark:text-white">{profile.stats.value}</div>
                            </div>
                          </div>

                          {isGmail && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                Clicking "Send Email" will open your default email client with my email pre-filled.
                              </p>
                            </div>
                          )}

                          <div className="pt-6">
                            <a
                              href={profile.url}
                              target={isGmail ? '_self' : '_blank'}
                              rel={isGmail ? '' : 'noopener noreferrer'}
                              className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${profile.gradient} text-white font-medium rounded-lg hover:shadow-lg transition-shadow`}
                              onClick={(e) => {
                                if (!isGmail) {
                                  e.stopPropagation();
                                }
                              }}
                            >
                              {isGmail ? <Mail className="h-5 w-5 mr-2" /> : <ExternalLink className="h-5 w-5 mr-2" />}
                              {isGmail ? 'Send Email' : `Open ${profile.name}`}
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Profiles;