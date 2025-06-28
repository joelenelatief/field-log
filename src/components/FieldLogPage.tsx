'use client';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { CustomCursor } from './CustomCursor';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';
import { gsap } from 'gsap';

// Main spreads data
const fieldLogSpreads = [
  {
    id: 1,
    image: '/images/image1.png',
    location: 'CARHUAZ, PERU',
    coordinates: { lat: '9.2817° S', lng: '77.6450° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 2,
    image: '/images/image2.png',
    location: 'CUZCO, PERU',
    coordinates: { lat: '13.5319° S', lng: '71.9675° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 3,
    image: '/images/image3.png',
    location: 'GUATEMALA CITY',
    coordinates: { lat: '14.6349° N', lng: '90.5069° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 4,
    image: '/images/image4.png',
    location: 'BLAH CITY',
    coordinates: { lat: '14.6349° N', lng: '90.5069° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 5,
    image: '/images/image5.png',
    location: 'BLAH2 CITY',
    coordinates: { lat: '14.6349° N', lng: '90.5069° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
  {
    id: 6,
    image: '/images/image6.png',
    location: 'BLAH3 CITY',
    coordinates: { lat: '14.6349° N', lng: '90.5069° W' },
    numbers: ['01', '02', '03', '04', '05', '06'],
  },
];

// Bottom thumbnail images
const thumbnailImages = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image4.png',
  '/images/image5.png',
  '/images/image6.png',
];

const FieldLogPage: React.FC = () => {
  const [activeSpreadIndex, setActiveSpreadIndex] = useState(0);
  const [activeNumberIndex, setActiveNumberIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

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
        {/* Left Sidebar */}
        <div
          ref={sidebarRef}
          className="w-80 overflow-y-auto border-r border-gray-200 bg-white p-8"
        >
          <div className="space-y-8">
            {/* Company Description */}
            <div>
              <p
                className={`text-sm leading-relaxed text-gray-800 ${neueHaasDisplay.className}`}
              >
                <strong>FIELD LOG</strong> documents history, craft, and
                heritage through storytelling — for mediums being:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex">
                  <span className="w-12 font-semibold">data</span>
                  <span>(documentation, oral history, reviews)</span>
                </li>
                <li className="flex">
                  <span className="w-12 font-semibold">email</span>
                  <span>(essays, brand writing, editorial)</span>
                </li>
                <li className="flex">
                  <span className="w-12 font-semibold">images</span>
                  <span>(photography, video, visual documentation)</span>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3
                className={`mb-3 text-sm font-semibold ${neueHaasDisplay.className}`}
              >
                Our services:
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                concept + strategy / brand identity / photography (digital +
                film) / art direction / editorial design / film production
              </p>
              <p className="mt-3 text-xs text-gray-700">
                Reach out to{' '}
                <a href="mailto:hello@field-log.com" className="underline">
                  hello@field-log.com
                </a>{' '}
                to work with us.
              </p>
            </div>

            {/* Field Log Book Section */}
            <div>
              <h3
                className={`mb-3 text-sm font-semibold ${neueHaasDisplay.className}`}
              >
                FIELD LOG 01: THE BOOK
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                FIELD LOG is a curated chronicle of Latin American craft meets
                contemporary design. This edition explores eight "talleres"
                local artisan workshops across Perú and Colombia, where
                tradition is not preserved but embodied, not frozen in time but
                carried into the present.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-gray-700">
                Amica and Pedro spent a year getting to know and, vetting
                artisans who work with leather, alpaca, crochet, tula weaving,
                and wood carving, exploring the cultural boundaries of their
                craft. More than places of production, these workshops embody
                generational skill, cultural resilience, and pure artistry.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <div ref={mainAreaRef} className="flex-1 p-8">
            {/* 3-Column Layout: Numbers | Image | Location */}
            <div className="mb-8 grid min-h-[600px] grid-cols-1 items-center gap-8 lg:grid-cols-5">
              {/* Column 1: Clickable Numbers Navigation (Left Side) */}
              <div className="order-2 lg:order-1 lg:col-span-1">
                <div className="flex h-full flex-col justify-center">
                  {/* First row: [01] [02] [03] */}
                  <div className="flex space-x-2">
                    {currentSpread.numbers.slice(0, 3).map((num, index) => (
                      <button
                        key={index}
                        onClick={() => handleNumberClick(index)}
                        className={`cursor-none transition-all duration-300 ${
                          activeNumberIndex === index
                            ? 'text-black'
                            : 'text-gray-400'
                        } `}
                      >
                        <span
                          className={`text-lg font-bold ${neueHaasDisplay.className}`}
                        >
                          [{num}]
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Second row: [04] [05] [06] */}
                  <div className="flex space-x-2">
                    {currentSpread.numbers.slice(3, 6).map((num, index) => (
                      <button
                        key={index + 3}
                        onClick={() => handleNumberClick(index + 3)}
                        className={`cursor-none transition-all duration-300 ${
                          activeNumberIndex === index + 3
                            ? 'text-black'
                            : 'text-gray-400'
                        } `}
                      >
                        <span
                          className={`text-lg font-bold ${neueHaasDisplay.className}`}
                        >
                          [{num}]
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Main Image (Center) */}
              <div className="relative order-1 flex justify-center lg:order-2 lg:col-span-3">
                <div className="relative">
                  <div className="relative inline-block border-[16px] border-black">
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
              <div className="order-3 lg:order-3 lg:col-span-1">
                <div className="flex h-full flex-col justify-center">
                  <div className="text-right">
                    <h3
                      className={`mb-4 text-xl font-bold text-black ${neueHaasDisplay.className}`}
                    >
                      [{currentSpread.location}]
                    </h3>

                    <div className="space-y-1 text-gray-600">
                      <p className={`text-lg ${neueHaasDisplay.className}`}>
                        {currentSpread.coordinates.lat}
                      </p>
                      <p className={`text-lg ${neueHaasDisplay.className}`}>
                        {currentSpread.coordinates.lng}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Thumbnail Grid */}
            <div className="grid grid-cols-6 gap-4">
              {thumbnailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index < fieldLogSpreads.length) {
                      handleSpreadChange(index);
                    }
                  }}
                  className="relative aspect-square cursor-none overflow-hidden rounded transition-opacity hover:opacity-80"
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Active indicator */}
                  {index === activeSpreadIndex && (
                    <div className="absolute inset-0 border-2 border-black"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 px-8 py-6">
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
