import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiArrowRight } from 'react-icons/hi';
import useReveal from '../hooks/useReveal';

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: 'hello@webcraft.studio',
    href: 'mailto:hello@webcraft.studio',
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+1 (555) 000-0000',
    href: 'tel:+15550000000',
  },
  {
    icon: HiOutlineLocationMarker,
    label: 'Location',
    value: 'Your City, Country',
    href: '#',
  },
];

const Contact = () => {
  const [ref, isVisible] = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — integrate with backend / email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/40 to-navy-900" />
      <div className="bg-mesh-1 top-0 left-0" />
      <div className="bg-mesh-3 bottom-0 right-0" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-accent-indigo font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="section-subtitle">
            Ready to launch your project? Drop us a message and we'll get back to you within 24 hours with a free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className={`lg:col-span-2 space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-indigo/20 to-accent-violet/20 border border-accent-indigo/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <c.icon className="text-accent-indigo text-xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{c.label}</p>
                  <p className="text-white font-medium text-sm">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Extra message */}
            <div className="glass-card p-6 mt-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-white font-semibold">Free consultation included.</span>{' '}
                Tell us about your project and we'll recommend the best approach for your budget and timeline.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 glass-card p-8 space-y-5 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.25s' }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-navy-700/50 border border-glass-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-indigo/50 focus:ring-1 focus:ring-accent-indigo/30 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-navy-700/50 border border-glass-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-indigo/50 focus:ring-1 focus:ring-accent-indigo/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                Project Type
              </label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full bg-navy-700/50 border border-glass-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-indigo/50 focus:ring-1 focus:ring-accent-indigo/30 transition-all appearance-none"
              >
                <option value="" className="bg-navy-800">Select a service...</option>
                <option value="landing" className="bg-navy-800">Landing Page</option>
                <option value="business" className="bg-navy-800">Business Website</option>
                <option value="ecommerce" className="bg-navy-800">E-Commerce Store</option>
                <option value="other" className="bg-navy-800">Other / Not Sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, and timeline..."
                className="w-full bg-navy-700/50 border border-glass-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-indigo/50 focus:ring-1 focus:ring-accent-indigo/30 transition-all resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full py-3.5 text-sm">
              <span className="flex items-center justify-center gap-2">
                {submitted ? '✓ Message Sent!' : <>Send Message <HiArrowRight /></>}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
