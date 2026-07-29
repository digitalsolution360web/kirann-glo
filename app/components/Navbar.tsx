"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "products", label: "Products", href: "/#products" },
  { id: "infrastructure", label: "Infrastructure", href: "/#infrastructure" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "faq", label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          <div className="flex items-center justify-between py-2.5">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setActiveNav("home")}
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
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_LINKS.map((item) => {
                const isPage = item.href.startsWith("/") && !item.href.startsWith("/#");
                const Tag = isPage ? Link : "a";
                return (
                  <Tag
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveNav(item.id)}
                    className={`
                      relative px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-250 group overflow-hidden
                      ${activeNav === item.id
                        ? "text-white bg-[#0072CE] shadow-md shadow-blue-700/30"
                        : "text-[#003d7a] hover:text-white hover:bg-[#0072CE] hover:shadow-md hover:shadow-blue-700/30"
                      }
                    `}
                  >
                    <span className="relative">{item.label}</span>
                  </Tag>
                );
              })}

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

        {/* ── MOBILE DRAWER ─────────────────────────────────────────────── */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-white border-t border-slate-100 px-5 pb-6 pt-3 flex flex-col gap-1.5 shadow-2xl shadow-blue-900/10">
            {NAV_LINKS.map((item) => {
              const isPage = item.href.startsWith("/") && !item.href.startsWith("/#");
              const Tag = isPage ? Link : "a";
              return (
                <Tag
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.id);
                    setMobileMenuOpen(false);
                  }}
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
                </Tag>
              );
            })}

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
