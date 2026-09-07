'use client';

import React from 'react';
import Link from 'next/link';
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
import { useBooking } from '@/context/BookingContext';
import { ArrowRight, Sparkles, Stethoscope, Users, Cpu, MapPin } from 'lucide-react';

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      <HeroSection onOpenBooking={(s) => openBooking(s)} />
      <TrustStats />

      {/* Services Section with link to full /xizmatlar page */}
      <ServicesSection onOpenBooking={(s) => openBooking(s)} />

      {/* Tech Section with link to full /texnologiyalar page */}
      <TechSection />

      {/* Before / After Section with link to full /natijalar page */}
      <BeforeAfterSection onOpenBooking={(s) => openBooking(s)} />

      {/* Doctors Section with link to full /shifokorlar page */}
      <DoctorsSection onOpenBooking={(d) => openBooking(undefined, d)} />

      {/* 6 Reasons Why Choose Us */}
      <WhyChooseUs />

      {/* Patient Reviews */}
      <ReviewsSection />

      {/* Consultation Banner */}
      <AppointmentCta onOpenBooking={() => openBooking()} />

      {/* Contact & Map Section */}
      <ContactSection />
    </>
  );
}
