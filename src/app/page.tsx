'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStats } from '@/components/sections/TrustStats';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { DoctorsSection } from '@/components/sections/DoctorsSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { AppointmentCta } from '@/components/sections/AppointmentCta';
import { useBooking } from '@/context/BookingContext';

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      <HeroSection onOpenBooking={openBooking} />
      <TrustStats />
      <ServicesSection onOpenBooking={openBooking} />
      <div className="bg-white pb-2 text-center">
        <Link href="/xizmatlar" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-navy-900 transition hover:border-blue-300 hover:text-blue-700">
          Barcha xizmatlar va narxlar <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <BeforeAfterSection onOpenBooking={openBooking} />
      <DoctorsSection onOpenBooking={openBooking} />
      <WhyChooseUs />
      <ReviewsSection />
      <AppointmentCta onOpenBooking={() => openBooking()} />
    </>
  );
}
