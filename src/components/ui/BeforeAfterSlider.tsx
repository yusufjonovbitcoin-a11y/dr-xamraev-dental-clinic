'use client';

import React, { useState, useRef, useCallback } from 'react';
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
  aspectRatio = 'aspect-[4/3] sm:aspect-[16/10]',
  alt = 'Davolash natijasi oldin va keyin',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full ${aspectRatio} rounded-3xl overflow-hidden shadow-2xl select-none bg-slate-900 border-4 border-white cursor-ew-resize`}
      style={{ touchAction: 'none' }}
    >
      {/* 1. Base Image: BEFORE (Full background) */}
      <img
        src={beforeImage}
        alt={`${alt} - ${beforeLabel}`}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        draggable={false}
      />

      {/* 2. Foreground Clipped Image: AFTER (Clipped with inset) */}
      <img
        src={afterImage}
        alt={`${alt} - ${afterLabel}`}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
        draggable={false}
      />

      {/* 3. Divider Line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Perfectly Circular Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-blue-600 text-blue-600 pointer-events-none shrink-0 ring-4 ring-black/10">
          <ChevronsLeftRight className="w-5 h-5 stroke-[2.5]" />
        </div>
      </div>

      {/* 4. Badges (Keyin / Oldin) */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 pointer-events-none">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-navy-900/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-md border border-white/20">
          {afterLabel}
        </span>
      </div>

      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 pointer-events-none">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-navy-900/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-md border border-white/20">
          {beforeLabel}
        </span>
      </div>
    </div>
  );
}
