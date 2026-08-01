"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";

export const ABOUT_DROPDOWN_LINKS = [
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Chairman’s Message", href: "/chairmans-message" },
  { label: "History", href: "/history" },
  { label: "Management", href: "/management" },
  { label: "Awards & Achievements", href: "/awards-and-achievements" },
  { label: "ISO 9001:2015 Certification", href: "/about" },
  { label: "FAQ", href: "/faq-page" },
  { label: "AGM Notice", href: "/about" },
  { label: "Policy", href: "/about" },
  { label: "Terms & Conditions", href: "/about" },
];

export const INDUSTRIES_DROPDOWN_LINKS = [
  { label: "Soap & Detergents", href: "/industries/soap-and-detergents" },
  { label: "Cosmetics", href: "/industries/cosmetics" },
  { label: "Agriculture", href: "/industries/agriculture" },
  { label: "Timber Treatment", href: "/industries/timber-treatment" },
  { label: "Adhesives", href: "/industries/adhesives" },
  { label: "Automotive Repair", href: "/industries/automotive-repair" },
  { label: "Food Industry", href: "/industries/food-industry" },
  { label: "Water Treatment", href: "/industries/water-treatment" },
  { label: "Foundries", href: "/industries/foundries" },
  { label: "Petroleum & Oil Drilling", href: "/industries/petroleum-and-oil-drilling" },
  { label: "Concrete & General", href: "/industries/concrete-and-general" },
  { label: "Chemical Injection", href: "/industries/chemical-injection" },
  { label: "Metals", href: "/industries/metals" },
  { label: "Ceramics & Refractory", href: "/industries/ceramics-and-refractory" },
];

