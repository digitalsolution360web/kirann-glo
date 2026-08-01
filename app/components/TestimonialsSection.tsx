"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Just wanted to say thank you for the service that Kiran global do for us. The trust that we have in our vendors is crucial for us especially when there is the chance of our customers name coming into play.",
    name: "Kirshnaraj",
    company: "Pallvi Powertech",
    image: "/Krishnaraj1.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "We have been doing business with Kiran Global since 2011. During this time, Kiran Global has provided us with excellent customer service, timely and reliable information and quality products.",
    name: "Moosa",
    company: "METL",
    image: "/Moosa1.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Kiran Global provides outstanding quality, customer service and is an extremely reliable supplier. I just wanted to take this time to say thanks for the continued great service.",
    name: "Keyur",
    company: "TTSPL",
    image: "/keyur1-318wlx8t8c0mqnypi5tc74.jpg",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#f5c800]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#f0f7ff] via-white to-[#f0f7ff] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#0072CE]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#f5c800]/10 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, rgba(0,114,206,0.04) 1.5px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#0072CE]/8 rounded-full px-5 py-2 mb-5">
            <span className="h-[2px] w-5 bg-[#f5c800] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">
              What Our Clients Say
            </span>
            <span className="h-[2px] w-5 bg-[#f5c800] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#003d7a] tracking-tight">
            Client{" "}
            <span className="relative inline-block">
              <span className="text-[#0072CE]">Testimonials</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0072CE] to-[#f5c800] rounded-full" />
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Trusted by leading companies around the world for our quality and reliability
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => {
            const isActive = active === idx;
            return (
              <div
                key={t.id}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                className={`group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isActive
                    ? "shadow-2xl shadow-[#0072CE]/20 -translate-y-2"
                    : "shadow-lg shadow-slate-200/80"
                }`}
              >
                {/* Card background */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-br from-[#003d7a] to-[#0072CE]"
                      : "bg-white"
                  }`}
                />

                {/* Decorative quote mark top right */}
                <div
                  className={`absolute top-4 right-5 text-[80px] font-black leading-none select-none transition-colors duration-500 ${
                    isActive ? "text-white/10" : "text-[#0072CE]/8"
                  }`}
                >
                  "
                </div>

                <div className="relative z-10 p-7 flex flex-col flex-1">
                  {/* Quote icon + stars */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                        isActive ? "bg-white/15" : "bg-[#0072CE]/10"
                      }`}
                    >
                      <Quote
                        size={18}
                        className={`transition-colors duration-500 ${
                          isActive ? "text-white" : "text-[#0072CE]"
                        }`}
                      />
                    </div>
                    <StarRating count={t.rating} />
                  </div>

                  {/* Quote text */}
                  <p
                    className={`text-sm sm:text-[15px] leading-[1.85] flex-1 transition-colors duration-500 ${
                      isActive ? "text-white/90" : "text-slate-600"
                    }`}
                  >
                    "{t.quote}"
                  </p>

                  {/* Divider */}
                  <div
                    className={`my-5 h-px transition-colors duration-500 ${
                      isActive ? "bg-white/20" : "bg-slate-100"
                    }`}
                  />

                  {/* Person info */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 ring-2 transition-all duration-500 ${
                        isActive ? "ring-white/30" : "ring-[#0072CE]/15"
                      }`}
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div
                        className={`font-bold text-sm sm:text-base transition-colors duration-500 ${
                          isActive ? "text-white" : "text-[#003d7a]"
                        }`}
                      >
                        {t.name}
                      </div>
                      <div
                        className={`text-xs font-medium mt-0.5 transition-colors duration-500 ${
                          isActive ? "text-[#f5c800]" : "text-[#0072CE]"
                        }`}
                      >
                        {t.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div
                  className={`relative z-10 h-1 w-full transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-[#f5c800] via-white/50 to-[#f5c800]"
                      : "bg-gradient-to-r from-[#0072CE] to-[#4db8e8]"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom badges row */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {[
            { label: "Happy Clients", target: 500, suffix: "+" },
            { label: "Countries Served", target: 25, suffix: "+" },
            { label: "Years of Trust", target: 20, suffix: "+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3.5 shadow-md border border-slate-100"
            >
              <div className="w-2 h-2 rounded-full bg-[#0072CE]" />
              <span className="text-xl font-black text-[#003d7a]">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
