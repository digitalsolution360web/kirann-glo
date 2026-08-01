"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Package,
  FlaskConical,
  Layers,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const applications = [
  "As a flux binder in welding electrode",
  "Acid proof lining",
  "Detergents and soaps",
  "Phosphor binder in T.V. tubes",
  "Refractory binders and speciality coating",
  "Welding rods manufacture",
];

const packagingOptions = [
  "265–300 Kg MS Drums",
  "Full Tanker Load",
  "Flexi Bags",
  "IBC Tanks",
  "Bulk Shipping",
];

const salesSpec = [
  { particular: "K66", sg: "1.32 – 1.34", baume: "35 – 37", k2o: "10.5 – 12%", sio2: "23 – 26%", weightRatio: "1:2.1 ± 0.1" },
  { particular: "K76", sg: "1.36 – 1.40", baume: "38 – 42", k2o: "12 – 14%", sio2: "26 – 28.5%", weightRatio: "1:2.1 ± 0.1" },
];

const quickRef = [
  { label: "Form", value: "Liquid" },
  { label: "Formula", value: "K₂O·x SiO₂" },
  { label: "Mol. Weight", value: "215 – 226" },
  { label: "Colour", value: "Light Yellow" },
  { label: "UN No.", value: "3266" },
  { label: "CAS No.", value: "1312-76-1" },
];

const certifications = [
  { label: "UN Number", value: "3266", sub: "", icon: <FileText size={22} className="text-[#0072CE]" /> },
  { label: "CAS Number", value: "1312-76-1", sub: "", icon: <FlaskConical size={22} className="text-[#0072CE]" /> },
  { label: "REACH Pre-Registration", value: "05-2118043714-45-0000", sub: "Issued by ELC Group, Czech Republic", icon: <ShieldCheck size={22} className="text-[#0072CE]" /> },
  { label: "ISO Certification No.", value: "IN-Q08506", sub: "", icon: <ShieldCheck size={22} className="text-[#f5c800]" /> },
];

