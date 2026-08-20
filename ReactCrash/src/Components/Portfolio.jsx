import useReveal from '../hooks/useReveal';
import { HiOutlineExternalLink } from 'react-icons/hi';

const projects = [
  {
    title: 'Bloom & Brew Café',
    category: 'Landing Page',
    description: 'A vibrant single-page site for a specialty coffee shop with online ordering.',
    gradient: 'from-amber-500/20 to-orange-600/20',
    accent: 'text-amber-400',
  },
  {
    title: 'NovaTech Solutions',
    category: 'Business Website',
    description: 'Corporate multi-section website for a SaaS startup with lead generation forms.',
    gradient: 'from-accent-indigo/20 to-accent-violet/20',
    accent: 'text-accent-indigo',
  },
  {
    title: 'Verde Organics',
    category: 'E-Commerce',
    description: 'Lightweight online store for organic products with Stripe checkout integration.',
    gradient: 'from-emerald-500/20 to-teal-600/20',
    accent: 'text-emerald-400',
  },
  {
    title: 'FitPulse Studio',
    category: 'Landing Page',
    description: 'High-conversion fitness studio landing page with class booking and testimonials.',
    gradient: 'from-accent-pink/20 to-rose-600/20',
    accent: 'text-accent-pink',
  },
  {
    title: 'Atlas Legal Group',
    category: 'Business Website',
    description: 'Professional law firm website with case study pages and consultation booking.',
    gradient: 'from-sky-500/20 to-accent-cyan/20',
    accent: 'text-sky-400',
  },
  {
    title: 'Paws & Play',
    category: 'E-Commerce',
    description: 'Playful pet supplies store with subscription box feature and loyalty rewards.',
    gradient: 'from-violet-500/20 to-purple-600/20',
    accent: 'text-violet-400',
  },
];

const Portfolio = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="bg-mesh-2 top-0 right-0" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-accent-violet font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Projects We're <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="section-subtitle">
            A selection of websites we've crafted for startups and small businesses — each delivered on time and on budget.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card overflow-hidden group cursor-pointer ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              {/* Thumbnail placeholder */}
              <div className={`h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/10 transition-all duration-500" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur group-hover:scale-110 transition-transform duration-300">
                    <HiOutlineExternalLink className="text-white text-xl" />
                  </div>
                  <span className="text-xs text-white/60 font-medium">{p.category}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className={`text-xs font-semibold uppercase tracking-wider ${p.accent}`}>{p.category}</span>
                <h3 className="font-display text-lg font-semibold text-slate-800 mt-1 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
