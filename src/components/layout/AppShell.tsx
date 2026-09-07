'use client';

import React from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import Footer from '@/components/layout/Footer';
import BookingModal from '@/components/modals/BookingModal';
import { BookingProvider, useBooking } from '@/context/BookingContext';

function AppShellContent({ children }: { children: React.ReactNode }) {
  const { isBookingOpen, selectedService, selectedDoctor, closeBooking } = useBooking();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBottomNav />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        defaultService={selectedService}
        defaultDoctor={selectedDoctor}
      />
    </div>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <AppShellContent>{children}</AppShellContent>
    </BookingProvider>
  );
}
