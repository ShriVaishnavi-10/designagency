import Magnetic from './Magnetic';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-border-accent bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <Magnetic strength={0.2}>
              <div className="font-playfair text-2xl font-medium text-foreground cursor-pointer">
                Aura<span className="text-accent">.</span>
              </div>
            </Magnetic>
          </div>
          
          <div className="flex gap-10">
            <Magnetic strength={0.4}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[0.85rem] tracking-wider text-muted hover:text-accent transition-colors">Instagram</a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="https://beiance.com" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[0.85rem] tracking-wider text-muted hover:text-accent transition-colors">Behance</a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[0.85rem] tracking-wider text-muted hover:text-accent transition-colors">LinkedIn</a>
            </Magnetic>
          </div>
          
          <div className="font-jakarta text-[0.85rem] text-muted opacity-60">
            © {currentYear} Aura Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
