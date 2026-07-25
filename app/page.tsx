"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Shield,
  TrendingUp,
  Globe,
  Settings,
  Menu,
  X,
  CheckCircle,
  Clock,
  Award,
  RefreshCw,
  Wind,
  ChevronDown
} from "lucide-react";

// ── Brand color tokens based on Kiran Global Logo ──────────────────────────
// Primary: Royal Blue  #1a35b8
// Accent:  Golden Yellow #f5c800
// Light:   Sky Blue  #cce9f7
// Dark:    Navy     #0d1f6e

// Slide Data
const SLIDES = [
  { image: "/banner2.jpg" },
  { image: "/41.png" }
];

// Product Data
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

// Industries We Support Data
const INDUSTRIES_SUPPORTED = [
  {
    id: "sodio-lumps",
    title: "Silicato di Sodio in Lumps",
    description: "Crucial for industrial manufacturing, chemical processing, and detergent production.",
    image: "/3.png",
    icon: Settings
  },
  {
    id: "sodio-liquido",
    title: "Silicato di Sodio Liquido",
    description: "Key for adhesive formulations, concrete sealing, and water treatment standards.",
    image: "/2.jpg",
    icon: Shield
  },
  {
    id: "potassio-lumps",
    title: "Silicato di Potassio in Lumps",
    description: "High temperature resistant binding agent for specialized refractory materials.",
    image: "/images (1).jpg",
    icon: Globe
  },
  {
    id: "potassio-liquido",
    title: "Silicato di Potassio Liquido",
    description: "High-grade liquid formulation for precision agricultural & industrial applications.",
    image: "/images.jpg",
    icon: TrendingUp
  }
];

// FAQ Data
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

