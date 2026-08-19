import { HiOutlineCode, HiOutlineTemplate, HiOutlineShoppingCart, HiOutlineCog } from 'react-icons/hi';
import useReveal from '../hooks/useReveal';

const services = [
  {
    icon: HiOutlineTemplate,
    title: 'Landing Pages',
    description: 'High-converting, single-page websites designed to capture leads and drive action — delivered fast.',
    color: 'from-accent-indigo to-accent-violet',
  },
  {
    icon: HiOutlineCode,
    title: 'Business Websites',
    description: 'Professional multi-section sites that establish credibility and showcase your brand beautifully.',
    color: 'from-accent-violet to-accent-pink',
  },
  {
    icon: HiOutlineShoppingCart,
    title: 'Portfolio Websites',
    description: 'Showcase your work with stunning, modern portfolios that make a lasting impression.',
    color: 'from-accent-cyan to-accent-indigo',
  },
  {
    icon: HiOutlineCog,
    title: 'Maintenance & Support',
    description: 'Keep your website updated and running smoothly with our reliable maintenance and support services.',
    color: 'from-accent-pink to-accent-cyan',
  },
];

const Services = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Background accents */}
      <div className="bg-mesh-2 -top-60 -left-60" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 ${isVisible ? '' : ''}`}>
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-accent-indigo font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Services Built for <span className="gradient-text">Growth</span>
          </h2>
          <p className="section-subtitle">
            From single landing pages to full business websites, we deliver modern, lightweight solutions at a fraction of the industry cost.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`glass-card p-6 group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <svc.icon className="text-white text-xl" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{svc.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
