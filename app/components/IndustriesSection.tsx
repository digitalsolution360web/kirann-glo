"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";
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
    href: "/industries/automotive-repair",
  },
  {
    id: "food",
    title: "Food Industry",
    icon: UtensilsCrossed,
    image: "/sodium-silicate-lumps.webp",
    accentColor: "#fbbf24",
    tag: "Processing",
    href: "/industries/food-industry",
  },
  {
    id: "timber",
    title: "Timber Treatment",
    icon: TreePine,
    image: "/Why-Choose-Us.webp",
    accentColor: "#4ade80",
    tag: "Treatment",
    href: "/industries/timber-treatment",
  },
  {
    id: "mining",
    title: "Mining & Mineral Processing",
    icon: Pickaxe,
    image: "/premium-potassium-silicate-liquid.webp",
    accentColor: "#fb923c",
    tag: "Extraction",
    href: "/industries",
  },
  {
    id: "adhesives",
    title: "Adhesives",
    icon: Layers,
    image: "/potassium-silicate-lumps.webp",
    accentColor: "#c084fc",
    tag: "Chemical",
    href: "/industries/adhesives",
  },
  {
    id: "water",
    title: "Water Treatment",
    icon: Droplets,
    image: "/2.jpg",
    accentColor: "#38bdf8",
    tag: "Treatment",
    href: "/industries/water-treatment",
  },
  {
    id: "foundries",
    title: "Foundries",
    icon: Flame,
    image: "/sodium-silicate-liquid.webp",
    accentColor: "#f87171",
    tag: "Metallurgy",
    href: "/industries/foundries",
  },
  {
    id: "soap",
    title: "Soap & Detergents",
    icon: FlaskConical,
    image: "/SUSTAINABILITY.webp",
    accentColor: "#22d3ee",
    tag: "Chemical",
    href: "/industries/soap-and-detergents",
  },
  {
    id: "petroleum",
    title: "Petroleum & Oil Drilling",
    icon: Fuel,
    image: "/home-slider.webp",
    accentColor: "#fde68a",
    tag: "Energy",
    href: "/industries/petroleum-and-oil-drilling",
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
          "linear-gradient(135deg, #f0f6ff 0%, #f8fafc 40%, #eef4fb 70%, #f5f8ff 100%)",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,114,206,0.07) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Soft accent blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#0072CE]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-[#0072CE]/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[3px] w-8 bg-[#0072CE] rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">
                Our Reach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#003d7a] tracking-tight leading-[1.1]">
              Industries{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072CE] to-[#38bdf8]">
                We Serve
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Kiran Global&apos;s sodium &amp; potassium silicate solutions power a wide
              spectrum of industries worldwide — delivering quality and performance at scale.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold whitespace-nowrap bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0072CE] animate-pulse" />
            Hover to explore
          </div>
        </div>

        {/* Strict 3-column grid — every row has exactly 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => {
            const IconComp = industry.icon;
            const isHovered = hovered === industry.id;

            return (
              <Link
                key={industry.id}
                href={industry.href}
                onMouseEnter={() => setHovered(industry.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 block ${
                  isHovered
                    ? "shadow-xl -translate-y-1.5 ring-2 ring-[#0072CE]/20"
                    : "shadow-md ring-1 ring-slate-200"
                }`}
              >
                {/* Image section */}
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className={`object-cover object-center transition-transform duration-700 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />
                  {/* Tag badge on image */}
                  <span
                    className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200"
                    style={{ color: industry.accentColor }}
                  >
                    {industry.tag}
                  </span>
                </div>

                {/* Text section below image */}
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{
                        backgroundColor: `${industry.accentColor}15`,
                      }}
                    >
                      <IconComp
                        size={17}
                        style={{ color: industry.accentColor }}
                      />
                    </div>
                    <h3 className="font-bold text-[#1a1a1a] text-sm sm:text-base leading-tight">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Accent underline */}
                  <div
                    className={`mt-3 h-[2px] rounded-full transition-all duration-500 ${
                      isHovered ? "w-10 opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{ backgroundColor: industry.accentColor }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom stats strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Industries Served", target: 24, suffix: "+" },
            { label: "Countries", target: 25, suffix: "+" },
            { label: "Years Experience", target: 45, suffix: "+" },
            { label: "Satisfied Clients", target: 500, suffix: "+" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-slate-200 rounded-2xl p-5 text-center hover:border-[#0072CE]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl font-black text-[#003d7a]">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-[11px] font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
