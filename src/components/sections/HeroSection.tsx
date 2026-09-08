'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Check, MapPin, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { assetPath } from '@/utils/assets';

interface HeroSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

const benefits = [
  'Birlamchi ko‘rik va aniq davolash rejasi',
  'Zamonaviy raqamli diagnostika',
  'Davolashdan oldin tushunarli narx',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => (
  <section className="relative overflow-hidden bg-navy-950 text-white">
    <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />
    <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

    <div className="container-custom relative grid min-h-[720px] grid-cols-1 items-center gap-14 py-16 lg:grid-cols-12 lg:py-20">
      <motion.div
        className="lg:col-span-7 lg:pr-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Samarqand • qabul har kuni
        </div>
        <h1 className="max-w-4xl font-heading text-[2.75rem] font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-[4.65rem]">
          Sog‘lom tabassum — <span className="text-blue-300">o‘zingizga bo‘lgan ishonch.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Dr. Xamraev klinikasida diagnostikadan yakuniy natijagacha bo‘lgan barcha bosqichlar bir joyda. Har bir qaror siz bilan maslahatlashib qabul qilinadi.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button onClick={() => onOpenBooking()} className="btn-primary gap-3 px-7 py-4 text-base">
            <Calendar className="h-5 w-5" /> Ko‘rikka yozilish <ArrowRight className="h-4 w-4" />
          </button>
          <a href="tel:+998933313333" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 text-base font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.11]">
            <PhoneCall className="h-5 w-5 text-blue-300" /> +998 93 331-33-33
          </a>
        </div>
        <ul className="mt-10 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-400/15 text-blue-300"><Check className="h-3.5 w-3.5" /></span>
              {benefit}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="relative lg:col-span-5"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative mx-auto aspect-[4/5] max-w-[470px] overflow-hidden rounded-[2.25rem] border border-white/15 bg-slate-800 shadow-[0_40px_100px_-28px_rgba(0,0,0,.75)]">
          <Image src={assetPath('/images/doctor-hero.jpg')} alt="Dr. Xamraev klinikasi shifokori" fill priority sizes="(max-width: 1024px) 90vw, 38vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-200"><ShieldCheck className="h-4 w-4" /> Raqamli stomatologiya markazi</div>
            <p className="font-heading text-2xl font-semibold">Dr. Xamraev Dental Clinic</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-300"><MapPin className="h-4 w-4" /> Samarqand shahri</p>
          </div>
        </div>
        <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl border border-white/15 bg-white p-4 text-navy-950 shadow-2xl sm:-left-8">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700"><Sparkles className="h-5 w-5" /></div>
          <div><p className="text-xs font-medium text-slate-500">Individual yondashuv</p><p className="font-heading text-sm font-bold">Har bir tabassum uchun</p></div>
        </div>
      </motion.div>
    </div>
  </section>
);
