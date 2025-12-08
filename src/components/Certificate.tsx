import React, { useState, useEffect, useContext } from 'react'; // 1. Added useContext
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, X, Eye, Download, Maximize2 } from 'lucide-react';
import { personalData } from '../assets/personal';
import { AppContext } from '../context/Appcontext'; // 2. Import your Context

// Define certificate type based on your data structure
interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

const Certificates: React.FC = () => {
  // 3. Consume the Context
  const context = useContext(AppContext);
  
  // Safety check to ensure context exists
  if (!context) {
    throw new Error("Certificates must be used within an AppContextProvider");
  }
  
  const { setshowheader } = context;

  // Get certificates from personalData - using type assertion for safety
  const certificates = (personalData.certificates || []) as Certificate[];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'stack'>('grid');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // 4. NEW EFFECT: Toggle Header visibility based on fullscreen state
  useEffect(() => {
    if (isFullscreen) {
      setshowheader(false); // Hide header when fullscreen opens
    } else {
      setshowheader(true);  // Show header when fullscreen closes
    }

    // Cleanup: Ensure header comes back if this component unmounts unexpectedly
    return () => {
      setshowheader(true);
    };
  }, [isFullscreen, setshowheader]);

  const nextCertificate = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const getVisibleCertificates = () => {
    if (viewMode === 'grid' || certificates.length === 0) return certificates;
    
    const result = [];
    for (let i = 0; i < Math.min(3, certificates.length); i++) {
      const index = (activeIndex + i) % certificates.length;
      result.push({ ...certificates[index], offset: i * 20 });
    }
    return result;
  };

  const openFullscreen = (imageUrl: string) => {
    setFullscreenImage(imageUrl);
    setIsFullscreen(true); // This triggers the useEffect above to hide header
    // Disable body scroll when fullscreen is open
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    setIsFullscreen(false); // This triggers the useEffect above to show header
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  };

  const downloadCertificate = (imageUrl: string, title: string) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}_certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle ESC key press to close fullscreen
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeFullscreen();
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isFullscreen]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const stackCardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      y: custom * 20,
      scale: 1 - custom * 0.05,
      transition: {
        duration: 0.5,
        delay: custom * 0.1
      }
    })
  };

  // If no certificates, show empty state
  if (certificates.length === 0) {
    return (
      <section id="certificates" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              No certifications to display yet. Check back soon!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and accreditations earned through dedicated learning
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        {certificates.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-700 shadow-md text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('stack')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'stack'
                    ? 'bg-white dark:bg-gray-700 shadow-md text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                }`}
              >
                Stack View
              </button>
            </div>
          </motion.div>
        )}

        {/* Certificates Display */}
        {viewMode === 'grid' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                variants={cardVariants}
                custom={index}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/20 cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{
                        // Aligned to top center to ensure the main content is visible, cutting off bottom if needed
                        objectPosition: 'top center'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                      Verified
                    </span>
                  </div>
                  {/* Fullscreen Button Overlay */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openFullscreen(cert.imageUrl);
                    }}
                    className="absolute top-4 left-4 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Content - Footer Actions Removed */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded whitespace-nowrap ml-2">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Stack View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-[500px] max-w-3xl mx-auto"
          >
            {getVisibleCertificates().map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                custom={index}
                variants={stackCardVariants}
                initial="hidden"
                animate="visible"
                className="absolute w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden cursor-pointer border border-white/20 dark:border-gray-700/20"
                style={{
                  left: `${index * 40}px`,
                  zIndex: 10 - index,
                  filter: `brightness(${1 - index * 0.1})`
                }}
                onClick={() => index === 0 && setSelectedCert(cert)}
                whileHover={index === 0 ? { scale: 1.02 } : {}}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: 'top center'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Fullscreen Button for Stack View */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openFullscreen(cert.imageUrl);
                    }}
                    className="absolute top-4 left-4 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full transition-all hover:scale-110"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </button>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-gray-200 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full hover:shadow-lg transition-shadow"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Arrows for Stack View */}
            {certificates.length > 1 && (
              <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 z-20">
                <button
                  onClick={prevCertificate}
                  className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all border border-white/20 dark:border-gray-700/20"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextCertificate}
                  className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all border border-white/20 dark:border-gray-700/20"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Certificate Details Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={selectedCert.imageUrl}
                      alt={selectedCert.title}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: 'top center'
                      }}
                    />
                  </div>
                  {/* Fullscreen Button in Details Modal */}
                  <button
                    onClick={() => openFullscreen(selectedCert.imageUrl)}
                    className="absolute top-4 left-4 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full transition-all hover:scale-110"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </button>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 border border-white/20 dark:border-gray-700/20"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedCert.issuer}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        Issue Date
                      </h4>
                      <p className="text-gray-900 dark:text-white">{selectedCert.date}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        Issuing Organization
                      </h4>
                      <p className="text-gray-900 dark:text-white">{selectedCert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => openFullscreen(selectedCert.imageUrl)}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <Maximize2 className="h-5 w-5 mr-2" />
                      View Fullscreen
                    </button>
                    <button
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => {
                        downloadCertificate(selectedCert.imageUrl, selectedCert.title);
                      }}
                    >
                      <Download className="h-5 w-5 mr-2 inline" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fullscreen Image Modal - Full image without cropping */}
        <AnimatePresence>
          {isFullscreen && fullscreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[60] flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img
                  src={fullscreenImage}
                  alt="Certificate Fullscreen"
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Close Button */}
                <button
                  onClick={closeFullscreen}
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all hover:scale-110 border border-white/20"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                {/* Download Button */}
                <button
                  onClick={() => {
                    if (fullscreenImage) {
                      const link = document.createElement('a');
                      link.href = fullscreenImage;
                      link.download = 'certificate_fullscreen.jpg';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }
                  }}
                  className="absolute bottom-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all hover:scale-110 border border-white/20"
                  title="Download"
                >
                  <Download className="h-6 w-6 text-white" />
                </button>

                {/* Escape hint */}
                <div className="absolute bottom-6 left-6 text-white/70 text-sm">
                  Press ESC or click X to close
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;