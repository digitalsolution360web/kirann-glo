"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Quote } from "lucide-react";

export default function ChairmansMessagePage() {
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
              Chairman&apos;s Message
            </h1>
          </div>
        </section>

        {/* ─── CONTENT ────────────────────────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Chairman Photo */}
            <div className="lg:col-span-4">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/chairman-pic.jpg"
                  alt="M S Jain, Chairman"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#003d7a] to-transparent p-6">
                  <h3 className="text-xl font-black text-white uppercase">M S Jain</h3>
                  <p className="text-[#f5c800] text-xs font-bold uppercase tracking-widest">Chairman</p>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-black text-base md:text-lg font-medium leading-relaxed">
              <div className="border-l-4 border-[#0072CE] pl-6 py-2 bg-slate-50 rounded-r-xl">
                <p className="italic text-[#003d7a] font-semibold text-lg md:text-xl">
                  &ldquo;My ambition is to establish Kiran Global Chems Ltd. as a market leader in the global chemical industry and to achieve this goal through innovative technologies, industry best practices and economic soundness.&rdquo;
                </p>
              </div>

              <p>
                My greatest joy lies in enabling people achieve their ambitions and moulding fresh talent into successful individuals. Every opportunity I get to guide an individual in attaining their goals I embrace as an opportunity to learn something new and grow personally.
              </p>

              <p>
                In my view, a good organisation is one that does not deviate from its growth curve in spite of temporary setbacks. I am proud of our company’s achievement in attaining the number one position in India and confident that we shall continue to hold this spot for a long time.
              </p>

              {/* Bhagwat Gita Quote Box */}
              <div className="mt-6 bg-[#003d7a] text-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
                <Quote className="absolute right-4 bottom-4 text-white/10 w-24 h-24" />
                <p className="text-base md:text-lg font-serif italic leading-relaxed mb-4 text-slate-100">
                  &ldquo;They, who perform their work offering all results to me, Who hold their hearts and mind steadfast in me in whatever they do, who worship their work, to them I offer the platform. Doubt it not that they will inexorably reach the top.&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-[#f5c800] text-xs font-bold tracking-widest uppercase">
                    BHAGWAT GITA 12.6/12.8
                  </span>
                  <span className="text-white font-bold text-sm">
                    M S Jain, Chairman
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
