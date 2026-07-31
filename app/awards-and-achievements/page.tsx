"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AwardsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-[#0072CE] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* ─── PAGE HEADER ─────────────────────────────────────────── */}
        <section className="bg-[#003d7a] relative overflow-hidden">
          <div className="h-[3px] w-full bg-[#f5c800]" />
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-12">
            <p className="text-[#f5c800] text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              About Us
            </p>
            <h1 className="text-[2.6rem] font-black text-white leading-tight tracking-tight">
              Awards and Achievements
            </h1>
          </div>
        </section>

        {/* ─── CONTENT ────────────────────────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
            {/* Metro Emblem / Card */}
            <div className="w-full md:w-80 bg-white rounded-xl p-6 border border-slate-200 shadow-md shrink-0 text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-[#a81c1c]">
                <div className="w-10 h-10 rounded-full border-2 border-[#a81c1c] flex items-center justify-center font-black text-xs">
                  LMRC
                </div>
                <div className="text-left font-black text-xs leading-tight">
                  LUCKNOW METRO<br />RAIL CORPORATION
                </div>
              </div>
              <div className="w-full h-40 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white font-black text-sm p-4 text-center">
                LUCKNOW METRO RAIL PROJECT
              </div>
            </div>

            {/* Achievement text */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-[#0072CE] uppercase tracking-widest">Major Project Milestone</span>
              <h2 className="text-xl md:text-2xl font-black text-[#003d7a] uppercase leading-relaxed">
                KIRAN GLOBAL CHEM LIMITED HAS COMMENCED SUPPLIES OF KIRANSIL-SODIUM SILICATE BASED GROUTING SOLUTIONS TO LUCKNOW METRO RAIL PROJECT
              </h2>
              <div className="h-[3px] w-12 bg-[#f5c800]" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
