'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  alt?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Oldin',
  afterLabel = 'Keyin',
  aspectRatio = 'aspect-[16/10]',
  alt = 'Davolash natijasi oldin va keyin',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className={`comparison-container relative w-full ${aspectRatio} rounded-3xl overflow-hidden shadow-2xl select-none touch-none bg-slate-900 border-4 border-white cursor-ew-resize`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches[0]) handleMove(e.touches[0].clientX);
      }}
    >
      {/* Background Image: BEFORE (Right/Full) */}
      <img
        src={beforeImage}
        alt={`${alt} - ${beforeLabel}`}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Foreground Clipped Image: AFTER (Left) */}
      <div
        className="comparison-after-wrapper absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt={`${alt} - ${afterLabel}`}
          className="comparison-inner-img absolute inset-y-0 left-0 h-full object-cover object-center pointer-events-none"
        />
      </div>

      {/* Divider Vertical Line */}
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.4)] pointer-events-none -ml-0.5 z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Central Circular Drag Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-blue-600 text-blue-600 active:scale-95 transition-transform">
          <ChevronsLeftRight className="w-5 h-5 stroke-[2.5]" />
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3.5 py-1.5 rounded-xl bg-navy-900/80 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase shadow-md border border-white/20">
          {afterLabel}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <span className="px-3.5 py-1.5 rounded-xl bg-navy-900/80 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase shadow-md border border-white/20">
          {beforeLabel}
        </span>
      </div>
    </div>
  );
}
