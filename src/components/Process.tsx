import { processSteps } from '@/data/process';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/2 right-1/4 w-[38rem] h-[38rem] bg-orange-200/25 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Development Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A disciplined six-phase development lifecycle engineered to transition concepts into robust,
            maintainable, and production-tested software platforms.
          </p>
        </div>

        {/* 6 Step Process in Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="glass-card glass-card-hover p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 font-stat tracking-tight">
                    {step.number}
                  </span>
                  <span className="glass-pill text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-slate-700 font-bold">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Key Deliverables
                </div>
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
