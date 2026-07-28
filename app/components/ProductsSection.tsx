"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Settings, Shield, Globe, TrendingUp } from "lucide-react";

const PRODUCTS = [
  {
    id: "jaw",
    name: "Jaw Crusher",
    description: "Designed for primary stage crushing, offering uniform output size and low operational costs. Ideal for stone, concrete, and ore.",
    specs: ["Capacity: 50-800 t/h", "Max Feeding: 1020mm", "Power Range: 55-315 kW"],
    icon: Settings
  },
  {
    id: "cone",
    name: "Cone Crusher",
    description: "Perfect for secondary and tertiary crushing stages, producing high-quality cubical aggregates with high reduction ratio.",
    specs: ["Capacity: 80-600 t/h", "Output: 5-50mm", "Power Range: 90-250 kW"],
    icon: TrendingUp
  },
  {
    id: "screen",
    name: "Vibrating Screen",
    description: "Robust screening solutions to accurately classify materials according to size. Available in multiple decks of various sizes.",
    specs: ["Capacity: 30-1000 t/h", "Decks: 1-4", "Efficiency: >95%"],
    icon: Shield
  },
  {
    id: "feeder",
    name: "Vibratory Feeder",
    description: "Ensures uniform, controlled feeding of materials into the crushing chamber. Built with wear-resistant steel liners.",
    specs: ["Feeding Size: <1200mm", "Throughput: 80-1200 t/h", "Motor: Vibrating type"],
    icon: Globe
  }
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState("jaw");

  return (
    <section id="products" className="py-20 bg-white relative">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Product Catalog</span>
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#003d7a] tracking-tight leading-tight">
            Heavy Crushing & Screening Systems
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-[1.7]">
            Engineered with precision for peak operational capability, uniform output grade, and low maintenance cycles.
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setSelectedProduct(prod.id)}
              className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer border ${selectedProduct === prod.id
                  ? "bg-[#0072CE] text-white border-[#0072CE] shadow-md shadow-blue-900/20 scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE]"
                }`}
            >
              {prod.name}
            </button>
          ))}
        </div>

        {/* Product Detail */}
        {PRODUCTS.map((prod) => {
          if (prod.id !== selectedProduct) return null;
          const IconComp = prod.icon;
          return (
            <div
              key={prod.id}
              className="bg-[#e8f4ff] rounded-3xl p-6 sm:p-10 shadow-sm border border-blue-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-slide-in"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0072CE] text-[#f5c800] p-4 rounded-2xl shadow-lg">
                    <IconComp size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#003d7a]">{prod.name}</h3>
                    <p className="text-xs font-bold text-[#0072CE] uppercase tracking-wider mt-0.5">Heavy Industry Grade</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">{prod.description}</p>
                <div className="space-y-3">
                  <h4 className="font-bold text-[#003d7a] text-sm">Key Specifications:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {prod.specs.map((spec, idx) => (
                      <div key={idx} className="bg-white border border-blue-100 p-3 rounded-xl text-center shadow-sm">
                        <span className="text-xs font-bold text-slate-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="bg-[#0072CE] hover:bg-[#003d7a] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    Request Quote
                    <ArrowRight size={13} />
                  </a>
                  <a
                    href="#infrastructure"
                    className="bg-white hover:bg-slate-50 text-slate-700 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider border border-slate-200 transition-all"
                  >
                    Infrastructure Details
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-[250px] sm:h-[320px] rounded-2xl overflow-hidden bg-slate-900 border-4 border-white shadow-xl">
                <Image src="/41.png" alt={prod.name} fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003d7a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] uppercase font-black tracking-widest bg-[#f5c800] text-[#003d7a] px-3 py-1.5 rounded-full shadow-md">
                    Manufacturing Setup
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
