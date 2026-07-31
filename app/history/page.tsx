"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HistoryPage() {
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
              History
            </h1>
          </div>
        </section>

        {/* ─── CONTENT ────────────────────────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black text-[#003d7a] mb-2">M S JAIN GROUP</h2>
              <div className="h-[3px] w-12 bg-[#f5c800] mb-6" />
              <div className="space-y-4 text-black text-base md:text-lg font-medium leading-relaxed">
                <p>
                  Kiran Global Chems Limited was started in the year 1979 with a single small scale manufacturing unit for preparing sodium silicate to detergent manufacturers. It was established by Mr. MS Jain who had a long standing vision of expanding his company to attain global acclaim as a market leader and trend setter.
                </p>
                <p>
                  Over the years, the company has steadily expanded its product range and today we supply chemical raw materials to companies across various industries, worldwide. Our multi-product, large scale commercial operation functions with 32 manufacturing units, contributing to over 50% of the group’s turnover.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-md">
              <h2 className="text-2xl font-black text-[#003d7a] mb-2">KIRAN GLOBAL CHEMS LIMITED</h2>
              <div className="h-[3px] w-12 bg-[#f5c800] mb-6" />
              <div className="space-y-4 text-black text-base md:text-lg font-medium leading-relaxed">
                <p>
                  Today we are the largest manufacturers in the country of Sodium and potassium silicate and have surpassed 300,000 tonnes per annum production mark. We also have installed capacities of 15,000 tonnes of LABSA and 25,000 tonnes of Potassium Silicate.
                </p>
                <p>
                  With the vision of global expansion through import and export, our facilities were established largely in the coastal towns with easy access to ports. Our facilities are fully equipped with modern warehousing facilities, quality assurance laboratories and are fully functional to meet large scale demands at all times. Our persistence and insistence on service quality has earned us a “Sigma 4” rating for operational efficiencies.
                </p>
                <p>
                  Continue to grow from strength to strength, innovating new methods for producing chemicals that are both economic and environment friendly without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
