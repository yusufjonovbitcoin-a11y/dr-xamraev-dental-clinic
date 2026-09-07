'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Send, 
  ExternalLink, 
  Navigation, 
  CheckCircle2,
  Car
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Bizning Manzilimiz
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Bizga tashrif buyuring yoki <br />
            <span className="text-gradient">bog‘laning</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Klinikamiz Samarqand shahrining eng qulay nuqtasida, Samarqand avtoshohbekati yonida joylashgan. Sizni kutib olishdan mamnunmiz.
          </p>
        </div>

        {/* Contact Info Cards + Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Address card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Klinika manzili
                </span>
                <h4 className="font-heading text-lg font-bold text-navy-900 mb-1">
                  Samarqand shahri, Oydin yo‘l ko‘chasi 1-uy
                </h4>
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  Mo‘ljal: Samarqand avtoshohbekati yonida
                </p>
              </div>
            </div>

            {/* Phone numbers card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Telefon raqamlarimiz
                </span>
                <div className="flex flex-col gap-1.5">
                  <a 
                    href="tel:+998933313333" 
                    className="font-heading text-lg font-bold text-navy-900 hover:text-blue-600 transition-colors"
                  >
                    +998 (93) 331-33-33
                  </a>
                  <a 
                    href="tel:+998915362323" 
                    className="font-heading text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    +998 (91) 536-23-23
                  </a>
                </div>
                <p className="text-xs text-emerald-600 font-medium mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Qo‘ng‘iroqlar zudlik bilan qabul qilinadi
                </p>
              </div>
            </div>

            {/* Working hours card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Ish tartibi
                </span>
                <h4 className="font-heading text-lg font-bold text-navy-900 mb-1">
                  Har kuni: 08:30 — 20:00
                </h4>
                <p className="text-xs text-slate-500">
                  Shanba va yakshanba kunlari ham qabul ochiq
                </p>
              </div>
            </div>

            {/* Parking & Amenities */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-3 text-xs text-blue-900 font-medium">
              <Car className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Bemorlarimiz uchun klinika ro‘parasida bepul keng avtoturargoh mavjud.</span>
            </div>

          </div>

          {/* Right Map View & Directions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex-1 min-h-[380px]">
              {/* Yandex Map Iframe Embed for Dr Xamraev Clinic */}
              <iframe
                title="Dr Xamraev Dental Clinic Samarqand Xaritasi"
                src="https://yandex.uz/map-widget/v1/?ll=66.995339%2C39.690100&z=16&pt=66.995339,39.690100,pm2rdm"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
              />

              {/* Floating Overlay Button */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10">
                <a
                  href="https://yandex.uz/maps/org/dr_xamraev/37346829323/prices/?ll=66.995339%2C39.690100&z=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200 text-navy-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all group"
                >
                  <Navigation className="w-4 h-4 text-blue-600 group-hover:text-white" />
                  <span>Yandex Xaritada marshrut ochish</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
