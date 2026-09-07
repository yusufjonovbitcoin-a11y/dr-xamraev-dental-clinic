'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenBooking: (doctorName?: string) => void;
}

const doctors = [
  {
    name: 'Dr. Xamraev',
    role: 'Klinika asoschisi & Bosh implantolog',
    image: './images/doctor-xamraev.jpg',
    experience: '15 yillik amaliyot',
    specialty: 'Murakkab implantatsiya, suyak plastikasi, All-on-4 / All-on-6',
    education: 'Yevropa Implantologlar Assotsiatsiyasi (ITI) aʼzosi',
    badge: 'Bosh mutaxassis'
  },
  {
    name: 'Dr. Zulfiya Karimova',
    role: 'Yetakchi ortodont & Estetist',
    image: './images/doctor-karimova.jpg',
    experience: '9 yillik amaliyot',
    specialty: 'Shaffof elaynerlar, Damon breket tizimi, E-max vinirlar',
    education: 'Xalqaro Ortodontlar Jamiyati (WFO) sertifikati',
    badge: 'Ortodontiya yetakchisi'
  },
  {
    name: 'Dr. Aziz Rustamov',
    role: 'Terapevt & Mikroskopist',
    image: './images/doctor-rustamov.jpg',
    experience: '8 yillik amaliyot',
    specialty: 'Mikroskopik endodontiya, badiiy restavratsiya, bolalar stomatologiyasi',
    education: 'Germaniya Carl Zeiss mikroskopiya akademiyasi',
    badge: 'Mikroskop ustasi'
  }
];

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctors" className="py-24 bg-slate-50 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              Mutaxassislarimiz
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Sizning salomatligingiz — <br />
              <span className="text-gradient">ishonchli qo‘llarda</span>
            </h2>
          </div>

          <p className="text-slate-600 max-w-md text-base leading-relaxed">
            Shifokorlarimiz xalqaro anjumanlar spikeri, Germaniya va Shveysariyada muntazam malaka oshirgan tajribali professionallardir.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/70 transition-all flex flex-col group"
            >
              {/* Doctor Portrait Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4 bg-navy-900/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {doc.badge}
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-navy-900 px-3 py-1 rounded-xl text-xs font-bold shadow-md">
                  {doc.experience}
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-1">
                    {doc.name}
                  </h3>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-4">
                    {doc.role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    <strong className="text-slate-800 font-semibold block mb-1">Ixtisoslashuvi:</strong>
                    {doc.specialty}
                  </p>

                  <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-6">
                    <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{doc.education}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(`${doc.name} qabuli`)}
                  className="w-full py-3 rounded-2xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{doc.name} qabuliga yozilish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
