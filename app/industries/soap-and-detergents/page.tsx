"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Maximize2, X, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const benefits = [
  "It is a building agent used in household cleaning solutions cleaning",
  "Improves washing property of the detergent",
  "Prevents mineral deposits by removing water hardness",
  "Helps maintain suspension of the small dirt or greasy particles in washing liquid",
  "Acts as a surfactant that pulls dirt from the material for segregating the soils to come out of suspension; dispersion of deflocculating of soil",
  "Helps control the viscosity in production of detergent powder of a desired density",
  "An ingredient in the drying process in manufacture of detergent powder",
  "Acts as a binder to give appropriate degree of â€œhardnessâ€ to the spherical particles of detergent",
  "Its alkalinity enables them to neutralize acidic stains, promote emulsification of fats and oils and disperse or solubilize proteins",
  "Stabilizes pH to the desired level",
  "Used for Metal cleaning, textile processing, washing dishes, dairy equipment, bottles, floors, and locomotives",
  "Prevents phosphate reversion in liquid detergents",
  "Gives best result for liquid and paste soaps",
  "Enhances detergency of soap type detergent",
];

const images = ["/i1.jpg", "/i2.jpg", "/i3.jpg"];

export default function SoapAndDetergentsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f9] font-sans text-black">
      <Navbar />

      <main className="flex-grow">
        {/* â”€â”€ HERO BANNER (NO EXTRA CONTENT) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
              <span className="text-[#f5c800] font-bold">Soap & Detergents</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Soap & Detergents
            </h1>
          </div>
        </section>

        {/* â”€â”€ MAIN CONTENT AREA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="py-12 lg:py-16 max-w-[1700px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Exact Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Header Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-[#003d7a] mb-4">
                  Chemical solutions for highest efficacy
                </h2>
                <p className="text-black text-lg leading-relaxed font-semibold">
                  At Kiran Global Chems Ltd. we produce a host of industrial chemicals that have diverse application in the soap and detergent manufacturing companies. Our chemical products have been developed after extensive research to deliver highest efficacy, complementing the finished good for greatest effectiveness and quality.
                </p>
              </div>

              {/* Benefits Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-black text-[#003d7a] mb-3">
                  The chemical solutions for soap and detergent manufacturing industry are:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  Adding silicates to synthetic detergents is beneficial because it softens water and is easily rinsed away. Due to the great suspending and anti-re-deposition qualities, they do not leave deposits on the fibers. Their benefits include
                </p>

                <div className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                    >
                      <CheckCircle2 size={18} className="text-[#0072CE] shrink-0 mt-0.5" />
                      <span className="text-base font-semibold text-black leading-relaxed">
                        {benefit}
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
                        alt="Soap & Detergents"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg">
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




