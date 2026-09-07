'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, CheckCircle2, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultDoctor?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultService = '',
  defaultDoctor = '',
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Dastlabki bepul ko‘rik');
  const [doctor, setDoctor] = useState(defaultDoctor || 'Birinchi bo‘sh mutaxassis');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00 - 12:00');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Architecture ready for Supabase / Telegram Bot webhook
    const bookingPayload = {
      patientName: name,
      patientPhone: phone,
      service,
      doctor,
      preferredDate: date || 'Yaqin fursatda',
      preferredTime: time,
      createdAt: new Date().toISOString(),
    };
    console.log('Dental Clinic Booking Created:', bookingPayload);

    setIsSubmitted(true);

    // Celebratory Confetti
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl z-10 my-auto border border-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 mb-2">
                  Onlayn Qabul
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
                  Qabulga Yozilish
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Maʼlumotlaringizni qoldiring. Administratorimiz 10 daqiqa ichida siz bilan bog‘lanadi.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Ismingiz va Familiyangiz *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masalan: Dilshod Umarov"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Telefon Raqamingiz *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 (90) 123-45-67"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Xizmat turi
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                    >
                      <option value="Dastlabki bepul ko‘rik">Dastlabki bepul ko‘rik</option>
                      <option value="Tish Implantatsiyasi">Tish Implantatsiyasi</option>
                      <option value="E-max Vinirlari">E-max Vinirlari</option>
                      <option value="Zoom 4 Oqartirish">Zoom 4 Oqartirish</option>
                      <option value="Breketlar & Elaynerlar">Breketlar & Elaynerlar</option>
                      <option value="Tsirkoniy Qoplamalar">Tsirkoniy Qoplamalar</option>
                      <option value="Tishlarni Davolash">Tishlarni Davolash</option>
                      <option value="Professional Gigiyena">Professional Gigiyena</option>
                      <option value="Bolalar Qabuli">Bolalar Qabuli</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Shifokor
                    </label>
                    <select
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                    >
                      <option value="Birinchi bo‘sh mutaxassis">Birinchi bo‘sh mutaxassis</option>
                      <option value="Dr. Xamraev (Implantolog)">Dr. Xamraev (Implantolog)</option>
                      <option value="Dr. Z. Karimova (Ortodont)">Dr. Z. Karimova (Ortodont)</option>
                      <option value="Dr. A. Rustamov (Terapevt)">Dr. A. Rustamov (Terapevt)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Qulay sana
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-9 pr-2 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Vaqt oralig‘i
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-9 pr-2 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:border-blue-600 outline-none"
                      >
                        <option value="08:30 - 12:00">08:30 - 12:00 (Ertalab)</option>
                        <option value="12:00 - 16:00">12:00 - 16:00 (Tushdan keyin)</option>
                        <option value="16:00 - 20:00">16:00 - 20:00 (Kechqurun)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-blue-600/30 mt-2 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Qabulni tasdiqlash</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Sizning shaxsiy maʼlumotlaringiz 100% maxfiy saqlanadi.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
                Arizangiz Qabul Qilindi!
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                Rahmat, <strong className="text-navy-900">{name}</strong>! Administratorimiz tez orada <strong className="text-navy-900">{phone}</strong> raqamiga qo‘ng‘iroq qilib, qabul vaqtini tasdiqlaydi.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-bold transition-all"
              >
                Yopish
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
