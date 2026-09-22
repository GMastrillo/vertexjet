"use client";

import { motion } from "motion/react";
import { Gauge, Shield, Zap, Activity, Cpu } from "lucide-react";

export function PerformanceBento() {
  return (
    <section id="performance" className="relative py-32 px-6 bg-[#f8f9fa] overflow-hidden">
      {/* Pristine architectural background with zero square grid patterns */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-black/10 shadow-xs mb-4">
            <Activity className="w-3.5 h-3.5 text-[#c43818]" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-mono font-medium">
              ARQUITETURA HIDRODINÂMICA 2026
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0a0a] uppercase font-display max-w-3xl leading-[1.05]">
            ENGENHARIA FORJADA <br />
            <span className="text-neutral-400">PARA O MAR EXTREMO</span>
          </h2>
        </div>

        {/* Bento Grid Container (White Luxury Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 380 HP Supercharged Engine (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 luxury-card-white p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c43818] font-mono font-bold block mb-2">
                  PROPULSÃO NÁUTICA V8
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#0a0a0a] font-display">
                  MOTOR SUPERCHARGED DE 380 HP
                </h3>
              </div>
              <div className="p-3 bg-neutral-100 text-neutral-700">
                <Gauge className="w-6 h-6" strokeWidth={1.5} />
              </div>
            </div>

            {/* Performance Stats Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 my-6 pt-6 border-t border-black/5">
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-[#0a0a0a] font-display tracking-tight">
                  380<span className="text-xs text-neutral-500 font-mono ml-1 font-normal">HP</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mt-1">
                  Potência Dinâmica
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-5xl font-bold text-[#0a0a0a] font-display tracking-tight">
                  2.4<span className="text-xs text-neutral-500 font-mono ml-1 font-normal">SEG</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mt-1">
                  0 a 100 km/h na Água
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-5xl font-bold text-[#0a0a0a] font-display tracking-tight">
                  8.850<span className="text-xs text-neutral-500 font-mono ml-1 font-normal">RPM</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mt-1">
                  Redline Náutico
                </span>
              </div>
            </div>

            {/* Technical Description & Torque Curve */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-6 border-t border-black/5">
              <p className="text-xs text-neutral-600 font-mono uppercase tracking-[0.15em] max-w-md leading-relaxed">
                Sistema Closed-Loop Cooling (CLCS) que isola o bloco marítimo do sal marinho, mantendo a temperatura ideal mesmo sob aceleração contínua em mar aberto.
              </p>
              {/* Minimalist SVG Torque Curve */}
              <div className="w-36 h-12 flex items-end">
                <svg viewBox="0 0 144 48" className="w-full h-full stroke-[#c43818] fill-none" strokeWidth="1.5">
                  <path d="M 0 44 Q 30 40, 60 22 T 120 8 L 144 6" />
                  <path d="M 0 44 Q 30 40, 60 22 T 120 8 L 144 6 L 144 48 L 0 48 Z" className="fill-[#c43818]/10 stroke-none" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Carbon Monocoque (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="luxury-card-white p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c43818] font-mono font-bold">
                  ESTRUTURA T1000
                </span>
                <div className="p-3 bg-neutral-100 text-neutral-700">
                  <Shield className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase text-[#0a0a0a] font-display mb-4">
                MONOCOQUE EM FIBRA DE CARBONO
              </h3>
              <p className="text-xs text-neutral-600 font-mono uppercase tracking-[0.15em] leading-relaxed mb-8">
                Casco integral forjado a vácuo com autoclave aeroespacial. 32% mais leve e com rigidez torsional incomparável contra ondas de proa.
              </p>
            </div>

            <div className="pt-6 border-t border-black/5">
              <div className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] font-display tracking-tight">
                310<span className="text-xs text-neutral-500 font-mono ml-1 font-normal">KG</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mt-1">
                Peso Seco Total Homologado
              </span>
            </div>
          </motion.div>

          {/* Card 3: Titanium Dual-Stage Waterjet (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="luxury-card-white p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c43818] font-mono font-bold">
                  EMPUXO VETORIAL
                </span>
                <div className="p-3 bg-neutral-100 text-neutral-700">
                  <Zap className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase text-[#0a0a0a] font-display mb-4">
                HIDROJATO DUPLO EM TITÂNIO
              </h3>
              <p className="text-xs text-neutral-600 font-mono uppercase tracking-[0.15em] leading-relaxed mb-8">
                Rotores axiais usinados em bloco sólido de liga de titânio Ti-6Al-4V, gerando cavitação zero em aceleração de saída de curva.
              </p>
            </div>

            <div className="pt-6 border-t border-black/5">
              <div className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] font-display tracking-tight">
                1.450<span className="text-xs text-neutral-500 font-mono ml-1 font-normal">KGf</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mt-1">
                Empuxo Estático Direcional
              </span>
            </div>
          </motion.div>

          {/* Card 4: Marine Telemetry & Dynamic VTS (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-2 luxury-card-white p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c43818] font-mono font-bold block mb-2">
                  TELEMETRIA MARINHA INTEGRADA
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#0a0a0a] font-display">
                  SISTEMA DE TRIM VARIÁVEL (VTS)
                </h3>
              </div>
              <div className="p-3 bg-neutral-100 text-neutral-700">
                <Cpu className="w-6 h-6" strokeWidth={1.5} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-4">
              <div className="space-y-4">
                <p className="text-xs text-neutral-600 font-mono uppercase tracking-[0.15em] leading-relaxed">
                  Sensores inerciais de 6 eixos que calculam o ângulo de ataque da proa 200 vezes por segundo, ajustando automaticamente o bocal de ejeção para manter contato hidrodinâmico perfeito com a superfície.
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#c43818] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-800 font-mono font-medium">
                    CALIBRAÇÃO ATIVA EM TEMPO REAL
                  </span>
                </div>
              </div>

              {/* HUD Sensor Graphic (White Luxury edition) */}
              <div className="bg-[#f8f9fa] p-5 border border-black/5 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-b border-black/5 pb-2">
                  <span>Sensor Náutico</span>
                  <span className="text-[#c43818] font-bold">Status: Ativo</span>
                </div>
                <div className="space-y-3 py-3">
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-neutral-700 mb-1">
                      <span>ÂNGULO DE TRIM</span>
                      <span className="font-semibold text-black">+3.2° (ATAQUE)</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-[#c43818]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-neutral-700 mb-1">
                      <span>PRESSÃO DA BOMBA</span>
                      <span className="font-semibold text-black">18.4 BAR</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-black" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 uppercase tracking-widest pt-2 border-t border-black/5">
                  <span>LAT 24° 00&apos; S</span>
                  <span>LON 46° 21&apos; W</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
