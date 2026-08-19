import { HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble } from 'react-icons/fa6';

const footerLinks = {
  Services: ['Landing Pages', 'Business Websites', 'E-Commerce', 'Maintenance'],
  Company: ['About Us', 'Portfolio', 'Pricing', 'Blog'],
  Support: ['Contact', 'FAQ', 'Privacy Policy', 'Terms of Service'],
};

const socials = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'Twitter' },
  { icon: FaDribbble, href: '#', label: 'Dribbble' },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-glass-border">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-indigo/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-violet flex items-center justify-center text-white font-display font-bold text-lg">
                W
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Web<span className="gradient-text">Craft</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              Building lightweight, stunning websites at prices that make sense for startups and small businesses.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-glass-border flex items-center justify-center text-slate-400 hover:text-white hover:border-accent-indigo hover:bg-accent-indigo/10 transition-all duration-300"
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} WebCraft Studio. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Made with <HiHeart className="text-accent-pink text-sm" /> for startups everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
