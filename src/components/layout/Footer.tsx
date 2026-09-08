'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Send, Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { assetPath } from '@/utils/assets';

export default function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-navy-800">
      <div className="container-custom">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src={assetPath("/images/logo.png")}
                alt="Dental Clinic Logo"
                className="h-11 sm:h-12 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Samarqanddagi xalqaro standartlarga javob beruvchi zamonaviy stomatologiya klinikasi. 12 yillik tajriba, Germaniya va Shveytsariya texnologiyalari asosida og‘riqsiz davolash.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Sahifalar (Pages) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              Sahifalar
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/xizmatlar" className="hover:text-blue-400 transition-colors">
                  Barcha xizmatlar & narxlar
                </Link>
              </li>
              <li>
                <Link href="/natijalar" className="hover:text-blue-400 transition-colors">
                  Oldin va keyin (Natijalar)
                </Link>
              </li>
              <li>
                <Link href="/shifokorlar" className="hover:text-blue-400 transition-colors">
                  Vrachlar va mutaxassislar
                </Link>
              </li>
              <li>
                <Link href="/texnologiyalar" className="hover:text-blue-400 transition-colors">
                  Germaniya texnologiyalari
                </Link>
              </li>
              <li>
                <Link href="/aloqa" className="hover:text-blue-400 transition-colors">
                  Aloqa va Yandex xarita
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Asosiy Xizmatlar */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              Xizmatlar
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/xizmatlar" className="hover:text-blue-400 transition-colors">
                  Implantatsiya
                </Link>
              </li>
              <li>
                <Link href="/xizmatlar" className="hover:text-blue-400 transition-colors">
                  E-max Vinirlari
                </Link>
              </li>
              <li>
                <Link href="/xizmatlar" className="hover:text-blue-400 transition-colors">
                  Zoom 4 Oqartirish
                </Link>
              </li>
              <li>
                <Link href="/xizmatlar" className="hover:text-blue-400 transition-colors">
                  Breket & Elaynerlar
                </Link>
              </li>
              <li>
                <Link href="/xizmatlar" className="hover:text-blue-400 transition-colors">
                  Tsirkon qoplamalar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Samarqand Kontakt & Ish tartibi */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              Bog‘lanish
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Samarqand shahri, Oydin yo‘l ko‘chasi 1-uy (Samarqand avtoshohbekati yonida)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+998933313333" className="hover:text-white font-medium">
                    +998 (93) 331-33-33
                  </a>
                  <a href="tel:+998915362323" className="hover:text-white font-medium">
                    +998 (91) 536-23-23
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Har kuni: 08:30 — 20:00 (Dam olish kunlarisiz)</span>
              </li>
            </ul>

            <button
              onClick={() => openBooking()}
              className="w-full mt-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Onlayn qabulga yozilish</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Dr. Xamraev Stomatologiya Klinikasi. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Samarqand, O‘zbekiston</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Germaniya & Shveysariya protokollari</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
