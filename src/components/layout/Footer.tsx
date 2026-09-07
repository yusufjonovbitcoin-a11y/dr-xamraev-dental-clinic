import React from 'react';
import { MapPin, Phone, Clock, Send, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="images/logo.png"
                alt="Dental Clinic Logo"
                className="h-11 w-auto object-contain brightness-110"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Samarqanddagi xalqaro standartlarga javob beruvchi zamonaviy stomatologiya klinikasi. 12 yillik tajriba, Germaniya va Shveytsariya texnologiyalari asosida og‘riqsiz davolash.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-800 hover:bg-brand-600 text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigatsiya</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Asosiy</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Biz haqimizda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Xizmatlar</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Shifokorlar</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Natijalar</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Savol-javob</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Xizmatlarimiz</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Implantatsiya</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ortodontiya & Breketlar</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-max Vinirlar</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tishlarni oqartirish (Zoom 4)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bolalar stomatologiyasi</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3D Tomografiya diagnostikasi</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Aloqa & Manzil</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Samarqand shahri, Oydin yoʻl koʻchasi, 1-uy (Samarqand avtoshohbekati yonida)</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+998933313333" className="hover:text-white font-semibold text-slate-200">
                  +998 (93) 331-33-33
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Har kuni: 08:30 — 20:00</span>
              </p>
              <div className="pt-2">
                <a
                  href="https://yandex.uz/maps/org/dr_xamraev/37346829323/prices/?ll=66.995339%2C39.690100&z=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-brand-600 text-xs font-semibold text-white transition-colors"
                >
                  <span>Yandex Xarita</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Dental Clinic. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Maxfiylik siyosati</span>
            <span className="hover:text-slate-400 cursor-pointer">Foydalanish shartlari</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
