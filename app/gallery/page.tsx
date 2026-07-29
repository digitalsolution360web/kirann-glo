"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "/home-slider.webp", title: "Manufacturing Plant", category: "Infrastructure" },
  { src: "/70.webp", title: "Heavy Crushing Systems", category: "Machinery" },
  { src: "/71.webp", title: "Welding Workshop", category: "Infrastructure" },
  { src: "/72.webp", title: "Logistics Operations", category: "Operations" },
  { src: "/73.webp", title: "Global Operations", category: "Operations" },
  { src: "/home-ab2.webp", title: "Production Facility", category: "Infrastructure" },
  { src: "/sodium-silicate-liquid.webp", title: "Sodium Silicate Liquid", category: "Products" },
  { src: "/sodium-silicate-lumps.webp", title: "Sodium Silicate Lumps", category: "Products" },
  { src: "/premium-potassium-silicate-liquid.webp", title: "Potassium Silicate Liquid", category: "Products" },
  { src: "/potassium-silicate-lumps.webp", title: "Potassium Silicate Lumps", category: "Products" },
  { src: "/SUSTAINABILITY.webp", title: "Sustainability Practices", category: "Operations" },
  { src: "/banner2.jpg", title: "Corporate Office", category: "Infrastructure" },
];

const CATEGORIES = ["All", "Infrastructure", "Products", "Machinery", "Operations"];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
    );

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f8fafc] font-sans selection:bg-[#0072CE] selection:text-white">
      <Navbar />

      {/* ── HERO BANNER ───────────────────────────────────────────────── */}
      <section className="relative h-[300px] sm:h-[360px] overflow-hidden">
        <Image
          src="/73.webp"
          alt="Gallery"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002244]/90 via-[#002244]/70 to-[#002244]/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8 w-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#f5c800] uppercase">
                Our Gallery
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Gallery
            </h1>
            <p className="mt-4 text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
              Explore our facilities, products, and global operations through our photo gallery.
            </p>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-8 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-[#0072CE] transition-colors font-medium">Home</a>
          <ChevronRight size={12} />
          <span className="text-[#003d7a] font-semibold">Gallery</span>
        </div>
      </div>

      <main className="flex-1">
        {/* ── GALLERY GRID ────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ aspectRatio: "3/2.2" }}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#f5c800] mb-1 block">
                      {image.category}
                    </span>
                    <p className="text-white text-sm font-bold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
             onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 cursor-pointer z-10"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm cursor-pointer z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm cursor-pointer z-10"
          >
            <ChevronRightIcon size={24} />
          </button>

          <div
            className="relative w-full max-w-4xl h-[70vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              fill
              className="object-contain"
            />
          </div>
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white font-bold text-sm">{GALLERY_IMAGES[lightboxIndex].title}</p>
            <p className="text-white/50 text-xs mt-1">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
