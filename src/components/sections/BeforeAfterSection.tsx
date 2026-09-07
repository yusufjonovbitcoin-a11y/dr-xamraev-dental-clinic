'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { Sparkles, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

const cases = [
  {
    id: 'whitening',
    tabName: 'Zoom 4 Oqartirish',
    title: 'Professional Lazerli Oqartirish Natijasi',
    beforeImage: './images/teeth-before.jpg',
    afterImage: './images/teeth-after.jpg',
    category: 'Estetik stomatologiya',
    timeSpent: '45 daqiqa (1 seans)',
    shadeImprovement: '8 ton yorqinroq',
    description: 'Bemor choy, kofe va yoshga doir sarg‘ayishdan shikoyat qilgan edi. Philips Zoom 4 texnologiyasi orqali emal tuzilishiga mutlaqo ziyon yetkazmagan holda tishlarga tabiiy marvarid jilosi va oqlik qaytarildi.',
    doctor: 'Dr. Z. Karimova'
  },
  {
    id: 'veneers',
    tabName: 'E-max Vinirlari',
    title: 'Estetik Keramika Vinirlari Bilan Gollivud Tabassumi',
    beforeImage: './images/veneers-before.jpg',
    afterImage: './images/veneers-after.jpg',
    category: 'Ortopediya & Vinirlar',
    timeSpent: '5 kun (2 tashrif)',
    shadeImprovement: 'Mukammal simmetriya',
    description: 'Bemor oldingi tishlar orasidagi noxush tirqish (diastema) va emal yemirilishidan noqulaylik sezardi. Ultra-yupqa 0.3 mm E-max keramika vinirlari yordamida tabassum butunlay o‘zgartirildi.',
    doctor: 'Dr. Xamraev'
  }
];

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState(cases[0].id);

  const currentCase = cases.find(c => c.id === activeTab) || cases[0];

  return (
    <section id="results" className="py-24 bg-white relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            Haqiqiy Klinik Natijalar
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Bemorlarimizning <br />
            <span className="text-gradient">Oldin va Keyin</span> natijalari
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Surat ustidagi slayderni chapga-o‘ngga surib, davolash natijalarini 50/50 rejimida o‘zingiz solishtiring va ishonch hosil qiling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === c.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {c.tabName}
            </button>
          ))}
        </div>

        {/* Comparison Showcase */}
        <motion.div
          key={currentCase.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 50/50 Draggable Slider */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={currentCase.beforeImage}
                afterImage={currentCase.afterImage}
                alt={currentCase.title}
                aspectRatio="aspect-[4/3]"
              />
              <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                👆 Slayderni ikki tomonga suring (Oldin / Keyin)
              </p>
            </div>

            {/* Right: Case Details & Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-2.5 py-1 rounded-full">
                  {currentCase.category}
                </span>

                <h3 className="font-heading text-2xl font-bold text-navy-900 mt-3 mb-3">
                  {currentCase.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {currentCase.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/70 shadow-sm">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>Muolaja vaqti</span>
                    </div>
                    <div className="font-bold text-navy-900 text-sm">
                      {currentCase.timeSpent}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/70 shadow-sm">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Erishilgan natija</span>
                    </div>
                    <div className="font-bold text-navy-900 text-sm">
                      {currentCase.shadeImprovement}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Amaliyotchi shifokor: <strong className="text-navy-900 font-semibold">{currentCase.doctor}</strong></span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(currentCase.tabName)}
                className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Xuddi shunday natija olish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
