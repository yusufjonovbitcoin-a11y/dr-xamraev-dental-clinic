'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HeroSection 
} from '@/components/sections/HeroSection';
import { 
  TrustStats 
} from '@/components/sections/TrustStats';
import { 
  WhyChooseUs 
} from '@/components/sections/WhyChooseUs';
import { 
  ReviewsSection 
} from '@/components/sections/ReviewsSection';
import { 
  AppointmentCta 
} from '@/components/sections/AppointmentCta';
import { useBooking } from '@/context/BookingContext';
import { 
  Stethoscope, 
  Sparkles, 
  Users, 
  Cpu, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

const portals = [
  {
    title: 'Xizmatlar va Narxlar',
    badge: '8 ta yo‘nalish',
    description: 'Tish implantatsiyasi, E-max vinirlar, Zoom 4 oqartirish, breketlar va bolalar qabuli. Barcha narxlar va bosqichlar.',
    href: '/xizmatlar',
    icon: Stethoscope,
    color: 'from-blue-600 to-cyan-600',
    linkText: 'Narxlar bilan tanishish'
  },
  {
    title: 'Natijalar (Oldin va Keyin)',
    badge: '50/50 Interaktiv',
    description: 'Bemorlarimizning haqiqiy davolash natijalarini slayder orqali o‘zingiz solishtiring va ishonch hosil qiling.',
    href: '/natijalar',
    icon: Sparkles,
    color: 'from-cyan-500 to-teal-600',
    linkText: 'Natijalarni ko‘rish'
  },
  {
    title: 'Bizning Shifokorlarimiz',
    badge: 'Xalqaro toifa',
    description: 'Dr. Xamraev boshchiligidagi 15 yillik tajribaga ega yetakchi implantolog, ortodont va mikroskopistlar jamoasi.',
    href: '/shifokorlar',
    icon: Users,
    color: 'from-blue-700 to-indigo-700',
    linkText: 'Shifokorlar portfoliosi'
  },
  {
    title: 'Ilg‘or Texnologiyalar',
    badge: 'Germaniya & Shveysariya',
    description: '3D kompyuter tomografiyasi, 100% og‘riqsiz STA anesteziya, Carl Zeiss mikroskoplari va Melag sterilligi.',
    href: '/texnologiyalar',
    icon: Cpu,
    color: 'from-indigo-600 to-blue-600',
    linkText: 'Uskunalarni ko‘rish'
  },
  {
    title: 'Aloqa va Manzil',
    badge: 'Samarqand markazi',
    description: 'Samarqand avtoshohbekati yonida. Har kuni 08:30 dan 20:00 gacha. Interaktiv Yandex xarita va yo‘nalish.',
    href: '/aloqa',
    icon: MapPin,
    color: 'from-teal-600 to-emerald-600',
    linkText: 'Xarita va marshrut'
  }
];

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* 1. Hero Section with Interactive WebGL Shader */}
      <HeroSection onOpenBooking={(s) => openBooking(s)} />

      {/* 2. Key Numbers & Trust Stats */}
      <TrustStats />

      {/* 3. Portals / Section Navigation Cards */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Klinika Bo‘limlari
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                Kerakli bo‘limni tanlang
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
              Klinikamiz haqidagi batafsil maʼlumotlar, aniq narxlar, shifokorlar va natijalar alohida qulay sahifalarga ajratilgan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portals.map((portal, idx) => {
              const Icon = portal.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${portal.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {portal.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {portal.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {portal.description}
                    </p>
                  </div>

                  <Link
                    href={portal.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 group-hover:text-blue-700 pt-4 border-t border-slate-100 transition-colors"
                  >
                    <span>{portal.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us (6 Core Pillars) */}
      <WhyChooseUs />

      {/* 5. Authentic Patient Reviews */}
      <ReviewsSection />

      {/* 6. Quick Appointment CTA with Shader */}
      <AppointmentCta onOpenBooking={() => openBooking()} />
    </>
  );
}
