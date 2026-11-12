'use client';

import { ArrowRight, Sparkles, Shield, Zap, Video, Mail, MessageSquare, Share2 } from 'lucide-react';

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
      {/* Light Sky Blue & Cloud Mist Ambient Lighting Blooms */}
      <div className="absolute top-1/4 -left-32 w-[38rem] h-[38rem] bg-sky-200/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[42rem] h-[42rem] bg-blue-200/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[34rem] h-[34rem] bg-indigo-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Hero Headline & Action Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Headline & Action Buttons (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Translucent Glass Pill Badge */}
            <div className="glass-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-slate-700 text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              <span>Enterprise IT & Modern Digital Experiences</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Building Digital Solutions That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                Move Businesses Forward.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
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
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Frosted Glass Capacity Gauge Card (Inspired directly by user reference) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Engineering Capacity & SLA
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mt-1 max-w-[240px]">
                    Active sprint squads open for Q1/Q2 enterprise architecture engagements.
                  </p>
                </div>

                {/* Semicircle Gauge (directly inspired by user image reference) */}
                <div className="relative flex flex-col items-center justify-center shrink-0">
                  <svg className="w-32 h-20 overflow-visible" viewBox="0 0 100 55">
                    {/* Background track */}
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    {/* Progress arc (70% - 85%) */}
                    <path
                      d="M 10 50 A 40 40 0 0 1 76 18"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="text-center -mt-6">
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight font-stat">85%</span>
                    <div className="text-[11px] text-slate-500 font-medium">Sprint velocity</div>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-8 pt-6 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for new projects
                </span>
                <span className="text-sky-700 font-bold font-stat">150+ Deployed</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Frosted Glass Channels Bar (Directly mirroring the user's reference image cards!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Video Call / Consultation */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-base">
                <Video className="w-4 h-4 text-sky-600" />
                <span>Video Call</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Let&apos;s schedule a 15-minute technical discovery call to review your architecture.
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => scrollTo('contact')}
                className="glass-btn-secondary w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-800 text-center block cursor-pointer"
              >
                Schedule consultation
              </button>
            </div>
          </div>

          {/* Card 2: E-mail Inquiry */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-base">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>E-mail</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Please send us a project brief or requirements doc. We respond within 12 hours.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="mailto:contact@shreetech.com"
                className="glass-btn-secondary w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-800 text-center block cursor-pointer"
              >
                contact@shreetech.com
              </a>
            </div>
          </div>

          {/* Card 3: Direct Hotline */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-base">
                <MessageSquare className="w-4 h-4 text-sky-600" />
                <span>Direct Hotline</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                For urgent enterprise inquiries or RFPs, reach our architecture desk directly.
              </p>
            </div>
            <div className="mt-6">
              <div className="glass-pill py-2 px-3 rounded-xl text-xs text-center text-slate-800 font-bold font-stat">
                +1 (800) 840-2030
              </div>
            </div>
          </div>

          {/* Card 4: Global Social Media */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-base">
                <Share2 className="w-4 h-4 text-sky-600" />
                <span>Social Media</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Follow our open-source repositories, engineering blogs, and release notes.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/80 border border-white hover:bg-white text-slate-700 flex items-center justify-center text-xs font-bold shadow-sm"
              >
                GH
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/80 border border-white hover:bg-white text-slate-700 flex items-center justify-center text-xs font-bold shadow-sm"
              >
                in
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/80 border border-white hover:bg-white text-slate-700 flex items-center justify-center text-xs font-bold shadow-sm"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
