'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote, MapPin } from 'lucide-react';

const reviews = [
  {
    author: 'Dilshod Raxmonov',
    city: 'Samarqand',
    treatment: 'Implantatsiya & Tsirkon',
    rating: 5,
    date: '2 hafta oldin',
    comment: 'Dr. Xamraevga kottakon rahmat! Oldingi tishim sinib juda xijolat bo‘lib yurgandim. Bir kunda implant o‘rnatib berishdi, na og‘riq bo‘ldi, na shish. Germaniya texnologiyasi haqiqatda sezilarli darajada farq qilar ekan. Hozir bemalol kulyapman!',
  },
  {
    author: 'Malika Samadova',
    city: 'Samarqand',
    treatment: 'Zoom 4 Oqartirish & Vinirlar',
    rating: 5,
    date: '1 oy oldin',
    comment: 'To‘yimdan oldin tabassumimni oqartirmoqchi edim. Dr. Karimova bilan ko‘rishdik va Zoom 4 qildirdik. Natijasi ko‘z o‘ngimda 8 tonga oppoq bo‘ldi! Hammasi toza, qulay, xodimlarning muomalasi oliy darajada.',
  },
  {
    author: 'Jahongir Umarov',
    city: 'Toshkent / Samarqand',
    treatment: 'Carl Zeiss Mikroskop Davolash',
    rating: 5,
    date: '3 hafta oldin',
    comment: 'Boshqa joyda tishni faqat sug‘urish kerak deyishgandi. Bu yerda mikroskop ostida kanallarni tozalab, tishimni asrab qolishdi. Haqiqiy Yevropa standarti. Narxlari ham ko‘rsatilgan xizmatga mutlaqo munosib.',
  },
  {
    author: 'Nargiza Yusupova',
    city: 'Samarqand',
    treatment: 'Bolalar stomatologiyasi',
    rating: 5,
    date: '1 oy oldin',
    comment: '6 yoshli o‘g‘lim tish shifokoridan juda qo‘rqardi. Dr. Aziz Rustamov o‘yin tarzida, multfilm qo‘yib berib davolab berdilar. Bolam yig‘lamadi ham, oxirida sovg‘a berishgani uchun yana boraylik deyapti!',
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            Bemorlar Fikrlari
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Bemorlarimiz biz haqimizda <br />
            <span className="text-gradient">nima deydi?</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Yandex Xaritalar va mustaqil platformalarda 450 dan ortiq 5 yulduzli baholarga ega Samarqandning ishonchli klinikasi.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/70 hover:border-blue-200 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/70">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm font-heading">
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {rev.city}
                    </span>
                  </div>

                  <span className="text-[10px] text-slate-400">
                    {rev.date}
                  </span>
                </div>

                <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{rev.treatment}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Platform Card */}
        <div className="mt-12 text-center">
          <a
            href="https://yandex.uz/maps/org/dr_xamraev/37346829323/prices/?ll=66.995339%2C39.690100&z=16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all"
          >
            <span>Yandex Xaritalarda barcha sharhlarni o‘qish</span>
            <span className="text-amber-500 font-extrabold flex items-center gap-1">
              ★ 4.9
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};
