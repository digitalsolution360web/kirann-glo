"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Shield } from "lucide-react";

const SLIDES = [
  {
    image: "/home-slider.webp",
    badge: "Kiran Global Chemicals",
    title: "Global Leaders in Premium Silicates",
    description: "Manufacturing and exporting top-grade Sodium Silicate and Potassium Silicate solutions tailored for diverse industrial applications worldwide.",
    primaryCta: "Explore Chemicals",
    primaryLink: "#products",
    secondaryCta: "Contact Us",
    secondaryLink: "#contact"
  },
  {
    image: "/70.webp",
    badge: "Industrial Solutions",
    title: "Heavy Crushing & Screening Systems",
    description: "Engineered to deliver high performance, uniform output grade, and maximum operational uptime under the toughest conditions.",
    primaryCta: "View Machinery",
    primaryLink: "#products",
    secondaryCta: "Get Quote",
    secondaryLink: "#contact"
  },
  {
    image: "/71.webp",
    badge: "State-of-the-Art Setup",
    title: "Precision Engineering Workshops",
    description: "Engineered with high-capacity automatic welding arches and CNC boring mills ensuring structural integrity and precise workmanship.",
    primaryCta: "Our Infrastructure",
    primaryLink: "#infrastructure",
    secondaryCta: "Learn More",
    secondaryLink: "#about"
  },
  {
    image: "/72.webp",
    badge: "Global Network",
    title: "Seamless Logistics & Spares Support",
    description: "Dedicated parts inventories and active remote technical support supplying aggregates, wear parts, and maintenance globally.",
    primaryCta: "Our Network",
    primaryLink: "#infrastructure",
    secondaryCta: "FAQs",
    secondaryLink: "#faq"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const handlePrevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="relative h-[65vh] min-h-[420px] w-full overflow-hidden bg-slate-900 text-white flex items-center">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#002244]/90 via-[#002244]/55 to-black/25 z-10" />
          <Image
            src={slide.image}
            alt="Kiran Global Banner"
            fill
            priority={index === 0}
            className="object-cover object-center w-full h-full"
          />
        </div>
      ))}

      {/* Hero Content Overlay with justify-center to horizontally center the inner container */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 h-full relative">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={index}
                className={`absolute inset-y-0 left-6 sm:left-8 right-6 sm:right-8 flex flex-col justify-center transition-all duration-1000 transform ${isActive
                    ? "opacity-100 translate-y-0 z-20 pointer-events-auto"
                    : "opacity-0 translate-y-8 z-0 pointer-events-none"
                  }`}
              >
                <div className="max-w-2xl space-y-4 sm:space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#f5c800] text-[#003d7a] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md w-fit">
                    <Shield size={12} className="animate-pulse" />
                    {slide.badge}
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-md">
                    {slide.title.split(" ").map((word, i) => {
                      const highlightWords = ["Premium", "Silicates", "Crushing", "Screening", "Precision", "Logistics", "Spares"];
                      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                      const shouldHighlight = highlightWords.includes(cleanWord);
                      return (
                        <span key={i}>
                          <span className={shouldHighlight ? "text-[#f5c800]" : "text-white"}>
                            {word}
                          </span>
                          {" "}
                        </span>
                      );
                    })}
                  </h1>

                  {/* Description */}
                  <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg max-w-xl font-medium">
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href={slide.primaryLink}
                      className="bg-[#0072CE] hover:bg-[#003d7a] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>{slide.primaryCta}</span>
                      <ArrowRight size={14} />
                    </a>
                    <a
                      href={slide.secondaryLink}
                      className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-wider border border-white/30 hover:border-white transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
                    >
                      {slide.secondaryCta}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-[#f5c800] hover:text-slate-900 text-white backdrop-blur-md border border-white/20 hover:border-[#f5c800] hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-[#f5c800] hover:text-slate-900 text-white backdrop-blur-md border border-white/20 hover:border-[#f5c800] hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-[#f5c800]" : "w-2 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
