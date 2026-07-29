"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const NEWS_ARTICLES = [
  {
    id: 1,
    day: "09",
    month: "FEB",
    title: "Global Sodium Silicate Industry 2016 Market Research Report",
    summary:
      "Summary: The Global Sodium Silicate Industry 2016 Market Research Report is a professional and in-depth study on the current state of the sodium silicate industry.",
    href: "#",
  },
  {
    id: 2,
    day: "19",
    month: "NOV",
    title: "Sodium Silicate Market for Detergent Industry from 2015 to 2023",
    summary:
      "Sodium Silicate Market for Detergents, Catalysts, Pulp & Paper, Elastomers, Food & Beverages and Other Applications.",
    href: "#",
  },
];

export default function KGCLNewsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7ff]/70 via-white to-white pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,114,206,0.04) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 xl:gap-24">

          {/* ─── LEFT: KGCL NEWS ─── */}
          <div>
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                <span className="text-[#003d7a]">KGCL</span>{" "}
                <span className="text-slate-400 font-light">NEWS</span>
              </h2>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="h-[3px] w-10 bg-[#0072CE] rounded-full" />
                <div className="h-[3px] w-3 bg-[#f5c800] rounded-full" />
              </div>
            </div>

            {/* News articles */}
            <div className="space-y-5">
              {NEWS_ARTICLES.map((article) => {
                const isHovered = hovered === article.id;
                return (
                  <a
                    key={article.id}
                    href={article.href}
                    onMouseEnter={() => setHovered(article.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`group flex gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-pointer no-underline ${isHovered
                      ? "border-[#0072CE]/25 bg-[#f0f7ff] shadow-xl shadow-blue-500/10 -translate-y-0.5"
                      : "border-slate-100 bg-[#fafcff]"
                      }`}
                  >
                    {/* Date badge */}
                    <div
                      className={`flex-shrink-0 w-[52px] h-[60px] rounded-xl flex flex-col items-center justify-center text-white shadow-md transition-colors duration-300 ${isHovered ? "bg-[#003d7a]" : "bg-[#0072CE]"
                        }`}
                    >
                      <span className="text-xl font-black leading-none">
                        {article.day}
                      </span>
                      <span className="text-[10px] font-bold tracking-widest mt-0.5 opacity-90">
                        {article.month}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold text-sm sm:text-base leading-snug mb-2 transition-colors duration-300 line-clamp-2 ${isHovered ? "text-[#0072CE]" : "text-[#003d7a]"
                          }`}
                      >
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-[13px] leading-[1.75] line-clamp-2">
                        {article.summary}
                      </p>
                      <div className="flex items-center gap-1.5 mt-3">
                        <span className="text-[#0072CE] text-xs font-bold">
                          Read More
                        </span>
                        <ArrowRight
                          size={12}
                          className={`text-[#0072CE] transition-transform duration-300 ${isHovered ? "translate-x-1" : ""
                            }`}
                        />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ─── RIGHT: INDUSTRIES OVERVIEW ─── */}
          <div>
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                <span className="text-[#003d7a]">INDUSTRIES</span>{" "}
                <span className="text-slate-400 font-light">OVERVIEW</span>
              </h2>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="h-[3px] w-10 bg-[#0072CE] rounded-full" />
                <div className="h-[3px] w-3 bg-[#f5c800] rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
