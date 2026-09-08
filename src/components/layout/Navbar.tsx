'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Menu, Phone, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';

const navLinks = [
  { name: 'Asosiy', href: '/' },
  { name: 'Xizmatlar', href: '/xizmatlar' },
  { name: 'Natijalar', href: '/natijalar' },
  { name: 'Shifokorlar', href: '/shifokorlar' },
  { name: 'Texnologiyalar', href: '/texnologiyalar' },
  { name: 'Aloqa', href: '/aloqa' },
];

function Brand() {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-950 text-blue-300 shadow-sm"><Sparkles className="h-5 w-5" /></span>
      <span className="leading-none">
        <strong className="block font-heading text-base tracking-[-0.03em] text-navy-950 sm:text-lg">Dr. Xamraev</strong>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700">Dental Clinic</span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  const active = (href: string) => href === '/' ? pathname === '/' || pathname.endsWith('/dr-xamraev-dental-clinic/') : pathname.includes(href);

  return (
    <>
      <header className={`sticky top-0 z-40 border-b transition-all ${isScrolled ? 'glass-header py-2 shadow-sm' : 'border-slate-100 bg-white py-3'}`}>
        <div className="container-custom flex items-center justify-between gap-5">
          <Link href="/" aria-label="Bosh sahifa"><Brand /></Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Asosiy navigatsiya">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${active(link.href) ? 'bg-blue-50 text-blue-800' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-950'}`}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:+998933313333" className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-navy-950 transition hover:border-blue-300 hover:text-blue-700 sm:flex" aria-label="Qo‘ng‘iroq qilish"><Phone className="h-4 w-4" /></a>
            <button onClick={() => openBooking()} className="btn-primary gap-2 px-5 py-2.5 text-sm"><Calendar className="h-4 w-4" /><span className="hidden sm:inline">Qabulga yozilish</span><span className="sm:hidden">Qabul</span></button>
            <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-navy-950 lg:hidden" aria-label="Menyuni ochish" aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-navy-950/60 p-4 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
            <motion.div initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }} className="mx-auto max-w-lg rounded-[2rem] bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4"><Brand /><button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-slate-100" aria-label="Menyuni yopish"><X className="h-5 w-5" /></button></div>
              <nav className="grid gap-1 py-4">
                {navLinks.map((link) => <Link key={link.href} href={link.href} className={`rounded-2xl px-4 py-3.5 text-base font-semibold ${active(link.href) ? 'bg-blue-50 text-blue-800' : 'text-slate-700'}`}>{link.name}</Link>)}
              </nav>
              <a href="tel:+998933313333" className="flex items-center justify-center gap-2 rounded-full bg-navy-950 px-5 py-3.5 text-sm font-bold text-white"><Phone className="h-4 w-4 text-blue-300" /> +998 93 331-33-33</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
