"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Maximize2, X, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const metasilicatePoints = [
  "Manufacturing speciality cement for drilling industry",
  "For adding into dry cement admixtures to accelerate the set",
];

const silicatePoints = [
  "As a curing agent, it is applied to the surface of fresh layer of concrete to extend its durability",
  "To treat the concrete after it is completely dry or hardened for better water resistance and longevity",
  "Chemical sealing of Concrete hardening against Grease and Dust Proofing",
  "For Acid Resistance",
  "Significantly reduces porosity in most masonry products making them far more wearable and water repellent",
  "Used as an alkali activator in geopolymer cement and concrete",
  "Apply a thin coat to unpainted plaster or concrete surface as a water repellent",
  "To treat old concrete surfaces to provide a harder surface",
  "Acts as a penetrate into concrete and reacts with residual free lime to reduce porosity",
];

const images = ["/cg1.jpg", "/cg2.jpg", "/cg3.jpg"];

export default function ConcreteAndGeneralPage() {
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
              <span className="text-[#f5c800] font-bold">Concrete & General</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Concrete & General
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
                  Kiran Global Chem Ltd. offers highly effective and efficient chemical treatments for concrete and general masonry treatment. Our products are used extensively at various stage of manufacturing and application of concrete and in general masonry work
                </p>
                <p className="text-black text-sm sm:text-base font-bold mt-3">
                  The chemical products that we supply for concrete and general masonry treatment are:
                </p>
              </div>

              {/* Sodium Metasilicate Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-black border-b border-slate-200 pb-3">
                  Sodium Metasilicate
                </h2>
                <div className="space-y-3 pt-2">
                  {metasilicatePoints.map((point, idx) => (
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

              {/* Sodium Silicate and Potassium Silicate Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-black border-b border-slate-200 pb-3">
                  Sodium Silicate and Potassium Silicate
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
                        alt="Concrete and General"
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




