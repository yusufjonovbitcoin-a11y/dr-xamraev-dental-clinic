'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Stethoscope, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '12+',
    label: 'Yillik tajriba',
    subtext: 'Samarqandda uzluksiz mukammal xizmat',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Users,
    value: '10 000+',
    label: 'Mamnun bemorlar',
    subtext: 'Sog‘lom va baxtli tabassum egalari',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Stethoscope,
    value: '25+',
    label: 'Malakali shifokorlar',
    subtext: 'Xalqaro toifadagi tor soha mutaxassislari',
    color: 'from-blue-600 to-teal-600',
  },
  {
    icon: Sparkles,
    value: '99.4%',
    label: 'Muvaffaqiyatli implant',
    subtext: 'Shveysariya & Koreya standartlari',
    color: 'from-emerald-500 to-teal-600',
  },
];

export const TrustStats: React.FC = () => {
  return (
    <section className="py-12 bg-white relative z-10 border-y border-slate-100 shadow-sm">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl transition-colors hover:bg-slate-50/80"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-800 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 max-w-[180px] leading-relaxed">
                  {item.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
