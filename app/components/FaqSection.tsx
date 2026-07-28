"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What types of materials can Kiran Global process?",
    answer: "Our heavy-duty crushing machinery is engineered to process a wide variety of materials including hard rocks like basalt, granite, quartzite, diorite, and river bed gravel, as well as softer materials like limestone, coal, and construction demolition debris. We optimize the chamber configuration based on your raw material hardness."
  },
  {
    question: "Do you offer customized configurations for specific quarry setups?",
    answer: "Yes, customization is a core part of Kiran Global's engineering. We offer custom cavity configurations (coarse, medium, fine), customized mobile wheel-mounted or crawler chassis designs, tail conveyor lengths, and custom electrical control setups. Our engineers will work with you to map out your throughput requirements."
  },
  {
    question: "What is the typical warranty and after-sales support package?",
    answer: "Every Kiran Global machine comes with a standard 12-month structural warranty. We provide on-site commissioning by senior service technicians, operator safety training, and lifetime access to remote support. Extended warranty and periodic service contracts are also available."
  },
  {
    question: "How are wear parts and replacement spares managed and shipped?",
    answer: "We maintain dedicated parts inventories across all our depots. Essential wear parts like jaw plates, mantle liners, blow bars, conveyor belts, and screening meshes can be shipped via express air or sea freight, minimizing downtime and maintaining high production availability."
  },
  {
    question: "Are Kiran Global systems available in mobile or stationary models?",
    answer: "Yes, we design both stationary crushing and screening plants (configured up to 1000 t/h capacity) and highly versatile mobile modular systems. Our mobile systems are available in crawler-tracked or wheel-mounted configurations, allowing quick repositioning directly at the quarry face or demolition site."
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072CE] via-[#f5c800] to-[#0072CE]" />
      <div className="max-w-[1700px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Support Center</span>
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#003d7a] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-[1.7]">
            Quick answers to common queries about our machinery, shipping, and servicing.
          </p>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-[#0072CE]/40 shadow-md shadow-blue-900/10" : "border-slate-200 hover:border-[#0072CE]/30 hover:shadow-sm"
                  }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer select-none bg-white font-sans"
                >
                  <span className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? "text-[#0072CE]" : "text-slate-800"}`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#0072CE] text-white rotate-180" : "bg-slate-100 text-slate-500"}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="px-6 py-5 bg-[#e8f4ff] border-t border-[#0072CE]/10 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
