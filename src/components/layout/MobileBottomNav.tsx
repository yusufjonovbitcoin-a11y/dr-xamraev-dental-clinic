'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, Calendar, Users, PhoneCall, Stethoscope } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { openBooking } = useBooking();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '' || pathname === '/dr-xamraev-dental-clinic' || pathname === '/dr-xamraev-dental-clinic/';
    }
    return pathname.includes(href);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden glass-bottom-bar shadow-[0_-8px_25px_rgba(0,0,0,0.06)]">
      <nav className="flex items-center justify-around h-16 max-w-md mx-auto px-3 relative">
        
        {/* 1. Asosiy */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-14 py-1 transition-colors ${
            isActive('/') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className={`text-[10px] mt-1 ${isActive('/') ? 'font-extrabold' : 'font-semibold'}`}>
            Asosiy
          </span>
        </Link>

        {/* 2. Xizmatlar */}
        <Link
          href="/xizmatlar"
          className={`flex flex-col items-center justify-center w-14 py-1 transition-colors ${
            isActive('/xizmatlar') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
          }`}
        >
          <Stethoscope className="w-5 h-5" />
          <span className={`text-[10px] mt-1 ${isActive('/xizmatlar') ? 'font-extrabold' : 'font-semibold'}`}>
            Xizmatlar
          </span>
        </Link>

        {/* 3. Central Elevated CTA (Qabul) */}
        <div className="relative -top-4 flex flex-col items-center">
          <button
            onClick={() => openBooking()}
            aria-label="Qabulga yozilish"
            className="w-13 h-13 p-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/40 flex items-center justify-center active:scale-95 transition-transform border-4 border-white"
          >
            <Calendar className="w-6 h-6 text-white" />
          </button>
          <span className="text-[10px] font-extrabold text-blue-600 mt-0.5">
            Qabul
          </span>
        </div>

        {/* 4. Natijalar */}
        <Link
          href="/natijalar"
          className={`flex flex-col items-center justify-center w-14 py-1 transition-colors ${
            isActive('/natijalar') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className={`text-[10px] mt-1 ${isActive('/natijalar') ? 'font-extrabold' : 'font-semibold'}`}>
            Natijalar
          </span>
        </Link>

        {/* 5. Aloqa */}
        <Link
          href="/aloqa"
          className={`flex flex-col items-center justify-center w-14 py-1 transition-colors ${
            isActive('/aloqa') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
          }`}
        >
          <PhoneCall className="w-5 h-5" />
          <span className={`text-[10px] mt-1 ${isActive('/aloqa') ? 'font-extrabold' : 'font-semibold'}`}>
            Aloqa
          </span>
        </Link>

      </nav>
    </div>
  );
}
