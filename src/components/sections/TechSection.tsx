'use client';
import { assetPath } from '@/utils/assets';
import { ShaderBackground } from '@/components/ui/ShaderBackground';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Scan, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

const technologies = [
  {
    icon: Scan,
    title: '3D Konus-Nurli Tomografiya',
    subtitle: 'Raqamli Diagnostika',
    description: 'Tish va jag‘ suyaklarining 3D modelini 0.1 mm aniqlikda chiqaruvchi eng so‘nggi avlod tomografi. 90% kam nurlanish va 14 soniyada to‘liq natija.',
    badge: 'HD 3D Aniqlik'
  },
  {
    icon: Sparkles,
    title: 'Digital Smile Design (DSD)',
    subtitle: 'Raqamli Tabassum Dizayni',
    description: 'Muolaja boshlanishidan avval yuzingiz proporsiyasiga ideal mos keladigan tishlar shakli va rangini kompyuterda 3D ko‘rish va tasdiqlash imkoniyati.',
    badge: 'Kafolatlangan Estetika'
  },
  {
    icon: Cpu,
    title: 'STA Kompyuter Anesteziyasi',
    subtitle: '100% Og‘riqsizlantirish',
    description: 'Inesiz va bosimsiz mikro-injeksiya tizimi. Dori to‘g‘ridan-to‘g‘ri tish tomiriga mikro-dozada yetkaziladi — lab yoki til uyushib noqulaylik tug‘dirmaydi.',
    badge: 'Og‘riqsiz Davo'
  },
  {
    icon: Eye,
    title: 'Carl Zeiss Mikroskoplari',
    subtitle: 'Germaniya Optikasi',
    description: '25 barobargacha optik kattalashtirish yordamida tish kanallaridagi eng mayda mikroyoriqlarni topish va tishni sug‘urmasdan saqlab qolish.',
    badge: '25x Kattalashtirish'
  },
];

export const TechSection: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Interactive WebGL Mesh Drift Shader Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ShaderBackground className="w-full h-full" palette="dental" speed={-0.3} />
      </div>
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Ilg‘or Texnologiyalar
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Eng so‘nggi jahon texnologiyalari — <br />
            <span className="text-gradient">xavfsiz va og‘riqsiz davolash</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Biz bemorlarimizga tasodifiy tajribalar emas, balki Germaniya, Shveysariya va AQSHning tasdiqlangan raqamli stomatologik protokollarini taqdim etamiz.
          </p>
        </div>

        {/* Feature showcase: Large photo banner + Tech Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Clinic Equipment Visual */}
          <motion.div 
            className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-navy-800 shadow-2xl bg-navy-900 group aspect-[16/10]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={assetPath("/images/clinic-room.jpg")}
              alt="Dr. Xamraev Stomatologiya Xonasi va Texnikasi"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                Yevropa EN 13060 Standarti
              </div>
              <h4 className="text-xl font-bold font-heading text-white">
                Melag 6-bosqichli to‘liq sterilizatsiya
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Har bir asbob bemor ko‘z o‘ngida maxsus vakuumli steril paketdan ochiladi. 100% xavfsizlik kafolati.
              </p>
            </div>
          </motion.div>

          {/* Grid of 4 Tech features */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-blue-500/40 hover:bg-navy-900 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-800/60">
                      {tech.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-base font-bold font-heading text-white mb-1">
                    {tech.title}
                  </h4>
                  <div className="text-[11px] font-medium text-blue-400 mb-2">
                    {tech.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
