export default function Hero() {
  return (
    <section className="hero-background">
      <div className="ambient-glow"></div>
      <div className="container relative z-[1]">
        <div className="w-full max-w-[900px] mx-auto flex flex-col items-center animate-fade-up">
          <div className="flex items-center gap-4 font-jakarta text-[0.85rem] tracking-[0.2em] uppercase text-accent mb-10">
            <span className="w-10 h-[1px] bg-accent"></span>
            <span>Aura Design Studio</span>
          </div>
          
          <h1 className="title-primary text-center">
            Elevating digital<br />
            <span className="italic-serif">experiences</span> to art.
          </h1>
          
          <p className="text-[clamp(1.1rem,2vw,1.3rem)] font-light text-muted leading-[1.8] mt-10 mb-[50px] max-w-[650px] text-center">
            We are an exclusive digital agency partnering with visionary brands to create immersive, elegant, and highly performant web applications.
          </p>
          
          <div className="flex gap-5 justify-center max-xs:flex-col max-xs:w-full">
            <a href="#work" className="btn-primary">View Portfolio</a>
            <a href="#services" className="btn-outline">Our Expertise</a>
          </div>
        </div>
      </div>
    </section>
  );
}
