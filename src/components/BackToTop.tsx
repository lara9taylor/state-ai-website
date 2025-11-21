import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="
            fixed bottom-8 right-8 z-40
            w-12 h-12
            bg-[#19FF7F] hover:bg-[#19FF7F]/90
            text-black
            rounded-full
            shadow-lg shadow-[#19FF7F]/20 hover:shadow-xl hover:shadow-[#19FF7F]/30
            flex items-center justify-center
            transition-all duration-200
            hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-[#19FF7F] focus:ring-offset-2 focus:ring-offset-black
          "
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
