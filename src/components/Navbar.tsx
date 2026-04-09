'use client';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#services' },
    { name: 'Selected Works', href: '#work' }
  ];

  return (
    <header className={`fixed top-0 left-1/2 -translate-x-1/2 w-full z-[1000] flex justify-center px-[6vw] pointer-events-none transition-all duration-500 ${scrolled ? 'py-5' : 'py-8'}`}>
      <nav className={`pointer-events-auto flex justify-between items-center w-full max-w-[1000px] px-6 md:px-10 transition-all duration-500 rounded-full border ${scrolled ? 'bg-background/60 backdrop-blur-xl border-border-accent shadow-2xl py-3' : 'bg-transparent border-transparent py-4'}`}>
        <Magnetic strength={0.2}>
          <div className="font-playfair text-xl md:text-2xl font-medium text-foreground flex items-center gap-3 cursor-pointer">
            <Image src="/logo.svg" alt="Aura Logo" width={32} height={32} className="block w-6 h-6 md:w-8 md:h-8" />
            <span>Aura<span className="text-accent">.</span></span>
          </div>
        </Magnetic>
        
        <div className="flex gap-2 md:gap-10 items-center">
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.3}>
                <a href={link.href} className="group relative font-jakarta text-[0.85rem] font-normal tracking-wider text-foreground/80 transition-all hover:text-accent p-2">
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-2 w-0 h-[1px] bg-accent"
                    whileHover={{ width: 'calc(100% - 16px)' }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="hidden md:block">
            <Magnetic strength={0.4}>
              <a href="#contact" className="group relative font-jakarta text-[0.85rem] font-normal tracking-wider text-accent transition-all hover:opacity-80 p-2">
                Contact Us
                <span className="absolute -bottom-1 left-2 w-[calc(100%-16px)] h-[1px] bg-accent" />
              </a>
            </Magnetic>
          </div>

          <ThemeToggle />

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-3 md:hidden z-[1001] relative"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-foreground transition-colors"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-[1.5px] bg-foreground transition-colors"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-foreground transition-colors"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#040405] dark:bg-[#040405] light:bg-[#F8F6F0] z-[2000] pointer-events-auto flex flex-col pt-[15vh] px-8"
          >
            {/* Background Decorative Element */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-accent rounded-full animate-pulse-slow"></div>
            </div>

            {/* Overlay Header (Logo & Close) */}
            <div className="flex justify-between items-center w-full mb-16 px-2">
              <div className="font-playfair text-xl font-medium text-foreground flex items-center gap-3">
                <div className="w-6 h-6">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 15L85 85H75L50 35L25 85H15L50 15Z" fill="#D4AF37" />
                    <rect x="38" y="65" width="24" height="2" fill="#D4AF37" />
                    <circle cx="50" cy="50" r="48" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>
                </div>
                <span>Aura.</span>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-accent uppercase font-jakarta text-[0.7rem] tracking-[0.2em] font-medium border border-accent/20 rounded-full px-4"
              >
                Close [✕]
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 w-full">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-end gap-5 py-2 border-b border-border-accent"
                >
                  <span className="text-[0.65rem] font-jakarta text-accent mb-2 tracking-[0.2em] font-medium">0{index + 1}</span>
                  <span className="font-playfair text-[clamp(2.5rem,10vw,4rem)] font-medium text-foreground hover:text-accent transition-colors tracking-tight leading-none">
                    {link.name}
                  </span>
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-end gap-5 py-2 mt-2"
              >
                <span className="text-[0.65rem] font-jakarta text-accent mb-2 tracking-[0.2em] font-medium">03</span>
                <span className="font-playfair text-[clamp(2.5rem,10vw,4rem)] font-medium text-accent hover:opacity-80 transition-opacity tracking-tight leading-none">
                  Contact Us
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
