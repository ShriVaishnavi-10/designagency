'use client';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'mask';
}

export default function ScrollReveal({ 
  children, 
  width = "fit-content", 
  className = "", 
  delay = 0.2,
  direction = 'up'
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const variants: Variants = {
    hidden: {
      opacity: direction === 'mask' ? 1 : 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    } as any,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    } as any,
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
        className={direction === 'mask' && isInView ? 'mask-reveal' : ''}
      >
        {children}
      </motion.div>
    </div>
  );
}
