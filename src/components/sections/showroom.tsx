"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Check, ArrowRight, ShieldCheck } from "lucide-react";

interface ShowroomProps {
  onSelectModel: (modelName: string) => void;
}

const MODELS = [
  {
    id: "phantom-v900",
    name: "PHANTOM V900",
    tag: "STEALTH EDITION",
    tagline: "Velocidade Pura e Interceptação Costeira",
    description: "Desenvolvido com monocoque ultra-leve em fibra de carbono T1000 e acabamento stealth fosco. Projetado para alcançar velocidades extremas com estabilidade inabalável em águas agitadas.",
    image: "/images/phantom-v900.jpg",
    specs: [
      { label: "Potência", value: "380 HP" },
      { label: "Velocidade Máxima", value: "138 km/h" },
      { label: "Aceleração (0-100)", value: "2.4 s" },
      { label: "Peso Seco", value: "310 kg" },
      { label: "Capacidade", value: "2 Pessoas" },
      { label: "Autonomia", value: "160 Milhas" },
    ],
    highlights: [
      "Casco integral em fibra de carbono T1000",
      "Turbina de fluxo axial de duplo estágio em titânio",
      "Painel digital marinizado com telemetria GPS",
      "Assento anti-derrapante com absorção de impacto",
    ],
  },
  {
    id: "aerodyne-gt",
    name: "AERODYNE GT",
    tag: "GRAND TOURING",
    tagline: "Cruzeiro Oceânico de Longo Alcance",
    description: "Projetado para navegação prolongada e travessias offshore. Combina hidrodinâmica suave para corte de ondas com assentos ergonômicos em couro náutico e compartimento estanque de grande capacidade.",
    image: "/images/aerodyne-gt.jpg",
    specs: [
      { label: "Potência", value: "320 HP" },
      { label: "Velocidade Máxima", value: "122 km/h" },
      { label: "Aceleração (0-100)", value: "2.8 s" },
      { label: "Peso Seco", value: "345 kg" },
      { label: "Capacidade", value: "3 Pessoas" },
      { label: "Autonomia", value: "240 Milhas" },
    ],
    highlights: [
      "Casco em V profundo com aletas estabilizadoras",
      "Tanque expandido de 90 litros para cruzeiro longo",
      "Sistema de som náutico de alta fidelidade marinizada",
      "Acabamento em titânio escovado e ciano oceânico",
    ],
  },
  {
    id: "corsair-rspec",
    name: "CORSAIR R-SPEC",
    tag: "COMPETITION RACING",
    tagline: "Manobrabilidade Radical e Controle Cirúrgico",
    description: "Nascido dos circuitos mundiais de jet ski endurance. Apresenta guidão esportivo ajustável em titânio, flaps estabilizadores ativos em carbono forjado e resposta imediata do acelerador eletrônico.",
    image: "/images/corsair-rspec.jpg",
    specs: [
      { label: "Potência", value: "350 HP" },
      { label: "Velocidade Máxima", value: "134 km/h" },
      { label: "Aceleração (0-100)", value: "2.5 s" },
      { label: "Peso Seco", value: "295 kg" },
      { label: "Capacidade", value: "1 Piloto" },
      { label: "Autonomia", value: "140 Milhas" },
    ],
    highlights: [
      "Estrutura aliviada em carbono forjado",
      "Bocal de empuxo variável com acionamento milimétrico",
      "Launch control náutico para largadas instantâneas",
      "Casco estreito de alta agilidade para curvas em alta força G",
    ],
  },
];

export function Showroom({ onSelectModel }: ShowroomProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentModel = MODELS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MODELS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MODELS.length) % MODELS.length);
  };

  return (
    <section id="showroom" className="relative py-32 px-6 bg-white border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Navigation Controls (Avantgarde style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f8f9fa] border border-black/10 shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#c43818]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-mono font-medium">
                CATÁLOGO EXCLUSIVO VERTEX 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0a0a] uppercase font-display leading-[1.05]">
              A COLEÇÃO <br />
              <span className="text-neutral-400">DE HIPERLUXO</span>
            </h2>
          </div>

          {/* Model Selector Tabs & Arrows */}
          <div className="flex items-center gap-4">
            <div className="flex bg-[#f8f9fa] p-1.5 border border-black/10">
              {MODELS.map((model, idx) => (
                <button
                  key={model.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-mono transition-all cursor-pointer ${
                    currentIndex === idx
                      ? "bg-[#0a0a0a] text-white font-semibold shadow-xs"
                      : "text-neutral-600 hover:text-black"
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 bg-[#f8f9fa] text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer border border-black/10"
                aria-label="Modelo anterior"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-[#f8f9fa] text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer border border-black/10"
                aria-label="Próximo modelo"
              >
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Model Spotlight Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModel.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Visual Photography Card (7 Cols) */}
            <div className="lg:col-span-7 luxury-card-white p-4 relative overflow-hidden flex flex-col justify-between group">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={currentModel.image}
                  alt={currentModel.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-md border border-black/10 shadow-xs">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#0a0a0a] font-mono font-bold">
                    {currentModel.tag}
                  </span>
                </div>

                {/* Pagination indicator */}
                <div className="absolute bottom-6 left-6 z-10 font-mono text-xs text-white tracking-[0.3em] font-medium">
                  <span className="font-bold">{String(currentIndex + 1).padStart(2, "0")}</span> / {String(MODELS.length).padStart(2, "0")}
                </div>
              </div>

              {/* Bottom Quick Spec Strip */}
              <div className="grid grid-cols-3 gap-4 p-6 border-t border-black/5 mt-4 bg-[#f8f9fa]">
                {currentModel.specs.slice(0, 3).map((spec) => (
                  <div key={spec.label}>
                    <div className="text-xl sm:text-2xl font-bold text-[#0a0a0a] font-display">
                      {spec.value}
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mt-0.5">
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Model Details & Action Sheet (5 Cols) */}
            <div className="lg:col-span-5 luxury-card-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#c43818]" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#c43818] font-mono font-bold">
                    HOMOLOGAÇÃO NAVAL INTERNACIONAL
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold uppercase text-[#0a0a0a] font-display tracking-tight mb-2">
                  {currentModel.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono mb-6">
                  {currentModel.tagline}
                </p>

                <p className="text-sm text-neutral-600 font-mono leading-relaxed mb-8 border-b border-black/5 pb-6">
                  {currentModel.description}
                </p>

                {/* Technical Highlights List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-mono block mb-3 font-semibold">
                    ESPECIFICAÇÕES DE ENGENHARIA
                  </span>
                  {currentModel.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-none border border-[#c43818]/40 flex items-center justify-center shrink-0 mt-0.5 bg-[#c43818]/10">
                        <Check className="w-2.5 h-2.5 text-[#c43818]" strokeWidth={2} />
                      </div>
                      <span className="text-xs font-mono text-neutral-700 tracking-[0.05em]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button (Avantgarde high-contrast style) */}
              <div className="pt-6 border-t border-black/5">
                <button
                  onClick={() => onSelectModel(currentModel.name)}
                  className="w-full py-4 bg-[#0a0a0a] text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#c43818] transition-all cursor-pointer font-display flex items-center justify-center gap-3 shadow-md active:scale-98"
                >
                  <span>Solicitar Test Ride Deste Modelo</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
