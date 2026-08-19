import { HiOutlineLightningBolt, HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineShieldCheck } from 'react-icons/hi';
import useReveal from '../hooks/useReveal';

const reasons = [
  {
    icon: HiOutlineCurrencyDollar,
    title: 'Unbeatable Pricing',
    description: 'Professional websites starting at just $299. No hidden fees, no surprise invoices — just honest, low-cost development.',
    highlight: '$299',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Lightning Fast',
    description: 'Lightweight builds using modern tech mean your site loads in under 2 seconds. Better UX, better SEO, more conversions.',
    highlight: '<2s',
  },
  {
    icon: HiOutlineClock,
    title: 'Rapid Delivery',
    description: 'Most projects delivered within 3–7 business days. We move fast without cutting corners on quality.',
    highlight: '3 Days',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Modern & Secure',
    description: 'Built with the latest frameworks and best practices. Your site will be secure, responsive, and future-proof.',
    highlight: '100%',
  },
];

const WhyChooseUs = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />
      <div className="bg-mesh-1 top-0 right-0" />
      <div className="bg-mesh-3 bottom-0 left-0" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Quality Doesn't Have to Be <span className="gradient-text">Expensive</span>
          </h2>
          <p className="section-subtitle">
            We believe every business deserves a beautiful online presence, regardless of budget.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`glass-card p-8 flex gap-5 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              {/* Icon badge */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-indigo/20 to-accent-violet/20 border border-accent-indigo/20 flex items-center justify-center">
                <r.icon className="text-accent-indigo text-2xl" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white mb-1">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
