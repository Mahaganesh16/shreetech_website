'use client';

import { useState } from 'react';
import { technologyGroups } from '@/data/technologies';
import { 
  ReactLogo, 
  NextLogo, 
  HtmlLogo, 
  CssLogo, 
  JavaScriptLogo, 
  PhpLogo, 
  LaravelLogo, 
  NodeLogo, 
  PythonLogo, 
  MySqlLogo, 
  MongoLogo, 
  PostgresLogo, 
  FlutterLogo, 
  ReactNativeLogo, 
  AwsLogo, 
  AzureLogo, 
  FirebaseLogo 
} from '@/components/TechLogos';

const logoComponentMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ReactLogo,
  NextLogo,
  HtmlLogo,
  CssLogo,
  JavaScriptLogo,
  PhpLogo,
  LaravelLogo,
  NodeLogo,
  PythonLogo,
  MySqlLogo,
  MongoLogo,
  PostgresLogo,
  FlutterLogo,
  ReactNativeLogo,
  AwsLogo,
  AzureLogo,
  FirebaseLogo,
};

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'Cloud'];

  const displayedGroups =
    activeCategory === 'All'
      ? technologyGroups
      : technologyGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="technologies" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Ambient Lighting Blooms for Glass Layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-sky-200/40 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-sky-800 mb-3">
            <span>Core Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Battle-Tested Modern Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We build with reliable, industry-standard languages and frameworks that guarantee long-term
            maintainability, enterprise scalability, and developer ergonomics.
          </p>
        </div>

        {/* Translucent Glass Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-200/60">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-2xl transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'glass-btn-primary shadow-md'
                  : 'glass-btn-secondary text-slate-700 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Organized Technology Groups in Glass Cards */}
        <div className="mt-10 space-y-12">
          {displayedGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-200/60">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  {group.category} Engineering
                </h3>
                <span className="text-xs text-slate-500 font-normal">{group.description}</span>
              </div>

              {/* Grid of Actual Technology Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.items.map((tech) => {
                  const Logo = logoComponentMap[tech.iconComponent] || ReactLogo;

                  return (
                    <div
                      key={tech.name}
                      className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-3.5 group cursor-default"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 p-2 group-hover:scale-105 transition-transform shadow-sm">
                        <Logo className="w-full h-full object-contain" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                          {tech.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate mt-0.5 font-normal">
                          {tech.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
