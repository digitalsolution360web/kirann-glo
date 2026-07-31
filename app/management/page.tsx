"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const leaders = [
  { name: "M S JAIN", title: "Chairman", image: "/chairman-pic.jpg" },
  { name: "ATUL JAIN", title: "Vice Chairman", image: "/atul.jpg" },
  { name: "N C RUFUS", title: "CEO", image: "/rufus-300x300.jpg" },
];

export default function ManagementPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-[#0072CE] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* ─── PAGE HEADER ─────────────────────────────────────────── */}
        <section className="bg-[#003d7a] relative overflow-hidden">
          <div className="h-[3px] w-full bg-[#f5c800]" />
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-12">
            <p className="text-[#f5c800] text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              About Us
            </p>
            <h1 className="text-[2.6rem] font-black text-white leading-tight tracking-tight">
              Management
            </h1>
          </div>
        </section>

        {/* ─── CONTENT ────────────────────────────────────────────── */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#003d7a] uppercase tracking-wide">
              EXECUTIVE <span className="font-light text-slate-500">LEADERSHIP</span>
            </h2>
            <div className="h-[3px] w-12 bg-[#f5c800] mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white flex flex-col">
                  <h3 className="text-xl font-black text-[#003d7a] uppercase tracking-wide">
                    {leader.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-semibold mt-1">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
