import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Users, Star, Activity, TrendingUp } from 'lucide-react';
import { personalData } from '../assets/personal';

const Profiles: React.FC = () => {
  const { socialLinks } = personalData;
  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);

  // Enhance social links with additional data
  const enhancedProfiles = socialLinks.map((profile, index) => {
    const baseProfile = {
      ...profile,
      color: '',
      gradient: '',
      description: '',
      stats: { value: '', label: '' }
    };

    // Add platform-specific data
    switch (profile.name) {
      case 'GitHub':
        return {
          ...baseProfile,
          color: 'bg-gray-800',
          gradient: 'from-gray-800 to-gray-900',
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
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
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

  return (
    <section id="profiles" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Profile Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {enhancedProfiles.map((profile, index) => {
            const IconComponent = profile.icon;
            
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
                {/* Main Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-10`}
                    animate={{
                      rotate: hoveredProfile === profile.name ? [0, 5, -5, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Card Content */}
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
                        <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {profile.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                      {profile.description}
                    </p>

                    {/* Stats */}
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

                  {/* Visit Button */}
                  <div className="px-6 pb-6">
                    <motion.a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium text-white ${profile.color} hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Visit Profile</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Platform Activity
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  1k+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Total Connections
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg"
              >
                <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                  <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Active Profiles
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg"
              >
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  24h
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Avg. Response
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg"
              >
                <div className="inline-flex items-center justify-center p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                  <Star className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  4.8
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Satisfaction
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Profile Detail Modal */}
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
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const profile = enhancedProfiles.find(p => p.name === activeProfile);
                  if (!profile) return null;
                  const IconComponent = profile.icon;

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

                          <div className="pt-6">
                            <a
                              href={profile.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
                            >
                              <ExternalLink className="h-5 w-5 mr-2" />
                              Open {profile.name}
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