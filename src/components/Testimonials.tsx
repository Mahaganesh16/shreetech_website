'use client';

import { useState } from 'react';
import { testimonialsData } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const active = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/2 left-1/4 w-[38rem] h-[38rem] bg-sky-200/40 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by Technology Leaders
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Read what engineering and product executives say about partnering with Shree Tech.
          </p>
        </div>

        {/* Clean Frosted Glass Testimonial Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl glass-panel shadow-2xl">
          <Quote className="w-12 h-12 text-orange-500/20 mb-6" />

          {/* Review Text */}
          <p className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed italic">
            &ldquo;{active.content}&rdquo;
          </p>

          {/* Client Bio & Rating */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl p-[2px] bg-gradient-to-tr from-orange-400 via-rose-500 to-purple-500 shadow-sm">
                <img
                  src={active.imageUrl}
                  alt={active.name}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">{active.name}</div>
                <div className="text-xs text-slate-500 font-medium">
                  {active.designation}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 font-bold">{active.company}</span>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Manual Slider Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-gradient-to-r from-orange-500 to-rose-600 shadow-sm' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="glass-btn-secondary p-3 rounded-2xl text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="glass-btn-secondary p-3 rounded-2xl text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
