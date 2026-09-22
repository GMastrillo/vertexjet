"use client";

import { useState } from "react";
import { Navigation, Compass, Radio, Wind } from "lucide-react";

type DriveMode = "sport" | "offshore" | "stealth";

const DRIVE_MODES = {
  sport: {
    name: "SPORT+",
    label: "Aceleração Máxima & Empuxo Reativo",
    speedKnots: "74.5",
    speedKmh: "138",
    rpm: "8.850",
    boost: "1.45 BAR",
    trim: "+4.2°",
    gForce: "1.85 G",
    acoustic: "Válvulas de Escape 100% Abertas",
    description: "Mapeamento sem restrições. Válvulas de escape marítimo abertas, trim agressivo para elevação imediata de proa e resposta instantânea do hidrojato.",
  },
  offshore: {
    name: "OFFSHORE",
    label: "Corte de Ondas & Travessia Oceânica",
    speedKnots: "54.0",
    speedKmh: "100",
    rpm: "6.400",
    boost: "0.95 BAR",
    trim: "+1.8°",
    gForce: "1.10 G",
    acoustic: "Atenuação Hidroacústica Ajustada",
    description: "Calibração para mar aberto e ondas de grande período. O casco ajusta a inclinação para cortar a crista da água, suavizando o impacto e garantindo conforto absoluto.",
  },
  stealth: {
    name: "STEALTH",
    label: "Aproximação Silenciosa & Manobra em Marina",
    speedKnots: "12.0",
    speedKmh: "22",
    rpm: "2.200",
    boost: "0.10 BAR",
    trim: "0.0°",
    gForce: "0.20 G",
    acoustic: "Escape Silencioso Submarino",
    description: "Modo de ultra-baixa emissão sonora com desvio do fluxo de escape para debaixo d'água. Ideal para manobras de atracação junto a mega iates e marinas de luxo.",
  },
};

export function CockpitTelemetry() {
  const [selectedMode, setSelectedMode] = useState<DriveMode>("sport");
  const modeData = DRIVE_MODES[selectedMode];

  return (
    <section id="telemetria" className="relative py-32 px-6 bg-[#f8f9fa] overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-black/10 shadow-xs mb-4">
            <Radio className="w-3.5 h-3.5 text-[#c43818]" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-mono font-medium">
              TELEMETRIA MARINHA DE ALTA PRECISÃO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0a0a] uppercase font-display leading-[1.05]">
            COCKPIT DIGITAL & <br />
            <span className="text-neutral-400">DINÂMICA DE PILOTAGEM</span>
          </h2>
        </div>

        {/* Cockpit HUD Panel (White Luxury Edition) */}
        <div className="luxury-card-white p-6 sm:p-12 relative overflow-hidden">
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/5 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#c43818] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#c43818] animate-ping" />
                <span>LINK SATELITAL ATIVO</span>
              </div>
              <span className="text-neutral-300 font-mono">|</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                SENSOR GNSS DUPLO: 10 HZ
              </span>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="flex items-center gap-1.5 bg-[#f8f9fa] p-1.5 border border-black/10">
              {(["sport", "offshore", "stealth"] as DriveMode[]).map((modeKey) => (
                <button
                  key={modeKey}
                  onClick={() => setSelectedMode(modeKey)}
                  className={`px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] transition-all cursor-pointer ${
                    selectedMode === modeKey
                      ? "bg-[#0a0a0a] text-white font-bold shadow-xs"
                      : "text-neutral-600 hover:text-black"
                  }`}
                >
                  {DRIVE_MODES[modeKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Gauges Display */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
            {/* Speed Gauge */}
            <div className="bg-[#f8f9fa] p-6 border border-black/5 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-mono font-medium">
                  VELOCIDADE SOBRE A ÁGUA
                </span>
                <Navigation className="w-4 h-4 text-[#c43818]" strokeWidth={1.5} />
              </div>
              <div className="my-2">
                <div className="text-4xl sm:text-6xl font-bold text-[#0a0a0a] font-display tracking-tight">
                  {modeData.speedKnots}
                  <span className="text-xs text-neutral-500 font-mono ml-2 font-normal">KTS</span>
                </div>
                <div className="text-sm font-mono text-neutral-500 mt-1">
                  {modeData.speedKmh} km/h equivalentes
                </div>
              </div>
              <div className="w-full h-1.5 bg-neutral-200 rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full bg-[#c43818] transition-all duration-700"
                  style={{ width: `${(parseFloat(modeData.speedKnots) / 75) * 100}%` }}
                />
              </div>
            </div>

            {/* RPM Gauge */}
            <div className="bg-[#f8f9fa] p-6 border border-black/5 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-mono font-medium">
                  ROTAÇÃO DA TURBINA
                </span>
                <Wind className="w-4 h-4 text-[#0a0a0a]" strokeWidth={1.5} />
              </div>
              <div className="my-2">
                <div className="text-4xl sm:text-6xl font-bold text-[#0a0a0a] font-display tracking-tight">
                  {modeData.rpm}
                  <span className="text-xs text-neutral-500 font-mono ml-2 font-normal">RPM</span>
                </div>
                <div className="text-sm font-mono text-neutral-500 mt-1">
                  Pressão Boost: {modeData.boost}
                </div>
              </div>
              <div className="w-full h-1.5 bg-neutral-200 rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full bg-[#0a0a0a] transition-all duration-700"
                  style={{ width: `${(parseInt(modeData.rpm.replace(".", "")) / 9000) * 100}%` }}
                />
              </div>
            </div>

            {/* Trim & Hydrodynamic Attitude */}
            <div className="bg-[#f8f9fa] p-6 border border-black/5 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-mono font-medium">
                  ÂNGULO DE TRIM ATIVO
                </span>
                <Compass className="w-4 h-4 text-[#c43818]" strokeWidth={1.5} />
              </div>
              <div className="my-2">
                <div className="text-4xl sm:text-6xl font-bold text-[#0a0a0a] font-display tracking-tight">
                  {modeData.trim}
                  <span className="text-xs text-neutral-500 font-mono ml-2 font-normal">VTS</span>
                </div>
                <div className="text-sm font-mono text-neutral-500 mt-1">
                  Força G Lateral: {modeData.gForce}
                </div>
              </div>
              <div className="w-full h-1.5 bg-neutral-200 rounded-full mt-4 overflow-hidden">
                <div className="w-2/3 h-full bg-[#c43818]" />
              </div>
            </div>

            {/* Acoustic Signature & Exhaust */}
            <div className="bg-[#f8f9fa] p-6 border border-black/5 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-mono font-medium">
                  PERFIL ACÚSTICO
                </span>
                <Radio className="w-4 h-4 text-[#0a0a0a]" strokeWidth={1.5} />
              </div>
              <div className="my-2">
                <div className="text-lg font-bold text-[#0a0a0a] font-display uppercase tracking-tight">
                  {modeData.name}
                </div>
                <div className="text-xs font-mono text-neutral-500 mt-2 leading-relaxed">
                  {modeData.acoustic}
                </div>
              </div>
              <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase">
                <span>Válvula Ativa</span>
                <span className="text-[#c43818] font-bold">Sincronizada</span>
              </div>
            </div>
          </div>

          {/* Mode Description Banner */}
          <div className="p-6 bg-[#f8f9fa] border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c43818] font-mono font-bold block mb-1">
                COMPORTAMENTO DE NAVEGAÇÃO: {modeData.label}
              </span>
              <p className="text-xs font-mono text-neutral-600 max-w-3xl leading-relaxed">
                {modeData.description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="font-medium">SISTEMA HOMOLOGADO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
