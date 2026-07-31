"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const industries = [
  { title: "Textile Industry", image: "/1.webp" },
  { title: "Soap & Detergent", image: "/2.webp" },
  { title: "Water Treatment", image: "/3.webp" },
  { title: "Cosmetics", image: "/4.webp" },
  { title: "Paper Manufacturing", image: "/5.webp" },
  { title: "Timber Treatment", image: "/6.webp" },
  { title: "Mineral Beneficiation", image: "/7.webp" },
  { title: "Petroleum & Oil", image: "/8.webp" },
  { title: "Foundries", image: "/9.webp" },
  { title: "Food Industry", image: "/10.webp" },
  { title: "Metals", image: "/11.webp" },
  { title: "Agriculture", image: "/12.webp" },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-[#0072CE] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* ─── PAGE HEADER ─────────────────────────────────────────── */}
        <section className="bg-[#003d7a] relative overflow-hidden">
          <div className="h-[3px] w-full bg-[#f5c800]" />
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-12">
            <p className="text-[#f5c800] text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              Kiran Global Chem Limited
            </p>
            <h1 className="text-[2.6rem] font-black text-white leading-tight tracking-tight">
              Industries we serve
            </h1>
          </div>
        </section>

        {/* ─── INTRO SECTION ───────────────────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 pt-10 pb-6 text-center">
          <p className="text-gray-500 italic text-black md:text-lg font-bold tracking-wide">
            Our Products are using various industries
          </p>
          <div className="h-[2px] w-30 bg-black mx-auto mt-4" />
        </section>

        {/* ─── INDUSTRIES GRID ─────────────────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {industries.map((ind, idx) => (
              <div
                key={ind.title}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Industry Name Header */}


                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle top border overlap style */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#f5c800] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                <div className="py-4 px-6 border-b border-slate-50 flex items-center justify-center bg-slate-50/50 group-hover:bg-[#0072CE]/5 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-black tracking-wide group-hover:text-[#0072CE] transition-colors duration-300">
                    {ind.title}
                  </h3>

                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
