import { 
  Users, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  HeartHandshake, 
  LucideIcon 
} from 'lucide-react';
import { whyChooseUsData } from '@/data/whyChooseUs';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Layers,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/2 left-1/3 w-[38rem] h-[38rem] bg-sky-200/40 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
            <span>Why Choose Shree Tech</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineering Rigor. Transparent Communication. Measurable Outcomes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We operate with the standards of an elite in-house engineering team. Here is how our engineering
            principles translate into clear business advantages for our clients.
          </p>
        </div>

        {/* 6 Advantages in Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsData.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Users;

            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover p-8 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Advantage Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-600 group-hover:text-white group-hover:border-transparent transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold font-stat text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Metric pill */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Standard</span>
                  <span className="text-xs font-black font-stat text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 tracking-tight">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
