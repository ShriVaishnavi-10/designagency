'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Portal from './Portal';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  return (
    <Portal>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100000] flex flex-col px-8 pt-[12vh] w-screen h-screen overflow-hidden"
            style={{ 
              backgroundColor: '#000000',
              color: '#FDFCF0' // Force Pearl White high contrast
            }}
          >
            {/* Background Decorative Element */}
            <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none overflow-hidden">
              <div className="absolute bottom-[-20%] right-[-20%] w-[120vw] h-[120vw] border border-accent/20 rounded-full animate-pulse-slow"></div>
            </div>

            {/* Header Lock (Logo & Close) */}
            <div className="flex justify-between items-center w-full mb-20 px-2 sticky top-0">
              <div className="font-playfair text-2xl font-medium flex items-center gap-3 text-[#FDFCF0]">
                <div className="w-8 h-8">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 15L85 85H75L50 35L25 85H15L50 15Z" fill="#D4AF37" />
                    <rect x="38" y="65" width="24" height="2" fill="#D4AF37" />
                    <circle cx="50" cy="50" r="48" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>
                </div>
                <span>Aura.</span>
              </div>
              
              <button 
                onClick={onClose}
                className="p-3 text-accent border border-accent/40 rounded-full px-6 py-2 font-jakarta text-[0.75rem] uppercase tracking-[0.25em] font-semibold bg-white/5 active:scale-95 transition-transform"
              >
                Close [✕]
              </button>
            </div>

            {/* Links Stack */}
            <div className="flex flex-col gap-6 w-full relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="flex items-end gap-6 py-6 border-b border-white/10 group"
                  >
                    <span className="font-jakarta text-[0.7rem] text-accent/60 tracking-[0.3em] font-medium mb-2">0{index + 1}</span>
                    <span className="font-playfair text-[clamp(2.8rem,12vw,4.5rem)] font-medium text-[#FDFCF0] group-hover:text-accent transition-colors leading-none tracking-tight">
                      {link.name}
                    </span>
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex items-end gap-6 py-10 group"
                >
                  <span className="font-jakarta text-[0.7rem] text-accent/60 tracking-[0.3em] font-medium mb-2">03</span>
                  <span className="font-playfair text-[clamp(2.8rem,12vw,4.5rem)] font-medium text-accent italic leading-none tracking-tight">
                    Contact Us
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
