"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Maximize2, X, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const paragraphs = [
  "Sodium silicate is used, along with magnesium silicate, in muffler repair and fitting paste.When dissolved in water, both sodium silicate and magnesium silicate form a thick paste that is easy to apply.",
  "The silicate compounds that are left over have glass-like properties, making a temporary, brittle repair..",
];

const images = ["/m1.jpg", "/m2.jpg"];

export default function MetalsPage() {
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
              <span className="text-[#f5c800] font-bold">Metals</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Metals
            </h1>
          </div>
        </section>

        {/* â”€â”€ MAIN CONTENT AREA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="py-12 lg:py-16 max-w-[1700px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Intro & Details Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                {paragraphs.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 size={18} className="text-[#0072CE] shrink-0 mt-0.5" />
                    <p className="text-black text-base sm:text-lg leading-relaxed font-bold">
                      {p}
                    </p>
                  </div>
                ))}
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
                        alt="Metals"
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




