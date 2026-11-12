'use client';

import { useState } from 'react';
import { projectsData, Project } from '@/data/projects';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'enterprise', label: 'Enterprise SaaS' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Infrastructure' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/3 -right-32 w-[38rem] h-[38rem] bg-orange-200/25 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-[38rem] h-[38rem] bg-rose-200/25 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
              <span>Selected Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Featured Client Deployments
            </h2>
            <p className="mt-4 text-base text-slate-600 font-normal leading-relaxed">
              Explore how our engineering teams design, build, and scale mission-critical digital systems
              across finance, healthcare, logistics, and global commerce.
            </p>
          </div>

          {/* Translucent Glass Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-2xl transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'glass-btn-primary shadow-md'
                    : 'glass-btn-secondary text-slate-700 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial-Style Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.layoutSpan === 'featured';

            return (
              <div
                key={project.id}
                className={`group rounded-3xl glass-card glass-card-hover overflow-hidden flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Large Preview Image with subtle zoom */}
                <div
                  className={`relative overflow-hidden cursor-pointer ${
                    isFeatured ? 'h-72 sm:h-80' : 'h-64'
                  }`}
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-75" />

                  {/* Top Metadata Glass Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="glass-pill px-3 py-1 rounded-xl text-xs font-semibold text-slate-800">
                      {project.categoryLabel}
                    </span>
                    <span className="glass-pill text-xs font-stat font-semibold text-slate-700 px-2.5 py-1 rounded-xl">
                      {project.year}
                    </span>
                  </div>

                  {/* Metric Glass Pill at Bottom Right */}
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-2xl glass-panel text-right">
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{project.metrics.label}</div>
                    <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 font-stat tracking-tight">{project.metrics.value}</div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-orange-600 mb-1">{project.client}</div>
                    <h3
                      className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="glass-pill px-2.5 py-1 rounded-xl text-xs text-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom View Project Trigger */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-bold text-orange-600 hover:text-rose-700 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs text-slate-500 font-medium">Enterprise Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Frosted Glass Case Study Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2.5 rounded-2xl bg-white/80 text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="glass-pill px-3 py-1 rounded-xl text-xs font-semibold text-orange-800">
                {activeModalProject.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 font-medium">Client: {activeModalProject.client}</span>
              <span className="text-xs text-slate-500 font-stat font-semibold">Year: {activeModalProject.year}</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-2">{activeModalProject.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">{activeModalProject.summary}</p>

            <div className="mt-6 p-4 rounded-2xl glass-card flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Primary Impact Metric</div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 font-stat tracking-tight mt-0.5">
                  {activeModalProject.metrics.value}
                </div>
              </div>
              <div className="text-xs text-slate-600 font-semibold">{activeModalProject.metrics.label}</div>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Architectural Highlights
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>Sub-second response latencies verified under peak production load</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>Strict TypeScript type safety ensuring zero unhandled runtime exceptions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>Automated CI/CD build and testing pipeline with zero-downtime rolling deploys</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="glass-pill px-2.5 py-1 rounded-xl text-xs text-slate-700 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 flex justify-end">
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  const el = document.getElementById('contact');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="glass-btn-primary px-6 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm cursor-pointer"
              >
                Discuss a Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
