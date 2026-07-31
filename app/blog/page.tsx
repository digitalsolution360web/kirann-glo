"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const posts = [
  {
    id: "01",
    date: "Feb 09, 2017",
    author: "admin",
    title: "Global Sodium Silicate Industry 2016 Market Research Report",
    image: "/working-area-4-pic-2.jpg",
    excerpt:
      "Summary: The Global Sodium Silicate Industry 2016 Market Research Report is a professional and in-depth study on the current state of the Sodium Silicate Industry. Firstly, the report provides a basic overview of the industry including",
  },
  {
    id: "02",
    date: "Nov 19, 2016",
    author: "admin",
    title: "Sodium Silicate Market for Detergents Industry from 2015 to 2023",
    image: "/banner-tes-9-1140x580.jpg",
    excerpt:
      "Sodium Silicate Market for Detergents, Catalysts, Pulp & Paper, Elastomers, Food & Healthcare and Other Applications – Global Industry Analysis, Size, Share, Growth, Trends and Forecast 2015 – 2023 This report gives a",
  },
  {
    id: "03",
    date: "May 11, 2016",
    author: "admin",
    title: "Ultimate Green Geopolymer Concrete – Geocement",
    image: "/greenconcrete.jpg",
    excerpt:
      "ABOUT GEOCEMENT Geocement is a promise to reduce global warming by reducing carbon dioxide emission using a proprietory liquid Geobinder with various industrial bye products viz. Flyash, Blast furnace slag etc. Geopowder, thus making it an",
  },
  {
    id: "04",
    date: "Aug 11, 2015",
    author: "admin",
    title: "Global Services",
    image: "/Industrial-pic-2-1-770x580.jpg",
    excerpt:
      "MS Jain Group started its journey in the chemical manufacturers industry as a small scale manufacturing unit with the vision to leave its mark as a visionary innovator. From 1979 to this date, the company has grown under the able leadership of",
  },
];

const latestPosts = [
  { date: "Thursday, Feb 09, 2017", title: "Global Sodium Silicate Indu... Report" },
  { date: "Saturday, Nov 19, 2016", title: "Sodium Silicate Market for 2015 to 2023" },
  { date: "Wednesday, May 11, 2016", title: "Ultimate Green Geopolymer..." },
  { date: "Tuesday, Aug 11, 2015", title: "Global Services" },
];

const tagCloud = ["Events", "Geocement", "Green Concrete"];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />

      <main className="flex-grow">

        {/* ─── PAGE HEADER ─────────────────────────────────────── */}
        <section className="bg-[#003d7a]">
          <div className="h-[3px] w-full bg-[#f5c800]" />
          <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-12">
            <p className="text-[#f5c800] text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              Kiran Global Chem Limited
            </p>
            <h1 className="text-[2.6rem] font-black text-white leading-tight tracking-tight">
              Blog
            </h1>
          </div>
        </section>

        {/* ─── CONTENT + SIDEBAR ───────────────────────────────── */}
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

            {/* ── BLOG POSTS — 2 per row ─────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 content-start">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* ── IMAGE — full width, fixed height, no clipping ── */}
                  <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 45vw, 30vw"
                    />
                  </div>

                  {/* ── CONTENT ────────────────────────────────────── */}
                  <div className="flex flex-col flex-grow px-5 py-5">

                    {/* Meta row */}
                    <p className="text-xs text-gray-500 mb-3">
                      By {post.author} &nbsp;/&nbsp; {post.date} &nbsp;/&nbsp; Leave a comment
                    </p>

                    {/* Title */}
                    <h2 className="text-[15px] font-bold text-black leading-snug mb-3 group-hover:text-[#0072CE] transition-colors duration-200">
                      {post.title}
                    </h2>

                    {/* Gold rule */}
                    <div className="h-[2px] w-8 bg-[#f5c800] mb-3" />

                    {/* Excerpt — black text */}
                    <p className="text-[13.5px] text-black leading-[1.8] flex-grow mb-5">
                      {post.excerpt}
                    </p>

                    {/* Continue Reading */}
                    <a
                      href="#"
                      className="self-start inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white bg-[#0072CE] hover:bg-[#003d7a] px-4 py-2 transition-colors duration-200"
                    >
                      Continue Reading
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ── SIDEBAR ─────────────────────────────────────── */}
            <aside className="flex flex-col gap-6">

              {/* Latest Posts */}
              <div className="border border-gray-200">
                <div className="bg-[#003d7a] px-4 py-3">
                  <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">
                    Latest Posts
                  </h3>
                </div>
                <ul className="divide-y divide-gray-100">
                  {latestPosts.map((p, i) => (
                    <li key={i} className="group px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-150">
                      <p className="text-[10px] text-gray-400 mb-0.5">{p.date}</p>
                      <p className="text-[12.5px] font-semibold text-black group-hover:text-[#0072CE] transition-colors duration-150 leading-snug">
                        {p.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tag Cloud */}
              <div className="border border-gray-200">
                <div className="bg-[#003d7a] px-4 py-3">
                  <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">
                    Tag Cloud
                  </h3>
                </div>
                <div className="px-4 py-4 flex flex-wrap gap-2">
                  {tagCloud.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="text-[11px] font-semibold text-black bg-gray-100 hover:bg-[#0072CE] hover:text-white px-3 py-1.5 transition-all duration-200"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
