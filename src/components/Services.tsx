'use client';

import { 
  Globe, 
  Smartphone, 
  Code2, 
  Layout, 
  ShoppingBag, 
  Cloud, 
  RefreshCw, 
  Cpu, 
  ArrowRight,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';
import { servicesData } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Code2,
  Layout,
  ShoppingBag,
  Cloud,
  RefreshCw,
  Cpu,
};

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Ambient Lighting Blooms for Glass Layers */}
      <div className="absolute top-1/3 -right-40 w-[38rem] h-[38rem] bg-sky-200/40 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-40 w-[38rem] h-[38rem] bg-blue-200/40 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-sky-800 mb-3">
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Software Engineering & Technical Consulting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We provide end-to-end technology services tailored to modern enterprise requirements. Explore
            our eight core service disciplines engineered with clean, frosted glassmorphism UI.
          </p>
        </div>

        {/* 8 Premium Frosted Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover p-7 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  {/* Frosted Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-500 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={scrollToContact}
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Discuss Requirement</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
