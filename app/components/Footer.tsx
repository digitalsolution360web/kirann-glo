"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const companyQuickInfo = [
  "Our Products",
  "Our businesses",
  "Our markets",
  "AGM Notice",
  "Our Responsibility",
  "Code of Conduct",
  "Investors",
  "Latest News",
  "Popular Blog",
  "Resources",
];

const industriesWeServe = [
  "SOAP & DETERGENTS",
  "AGRICULTURE",
  "COSMETICS",
  "CONCRETE AND GENERAL",
  "CERAMICS & REFRACTORY",
  "METALS",
  "CHEMICAL INJECTION",
  "PETROLEUM & OIL DRILLING",
  "FOUNDRIES",
  "WATER TREATMENT",
  "ADHESIVES",
  "MINING AND MINERAL PROCESSING",
  "TIMBER TREATMENT",
  "FOOD INDUSTRY",
  "AUTOMOTIVE REPAIR",
];

const bottomLinks = [
  "CSR POLICY",
  "TERMS & CONDITIONS",
  "EVENTS",
  "JOBS",
  "VIDEO",
];

export default function Footer() {
  return (
    <footer className="bg-[#003d7a] text-white">
      {/* Main Grid */}
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 pt-12 pb-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/10">
        {/* Logo & Social */}
        <div className="flex flex-col gap-5">
          <div className="relative flex items-center h-14 w-44 bg-white p-2 rounded-md">
            <Image src="/logo.png" alt="Kiran Global Logo" fill className="object-contain p-1" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <a href="#" className="w-8 h-8 border border-white/50 flex items-center justify-center text-xs font-black text-white hover:bg-[#f5c800] hover:text-[#003d7a] hover:border-[#f5c800] transition-all duration-200 rounded-sm">f</a>
            <a href="#" className="w-8 h-8 border border-white/50 flex items-center justify-center text-xs font-black text-white hover:bg-[#f5c800] hover:text-[#003d7a] hover:border-[#f5c800] transition-all duration-200 rounded-sm">t</a>
            <a href="#" className="w-8 h-8 border border-white/50 flex items-center justify-center text-xs font-black text-white hover:bg-[#f5c800] hover:text-[#003d7a] hover:border-[#f5c800] transition-all duration-200 rounded-sm">g+</a>
            <a href="#" className="w-8 h-8 border border-white/50 flex items-center justify-center text-xs font-black text-white hover:bg-[#f5c800] hover:text-[#003d7a] hover:border-[#f5c800] transition-all duration-200 rounded-sm">in</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-wider text-white border-b border-white/30 pb-2">
            <span className="text-white font-black">CONTACT</span>{" "}
            <span className="font-normal text-slate-200">INFO</span>
          </h4>
          <div className="space-y-3 text-xs leading-relaxed">
            <p className="font-bold text-white">
              CORPORATE IDENTITY NO. (CIN): U24299PY2002PLC000618 GSTIN: 33AABCK4882E8ZH
            </p>
            <div className="flex gap-2 items-start">
              <MapPin size={13} className="shrink-0 mt-0.5 text-white" />
              <div>
                <p className="font-bold text-white mb-0.5">Head Office</p>
                <p className="text-slate-200">No.104, Phlox Apartments, 1st Floor, F-2, Q-Block, 3rd Avenue, AnnaNagar, Chennai-600040, Tamilnadu, India.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <Mail size={13} className="shrink-0 mt-0.5 text-white" />
              <div>
                <p className="font-bold text-white underline">Email</p>
                <a href="mailto:info@kiranglobal.com" className="text-slate-200 hover:text-[#f5c800] transition-colors font-medium">
                  info@kiranglobal.com
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <Phone size={13} className="shrink-0 mt-0.5 text-white" />
              <div>
                <p className="font-bold text-white">Phone No</p>
                <a href="tel:+917358600595" className="text-slate-200 hover:text-[#f5c800] transition-colors font-medium">
                  +91 73586 00595
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Quick Info */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-wider text-white border-b border-white/30 pb-2">
            <span className="text-white font-black">COMPANY</span>{" "}
            <span className="font-normal text-slate-200">QUICK INFO</span>
          </h4>
          <ul className="space-y-1.5 text-xs">
            {companyQuickInfo.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#f5c800] font-black text-sm leading-none">&#xBB;</span>
                <a href="#" className="text-slate-200 hover:text-[#f5c800] transition-colors font-medium">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industrial We Serve */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-wider text-white border-b border-white/30 pb-2">
            <span className="text-white font-black">INDUSTRIAL</span>{" "}
            <span className="font-normal text-slate-200">WE SERVE</span>
          </h4>
          <ul className="space-y-1.5 text-xs">
            {industriesWeServe.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#f5c800] font-black text-sm leading-none">&#xBB;</span>
                <span className="text-slate-200 hover:text-[#f5c800] cursor-pointer transition-colors font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px]">
        <p className="text-slate-300">Copyright &copy; 2018 Kiran Global Chem Limited.</p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 font-semibold">
          {bottomLinks.map((link) => (
            <a key={link} href="#" className="text-slate-300 hover:text-[#f5c800] transition-colors">
              {link
            }</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
