"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  Cpu,
  Users,
  Star,
  Clock,
  Zap,
  Shield,
  Heart,
  TrendingUp,
  RefreshCw,
  ArrowRight,
  LineChart,
  FlaskConical,
  Globe,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

type Tab = "who" | "why" | "working";

const STATS = [
  { target: 1979, suffix: "", label: "Since", icon: LineChart },
  { target: 32, suffix: "", label: "Plants across India", icon: FlaskConical },
  { target: 7, suffix: "", label: "Plants across Overseas", icon: Globe },
  { target: 1000, suffix: "+", label: "Employees", icon: Users },
];

const WHO_WE_ARE_PILLS = [
  { label: "Leadership with Integrity", icon: Award },
  { label: "Innovative Engineering", icon: Cpu },
  { label: "Focus On Our Clients", icon: Users },
  { label: "High Quality Professionals", icon: Star },
];

const WHY_CHOOSE_FEATURES = [
  {
    icon: Clock,
    title: "Over 35 years of experience",
    desc: "With more than three and a half decades in the industry, Kiran Global brings unmatched expertise and deep domain knowledge to every project, ensuring reliable and proven solutions.",
  },
  {
    icon: Zap,
    title: "End to End Solution",
    desc: "From raw material sourcing to final delivery, we manage every step of the value chain — providing our clients with seamless, fully integrated chemical solutions.",
  },
  {
    icon: Shield,
    title: "Safety and Good Compliance",
    desc: "We strictly adhere to international safety and quality standards. Our manufacturing processes are certified and audited regularly to ensure full regulatory compliance.",
  },
  {
    icon: Heart,
    title: "Honest and Dependable",
    desc: "Built on trust, our business relationships are defined by transparency, ethical practices, and consistent delivery — values that have earned us long-term client partnerships.",
  },
  {
    icon: TrendingUp,
    title: "Profitable Growth",
    desc: "We help our clients achieve sustainable profitability by providing cost-effective chemical solutions that optimize production efficiency and minimize operational waste.",
  },
  {
    icon: RefreshCw,
    title: "Improving Always",
    desc: "Continuous improvement is at our core. We invest in R&D, upgrade our technology, and evolve our processes to stay ahead of industry trends and deliver next-generation solutions.",
  },
];

const WORKING_AREA_PRODUCTS = [
  {
    id: "ssl",
    title: "Sodium Silicate Lumps",
    image: "/sodium-silicate-lumps.webp",
    desc: "At Kiran Global Chems Ltd. we produce sodium silicate lumps that are manufactured using top grade raw materials and have superior properties, both physical and chemical.",
  },
  {
    id: "ssl2",
    title: "Sodium Silicate Liquid",
    image: "/sodium-silicate-liquid.webp",
    desc: "At Kiran Global Chem Ltd. we offer sodium silicate in liquid form for specific industrial application where the liquid property of the chemical is highly effective.",
  },
  {
    id: "psl",
    title: "Potassium Silicate Lumps",
    image: "/potassium-silicate-lumps.webp",
    desc: "At Kiran Global Chem Ltd. we manufacture potassium silicate lumps of the highest quality. Our product is recognized industry-wide for its high performance and seamless integration.",
  },
  {
    id: "psl2",
    title: "Potassium Silicate Liquid",
    image: "/premium-potassium-silicate-liquid.webp",
    desc: "Kiran Global Chems Ltd. is a leading brand name in India in the manufacture and supply of potassium silicate liquid.",
  },
];