export const PRODUCTS_DROPDOWN_LINKS = [
  { label: "Sodium Silicate Lumps", href: "/products/sodium-silicate-lumps" },
  { label: "Sodium Silicate Liquid", href: "/products/sodium-silicate-liquid" },
  { label: "Potassium Silicate Lumps", href: "/products/potassium-silicate-lumps" },
  { label: "Potassium Silicate Liquid", href: "/products/potassium-silicate-liquid" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for header shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── TOP UTILITY BAR ─────────────────────────────────────────────── */}
      <div className="bg-[#0072CE] text-blue-100 py-2.5 font-sans text-xs hidden md:block relative z-50">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left side - Contact Info */}
          <div className="flex items-center gap-5">
            <a href="tel:+917358600595" className="flex items-center gap-2 hover:text-[#f5c800] transition-colors duration-200 font-bold text-white">
              <Phone size={11} className="text-[#f5c800]" />
              <span>+91 73586 00595</span>
            </a>
            <span className="text-blue-200/60 font-light">|</span>
            <a href="mailto:info@kiranglobal.com" className="flex items-center gap-2 hover:text-[#f5c800] transition-colors duration-200 font-bold text-white">
              <Mail size={11} className="text-[#f5c800]" />
              <span>info@kiranglobal.com</span>
            </a>
          </div>
          {/* Right side - Country Names */}
          <div className="flex items-center gap-3 font-bold text-white text-[11px] tracking-wider">
            <span>INDIA</span>
            <span className="text-blue-200/50">•</span>
            <span>UAE</span>
            <span className="text-blue-200/50">•</span>
            <span>EGYPT</span>
            <span className="text-blue-200/50">•</span>
            <span>SOUTH AFRICA</span>
          </div>
        </div>
      </div>

      {/* ── MAIN STICKY HEADER ─────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl shadow-blue-900/10 border-b border-slate-200"
          : "bg-white border-b border-slate-200"
          }`}
      >
        {/* Bottom thin accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0072CE] via-[#f5c800] to-[#0072CE] opacity-70" />

        <div className="w-full max-w-[1700px] mx-auto px-8 sm:px-8">
          <div className="flex items-center justify-between py-4.5">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => { setActiveNav("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="relative flex items-center h-14 w-14 shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Kiran Global Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {/* Home */}
              <Link
                href="/"
                onClick={() => { setActiveNav("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`px-4 py-2 text-base font-bold rounded-lg transition-all duration-200 ${activeNav === "home"
                  ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                  : "text-[#003d7a] hover:text-white hover:bg-[#0072CE]"
                  }`}
              >
                Home
              </Link>

              {/* About Us (With Hover Dropdown) */}
              <div className="relative group">
                <Link
                  href="/about"
                  onClick={() => setActiveNav("about")}
                  className={`px-4 py-2 text-base font-bold rounded-lg flex items-center gap-1.5 transition-all duration-200 ${activeNav === "about"
                    ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                    : "text-[#003d7a] hover:text-white hover:bg-[#0072CE]"
                    }`}
                >
                  About Us
                  <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-1 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2 space-y-1">
                  {ABOUT_DROPDOWN_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-4 text-sm font-bold text-black rounded-lg hover:text-white hover:bg-[#0072CE] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries We Serve (With Hover Dropdown) */}
              <div className="relative group">
                <Link
                  href="/industries"
                  onClick={() => setActiveNav("industries")}
                  className={`px-4 py-2 text-base font-bold rounded-lg flex items-center gap-1.5 transition-all duration-200 ${activeNav === "industries"
                    ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                    : "text-[#003d7a] hover:text-white hover:bg-[#0072CE]"
                    }`}
                >
                  Industries We Serve
                  <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                {/* 2-Column Dropdown Menu — Fits all 14 links cleanly */}
                <div className="absolute left-0 mt-1 w-[560px] bg-white border border-slate-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 grid grid-cols-2 gap-1">
                  {INDUSTRIES_DROPDOWN_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-3.5 py-4 text-sm font-bold text-black rounded-lg hover:text-white hover:bg-[#0072CE] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Products (With Hover Dropdown) */}
              <div className="relative group">
                <Link
                  href="/products-page"
                  onClick={() => setActiveNav("products")}
                  className={`px-4 py-2 text-base font-bold rounded-lg flex items-center gap-1.5 transition-all duration-200 ${activeNav === "products"
                    ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                    : "text-[#003d7a] hover:text-white hover:bg-[#0072CE]"
                    }`}
                >
                  Products
                  <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-1 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2 space-y-1">
                  {PRODUCTS_DROPDOWN_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-4 text-sm font-bold text-black rounded-lg hover:text-white hover:bg-[#0072CE] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>



              {/* Careers */}
              <Link
                href="/careers"
                onClick={() => setActiveNav("careers")}
                className={`px-4 py-2 text-base font-bold rounded-lg transition-all duration-200 ${activeNav === "careers"
                  ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                  : "text-[#003d7a] hover:text-white hover:bg-[#0072CE]"
                  }`}
              >
                Careers
              </Link>

              {/* Gallery */}
              <Link
                href="/gallery"
                onClick={() => setActiveNav("gallery")}
                className={`px-4 py-2 text-base font-bold rounded-lg transition-all duration-200 ${activeNav === "gallery"
                  ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                  : "text-[#003d7a] hover:text-white hover:bg-[#0072CE]"
                  }`}
              >
                Gallery
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={() => setActiveNav("blog")}
                className={`px-4 py-2 text-base font-bold rounded-lg transition-all duration-200 ${activeNav === "blog"
                  ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                  : "text-[#003d7a] hover:text-white hover:bg-[#0072CE]"
                  }`}
              >
                Blog
              </Link>

              {/* Divider */}
              <div className="h-7 w-px bg-slate-300 mx-2" />

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={() => setActiveNav("contact")}
                className="relative overflow-hidden ml-1 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-[#0072CE] to-[#003d7a] shadow-md shadow-blue-800/30 hover:shadow-xl hover:shadow-blue-800/40 hover:scale-105 active:scale-95 transition-all duration-200 group"
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

        {/* ── MOBILE DRAWER ─────────────────────────────────────────────── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-[85vh] overflow-y-auto opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white border-t border-slate-100 px-5 pb-6 pt-3 flex flex-col gap-1.5 shadow-2xl shadow-blue-900/10">
            {/* Home */}


            {/* About Us Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeNav === "about" ? "bg-[#0072CE] text-white" : "text-[#003d7a] bg-slate-50"
                  }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${activeNav === "about" ? "bg-[#f5c800]" : "bg-slate-300"}`} />
                  About Us
                </span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-6 pr-2 py-1.5 flex flex-col gap-1 bg-slate-50/50 mt-1 rounded-xl">
                  {/* View Main About Page Link */}
                  <Link
                    href="/about"
                    onClick={() => {
                      setActiveNav("about");
                      setMobileMenuOpen(false);
                    }}
                    className="block py-2.5 px-3 text-xs font-bold text-[#0072CE] hover:text-[#003d7a]"
                  >
                    OVERVIEW (ABOUT PAGE)
                  </Link>
                  {ABOUT_DROPDOWN_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 px-3 text-xs font-semibold text-[#003d7a] border-t border-slate-100 hover:text-[#0072CE]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries We Serve Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeNav === "industries" ? "bg-[#0072CE] text-white" : "text-[#003d7a] bg-slate-50"
                  }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${activeNav === "industries" ? "bg-[#f5c800]" : "bg-slate-300"}`} />
                  Industries We Serve
                </span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileIndustriesOpen && (
                <div className="pl-6 pr-2 py-1.5 flex flex-col gap-1 bg-slate-50/50 mt-1 rounded-xl">
                  {/* View Main Industries Page Link */}
                  <Link
                    href="/industries"
                    onClick={() => {
                      setActiveNav("industries");
                      setMobileMenuOpen(false);
                    }}
                    className="block py-2.5 px-3 text-xs font-bold text-[#0072CE] hover:text-[#003d7a]"
                  >
                    OVERVIEW (INDUSTRIES PAGE)
                  </Link>
                  {INDUSTRIES_DROPDOWN_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 px-3 text-xs font-semibold text-[#003d7a] border-t border-slate-100 hover:text-[#0072CE]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeNav === "products" ? "bg-[#0072CE] text-white" : "text-[#003d7a] bg-slate-50"
                  }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${activeNav === "products" ? "bg-[#f5c800]" : "bg-slate-300"}`} />
                  Products
                </span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProductsOpen && (
                <div className="pl-6 pr-2 py-1.5 flex flex-col gap-1 bg-slate-50/50 mt-1 rounded-xl">
                  <Link
                    href="/products-page"
                    onClick={() => {
                      setActiveNav("products");
                      setMobileMenuOpen(false);
                    }}
                    className="block py-2.5 px-3 text-xs font-bold text-[#0072CE] hover:text-[#003d7a]"
                  >
                    OVERVIEW (PRODUCTS PAGE)
                  </Link>
                  {PRODUCTS_DROPDOWN_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 px-3 text-xs font-semibold text-[#003d7a] border-t border-slate-100 hover:text-[#0072CE] uppercase"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>



            {/* Careers */}
            <Link
              href="/careers"
              onClick={() => {
                setActiveNav("careers");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeNav === "careers" ? "bg-[#0072CE] text-white" : "text-[#003d7a] bg-slate-50"
                }`}
            >
              <span className={`h-2 w-2 rounded-full ${activeNav === "careers" ? "bg-[#f5c800]" : "bg-slate-300"}`} />
              Careers
            </Link>

            {/* Gallery */}
            <Link
              href="/gallery"
              onClick={() => {
                setActiveNav("gallery");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeNav === "gallery" ? "bg-[#0072CE] text-white" : "text-[#003d7a] bg-slate-50"
                }`}
            >
              <span className={`h-2 w-2 rounded-full ${activeNav === "gallery" ? "bg-[#f5c800]" : "bg-slate-300"}`} />
              Gallery
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={() => {
                setActiveNav("blog");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeNav === "blog" ? "bg-[#0072CE] text-white" : "text-[#003d7a] bg-slate-50"
                }`}
            >
              <span className={`h-2 w-2 rounded-full ${activeNav === "blog" ? "bg-[#f5c800]" : "bg-slate-300"}`} />
              Blog
            </Link>


            <a
              href="#contact"
              onClick={() => {
                setActiveNav("contact");
                setMobileMenuOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0072CE] to-[#003d7a] text-white font-black py-4 px-6 rounded-xl text-sm uppercase tracking-wider shadow-lg transition-all hover:shadow-xl"
            >
              <Phone size={15} />
              Get a Free Quote
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
