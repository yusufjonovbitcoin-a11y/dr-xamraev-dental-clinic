'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

interface AppointmentCtaProps {
  onOpenBooking: () => void;
}

export const AppointmentCta: React.FC<AppointmentCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container-custom">
        <div className="relative rounded-[2.5rem] bg-navy-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10">
          
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Mukammal Tabassum Sari Birinchi Qadam
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              Sog‘lom va nurli tabassumga <br />
              <span className="text-blue-300">birinchi qadamni qo‘ying</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Siz uchun qulay vaqtni tanlang. Ko‘rik davomida holatingiz baholanadi va tushunarli davolash rejasi tuziladi.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-base py-4 px-8 w-full sm:w-auto shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Onlayn qabulga yozilish</span>
              </button>

              <a
                href="tel:+998933313333"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all border border-white/20 flex items-center justify-center gap-3"
              >
                <PhoneCall className="w-5 h-5 text-cyan-400" />
                <span>+998 (93) 331-33-33</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Samarqand avtoshohbekati yonida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Har kuni: 08:30 — 20:00</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Shoshilinch tibbiy yordam</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
