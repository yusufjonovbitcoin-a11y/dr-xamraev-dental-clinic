'use client';

import React from 'react';
import { Home, Sparkles, Calendar, Users, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileBottomNavProps {
  onOpenBooking: () => void;
}

export default function MobileBottomNav({ onOpenBooking }: MobileBottomNavProps) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass-bottom-bar px-3 py-1.5 flex items-center justify-around shadow-[0_-8px_25px_rgba(0,0,0,0.06)]">
      
      {/* Asosiy */}
      <a
        href="#hero"
        className="flex flex-col items-center justify-center w-14 py-1 text-slate-500 hover:text-brand-600 transition-colors"
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">Asosiy</span>
      </a>

      {/* Xizmatlar */}
      <a
        href="#services"
        className="flex flex-col items-center justify-center w-14 py-1 text-slate-500 hover:text-brand-600 transition-colors"
      >
        <Sparkles className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">Xizmatlar</span>
      </a>

      {/* Elevated Primary Qabul CTA */}
      <motion.button
        onClick={onOpenBooking}
        whileTap={{ scale: 0.92 }}
        className="-translate-y-4 w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-400 text-white shadow-lg shadow-brand-600/45 flex items-center justify-center border-4 border-white"
        aria-label="Qabulga yozilish"
      >
        <Calendar className="w-6 h-6 text-white" />
      </motion.button>

      {/* Shifokorlar */}
      <a
        href="#doctors"
        className="flex flex-col items-center justify-center w-14 py-1 text-slate-500 hover:text-brand-600 transition-colors"
      >
        <Users className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">Shifokorlar</span>
      </a>

      {/* Aloqa */}
      <a
        href="#contact"
        className="flex flex-col items-center justify-center w-14 py-1 text-slate-500 hover:text-brand-600 transition-colors"
      >
        <PhoneCall className="w-5 h-5" />
        <span className="text-[10px] font-bold mt-1">Aloqa</span>
      </a>

    </nav>
  );
}
