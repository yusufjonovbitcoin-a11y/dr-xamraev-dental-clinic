'use client';

import React, { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import Footer from '@/components/layout/Footer';
import BookingModal from '@/components/modals/BookingModal';

import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStats } from '@/components/sections/TrustStats';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechSection } from '@/components/sections/TechSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { DoctorsSection } from '@/components/sections/DoctorsSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { AppointmentCta } from '@/components/sections/AppointmentCta';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (service?: string) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <TopBar />
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection onOpenBooking={handleOpenBooking} />
        <TrustStats />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <TechSection />
        <BeforeAfterSection onOpenBooking={handleOpenBooking} />
        <DoctorsSection onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <ReviewsSection />
        <AppointmentCta onOpenBooking={() => handleOpenBooking()} />
        <ContactSection />
      </main>

      {/* Footer & Navigation */}
      <Footer />
      <MobileBottomNav onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
      />
    </div>
  );
}
