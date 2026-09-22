"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Shield, MapPin, Send, User, Mail, Phone } from "lucide-react";

interface CtaVipProps {
  selectedModel?: string;
}

export function CtaVip({ selectedModel }: CtaVipProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: selectedModel || "PHANTOM V900",
    marina: "angra",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const marinas = [
    { id: "angra", label: "Angra dos Reis — Frade / Iate Clube (Brasil)" },
    { id: "bc", label: "Balneário Camboriú — Marina Tedesco (Brasil)" },
    { id: "miami", label: "Miami — Biscayne Bay Private Docks (EUA)" },
    { id: "monaco", label: "Mônaco — Port Hercules Marina (Europa)" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="reserva" className="relative py-32 px-6 bg-white overflow-hidden border-t border-black/5">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f8f9fa] border border-black/10 shadow-xs mb-4">
            <Shield className="w-3.5 h-3.5 text-[#c43818]" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-mono font-medium">
              ACESSO EXCLUSIVO POR AGENDAMENTO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0a0a] uppercase font-display leading-[1.05] mb-4">
            DOMINE AS ÁGUAS. <br />
            <span className="text-neutral-400">AGENDE SEU TEST RIDE PRIVADO.</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 max-w-2xl mx-auto">
            Disponibilidade restrita a clientes selecionados e proprietários de embarcações de alto padrão.
          </p>
        </div>

        {/* Booking Card (White Luxury Edition) */}
        <div className="luxury-card-white p-8 sm:p-14 relative overflow-hidden">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-[#c43818]/30 bg-[#c43818]/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#c43818]" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#c43818] font-bold block mb-2">
                SOLICITAÇÃO RECEBIDA COM SUCESSO
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#0a0a0a] font-display mb-4">
                PROTOCOLO PRIVADO REGISTRADO
              </h3>
              <p className="text-sm font-mono text-neutral-600 max-w-md mx-auto leading-relaxed mb-8">
                Um Concierge Náutico dedicado da Vertex entrará em contato nas próximas 4 horas para alinhar as credenciais de segurança e confirmar a janela náutica para o teste.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-xs uppercase tracking-[0.2em] text-black font-mono transition-colors"
              >
                Enviar nova solicitação
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Model Selector */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-neutral-600 font-mono font-medium mb-2">
                    Modelo Desejado
                  </label>
                  <select
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#f8f9fa] border border-black/15 text-[#0a0a0a] text-xs font-mono tracking-wider focus:border-[#c43818] focus:outline-none transition-colors"
                  >
                    <option value="PHANTOM V900">VERTEX PHANTOM V900 (380 HP · Stealth)</option>
                    <option value="AERODYNE GT">VERTEX AERODYNE GT (320 HP · Touring)</option>
                    <option value="CORSAIR R-SPEC">VERTEX CORSAIR R-SPEC (350 HP · Racing)</option>
                  </select>
                </div>

                {/* Marina Location Selector */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-neutral-600 font-mono font-medium mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#c43818]" strokeWidth={1.5} />
                    <span>Base Náutica Privada</span>
                  </label>
                  <select
                    value={formData.marina}
                    onChange={(e) => setFormData({ ...formData, marina: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#f8f9fa] border border-black/15 text-[#0a0a0a] text-xs font-mono tracking-wider focus:border-[#c43818] focus:outline-none transition-colors"
                  >
                    {marinas.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-neutral-600 font-mono font-medium mb-2 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#c43818]" strokeWidth={1.5} />
                    <span>Nome Completo</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#f8f9fa] border border-black/15 text-[#0a0a0a] text-xs font-mono tracking-wider focus:border-[#c43818] focus:outline-none placeholder:text-neutral-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-neutral-600 font-mono font-medium mb-2 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#c43818]" strokeWidth={1.5} />
                    <span>E-mail Corporativo / Pessoal</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu.email@dominio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#f8f9fa] border border-black/15 text-[#0a0a0a] text-xs font-mono tracking-wider focus:border-[#c43818] focus:outline-none placeholder:text-neutral-400 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-neutral-600 font-mono font-medium mb-2 flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#c43818]" strokeWidth={1.5} />
                    <span>Telefone / WhatsApp</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+55 (11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#f8f9fa] border border-black/15 text-[#0a0a0a] text-xs font-mono tracking-wider focus:border-[#c43818] focus:outline-none placeholder:text-neutral-400 transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono">
                  <Shield className="w-3.5 h-3.5 text-neutral-400" strokeWidth={1.5} />
                  <span>Sigilo Absoluto & Atendimento Concierge Individual</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#0a0a0a] text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#c43818] transition-all cursor-pointer font-display flex items-center justify-center gap-3 shadow-lg active:scale-98"
                >
                  <span>Confirmar Agendamento Exclusivo</span>
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
