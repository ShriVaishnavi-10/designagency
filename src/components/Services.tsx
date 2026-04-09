export default function Services() {
  return (
    <section id="services" className="section bg-obsidian-soft">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="title-secondary">
            Our <span className="italic-serif text-accent">Expertise</span>
          </h2>
          <p className="text-[clamp(1.1rem,2vw,1.25rem)] font-light text-muted max-w-[600px] mx-auto mt-5">
            Delivering bespoke digital solutions tailored for luxury and exclusivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-glass-bg border border-border-accent rounded-[16px] p-10 md:p-15 text-center transition-all duration-700 hover:-translate-y-2 hover:bg-accent/5 shadow-luxury">
            <div className="font-playfair text-4xl text-accent mb-8">Ⅰ</div>
            <h3 className="font-playfair text-3xl font-medium mb-5 text-foreground leading-tight">Digital Atelier</h3>
            <p className="text-[0.95rem] text-muted leading-[1.8] font-light">
              Bespoke web and mobile applications crafted with meticulous attention to detail and flawless performance.
            </p>
          </div>

          <div className="bg-glass-bg border border-border-accent rounded-[16px] p-10 md:p-15 text-center transition-all duration-700 hover:-translate-y-2 hover:bg-accent/5 shadow-luxury border-t md:border-t-border-accent">
            <div className="font-playfair text-4xl text-accent mb-8">Ⅱ</div>
            <h3 className="font-playfair text-3xl font-medium mb-5 text-foreground leading-tight">Identity & Brand</h3>
            <p className="text-[0.95rem] text-muted leading-[1.8] font-light">
              Defining the essence of your brand through elegant visual systems and sophisticated digital architecture.
            </p>
          </div>

          <div className="bg-glass-bg border border-border-accent rounded-[16px] p-10 md:p-15 text-center transition-all duration-700 hover:-translate-y-2 hover:bg-accent/5 shadow-luxury border-t md:border-t-border-accent">
            <div className="font-playfair text-4xl text-accent mb-8">Ⅲ</div>
            <h3 className="font-playfair text-3xl font-medium mb-5 text-foreground leading-tight">Art Direction</h3>
            <p className="text-[0.95rem] text-muted leading-[1.8] font-light">
              Curating stunning visual narratives that engage, inspire, and elevate your brand's presence beyond the ordinary.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