// NAV LINKS
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "faq", label: "FAQ" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("jaw");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Scroll listener for header shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const handlePrevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4500);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#e8f4ff] font-sans selection:bg-[#0072CE] selection:text-white">

      {/* ── TOP UTILITY BAR ─────────────────────────────────────────────── */}
      <div className="bg-[#0072CE] text-blue-100 py-2 font-sans text-xs hidden md:block relative z-50">
        <div className="w-full max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          {/* Left: Contact info */}
          <div className="flex items-center gap-7">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#f5c800] transition-colors duration-200 group">
              <Phone size={11} className="text-[#f5c800]" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@kiranglobal.com" className="flex items-center gap-2 hover:text-[#f5c800] transition-colors duration-200">
              <Mail size={11} className="text-[#f5c800]" />
              <span>info@kiranglobal.com</span>
            </a>
            <span className="flex items-center gap-2 text-blue-200">
              <MapPin size={11} className="text-[#f5c800]" />
              Delhi-NCR, India
            </span>
          </div>
          {/* Right: Hours + status */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-blue-200">
              <Clock size={11} className="text-[#f5c800]" />
              Mon – Sat: 9:00 AM – 6:00 PM
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-300 font-semibold">Operations Active</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN STICKY HEADER — Light Professional ──────────────────────── */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl shadow-blue-900/10 border-b border-slate-200"
          : "bg-white border-b border-slate-200"
          }`}
      >
        {/* Bottom thin accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0072CE] via-[#f5c800] to-[#0072CE] opacity-70" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between py-2.5">

            {/* Logo */}
            <a
              href="#home"
              onClick={() => setActiveNav("home")}
              className="relative flex items-center h-14 w-52 sm:w-60 cursor-pointer shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Kiran Global Logo"
                fill
                className="object-contain"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveNav(item.id)}
                  className={`
                    relative px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-250 group overflow-hidden
                    ${activeNav === item.id
                      ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                      : "text-[#003d7a] hover:text-white hover:bg-[#0072CE] hover:shadow-md hover:shadow-blue-700/30"
                    }
                  `}
                >
                  {/* Slide-up fill on hover — visual polish */}
                  {/* <span className="absolute inset-x-0 bottom-0 h-0 bg-[#f5c800] transition-all duration-200 group-hover:h-[3px]" /> */}
                  <span className="relative">{item.label}</span>
                </a>
              ))}

              {/* Divider */}
              <div className="h-7 w-px bg-slate-300 mx-3" />

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={() => setActiveNav("contact")}
                className="
                  relative overflow-hidden ml-1 px-6 py-2.5 rounded-full text-xs font-black
                  uppercase tracking-widest text-white
                  bg-gradient-to-r from-[#0072CE] to-[#003d7a]
                  shadow-md shadow-blue-800/30
                  hover:shadow-xl hover:shadow-blue-800/40
                  hover:scale-105 active:scale-95
                  transition-all duration-200
                  group
                "
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                <span className="relative flex items-center gap-2">
                  <Phone size={13} />
                  Get Quote
                </span>
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#003d7a] hover:bg-[#0072CE] hover:text-white transition-all border border-slate-200 hover:border-[#0072CE] shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER — Light Theme ──────────────────────────────────── */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-white border-t border-slate-100 px-5 pb-6 pt-3 flex flex-col gap-1.5 shadow-2xl shadow-blue-900/10">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => { setActiveNav(item.id); setMobileMenuOpen(false); }}
                className={`
                  flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200
                  ${activeNav === item.id
                    ? "bg-[#0072CE] text-white shadow-md shadow-blue-700/30"
                    : "text-[#003d7a] bg-slate-50 hover:bg-[#0072CE] hover:text-white hover:shadow-md hover:shadow-blue-700/20"
                  }
                `}
              >
                <span className={`h-2 w-2 rounded-full shrink-0 transition-all ${activeNav === item.id ? "bg-[#f5c800]" : "bg-slate-300"}`} />
                {item.label}
                {activeNav === item.id && (
                  <span className="ml-auto text-[10px] font-black uppercase tracking-wider text-blue-200">Active</span>
                )}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => { setActiveNav("contact"); setMobileMenuOpen(false); }}
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0072CE] to-[#003d7a] text-white font-black py-4 px-6 rounded-xl text-sm uppercase tracking-wider shadow-lg transition-all hover:shadow-xl"
            >
              <Phone size={15} />
              Get a Free Quote
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* ── HERO SLIDER ─────────────────────────────────────────────────── */}
        <section id="home" className="relative h-[65vh] min-h-[420px] w-full overflow-hidden bg-slate-900 text-white flex items-center">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#003d7a]/70 via-black/30 to-transparent z-10" />
              <Image
                src={slide.image}
                alt="Kiran Global Banner"
                fill
                priority={index === 0}
                className="object-cover object-center w-full h-full"
              />
            </div>
          ))}

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

        {/* ── ABOUT SECTION ───────────────────────────────────────────────── */}
        <section id="about" className="relative py-20 bg-white overflow-hidden">
          {/* Decorative background */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#e8f4ff] to-transparent pointer-events-none" />
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-[#0072CE]/5 pointer-events-none" />
          <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#0072CE]/5 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Text Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                    <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">About Us</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#003d7a] tracking-tight leading-tight">
                    About <span className="text-[#0072CE]">Kiran Global</span>
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
                  We are a leading manufacturer and supplier of high-performance stone crusher machines, delivering advanced crushing solutions for the construction and mining industries. With years of industry experience, we specialize in designing and manufacturing both mobile crushers and fixed crushing plants.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
                  Our company is committed to providing reliable equipment that helps clients maximize productivity while minimizing operational costs. From small-scale projects to large industrial operations, we offer customized crushing solutions tailored to specific requirements.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#003d7a] p-5 rounded-2xl shadow-lg border border-blue-900/50 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0072CE] to-[#003d7a]" />
                    <div className="relative">
                      <div className="text-3xl font-black text-[#f5c800]">20+</div>
                      <div className="text-xs font-bold text-blue-200 mt-1 uppercase tracking-wider">Years Experience</div>
                    </div>
                  </div>
                  <div className="bg-[#f5c800] p-5 rounded-2xl shadow-lg relative overflow-hidden group">
                    <div className="relative">
                      <div className="text-3xl font-black text-[#003d7a]">24+</div>
                      <div className="text-xs font-bold text-[#003d7a]/70 mt-1 uppercase tracking-wider">Industries Served</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: 3D Flip Card */}
              <div className="lg:col-span-6 flex justify-center items-center">
                <div className="perspective-1000 w-full max-w-[460px] h-[360px] sm:h-[430px] group cursor-pointer relative">
                  <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">
                    <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl bg-white p-4 border-4 border-[#0072CE]/10">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image src="/why-choose.jpeg" alt="Kiran Global Stationary Crusher" fill className="object-contain bg-white" priority />
                      </div>
                    </div>
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-2xl bg-white p-4 border-4 border-[#f5c800]/30">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image src="/41.png" alt="Kiran Global Mobile Crusher" fill className="object-contain bg-white" />
                      </div>
                    </div>
                  </div>
                  {/* Flip hint */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#0072CE]/50 uppercase tracking-widest whitespace-nowrap">
                    Hover to flip
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES SECTION ──────────────────────────────────────────── */}
        <section className="relative min-h-[550px] sm:min-h-[640px] w-full py-16 sm:py-24 overflow-hidden flex items-center justify-center bg-slate-900 transition-all duration-700">
          {INDUSTRIES_SUPPORTED.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndustryIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
                }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                className="object-cover object-center w-full h-full"
              />
            </div>
          ))}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-[1]" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-[28px] border-[5px] border-white shadow-2xl overflow-hidden bg-transparent flex flex-col md:flex-row min-h-[380px] sm:min-h-[440px]">
              {/* Left transparent window */}
              <div className="flex-1 bg-transparent min-h-[200px] md:min-h-full" />

              {/* Right panel */}
              <div className="w-full md:w-[400px] lg:w-[440px] bg-white/96 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-center shadow-2xl rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[3px] w-6 bg-[#f5c800] rounded-full" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Industries We Support</span>
                </div>
                <div className="space-y-2">
                  {INDUSTRIES_SUPPORTED.map((item, index) => {
                    const IconComp = item.icon;
                    const isActive = index === activeIndustryIndex;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setActiveIndustryIndex(index)}
                        onClick={() => setActiveIndustryIndex(index)}
                        className={`group flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? "bg-[#0072CE] text-white shadow-md" : "bg-transparent hover:bg-gray-100 text-slate-700"
                          }`}
                      >
                        <div className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-white text-[#003d7a]" : "bg-gray-100 text-slate-500 group-hover:bg-gray-200 group-hover:text-slate-600"
                          }`}>
                          <IconComp size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-sm font-bold tracking-tight leading-tight ${isActive ? "text-white" : "text-[#003d7a]"}`}>
                            {item.title}
                          </h3>
                          {isActive && (
                            <p className="text-[11px] text-blue-100 mt-1 leading-tight">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUSTAINABILITY SECTION ──────────────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-[#e8f4ff] relative overflow-hidden border-y border-blue-100/60">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <Image src="/SUSTAINABILITY.webp" alt="Kiran Global Commitment" fill priority className="object-cover object-center" />
              </div>
              <div className="lg:col-span-6 space-y-5">
                {/* Accent bar */}
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Commitment & Responsibility</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#003d7a] tracking-tight leading-tight">
                  Building a <span className="text-[#0072CE]">Sustainable</span> Future
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
                  We are committed to environmentally responsible manufacturing practices that reduce environmental impact while maximizing efficiency. Our focus on sustainable innovation helps industries achieve better performance with lower environmental costs.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#0072CE] hover:bg-[#003d7a] text-white font-bold px-7 py-3.5 rounded-full transition-all text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:shadow-blue-900/25 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </a>

                {/* Feature cards */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 flex items-start gap-3 hover:border-[#0072CE]/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f4ff] text-[#0072CE] border border-blue-100 flex items-center justify-center shrink-0">
                      <RefreshCw size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Resource Efficiency</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Optimised operations</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 flex items-start gap-3 hover:border-[#0072CE]/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f4ff] text-[#0072CE] border border-blue-100 flex items-center justify-center shrink-0">
                      <Wind size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Reduced Emissions</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Cleaner production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS SECTION ────────────────────────────────────────────── */}
        <section id="products" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
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

        {/* ── INFRASTRUCTURE SECTION ──────────────────────────────────────── */}
        <section id="infrastructure" className="py-20 bg-[#e8f4ff] relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                    <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Infrastructure & Capabilities</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#003d7a] tracking-tight leading-tight">
                    Precision Engineering & Quality Workmanship
                  </h2>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
                  Kiran Global operates a heavy machining workshop equipped with CNC boring mills, high capacity automatic welding arches, structural steel bending benches, and precise ultrasonic test kits to verify welding integrity inside heavy templates.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="flex gap-3 items-start">
                    <div className="bg-[#0072CE] text-[#f5c800] p-2.5 h-10 w-10 flex items-center justify-center rounded-xl shrink-0 shadow-md">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003d7a] text-sm">Top-Tier Certification</h4>
                      <p className="text-xs text-slate-500 mt-1">Products undergo rigid stress analysis before delivery.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-[#0072CE] text-[#f5c800] p-2.5 h-10 w-10 flex items-center justify-center rounded-xl shrink-0 shadow-md">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003d7a] text-sm">High Load Capacity</h4>
                      <p className="text-xs text-slate-500 mt-1">Engineered to support heavy throughput over longer intervals.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-[#0072CE] p-5 rounded-xl shadow-sm">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-[#003d7a]">Notice:</strong> We offer custom configuration modules mapping specific hard ores like quartzite, basalt, granite, or river bed gravel. Ask our specialists to optimize the cavity configurations for maximum utility.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="h-[250px] sm:h-[300px] relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <Image src="/home-ab2.webp" alt="Workshop Facility" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003d7a]/40 to-transparent" />
                </div>
                <div className="h-[250px] sm:h-[300px] relative rounded-2xl overflow-hidden shadow-xl translate-y-6 border-4 border-white bg-slate-100">
                  <Image src="/41.png" alt="Precision Assembly" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003d7a]/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GLOBAL NETWORK SECTION ──────────────────────────────────────── */}
        <section className="py-20 bg-[#003d7a] text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 world-grid-bg" />
          {/* Concentric circles */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0 opacity-20">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-[#f5c800]/30" />
            <div className="absolute inset-32 rounded-full border border-white/10 animate-pulse" />
            <div className="absolute inset-48 rounded-full border border-[#4db8e8]/20" />
            <div className="absolute inset-64 rounded-full border border-white/5" />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <div className="flex items-center justify-center gap-3">
                <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#f5c800] uppercase">Global Network</span>
                <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight">
                World Footprint & Target Quality
              </h2>
              <p className="text-blue-200 text-sm sm:text-base leading-[1.7]">
                Concentric logistics network supplying crusher aggregates, wear spares, and active remote maintenance worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              {[
                { region: "Europe", desc: "Strategic spares storage in Germany & Romania to supply Eastern Europe." },
                { region: "Asia-Pacific", desc: "Headquarters and prime heavy assembly centers based in Northern India." },
                { region: "Middle East", desc: "Customised high-heat crusher lubricant upgrades for UAE & Saudi operations." },
                { region: "Africa", desc: "Operational projects in copper, gold, and iron mines across 8+ African nations." },
              ].map((item, i) => (
                <div key={item.region} className={`space-y-2 ${i > 0 ? "border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6" : ""}`}>
                  <div className="text-2xl font-black text-[#f5c800]">{item.region}</div>
                  <p className="text-xs text-blue-200 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-1.5 text-xs text-blue-300 font-semibold bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
                <span className="h-2 w-2 bg-emerald-400 rounded-full animate-ping" />
                Active Deployments Tracked Globally.
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────────────────── */}
        <section id="faq" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072CE] via-[#f5c800] to-[#0072CE]" />
          <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
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

            <div className="space-y-3">
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
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer select-none bg-white"
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

        {/* ── CONTACT SECTION ─────────────────────────────────────────────── */}
        <section id="contact" className="py-20 bg-[#e8f4ff] relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Left: Contact info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
                    <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">Need Help?</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#003d7a] tracking-tight leading-tight">
                    Connect With Our Engineers
                  </h2>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-[1.8]">
                  Have a specific quarry configuration, throughput quota, or parts request? Send us your message. Our design unit will draft an initial proposal within 24 hours.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    { icon: Phone, label: "Call Support", value: "+91 98765 43210", href: "tel:+919876543210" },
                    { icon: Mail, label: "Business Email", value: "info@kiranglobal.com", href: "mailto:info@kiranglobal.com" },
                    { icon: MapPin, label: "Manufacturing HQ", value: "Plot 140, Phase 2, Industrial Cluster, Delhi-NCR", href: undefined },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex gap-4 items-center">
                        <div className="bg-[#0072CE] text-[#f5c800] p-3 rounded-xl shrink-0 shadow-md">
                          <Icon size={18} />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-bold text-slate-800 hover:text-[#0072CE] transition-colors">{item.value}</a>
                          ) : (
                            <span className="text-sm font-bold text-slate-800">{item.value}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1 bg-[#f5c800] rounded-full" />
                    <h3 className="text-xl font-black text-[#003d7a] uppercase tracking-tight">Submit Quote Request</h3>
                  </div>

                  {formSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-emerald-700 text-center space-y-3">
                      <CheckCircle className="mx-auto text-emerald-500" size={44} />
                      <h4 className="font-black text-lg text-emerald-800">Thank You! Request Filed.</h4>
                      <p className="text-xs">Our engineering division will analyze your details and respond shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Your Name *</label>
                          <input
                            type="text" name="name" required value={formData.name} onChange={handleFormChange}
                            placeholder="John Doe"
                            className="w-full bg-[#e8f4ff] border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/10 transition-all text-slate-800"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Business Email *</label>
                          <input
                            type="email" name="email" required value={formData.email} onChange={handleFormChange}
                            placeholder="john@company.com"
                            className="w-full bg-[#e8f4ff] border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/10 transition-all text-slate-800"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Phone Number *</label>
                        <input
                          type="tel" name="phone" required value={formData.phone} onChange={handleFormChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#e8f4ff] border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/10 transition-all text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Job Requirements / Details *</label>
                        <textarea
                          name="message" required rows={4} value={formData.message} onChange={handleFormChange}
                          placeholder="Provide details like expected throughput, stone material type, feeding size, etc..."
                          className="w-full bg-[#e8f4ff] border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/10 transition-all text-slate-800 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#0072CE] hover:bg-[#003d7a] text-white font-black p-4 rounded-xl text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:shadow-blue-900/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Send Inquiry Now</span>
                        <ArrowRight size={15} />
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="bg-[#003d7a] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Logo & Intro */}
          <div className="space-y-4">
            <div className="relative flex items-center h-14 w-52 bg-white p-2 rounded-xl">
              <Image src="/logo.png" alt="Kiran Global Logo" fill className="object-contain p-1" />
            </div>
            <p className="text-xs text-blue-200 leading-relaxed">
              Kiran Global manufactures high performance fixed crushers, vibratory screeners, and modular machinery configured for severe industrial requirements.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="font-black text-sm uppercase tracking-wider text-[#f5c800] border-l-2 border-[#f5c800] pl-3">Useful Links</h4>
            <ul className="space-y-2 text-xs text-blue-200">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#products", label: "Products & Specs" },
                { href: "#infrastructure", label: "Infrastructures" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact Sales" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#f5c800] transition-colors flex items-center gap-2 group">
                    <span className="h-px w-3 bg-[#f5c800]/40 group-hover:w-5 group-hover:bg-[#f5c800] transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Links */}
          <div className="space-y-4">
            <h4 className="font-black text-sm uppercase tracking-wider text-[#f5c800] border-l-2 border-[#f5c800] pl-3">Equipments</h4>
            <ul className="space-y-2 text-xs text-blue-200">
              {["Primary Jaw Crusher", "Hydraulic Cone Crusher", "Heavy Duty Feeder", "Vibratory Screening Unit", "Sand Washing Setup"].map((item) => (
                <li key={item}>
                  <span className="hover:text-[#f5c800] cursor-pointer transition-colors flex items-center gap-2 group">
                    <span className="h-px w-3 bg-[#f5c800]/40 group-hover:w-5 group-hover:bg-[#f5c800] transition-all duration-200" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-black text-sm uppercase tracking-wider text-[#f5c800] border-l-2 border-[#f5c800] pl-3">Global Hotline</h4>
            <div className="space-y-3 text-xs text-blue-200">
              <p>For custom engineering and site blueprints:</p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-[#f5c800] hover:bg-[#e8bb00] text-[#0d1f6e] font-black px-5 py-3 rounded-xl mt-1 transition-all hover:shadow-lg shadow-md"
              >
                <Phone size={14} />
                +91 98765 43210
              </a>
              <p className="text-[10px] text-blue-300 pt-1">Working Hours: 09:00 AM – 06:00 PM (IST)</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-blue-300 gap-4">
          <p>© {new Date().getFullYear()} Kiran Global — M.S. Jain Group. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#f5c800] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#f5c800] cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="hover:text-[#f5c800] cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
