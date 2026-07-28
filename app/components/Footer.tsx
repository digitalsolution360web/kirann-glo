"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { NAV_LINKS } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-[#003d7a] text-white pt-16 pb-8">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
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
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-[#f5c800] transition-colors flex items-center gap-2 group">
                  <span className="h-px w-3 bg-[#f5c800]/40 group-hover:w-5 group-hover:bg-[#f5c800] transition-all duration-200" />
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="hover:text-[#f5c800] transition-colors flex items-center gap-2 group">
                <span className="h-px w-3 bg-[#f5c800]/40 group-hover:w-5 group-hover:bg-[#f5c800] transition-all duration-200" />
                Contact Sales
              </a>
            </li>
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
              href="tel:+393391192817"
              className="inline-flex items-center gap-2 bg-[#f5c800] hover:bg-[#e8bb00] text-[#0d1f6e] font-black px-5 py-3 rounded-xl mt-1 transition-all hover:shadow-lg shadow-md"
            >
              <Phone size={14} />
              +39 3391192817
            </a>
            <p className="text-[10px] text-blue-300 pt-1">Working Hours: Lun - Ven: 08:00 - 17:00</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-blue-300 gap-4">
        <p>© {new Date().getFullYear()} Kiran Global — M.S. Jain Group. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-[#f5c800] cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-[#f5c800] cursor-pointer transition-colors">Terms & Conditions</span>
          <span className="hover:text-[#f5c800] cursor-pointer transition-colors">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
