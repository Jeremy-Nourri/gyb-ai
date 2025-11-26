import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RocketLauncher: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show rocket when scrolled past the hero section (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ y: 200, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 200, opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-orange-600 to-red-500 shadow-lg shadow-orange-500/40 border border-white/20 cursor-pointer overflow-hidden"
          aria-label="Retour en haut"
        >
          <div className="relative z-10">
            <Rocket className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor" />
          </div>
          
          {/* Animated engine glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-300 blur-md rounded-full opacity-0 group-hover:opacity-80 animate-pulse transition-opacity duration-300" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default RocketLauncher;