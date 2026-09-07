'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetPath } from '@/utils/assets';
import { useBooking } from '@/context/BookingContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Asosiy', href: '/' },
    { name: 'Xizmatlar & Narxlar', href: '/xizmatlar' },
    { name: 'Natijalar (Oldin/Keyin)', href: '/natijalar' },
    { name: 'Shifokorlar', href: '/shifokorlar' },
    { name: 'Texnologiyalar', href: '/texnologiyalar' },
    { name: 'Aloqa & Manzil', href: '/aloqa' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '' || pathname === '/dr-xamraev-dental-clinic' || pathname === '/dr-xamraev-dental-clinic/';
    }
    return pathname.includes(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-sm py-3'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={assetPath('/images/logo.png')}
              alt="Dental Clinic Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-1 relative transition-colors ${
                    active
                      ? 'text-blue-600 font-bold'
                      : 'hover:text-blue-600 text-slate-700'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openBooking()}
              className="btn-primary py-2.5 px-5 sm:py-3 sm:px-6 text-xs sm:text-sm shadow-md shadow-blue-600/25 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Qabulga yozilish</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-navy-900 hover:bg-slate-200 transition-colors"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-md lg:hidden flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <img
                    src={assetPath('/images/logo.png')}
                    alt="Dental Clinic"
                    className="h-9 w-auto object-contain"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 py-6 text-sm sm:text-base font-bold text-slate-800">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-3 px-3.5 rounded-2xl transition-all ${
                          active
                            ? 'bg-blue-50 text-blue-600 font-extrabold'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className={`w-4 h-4 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking();
                  }}
                  className="w-full btn-primary py-3.5 text-sm"
                >
                  Qabulga yozilish
                </button>
                <a
                  href="tel:+998933313333"
                  className="block w-full py-3 rounded-2xl bg-slate-100 text-slate-800 font-bold text-xs text-center hover:bg-slate-200 transition-colors"
                >
                  +998 (93) 331-33-33
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
