'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden flex items-center"
    >
      {/* Ambient Lighting Blooms for Glass Layers (Harmonized with Logo Colors) */}
      <div className="absolute top-1/4 -left-32 w-[38rem] h-[38rem] bg-orange-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[42rem] h-[42rem] bg-rose-200/35 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[34rem] h-[34rem] bg-purple-200/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Hero Headline & Action Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline & Action Buttons (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Translucent Glass Pill Badge */}
            <div className="glass-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-slate-700 text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 animate-ping" />
              <span>Enterprise IT & Modern Digital Experiences</span>
            </div>

            {/* Headline with Official Logo Colors */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-black tracking-tight text-slate-900 leading-[1.12]">
              Building Digital Solutions That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600">
                Move Businesses Forward.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              We help businesses transform bold ideas into scalable digital products through innovative
              software engineering, modern cloud technologies, and thoughtful glassmorphism design.
            </p>

            {/* Dual Glass Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('services')}
                className="glass-btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm cursor-pointer shadow-lg w-full sm:w-auto"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="glass-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm cursor-pointer w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with right-image.png (Expanded large presentation) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            {/* Ambient warm glow behind visual */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-orange-300/35 via-rose-300/25 to-purple-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Technology & UI/UX Illustration: right-image.png */}
            <div className="relative w-full max-w-2xl lg:max-w-none flex items-center justify-center lg:justify-end">
              <Image
                src="/images/right-image.png"
                alt="Modern Software Engineering & UI/UX Architecture"
                width={1338}
                height={746}
                priority
                unoptimized
                className="w-full h-auto object-contain scale-100 sm:scale-105 lg:scale-115 transform-gpu drop-shadow-[0_30px_60px_rgba(15,23,42,0.14)] transition-transform duration-500 hover:scale-105 lg:hover:scale-[1.18]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
