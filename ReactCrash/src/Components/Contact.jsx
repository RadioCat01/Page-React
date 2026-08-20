import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import useReveal from '../hooks/useReveal';

const Contact = () => {
  const [ref, isVisible] = useReveal();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="bg-mesh-1 top-0 left-0" />
      <div className="bg-mesh-3 bottom-0 right-0" />

      {/* Decorative Floating Mesh Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual Typography Header */}
          <div className={`lg:col-span-5 space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div>
              <p className="text-accent-indigo font-bold text-xs uppercase tracking-widest mb-3">
                Get In Touch
              </p>
              <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-4 leading-[1.1] font-extrabold tracking-tight">
                Let's Build <br />
                Something <span className="gradient-text font-display">Amazing</span>
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
              Have an idea, project, or question? Reach out to us directly through phone or email. We are active and ready to collaborate.
            </p>

            {/* Glowing Status Badge */}
            <div className="flex items-center gap-3 bg-slate-50/50 border border-glass-border rounded-2xl p-4 w-fit shadow-xl backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                Available & Responding Promptly
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Cards */}
          <div className={`lg:col-span-7 space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>

            {/* Email Panel */}
            <div className="relative group">
              {/* Outer Glow Outline */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500 via-orange-600 to-amber-400 rounded-2xl opacity-10 group-hover:opacity-45 blur transition-all duration-500" />

              <div className="relative glass-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden">
                {/* Embedded internal subtle orb */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors duration-500" />

                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-slate-50/80 border border-glass-border flex items-center justify-center relative overflow-hidden group-hover:scale-110 group-hover:border-orange-500/40 transition-all duration-300 shadow-md">
                    <HiOutlineMail className="text-2xl text-orange-600 group-hover:text-amber-500 transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-1 block">
                      Send An Email
                    </span>
                    <a 
                      href="mailto:hrsynapsemvas@gmail.com" 
                      className="text-base sm:text-lg font-bold text-slate-800 hover:text-orange-500 transition-colors duration-200 font-display break-all"
                    >
                      hrsynapsemvas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 relative z-10 w-full sm:w-auto">
                  <a 
                    href="mailto:hrsynapsemvas@gmail.com" 
                    className="btn-primary py-3 px-5 text-xs flex-1 sm:flex-none flex items-center justify-center gap-2 font-bold tracking-wider uppercase whitespace-nowrap"
                  >
                    <span>Write Email</span>
                  </a>
                  <button 
                    onClick={() => handleCopy('hrsynapsemvas@gmail.com', 'email')}
                    className="btn-outline py-3 px-4 text-xs flex-1 sm:flex-none flex items-center justify-center gap-2 border-glass-border hover:border-orange-500 text-slate-600 hover:text-slate-800 transition-all duration-300 rounded-xl"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-amber-500 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Panel */}
            <div className="relative group">
              {/* Outer Glow Outline */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 rounded-2xl opacity-10 group-hover:opacity-45 blur transition-all duration-500" />

              <div className="relative glass-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden">
                {/* Embedded internal subtle orb */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-600/5 rounded-full blur-2xl group-hover:bg-orange-600/10 transition-colors duration-500" />

                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-slate-50/80 border border-glass-border flex items-center justify-center relative overflow-hidden group-hover:scale-110 group-hover:border-amber-400/40 transition-all duration-300 shadow-md">
                    <HiOutlinePhone className="text-2xl text-amber-500 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-1 block">
                      Call Support
                    </span>
                    <a 
                      href="tel:0764631698" 
                      className="text-base sm:text-lg font-bold text-slate-800 hover:text-amber-500 transition-colors duration-200 font-display"
                    >
                      0764631698
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 relative z-10 w-full sm:w-auto">
                  <a 
                    href="tel:0764631698" 
                    className="btn-primary py-3 px-5 text-xs flex-1 sm:flex-none flex items-center justify-center gap-2 font-bold tracking-wider uppercase whitespace-nowrap"
                  >
                    <span>Call Now</span>
                  </a>
                  <button 
                    onClick={() => handleCopy('0764631698', 'phone')}
                    className="btn-outline py-3 px-4 text-xs flex-1 sm:flex-none flex items-center justify-center gap-2 border-glass-border hover:border-amber-500/50 text-slate-600 hover:text-slate-800 transition-all duration-300 rounded-xl"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-amber-500 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


