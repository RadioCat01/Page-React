import { HiStar } from 'react-icons/hi';
import useReveal from '../hooks/useReveal';

const testimonials = [
  {
    name: 'Kumara Wakkumbura',
    text: "WebCraft delivered our café website in just 4 days. It's fast, beautiful, and cost us less than a month's rent. Couldn't be happier!",
    rating: 5,
    initials: 'KW',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Amal Hettiarachchi',
    text: "WebCraft gave us an even better result for a fraction of the price. Highly Recomended!",
    rating: 5,
    initials: 'AH',
    color: 'from-accent-indigo to-accent-violet',
  },
  {
    name: 'Sumith Udayanga',
    text: "Our online store loads instantly and looks premium. Sales increased 40% within the first month. The team was responsive and professional throughout.",
    rating: 5,
    initials: 'SU',
    color: 'from-emerald-500 to-teal-500',
  },
];

const Testimonials = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="bg-mesh-2 bottom-0 left-1/4" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the businesses we've helped launch online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-8 flex flex-col ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <HiStar key={j} className="text-amber-400 text-lg" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-glass-border">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
