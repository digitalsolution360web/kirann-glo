"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Maximize2, X, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const silicatePoints = [
  "In the ammunitions industry, it is used to seal combustible nitrated paper to form a conical paper cartridge for holding black powder. It is used to seal lead ball or conical bullet with the open end of the paper cartridge",
  "It is the only inorganic adhesive that offer high strength at an economic price and sets rapidly",
  "It is used in making paper tubes, multi-layer boards and fibre drums",
  "It is used as an exhaust system joint and crack sealer for muffler, tailpipes and resonators repair",
  "It is used as a high temperature adhesive in critical joint",
];

const silicaPoints = [
  "It is used to enhance bond strength and as a thickening agent",
  "Its dispersed silica particles harden fast within liquid adhesives on contact with solid surface",
  "It prevents heat resistance of hot metals",
  "It improves adhesion in rubber in fabric and wire coat compounds, facilitating easy and rapid processing",
];

const images = ["/ad1.jpg", "/ad2.jpg", "/ad3.jpg"];

export default function AdhesivesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f9] font-sans text-black">
      <Navbar />

      <main className="flex-grow">
        {/* â”€â”€ HERO BANNER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
                <section className="bg-[#003d7a] relative overflow-hidden">
          <div className="h-[4px] w-full bg-gradient-to-r from-[#f5c800] via-[#ffe066] to-[#f5c800]" />
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8 py-12 lg:py-16 relative z-10">
            <nav className="flex items-center gap-2 text-sm font-semibold text-blue-200 mb-5 flex-wrap">
              <Link href="/" className="hover:text-[#f5c800] transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-blue-300/60" />
              <Link href="/industries" className="hover:text-[#f5c800] transition-colors">
                Industries We Serve
              </Link>
              <ChevronRight size={14} className="text-blue-300/60" />
              <span className="text-[#f5c800] font-bold">Adhesives</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Adhesives
            </h1>
          </div>
        </section>

        {/* â”€â”€ MAIN CONTENT AREA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="py-12 lg:py-16 max-w-[1700px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <p className="text-black text-base sm:text-lg leading-relaxed font-bold">
                  The adhesives that are manufactured using chemical agents manufactured by us are known for their high binding propensity.The chemicals that we manufacture and supply for manufacturing adhesives are:
                </p>
              </div>

              {/* Sodium & Potassium Silicate Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-black border-b border-slate-200 pb-3">
                  Sodium and potassium silicate
                </h2>
                <div className="space-y-3 pt-2">
                  {silicatePoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <CheckCircle2 size={18} className="text-[#0072CE] shrink-0 mt-0.5" />
                      <span className="text-base font-semibold text-black leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Precipitate Silica Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-black border-b border-slate-200 pb-3">
                  Precipitate silica
                </h2>
                <div className="space-y-3 pt-2">
                  {silicaPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <CheckCircle2 size={18} className="text-[#0072CE] shrink-0 mt-0.5" />
                      <span className="text-base font-semibold text-black leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Images */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-black mb-4">
                  Gallery
                </h3>
                <div className="space-y-4">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group"
                    >
                      <Image
                        src={img}
                        alt="Adhesives"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg">
                          <Maximize2 size={16} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl w-full aspect-[16/10] bg-black rounded-2xl overflow-hidden">
              <Image src={selectedImage} alt="Enlarged image" fill className="object-contain" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}




