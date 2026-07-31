"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "what are the typical properties of Kiran sodium slicate?",
    a: "Kiran Sodium Silicate is manufactured using top-grade raw materials ensuring superior physical and chemical properties. It features controlled molar ratio, high purity, optimal viscosity, and excellent binding and adhesive characteristics for versatile industrial applications.",
  },
  {
    q: "what are the typical properties of Kiran potassium slicate?",
    a: "Kiran Potassium Silicate offers exceptional heat resistance, high solubility, superior bonding strength, and anti-efflorescence properties. It is specially formulated for applications in welding electrodes, acid-resistant cements, refractory materials, and specialized coatings.",
  },
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-[#0072CE] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* ─── PAGE HEADER ─────────────────────────────────────────── */}
        <section className="bg-[#003d7a] relative overflow-hidden">
          <div className="h-[3px] w-full bg-[#f5c800]" />
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-12">
            <p className="text-[#f5c800] text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              Help Center
            </p>
            <h1 className="text-[2.6rem] font-black text-white leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>
          </div>
        </section>

        {/* ─── CONTENT ────────────────────────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-black text-[#003d7a] mb-8 text-center">
              Just Find Your Answers Below:
            </p>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                    >
                      <span className="flex items-center gap-3 font-bold text-black text-base md:text-lg">
                        <HelpCircle size={20} className="text-[#0072CE] shrink-0" />
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-[#003d7a] transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-6 bg-white border-t border-slate-200 text-black text-base font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
