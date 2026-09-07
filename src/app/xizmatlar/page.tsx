'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Clock, 
  HelpCircle, 
  ChevronDown,
  Award,
  Zap,
  Check
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const detailedServices = [
  {
    id: 'implant',
    category: 'implant',
    categoryLabel: 'Jarrohlik & Implant',
    title: 'Tish Implantatsiyasi',
    price: '2 500 000',
    unit: 'so‘mdan',
    duration: '30-45 daqiqa',
    warranty: 'Umrbod ishlab chiqaruvchi kafolati',
    origin: 'Shveysariya (Straumann) & Koreya (Osstem)',
    description: 'Yo‘qotilgan tishlarni zamonaviy navigatsion jarrohlik yordamida suyak to‘qimasiga minimal aralashuv bilan tiklash. Chaynash funksiyasini va tabiiy estetikani 100% tiklaydi.',
    steps: [
      '3D Kompyuter Tomografiyasida suyak tahlili',
      'STA kompyuter anesteziyasi ostida og‘riqsiz o‘rnatish',
      'Vaqtinchalik yoki doimiy individual toj kiydirish',
      'Rasmiy muhrlangan kafolat pasporti berish'
    ],
    highlight: 'Eng ko‘p tanlangan xizmat'
  },
  {
    id: 'veneers',
    category: 'estetika',
    categoryLabel: 'Premium Estetika',
    title: 'E-max Keramika Vinirlari',
    price: '1 800 000',
    unit: 'so‘mdan',
    duration: '2-3 tashrif',
    warranty: '15 yil klinik kafolat',
    origin: 'Shveysariya (Ivoclar Vivadent)',
    description: 'Tabassum chizig‘idagi tishlar shakli, o‘lchami va rangini Gollivud standartlariga keltiruvchi 0.3 mm ultra-yupqa keramika plastinkalar.',
    steps: [
      'Digital Smile Design (natijani avvaldan 3D ko‘rish)',
      'Tish emalini minimal (0.3 mm) jilolash',
      'Raqamli optik skanerlash (noqulay qolip olinmaydi)',
      'Yuqori aniqlikdagi robotlashtirilgan fiksatsiya'
    ],
    highlight: 'Gollivud tabassumi'
  },
  {
    id: 'whitening',
    category: 'estetika',
    categoryLabel: 'Estetika',
    title: 'Philips Zoom 4 Oqartirish',
    price: '1 200 000',
    unit: 'so‘mdan',
    duration: '45 daqiqa (1 seans)',
    warranty: '2-3 yil barqaror natija',
    origin: 'AQSH (Philips Sonicare)',
    description: 'Dunyo miqyosidagi 1-raqamli professional fotootbelivaniye tizimi. Sovuq LED nuri yordamida tish emaliga ziyon yetkazmasdan 8 tongacha oqartirish.',
    steps: [
      'Milk va lablarni maxsus izolyatsion gel bilan himoyalash',
      'Konsentrlangan faol gel surtish',
      'Zoom 4 sovuq LED lampasi bilan 3 ta 15 daqiqalik bosqich',
      'Emalni mustahkamlovchi ftor-gel bilan qoplash'
    ],
    highlight: 'Tezkor oqlik'
  },
  {
    id: 'braces',
    category: 'ortodontiya',
    categoryLabel: 'Ortodontiya',
    title: 'Breketlar va Shaffof Elaynerlar',
    price: '3 000 000',
    unit: 'so‘mdan',
    duration: '6 — 18 oy',
    warranty: 'Umrbod to‘g‘ri tishlam kafolati',
    origin: 'AQSH (Damon System, Spark)',
    description: 'Har qanday yoshda qiyshiq tishlarni to‘g‘rilash va to‘g‘ri profil yaratish. Ko‘rinmas shaffof kapalar yoki zamonaviy samoligirlanuvchi mini-breketlar.',
    steps: [
      '3D jag‘ tahlili va yakuniy harakat rejasini modellashtirish',
      'Tizimni individual fiksatsiya qilish',
      'Oyiga 1 marta nazorat va korreksiya',
      'Natijani saqlovchi shaffof reteyner'
    ],
    highlight: 'To‘g‘ri tishlam'
  },
  {
    id: 'crowns',
    category: 'implant',
    categoryLabel: 'Ortopediya',
    title: 'Tsirkoniy Monolit Qoplamalar',
    price: '850 000',
    unit: 'so‘mdan',
    duration: '3-4 kun',
    warranty: '10 yil kafolat',
    origin: 'Germaniya (Sirona CAD/CAM)',
    description: 'Metall tutmagan 100% biologik mos tsirkoniy dioksidi. Tabiiy tish emali kabi yorug‘lik o‘tkazadi, milkda qora chiziq qoldirmaydi.',
    steps: [
      'Tishni mikroskop ostida anatomik shaklga keltirish',
      '3D intraoral skaner yordamida raqamli o‘lcham',
      'Germaniya 5 o‘qli frezerida mikron aniqlikda yo‘nish',
      'Mustahkam estetik tsement bilan o‘rnatish'
    ],
    highlight: 'Nemis sifati'
  },
  {
    id: 'therapy',
    category: 'terapiya',
    categoryLabel: 'Terapiya',
    title: 'Mikroskop Ostida Davolash',
    price: '180 000',
    unit: 'so‘mdan',
    duration: '40-60 daqiqa',
    warranty: '5 yil rasmiy kafolat',
    origin: 'Germaniya (Carl Zeiss)',
    description: 'Karies, chuqur pulpit va tish kanallarini 25 barobar kattalashtirish ostida davolash. Tishni sug‘urish o‘rniga uning 100% tirikligini saqlab qolamiz.',
    steps: [
      'STA apparatli og‘riqsizlantirish',
      'Kofferdam (shaxsiy rezina himoya) o‘rnatish',
      'Carl Zeiss mikroskopida kanalni 3D tozalash',
      'Estetik nanokompozit bilan tabiiy qavariqlarni tiklash'
    ],
    highlight: 'Mikroskopik aniqlik'
  },
  {
    id: 'hygiene',
    category: 'terapiya',
    categoryLabel: 'Profilaktika',
    title: 'Air Flow Professional Gigiyena',
    price: '280 000',
    unit: 'so‘mdan',
    duration: '30 daqiqa',
    warranty: 'Sog‘lom milk va toza nafas',
    origin: 'Shveysariya (EMS Dental)',
    description: 'Toshlar, qahva va tamaki dog‘lari hamda karies chaqiruvchi kislotali plyonkani nozik xavfsiz kukun bilan tozalash.',
    steps: [
      'Ultrato‘lqinli skalerda qattiq toshlarni parchalash',
      'EMS Air Flow bilan pigmentli sarg‘ayishlarni yuvish',
      'Maxsus pasta va cho‘tkalar bilan silliqlash',
      'Tish emalini mineral ftor-lak bilan mustahkamlash'
    ],
    highlight: 'Profilaktika'
  },
  {
    id: 'kids',
    category: 'bolalar',
    categoryLabel: 'Bolalar stomatologiyasi',
    title: 'Bolalar Qabuli va Psixologik Davo',
    price: '120 000',
    unit: 'so‘mdan',
    duration: '20-30 daqiqa',
    warranty: 'Kuchsiz va qo‘rquvsiz qabul',
    origin: 'Germaniya (GC Tooth Mousse)',
    description: 'Kichkintoylarda stomatologga nisbatan qo‘rquv paydo qilmaydigan o‘yin shaklidagi qabul. Shirin xushbo‘y gellar, multfilmlar va esdalik sovg‘alari.',
    steps: [
      'Bola bilan do‘stona psixologik tanishuv',
      'Meva taʼmli sekin uxlatuvchi gel surtish',
      'Multfilm tomosha qilib og‘riqsiz davolash',
      'Jajji qahramonga medal va sovg‘a taqdim etish'
    ],
    highlight: 'Qo‘rquvsiz bolalik'
  }
];

