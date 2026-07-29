"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Car,
  UtensilsCrossed,
  TreePine,
  Pickaxe,
  Layers,
  Droplets,
  Flame,
  FlaskConical,
  Fuel,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: "automotive",
    title: "Automotive Repair",
    icon: Car,
    image: "/home-ab2.webp",
    accentColor: "#60a5fa",
    tag: "Manufacturing",
  },
  {
    id: "food",
    title: "Food Industry",
    icon: UtensilsCrossed,
    image: "/sodium-silicate-lumps.webp",
    accentColor: "#fbbf24",
    tag: "Processing",
  },
  {
    id: "timber",
    title: "Timber Treatment",
    icon: TreePine,
    image: "/Why-Choose-Us.webp",
    accentColor: "#4ade80",
    tag: "Treatment",
  },
  {
    id: "mining",
    title: "Mining & Mineral Processing",
    icon: Pickaxe,
    image: "/premium-potassium-silicate-liquid.webp",
    accentColor: "#fb923c",
    tag: "Extraction",
  },
  {
    id: "adhesives",
    title: "Adhesives",
    icon: Layers,
    image: "/potassium-silicate-lumps.webp",
    accentColor: "#c084fc",
    tag: "Chemical",
  },
  {
    id: "water",
    title: "Water Treatment",
    icon: Droplets,
    image: "/2.jpg",
    accentColor: "#38bdf8",
    tag: "Treatment",
  },
  {
    id: "foundries",
    title: "Foundries",
    icon: Flame,
    image: "/sodium-silicate-liquid.webp",
    accentColor: "#f87171",
    tag: "Metallurgy",
  },
  {
    id: "soap",
    title: "Soap & Detergents",
    icon: FlaskConical,
    image: "/SUSTAINABILITY.webp",
    accentColor: "#22d3ee",
    tag: "Chemical",
  },
  {
    id: "petroleum",
    title: "Petroleum & Oil Drilling",
    icon: Fuel,
    image: "/home-slider.webp",
    accentColor: "#fde68a",
    tag: "Energy",
  },
];

export default function IndustriesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="industries"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0c1e3a 0%, #0d2d52 40%, #0a1f3d 70%, #0e2847 100%)",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#0072CE]/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-[#1e40af]/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#f5c800]/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#7dd3fc] uppercase">
                Our Reach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-[1.1]">
              Industries{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#7dd3fc]">
                We Serve
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Kiran Global's sodium &amp; potassium silicate solutions power a wide
              spectrum of industries worldwide — delivering quality and performance at scale.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold whitespace-nowrap bg-white/8 border border-white/12 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse" />
            Hover to explore
          </div>
        </div>

        {/* Strict 3-column grid — every row has exactly 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry) => {
            const IconComp = industry.icon;
            const isHovered = hovered === industry.id;

            return (
              <div
                key={industry.id}
                onMouseEnter={() => setHovered(industry.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                  isHovered
                    ? "shadow-2xl -translate-y-1.5 ring-2 ring-white/20"
                    : "shadow-md ring-1 ring-white/8"
                }`}
                style={{ minHeight: "240px" }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className={`object-cover object-center transition-all duration-700 ${
                      isHovered
                        ? "scale-110 brightness-60"
                        : "scale-100 brightness-45"
                    }`}
                  />
                </div>

                {/* Dark overlay — ensures text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1e]/95 via-[#0d1b33]/50 to-[#0d1b33]/20" />

                {/* Accent glow on hover */}
                {isHovered && (
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${industry.accentColor}, transparent 70%)`,
                    }}
                  />
                )}

                {/* Top row: icon + tag */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-start justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm border transition-all duration-400 ${
                      isHovered
                        ? "border-white/30 scale-110"
                        : "bg-black/40 border-white/15"
                    }`}
                    style={
                      isHovered
                        ? {
                            backgroundColor: `${industry.accentColor}25`,
                            borderColor: `${industry.accentColor}60`,
                          }
                        : {}
                    }
                  >
                    <IconComp
                      size={18}
                      className="text-white"
                      style={isHovered ? { color: industry.accentColor } : {}}
                    />
                  </div>

                  <span
                    className="text-[9px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border bg-black/40 backdrop-blur-sm text-white border-white/20"
                  >
                    {industry.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                  <h3 className="font-black text-white text-base sm:text-lg leading-tight drop-shadow-md">
                    {industry.title}
                  </h3>

                  {/* Accent underline on hover */}
                  <div
                    className={`mt-2 h-[2.5px] rounded-full transition-all duration-500 ${
                      isHovered ? "w-10 opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{ backgroundColor: industry.accentColor }}
                  />

                  {/* Explore text on hover */}
                  <div
                    className={`flex items-center gap-1.5 mt-2 transition-all duration-300 ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    <span className="text-xs font-semibold text-slate-200">
                      Explore applications
                    </span>
                    <svg
                      className="w-3 h-3 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Industries Served", value: "24+" },
            { label: "Countries", value: "25+" },
            { label: "Years Experience", value: "45+" },
            { label: "Satisfied Clients", value: "500+" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-5 text-center hover:bg-white/12 transition-colors duration-300"
            >
              <div className="text-2xl font-black text-white">{s.value}</div>
              <div className="text-[11px] font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
