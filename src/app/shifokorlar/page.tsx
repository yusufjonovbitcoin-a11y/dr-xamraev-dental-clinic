'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { assetPath } from '@/utils/assets';

const doctorProfiles = [
  {
    name: 'Dr. Xamraev',
    role: 'Klinika asoschisi & Bosh jarroh-implantolog',
    image: assetPath('/images/doctor-xamraev.jpg'),
    experience: '15 yillik amaliy tajriba',
    patientsTreated: '6 000+ muvaffaqiyatli implantlar',
    specialties: [
      'Murakkab va darhol yuklamali tish implantatsiyasi',
      'All-on-4 va All-on-6 to‘liq jag‘ni tiklash protokollari',
      'Suyak to‘qimasini o‘stirish (Sinus-lifting va suyak plastikasi)',
      'Digital navigatsion shablonlar asosidagi operatsiyalar'
    ],
    education: [
      'Samarqand Davlat Tibbiyot Instituti (Qizil diplom)',
      'Germaniya (Frankfurt) Xalqaro Implantologiya Markazi rezidenti',
      'Xalqaro Implantologlar Jamiyati (ITI — Shveysariya) faol aʼzosi'
    ],
    schedule: 'Dushanba — Shanba: 09:00 — 18:00'
  },
  {
    name: 'Dr. Zulfiya Karimova',
    role: 'Bosh ortodont & Estetik stomatolog',
    image: assetPath('/images/doctor-karimova.jpg'),
    experience: '9 yillik amaliy tajriba',
    patientsTreated: '2 500+ go‘zal tabassumlar',
    specialties: [
      'Shaffof elaynerlar (Spark, Invisalign) orqali tish tekislash',
      'Damon samoligirlanuvchi mini-breket tizimlari',
      'E-max ultra-yupqa keramika vinirlari',
      'Philips Zoom 4 lazerli professional oqartirish'
    ],
    education: [
      'Toshkent Davlat Stomatologiya Instituti magistraturasi',
      'Janubiy Koreya (Seul) Estetik Ortodontiya kursi',
      'Butunjahon Ortodontlar Federatsiyasi (WFO) sertifikati'
    ],
    schedule: 'Seshanba — Yakshanba: 09:00 — 17:00'
  },
  {
    name: 'Dr. Aziz Rustamov',
    role: 'Terapevt-mikroskopist & Bolalar stomatologi',
    image: assetPath('/images/doctor-rustamov.jpg'),
    experience: '8 yillik amaliy tajriba',
    patientsTreated: '3 500+ sog‘lomlashtirilgan tishlar',
    specialties: [
      'Carl Zeiss operatsion mikroskopi ostida kanallarni davolash',
      'Badiiy anatomik restavratsiya va tish emalini tiklash',
      'Bolalar uchun psixologik qo‘rquvsiz og‘riqsiz muolaja',
      'Air Flow profilaktik chuqur gigiyena'
    ],
    education: [
      'Samarqand Davlat Tibbiyot Universiteti',
      'Germaniya Carl Zeiss mikroskopiya amaliy akademiyasi',
      'Yevropa Bolalar Stomatologlari Assotsiatsiyasi (EAPD) amaliyotchisi'
    ],
    schedule: 'Har kuni: 08:30 — 19:00'
  }
];

export default function DoctorsPage() {
  const { openBooking } = useBooking();

  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Award className="w-3.5 h-3.5" />
            Bizning Mutaxassislar
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Samarqandning Eng Tajribali <br />
            <span className="text-gradient">Stomatolog Shifokorlari</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Bizning jamoa — Germaniya, Shveysariya va AQSHda muntazam malaka oshirib, xalqaro litsenziyalarga ega bo‘lgan o‘z sohasining yetakchi amaliyotchilaridir.
          </p>
        </div>

        {/* Detailed Doctors List */}
        <div className="space-y-12 mb-20 max-w-5xl mx-auto">
          {doctorProfiles.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Photo & Quick Stats */}
                <div className="md:col-span-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-100">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-navy-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-center text-xs font-bold shadow">
                      {doc.experience}
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-100 text-center text-xs text-blue-800 font-semibold">
                    {doc.patientsTreated}
                  </div>
                </div>

                {/* Bio, Specialties, Education */}
                <div className="md:col-span-8 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">
                      {doc.name}
                    </h3>
                    <div className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider mb-6">
                      {doc.role}
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2.5">
                        Asosiy ixtisoslik yo‘nalishlari:
                      </span>
                      <div className="space-y-1.5">
                        {doc.specialties.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education & Certs */}
                    <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Taʼlim va xalqaro sertifikatlar:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {doc.education.map((edu, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2">
                            <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Schedule & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{doc.schedule}</span>
                    </div>

                    <button
                      onClick={() => openBooking(undefined, doc.name)}
                      className="btn-primary py-3 px-6 text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{doc.name} qabuliga yozilish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
