'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Website Development', href: '#services' },
    { label: 'Mobile Application Development', href: '#services' },
    { label: 'Custom Software Development', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'E-Commerce Development', href: '#services' },
    { label: 'Cloud & DevOps', href: '#services' },
    { label: 'Digital Transformation', href: '#services' },
    { label: 'AI & Automation', href: '#services' },
  ];

  const techLinks = [
    'React.js',
    'Next.js',
    'Node.js',
    'Python',
    'Laravel',
    'PostgreSQL',
    'Flutter',
    'AWS Cloud',
  ];

  return (
    <footer className="relative bg-white/65 backdrop-blur-3xl border-t border-white/90 pt-20 pb-12 overflow-hidden shadow-sm">
      {/* Ambient Lighting in Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-transparent via-sky-300/30 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-200/80">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 border border-white flex items-center justify-center text-white font-black text-base shadow-sm">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                  Shree Tech
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                </span>
                <span className="text-[9px] text-slate-500 font-semibold tracking-wider uppercase -mt-0.5">
                  Glassmorphism UI
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Shree Tech is an enterprise software engineering and technology consulting company. We
              architect, design, and engineer custom digital solutions with modern, frosted ice-glass UI.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-secondary w-9 h-9 rounded-xl text-slate-700 hover:text-slate-950 flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-secondary w-9 h-9 rounded-xl text-slate-700 hover:text-slate-950 flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-secondary w-9 h-9 rounded-xl text-slate-700 hover:text-slate-950 flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-sky-700 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-sky-700 transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies & Contact Info (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {techLinks.map((t) => (
                  <span
                    key={t}
                    className="glass-pill px-2.5 py-1 rounded-xl text-xs text-slate-700 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <span className="font-semibold text-slate-800">contact@shreetech.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span className="font-bold text-slate-800 font-stat">+1 (800) 840-2030</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-600 mt-0.5" />
                <span>San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 Shree Tech Innovations Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Security</a>
            <button
              onClick={scrollToTop}
              className="glass-pill px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
