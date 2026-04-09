'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 ml-2.5" />;
  }

  return (
    <button
      className="flex items-center justify-center w-9 h-9 rounded-full text-foreground bg-transparent border border-transparent transition-all duration-300 cursor-pointer ml-2.5 hover:bg-glass-bg hover:border-border-accent hover:text-accent hover:scale-105 outline-none"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      type="button"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
