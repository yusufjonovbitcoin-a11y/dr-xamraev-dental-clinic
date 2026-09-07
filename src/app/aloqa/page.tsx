'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Send, 
  ExternalLink, 
  Navigation, 
  CheckCircle2, 
  Car, 
  Calendar,
  User,
  Phone,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Dastlabki bepul ko‘rik');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    console.log('Aloqa sahifasidan murojaat:', { name, phone, service, message });
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="container-custom">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <MapPin className="w-3.5 h-3.5" />
            Bog‘lanish va Joylashuv
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Bizga Tashrif Buyuring yoki <br />
            <span className="text-gradient">Hoziroq Qo‘ng‘iroq Qiling</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Klinikamiz Samarqand shahrining eng qulay nuqtasida, Samarqand avtoshohbekati yonida joylashgan. Sizni kutib olishdan mamnunmiz.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Klinika manzili
                </span>
                <h3 className="font-heading text-lg font-bold text-navy-900 mb-1">
                  Samarqand shahri, Oydin yo‘l ko‘chasi 1-uy
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  Mo‘ljal: Samarqand avtoshohbekati yonida
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Telefon raqamlarimiz
                </span>
                <div className="space-y-1">
                  <a 
                    href="tel:+998933313333"
                    className="font-heading text-lg font-bold text-navy-900 hover:text-blue-600 block transition-colors"
                  >
                    +998 (93) 331-33-33
                  </a>
                  <a 
                    href="tel:+998915362323"
                    className="font-heading text-base font-semibold text-slate-700 hover:text-blue-600 block transition-colors"
                  >
                    +998 (91) 536-23-23
                  </a>
                </div>
                <div className="mt-2 text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Qo‘ng‘iroqlarga 24/7 javob beriladi</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Ish tartibi
                </span>
                <h3 className="font-heading text-lg font-bold text-navy-900 mb-1">
                  Har kuni: 08:30 — 20:00
                </h3>
                <p className="text-xs text-slate-500">
                  Shanba va yakshanba kunlari ham qabul to‘liq ochiq
                </p>
              </div>
            </div>

            {/* Parking */}
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-3 text-xs text-blue-900 font-medium">
              <Car className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Klinika binosi oldida barcha bemorlarimiz uchun keng va bepul avtoturargoh mavjud.</span>
            </div>

          </div>

          {/* Right: On-page Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-2">
                    Tezkor ariza
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-navy-900">
                    Onlayn Qabulga Yoziling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Maʼlumotlaringizni qoldiring, administratorimiz 10 daqiqa ichida sizga qo‘ng‘iroq qiladi.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Ismingiz *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ismingizni kiriting"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Telefon raqamingiz *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+998 (90) 123-45-67"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Qaysi xizmat bo‘yicha murojaat qilyapsiz?
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:border-blue-600 outline-none"
                    >
                      <option value="Dastlabki bepul ko‘rik">Dastlabki bepul ko‘rik</option>
                      <option value="Tish Implantatsiyasi">Tish Implantatsiyasi</option>
                      <option value="E-max Vinirlari">E-max Vinirlari</option>
                      <option value="Zoom 4 Oqartirish">Zoom 4 Oqartirish</option>
                      <option value="Breketlar & Elaynerlar">Breketlar & Elaynerlar</option>
                      <option value="Tsirkoniy Qoplamalar">Tsirkoniy Qoplamalar</option>
                      <option value="Tishlarni Davolash">Tishlarni Davolash</option>
                      <option value="Bolalar Qabuli">Bolalar Qabuli</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Qo‘shimcha izoh yoki shikoyatingiz (ixtiyoriy)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Masalan: oldingi tishim og‘riyapti yoki vinir narxini bilmoqchiman..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Arizani yuborish</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
                  Arizangiz Muvaffaqiyatli Yuborildi!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                  Rahmat, <strong className="text-navy-900">{name}</strong>. Mutaxassisimiz tez orada <strong className="text-navy-900">{phone}</strong> raqamiga aloqaga chiqadi.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-bold"
                >
                  Yana ariza qoldirish
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Yandex Map Iframe Embed */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 h-[450px]">
          <iframe
            title="Dr Xamraev Samarqand Xaritasi"
            src="https://yandex.uz/map-widget/v1/?ll=66.995339%2C39.690100&z=16&pt=66.995339,39.690100,pm2rdm"
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            loading="lazy"
          />

          <div className="absolute bottom-6 left-6 right-6 sm:right-auto z-10">
            <a
              href="https://yandex.uz/maps/org/dr_xamraev/37346829323/prices/?ll=66.995339%2C39.690100&z=16"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200 text-navy-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 hover:bg-blue-600 hover:text-white transition-all group"
            >
              <Navigation className="w-4 h-4 text-blue-600 group-hover:text-white" />
              <span>Yandex Xaritasida marshrutni ochish</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
