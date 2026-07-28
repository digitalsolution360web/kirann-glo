"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Shield, RefreshCw, Globe, Award } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section id="insights-services" className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Decorative background grids and blur blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#f5c800]/5 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Case Study & Primary Services */}
          <div className="lg:col-span-7 space-y-6">

            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#0072CE] uppercase">Industry Insights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#003d7a] tracking-tight leading-tight">
                Case Studies & <span className="text-[#0072CE]">Primary Services</span>
              </h2>
            </div>

            {/* Case Studies Card */}
            <div className="relative border-l-4 border-[#0072CE] pl-5 sm:pl-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#003d7a] text-white text-[10px] font-black uppercase tracking-wider">
                <TrendingUp size={11} className="text-[#f5c800]" />
                <span>Case Studies</span>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-[#003d7a] tracking-tight leading-snug">
                Sodium Silicate Market Analysis, Market Size, Application Analysis, Regional Outlook, Competitive Strategies And Forecasts, 2014 To 2020
              </h3>

              <p className="text-slate-800 text-sm sm:text-base leading-[1.7] font-medium">
                Global sodium silicate market is expected to experience growth in coming years owing to its increasing application in textile, cardboard, and paint industries. Growth in textile industry is expected to drive the sodium silicate market over the forecast period. High paints & coatings demand is expected to have a positive impact on global sodium silicate market. Concrete treated with sodium silicate solution helps to significantly reduce porosity in most masonry products such as concrete, stucco, plasters. Increasing infrastructure spending globally is expected to drive sodium silicate market. Sodium silicate is extensively used as filler for elastomers in automotive tires.
              </p>
            </div>

            {/* Primary Services Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-slate-300" />
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Primary Services</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                {/* Service 1: Safety and Health Inspection */}
                <div className="group p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#0072CE]/35 hover:bg-[#e8f4ff]/25 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 text-[#0072CE] border border-slate-200/60 group-hover:border-[#0072CE]/30 flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300">
                    <Shield size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 text-sm leading-tight group-hover:text-[#0072CE] transition-colors duration-300">
                      Safety and Health Inspection
                    </h4>
                    <p className="text-xs text-slate-700 font-medium leading-normal mt-0.5">
                      Comprehensive assessment protocols evaluating site-wide safety configurations and operational safety checks.
                    </p>
                  </div>
                </div>

                {/* Service 2: Environmental Engineering */}
                <div className="group p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#0072CE]/35 hover:bg-[#e8f4ff]/25 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 text-[#0072CE] border border-slate-200/60 group-hover:border-[#0072CE]/30 flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300">
                    <RefreshCw size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-sm leading-tight group-hover:text-[#0072CE] transition-colors duration-300">
                      Environmental Engineering
                    </h4>
                    <p className="text-xs text-slate-700 font-medium leading-normal mt-0.5">
                      Configuring systems and workshops focused on energy efficiency and clean manufacturing processes.
                    </p>
                  </div>
                </div>

                {/* Service 3: Environmental Consulting */}
                <div className="group p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#0072CE]/35 hover:bg-[#e8f4ff]/25 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 text-[#0072CE] border border-slate-200/60 group-hover:border-[#0072CE]/30 flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300">
                    <Globe size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-sm leading-tight group-hover:text-[#0072CE] transition-colors duration-300">
                      Environmental Consulting
                    </h4>
                    <p className="text-xs text-slate-700 font-medium leading-normal mt-0.5">
                      Providing regulatory pathway directions, industrial carbon-footprint reviews, and green standard audits.
                    </p>
                  </div>
                </div>

                {/* Service 4: Reliability and Safety Assessment */}
                <div className="group p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#0072CE]/35 hover:bg-[#e8f4ff]/25 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 text-[#0072CE] border border-slate-200/60 group-hover:border-[#0072CE]/30 flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300">
                    <Award size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-sm leading-tight group-hover:text-[#0072CE] transition-colors duration-300">
                      Reliability and Safety Assessment
                    </h4>
                    <p className="text-xs text-slate-700 font-medium leading-normal mt-0.5">
                      Evaluating structural load dynamics, failure rate audits, and heavy equipment stress checks.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Premium Image Container */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] h-[280px] sm:h-[340px] lg:h-[380px] rounded-[24px] overflow-hidden border-4 border-white shadow-xl bg-slate-200 group flex">
              <Image
                src="/Why-Choose-Us.webp"
                alt="Why Choose Kiran Global"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Inner dark gradient overlay for text readability & elite overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top-right brand tag */}
              <div className="absolute top-6 right-6 bg-[#003d7a]/90 text-white text-[10px] font-black tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md border border-white/10 uppercase select-none">
                Verified Capabilities
              </div>

              {/* Premium floating stats card overlay on top of image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0072CE] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Award size={22} className="text-[#f5c800]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-[#0072CE] tracking-wider">Industrial Assurance</h4>
                  <p className="text-xs font-bold text-slate-800 leading-snug mt-0.5">Kiran Global Industrial Standards & Precision Auditing</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
