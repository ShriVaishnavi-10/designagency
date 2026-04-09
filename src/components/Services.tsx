'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import GoldDust from './GoldDust';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const services = [
    { id: 'Ⅰ', title: 'Digital Atelier', description: 'Bespoke web and mobile applications crafted with meticulous attention to detail and flawless performance.' },
    { id: 'Ⅱ', title: 'Identity & Brand', description: 'Defining the essence of your brand through elegant visual systems and sophisticated digital architecture.' },
    { id: 'Ⅲ', title: 'Art Direction', description: 'Curating stunning visual narratives that engage, inspire, and elevate your brand\'s presence beyond the ordinary.' }
  ];

  return (
    <section 
      id="services" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="section bg-bg-soft relative overflow-hidden spotlight-container"
    >
      <GoldDust />
      
      {/* The Ethereal Spotlight Layer */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, var(--bg-soft) 100%)`,
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal width="100%" direction="mask" delay={0.2}>
            <h2 className="title-secondary glow-bleed">
              Our <span className="italic-serif text-accent">Expertise</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.4}>
            <p className="text-[clamp(1.1rem,2vw,1.25rem)] font-light text-muted max-w-[600px] mx-auto mt-5">
              Delivering bespoke digital solutions tailored for luxury and exclusivity.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={0.3 + index * 0.1} width="100%">
              <div className="group relative bg-glass-bg border border-border-accent rounded-[16px] p-10 md:p-15 h-full text-center transition-all duration-700 hover:bg-accent/[0.03] shadow-luxury spotlight-card overflow-hidden">
                {/* Internal card glow highlight */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle 200px at ${mousePos.x % 400}px ${mousePos.y % 400}px, rgba(212, 175, 55, 0.05) 0%, transparent 100%)`,
                  }}
                />
                
                <div className="font-playfair text-4xl text-accent mb-8 animate-pulse-slow glow-bleed">{service.id}</div>
                <h3 className="font-playfair text-3xl font-medium mb-5 text-foreground leading-tight tracking-tight glow-bleed">{service.title}</h3>
                <p className="text-[0.95rem] text-muted leading-[1.8] font-light group-hover:text-foreground/90 transition-colors">
                  {service.description}
                </p>
                
                {/* Interactive boutique line */}
                <div className="mt-10 mx-auto w-10 h-[1px] bg-accent/30 group-hover:w-20 group-hover:bg-accent transition-all duration-700"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