function StatsSidebar() {
  return (
    <div className="w-full lg:w-[260px] xl:w-[280px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl">
      {STATS.map((stat, idx) => {
        const IconComp = stat.icon;
        return (
          <div
            key={idx}
            className={`flex items-center gap-4 p-5 xl:p-6 border-b border-white/10 last:border-b-0 ${
              idx % 2 === 0 ? "bg-[#0072CE]" : "bg-[#005fad]"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <IconComp size={20} className="text-white" />
            </div>
            <div>
              <div className="text-2xl xl:text-3xl font-black text-white leading-none">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={stat.target > 100 ? 2500 : 1800}
                />
              </div>
              <div className="text-[11px] font-semibold text-blue-100 mt-0.5 leading-tight">
                {stat.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WhoWeAreSection() {
  const [activeTab, setActiveTab] = useState<Tab>("who");

  const tabs: { key: Tab; label: string }[] = [
    { key: "who", label: "Who We Are" },
    { key: "why", label: "Why Choose Us" },
    { key: "working", label: "Working Area" },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Soft background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0072CE]/5 blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#f5c800]/8 blur-[80px] pointer-events-none translate-x-1/3 translate-y-1/3" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,114,206,0.04) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-8">
        {/* Section Label */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0072CE] uppercase">
              Discover Kiran Global
            </span>
            <span className="h-[3px] w-8 bg-[#f5c800] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#003d7a] tracking-tight">
            About Our <span className="text-[#0072CE]">Company</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl border border-slate-200 bg-[#f8fafc] p-1 shadow-sm gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 sm:px-8 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-[#0072CE] text-white shadow-lg shadow-blue-500/30"
                    : "text-[#003d7a] hover:bg-[#e8f4ff] hover:text-[#0072CE]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ───── TAB CONTENT ───── */}
          <div className="flex-1 min-h-[360px]">

            {/* WHO WE ARE — only 4 pill boxes, no extra text */}
            {activeTab === "who" && (
              <div className="h-full flex items-center py-8">
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5">
                  {WHO_WE_ARE_PILLS.map((pill, idx) => {
                    const IconComp = pill.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex flex-col items-center text-center gap-4 p-6 sm:p-8 rounded-2xl border border-[#0072CE]/15 bg-[#f0f7ff] hover:bg-[#0072CE] hover:border-[#0072CE] hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2 transition-all duration-400 cursor-default"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#0072CE]/12 group-hover:bg-white/20 flex items-center justify-center transition-all duration-400 group-hover:scale-110">
                          <IconComp
                            size={26}
                            className="text-[#0072CE] group-hover:text-white transition-colors duration-300"
                          />
                        </div>
                        <span className="text-sm sm:text-[15px] font-bold text-[#003d7a] group-hover:text-white leading-snug transition-colors duration-300">
                          {pill.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* WHY CHOOSE US */}
            {activeTab === "why" && (
              <div>
                <div className="mb-7">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#003d7a] mb-2">
                    Why Choose <span className="text-[#0072CE]">Us</span>
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl">
                    We deliver more than just products — we deliver trust, expertise, and value at every stage of your supply chain.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {WHY_CHOOSE_FEATURES.map((feature, idx) => {
                    const IconComp = feature.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex gap-4 p-5 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-[#0072CE]/30 hover:bg-[#f0f7ff] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#0072CE]/10 group-hover:bg-[#0072CE] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                          <IconComp
                            size={18}
                            className="text-[#0072CE] group-hover:text-white transition-colors duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#003d7a] text-sm sm:text-base mb-1.5 leading-tight">
                            {feature.title}
                          </h4>
                          <p className="text-slate-500 text-xs sm:text-[13px] leading-[1.75]">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* WORKING AREA */}
            {activeTab === "working" && (
              <div>
                <div className="mb-7">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#003d7a] mb-2">
                    Our <span className="text-[#0072CE]">Working Area</span>
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Explore our core product range — each developed with precision manufacturing and the highest quality raw materials.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {WORKING_AREA_PRODUCTS.map((product) => (
                    <div
                      key={product.id}
                      className="group flex gap-4 p-4 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-[#0072CE]/30 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-white ring-1 ring-slate-200 group-hover:ring-[#0072CE]/30 transition-all duration-300">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <h4 className="font-bold text-[#003d7a] text-sm sm:text-base leading-tight mb-2 group-hover:text-[#0072CE] transition-colors duration-300">
                            {product.title}
                          </h4>
                          <p className="text-slate-500 text-xs sm:text-[13px] leading-[1.7] line-clamp-3">
                            {product.desc}
                          </p>
                        </div>
                        <button className="mt-3 flex items-center gap-1.5 text-[#0072CE] text-xs font-bold cursor-pointer hover:gap-3 transition-all duration-200">
                          Learn More
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ───── STATS SIDEBAR ───── */}
          <StatsSidebar />
        </div>
      </div>
    </section>
  );
}
