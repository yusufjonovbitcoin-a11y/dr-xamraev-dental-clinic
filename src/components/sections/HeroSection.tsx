'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  PhoneCall, 
  Award,
  Zap
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Certification Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-6">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Germaniya & Shveysariya standartlari
              </span>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.9 (450+ baholar)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12] mb-6">
              Mukammal tabassum. <br />
              <span className="text-gradient">Sog‘lom tishlar.</span> <br />
              Mutlaqo og‘riqsiz.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mb-8">
              Samarqanddagi eng zamonaviy raqamli stomatologiya klinikasi. Biz eng yangi 3D texnologiyalar, jahon andozalaridagi implantatsiya va xalqaro tajribaga ega shifokorlar bilan tishlaringiz go‘zalligini tiklaymiz.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenBooking()}
                className="btn-primary text-base py-4 px-8 shadow-xl shadow-blue-600/25 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Qabulga yozilish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#results"
                className="btn-secondary text-base py-4 px-7 flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Natijalarni ko‘rish (Oldin / Keyin)</span>
              </a>
            </div>

            {/* Trust Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Bepul 3D maslahat
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  100% Og‘riqsiz muolaja
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  10 yil rasmiy kafolat
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with Doctor & Floating Badges */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative frame */}
            <div className="relative mx-auto max-w-[440px] lg:max-w-none">
              
              {/* Main Photo Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/15 border-4 border-white bg-slate-100 aspect-[4/5]">
                <Image
                  src="./images/doctor-hero.jpg"
                  alt="Dr. Xamraev Dental Clinic Bosh shifokori"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                
                {/* Photo caption tag */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-1">
                    Samarqandning ishonchli klinikasi
                  </p>
                  <p className="text-base font-bold font-heading">
                    Dr. Xamraev Stomatologiya Markazi
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Experience (Top-Left) */}
              <motion.div
                className="absolute -top-5 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100/80 flex items-center gap-3.5 z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-blue-500/30">
                  12+
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Klinika tajribasi</div>
                  <div className="text-sm font-bold text-navy-900 font-heading">Yillik muvaffaqiyat</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Happy Patients (Bottom-Right) */}
              <motion.div
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100/80 flex items-center gap-3.5 z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-emerald-500/30">
                  10k+
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Bemorlar ishonchi</div>
                  <div className="text-sm font-bold text-navy-900 font-heading">Minnatdor tabassum</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Painless Tech (Top-Right) */}
              <motion.div
                className="hidden sm:flex absolute top-1/3 -right-6 bg-navy-900/90 text-white backdrop-blur-md rounded-xl py-2.5 px-3.5 shadow-lg border border-navy-700/50 items-center gap-2 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold">Germaniya anesteziyasi</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
