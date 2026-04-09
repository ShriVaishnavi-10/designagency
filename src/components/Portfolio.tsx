'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  { id: 1, title: 'Apay', category: 'E-Commerce', image: '/portfolio/apay.png' },
  { id: 2, title: 'Aura', category: 'Brand Identity', image: '/portfolio/human_portfolio_2.png' },
  { id: 3, title: 'Zen', category: 'Digital Platform', image: '/portfolio/human_portfolio_3.png' }
];

export default function Portfolio() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Transform velocity into a subtle skew angle
  const skewBase = useTransform(scrollVelocity, [-1, 1], [-15, 15]);
  const skew = useSpring(skewBase, { stiffness: 100, damping: 20 });

  return (
    <section id="work" className="section bg-background">
      <div className="container" ref={scrollRef}>
        <div className="flex justify-between items-end mb-20 max-md:flex-col max-md:items-center max-md:gap-8 max-md:text-center overflow-hidden">
          <ScrollReveal direction="mask" delay={0.1}>
            <h2 className="title-secondary">
              Selected <span className="italic-serif text-accent">Works</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.3}>
            <a href="#" className="btn-outline">View All Archives</a>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.2 + index * 0.15} direction="up" width="100%">
              <motion.div 
                style={{ skewY: skew }}
                className="flex flex-col gap-6 cursor-pointer group"
                data-project-card
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[8px] bg-glass-bg border border-border-accent shadow-luxury group-hover:border-accent/40 transition-colors">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105" 
                    unoptimized 
                    priority={project.id === 1}
                  />
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <h3 className="font-playfair text-3xl font-medium text-foreground tracking-tight">{project.title}</h3>
                  <span className="font-jakarta text-[0.85rem] text-muted uppercase tracking-[0.1em] font-medium">{project.category}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
