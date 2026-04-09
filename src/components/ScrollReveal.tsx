'use client';
import { motion, useInView } from 'framer-motion';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const getVariants = () => {
    if (direction === 'mask') return {}; // We apply CSS class instead

    const hidden = {
      up: { opacity: 0, y: 40 },
      down: { opacity: 0, y: -40 },
      left: { opacity: 0, x: 40 },
      right: { opacity: 0, x: -40 },
    }[direction as 'up' | 'down' | 'left' | 'right'] || { opacity: 0, y: 40 };

    return {
      hidden,
      visible: { opacity: 1, y: 0, x: 0 },
    };
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }} className={className}>
      <motion.div
        variants={getVariants()}
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
