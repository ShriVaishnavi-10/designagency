'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import GoldDust from './GoldDust';

const services = [
  { id: '01', title: 'Digital Atelier', label: 'Ⅰ', description: 'Bespoke web and mobile applications crafted with meticulous attention to detail and flawless performance.' },
  { id: '02', title: 'Identity & Brand', label: 'Ⅱ', description: 'Defining the essence of your brand through elegant visual systems and sophisticated digital architecture.' },
  { id: '03', title: 'Art Direction', label: 'Ⅲ', description: 'Curating stunning visual narratives that engage, inspire, and elevate your brand\'s presence beyond the ordinary.' }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="section bg-bg-soft relative overflow-hidden"
    >
      <GoldDust />
      
      <div className="container relative z-10">
        <div className="text-center mb-24">
          <ScrollReveal width="100%" direction="mask" delay={0.1}>
            <h2 className="title-secondary">
              Our <span className="italic-serif text-accent">Expertise</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.3}>
            <p className="text-[clamp(1rem,1.5vw,1.1rem)] font-light text-muted max-w-[500px] mx-auto mt-6 tracking-wide opacity-80">
              Transforming complex visions into seamless, high-performance digital artistry.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={service.id} className="relative group">
              {/* The Glide & Bloom Container */}
              <motion.div
                initial={{ opacity: 0, x: index === 0 ? 50 : index === 2 ? -50 : 0, y: 30 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.15 }}
                className="relative bg-glass-bg border border-border-accent rounded-[12px] p-10 md:p-12 h-full flex flex-col items-center text-center transition-all duration-700 hover:border-accent/40 shadow-luxury group-hover:-translate-y-2"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ rotateX: 5, rotateY: 5 }}
              >
                {/* Architectural Accent Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '40px' } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                  className="h-[1px] bg-accent mb-10"
                />

                <div className="font-playfair text-sm text-accent/60 mb-4 tracking-[0.2em]">{service.id}</div>
                <h3 className="font-playfair text-3xl font-medium mb-6 text-foreground leading-tight tracking-tight">
                  {service.title}
                </h3>
                
                <motion.p 
                  initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                  animate={isInView ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' } : {}}
                  transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  className="text-[0.95rem] text-muted leading-[1.8] font-light"
                >
                  {service.description}
                </motion.p>

                {/* Roman Numeral Monogram Background */}
                <span className="absolute bottom-5 right-8 font-playfair text-6xl text-foreground/[0.03] select-none pointer-events-none group-hover:text-accent/[0.05] transition-colors duration-700">
                  {service.label}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
