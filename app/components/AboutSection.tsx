"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#e8f4ff] to-transparent pointer-events-none" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-[#0072CE]/5 pointer-events-none" />
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#0072CE]/5 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#003d7a] tracking-tight leading-tight">
                About <span className="text-[#0072CE]">Kiran Global</span>
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
              We are a leading manufacturer and supplier of high-performance stone crusher machines, delivering advanced crushing solutions for the construction and mining industries. With years of industry experience, we specialize in designing and manufacturing both mobile crushers and fixed crushing plants.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
              Our company is committed to providing reliable equipment that helps clients maximize productivity while minimizing operational costs. From small-scale projects to large industrial operations, we offer customized crushing solutions tailored to specific requirements.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-[#003d7a] p-5 rounded-2xl shadow-lg border border-blue-900/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0072CE] to-[#003d7a]" />
                <div className="relative">
                  <div className="text-3xl font-black text-[#f5c800]">20+</div>
                  <div className="text-xs font-bold text-blue-200 mt-1 uppercase tracking-wider">Years Experience</div>
                </div>
              </div>
              <div className="bg-[#f5c800] p-5 rounded-2xl shadow-lg relative overflow-hidden group">
                <div className="relative">
                  <div className="text-3xl font-black text-[#003d7a]">24+</div>
                  <div className="text-xs font-bold text-[#003d7a]/70 mt-1 uppercase tracking-wider">Industries Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3D Flip Card */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="perspective-1000 w-full max-w-[460px] h-[360px] sm:h-[430px] group cursor-pointer relative">
              <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl bg-white p-4 border-4 border-[#0072CE]/10">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image src="/why-choose.jpeg" alt="Kiran Global Stationary Crusher" fill className="object-contain bg-white" priority />
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-2xl bg-white p-4 border-4 border-[#f5c800]/30">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    {/* <Image src="/41.png" alt="Kiran Global Mobile Crusher" fill className="object-contain bg-white" /> */}
                  </div>
                </div>
              </div>
              {/* Flip hint */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#0072CE]/50 uppercase tracking-widest whitespace-nowrap">
                Hover to flip
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
