'use client';
import { useEffect, useState } from 'react';
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-accent/20 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="font-playfair text-4xl md:text-5xl text-accent">A</span>
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
