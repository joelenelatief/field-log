'use client';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';
import { gsap } from 'gsap';
import Image from 'next/image';
import DearReaderPage from './DearReaderPage';
import WhatToExpectPage from './WhatToExpectPage';
import ManifestoPage from './ManifestoPage';

// Magazine spreads data
const magazineSpreads = [
  {
    id: 1,
    sidebarImage: '/images/about/shoe.png',
    slideshowImage: '/images/about/glove.png',
    title: 'DEAR [READER]',
    attribution: 'MACHU PICCHU - PERU 2024',
  },
  {
    id: 2,
    sidebarImage: '/images/about/window.png',
    slideshowImage: '/images/about/shore.png',
    title: 'WHAT TO EXPECT',
    attribution: 'CUZCO - PERU 2024',
  },
  {
    id: 3,
    sidebarImage: '/images/about/polaroid.png',
    slideshowImage: '/images/about/blur.png',
    title: 'MANIFESTO',
    attribution: 'GUATEMALA CITY - 2024',
  },
];

const AboutPage: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, []);

  const currentSlide = magazineSpreads[activeSlideIndex];

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  // Navigation functions removed as they're no longer needed with tab interface

  const renderCurrentPage = () => {
    switch (currentSlide.id) {
      case 1:
        return (
          <DearReaderPage
            image={currentSlide.slideshowImage}
            attribution={currentSlide.attribution}
          />
        );
      case 2:
        return (
          <WhatToExpectPage
            image={currentSlide.slideshowImage}
            attribution={currentSlide.attribution}
          />
        );
      case 3:
        return (
          <ManifestoPage
            image={currentSlide.slideshowImage}
            attribution={currentSlide.attribution}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <CustomCursor />
      <div ref={containerRef} className="min-h-screen bg-[#F6F7EF]">
        <div className="mx-auto max-w-6xl px-8 py-8">
          {/* Header Section */}
          <div className="mb-16 text-center">
            {/* Main Title */}
            <h1
              className={`mb-2 text-2xl font-semibold text-black ${neueHaasDisplay.className}`}
            >
              ABOUT FIELD LOG{' '}
              <span
                className={`ml-2 italic underline ${halTimezone.className}`}
              >
                Contact Us.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-md mb-4 text-gray-600 italic ${halTimezone.className}`}
            >
              Who we are, our values and how to work with us.
            </p>

            {/* Large Header Image */}
            <div className="flex justify-center">
              <div className="relative border-[12px] border-black">
                <Image
                  src={currentSlide.sidebarImage}
                  alt="Header image"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  style={{ height: '600px', width: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Magazine Layout */}
          {renderCurrentPage()}

          {/* Side Tab Menu */}
          <div className="fixed top-1/3 right-0 z-50 -translate-y-1/2 sm:top-1/2">
            <div className="flex flex-col items-end space-y-1">
              {[
                { id: 0, label: 'i. dear reader,', bgColor: '#D6D7CE' },
                { id: 1, label: 'ii. what to expect', bgColor: '#D6D7CE' },
                { id: 2, label: 'iii. manifesto', bgColor: '#D6D7CE' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleSlideChange(tab.id)}
                  className={`group relative flex cursor-none items-center rounded-l-lg border-2 border-r-0 border-[#92938D] px-4 py-6 text-sm font-bold shadow-md transition-all ${
                    activeSlideIndex === tab.id
                      ? 'text-black italic underline'
                      : 'text-gray-500 hover:scale-105 hover:bg-white/80 hover:shadow-sm'
                  } ${halTimezone.className} bold`}
                  style={{
                    backgroundColor:
                      activeSlideIndex === tab.id
                        ? tab.bgColor
                        : 'rgba(255, 255, 255, 0.7)',
                    width: '150px',
                    height: '24px',
                  }}
                >
                  {/* Text - only visible when active */}
                  <span className={`block} relative z-10`}>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;