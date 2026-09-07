'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Scan, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Calendar, 
  ArrowRight 
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { assetPath } from '@/utils/assets';

const techList = [
  {
    icon: Scan,
    title: '3D Konus-Nurli Kompyuter Tomografiyasi',
    country: 'Germaniya',
    subtitle: 'Raqamli 3D Diagnostika',
    description: 'Jag‘ suyagi balandligi, qalinligi va nerv tolalari joylashuvini 0.1 mm gacha aniqlikda ko‘rsatuvchi eng so‘nggi avlod apparati. Nurlanish dozasi oddiy rentgenga qaraganda 90% past, tahlil esa 14 soniyada tayyor bo‘ladi.',
    benefits: ['Mikroskopik aniqlik', '90% kamroq nurlanish', 'Implantatsiyada 100% xavfsiz reja']
  },
  {
    icon: Cpu,
    title: 'STA Kompyuter Anesteziya Tizimi',
    country: 'AQSH (Milestone Scientific)',
    subtitle: 'Inesiz va Og‘riqsiz Davo',
    description: 'Inyeksiya bosimini va dori dozasini mikroprotsessor nazorat qiladi. Bemor na igna sanchilishini, na dori kirayotganini sezadi. Eng muhimi — faqat davolanayotgan bitta tish og‘riqsizlantiriladi, lab yoki til uyushib noqulaylik qilmaydi.',
    benefits: ['Qo‘rqmasdan davolanish', 'Til va lab uyushib qolmaydi', 'Bolalar va sezuvchan bemorlar uchun ideal']
  },
  {
    icon: Eye,
    title: 'Carl Zeiss Stomatologik Mikroskopi',
    country: 'Germaniya',
    subtitle: '25x Optik Kattalashtirish',
    description: 'Inson ko‘zi ilg‘amaydigan eng nozik ildiz kanallarini va mikroyoriqlarni 25 barobar kattalashtirib ko‘rish imkonini beradi. Boshqa joylarda sug‘urishga hukm qilingan tishlarni ham asrab qolish imkoniyati.',
    benefits: ['Tishni sug‘urmasdan saqlash', 'Kanalni to‘liq steril tozalash', 'Badiiy restavratsiyada mikron aniqlik']
  },
  {
    icon: ShieldCheck,
    title: 'Melag 6-Bosqichli Vakuumli Avtoklav',
    country: 'Germaniya',
    subtitle: 'Yevropa EN 13060 Gigiyena Standarti',
    description: 'Har bir stomatologik asbob avval ultratovushda yuviladi, so‘ng dezinfeksiya qilinadi va individual vakuum paketiga muhrlanib 134°C bosim ostida sterilizatsiyadan o‘tadi. Paket faqat bemor ko‘z o‘ngida ochiladi.',
    benefits: ['100% infeksiyalardan himoya', 'Individual vakuum paketlar', 'Bemor ko‘z o‘ngida ochilish']
  },
  {
    icon: Layers,
    title: 'Sirona CAD/CAM Raqamli Frezerlash',
    country: 'Germaniya',
    subtitle: 'Robotlashtirilgan Protezlash',
    description: 'Noqulay loy qoliplar o‘rniga og‘iz bo‘shlig‘i raqamli 3D skanerlanadi va nemis frezer robotida 15 daqiqada monolit tsirkoniy yoki keramika toj yo‘niladi.',
    benefits: ['Bir kunda tayyor bo‘lish', 'Og‘izda mikron darajadagi moslik', 'Allergiyasiz biomos material']
  },
  {
    icon: Activity,
    title: 'EMS Air Flow Nozik Tozalash',
    country: 'Shveysariya',
    subtitle: 'Yumshoq Professional Profilaktika',
    description: 'Eritritol asosidagi nozik kukun va iliq suv oqimi yordamida tish to‘qimasini tirnamasdan qahva dog‘lari va karies bakteriyalarini butkul bartaraf qiladi.',
    benefits: ['Emal tirnalmaydi', 'Milk qonashini to‘xtatadi', 'Tabiiy yorqin jilo']
  }
];

export default function TechPage() {
  const { openBooking } = useBooking();

  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Cpu className="w-3.5 h-3.5" />
            Yevropa Standartlari
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Germaniya va Shveysariya <br />
            <span className="text-gradient">Ilg‘or Texnologiyalari</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Biz bemorlarimizga tavakkal tajribalar emas, balki dunyoning yetakchi stomatologiya institutlari tomonidan tasdiqlangan eng xavfsiz va og‘riqsiz protokollarni taqdim etamiz.
          </p>
        </div>

        {/* Large Visual Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-16 aspect-[16/8] max-w-5xl mx-auto group">
          <img
            src={assetPath('/images/clinic-room.jpg')}
            alt="Dr. Xamraev Stomatologiya Xonasi"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-white">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-2">
              Dr. Xamraev Klinikasining Davolash zali
            </span>
            <h3 className="font-heading text-xl sm:text-3xl font-extrabold mb-2">
              Ergonomik qulaylik va mutlaq sterillik uyg‘unligi
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Har bir davolash xonasi havoni bakteriyalardan tozalovchi HEPA filtrlar va mikroblarga qarshi maxsus tibbiy qoplamalar bilan jihozlangan.
            </p>
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {techList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {item.country}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {item.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Consultation Action */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3">
            Ushbu zamonaviy apparatlarda ko‘rikdan o‘tishni xohlaysizmi?
          </h3>
          <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
            Dastlabki 3D tomografiya tahlili va bosh shifokor maslahatiga hoziroq onlayn yoziling.
          </p>
          <button
            onClick={() => openBooking('3D Tomografiya Konsultatsiyasi')}
            className="px-8 py-3.5 rounded-2xl bg-white text-blue-700 font-bold text-sm shadow-lg hover:bg-slate-50 transition-all inline-flex items-center gap-2"
          >
            <span>Qabulga yozilish</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
