import React from "react";

export type ClientLogoProps = {
  className?: string;
  invert?: boolean;
};

export const clientDetails = [
  { id: "nhai", name: "NHAI", fullName: "National Highways Authority of India" },
  { id: "mppwd", name: "MPPWD", fullName: "MP Public Works Department" },
  { id: "tata", name: "TATA", fullName: "Tata Projects" },
  { id: "ntpc", name: "NTPC", fullName: "NTPC Limited" },
  { id: "jsw", name: "JSW", fullName: "JSW Group" },
  { id: "adani", name: "Adani", fullName: "Adani Group" },
  { id: "ultratech", name: "UltraTech", fullName: "UltraTech Cement" },
  { id: "state-ulbs", name: "State ULBs", fullName: "Urban Local Bodies (MP)" },
];

export function ClientLogo({
  id,
  className = "h-8 w-auto",
  invert = false,
}: {
  id: string;
  className?: string;
  invert?: boolean;
}) {
  switch (id) {
    case "nhai":
      return (
        <div className={`flex items-center gap-2.5 font-sans ${className}`}>
          <svg viewBox="0 0 42 42" className="h-9 w-9 shrink-0" fill="none">
            <circle cx="21" cy="21" r="20" className={invert ? "fill-teal-900/50 stroke-emerald-400" : "fill-emerald-50 stroke-emerald-700"} strokeWidth="1.5" />
            {/* Road perspective */}
            <path d="M12 33 L18 10 H24 L30 33 Z" className={invert ? "fill-emerald-400" : "fill-emerald-800"} />
            <path d="M20.2 33 L20.6 24 H21.4 L21.8 33 Z" fill={invert ? "#0F172A" : "#FFFFFF"} />
            <path d="M20.8 21 L20.9 15 H21.1 L21.2 21 Z" fill={invert ? "#0F172A" : "#FFFFFF"} />
            {/* Sun/arch */}
            <circle cx="21" cy="10" r="4.5" className={invert ? "fill-amber-300" : "fill-amber-500"} />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-bold tracking-wider ${invert ? "text-cream" : "text-emerald-950"}`}>
              NHAI
            </span>
            <span className={`text-[0.55rem] font-semibold tracking-wider uppercase ${invert ? "text-emerald-300" : "text-emerald-700"}`}>
              Govt. of India
            </span>
          </div>
        </div>
      );

    case "mppwd":
      return (
        <div className={`flex items-center gap-2.5 font-sans ${className}`}>
          <svg viewBox="0 0 42 42" className="h-9 w-9 shrink-0" fill="none">
            <rect x="2" y="2" width="38" height="38" rx="6" className={invert ? "fill-amber-950/40 stroke-amber-500/60" : "fill-amber-50/80 stroke-amber-700/50"} strokeWidth="1.2" />
            {/* Bridge pillar motif */}
            <path d="M9 29 V14 H14 V29 H9 Z" className={invert ? "fill-amber-400" : "fill-amber-800"} />
            <path d="M28 29 V14 H33 V29 H28 Z" className={invert ? "fill-amber-400" : "fill-amber-800"} />
            <path d="M6 14 Q21 8 36 14 L36 17 Q21 11 6 17 Z" className={invert ? "fill-amber-300" : "fill-amber-600"} />
            <path d="M14 22 Q21 16 28 22" stroke={invert ? "#FDE68A" : "#78350F"} strokeWidth="2" strokeLinecap="round" />
            <circle cx="21" cy="28" r="3" className={invert ? "fill-amber-400" : "fill-amber-700"} />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-bold tracking-wider ${invert ? "text-cream" : "text-espresso"}`}>
              MP PWD
            </span>
            <span className={`text-[0.55rem] font-semibold tracking-wider uppercase ${invert ? "text-gold" : "text-caramel"}`}>
              Madhya Pradesh
            </span>
          </div>
        </div>
      );

    case "tata":
      return (
        <div className={`flex items-center gap-2.5 font-sans ${className}`}>
          <svg viewBox="0 0 42 42" className="h-9 w-9 shrink-0" fill="none">
            <circle cx="21" cy="21" r="20" className={invert ? "fill-sky-950/60 stroke-sky-400" : "fill-blue-50 stroke-blue-700"} strokeWidth="1.5" />
            {/* Tata curved T lines */}
            <path
              d="M10 13 H32 M21 13 V31 M14 18 C17 24 21 27 21 27 C21 27 25 24 28 18"
              stroke={invert ? "#38BDF8" : "#0284C7"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-black tracking-widest ${invert ? "text-cream" : "text-sky-950"}`}>
              TATA
            </span>
            <span className={`text-[0.55rem] font-semibold tracking-wider uppercase ${invert ? "text-sky-300" : "text-sky-700"}`}>
              Projects & Infra
            </span>
          </div>
        </div>
      );

    case "ntpc":
      return (
        <div className={`flex items-center gap-2.5 font-sans ${className}`}>
          <svg viewBox="0 0 42 42" className="h-9 w-9 shrink-0" fill="none">
            <rect x="2" y="2" width="38" height="38" rx="8" className={invert ? "fill-cyan-950/60 stroke-cyan-400/70" : "fill-cyan-50 stroke-cyan-700"} strokeWidth="1.2" />
            {/* Power spark / thermal turbine */}
            <path d="M21 7 L25 18 H33 L26 23 L29 34 L21 27 L13 34 L16 23 L9 18 H17 Z" className={invert ? "fill-cyan-400" : "fill-cyan-700"} />
            <circle cx="21" cy="21" r="4" fill={invert ? "#0E7490" : "#FFFFFF"} />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-extrabold tracking-wider ${invert ? "text-cream" : "text-cyan-950"}`}>
              NTPC
            </span>
            <span className={`text-[0.55rem] font-semibold tracking-wider uppercase ${invert ? "text-cyan-300" : "text-cyan-700"}`}>
              Power Energy
            </span>
          </div>
        </div>
      );

    case "jsw":
      return (
        <div className={`flex items-center gap-2.5 font-sans ${className}`}>
          <svg viewBox="0 0 44 42" className="h-9 w-10 shrink-0" fill="none">
            {/* JSW dynamic angled slashes */}
            <path d="M6 31 L14 11 H20 L12 31 Z" className={invert ? "fill-rose-400" : "fill-rose-600"} />
            <path d="M18 31 L26 11 H32 L24 31 Z" className={invert ? "fill-sky-400" : "fill-blue-700"} />
            <path d="M30 31 L38 11 H42 L34 31 Z" className={invert ? "fill-slate-300" : "fill-slate-800"} />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-black tracking-wider ${invert ? "text-cream" : "text-slate-900"}`}>
              JSW
            </span>
            <span className={`text-[0.55rem] font-semibold tracking-wider uppercase ${invert ? "text-rose-300" : "text-rose-600"}`}>
              Steel & Infra
            </span>
          </div>
        </div>
      );

    case "adani":
      return (
        <div className={`flex items-center gap-2.5 font-sans ${className}`}>
          <svg viewBox="0 0 42 42" className="h-9 w-9 shrink-0" fill="none">
            {/* Adani triad arcs */}
            <path d="M8 29 C8 17 18 10 28 10" stroke={invert ? "#38BDF8" : "#0284C7"} strokeWidth="4" strokeLinecap="round" />
            <path d="M14 32 C14 22 22 17 32 17" stroke={invert ? "#34D399" : "#059669"} strokeWidth="4" strokeLinecap="round" />
            <path d="M20 35 C20 28 26 24 35 24" stroke={invert ? "#FB923C" : "#EA580C"} strokeWidth="4" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-bold tracking-tight lowercase ${invert ? "text-cream" : "text-slate-800"}`}>
              adani
            </span>
            <span className={`text-[0.55rem] font-semibold tracking-wider uppercase ${invert ? "text-amber-300" : "text-amber-700"}`}>
              Infrastructure
            </span>
          </div>
        </div>
      );

    case "ultratech":
      return (
        <div className={`flex items-center gap-2.5 font-sans ${className}`}>
          <svg viewBox="0 0 44 42" className="h-9 w-10 shrink-0" fill="none">
            {/* UltraTech yellow badge block */}
            <path d="M4 10 L38 6 L42 32 L8 36 Z" className={invert ? "fill-amber-400" : "fill-amber-400"} />
            <path d="M9 13 L35 10 L39 30 L13 33 Z" className="fill-slate-900" />
            <text x="23" y="24" textAnchor="middle" fill="#FBBF24" fontSize="9" fontWeight="900" fontFamily="sans-serif">
              Ultra
            </text>
          </svg>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-black tracking-tight ${invert ? "text-cream" : "text-amber-950"}`}>
              UltraTech
            </span>
            <span className={`text-[0.55rem] font-bold tracking-wider uppercase ${invert ? "text-amber-300" : "text-amber-600"}`}>
              Cement
            </span>
          </div>
        </div>
      );

    case "state-ulbs":
    default:
      return (
        <div className={`flex items-center gap-2.5 font-sans ${className}`}>
          <svg viewBox="0 0 42 42" className="h-9 w-9 shrink-0" fill="none">
            <circle cx="21" cy="21" r="20" className={invert ? "fill-purple-950/50 stroke-purple-400" : "fill-purple-50 stroke-purple-700"} strokeWidth="1.5" />
            {/* Skyline & gear */}
            <path d="M12 28 V19 H17 V28 M17 28 V13 H24 V28 M24 28 V21 H29 V28" stroke={invert ? "#C084FC" : "#7E22CE"} strokeWidth="2" />
            <circle cx="21" cy="10" r="1.5" fill={invert ? "#E9D5FF" : "#581C87"} />
            <path d="M8 29 H34" stroke={invert ? "#C084FC" : "#7E22CE"} strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className={`font-display text-lg font-bold tracking-wider ${invert ? "text-cream" : "text-purple-950"}`}>
              State ULBs
            </span>
            <span className={`text-[0.55rem] font-semibold tracking-wider uppercase ${invert ? "text-purple-300" : "text-purple-700"}`}>
              Urban Admin MP
            </span>
          </div>
        </div>
      );
  }
}
