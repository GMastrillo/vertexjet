"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { PerformanceBento } from "@/components/sections/performance-bento";
import { Showroom } from "@/components/sections/showroom";
import { CockpitTelemetry } from "@/components/sections/cockpit-telemetry";
import { CtaVip } from "@/components/sections/cta-vip";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>("PHANTOM V900");

  const handleVideoEnd = () => {
    setIsRevealed(true);
  };

  const scrollToSection = (id: string) => {
    setIsRevealed(true);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectModel = (modelName: string) => {
    setSelectedModel(modelName);
    scrollToSection("reserva");
  };

  return (
    <main className="min-h-screen bg-white text-[#0a0a0a] selection:bg-[#c43818]/15">
      {/* Dynamic Revealing Floating Navbar (White Luxury) */}
      <Navbar
        isRevealed={isRevealed}
        onBookingClick={() => scrollToSection("reserva")}
      />

      {/* Hero Cinematic Section with jetski1.mp4 */}
      <HeroCinematic
        onVideoEnd={handleVideoEnd}
        onExplore={() => scrollToSection("showroom")}
        onBooking={() => scrollToSection("reserva")}
      />

      {/* Bento Grid Performance & Engineering (Clean White Architecture) */}
      <PerformanceBento />

      {/* Nautical Fleet Showroom (Avantgarde Catalog Style) */}
      <Showroom onSelectModel={handleSelectModel} />

      {/* Digital Cockpit & Dynamic Marine Telemetry */}
      <CockpitTelemetry />

      {/* Exclusive VIP Test Ride Booking CTA */}
      <CtaVip selectedModel={selectedModel} />

      {/* Nautical High-Precision Footer */}
      <Footer />
    </main>
  );
}
