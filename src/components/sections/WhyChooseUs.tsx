'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Clock, 
  BadgePercent, 
  MapPin, 
  CheckCircle2, 
  Zap,
  Activity
} from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: '100% Og‘riqsiz muolaja',
    description: 'Biz AQSH va Germaniyaning kompyuter nazorati ostidagi inesiz anesteziya tizimlaridan foydalanamiz. Davolash paytida na igna sanchilishi, na yoqimsiz bosim seziladi.',
    color: 'text-amber-500 bg-amber-50',
  },
  {
    icon: Award,
    title: 'Xalqaro uskunalar & Materiallar',
    description: 'Barcha implant va qoplamalar Shveysariya (Straumann), Germaniya (Ivoclar, Sirona) va Janubiy Koreya brendlarining asl sertifikatlangan materiallaridir.',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: '10 yillik rasmiy kafolat',
    description: 'Har bir o‘rnatilgan implant va ortopedik konstruktsiyaga klinikadan rasmiy muhrlangan kafolat pasporti taqdim etiladi.',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: Activity,
    title: 'Yevropa EN 13060 sterilligi',
    description: 'Melag nemis avtoklavlari yordamida 6 bosqichli sterilizatsiya. Barcha asboblar bemor huzurida shaxsiy vakuum paketidan ochiladi.',
    color: 'text-cyan-600 bg-cyan-50',
  },
  {
    icon: BadgePercent,
    title: 'Shaffof va qatʼiy narxlar',
    description: 'Konsultatsiyadan so‘ng davolash rejasi tuziladi va umumiy narx qatʼiy belgilanadi. Jarayon davomida hech qanday yashirin yoki kutilmagan to‘lovlar bo‘lmaydi.',
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    icon: MapPin,
    title: 'Qulay manzil & Avtoturargoh',
    description: 'Samarqand shahri, Oydin yo‘l ko‘chasi 1-uy. Samarqand avtoshohbekati yonida, qulay transport qatnovi va klinika oldida bepul keng avtoturargoh.',
    color: 'text-rose-600 bg-rose-50',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            Nega Aynan Biz?
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Bemorlarimiz bizni tanlashining <br />
            <span className="text-gradient">6 ta asosiy sababi</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Biz shunchaki tishlarni davolamaymiz — biz xalqaro tibbiy etika, samimiy g‘amxo‘rlik va uzoq yillik sog‘lom natijani kafolatlaymiz.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
