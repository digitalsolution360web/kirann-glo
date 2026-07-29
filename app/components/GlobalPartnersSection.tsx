"use client";

import React, { useState } from "react";
import Image from "next/image";

const PARTNERS = [
  { name: "Baker Hughes", logo: "/Baker-hughes.png" },
  { name: "CHC Resources", logo: "/CHC-Resoures.png" },
  { name: "Client 5", logo: "/client5.png.png" },
  { name: "Client 7", logo: "/client7.png.png" },
  { name: "Client 8", logo: "/client8.png.png" },
  { name: "Henkel KGCL", logo: "/Henkel_kgcl.png" },
];

// Duplicate for seamless infinite scroll
const ALL_PARTNERS = [...PARTNERS, ...PARTNERS];

export default function GlobalPartnersSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f4ff]/40 via-white to-[#e8f4ff]/30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,114,206,0.05) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">
              Trusted By Industry Leaders
            </span>
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#003d7a] tracking-tight">
            Our{" "}
            <span className="text-[#0072CE]">Global Partners</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Proudly collaborating with world-class organizations across diverse industries
          </p>
        </div>

        {/* Marquee Track */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div
              className="flex gap-6 w-max"
              style={{
                animation: "marquee 28s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {ALL_PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="group flex-shrink-0 flex items-center justify-center w-[180px] sm:w-[200px] h-[90px] sm:h-[100px] bg-white rounded-2xl border border-slate-100 shadow-sm  hover:border-[#0072CE]/30 transition-all duration-300 cursor-pointer px-6"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-3 filter  transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0072CE]/30" />
            <span className="w-2 h-2 rounded-full bg-[#f5c800]/50" />
            <span className="w-2 h-2 rounded-full bg-[#0072CE]/30" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