export default function PotassiumSilicateLiquidPage() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <Layers size={16} /> },
    { id: "specs", label: "Specifications", icon: <FlaskConical size={16} /> },
    { id: "applications", label: "Applications", icon: <CheckCircle2 size={16} /> },
    { id: "packaging", label: "Packaging", icon: <Package size={16} /> },
    { id: "certifications", label: "Certifications", icon: <ShieldCheck size={16} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f9] font-sans text-black selection:bg-[#003d7a] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-[#003d7a] relative overflow-hidden">
          <div className="h-[4px] w-full bg-gradient-to-r from-[#f5c800] via-[#ffe066] to-[#f5c800]" />
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8 py-14 lg:py-18">
            <nav className="flex items-center gap-2 text-sm font-semibold text-blue-200 mb-6 flex-wrap">
              <Link href="/" className="hover:text-[#f5c800] transition-colors">Home</Link>
              <ChevronRight size={14} className="text-blue-300/60" />
              <Link href="/products-page" className="hover:text-[#f5c800] transition-colors">Products</Link>
              <ChevronRight size={14} className="text-blue-300/60" />
              <span className="text-[#f5c800] font-bold">Potassium Silicate Liquid</span>
            </nav>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Potassium Silicate <span className="text-[#f5c800]">Liquid</span>
                </h1>

              </div>

            </div>
          </div>
        </section>

        {/* TAB NAV */}
        <div className="sticky top-0 z-30 bg-white border-b-2 border-slate-200 shadow-md">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
            <div className="flex items-center overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-black uppercase tracking-widest whitespace-nowrap border-b-[3px] transition-all duration-200 ${activeSection === tab.id
                    ? "border-[#0072CE] text-[#0072CE] bg-blue-50"
                    : "border-transparent text-black hover:text-[#0072CE] hover:bg-slate-50"
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-[1700px] mx-auto px-6 sm:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            <div className="lg:col-span-8 space-y-8">

              {/* OVERVIEW */}
              {activeSection === "overview" && (
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-[4px] rounded-full bg-[#0072CE]" />
                      <h2 className="text-2xl font-black text-[#003d7a]">About Our Product</h2>
                    </div>
                    <p className="text-black text-lg leading-relaxed font-semibold">
                      Kiran Global Chems Ltd. is a leading brand name in India in the manufacture and supply of
                      potassium silicate liquid. Our industry-grade potassium silicate liquid is available in a
                      range of ratios and concentrations based on the specific business requirements of our clients.
                    </p>
                    <div className="mt-8">
                      <h3 className="text-lg font-black text-black mb-5 uppercase tracking-wider">
                        Physical &amp; Chemical Properties
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { label: "Chemical Formula", value: "K₂O·x SiO₂" },
                          { label: "Appearance", value: "Liquid" },
                          { label: "Colour", value: "Light Yellow Liquid" },
                          { label: "Molecular Weight", value: "215 – 226" },
                        ].map((prop) => (
                          <div key={prop.label} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">{prop.label}</p>
                            <p className="text-base font-black text-black">{prop.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SPECIFICATIONS */}
              {activeSection === "specs" && (
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-[4px] rounded-full bg-[#0072CE]" />
                    <h2 className="text-2xl font-black text-[#003d7a]">Sales Specification</h2>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#003d7a] text-white">
                          {["Particular", "Specific Gravity", "Baume", "K₂O", "SiO₂", "Weight Ratio"].map((h) => (
                            <th key={h} className="px-5 py-4 text-left text-sm font-black uppercase tracking-wider">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {salesSpec.map((row, idx) => (
                          <tr key={idx} className={`border-t border-slate-200 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-blue-50 transition-colors`}>
                            <td className="px-5 py-4 text-base font-black text-[#0072CE]">{row.particular}</td>
                            <td className="px-5 py-4 text-base font-bold text-black">{row.sg}</td>
                            <td className="px-5 py-4 text-base font-bold text-black">{row.baume}</td>
                            <td className="px-5 py-4 text-base font-bold text-black">{row.k2o}</td>
                            <td className="px-5 py-4 text-base font-bold text-black">{row.sio2}</td>
                            <td className="px-5 py-4 text-base font-bold text-black">{row.weightRatio}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm font-bold text-black">* X = 2.00 – 2.20</p>
                </div>
              )}

              {/* APPLICATIONS */}
              {activeSection === "applications" && (
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-[4px] rounded-full bg-[#0072CE]" />
                    <h2 className="text-2xl font-black text-[#003d7a]">Applications</h2>
                  </div>
                  <p className="text-black font-semibold text-base mb-6">
                    Our product has industry-wide application in the following areas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="h-10 w-10 rounded-full bg-[#0072CE] flex items-center justify-center shrink-0">
                          <span className="text-white text-sm font-black">{String(idx + 1).padStart(2, "0")}</span>
                        </div>
                        <span className="text-base font-bold text-black">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PACKAGING */}
              {activeSection === "packaging" && (
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-[4px] rounded-full bg-[#0072CE]" />
                    <h2 className="text-2xl font-black text-[#003d7a]">Packaging Options</h2>
                  </div>
                  <p className="text-black font-semibold text-base mb-6">
                    We transport the product in the following packaging options:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {packagingOptions.map((pkg, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border-2 border-slate-200 text-center gap-3 hover:border-[#0072CE] hover:bg-blue-50 transition-all duration-200">
                        <Package size={32} className="text-[#0072CE]" />
                        <span className="text-base font-black text-black">{pkg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CERTIFICATIONS */}
              {activeSection === "certifications" && (
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-[4px] rounded-full bg-[#0072CE]" />
                    <h2 className="text-2xl font-black text-[#003d7a]">Certifications &amp; Regulatory Information</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="shrink-0 mt-0.5">{cert.icon}</div>
                        <div>
                          <p className="text-sm font-black uppercase tracking-wider text-slate-600 mb-1">{cert.label}</p>
                          <p className="text-lg font-black text-black font-mono">{cert.value}</p>
                          {cert.sub && <p className="text-sm text-black font-semibold mt-1">{cert.sub}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src="/premium-potassium-silicate-liquid.webp" alt="Potassium Silicate Liquid" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003d7a]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-[#0072CE] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full">Potassium Silicate Liquid</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-base font-black text-black uppercase tracking-wider mb-5 pb-3 border-b-2 border-[#0072CE]">Quick Reference</h3>
                <div className="space-y-0">
                  {quickRef.map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
                      <span className="text-sm font-bold text-black uppercase tracking-wide">{item.label}</span>
                      <span className="text-sm font-black text-[#003d7a]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#003d7a] to-[#0072CE] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-black mb-2">Get a Quote</h3>
                <p className="text-blue-100 text-sm font-semibold mb-5 leading-relaxed">Contact our team for pricing, availability, and custom formulations.</p>
                <a href="#contact" className="block w-full text-center bg-[#f5c800] text-[#003d7a] font-black text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl hover:bg-[#ffe066] transition-colors duration-200">Enquire Now</a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-base font-black text-black uppercase tracking-wider mb-4 pb-3 border-b-2 border-[#f5c800]">Related Products</h3>
                <div className="space-y-2">
                  {[
                    { label: "Sodium Silicate Lumps", href: "/products/sodium-silicate-lumps" },
                    { label: "Sodium Silicate Liquid", href: "/products/sodium-silicate-liquid" },
                    { label: "Potassium Silicate Lumps", href: "/products/potassium-silicate-lumps" },
                  ].map((p) => (
                    <Link key={p.label} href={p.href} className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-slate-50 hover:bg-[#0072CE] border border-slate-200 hover:border-[#0072CE] transition-all duration-200 group">
                      <span className="text-sm font-bold text-black group-hover:text-white">{p.label}</span>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
