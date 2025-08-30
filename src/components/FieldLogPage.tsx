'use client';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { CustomCursor } from './CustomCursor';
import { neueHaasDisplay, abcRomMono } from '@/lib/fonts';
import { gsap } from 'gsap';

// Main spreads data
const fieldLogSpreads = [
  {
    id: 1,
    image: '/images/child.png',
    location: 'CARHUAZ, PERÚ',
    coordinates: { lat: '9.2817° S', lng: '77.6450° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 2,
    image: '/images/threadbw.png',
    location: 'HUARAZ, PERÚ',
    coordinates: { lat: '9.2817° S', lng: '77.6450° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 3,
    image: '/images/foot.png',
    location: 'HUANCAVELICA, PERÚ',
    coordinates: { lat: '9.2817° S', lng: '77.6450° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 4,
    image: '/images/ladies.png',
    location: 'CARHUAZ, PERÚ',
    coordinates: { lat: '9.2817° S', lng: '77.6450° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 5,
    image: '/images/image7.png',
    location: 'CHOCLOCO, PERÚ',
    coordinates: { lat: '13.1603° S', lng: '75.0721° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 6,
    image: '/images/image8.png',
    location: 'LIMA, PERÚ',
    coordinates: { lat: '12.1849° S', lng: '77.0075° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
];

// Bottom thumbnail images
const thumbnailImages = [
  '/images/child.png',
  '/images/threadbw.png',
  '/images/foot.png',
  '/images/ladies.png',
  '/images/image7.png',
  '/images/image8.png',
];

const FieldLogPage: React.FC = () => {
  const [activeSpreadIndex, setActiveSpreadIndex] = useState(0);
  const [activeNumberIndex, setActiveNumberIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }

    if (sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
        }
      );
    }

    if (mainAreaRef.current) {
      gsap.fromTo(
        mainAreaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const currentSpread = fieldLogSpreads[activeSpreadIndex];

  const handleSpreadChange = (index: number) => {
    setActiveSpreadIndex(index);
    setActiveNumberIndex(0); // Reset to first number when changing spreads
  };

  const handleNumberClick = (numberIndex: number) => {
    // Navigate to the next spread/image
    const nextSpreadIndex = (activeSpreadIndex + 1) % fieldLogSpreads.length;
    setActiveSpreadIndex(nextSpreadIndex);
    setActiveNumberIndex(numberIndex);
  };

  return (
    <>
      <CustomCursor />
      <div ref={containerRef} className="flex min-h-screen bg-[#F6F7EF]">
        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <div ref={mainAreaRef} className="flex-1 p-8">
            {/* 3-Column Layout: Numbers | Image | Location */}
            <div className="mb-4 min-h-[400px] lg:mb-8 lg:min-h-[600px]">
              {/* Mobile Layout */}
              <div className="flex items-center gap-4 lg:hidden">
                {/* Left Numbers */}
                <div className="flex flex-col justify-center space-y-2">
                  {currentSpread.numbers.slice(0, 3).map((num, index) => (
                    <button
                      key={index}
                      onClick={() => handleNumberClick(index)}
                      className={`cursor-none transition-all duration-300 ${
                        activeNumberIndex === index
                          ? 'text-black'
                          : 'text-gray-400'
                      }`}
                    >
                      <span
                        className={`text-sm font-bold ${neueHaasDisplay.className}`}
                      >
                        [{num}]
                      </span>
                    </button>
                  ))}
                </div>

                {/* Center Image */}
                <div className="relative flex flex-1 justify-center">
                  <div className="relative">
                    <div className="relative inline-block border-[8px] border-black">
                      <Image
                        src={currentSpread.image}
                        alt={`Field Log - ${currentSpread.location}`}
                        width={800}
                        height={800}
                        className="object-cover"
                        priority
                        style={{ height: '300px', width: 'auto' }}
                      />
                    </div>

                    {/* Spread Navigation Dots */}
                    <div className="flex justify-center space-x-2 py-4">
                      {fieldLogSpreads.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleSpreadChange(index)}
                          className={`h-2 w-2 cursor-none rounded-full transition-colors ${
                            index === activeSpreadIndex
                              ? 'bg-black'
                              : 'bg-gray-300'
                          }`}
                          aria-label={`Go to spread ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Numbers */}
                <div className="flex flex-col justify-center space-y-2">
                  {currentSpread.numbers.slice(3, 6).map((num, index) => (
                    <button
                      key={index + 3}
                      onClick={() => handleNumberClick(index + 3)}
                      className={`cursor-none transition-all duration-300 ${
                        activeNumberIndex === index + 3
                          ? 'text-black'
                          : 'text-gray-400'
                      }`}
                    >
                      <span
                        className={`text-sm font-bold ${neueHaasDisplay.className}`}
                      >
                        [{num}]
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Info for Mobile */}
              <div className="mt-4 pb-4 text-center lg:hidden">
                <h3
                  className={`mb-2 text-lg font-bold text-black ${neueHaasDisplay.className}`}
                >
                  [{currentSpread.location}]
                </h3>
                <div className="space-y-1 text-gray-600">
                  <p className={`text-sm ${abcRomMono.className}`}>
                    {currentSpread.coordinates.lat}
                  </p>
                  <p className={`text-sm ${abcRomMono.className}`}>
                    {currentSpread.coordinates.lng}
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-5 lg:items-center lg:gap-8">
                {/* Column 1: Clickable Numbers Navigation (Left Side) */}
                <div className="lg:col-span-1">
                  <div className="flex h-full flex-col justify-end">
                    {/* First row: [01] [02] [03] */}
                    <div className="flex justify-end space-x-2">
                      {currentSpread.numbers.slice(0, 3).map((num, index) => (
                        <button
                          key={index}
                          onClick={() => handleNumberClick(index)}
                          className={`cursor-none transition-all duration-300 ${
                            activeNumberIndex === index
                              ? 'text-black'
                              : 'text-gray-400'
                          }`}
                        >
                          <span
                            className={`text-xl font-bold ${neueHaasDisplay.className}`}
                          >
                            [{num}]
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Second row: [04] [05] [06] */}
                    <div className="flex justify-end space-x-2">
                      {currentSpread.numbers.slice(3, 6).map((num, index) => (
                        <button
                          key={index + 3}
                          onClick={() => handleNumberClick(index + 3)}
                          className={`cursor-none transition-all duration-300 ${
                            activeNumberIndex === index + 3
                              ? 'text-black'
                              : 'text-gray-400'
                          }`}
                        >
                          <span
                            className={`text-xl font-bold ${neueHaasDisplay.className}`}
                          >
                            [{num}]
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Main Image (Center) */}
                <div className="relative flex justify-center lg:col-span-3">
                  <div className="relative">
                    <div className="relative inline-block border-[14px] border-black">
                      <Image
                        src={currentSpread.image}
                        alt={`Field Log - ${currentSpread.location}`}
                        width={1200}
                        height={1200}
                        className="object-cover"
                        priority
                        style={{ height: '500px', width: 'auto' }}
                      />
                    </div>

                    {/* Spread Navigation Dots */}
                    <div className="flex justify-center space-x-2 py-4">
                      {fieldLogSpreads.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleSpreadChange(index)}
                          className={`h-2 w-2 cursor-none rounded-full transition-colors ${
                            index === activeSpreadIndex
                              ? 'bg-black'
                              : 'bg-gray-300'
                          }`}
                          aria-label={`Go to spread ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 3: Location Information (Right Side) */}
                <div className="lg:col-span-1">
                  <div className="flex h-full flex-col justify-center">
                    <div className="text-left">
                      <h3
                        className={`mb-4 text-xl font-bold text-black ${neueHaasDisplay.className}`}
                      >
                        [{currentSpread.location}]
                      </h3>

                      <div className="space-y-1 text-gray-600">
                        <p className={`text-md ${abcRomMono.className}`}>
                          {currentSpread.coordinates.lat}
                        </p>
                        <p className={`text-md ${abcRomMono.className}`}>
                          {currentSpread.coordinates.lng}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Thumbnail Grid */}
            <div className="grid grid-cols-3 gap-1 sm:grid-cols-6 sm:gap-4">
              {thumbnailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index < fieldLogSpreads.length) {
                      setActiveSpreadIndex(index);
                      setActiveNumberIndex(index); // Set the number to match the thumbnail clicked
                    }
                  }}
                  className="relative aspect-[3/4] cursor-none overflow-hidden border-2 border-black transition-opacity hover:opacity-80"
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-102"
                  />
                  {/* Active indicator */}
                  {index === activeSpreadIndex && (
                    <div className="absolute inset-0 border-2 border-black"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer - Hidden on mobile home page since it's added after AboutSection in Layout */}
          <footer className="hidden border-t border-gray-200 px-8 py-6 lg:block">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className={neueHaasDisplay.className}>FIELD LOG LLC</span>
              <span className={neueHaasDisplay.className}>
                ESTABLISHED c. 2025
              </span>
              <a
                href="https://instagram.com/fieldlog"
                className={`transition-colors hover:text-gray-700 ${neueHaasDisplay.className}`}
              >
                INSTAGRAM
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default FieldLogPage;