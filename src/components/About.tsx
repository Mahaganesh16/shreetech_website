'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

function StatCounter({ value, suffix = '', label, sublabel }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(value * (1 - Math.pow(1 - progress, 3)));
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(value);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="glass-card glass-card-hover p-6 rounded-2xl">
      <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-stat">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold text-slate-800 mt-1">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5">{sublabel}</div>
    </div>
  );
}

export default function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/2 -left-40 w-[36rem] h-[36rem] bg-orange-200/35 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[34rem] h-[34rem] bg-rose-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description, Bullet Achievements (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800">
              <span>About Shree Tech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A Dedicated Software Engineering Partner for Growing Businesses
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Shree Tech is an independent software development and consulting agency. We partner with
              fast-growing businesses, enterprise technology leaders, and modern startups to design, build,
              and maintain mission-critical software solutions with clean, frosted glassmorphism UI.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Unlike traditional agencies that pass work to inexperienced subcontractors, our core engineering
              team directly designs your architecture, writes strict type-safe code, and provides continuous
              deployment visibility.
            </p>

            {/* Core Achievements in Frosted Glass Container */}
            <div className="glass-panel p-6 rounded-3xl space-y-3.5">
              {[
                'Full-stack engineering capabilities from concept through multi-cloud deployment',
                'Strict adherence to Domain-Driven Design, clean architecture, and automated testing',
                'Transparent agile communication with direct access to senior developers',
                'Guaranteed response SLAs and dedicated ongoing maintenance support'
              ].map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-rose-800 transition-colors group cursor-pointer"
              >
                <span>Read More About Our Engineering Practices</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Workplace / Engineering Team Image & Glass Statistics (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Real Workplace Image with Frosted Glass Frame */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-2.5 shadow-2xl group">
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Shree Tech software engineering team collaborating on architecture"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel flex items-center justify-between text-xs text-slate-800">
                  <span className="font-bold text-slate-900">Shree Tech Engineering Labs</span>
                  <span className="text-slate-600 font-medium">Sprint Planning</span>
                </div>
              </div>
            </div>

            {/* 4 Statistics in Frosted Glass Cards with Count-Up */}
            <div className="grid grid-cols-2 gap-4">
              <StatCounter
                value={150}
                suffix="+"
                label="Delivered Projects"
                sublabel="Web, mobile & cloud SaaS"
              />
              <StatCounter
                value={99}
                suffix="%"
                label="Client Retention"
                sublabel="Long-term technology partners"
              />
              <StatCounter
                value={10}
                suffix="+"
                label="Years of Experience"
                sublabel="Established engineering record"
              />
              <StatCounter
                value={45}
                suffix="+"
                label="Senior Engineers"
                sublabel="Specialized across full stack"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
