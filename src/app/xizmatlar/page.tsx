'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Tag,
  Stethoscope,
  Smile,
  Check
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { assetPath } from '@/utils/assets';

interface ServiceItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  price: string;
  unit: string;
  duration: string;
  warranty: string;
  origin: string;
  image: string;
  badge: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'implant',
    category: 'implant',
    categoryLabel: 'Jarrohlik & Tiklash',
    title: 'Tish Implantatsiyasi',
    price: '2 500 000',
    unit: 'so‘mdan',
    duration: '30-45 daqiqa',
    warranty: 'Umrbod ishlab chiqaruvchi kafolati',
    origin: 'Shveysariya (Straumann) & Koreya (Osstem)',
    image: assetPath('/images/service-implant.jpg'),
    badge: 'Eng ko‘p tanlangan',
    description: 'Yo‘qotilgan tishlarni zamonaviy navigatsion jarrohlik yordamida suyak to‘qimasiga minimal aralashuv bilan tiklash. Chaynash funksiyasini va tabiiy estetikani 100% tiklaydi.',
    features: [
      '3D KT kompyuter tomografiyasi asosida suyak tahlili',
      'STA kompyuter anesteziyasi bilan 100% og‘riqsiz muolaja',
      'Bir kunda yangi tish (Navigatsion shablon)',
      'Rasmiy muhrlangan xalqaro kafolat pasporti'
    ]
  },
  {
    id: 'veneers',
    category: 'estetika',
    categoryLabel: 'Premium Estetika',
    title: 'E-max Keramika Vinirlari',
    price: '1 800 000',
    unit: 'so‘mdan',
    duration: '5 kun (2 tashrif)',
    warranty: '15 yillik rasmiy kafolat',
    origin: 'Shveysariya (Ivoclar Vivadent)',
    image: assetPath('/images/service-veneers.jpg'),
    badge: 'Gollivud tabassumi',
    description: 'Tabassum chizig‘idagi tishlar shakli, o‘lchami va rangini Gollivud standartlariga keltiruvchi 0.3 mm ultra-yupqa keramika plastinkalar. Rangini hech qachon yo‘qotmaydi.',
    features: [
      'Digital Smile Design (natijani avvaldan 3D ko‘rish)',
      'Tish to‘qimasini minimal (0.3 mm) nozik jilolash',
      'Noqulay loy qolip o‘rniga raqamli 3D skanerlash',
      'Mikron aniqlikdagi robotlashtirilgan fiksatsiya'
    ]
  },
  {
    id: 'whitening',
    category: 'estetika',
    categoryLabel: 'Lazerli Estetika',
    title: 'Philips Zoom 4 Oqartirish',
    price: '1 200 000',
    unit: 'so‘mdan',
    duration: '45 daqiqa (1 seans)',
    warranty: '2-3 yil barqaror natija',
    origin: 'AQSH (Philips Sonicare)',
    image: assetPath('/images/service-whitening.jpg'),
    badge: '8 ton oqartirish',
    description: 'Dunyo miqyosidagi 1-raqamli professional fotootbelivaniye tizimi. Sovuq LED nuri yordamida tish emaliga ziyon yetkazmasdan atigi 45 daqiqada 8 tongacha yorqin oqlik.',
    features: [
      'Milk va yumshoq to‘qimalarni to‘liq izolyatsiya qilish',
      'Sovuq LED nuri — tish asabi va emali qizib ketmaydi',
      '45 daqiqalik yagona seansda tayyor natija',
      'Emalni mustahkamlovchi ftor-mineral bilan yakunlash'
    ]
  },
  {
    id: 'aligners',
    category: 'ortodontiya',
    categoryLabel: 'Ortodontiya',
    title: 'Breketlar va Shaffof Elaynerlar',
    price: '3 000 000',
    unit: 'so‘mdan',
    duration: '6 — 14 oy',
    warranty: 'Umrbod to‘g‘ri tishlam',
    origin: 'AQSH (Damon System, Spark)',
    image: assetPath('/images/service-aligners.jpg'),
    badge: 'Ko‘rinmas kapalar',
    description: 'Har qanday yoshda qiyshiq tishlarni to‘g‘rilash va to‘g‘ri profil yaratish. Ko‘rinmas shaffof kapalar yoki zamonaviy samoligirlanuvchi mini-breketlar.',
    features: [
      '3D jag‘ tahlili orqali yakuniy harakat rejasini ko‘rish',
      'Kundalik hayotda sezilmaydigan shaffof kapalar',
      'Og‘riqsiz va milkni jarohatlamaydigan qulay moslashuv',
      'Natijani mustahkamlovchi shaffof reteyner'
    ]
  },
  {
    id: 'zirconia',
    category: 'implant',
    categoryLabel: 'Ortopediya',
    title: 'Tsirkoniy Monolit Qoplamalar',
    price: '850 000',
    unit: 'so‘mdan',
    duration: '3 kun',
    warranty: '10 yil to‘liq kafolat',
    origin: 'Germaniya (Sirona CAD/CAM)',
    image: assetPath('/images/service-zirconia.jpg'),
    badge: 'Nemis CAD/CAM',
    description: 'Metall tutmagan 100% biologik mos tsirkoniy dioksidi. Tabiiy tish emali kabi yorug‘lik o‘tkazadi, milkda qora chiziq qoldirmaydi va o‘ta baquvvat.',
    features: [
      'Germaniya 5 o‘qli CAD/CAM robotida mikron aniqlikda frezerlash',
      'Tabiiy tishdek nur o‘tkazish va estetik jilo',
      'Metall allergiyasi va milk qorayishiga qarshi 100% kafolat',
      '15+ yillik uzoq muddatli xizmat'
    ]
  },
  {
    id: 'therapy',
    category: 'terapiya',
    categoryLabel: 'Terapiya & Endodontiya',
    title: 'Carl Zeiss Mikroskop Davolash',
    price: '180 000',
    unit: 'so‘mdan',
    duration: '40-60 daqiqa',
    warranty: '5 yil klinik kafolat',
    origin: 'Germaniya (Carl Zeiss)',
    image: assetPath('/images/service-therapy.jpg'),
    badge: '25x Optik aniqlik',
    description: 'Karies, chuqur pulpit va tish kanallarini 25 barobar optik kattalashtirish ostida davolash. Tishni sug‘urish o‘rniga uning 100% tirikligini saqlab qolamiz.',
    features: [
      'STA kompyuter anesteziyasi bilan og‘riqsiz muolaja',
      'Kofferdam (shaxsiy rezina to‘siq) orqali steril davolash',
      'Mikroskop ostida kanallarni 3D ultratovushli tozalash',
      'Germaniya nanokompozitlari bilan tabiiy tish anatomiyasini tiklash'
    ]
  },
  {
    id: 'hygiene',
    category: 'terapiya',
    categoryLabel: 'Profilaktika',
    title: 'Air Flow Professional Gigiyena',
    price: '280 000',
    unit: 'so‘mdan',
    duration: '30 daqiqa',
    warranty: 'Yiliga 2 marta tavsiya',
    origin: 'Shveysariya (EMS Dental)',
    image: assetPath('/images/service-hygiene.jpg'),
    badge: 'Shveysariya texnologiyasi',
    description: 'Toshlar, qahva va tamaki dog‘lari hamda karies chaqiruvchi kislotali bakteriya qatlamini nozik xavfsiz Shveysariya eritritol kukuni bilan tozalash.',
    features: [
      'Ultrato‘lqinli skaler yordamida qattiq tish toshlarini parchalash',
      'EMS Air Flow iliq suv va kukun bilan nozik tozalash',
      'Tish emalini silliqlash va tabiiy yarqirashni qaytarish',
      'Remineralizatsiya va kariesga qarshi ftorlash'
    ]
  },
  {
    id: 'pediatric',
    category: 'bolalar',
    categoryLabel: 'Bolalar Stomatologiyasi',
    title: 'Bolalar Qabuli va Psixologik Davo',
    price: '120 000',
    unit: 'so‘mdan',
    duration: '20-30 daqiqa',
    warranty: 'Qo‘rquvsiz tabassum',
    origin: 'Germaniya & Yaponiya (GC Tooth)',
    image: assetPath('/images/service-pediatric.jpg'),
    badge: 'Mehrli yondashuv',
    description: 'Kichkintoylarda stomatologga nisbatan qo‘rquv paydo qilmaydigan o‘yin shaklidagi qabul. Shirin mevali anestetik gellar, multfilmlar va esdalik sovg‘alari.',
    features: [
      'Tajribali psixologik yondashuvli bolalar stomatologi',
      'Shirin meva taʼmli ignasiz anesteziya geli',
      'Rangli plombalar va multfilm tomosha qilib davolanish',
      'Har bir jajji bemorga jasorati uchun esdalik sovg‘asi'
    ]
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
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <div className="py-12 sm:py-20">
      <div className="container-custom">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Xalqaro Standartdagi Xizmatlar
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Klinikamiz Xizmatlari va <br />
            <span className="text-gradient">Shaffof Narxlari</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Germaniya, Shveysariya va AQSH texnologiyalari asosida 100% rasmiy kafolatlangan va og‘riqsiz stomatologik muolajalar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-14">
          {[
            { id: 'all', label: 'Barcha xizmatlar (8)' },
            { id: 'implant', label: 'Implantatsiya & Tsirkon' },
            { id: 'estetika', label: 'Vinirlar & Oqartirish' },
            { id: 'ortodontiya', label: 'Breketlar & Elaynerlar' },
            { id: 'terapiya', label: 'Terapiya & Gigiyena' },
            { id: 'bolalar', label: 'Bolalar stomatologiyasi' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Matching High-Quality Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Container with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20" />

                    {/* Category & Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-navy-900/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow border border-white/20">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow-md">
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom overlay: Origin & Warranty */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1.5 drop-shadow">
                        <Award className="w-3.5 h-3.5 text-cyan-400" />
                        {item.origin}
                      </span>
                      <span className="text-[11px] font-bold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/20">
                        {item.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 sm:p-8">
                    
                    {/* Title & Price */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-heading text-2xl font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-baseline gap-1.5 shrink-0">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Boshlanishi:
                        </span>
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

                    {/* Key Features List */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 sm:p-8 pt-0">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => openBooking(item.title)}
                      className="btn-primary flex-1 py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{item.title} uchun yozilish</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Treatment Process Flow */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
              Ish Tartibi
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">
              Muolaja Jarayoni Qanday Kechadi?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Biz bemorlarimizga har bir qadamni aniq va xavfsiz tushuntiramiz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Bepul 3D Ko‘rik',
                desc: 'Bosh shifokor tekshiruvi va 3D kompyuter tomografiyasida og‘iz bo‘shlig‘i tahlili.'
              },
              {
                step: '02',
                title: 'Aniq Reja & Smeta',
                desc: 'Bemor uchun individual davolash rejasi va qatʼiy o‘zgarmas narx belgilanadi.'
              },
              {
                step: '03',
                title: '100% Og‘riqsiz Muolaja',
                desc: 'STA kompyuter anesteziyasi ostida Yevropa protokoli bilan sifatli davolash.'
              },
              {
                step: '04',
                title: 'Rasmiy Kafolat Pasporti',
                desc: 'Muolaja yakunlangach, klinika tomonidan muhrlangan 10-15 yillik pasport topshiriladi.'
              }
            ].map((st, sIdx) => (
              <div key={sIdx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative">
                <span className="text-4xl font-extrabold text-blue-200 font-heading block mb-2">
                  {st.step}
                </span>
                <h4 className="font-heading text-base font-bold text-navy-900 mb-1.5">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2">
              Ko‘p Beriladigan Savollar
            </h3>
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

        {/* Free Consultation Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <Sparkles className="w-10 h-10 text-cyan-300 mx-auto mb-3" />
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3">
            Qaysi xizmat sizga mos kelishini bilmayapsizmi?
          </h3>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Klinikamizga tashrif buyuring yoki onlayn yoziling. Bosh shifokorimiz ko‘rigidan so‘ng shaxsiy reja tuzib beramiz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBooking('Bepul Dastlabki Ko‘rik')}
              className="px-8 py-3.5 rounded-2xl bg-white text-blue-700 font-bold text-sm shadow-lg hover:bg-slate-50 transition-all"
            >
              Bepul ko‘rikka yozilish
            </button>
            <a
              href="tel:+998933313333"
              className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              +998 (93) 331-33-33
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
