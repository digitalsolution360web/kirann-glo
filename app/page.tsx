"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import GlobalPartnersSection from "./components/GlobalPartnersSection";
import IndustriesSection from "./components/IndustriesSection";
import SustainabilitySection from "./components/SustainabilitySection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import KGCLNewsSection from "./components/KGCLNewsSection";
import LocationsGlobe from "./components/LocationsGlobe";
import GlobalNetworkSection from "./components/GlobalNetworkSection";
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

        {/* Global Partners Logo Marquee */}
        <GlobalPartnersSection />

        {/* Industries Section */}
        <IndustriesSection />

        {/* Who We Are / Why Choose Us / Working Area Tabs */}
        <WhoWeAreSection />

        {/* Sustainability Section */}
        <SustainabilitySection />
        <GlobalNetworkSection />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* KGCL News + Industries Overview */}
        <KGCLNewsSection />



        {/* Infrastructure Section */}
        {/* <InfrastructureSection /> */}

        {/* Locations Globe Section */}
        <LocationsGlobe />

        {/* Global Network Section */}

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
