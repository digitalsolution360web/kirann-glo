"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const coreValues = [
  "Safety and Health Inspection",
  "Environmental Engineering",
  "Environmental Consulting",
  "Reliability and Safety Assessment",
  "Leadership with Integrity",
  "Innovative Engineering",
  "Focus On Our Clients",
  "High Quality Professionals",
];

const leadership = [
  { name: "MS JAIN", title: "CHAIRMAN", image: "/chairman-pic.jpg" },
  { name: "ATUL JAIN", title: "VICE CHAIRMAN", image: "/atul.jpg" },
  { name: "N C RUFUS", title: "CEO", image: "/rufus-300x300.jpg" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-[#0072CE] selection:text-white">
      <Navbar />

      <main className="flex-1">

        {/* ═══ PAGE HEADER ═══════════════════════════════════════════════ */}
        <section className="bg-[#003d7a] relative overflow-hidden">
          <div className="h-[3px] w-full bg-[#f5c800]" />
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-12">
            <p className="text-[#f5c800] text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              Kiran Global Chem Limited
            </p>
            <h1 className="text-[2.6rem] font-black text-white leading-tight tracking-tight">
              About Us
            </h1>
          </div>
        </section>

        {/* ═══ ABOUT — IMAGE + TEXT SPLIT ════════════════════════════════ */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image side */}
            <div className="relative w-full h-[480px] overflow-hidden shadow-2xl">
              <Image
                src="/about-us-1.jpg"
                alt="Kiran Global Chem Limited"
                fill
                className="object-cover"
                priority
              />
              {/* Gold accent corners */}
              <div className="absolute top-0 left-0 w-14 h-14 border-t-4 border-l-4 border-[#f5c800]" />
              <div className="absolute bottom-0 right-0 w-14 h-14 border-b-4 border-r-4 border-[#f5c800]" />
            </div>

            {/* Text side */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[#0072CE] text-[11px] font-black uppercase tracking-[0.3em] mb-3">
                  Who We Are
                </p>
                <h2 className="text-3xl font-black text-[#003d7a] leading-snug mb-1">
                  India&apos;s Leading Manufacturer
                </h2>
                <h2 className="text-3xl font-black text-[#003d7a] leading-snug">
                  of Sodium &amp; Potassium Silicate
                </h2>
                <div className="h-[3px] w-12 bg-[#f5c800] mt-4" />
              </div>

              <p className="text-gray-600 text-[15px] leading-[1.9]">
                MS Jain Group started its journey in the chemical manufacturers industry as a small scale
                manufacturing unit with the vision to leave its mark as a visionary innovator. From{" "}
                <span className="font-semibold text-[#003d7a]">1979</span> to this date, the company has
                grown under the able leadership of founder and Chairman{" "}
                <span className="font-semibold text-[#003d7a]">Mr. MS Jain</span> as a leading conglomerate
                with international presence. We have manufacturing units in more than five countries and our
                chemicals import-export business spans the five continents.
              </p>

              <p className="text-gray-600 text-[15px] leading-[1.9]">
                We are renowned for our seamless supply chain and quick and efficient response to customers.
                We are the{" "}
                <span className="font-semibold text-[#003d7a]">largest manufacturers of sodium silicate in India</span>{" "}
                with annual turnover of 3, 00,000 tonnes. Our manufacturing units are largely setup in South
                India with Offices in the North India.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ FULL WIDTH TEXT BLOCK ══════════════════════════════════════ */}
        <section className="bg-[#f4f8ff] py-14">
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <p className="text-gray-600 text-[15px] leading-[1.9]">
                Our product range includes chemical intermediaries that have versatile application across
                several industries including construction, ceramics, textiles, paper, foundries, ceramics,
                and candles among others. We are fully equipped to meet large scale customer demands with
                plants and machineries of latest technologies and highly qualified engineers, trained
                personnel and domain experts.
              </p>
              <p className="text-gray-600 text-[15px] leading-[1.9]">
                The organization operates with over{" "}
                <span className="font-semibold text-[#003d7a]">600 direct employees</span> and{" "}
                <span className="font-semibold text-[#003d7a]">300 indirect employees</span> globally.
                Our state of the art laboratories often work in collaboration with leading research
                institutes to develop innovative solutions. The companies aim is to deliver
                market-driven products that enhance process at minimum environment cost.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ CORE VALUES ════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-16">
          {/* Heading */}
          <div className="mb-10">
            <p className="text-[#0072CE] text-[11px] font-black uppercase tracking-[0.3em] mb-2">
              Our Principles
            </p>
            <h2 className="text-3xl font-black text-[#003d7a]">
              We Followed The <span className="text-[#0072CE]">Core Values</span>
            </h2>
            <div className="h-[3px] w-12 bg-[#f5c800] mt-3" />
          </div>

          {/* Values grid — 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200">
            {coreValues.map((value, i) => (
              <div
                key={value}
                className="group relative p-7 border-r border-b border-slate-200 last:border-r-0 hover:bg-[#003d7a] transition-colors duration-300"
                style={{
                  borderRight: (i + 1) % 4 === 0 ? "none" : undefined,
                  borderBottom: i >= 4 ? "none" : undefined,
                }}
              >
                {/* Number */}
                <p className="text-[11px] font-black text-[#0072CE]/50 group-hover:text-[#f5c800]/70 font-mono mb-3 tracking-widest transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                {/* Gold bar */}
                <div className="h-[2px] w-8 bg-[#f5c800] mb-4" />
                {/* Value text */}
                <p className="text-[13.5px] font-semibold text-[#1e3a5f] group-hover:text-white leading-snug transition-colors duration-300">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ LEADERSHIP TEAM ════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-20 border-t border-slate-100">
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8">

            {/* Heading */}
            <div className="text-center mb-16">
              <p className="text-[#0072CE] text-[11px] font-black uppercase tracking-[0.3em] mb-2">
                Executive Board
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#003d7a]">
                Leadership Team
              </h2>
              <div className="h-[3px] w-16 bg-[#f5c800] mx-auto mt-4" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((person, idx) => (
                <div 
                  key={person.name} 
                  className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-100">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info Block */}
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <span className="text-[10px] font-bold text-[#0072CE] uppercase tracking-[0.2em] mb-1">
                      {person.title}
                    </span>
                    <h3 className="text-lg font-black text-[#003d7a] uppercase tracking-wide">
                      {person.name}
                    </h3>
                    
                    <div className="h-[2px] w-8 bg-[#f5c800] my-4" />

                    {/* Social Row */}
                    <div className="flex items-center gap-2">
                      {[
                        { label: "f", bg: "hover:bg-[#3b5998]" },
                        { label: "t", bg: "hover:bg-[#1da1f2]" },
                        { label: "g+", bg: "hover:bg-[#dd4b39]" },
                        { label: "in", bg: "hover:bg-[#0077b5]" },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href="#"
                          className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white hover:border-transparent ${s.bg} transition-all duration-200`}
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
