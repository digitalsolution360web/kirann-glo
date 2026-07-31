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
    <footer className="bg-[#0B1E36] text-white border-t-4 border-[#f5c800]">
      {/* Main Grid */}
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 pt-12 pb-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20">
        {/* Logo & Social */}
        <div className="flex flex-col gap-5">
          <div className="relative flex items-center h-14 w-44 bg-white p-2 rounded-md shadow-lg">
            <Image src="/logo.png" alt="Kiran Global Logo" fill className="object-contain p-1" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <a href="#" className="w-8 h-8 border-2 border-white/60 flex items-center justify-center text-xs font-black text-white hover:bg-[#f5c800] hover:text-[#0B1E36] hover:border-[#f5c800] transition-all duration-200 rounded-sm">f</a>
            <a href="#" className="w-8 h-8 border-2 border-white/60 flex items-center justify-center text-xs font-black text-white hover:bg-[#f5c800] hover:text-[#0B1E36] hover:border-[#f5c800] transition-all duration-200 rounded-sm">t</a>
            <a href="#" className="w-8 h-8 border-2 border-white/60 flex items-center justify-center text-xs font-black text-white hover:bg-[#f5c800] hover:text-[#0B1E36] hover:border-[#f5c800] transition-all duration-200 rounded-sm">g+</a>
            <a href="#" className="w-8 h-8 border-2 border-white/60 flex items-center justify-center text-xs font-black text-white hover:bg-[#f5c800] hover:text-[#0B1E36] hover:border-[#f5c800] transition-all duration-200 rounded-sm">in</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-wider text-white border-b-2 border-[#f5c800] pb-2 inline-block w-full">
            <span className="text-white font-black">CONTACT</span>{" "}
            <span className="font-bold text-[#f5c800]">INFO</span>
          </h4>

          <div className="space-y-3">
            {/* CIN / GSTIN */}
            <div className="bg-white/10 p-3 rounded-lg border border-white/15 text-xs">
              <p className="font-extrabold text-[#f5c800] text-[11px] uppercase tracking-wider mb-1">Corporate Registration</p>
              <p className="text-white font-medium">
                <span className="text-slate-300 font-normal">CIN:</span> U24299PY2002PLC000618
              </p>
              <p className="text-white font-medium">
                <span className="text-slate-300 font-normal">GSTIN:</span> 33AABCK4882E8ZH
              </p>
            </div>

            {/* Address Card */}
            <div className="flex gap-3 items-start  p-3 rounded-lg border border-white/15 hover:bg-white/15 transition-all">
              <div className="w-8 h-8 rounded-full bg-[#f5c800] text-[#0B1E36] flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                <MapPin size={16} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-[#f5c800] uppercase tracking-wider">Head Office</p>
                <p className="text-xs font-semibold text-white leading-normal mt-0.5">
                  No.104, Phlox Apartments, 1st Floor, F-2, Q-Block, 3rd Avenue, AnnaNagar, Chennai-600040, Tamilnadu, India.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex gap-3 items-center  p-3 rounded-lg border border-white/15 hover:bg-white/15 transition-all">
              <div className="w-8 h-8 rounded-full bg-[#f5c800] text-[#0B1E36] flex items-center justify-center shrink-0 shadow-md">
                <Mail size={16} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-[#f5c800] uppercase tracking-wider">Email Us</p>
                <a href="mailto:info@kiranglobal.com" className="text-sm font-bold text-white hover:text-[#f5c800] transition-colors block tracking-wide">
                  info@kiranglobal.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex gap-3 items-center  p-3 rounded-lg border border-white/15 hover:bg-white/15 transition-all">
              <div className="w-8 h-8 rounded-full bg-[#f5c800] text-[#0B1E36] flex items-center justify-center shrink-0 shadow-md">
                <Phone size={16} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-[#f5c800] uppercase tracking-wider">Phone Call</p>
                <a href="tel:+917358600595" className="text-sm font-bold text-white hover:text-[#f5c800] transition-colors block tracking-wide">
                  +91 73586 00595
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Quick Info */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-wider text-white border-b-2 border-[#f5c800] pb-2 inline-block w-full">
            <span className="text-white font-black">COMPANY</span>{" "}
            <span className="font-bold text-[#f5c800]">QUICK INFO</span>
          </h4>
          <ul className="space-y-2 text-xs">
            {companyQuickInfo.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#f5c800] font-black text-sm leading-none">&#xBB;</span>
                <a href="#" className="text-white hover:text-[#f5c800] transition-colors font-semibold">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industrial We Serve */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-wider text-white border-b-2 border-[#f5c800] pb-2 inline-block w-full">
            <span className="text-white font-black">INDUSTRIAL</span>{" "}
            <span className="font-bold text-[#f5c800]">WE SERVE</span>
          </h4>
          <ul className="space-y-2 text-xs">
            {industriesWeServe.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#f5c800] font-black text-sm leading-none">&#xBB;</span>
                <span className="text-white hover:text-[#f5c800] cursor-pointer transition-colors font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs bg-[#061324]">
        <p className="text-white font-medium">Copyright &copy; 2018 Kiran Global Chem Limited. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 font-bold">
          {bottomLinks.map((link) => (
            <a key={link} href="#" className="text-white hover:text-[#f5c800] transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
