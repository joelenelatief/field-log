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
      {/* Paper grain filter definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="paper-grain" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              numOctaves="3"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"
              in="noise"
              result="grain"
            />
            <feBlend mode="multiply" in="SourceGraphic" in2="grain" />
          </filter>
        </defs>
      </svg>
      <div ref={containerRef} className="min-h-screen bg-[#F6F7EF]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
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
                {
                  id: 0,
                  numerical: 'i.',
                  label: 'dear [reader]',
                  bgColor: '#D6D7CE',
                },
                {
                  id: 1,
                  numerical: 'ii.',
                  label: 'what to expect',
                  bgColor: '#D6D7CE',
                },
                {
                  id: 2,
                  numerical: 'iii.',
                  label: 'manifesto',
                  bgColor: '#D6D7CE',
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleSlideChange(tab.id)}
                  className={`group relative flex cursor-none items-center rounded-l-lg border-2 border-r-0 border-[#92938D] px-4 py-6 text-sm font-bold shadow-md transition-all ${
                    activeSlideIndex === tab.id
                      ? `bg-opacity-60 text-semibold bg-white text-black ${neueHaasDisplay.className} uppercase`
                      : `text-gray-600 hover:scale-103 hover:bg-white/80 hover:shadow-sm text-normal${neueHaasDisplay.className} uppercase`
                  } bold`}
                  style={{
                    width: '160px',
                    height: '24px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(128, 128, 128, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0px 16px 40px 0px #0000004D',
                    opacity: 1,
                    borderImageSource:
                      'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background with grain effect - contained within borders */}
                  <div
                    className="absolute inset-0 rounded-l-lg"
                    style={{
                      filter: 'url(#paper-grain)',
                      backgroundColor:
                        activeSlideIndex === tab.id
                          ? 'rgba(255, 255, 255, 0.9)'
                          : 'rgba(255, 255, 255, 0.3)',
                      zIndex: 0,
                    }}
                  />
                  {/* Text - only visible when active */}
                  <span className={`relative z-10 block`}>
                    <span
                      className={`text-xs lowercase ${halTimezone.className} mr-2`}
                    >
                      {tab.numerical}
                    </span>
                    <span className={`relative text-xs`}>
                      {tab.label}
                      {/* Wavy underline for selected tab */}
                      {activeSlideIndex === tab.id && (
                        <svg
                          className="absolute -bottom-2 left-0 w-full"
                          height="8"
                          viewBox="0 0 100 8"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <filter
                              id="wavy-filter"
                              x="-20%"
                              y="-20%"
                              width="140%"
                              height="140%"
                            >
                              <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.8"
                                numOctaves="2"
                                result="turbulence"
                              />
                              <feDisplacementMap
                                in="SourceGraphic"
                                in2="turbulence"
                                scale="1"
                                xChannelSelector="R"
                                yChannelSelector="G"
                              />
                            </filter>
                          </defs>
                          <path
                            d="M0,4 Q6,1.5 12,4 Q18,6.5 24,4 Q30,2 36,4 Q42,5.5 48,4 Q54,2.5 60,4 Q66,6 72,4 Q78,1.5 84,4 Q90,5.5 96,4 Q100,3.5 100,4"
                            stroke="currentColor"
                            strokeWidth="0.8"
                            fill="none"
                            strokeLinecap="round"
                            className="wavy-underline"
                            style={{
                              filter: 'url(#wavy-filter)',
                              opacity: 0.8,
                            }}
                          />
                        </svg>
                      )}
                    </span>
                  </span>
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