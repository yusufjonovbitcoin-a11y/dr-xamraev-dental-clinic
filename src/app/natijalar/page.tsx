'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { Sparkles, CheckCircle2, Clock, Calendar, ArrowRight, UserCheck, Star } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { assetPath } from '@/utils/assets';

const clinicalCases = [
  {
    id: 'whitening',
    title: 'Zoom 4 Oqartirish — 8 Ton Yorqinroq Marvarid Tabassum',
    category: 'Estetik stomatologiya',
    beforeImage: assetPath('/images/teeth-before.jpg'),
    afterImage: assetPath('/images/teeth-after.jpg'),
    doctor: 'Dr. Zulfiya Karimova',
    doctorRole: 'Yetakchi ortodont & Estetist',
    patientAge: '28 yosh',
    duration: '45 daqiqa (1 seans)',
    result: '8 ton tabiiy oqlik',
    warranty: '2-3 yil barqarorlik',
    problem: 'Bemor choy, kofe va yoshga doir sarg‘ayish tufayli tabassum qilishdan tortinar edi. Emal qalinligi meʼyorida bo‘lgani sababli Zoom 4 sovuq LED nurlanishi tanlandi.',
    solution: '45 daqiqalik yagona seansda tish emalining tabiiy tuzilishiga zarar bermagan holda chuqur pigmentlar neytrallandi va ftor-mineral bilan emal mustahkamlandi.'
  },
  {
    id: 'veneers',
    title: 'E-max Keramika Vinirlari — Gollivud Tabassumi',
    category: 'Premium Ortopediya',
    beforeImage: assetPath('/images/veneers-before.jpg'),
    afterImage: assetPath('/images/veneers-after.jpg'),
    doctor: 'Dr. Xamraev',
    doctorRole: 'Klinika asoschisi & Bosh mutaxassis',
    patientAge: '34 yosh',
    duration: '5 kun (2 ta tashrif)',
    result: 'Mukammal simmetriya va shakl',
    warranty: '15 yillik rasmiy kafolat',
    problem: 'Bemor oldingi tishlar orasidagi noxush tirqish (diastema) hamda emal yemirilishidan ko‘p yillar davomida noqulaylik sezgan.',
    solution: 'Digital Smile Design texnologiyasi orqali bemorning yuz proporsiyasiga ideal mos tushuvchi 0.3 mm ultra-yupqa Shveysariya E-max vinirlari o‘rnatildi.'
  }
];

export default function ResultsPage() {
  const [selectedCase, setSelectedCase] = useState(clinicalCases[0].id);
  const { openBooking } = useBooking();

  const current = clinicalCases.find(c => c.id === selectedCase) || clinicalCases[0];

  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            Haqiqiy Bemorlar Portfolio
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Bemorlarimiz Natijalari: <br />
            <span className="text-gradient">Oldin va Keyin (50/50)</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Biz soxta vaʼdalar bermaymiz. Quyidagi interaktiv slayderni o‘zingiz surib, Dr. Xamraev klinikasidagi amaliy natijalarni ko‘zdan kechiring.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {clinicalCases.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCase(c.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                selectedCase === c.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
              }`}
            >
              {c.category}: {c.id === 'whitening' ? 'Zoom 4 Oqartirish' : 'E-max Vinirlari'}
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl max-w-5xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* 50/50 Slider */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={current.beforeImage}
                afterImage={current.afterImage}
                alt={current.title}
                aspectRatio="aspect-[4/3]"
              />
              <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                👆 Chiziqni ikki tomonga surib natijani solishtiring (Oldin / Keyin)
              </p>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {current.category}
                </span>

                <h3 className="font-heading text-2xl font-bold text-navy-900 mt-3 mb-4">
                  {current.title}
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">Muolaja davomiyligi:</span>
                    <strong className="text-sm text-navy-900 font-bold">{current.duration}</strong>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">Natija darajasi:</span>
                    <strong className="text-sm text-blue-600 font-bold">{current.result}</strong>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-xs text-slate-600">
                  <p>
                    <strong className="text-slate-800 font-semibold block mb-1">Dastlabki shikoyat:</strong>
                    {current.problem}
                  </p>
                  <p>
                    <strong className="text-slate-800 font-semibold block mb-1">Qo‘llangan yechim:</strong>
                    {current.solution}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-3 text-xs mb-8">
                  <UserCheck className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">Amaliyotchi shifokor:</span>
                    <strong className="text-navy-900 font-bold">{current.doctor}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openBooking(current.category)}
                className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25"
              >
                <Calendar className="w-4 h-4" />
                <span>Xuddi shunday natijaga erishish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

        {/* Quality Guarantee Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-navy-900 via-navy-950 to-blue-950 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-navy-800">
          <Sparkles className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Sizning ham tabassumingiz shunday bo‘lishi mumkin
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Dastlabki bepul 3D tahlilda shifokorimiz sizning tishlaringiz uchun eng mos va samarali usulni tanlab beradi.
          </p>
          <button
            onClick={() => openBooking('Bepul tabassum tahlili')}
            className="btn-primary py-3.5 px-8 text-sm"
          >
            Bepul ko‘rikka yozilish
          </button>
        </div>

      </div>
    </div>
  );
}
