'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for generic interactive elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }

      // Check for specifically project/portfolio cards
      if (target.closest('[data-project-card]')) {
        setIsProjectHover(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      setIsProjectHover(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent pointer-events-none z-[9999] hidden lg:flex items-center justify-center overflow-hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          x: cursorX,
          y: cursorY,
          width: isProjectHover ? 80 : 32,
          height: isProjectHover ? 80 : 32,
        }}
        animate={{
          scale: isHovering && !isProjectHover ? 1.5 : 1,
          backgroundColor: isProjectHover ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
      >
        {isProjectHover && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-jakarta text-[10px] font-bold tracking-[0.2em] text-accent"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[9999] hidden lg:block"
        style={{
          transform: 'translate(-50%, -50%)',
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: isProjectHover ? 0 : 1
        }}
      />
    </>
  );
}
