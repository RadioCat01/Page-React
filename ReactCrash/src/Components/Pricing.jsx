import { HiCheck, HiOutlineStar } from 'react-icons/hi';
import useReveal from '../hooks/useReveal';

const tiers = [
  {
    name: 'Starter',
    price: '$299',
    period: 'one-time',
    description: 'Perfect for side projects and personal brands that need a sleek online presence.',
    features: [
      'Single-page responsive site',
      'Custom design from scratch',
      'Mobile-first approach',
      'Contact form integration',
      'SEO fundamentals',
      '1 round of revisions',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Business',
    price: '$599',
    period: 'one-time',
    description: 'The most popular choice for startups and growing businesses.',
    features: [
      'Multi-section website (up to 7)',
      'Premium UI/UX design',
      'Animations & micro-interactions',
      'Blog or portfolio section',
      'Analytics integration',
      '3 rounds of revisions',
      'Priority 5-day delivery',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Premium',
    price: '$999',
    period: 'one-time',
    description: 'Full-scale solution for businesses ready to dominate online.',
    features: [
      'Everything in Business',
      'E-commerce functionality',
      'Payment gateway integration',
      'Admin dashboard',
      'Performance optimization',
      'Unlimited revisions',
      '30-day post-launch support',
    ],
    cta: 'Go Premium',
    popular: false,
  },
];

const Pricing = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/40 to-navy-900" />
      <div className="bg-mesh-1 -bottom-40 -right-40" />
      <div className="bg-mesh-3 top-20 -left-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-accent-pink font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Transparent, <span className="gradient-text">Low-Cost</span> Plans
          </h2>
          <p className="section-subtitle">
            No subscriptions, no retainers. Just a one-time fee for a website you'll love. Every plan includes free hosting setup guidance.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative glass-card p-8 ${
                tier.popular
                  ? 'border-accent-indigo/40 bg-accent-indigo/[0.04] md:-mt-4 md:mb-0'
                  : ''
              } ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet text-xs font-bold text-white flex items-center gap-1">
                  <HiOutlineStar className="text-sm" />
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-white">{tier.name}</h3>
              <p className="text-sm text-slate-400 mt-1 mb-6">{tier.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-4xl font-extrabold gradient-text">{tier.price}</span>
                <span className="text-sm text-slate-500">/ {tier.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <HiCheck className="text-accent-cyan flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  tier.popular
                    ? 'btn-primary'
                    : 'border border-glass-border text-slate-300 hover:border-accent-indigo hover:text-accent-indigo hover:bg-accent-indigo/10'
                }`}
              >
                <span>{tier.cta}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
