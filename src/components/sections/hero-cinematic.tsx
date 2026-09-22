"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, ChevronDown, Compass } from "lucide-react";

interface HeroCinematicProps {
  onVideoEnd?: () => void;
  onExplore?: () => void;
  onBooking?: () => void;
}

export function HeroCinematic({ onVideoEnd, onExplore, onBooking }: HeroCinematicProps) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 0.35;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback transparente se o navegador bloquear autoplay com som
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
  }, []);

  const handleEnded = () => {
    setVideoEnded(true);
    if (videoRef.current) {
      // Loop suave contínuo em baixa opacidade mantendo a água e a embarcação vivas em segundo plano
      videoRef.current.loop = true;
      videoRef.current.play().catch(() => {});
    }
    if (onVideoEnd) {
      onVideoEnd();
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    if (!nextMuted) {
      videoRef.current.volume = 0.35;
    }
    setIsMuted(nextMuted);
  };

  const handleSkip = () => {
    handleEnded();
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none">
      {/* Background Video Engine - jetski1.mp4 */}
      <video
        ref={videoRef}
        src="/jetski1.mp4"
        playsInline
        autoPlay
        muted={false}
        loop={false}
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Atmospheric Video Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

      {/* Translucent White Luxury Frosted Veil - Mais transparente conforme pedido */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-white/75 via-white/50 to-white/25 backdrop-blur-[5px] transition-all duration-1000 pointer-events-none ${
          videoEnded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Floating Audio & Skip Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
        {!videoEnded && (
          <button
            onClick={handleSkip}
            className="px-3.5 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white bg-black/50 backdrop-blur-md border border-white/20 hover:bg-black/70 transition-all cursor-pointer font-mono shadow-sm"
            aria-label="Pular introdução de vídeo"
          >
            Pular Introdução
          </button>
        )}
        <button
          onClick={toggleSound}
          className="p-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#0a0a0a] border border-black/10 shadow-sm hover:bg-white transition-all cursor-pointer"
          aria-label={isMuted ? "Ativar áudio" : "Desativar áudio"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" strokeWidth={1.5} />
          ) : (
            <Volume2 className="w-4 h-4 text-[#c43818]" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Revealed Hero Copy & CTAs on Video End */}
      <AnimatePresence>
        {videoEnded && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 text-center max-w-5xl px-6 flex flex-col items-center"
          >
            {/* Editorial Category Pill (Avantgarde style) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-xs mb-6"
            >
              <Compass className="w-3.5 h-3.5 text-[#c43818]" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-800 font-mono font-medium">
                VERTEX MARINE DYNAMICS • COLEÇÃO DE HIPERLUXO 2026
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#0a0a0a] uppercase mb-6 font-display leading-[0.95] drop-shadow-xs"
            >
              O ÁPICE DA <br />
              <span className="text-neutral-600">
                HIDRODINÂMICA PURA
              </span>
            </motion.h1>

            {/* Technical Sub-headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-700 font-mono font-medium max-w-2xl mb-10 leading-relaxed bg-white/40 backdrop-blur-[2px] px-4 py-1 rounded-sm"
            >
              380 HP · Casco Monocoque em Fibra de Carbono T1000 · 0 a 100 km/h em 2.4 segundos
            </motion.p>

            {/* High-Contrast Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onBooking}
                className="w-full sm:w-auto px-8 py-4 bg-[#0a0a0a] text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#c43818] transition-all cursor-pointer font-display shadow-xl active:scale-98"
              >
                Agendar Test Ride Exclusivo
              </button>
              <button
                onClick={onExplore}
                className="w-full sm:w-auto px-8 py-4 bg-white/90 backdrop-blur-md text-[#0a0a0a] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-white transition-all cursor-pointer font-display border border-black/15 shadow-sm"
              >
                Explorar Frota 2026
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Scroll Indicator */}
      {videoEnded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-700 font-mono font-semibold bg-white/60 px-2 py-0.5 backdrop-blur-[2px]">
            ROLAR PARA ENGENHARIA
          </span>
          <ChevronDown className="w-4 h-4 text-neutral-800 animate-bounce" strokeWidth={2} />
        </motion.div>
      )}
    </section>
  );
}
