'use client';

import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  isBookingOpen: boolean;
  selectedService?: string;
  selectedDoctor?: string;
  openBooking: (service?: string, doctor?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  isBookingOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>();

  const openBooking = (service?: string, doctor?: string) => {
    setSelectedService(service);
    setSelectedDoctor(doctor);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
    setSelectedDoctor(undefined);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        selectedService,
        selectedDoctor,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
