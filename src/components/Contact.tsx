'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/SocialIcons';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief project overview';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters of detail';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/3 -right-32 w-[38rem] h-[38rem] bg-sky-200/40 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-[38rem] h-[38rem] bg-indigo-200/40 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-800 mb-3">
                <span>Start a Conversation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Let&apos;s Discuss Your Project
              </h2>
              <p className="mt-4 text-base text-slate-600 font-normal leading-relaxed">
                Whether you are modernizing a legacy software platform, launching a new digital product,
                or scaling your engineering squad, our senior architects are ready to assist.
              </p>
            </div>

            {/* Direct Contact Channels in Glass Cards */}
            <div className="space-y-4">
              <div className="glass-card glass-card-hover p-4 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Direct Inquiries</div>
                  <a
                    href="mailto:contact@shreetech.com"
                    className="text-sm font-bold text-slate-900 hover:text-sky-700 transition-colors"
                  >
                    contact@shreetech.com
                  </a>
                </div>
              </div>

              <div className="glass-card glass-card-hover p-4 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Direct Hotline</div>
                  <a
                    href="tel:+18008402030"
                    className="text-sm font-bold text-slate-900 hover:text-sky-700 transition-colors font-stat"
                  >
                    +1 (800) 840-2030
                  </a>
                </div>
              </div>

              <div className="glass-card glass-card-hover p-4 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Headquarters</div>
                  <div className="text-sm text-slate-700 font-medium">
                    500 Howard Street, Suite 400<br />San Francisco, CA 94105
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs text-slate-500 font-medium mb-3">Direct Channels</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-secondary w-10 h-10 rounded-2xl text-slate-700 hover:text-slate-950 flex items-center justify-center cursor-pointer shadow-sm"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-secondary w-10 h-10 rounded-2xl text-slate-700 hover:text-slate-950 flex items-center justify-center cursor-pointer shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-secondary w-10 h-10 rounded-2xl text-slate-700 hover:text-slate-950 flex items-center justify-center cursor-pointer shadow-sm"
                  aria-label="Twitter / X"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Frosted Glass Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Inquiry Transmitted</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                    We have received your project inquiry. A senior technical director will review your
                    scope and respond within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Website Development',
                        message: '',
                      });
                    }}
                    className="glass-btn-secondary mt-4 px-6 py-2.5 rounded-2xl text-xs font-semibold text-slate-700 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-sky-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className="w-full px-4 py-3 rounded-2xl glass-input text-sm"
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 text-xs text-rose-600 mt-1.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Business Email <span className="text-sky-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full px-4 py-3 rounded-2xl glass-input text-sm"
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-xs text-rose-600 mt-1.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number <span className="text-sky-600">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-2xl glass-input text-sm font-stat"
                      />
                      {errors.phone && (
                        <div className="flex items-center gap-1 text-xs text-rose-600 mt-1.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Service Offering
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-input text-sm bg-white"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile Application Development">Mobile Application Development</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="E-Commerce Development">E-Commerce Development</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="AI & Automation">AI & Automation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Description <span className="text-sky-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your requirements, timeline, or architecture challenges..."
                      className="w-full px-4 py-3 rounded-2xl glass-input text-sm resize-none"
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 text-xs text-rose-600 mt-1.5 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="glass-btn-primary w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Transmitting payload...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    <span>Protected under Non-Disclosure Agreement (NDA)</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
