"use client";

import React, { useState, useEffect } from "react";
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
  Leaf,
  RefreshCw,
  Wind
} from "lucide-react";

// Slide Data
const SLIDES = [
  {
    image: "/banner2.jpg",

  },
  {
    image: "/41.png",
  }
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



// Industries We Support Data (Hover to change background image)
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("jaw");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

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
    <div className="relative min-h-screen flex flex-col bg-[#edf4fa] font-sans selection:bg-[#facc15] selection:text-slate-950">

      {/* Primary Header - Wider Navbar alignment */}
      <header className="sticky top-0 z-40 bg-blue-50 backdrop-blur-md shadow-xs transition-all border-b border-slate-100">
        <div className="w-full max-w-[95%] lg:max-w-[1550px] mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">

          {/* Logo Section */}
          <div className="relative flex items-center h-12 w-48 sm:w-56 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Volga Asia Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-705">
            <a
              href="#home"
              onClick={() => setActiveNav("home")}
              className={`transition-colors py-2 relative font-bold text-slate-700 hover:text-[#ca8a04] ${activeNav === "home" ? "text-[#ca8a04] border-b-2 border-[#facc15]" : ""}`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setActiveNav("about")}
              className={`transition-colors py-2 relative font-bold text-slate-700 hover:text-[#ca8a04] ${activeNav === "about" ? "text-[#ca8a04] border-b-2 border-[#facc15]" : ""}`}
            >
              About
            </a>
            <a
              href="#products"
              onClick={() => setActiveNav("products")}
              className={`transition-colors py-2 relative font-bold text-slate-700 hover:text-[#ca8a04] ${activeNav === "products" ? "text-[#ca8a04] border-b-2 border-[#facc15]" : ""}`}
            >
              Products
            </a>
            <a
              href="#infrastructure"
              onClick={() => setActiveNav("infrastructure")}
              className={`transition-colors py-2 relative font-bold text-slate-700 hover:text-[#ca8a04] ${activeNav === "infrastructure" ? "text-[#ca8a04] border-b-2 border-[#facc15]" : ""}`}
            >
              Infrastructure
            </a>
            <a
              href="#contact"
              onClick={() => setActiveNav("contact")}
              className="bg-[#facc15] hover:bg-[#eab308] text-slate-950 font-extrabold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-wider block"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-[#ca8a04] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fade-in z-50">
            <a
              href="#home"
              onClick={() => { setActiveNav("home"); setMobileMenuOpen(false); }}
              className={`py-2 px-3 rounded-lg font-semibold text-slate-800 hover:bg-yellow-50 ${activeNav === "home" ? "text-[#ca8a04] bg-[#fefce8]" : ""}`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => { setActiveNav("about"); setMobileMenuOpen(false); }}
              className={`py-2 px-3 rounded-lg font-semibold text-slate-800 hover:bg-yellow-50 ${activeNav === "about" ? "text-[#ca8a04] bg-[#fefce8]" : ""}`}
            >
              About
            </a>
            <a
              href="#products"
              onClick={() => { setActiveNav("products"); setMobileMenuOpen(false); }}
              className={`py-2 px-3 rounded-lg font-semibold text-slate-800 hover:bg-yellow-50 ${activeNav === "products" ? "text-[#ca8a04] bg-[#fefce8]" : ""}`}
            >
              Products
            </a>
            <a
              href="#infrastructure"
              onClick={() => { setActiveNav("infrastructure"); setMobileMenuOpen(false); }}
              className={`py-2 px-3 rounded-lg font-semibold text-slate-800 hover:bg-yellow-50 ${activeNav === "infrastructure" ? "text-[#ca8a04] bg-[#fefce8]" : ""}`}
            >
              Infrastructure
            </a>
            <a
              href="#contact"
              onClick={() => { setActiveNav("contact"); setMobileMenuOpen(false); }}
              className="mt-2 bg-[#facc15] hover:bg-[#eab308] text-center text-slate-950 font-extrabold p-3 rounded-lg transition-colors uppercase tracking-wider text-sm shadow-md"
            >
              Contact Us
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">

        {/* Hero Section Banner - Shorter cover heights (65vh) as requested, full width */}
        <section id="home" className="relative h-[65vh] min-h-[420px] w-full overflow-hidden bg-slate-900 text-white flex items-center">
          {/* Slides */}
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              {/* background dark overlay */}
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <Image
                src={slide.image}
                alt="Volga Asia Slider"
                fill
                priority={index === 0}
                className="object-cover object-center w-full h-full"
              />



            </div>

          ))}

          {/* Slider Left Arrow - Shaded Circle matching styling */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-[#facc15] hover:text-slate-950 text-white backdrop-blur-md border border-white/10 hover:border-[#facc15] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Slider Right Arrow - Shaded Circle matching styling */}
          <button
            onClick={handleNextSlide}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-[#facc15] hover:text-slate-950 text-white backdrop-blur-md border border-white/10 hover:border-[#facc15] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* White Bottom Indicator Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"}`}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </section>

        {/* About Section - Deep Blue theme background with 3D Flip Card */}
        <section id="about" className="relative py-20 bg-blue-50 overflow-hidden world-grid-bg">
          {/* Decorative concentric targets inside background */}
          <div className="absolute right-0 bottom-[-150px] w-[500px] h-[500px] pointer-events-none opacity-10">
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
            <div className="absolute inset-12 rounded-full border border-white/15"></div>
            <div className="absolute inset-28 rounded-full border border-white/10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Narrative & Stats (White blocks) */}
              <div className="lg:col-span-6 space-y-6 text-white">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#475569] uppercase">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block shadow-xs shrink-0"></span>
                    <span>About Us</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c122c] tracking-tight leading-[1.15] lg:leading-[1.2]">
                    About Volga Asia Company
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-[1.7] font-normal">
                  We are a leading manufacturer and supplier of high-performance stone crusher machines, delivering advanced crushing solutions for the construction and mining industries. With years of industry experience, we specialize in designing and manufacturing both mobile crushers and fixed crushing plants that meet the highest standards of quality, durability, and efficiency.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-[1.7] font-normal">
                  Our company is committed to providing reliable equipment that helps clients maximize productivity while minimizing operational costs. From small-scale projects to large industrial operations, we offer customized crushing solutions tailored to specific requirements.
                </p>

                {/* Stats Section with White blocks matching user screenshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  <div className="bg-white p-6 rounded-2xl shadow-xl hover:scale-102 transition-transform border border-white/10">
                    <div className="text-3xl font-black text-[#ca8a04]">20+</div>
                    <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Years Experience</div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-xl hover:scale-102 transition-transform border border-white/10">
                    <div className="text-3xl font-black text-[#ca8a04]">24+</div>
                    <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Industries Served</div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Flip Card Frame */}
              <div className="lg:col-span-6 flex justify-center items-center">
                <div className="perspective-1000 w-full max-w-[460px] h-[360px] sm:h-[430px] group cursor-pointer relative">
                  <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">
                    {/* Front Face: why-choose.jpeg */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl bg-white p-4 border border-white/20">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/why-choose.jpeg"
                          alt="Volga Asia Stationary Crusher"
                          fill
                          className="object-contain bg-white"
                          priority
                        />
                      </div>
                    </div>

                    {/* Back Face: 41.png mobile crusher */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-2xl bg-white p-4 border border-white/20">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/41.png"
                          alt="Volga Asia Mobile Crusher"
                          fill
                          className="object-contain bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Industries We Support Section (Transparent Window Card Layout matching Reference Screenshot & Logo Canary Yellow Accent) */}
        <section className="relative min-h-[550px] sm:min-h-[640px] w-full py-16 sm:py-24 overflow-hidden flex items-center justify-center bg-slate-900 transition-all duration-700">
          
          {/* Full-width Background Images with smooth crossfade opacity */}
          {INDUSTRIES_SUPPORTED.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === activeIndustryIndex ? "opacity-100 scale-100 z-0" : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                className="object-cover object-center w-full h-full filter brightness-100 transition-transform duration-1000 ease-out"
              />
            </div>
          ))}

          {/* Floating Card with Thick White Outer Frame & Transparent Window Cutout */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-[32px] border-[6px] border-white shadow-2xl overflow-hidden bg-transparent flex flex-col md:flex-row min-h-[380px] sm:min-h-[440px]">
              
              {/* Left Side: Completely Transparent Window Frame (Section background shows directly through!) */}
              <div className="flex-1 bg-transparent min-h-[200px] md:min-h-full">
                {/* Intentionally empty/transparent to reveal the background image beneath */}
              </div>

              {/* Right Side: Off-white/Cream List Panel matching logo branding */}
              <div className="w-full md:w-[380px] lg:w-[420px] bg-[#faf8f5] p-6 sm:p-8 flex flex-col justify-center border-t-[6px] md:border-t-0 md:border-l-[6px] border-white">
                
                {/* Category Header with Logo Sunburst Yellow Accent Pulse */}
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#475569] uppercase mb-5 sm:mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block animate-pulse shadow-xs shrink-0"></span>
                  <span>Industries We Support</span>
                </div>

                {/* Interactive Item List */}
                <div className="space-y-3.5">
                  {INDUSTRIES_SUPPORTED.map((item, index) => {
                    const IconComp = item.icon;
                    const isActive = index === activeIndustryIndex;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setActiveIndustryIndex(index)}
                        onClick={() => setActiveIndustryIndex(index)}
                        className={`flex items-center gap-4 p-4 rounded-[28px] cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "bg-[#efe9df]"
                            : "bg-transparent hover:bg-[#efe9df]/50"
                        }`}
                      >
                        {/* Icon Circle (Beige in normal state, White in hovered state) */}
                        <div
                          className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-white shadow-xs text-[#0b5c9e]"
                              : "bg-[#efe9df]/85 text-[#0b5c9e]/80"
                          }`}
                        >
                          <IconComp size={20} />
                        </div>

                        {/* Text Container */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[15px] sm:text-base font-bold text-[#0c122c] tracking-tight leading-none">
                            {item.title}
                          </h3>
                          {isActive && (
                            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-tight font-normal">
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

        {/* Sustainability & Commitment Section (Matching Logo Sunburst Yellow Theme & Exact Screenshot Layout) */}
        <section className="py-12 sm:py-16 bg-[#edf4fa] relative overflow-hidden border-y border-slate-200/60">
          <div className="w-full max-w-[95%] lg:max-w-[1550px] mx-auto px-4 sm:px-8 relative z-10">
            
            {/* Top Main Grid Row: Image on Left, Content on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Landscape Image */}
              <div className="lg:col-span-6 relative w-full h-[260px] sm:h-[320px] lg:h-[340px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-200">
                <Image
                  src="/SUSTAINABILITY.webp"
                  alt="Costruire un Futuro Sostenibile"
                  fill
                  priority
                  className="object-cover object-center w-full h-full"
                />
              </div>

              {/* Right Column: Content styled with Logo Sunburst Yellow Accent (#facc15 / #d97706) */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Full-width Top Sunburst Yellow Accent Bar matching Reference Screenshot */}
                <div className="h-2 w-full bg-[#facc15] rounded-full shadow-xs"></div>

                {/* Badge matching logo sunburst yellow palette */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#475569] uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block shadow-xs shrink-0"></span>
                  <span>Sostenibilità e Responsabilità</span>
                </div>

                {/* Heading with Logo Sunburst Yellow Text Highlight */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c122c] tracking-tight leading-[1.15] lg:leading-[1.2]">
                  Costruire un Futuro Sostenibile — <span className="text-[#b45309] bg-[#fefce8] px-2 py-0.5 rounded-lg border border-[#fef08a] shadow-xs inline-block">Il Nostro Impegno</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-[1.7] font-normal">
                  Siamo impegnati in pratiche di produzione ambientalmente responsabili che riducono l'impatto ambientale massimizzando l'efficienza. La nostra attenzione all'innovazione sostenibile aiuta le industrie a ottenere prestazioni migliori con costi ambientali inferiori.
                </p>

                {/* Primary Logo Sunburst Yellow Action Button */}
                <div className="pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#facc15] hover:bg-[#eab308] text-slate-950 font-extrabold px-7 py-3 rounded-full transition-all text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Visit section</span>
                    <ArrowRight size={15} />
                  </a>
                </div>

              </div>

            </div>

            {/* Bottom Row: 2 Feature Cards with Sunburst Yellow Icons & Accent Styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200/60">
              
              {/* Card 1 */}
              <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/70 flex items-start gap-4 hover:border-[#facc15]/80 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#fefce8] text-[#ca8a04] border border-[#fef08a] flex items-center justify-center shrink-0">
                  <RefreshCw size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">
                    Efficienza delle Risorse
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Operazioni ottimizzate
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/70 flex items-start gap-4 hover:border-[#facc15]/80 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#fefce8] text-[#ca8a04] border border-[#fef08a] flex items-center justify-center shrink-0">
                  <Wind size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base">
                    Emissioni Ridotte
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Produzione pulita
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Interactive Products Section */}
        <section id="products" className="py-20 bg-[#edf4fa] relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#475569] uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block shadow-xs shrink-0"></span>
                <span>Product Catalog</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c122c] tracking-tight leading-[1.15]">
                Heavy Crushing & Screening Systems
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-[1.7]">
                Engineered with precision for peak operational capability, uniform output grade, and low maintenance cycles.
              </p>
            </div>

            {/* Product Switch Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod.id)}
                  className={`px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer ${selectedProduct === prod.id ? "bg-[#facc15] text-slate-955 shadow-md scale-105" : "bg-white text-slate-750 hover:bg-yellow-50"}`}
                >
                  {prod.name}
                </button>
              ))}
            </div>

            {/* Current Product Detailed View */}
            {PRODUCTS.map((prod) => {
              if (prod.id !== selectedProduct) return null;
              const IconComp = prod.icon;
              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-slide-in"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#fefce8] text-[#ca8a04] border border-[#fef08a] p-4 rounded-2xl">
                        <IconComp size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate-800">{prod.name}</h3>
                        <p className="text-xs font-bold text-[#b45309] uppercase tracking-wider mt-0.5">Heavy Industry Grade</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base leading-[1.7] font-normal">
                      {prod.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 text-sm">Key Specifications:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {prod.specs.map((spec, index) => (
                          <div key={index} className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                            <span className="text-xs font-bold text-slate-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4">
                      <a
                        href="#contact"
                        className="bg-[#facc15] hover:bg-[#eab308] text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md transition-all"
                      >
                        Request Quote & Info
                      </a>
                      <a
                        href="#infrastructure"
                        className="bg-transparent hover:bg-slate-50 text-slate-700 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider border border-slate-200 transition-all cursor-pointer"
                      >
                        Infrastructure Details
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-5 relative h-[250px] sm:h-[320px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-100">
                    <Image
                      src="/41.png"
                      alt={prod.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] uppercase font-extrabold tracking-widest bg-[#facc15] text-slate-950 px-2.5 py-1 rounded">
                        Manufacturing Setup
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Infrastructure & Quality Standard Section */}
        <section id="infrastructure" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text side */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#475569] uppercase">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block shadow-xs shrink-0"></span>
                    <span>Infrastructure & Capabilities</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c122c] tracking-tight leading-[1.15]">
                    Precision Engineering & Quality Workmanship
                  </h2>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-[1.7] font-normal">
                  Volga Asia operates a heavy machining workshop equipped with CNC boring mills, high capacity automatic welding arches, structural steel bending benches, and precise ultrasonic test kits to verify welding integrity inside heavy templates.
                </p>

                {/* Grid items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-3">
                    <div className="bg-[#fefce8] text-[#ca8a04] p-2.5 h-10 w-10 flex items-center justify-center rounded-lg shrink-0 border border-[#fef08a]">
                      <Award size={20} className="text-[#ca8a04]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Top-Tier Certification</h4>
                      <p className="text-xs text-slate-500 mt-1">Products undergo rigid stress analysis before delivery.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-[#fefce8] text-[#ca8a04] p-2.5 h-10 w-10 flex items-center justify-center rounded-lg shrink-0 border border-[#fef08a]">
                      <Clock size={20} className="text-[#ca8a04]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">High Load Capacity</h4>
                      <p className="text-xs text-slate-500 mt-1">Engineered to support heavy throughput over longer intervals.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start gap-4 mt-6">
                  <p className="text-xs text-slate-650 leading-relaxed font-sans">
                    <strong>Notice:</strong> We offer custom configuration modules mapping specific hard ores like quartzite, basalt, granite, or river bed gravel. Ask our specialists to optimize the cavity configurations of jaws for maximum utility.
                  </p>
                </div>
              </div>

              {/* Visual Grid side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[250px] sm:h-[300px] relative rounded-2xl overflow-hidden shadow-md bg-slate-100">
                  <Image
                    src="/home-ab2.webp"
                    alt="Workshop Facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="h-[250px] sm:h-[300px] relative rounded-2xl overflow-hidden shadow-md translate-y-6 bg-slate-100">
                  <Image
                    src="/41.png"
                    alt="Precision Assembly"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network / World Map Circular Target Accent Section */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          {/* Faint dotted world grid background */}
          <div className="absolute inset-0 opacity-10 world-grid-bg"></div>

          {/* Golden/Orange concentric target pulse represent global presence goal circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0 opacity-20">
            <div className="absolute inset-0 rounded-full border border-white/5"></div>
            <div className="absolute inset-16 rounded-full border border-white/10"></div>
            <div className="absolute inset-32 rounded-full border border-[#facc15]/30 animate-pulse"></div>
            <div className="absolute inset-48 rounded-full border border-[#0b5c9e]/20"></div>
            <div className="absolute inset-64 rounded-full border border-white/10"></div>
            <div className="absolute inset-80 rounded-full border-2 border-[#facc15]/20"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block shadow-xs shrink-0"></span>
                <span>Global Network</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.15]">
                World Footprint & Target Quality
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-[1.7]">
                Concentric logistics network supplying crusher aggregates, wear spares, and active remote maintenance worldwide.
              </p>
            </div>

            {/* Visualizing target points */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center bg-slate-955 bg-slate-950/40 backdrop-blur-xs p-8 rounded-3xl border border-white/5">
              <div className="space-y-2">
                <div className="text-3xl font-black text-[#facc15]">Europe</div>
                <p className="text-xs text-slate-400">Strategic spares storage in Germany & Romania to supply Eastern Europe.</p>
              </div>
              <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
                <div className="text-3xl font-black text-[#facc15]">Asia-Pacific</div>
                <p className="text-xs text-slate-400 font-sans">Headquarters and prime heavy assembly centers based in Northern India.</p>
              </div>
              <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
                <div className="text-3xl font-black text-[#facc15]">Middle East</div>
                <p className="text-xs text-slate-400">Customized high-heat crusher lubricant upgrades for UAE & Saudi operations.</p>
              </div>
              <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
                <div className="text-3xl font-black text-[#facc15]">Africa</div>
                <p className="text-xs text-slate-400">Operational projects in copper, gold, and iron mines across 8+ African nations.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-semibold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="h-2 w-2 bg-emerald-500 rounded-full animate-ping"></span>
                Active Deployments Tracked via Volga-Link Telemetry.
              </div>
            </div>
          </div>
        </section>

        {/* Contact Inquiry Section */}
        <section id="contact" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Left Column: Contact details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#475569] uppercase">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block shadow-xs shrink-0"></span>
                    <span>Need Help?</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c122c] tracking-tight leading-[1.15]">
                    Connect With Our Engineers
                  </h2>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-[1.7] font-sans">
                  Have a specific quarry configuration, throughput quota, or parts request? Send us your message. Our design unit will draft an initial proposal within 24 hours.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#fefce8] text-[#ca8a04] p-3 rounded-full shrink-0 border border-[#fef08a]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Call Support</span>
                      <a href="tel:+919876543210" className="text-sm font-bold text-slate-800 hover:text-[#ca8a04] transition-colors font-sans">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="bg-[#fefce8] text-[#ca8a04] p-3 rounded-full shrink-0 border border-[#fef08a]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase font-sans">Business Email</span>
                      <a href="mailto:info@volgaasia.com" className="text-sm font-bold text-slate-800 hover:text-[#ca8a04] transition-colors font-sans">info@volgaasia.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="bg-[#fefce8] text-[#ca8a04] p-3 rounded-full shrink-0 border border-[#fef08a]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase">Manufacturing HQ</span>
                      <span className="text-sm font-bold text-slate-800 font-sans">Plot 140, Phase 2, Industrial Cluster, Delhi-NCR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Submission Form */}
              <div className="lg:col-span-7">
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 uppercase tracking-tight">
                    Submit Quote Request
                  </h3>

                  {formSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-250 p-6 rounded-2xl text-emerald-700 text-center animate-fade-in space-y-3">
                      <CheckCircle className="mx-auto text-emerald-600" size={40} />
                      <h4 className="font-bold text-lg">Thank You! Your Request Has Been Filed.</h4>
                      <p className="text-xs font-sans">Our engineering division will analyze your details and respond shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-650 uppercase mb-1.5 font-sans">Your Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="John Doe"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#facc15] transition-colors text-slate-800 font-sans"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-650 uppercase mb-1.5 font-sans">Business Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="john@company.com"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#facc15] transition-colors text-slate-800 font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-655 uppercase mb-1.5 font-sans">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+1 (234) 567-890"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#facc15] transition-colors text-slate-800 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-655 uppercase mb-1.5 font-sans">Job Requirements / Details *</label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleFormChange}
                          placeholder="Provide details like expected throughput, stone material type, feeding size, etc..."
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#facc15] transition-colors text-slate-800 resize-none font-sans"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#facc15] hover:bg-[#eab308] text-slate-950 font-extrabold p-4 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
                      >
                        Send Inquiry Now
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer Design */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          {/* Logo & Intro */}
          <div className="space-y-4">
            <div className="relative flex items-center h-12 w-48 bg-white p-2 rounded-lg">
              <Image
                src="/logo.png"
                alt="Volga Asia Logo Footer"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Volga Asia manufactures high performance fixed crushers, vibratory screeners, and modular machinery configured for severe industrial requirements.
            </p>
          </div>

          {/* Navbar Links */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#facc15] border-l-2 border-[#facc15] pl-3 font-sans">Useful Links</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li><a href="#home" className="hover:text-[#facc15] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#facc15] transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-[#facc15] transition-colors">Products & specs</a></li>
              <li><a href="#infrastructure" className="hover:text-[#facc15] transition-colors">Infrastructures</a></li>
              <li><a href="#contact" className="hover:text-[#facc15] transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          {/* Products links */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#facc15] border-l-2 border-[#facc15] pl-3 font-sans">Equipments</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li><span className="hover:text-[#facc15] cursor-pointer transition-colors">Primary Jaw Crusher</span></li>
              <li><span className="hover:text-[#facc15] cursor-pointer transition-colors">Hydraulic Cone Crusher</span></li>
              <li><span className="hover:text-[#facc15] cursor-pointer transition-colors">Heavy Duty Feeder</span></li>
              <li><span className="hover:text-[#facc15] cursor-pointer transition-colors">Vibratory Screening Unit</span></li>
              <li><span className="hover:text-[#facc15] cursor-pointer transition-colors">Sand Washing Setup</span></li>
            </ul>
          </div>

          {/* Newsletter / Notice */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-[#facc15] border-l-2 border-[#facc15] pl-3 font-sans">Global Hotline</h4>
            <div className="space-y-2 text-xs text-slate-400 font-sans">
              <p>For custom engineering and site blueprints:</p>
              <a href="tel:+919876543210" className="inline-block bg-[#facc15] hover:bg-[#eab308] text-slate-950 font-extrabold px-4 py-2 rounded mt-2 transition-all">
                +91 98765 43210
              </a>
              <p className="text-[10px] text-slate-500 pt-1 font-sans">Working Hours: 09:00 AM - 06:00 PM (IST)</p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4 font-sans">
          <p>© {new Date().getFullYear()} Volga Asia Machinery. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
