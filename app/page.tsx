"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import IndustriesSection from "./components/IndustriesSection";
import SustainabilitySection from "./components/SustainabilitySection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ProductsSection from "./components/ProductsSection";
import InfrastructureSection from "./components/InfrastructureSection";
import LocationsGlobe from "./components/LocationsGlobe";
import GlobalNetworkSection from "./components/GlobalNetworkSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#e8f4ff] font-sans selection:bg-[#0072CE] selection:text-white">
      {/* Navbar (including Top Utility Bar) */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Slider */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Industries Section */}
        <IndustriesSection />

        {/* Sustainability Section */}
        <SustainabilitySection />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Products Section */}
        <ProductsSection />

        {/* Infrastructure Section */}
        <InfrastructureSection />

        {/* Locations Globe Section */}
        <LocationsGlobe />

        {/* Global Network Section */}
        <GlobalNetworkSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
