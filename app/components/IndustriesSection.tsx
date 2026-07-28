"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Settings, Shield, Globe, TrendingUp } from "lucide-react";

const INDUSTRIES_SUPPORTED = [
  {
    id: "sodio-lumps",
    title: "Sodium silicate liquid",
    image: "/sodium-silicate-liquid.webp",
    icon: Settings
  },
  {
    id: "sodio-liquido",
    title: "Sodium Silicate Lumps",
    image: "/sodium-silicate-lumps.webp",
    icon: Shield
  },
  {
    id: "potassio-lumps",
    title: "Premium Potassium Silicate Liquid",
    image: "/premium-potassium-silicate-liquid.webp",
    icon: Globe
  },
  {
    id: "potassio-liquido",
    title: "Potassium Silicate Lumps",
    image: "/potassium-silicate-lumps.webp",
    icon: TrendingUp
  }
];

export default function IndustriesSection() {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);

  return (
    <section className="relative min-h-[550px] sm:min-h-[640px] w-full py-16 sm:py-24 overflow-hidden flex items-center justify-center bg-slate-900 transition-all duration-700">
      {INDUSTRIES_SUPPORTED.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndustryIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
            }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            className="object-cover object-center w-full h-full"
          />
        </div>
      ))}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-[1]" />

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 sm:px-8">
        <div className="rounded-[28px] border-[5px] border-white shadow-2xl overflow-hidden bg-transparent flex flex-col md:flex-row min-h-[380px] sm:min-h-[440px]">
          {/* Left transparent window */}
          <div className="flex-1 bg-transparent min-h-[200px] md:min-h-full" />

          {/* Right panel */}
          <div className="w-full md:w-[400px] lg:w-[440px] bg-white/96 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-center shadow-2xl rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[3px] w-6 bg-[#f5c800] rounded-full" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Industries We Support</span>
            </div>
            <div className="space-y-2">
              {INDUSTRIES_SUPPORTED.map((item, index) => {
                const IconComp = item.icon;
                const isActive = index === activeIndustryIndex;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveIndustryIndex(index)}
                    onClick={() => setActiveIndustryIndex(index)}
                    className={`group flex items-center gap-4 p-3.5 rounded-xl cursor-pointer transition-all duration-300 border ${isActive
                        ? "bg-[#0072CE] text-white border-[#0072CE] shadow-lg shadow-blue-700/25 scale-[1.02]"
                        : "bg-white border-slate-100/80 hover:bg-[#e8f4ff]/50 hover:border-blue-200 text-[#003d7a]"
                      }`}
                  >
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive
                          ? "bg-white/10 text-white backdrop-blur-sm"
                          : "bg-[#e8f4ff] text-[#0072CE] group-hover:bg-[#0072CE] group-hover:text-white"
                        }`}
                    >
                      <IconComp size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-xs sm:text-sm md:text-base font-bold tracking-normal leading-tight ${isActive ? "text-white" : "text-[#003d7a]"
                          }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
