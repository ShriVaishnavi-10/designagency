/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'border-accent': 'var(--border-accent)',
        'glass-bg': 'var(--glass-bg)',
        obsidian: '#040405',
        'obsidian-soft': '#0A0A0C',
        pearl: '#FDFCF0',
        gold: '#D4AF37',
        'gold-burnished': '#B88A44',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: '24px',
        md: '16px',
        sm: '8px',
      },
    },
  },
  plugins: [],
}
