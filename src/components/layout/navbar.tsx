"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Anchor, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  isRevealed: boolean;
  onBookingClick: () => void;
}

export function Navbar({ isRevealed, onBookingClick }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Frota", href: "#showroom" },
    { label: "Engenharia", href: "#performance" },
    { label: "Telemetria", href: "#telemetria" },
    { label: "Experiência", href: "#reserva" },
  ];

  return (
    <AnimatePresence>
      {isRevealed && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            hasScrolled
              ? "luxury-nav-white py-4 shadow-sm"
              : "bg-white/70 backdrop-blur-md border-b border-black/5 py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Brand Emblem (Avantgarde style) */}
            <a
              href="#"
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Vertex Jet Página Inicial"
            >
              <div className="w-8 h-8 rounded-none border border-black/15 flex items-center justify-center bg-black/5 transition-colors group-hover:border-[#c43818]">
                <Anchor className="w-4 h-4 text-black group-hover:text-[#c43818] transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-bold text-lg tracking-[0.25em] text-[#0a0a0a] uppercase">
                  VERTEX
                </span>
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#c43818] uppercase">
                  JET
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-black transition-colors font-mono py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#c43818] hover:after:w-full after:transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Action Button (Avantgarde angular style) */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={onBookingClick}
                className="px-5 py-2.5 bg-black text-white text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[#c43818] transition-all cursor-pointer font-mono flex items-center gap-2 shadow-xs active:scale-98"
              >
                <span>Concierge VIP</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-800 hover:text-black luxury-pill-white"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t border-black/5 px-6 py-6 shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs uppercase tracking-[0.25em] text-neutral-800 hover:text-[#c43818] py-2 font-mono border-b border-black/5"
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onBookingClick();
                    }}
                    className="w-full mt-2 py-3 bg-black text-white text-xs uppercase tracking-[0.25em] font-semibold text-center font-mono"
                  >
                    Agendar Test Ride
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
