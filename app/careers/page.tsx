"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Users,
  Shield,
  Handshake,
  DollarSign,
  ClipboardCheck,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

const RESPONSIBILITIES = [
  { icon: Users, label: "Recruitment" },
  { icon: Shield, label: "Safety" },
  { icon: Handshake, label: "Employee Relations" },
  { icon: DollarSign, label: "Compensation and Benefits" },
  { icon: ClipboardCheck, label: "Compliance" },
  { icon: GraduationCap, label: "Training and Development" },
];

export default function CareersPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f8fafc] font-sans selection:bg-[#0072CE] selection:text-white">
      <Navbar />

      {/* ── BREADCRUMB ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-8 py-3 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" className="hover:text-[#0072CE] transition-colors font-medium">Home</a>
          <ChevronRight size={12} />
          <span className="text-[#003d7a] font-semibold">Careers</span>
        </div>
      </div>

      <main className="flex-1">
        {/* ── PAGE TITLE WITH PROFESSIONAL GRADIENT ────────────────────── */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#003d7a] to-[#0072CE] text-white">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Careers
            </h1>
          </div>
        </section>

        {/* ── WHY WORK WITH US ─────────────────────────────────────────── */}
        <section className="py-14 sm:py-18 bg-[#f8fafc]">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#000000] tracking-tight mb-10">
              Why Work With Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overview */}
              <div className="bg-white border border-slate-300 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#003d7a] mb-4">Overview</h3>
                <p className="text-[#000000] text-[15px] sm:text-[16px] font-semibold leading-relaxed">
                  We are a people oriented organisation and foster a work environment
                  which thrives on honesty, transparency, and continuous improvement.
                  We encourage creativity, openness and innovation.
                </p>
              </div>

              {/* Life & Culture */}
              <div className="bg-white border border-slate-300 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#003d7a] mb-4">Life &amp; Culture</h3>
                <p className="text-[#000000] text-[15px] sm:text-[16px] font-semibold leading-relaxed">
                  Our ability to grow and to exceed customer expectations depends on
                  our people. We look for highly-talented and motivated individuals
                  and strive to attract, develop and retain them.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-white border border-slate-300 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#003d7a] mb-4">Benefits</h3>
                <p className="text-[#000000] text-[15px] sm:text-[16px] font-semibold leading-relaxed">
                  We offer a rich package of solutions, benefits, and flexible work
                  options to meet your needs at whatever life-stage you are in.
                </p>
              </div>

              {/* How To Apply */}
              <div className="bg-white border border-slate-300 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#003d7a] mb-4">How To Apply</h3>
                <p className="text-[#000000] text-[15px] sm:text-[16px] font-semibold leading-relaxed">
                  Send your cv, relevant work experience and anything else that will
                  make you stand out to{" "}
                  <a
                    href="mailto:hr@kiranglobal.com"
                    className="text-[#0072CE] font-bold hover:underline"
                  >
                    hr@kiranglobal.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT KGCL ──────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18 bg-white border-t border-slate-200">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#000000] tracking-tight mb-6">
              About KGCL
            </h2>
            <p className="text-[#000000] text-[16px] sm:text-[17px] font-semibold leading-relaxed max-w-5xl">
              MS Jain Group started its journey in the chemical manufacturers
              industry as a small scale manufacturing unit with the vision to
              leave its mark as a visionary innovator. From 1979 to this date,
              the company has grown under the able leadership of founder and
              Chariman Mr. MS Jain as a leading conglomerate with international
              presence. We have manufacturing units in more than five countries
              and our chemicals import- export business spans the five continents.
            </p>

            <div className="mt-8 border-l-4 border-[#0072CE] pl-5 py-2">
              <p className="text-[#000000] font-black text-[16px] sm:text-[17px]">
                When it comes to our values, you&apos;re at the top of the list.
              </p>
            </div>
          </div>
        </section>

        {/* ── PRIMARY RESPONSIBILITIES ─────────────────────────────────── */}
        <section className="py-14 sm:py-18 bg-[#f8fafc] border-t border-slate-200">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#000000] tracking-tight mb-8">
              Primary Responsibilities
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {RESPONSIBILITIES.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white border border-slate-300 rounded-xl p-5 text-center hover:border-[#0072CE]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#0072CE]/8 flex items-center justify-center mx-auto mb-3">
                      <IconComp size={20} className="text-[#0072CE]" />
                    </div>
                    <p className="text-xs font-black text-[#000000] leading-tight">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CONTACT INFO ────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18 bg-white border-t border-slate-200">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#000000] tracking-tight mb-8">
              Contact Info
            </h2>

            {/* CIN & GSTIN */}
            <p className="text-[#000000] text-sm sm:text-base font-black mb-8 leading-relaxed">
              CORPORATE IDENTITY NO. (CIN): U24299PY2002PLC000618 &nbsp;&nbsp;|&nbsp;&nbsp; GSTIN: 33AABCK4882E8ZH
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Head Office */}
              <div className="bg-[#f8fafc] border border-slate-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={18} className="text-[#0072CE]" />
                  <h3 className="text-[15px] font-black text-[#000000]">Head Office</h3>
                </div>
                <p className="text-[#000000] text-[15px] font-semibold leading-relaxed">
                  No.104, Phlox Apartments, 1st Floor, F-2, Q-Block, 3rd Avenue,
                  AnnaNagar, Chennai-600040, Tamilnadu, India.
                </p>
              </div>

              {/* Email */}
              <div className="bg-[#f8fafc] border border-slate-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={18} className="text-[#0072CE]" />
                  <h3 className="text-[15px] font-black text-[#000000]">Email</h3>
                </div>
                <a
                  href="mailto:info@kiranglobal.com"
                  className="text-[#000000] text-[15px] font-bold hover:text-[#0072CE] transition-colors hover:underline"
                >
                  info@kiranglobal.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-[#f8fafc] border border-slate-300 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={18} className="text-[#0072CE]" />
                  <h3 className="text-[15px] font-black text-[#000000]">Phone No</h3>
                </div>
                <a
                  href="tel:+917358600595"
                  className="text-[#000000] text-[15px] font-bold hover:text-[#0072CE] transition-colors hover:underline"
                >
                  +91 73586 00595
                </a>
              </div>
            </div>

            {/* Company Quick Info label */}
            <h3 className="text-xl font-black text-[#000000] mt-10 mb-2">Company Quick Info</h3>
            <div className="h-[3px] w-14 bg-[#0072CE] rounded-full" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
