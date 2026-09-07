'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Asosiy', href: '#hero' },
    { name: 'Biz haqimizda', href: '#about' },
    { name: 'Xizmatlar', href: '#services' },
    { name: 'Shifokorlar', href: '#doctors' },
    { name: 'Natijalar', href: '#results' },
    { name: 'Savol-javob', href: '#faq' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-sm py-3'
            : 'bg-transparent py-4 sm:py-5 border-b border-slate-100/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="images/logo.png"
              alt="Dental Clinic Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all flex items-center gap-2 active:scale-95"
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
                  <img src="images/logo.png" alt="Dental Clinic" className="h-9 w-auto object-contain" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-3 py-6 text-base font-bold text-slate-800">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-brand-600 text-white font-bold text-center shadow-lg shadow-brand-600/30 text-sm"
                >
                  Qabulga yozilish
                </button>
                <a
                  href="tel:+998933313333"
                  className="block w-full py-3 rounded-2xl bg-slate-100 text-slate-800 font-bold text-xs text-center"
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
