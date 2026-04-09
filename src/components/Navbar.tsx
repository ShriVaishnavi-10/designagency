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
            className="fixed inset-0 bg-background z-[900] pointer-events-auto flex flex-col items-center justify-center pt-10"
          >
            <div className="flex flex-col gap-10 items-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-playfair text-4xl font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-playfair text-3xl italic text-accent mt-4"
              >
                Start a project
              </motion.a>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] pointer-events-none">
              <div className="w-[80vw] h-[80vw] border border-accent rounded-full animate-pulse-slow"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
