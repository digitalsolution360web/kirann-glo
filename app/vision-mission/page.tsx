"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Target, Compass, Award, CheckCircle2 } from "lucide-react";

export default function VisionMissionPage() {
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
              Vision &amp; Mission
            </h1>
          </div>
        </section>

        {/* ─── VISION & MISSION CONTENT ───────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Vision Card */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0072CE] flex items-center justify-center text-white shrink-0">
                  <Compass size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0072CE] uppercase tracking-widest">Our Future</p>
                  <h2 className="text-2xl font-black text-[#003d7a]">Vision</h2>
                </div>
              </div>
              <div className="h-[2px] w-10 bg-[#f5c800] mb-6" />
              <p className="text-black text-base md:text-lg font-medium leading-relaxed">
                The company’s united vision is to become a globally-renowned organisation that delivers skilfully crafted products and services, earning highest returns for our stakeholders and delivering the best customer service.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#003d7a] flex items-center justify-center text-white shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0072CE] uppercase tracking-widest">Our Commitment</p>
                  <h2 className="text-2xl font-black text-[#003d7a]">Mission</h2>
                </div>
              </div>
              <div className="h-[2px] w-10 bg-[#f5c800] mb-6" />
              <p className="text-black font-bold text-sm mb-4">Our Mission is To:</p>
              <ul className="space-y-3">
                {[
                  "Nurture commitment to quality and consistency as the key to sustainability",
                  "To give highest value for money to all our customers",
                  "To facilitate our employees with opportunities to achieve their highest potential",
                  "To create modern infrastructure and seamless logistics to address our customer demands on time",
                  "To innovate and adopt latest methods for highest ROI",
                  "To be a Fair Trade Partner in business",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-black text-sm font-semibold leading-snug">
                    <CheckCircle2 size={18} className="text-[#0072CE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Strength */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-[#f5c800]" size={28} />
              <h2 className="text-2xl md:text-3xl font-black text-[#003d7a]">Our Strength</h2>
            </div>
            <div className="h-[3px] w-12 bg-[#f5c800] mb-6" />
            <div className="space-y-6 text-black text-base md:text-lg font-medium leading-relaxed">
              <p>
                Our company’s strength lies in the established practices that are updated with the changing needs of the industry and our enduring product and service quality. With our vision for global growth we have established ourselves worldwide.
              </p>
              <p>
                We have consistently introduced new products to our range of offerings and multiplied the capacity to meet the increasing demand for our products. We are committed to maintain our leadership position in the industry and are working hard to penetrate unexplored regions worldwide, while maintaining our existing high service standards.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
