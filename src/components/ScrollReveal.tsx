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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const getVariants = (): Variants => {
    if (direction === 'mask') return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 }
    };

    const hiddenValues = {
      up: { opacity: 0, y: 40 },
      down: { opacity: 0, y: -40 },
      left: { opacity: 0, x: 40 },
      right: { opacity: 0, x: -40 },
    };

    const hidden = (direction !== 'mask' ? hiddenValues[direction as keyof typeof hiddenValues] : { opacity: 0, y: 40 }) || { opacity: 0, y: 40 };

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
