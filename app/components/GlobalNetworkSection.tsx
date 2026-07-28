"use client";

import React from "react";

export default function GlobalNetworkSection() {
  return (
    <section className="py-20 bg-[#003d7a] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 world-grid-bg" />
      {/* Concentric circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-16 rounded-full border border-[#f5c800]/30" />
        <div className="absolute inset-32 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute inset-48 rounded-full border border-[#4db8e8]/20" />
        <div className="absolute inset-64 rounded-full border border-white/5" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#f5c800] uppercase">Global Network</span>
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight">
            World Footprint & Target Quality
          </h2>
          <p className="text-blue-200 text-sm sm:text-base leading-[1.7]">
            Concentric logistics network supplying crusher aggregates, wear spares, and active remote maintenance worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
          {[
            { region: "Europe", desc: "Strategic spares storage in Germany & Romania to supply Eastern Europe." },
            { region: "Asia-Pacific", desc: "Headquarters and prime heavy assembly centers based in Northern India." },
            { region: "Middle East", desc: "Customised high-heat crusher lubricant upgrades for UAE & Saudi operations." },
            { region: "Africa", desc: "Operational projects in copper, gold, and iron mines across 8+ African nations." },
          ].map((item, i) => (
            <div key={item.region} className={`space-y-2 ${i > 0 ? "border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6" : ""}`}>
              <div className="text-2xl font-black text-[#f5c800]">{item.region}</div>
              <p className="text-xs text-blue-200 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs text-blue-300 font-semibold bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
            <span className="h-2 w-2 bg-emerald-400 rounded-full animate-ping" />
            Active Deployments Tracked Globally.
          </div>
        </div>
      </div>
    </section>
  );
}
