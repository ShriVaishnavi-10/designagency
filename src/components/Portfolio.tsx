import Image from 'next/image';

const projects = [
  { id: 1, title: 'Apay', category: 'E-Commerce', image: '/portfolio/portfolio_1.png' },
  { id: 2, title: 'Aura', category: 'Brand Identity', image: '/portfolio/human_portfolio_2.png' },
  { id: 3, title: 'Zen', category: 'Digital Platform', image: '/portfolio/human_portfolio_3.png' }
];

export default function Portfolio() {
  return (
    <section id="work" className="section bg-background">
      <div className="container">
        <div className="flex justify-between items-end mb-20 max-md:flex-col max-md:items-center max-md:gap-8 max-md:text-center">
          <h2 className="title-secondary">
            Selected <span className="italic-serif">Works</span>
          </h2>
          <a href="#" className="btn-outline">View All Archives</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-6 cursor-pointer group">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[8px] bg-glass-bg border border-border-accent shadow-luxury group-hover:border-accent/40 transition-colors">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105" 
                  unoptimized 
                />
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <h3 className="font-playfair text-3xl font-medium text-foreground tracking-tight">{project.title}</h3>
                <span className="font-jakarta text-[0.85rem] text-muted uppercase tracking-[0.1em] font-medium">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
