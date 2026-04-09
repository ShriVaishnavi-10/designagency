'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import GoldDust from './GoldDust';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="hero-background overflow-hidden relative">
      <GoldDust />
      
      {/* Parallax Background Layer */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full -z-[1]"
      >
        <div className="hero-background-overlay hero-bg-dark" />
        <div className="hero-background-overlay hero-bg-light" />
      </motion.div>

      <div className="ambient-glow"></div>
      
      <div className="container relative z-[1]">
        <motion.div 
          style={{ opacity }}
          className="w-full max-w-[900px] mx-auto flex flex-col items-center animate-fade-up"
        >
          <div className="flex items-center gap-5 font-jakarta text-[0.85rem] tracking-[0.2em] uppercase text-accent mb-10">
            <span className="w-10 h-[1px] bg-accent"></span>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15L85 85H75L50 35L25 85H15L50 15Z" fill="#D4AF37" />
                  <rect x="38" y="65" width="24" height="2" fill="#D4AF37" />
                  <circle cx="50" cy="50" r="48" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </div>
              <span>Aura Design Studio</span>
            </div>
            <span className="w-10 h-[1px] bg-accent"></span>
          </div>
          
          <h1 className="title-primary text-center text-foreground">
            Elevating digital<br />
            <span className="italic-serif text-accent">experiences</span> to art.
          </h1>
          
          <p className="text-[clamp(1.1rem,2vw,1.3rem)] font-light text-muted leading-[1.8] mt-10 mb-[50px] max-w-[650px] text-center">
            We are an exclusive digital agency partnering with visionary brands to create immersive, elegant, and highly performant web applications.
          </p>
          
          <div className="flex gap-5 justify-center max-xs:flex-col max-xs:w-full">
            <a href="#work" className="btn-primary">View Portfolio</a>
            <a href="#services" className="btn-outline">Our Expertise</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
