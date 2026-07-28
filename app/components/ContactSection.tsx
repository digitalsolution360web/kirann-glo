"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4500);
  };

  return (
    <section id="contact" className="py-20 bg-[#e8f4ff] relative">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Need Help?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#003d7a] tracking-tight leading-tight">
                Connect With Our Engineers
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
              Have a specific quarry configuration, throughput quota, or parts request? Send us your message. Our design unit will draft an initial proposal within 24 hours.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { icon: Phone, label: "Call Support", value: "+39 3391192817", href: "tel:+393391192817" },
                { icon: Mail, label: "Business Email", value: "info@kiranitalia.it", href: "mailto:info@kiranitalia.it" },
                { icon: MapPin, label: "Manufacturing HQ", value: "Plot 140, Phase 2, Industrial Cluster, Delhi-NCR", href: undefined },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 items-center">
                    <div className="bg-[#0072CE] text-[#f5c800] p-3 rounded-xl shrink-0 shadow-md">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-bold text-slate-800 hover:text-[#0072CE] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-bold text-slate-800">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-[#f5c800] rounded-full" />
                <h3 className="text-xl font-black text-[#003d7a] uppercase tracking-tight">Submit Quote Request</h3>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-emerald-700 text-center space-y-3">
                  <CheckCircle className="mx-auto text-emerald-500" size={44} />
                  <h4 className="font-black text-lg text-emerald-800">Thank You! Request Filed.</h4>
                  <p className="text-xs">Our engineering division will analyze your details and respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        className="w-full bg-[#e8f4ff] border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/10 transition-all text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@company.com"
                        className="w-full bg-[#e8f4ff] border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/10 transition-all text-slate-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+39 3391192817"
                      className="w-full bg-[#e8f4ff] border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/10 transition-all text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Job Requirements / Details *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Provide details like expected throughput, stone material type, feeding size, etc..."
                      className="w-full bg-[#e8f4ff] border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/10 transition-all text-slate-800 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0072CE] hover:bg-[#003d7a] text-white font-black p-4 rounded-xl text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:shadow-blue-900/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry Now</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
