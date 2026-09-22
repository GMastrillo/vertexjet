import { Anchor, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-[#f8f9fa] border-t border-black/10 text-neutral-600 font-mono text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-black/10">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border border-black/15 flex items-center justify-center bg-white shadow-2xs">
                <Anchor className="w-4 h-4 text-[#c43818]" strokeWidth={1.5} />
              </div>
              <span className="font-display font-bold text-xl tracking-[0.25em] text-[#0a0a0a] uppercase">
                VERTEX JET
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-600 max-w-md leading-relaxed mb-6 font-mono">
              Divisão náutica de hiperluxo da Vertex Dynamics. Manufatura artesanal de embarcações pessoais de alta performance com materiais compósitos de padrão aeroespacial.
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c43818]" strokeWidth={1.5} />
              <span>CERTIFICAÇÃO MARÍTIMA ISO 13590 & GUARDA COSTEIRA INTERNACIONAL</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a] font-mono font-bold block mb-4">
              DIVISÕES & MODELOS
            </span>
            <ul className="space-y-2.5 text-[11px] uppercase tracking-wider text-neutral-600">
              <li>
                <a href="#showroom" className="hover:text-[#c43818] transition-colors">
                  Phantom V900 Stealth
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-[#c43818] transition-colors">
                  Aerodyne GT Touring
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-[#c43818] transition-colors">
                  Corsair R-Spec Racing
                </a>
              </li>
              <li>
                <a href="#performance" className="hover:text-[#c43818] transition-colors">
                  Engenharia Hidrodinâmica
                </a>
              </li>
              <li>
                <a href="#telemetria" className="hover:text-[#c43818] transition-colors">
                  Cockpit & Telemetria
                </a>
              </li>
            </ul>
          </div>

          {/* Shipyard & Locations Col */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a] font-mono font-bold block mb-4">
              ESTALEIROS & MARINAS
            </span>
            <div className="space-y-4 text-[11px] uppercase tracking-wider text-neutral-600">
              <div>
                <span className="text-[#0a0a0a] block font-semibold">ESTALEIRO CENTRAL</span>
                <span className="text-neutral-500">LAT 24° 00&apos; 12&quot; S · LON 46° 21&apos; 44&quot; W</span>
              </div>
              <div>
                <span className="text-[#0a0a0a] block font-semibold">PRIVATE DOCKS</span>
                <span className="text-neutral-500">Angra dos Reis · Balneário Camboriú · Miami · Mônaco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-medium">
          <div>
            © 2026 VERTEX MARINE DYNAMICS CORP. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#c43818] cursor-pointer transition-colors">
              POLÍTICA DE PRIVACIDADE
            </span>
            <span className="hover:text-[#c43818] cursor-pointer transition-colors">
              TERMOS DE SERVIÇO
            </span>
            <span className="hover:text-[#c43818] cursor-pointer transition-colors">
              CONCIERGE DIRETO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
