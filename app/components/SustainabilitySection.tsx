"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, RefreshCw, Wind } from "lucide-react";

export default function SustainabilitySection() {
  return (
    <section className="py-16 sm:py-20 bg-[#e8f4ff] relative overflow-hidden border-y border-blue-100/60">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
            <Image src="/SUSTAINABILITY.webp" alt="Kiran Global Commitment" fill priority className="object-cover object-center" />
          </div>
          <div className="lg:col-span-6 space-y-5">
            {/* Accent bar */}
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Commitment & Responsibility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#003d7a] tracking-tight leading-tight">
              Building a <span className="text-[#0072CE]">Sustainable</span> Future
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
              We are committed to environmentally responsible manufacturing practices that reduce environmental impact while maximizing efficiency. Our focus on sustainable innovation helps industries achieve better performance with lower environmental costs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0072CE] hover:bg-[#003d7a] text-white font-bold px-7 py-3.5 rounded-full transition-all text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:shadow-blue-900/25 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight size={15} />
            </a>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 flex items-start gap-3 hover:border-[#0072CE]/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#e8f4ff] text-[#0072CE] border border-blue-100 flex items-center justify-center shrink-0">
                  <RefreshCw size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Resource Efficiency</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Optimised operations</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 flex items-start gap-3 hover:border-[#0072CE]/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#e8f4ff] text-[#0072CE] border border-blue-100 flex items-center justify-center shrink-0">
                  <Wind size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Reduced Emissions</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Cleaner production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
