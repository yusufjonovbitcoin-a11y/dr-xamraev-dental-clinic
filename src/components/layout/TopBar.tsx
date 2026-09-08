import React from 'react';
import { Clock, Phone, MapPin, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800/80 hidden sm:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        
        {/* Left: Hours & Location */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span>Du–Sha: <strong>08:30 — 20:00</strong> | Yak: <strong>09:00 — 16:00</strong></span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span>Samarqand, Oydin yoʻl koʻchasi, 1 (Avtoshohbekat yonida)</span>
          </div>
        </div>

        {/* Right: Phone & Emergency Status */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+998933313333"
            className="flex items-center gap-1.5 font-semibold text-white hover:text-brand-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>+998 (93) 331-33-33</span>
          </a>
          <span className="text-navy-800">|</span>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Navbatchi qabul ochiq</span>
          </div>
        </div>

      </div>
    </div>
  );
}
