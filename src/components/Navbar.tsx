'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navLinks: NavItem[] = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Technologies', href: '#technologies', id: 'technologies' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setIsScrolled(scrollY > 25);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? 'glass-navbar-scrolled py-2 sm:py-2.5 px-4 sm:px-6'
            : 'glass-navbar-capsule py-2.5 sm:py-3.5 px-4 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Company Logo on the Left */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group cursor-pointer select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/85 backdrop-blur-md border border-white/95 p-1 flex items-center justify-center shadow-[0_6px_18px_rgba(2,132,199,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)] group-hover:scale-105 transition-all overflow-hidden">
              <Image
                src="/images/shreetech-logo-blue.png"
                alt="Shree Tech Logo"
                width={512}
                height={512}
                sizes="44px"
                loading="eager"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                Shree Tech
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              </span>
              <span className="text-[9px] text-slate-500 font-mono tracking-wider uppercase -mt-0.5">
                Glassmorphism UI
              </span>
            </div>
          </Link>

          {/* Floating Frosted Glass Navigation Pill in the Center */}
          <nav className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full glass-nav-pill">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 lg:px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-sky-950 bg-white/95 border border-white shadow-[0_2px_10px_rgba(15,60,110,0.08),inset_0_1px_1px_#ffffff] font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Us Glassmorphic Button on the Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="glass-btn-primary inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs lg:text-sm font-semibold text-white cursor-pointer shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-100" />
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-sky-100" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-white/60 border border-white/85 backdrop-blur-xl shadow-sm focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Floating Glassmorphism Mobile Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/60 flex flex-col gap-1.5">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'text-sky-900 bg-white/90 border border-white font-semibold shadow-sm'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 mt-1 border-t border-white/40">
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="glass-btn-primary w-full py-2.5 px-4 text-center text-sm font-semibold text-white rounded-xl block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
