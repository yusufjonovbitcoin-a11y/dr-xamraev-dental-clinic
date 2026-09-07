'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Clock,
  Layers,
  Smile,
  HeartPulse,
  Flame,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

const services = [
  {
    id: 'implant',
    category: 'Jarrohlik & Tiklash',
    title: 'Tish Implantatsiyasi',
    description: 'Yo‘qotilgan tishlarni Shveysariya (Straumann) va Janubiy Koreya (Osstem) tizimlari yordamida umrbod tiklash. Tabiiy ko‘rinish va mustahkamlik.',
    price: '2 500 000',
    popular: true,
    features: [
      'Bir kunda yangi tish (Navigatsion jarrohlik)',
      '100% og‘riqsiz kompyuter anesteziyasi',
      'Umrbod ishlab chiqaruvchi kafolati'
    ],
    badge: 'Eng ko‘p tanlangan',
  },
  {
    id: 'veneers',
    category: 'Premium Estetika',
    title: 'E-max Vinirlari',
    description: 'Gollivud tabassumi. Shveysariya Ivoclar keramikasi asosidagi 0.3 mm ultra-yupqa vinirlar bilan mukammal shakl va oqlik.',
    price: '1 800 000',
    popular: false,
    features: [
      'Digital Smile Design (avval natijani ko‘rish)',
      'Tish to‘qimasini minimal yo‘nish',
      'Rangini hech qachon yo‘qotmaydi'
    ],
    badge: 'Gollivud tabassumi',
  },
  {
    id: 'whitening',
    category: 'Estetika',
    title: 'Zoom 4 Oqartirish',
    description: 'Amerikaning Philips Zoom 4 texnologiyasi. Emalga zarar yetkazmasdan atigi 45 daqiqada 8 tongacha tabiiy va yorqin oqlik.',
    price: '1 200 000',
    popular: false,
    features: [
      'Sovuq LED nuri (emal qizib ketmaydi)',
      '45 daqiqalik yagona seans',
      'Natija 2-3 yil davomida saqlanadi'
    ],
    badge: 'Tezkor natija',
  },
  {
    id: 'braces',
    category: 'Ortodontiya',
    title: 'Breketlar & Elaynerlar',
    description: 'Har qanday yoshda tishlar qiyshiqligi va tishlamni to‘g‘rilash. Ko‘rinmas shaffof kapalar yoki zamonaviy samoligirlanuvchi Damon breketlar.',
    price: '3 000 000',
    popular: false,
    features: [
      'Shaffof ko‘rinmas elaynerlar varianti',
      'Og‘riqsiz va qulay moslashish',
      '3D simulyatsiya orqali yakuniy natija'
    ],
    badge: 'To‘g‘ri tishlam',
  },
  {
    id: 'crowns',
    category: 'Ortopediya',
    title: 'Tsirkoniy Qoplamalar',
    description: 'Yuqori aniqlikdagi CAD/CAM nemis frezerida tayyorlanuvchi 100% biologik mos, metall tutmagan monolit tsirkon tojlar.',
    price: '850 000',
    popular: false,
    features: [
      'Maksimal chidamlilik va estetik jilo',
      'Milk qorayishi va allergiyani keltirib chiqarmaydi',
      '15+ yillik xizmat muddati'
    ],
    badge: 'Nemis texnologiyasi',
  },
  {
    id: 'therapy',
    category: 'Terapiya',
    title: 'Tishlarni Davolash',
    description: 'Karies, pulpit va periodontitni mikroskop ostida aniq davolash. Tish asabini saqlab qolish va tabiiy anatomik shaklini plombalash.',
    price: '180 000',
    popular: false,
    features: [
      'Carl Zeiss stomatologik mikroskopi',
      'Germaniya nanokompozit materiallari',
      'To‘liq sezilmas og‘riqsizlantirish'
    ],
    badge: 'Mikroskop ostida',
  },
  {
    id: 'hygiene',
    category: 'Profilaktika',
    title: 'Professional Gigiyena',
    description: 'Shveysariyaning EMS Air Flow apparati yordamida tish toshlari, choy/kofe dog‘lari va karies chaqiruvchi bakteriyalarni chuqur tozalash.',
    price: '280 000',
    popular: false,
    features: [
      'Nozik emalga zarar bermaydigan kukun',
      'Tish go‘shti yallig‘lanishini to‘xtatish',
      'Remineralizatsiya va ftorlash'
    ],
    badge: 'Yiliga 2 marta',
  },
  {
    id: 'kids',
    category: 'Bolalar stomatologiyasi',
    title: 'Bolalar Qabuli',
    description: 'Bolajonlar uchun stresssiz, qo‘rquvsiz va o‘yin shaklidagi qabul. Rangli plombalar, multfilmlar va sovg‘alar bilan qulay davolash.',
    price: '120 000',
    popular: false,
    features: [
      'Tajribali psixologik yondashuvli vrachlar',
      'Shirin taʼmli sekin taʼsir qiluvchi gel',
      'Har bir jajji bemorga esdalik sovg‘asi'
    ],
    badge: 'Qo‘rquvsiz',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'popular'>('all');

  const filtered = filter === 'all' ? services : services.filter(s => s.popular);

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Klinika Xizmatlari
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Sizning tabassumingiz uchun <br />
              <span className="text-gradient">eng ilg‘or tibbiy xizmatlar</span>
            </h2>
          </div>

          <p className="text-slate-600 max-w-md text-base leading-relaxed">
            Har bir davolash bosqichi xalqaro protokol bo‘yicha amalga oshiriladi. Shaffof narxlar, shifokor kafolati va yuqori darajadagi qulaylik.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                service.popular
                  ? 'bg-gradient-to-b from-navy-900 to-navy-950 text-white shadow-2xl shadow-blue-900/20 border-2 border-blue-500/40 md:-translate-y-2'
                  : 'bg-white text-slate-800 shadow-sm hover:shadow-xl border border-slate-200/70 hover:border-blue-200'
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  service.popular 
                    ? 'bg-blue-500/30 text-cyan-300 border border-blue-400/30' 
                    : 'bg-blue-50 text-blue-700'
                }`}>
                  {service.category}
                </span>

                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                  service.popular ? 'bg-amber-400/20 text-amber-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  {service.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-6">
                <h3 className={`font-heading text-xl font-bold mb-2.5 ${
                  service.popular ? 'text-white' : 'text-navy-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-xs leading-relaxed line-clamp-3 ${
                  service.popular ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2 mb-6 border-t pt-4 border-slate-100 dark:border-slate-800">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                      service.popular ? 'text-cyan-400' : 'text-blue-600'
                    }`} />
                    <span className={service.popular ? 'text-slate-300' : 'text-slate-600'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className={`text-[10px] block font-medium uppercase tracking-wider ${
                    service.popular ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Narxi:
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-base font-extrabold font-heading ${
                      service.popular ? 'text-white' : 'text-navy-900'
                    }`}>
                      {service.price}
                    </span>
                    <span className={`text-[11px] font-medium ${
                      service.popular ? 'text-cyan-300' : 'text-slate-500'
                    }`}>
                      so‘mdan
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(service.title)}
                  className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
                    service.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/40'
                      : 'bg-slate-100 hover:bg-blue-600 hover:text-white text-navy-900'
                  }`}
                  title="Qabulga yozilish"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-600/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-heading">
                Qaysi xizmat sizga mos kelishini bilmayapsizmi?
              </h4>
              <p className="text-sm text-blue-100 mt-1 max-w-xl">
                Bosh shifokor ko‘rigi va rentgen tahlili asosida individual davolash rejasini bepul tuzib beramiz.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('Bepul Konsultatsiya')}
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-white text-blue-700 font-bold text-sm shadow-lg hover:bg-slate-100 transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <span>Bepul konsultatsiya olish</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
