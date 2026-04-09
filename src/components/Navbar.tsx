'use client';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-1/2 -translate-x-1/2 w-full z-[1000] flex justify-center px-[6vw] pointer-events-none transition-all duration-500 ${scrolled ? 'py-5' : 'py-8'}`}>
      <nav className={`pointer-events-auto flex justify-between items-center w-full max-w-[1000px] px-6 md:px-10 transition-all duration-500 rounded-full border ${scrolled ? 'bg-background/60 backdrop-blur-xl border-border-accent shadow-2xl py-3' : 'bg-transparent border-transparent py-4'}`}>
        <div className="font-playfair text-xl md:text-2xl font-medium text-foreground flex items-center gap-3">
          <Image src="/logo.svg" alt="Aura Logo" width={32} height={32} className="block w-6 h-6 md:w-8 md:h-8" />
          <span>Aura<span className="text-accent">.</span></span>
        </div>
        <div className="flex gap-6 md:gap-10 items-center">
          <div className="hidden md:flex gap-10 items-center">
            <a href="#services" className="font-jakarta text-[0.85rem] font-normal tracking-wider text-foreground/80 transition-all hover:text-accent">Expertise</a>
            <a href="#work" className="font-jakarta text-[0.85rem] font-normal tracking-wider text-foreground/80 transition-all hover:text-accent">Selected Works</a>
          </div>
          <a href="#contact" className="font-jakarta text-[0.85rem] font-normal tracking-wider text-accent border-b border-accent pb-0.5 transition-all hover:opacity-80">Contact Us</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
