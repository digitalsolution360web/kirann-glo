"use client";

import React from "react";
import Image from "next/image";
import { Award, Clock } from "lucide-react";

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-20 bg-[#e8f4ff] relative">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Infrastructure & Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#003d7a] tracking-tight leading-tight">
                Precision Engineering & Quality Workmanship
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
              Kiran Global operates a heavy machining workshop equipped with CNC boring mills, high capacity automatic welding arches, structural steel bending benches, and precise ultrasonic test kits to verify welding integrity inside heavy templates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="flex gap-3 items-start">
                <div className="bg-[#0072CE] text-[#f5c800] p-2.5 h-10 w-10 flex items-center justify-center rounded-xl shrink-0 shadow-md">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#003d7a] text-sm">Top-Tier Certification</h4>
                  <p className="text-xs text-slate-500 mt-1">Products undergo rigid stress analysis before delivery.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-[#0072CE] text-[#f5c800] p-2.5 h-10 w-10 flex items-center justify-center rounded-xl shrink-0 shadow-md">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#003d7a] text-sm">High Load Capacity</h4>
                  <p className="text-xs text-slate-500 mt-1">Engineered to support heavy throughput over longer intervals.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#0072CE] p-5 rounded-xl shadow-sm">
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-[#003d7a]">Notice:</strong> We offer custom configuration modules mapping specific hard ores like quartzite, basalt, granite, or river bed gravel. Ask our specialists to optimize the cavity configurations for maximum utility.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-[250px] sm:h-[300px] relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <Image src="/home-ab2.webp" alt="Workshop Facility" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003d7a]/40 to-transparent" />
            </div>
            <div className="h-[250px] sm:h-[300px] relative rounded-2xl overflow-hidden shadow-xl translate-y-6 border-4 border-white bg-slate-100">
              <Image src="/41.png" alt="Precision Assembly" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003d7a]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
