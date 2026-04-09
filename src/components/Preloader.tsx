'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to ensure boutique feeling
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#040405]"
        >
          <div className="relative overflow-hidden flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center animate-pulse-slow">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15L85 85H75L50 35L25 85H15L50 15Z" fill="#D4AF37" />
                  <rect x="38" y="65" width="24" height="2" fill="#D4AF37" />
                  <circle cx="50" cy="50" r="48" stroke="#D4AF37" stroke-width="0.5" stroke-dasharray="2 2" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
              className="h-[1px] bg-accent mt-8 overflow-hidden"
            >
              <div className="h-full w-full bg-accent/30 animate-pulse" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-jakarta text-[0.7rem] uppercase tracking-[0.3em] text-accent/60 mt-6"
            >
              Boutique Digital Atelier
            </motion.p>
          </div>

          {/* Decorative panels for the boutique 'curtain' feel */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-0 top-0 w-2 h-full bg-accent/10 origin-top"
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute right-0 bottom-0 w-2 h-full bg-accent/10 origin-bottom"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
