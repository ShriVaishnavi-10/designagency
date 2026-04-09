import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-border-accent">
      <div className="container flex flex-col">
        <div className="flex justify-between items-center mb-20 max-md:flex-col max-md:items-start max-md:gap-10">
          <div className="font-playfair text-[2.5rem] font-medium text-foreground flex items-center gap-4">
            <Image src="/logo.svg" alt="Aura Logo" width={40} height={40} className="block" />
            <span>Aura<span className="text-accent">.</span></span>
          </div>
          <div className="flex gap-10 max-md:flex-col max-md:gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[0.9rem] text-foreground transition-all hover:text-accent opacity-80 hover:opacity-100">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[0.9rem] text-foreground transition-all hover:text-accent opacity-80 hover:opacity-100">LinkedIn</a>
          </div>
        </div>
        <div className="flex justify-between items-center pt-10 border-t border-white/5 text-[0.8rem] font-light text-muted max-md:flex-col-reverse max-md:items-start max-md:gap-8">
          <p>© {new Date().getFullYear()} Aura Design Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
