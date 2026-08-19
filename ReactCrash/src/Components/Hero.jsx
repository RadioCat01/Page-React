import { HiArrowRight, HiPlay } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mesh gradients */}
      <div className="bg-mesh-1 -top-40 -left-40 animate-pulse-slow" />
      <div className="bg-mesh-2 top-1/3 -right-32 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="bg-mesh-3 bottom-0 left-1/4 animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-[15%] w-3 h-3 rounded-full bg-accent-indigo/40 animate-float" />
      <div className="absolute top-1/3 right-[20%] w-2 h-2 rounded-full bg-accent-violet/40 animate-float-delayed" />
      <div className="absolute bottom-1/3 left-[25%] w-4 h-4 rounded-full bg-accent-cyan/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-[30%] w-2.5 h-2.5 rounded-full bg-accent-pink/30 animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass-white text-sm text-slate-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now accepting new projects
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-slide-up">
          Stunning Websites,{' '}
          <span className="gradient-text">Surprisingly Affordable</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up-delayed opacity-0">
          We build lightweight, blazing-fast websites that look premium — without the premium price tag.
          Perfect for startups and small businesses ready to make a big impact online.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delayed opacity-0" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="btn-primary text-base py-3.5 px-8">
            <span className="flex items-center gap-2">
              Start Your Project <HiArrowRight className="text-lg" />
            </span>
          </a>
          <a href="#portfolio" className="btn-outline py-3.5 px-8 flex items-center gap-2">
            <HiPlay className="text-lg" />
            View Our Work
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '3 Day', label: 'Avg. Turnaround' },
            { value: '$299', label: 'Starting Price' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 hover:bg-glass-white">
              <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
};

export default Hero;