const faqs = [
  {
    q: 'Implantatsiya muolajasi og‘riqlimi?',
    a: 'Mutlaqo og‘riqsiz! Biz kompyuter nazorati ostidagi STA inesiz anesteziya tizimidan foydalanamiz. Muolaja paytida bemor hech qanday yoqimsiz sezgi yoki og‘riq his qilmaydi.'
  },
  {
    q: 'Birinchi konsultatsiyada nimalar qilinadi va u pullikmi?',
    a: 'Dr. Xamraev klinikasida birinchi ko‘rik va 3D rentgen tahlili asosidagi individual davolash rejasini tuzib berish mutlaqo bepul taqdim etiladi.'
  },
  {
    q: 'E-max vinirlari uchun tish qattiq yo‘niladimi?',
    a: 'Yo‘q. E-max vinirlarining qalinligi atigi 0.3-0.5 mm bo‘lib, tish to‘qimasi faqat mikron darajasida yengil tozalanadi. Ko‘p hollarda tishning asosiy tuzilishi to‘liq butun saqlanadi.'
  },
  {
    q: 'Narxlar davolash davomida o‘zgarishi mumkinmi?',
    a: 'Aslo yo‘q. Konsultatsiyada tasdiqlangan davolash smetasi yakuniy hisoblanadi. Hech qanday yashirin yoki jarayon davomida qo‘shiladigan to‘lovlar bo‘lmaydi.'
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openBooking } = useBooking();

  const filtered = activeCategory === 'all' 
    ? detailedServices 
    : detailedServices.filter(s => s.category === activeCategory);

  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            Barcha Tibbiy Xizmatlar
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Klinikamiz Xizmatlari va <br />
            <span className="text-gradient">Shaffof Narxlari</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Germaniya va Shveysariya standartlari bo‘yicha 100% rasmiy kafolatlangan va og‘riqsiz stomatologik muolajalar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Barcha xizmatlar (8)' },
            { id: 'implant', label: 'Implantatsiya & Tojlar' },
            { id: 'estetika', label: 'Vinirlar & Oqartirish' },
            { id: 'ortodontiya', label: 'Breketlar & Elaynerlar' },
            { id: 'terapiya', label: 'Terapiya & Gigiyena' },
            { id: 'bolalar', label: 'Bolalar stomatologiyasi' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {item.highlight}
                  </span>
                </div>

                {/* Title & Price */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-heading text-2xl font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold font-heading text-blue-600">
                      {item.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.unit}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Muolaja vaqti:</span>
                    <strong className="text-slate-800 font-semibold">{item.duration}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Kafolat:</span>
                    <strong className="text-emerald-700 font-semibold">{item.warranty}</strong>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-200/60">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Material / Ishlab chiqaruvchi:</span>
                    <strong className="text-slate-800 font-semibold">{item.origin}</strong>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                    Davolash bosqichlari:
                  </span>
                  {item.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openBooking(item.title)}
                className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Calendar className="w-4 h-4" />
                <span>{item.title} uchun yozilish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">
              Ko‘p Beriladigan Savollar
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Muolajalar va narxlar haqida bemorlarimiz eng ko‘p beradigan savollarga javoblar
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-navy-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${openFaq === fIdx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === fIdx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
