"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: "01",
    category: "SODIUM SILICATE",
    title: "Sodium Silicate Lumps",
    type: "SOLID FORM",
    image: "/sodium-silicate-lumps.webp",
    tagline: "Market Leader in India · Recognized Globally",
    description:
      "At Kiran Global Chems Ltd. we produce sodium silicate lumps that are manufactured using top grade raw materials and have superior properties, both physical and chemical. We are the market leader in India and our brand is recognized globally for its high performance.",
    accent: "#0072CE",
    badge: "LUMPS",
    href: "/products/sodium-silicate-lumps",
  },
  {
    id: "02",
    category: "SODIUM SILICATE",
    title: "Sodium Silicate Liquid",
    type: "LIQUID FORM",
    image: "/sodium-silicate-liquidd.webp",
    tagline: "Precision Formulated · Industrial Grade",
    description:
      "At Kiran Global Chem Ltd. we offer sodium silicate in liquid form for specific industrial application where the liquid property of the chemical is highly effective. We manufacture high quality silicates that are produced to match our customer's expectations.",
    accent: "#0072CE",
    badge: "LIQUID",
    href: "/products/sodium-silicate-liquid",
  },
  {
    id: "03",
    category: "POTASSIUM SILICATE",
    title: "Potassium Silicate Lumps",
    type: "SOLID FORM",
    image: "/potassium-silicate-lumps.webp",
    tagline: "Highest Quality · Industry-Wide Recognition",
    description:
      "At Kiran Global Chem Ltd. we manufacture potassium silicate lumps of the highest quality. Our product is recognized industry-wide for its high performance and seamless integration.",
    accent: "#003d7a",
    badge: "LUMPS",
    href: "/products/potassium-silicate-lumps",
  },
  {
    id: "04",
    category: "POTASSIUM SILICATE",
    title: "Potassium Silicate Liquid",
    type: "LIQUID FORM",
    image: "/premium-potassium-silicate-liquid.webp",
    tagline: "Leading Brand in India · Custom Ratios Available",
    description:
      "Kiran Global Chems Ltd. is a leading brand name in India in the manufacture and supply of potassium silicate liquid. Our industry-grade potassium silicate liquid is available in a range of ratios and concentrations based on the specific business requirements of our clients.",
    accent: "#003d7a",
    badge: "LIQUID",
    href: "/products/potassium-silicate-liquid",
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-[#0072CE] selection:text-white">
      <Navbar />

      <main className="flex-grow">

        {/* ─── PAGE HEADER ─────────────────────────────────────────── */}
        <section className="bg-[#003d7a] relative overflow-hidden">
          <div className="h-[3px] w-full bg-[#f5c800]" />
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-12">
            <p className="text-[#f5c800] text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              Kiran Global Chem Limited
            </p>
            <h1 className="text-[2.6rem] font-black text-white leading-tight tracking-tight">
              Products
            </h1>
          </div>
        </section>

        {/* ─── PRODUCTS GRID ───────────────────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* ── TOP BADGE ROW ──────────────────────────── */}
                <div className="flex items-center justify-between px-6 pt-5 pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: product.accent }}
                    >
                      {product.badge}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      {product.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-black text-slate-200 font-mono">
                    {product.id}
                  </span>
                </div>

                {/* ── PRODUCT IMAGE (TOP) ────────────────────── */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gold line at bottom of image */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: "#f5c800" }}
                  />
                  {/* Type label overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[10px] font-black text-[#003d7a] uppercase tracking-widest">
                      {product.type}
                    </span>
                  </div>
                </div>

                {/* ── CONTENT BELOW IMAGE ────────────────────── */}
                <div className="flex flex-col flex-grow px-6 pt-5 pb-6">
                  {/* Product Title */}
                  <h2 className="text-xl font-black text-[#003d7a] leading-tight mb-1">
                    {product.title}
                  </h2>

                  {/* Tagline */}
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest mb-4"
                    style={{ color: product.accent }}
                  >
                    {product.tagline}
                  </p>

                  {/* Gold separator */}
                  <div className="h-[2px] w-10 bg-[#f5c800] mb-4" />

                  {/* Description — full content, word for word */}
                  <p className="text-[18px] text-black font-semibold leading-[1.85] flex-grow">
                    {product.description}
                  </p>

                  {/* Bottom action row */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                      style={{ backgroundColor: product.accent }}
                    >
                      View Details
                    </Link>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-2 px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md"
                      style={{ borderColor: product.accent, color: product.accent }}
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
