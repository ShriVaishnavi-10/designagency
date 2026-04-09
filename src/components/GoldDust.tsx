'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function GoldDust() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 8 : 15;
    
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: `${p.x}%`, 
            y: `${p.y}%`, 
            opacity: 0 
          }}
          animate={{
            x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`, `${p.x}%`],
            y: [`${p.y}%`, `${p.y - 20}%`, `${p.y}%`],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: '#D4AF37',
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
}
