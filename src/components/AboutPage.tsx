'use client';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';
import { gsap } from 'gsap';
import Image from 'next/image';

// Magazine spreads data
const magazineSpreads = [
  {
    id: 1,
    image: '/images/image1.png',
    title: 'DEAR [READER]',
    text: `We are students—         
    building, creating, and shaping amid uncertainty.
                                     Not in spite of it, but with it.                        
                                     Uncertainty doesn't scare us -                         
                                     It keeps us curious, present, and paying attention.

                                  Imagine this:                            
                                  There's a thunderstorm- lightning cracking                             
                                  And you—you're in a room, watching the storm 
               And that's the difference.
                                     Lightning doesn't strike those who sit still.                                     
                                     It finds the ones in motion—                             
                                     the ones who observe, who listen, 
                             who move toward mystery.

           Our work is guided by that same motion.                               
           We chase ideas. 
                                      We embrace the what-ifs, 
                                                       We honor instinct.
                                
                                   We do our fieldwork —
                                   observing, archiving, logging in 
                                   all the information around us. 

                                            Welcome to Field Log`,
    attribution: 'MACHU PICCHU - PERU 2024',
  },
  {
    id: 2,
    image: '/images/image2.png',
    title: 'WHAT TO EXPECT',
    text: `(What to expect an artisan from Field-Log Book)

This book connects you with artisans so you can bring your 
vision to life. Here's what to expect - and what's expected 
of you - if you want to collaborate with an artisan:

i. RESPECT + COMMUNICATION
Start with respect. Understand the artisan's craft, 
materials, and design process. Communicate clearly and set 
expectations. Many artisans primarily speak Spanish - be 
ready to use Spanish or a translator.

ii. SMALL BATCHES + TIMELINES
Most artisans work in small batches - under 100 units - to 
ensure quality. If you need higher volumes, discuss it early. 
Handcrafted work takes time, and timelines can shift. 
Stay flexible.

iii. SUPPORT
We are a studio dedicated to amplifying artisans' stories -
bringing their culture to life through brand, design, and 
communication. Field Log is here to guide you. Reach out 
anytime.`,
    attribution: 'CUZCO - PERU 2024',
  },
  {
    id: 3,
    image: '/images/image3.png',
    title: 'MANIFESTO',
    text: `(How to connect with an artisan from Field-Log Book)

i.                          If you're here for craft,
ii.                             start with respect.
iii.                   If you're here for speed,
iv.                       you're in the wrong book.
v.                        If you want to connect with an artisan -
vi.                         and need help, contact us for an introduction.
vii.                    Come with curiosity.
viii.                    Come with care.
ix.                     Come with patience.
x.                     Each taller, is not just a place of production.
xi.                  Each taller, is a world.
xii.                    a culture.
xiii.                   a community.
xiv.         We are observers, learning from the field.
xv.                   We are listeners.
xvii.                  We are Field-Log.`,
    attribution: 'GUATEMALA CITY - 2024',
  },
];

const AboutPage: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!slideRef.current) return;

    gsap.fromTo(
      slideRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, [activeSlideIndex]);

  const currentSlide = magazineSpreads[activeSlideIndex];

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  const goToPrevious = () => {
    setActiveSlideIndex((prev) =>
      prev === 0 ? magazineSpreads.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveSlideIndex((prev) =>
      prev === magazineSpreads.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <CustomCursor />
      <div ref={containerRef} className="min-h-screen bg-[#F6F7EF]">
        <div className="mx-auto max-w-6xl px-8 py-16">
          {/* Header Section */}
          <div className="mb-16 text-center">
            {/* Main Title */}
            <h1
              className={`mb-4 text-3xl font-bold text-black ${neueHaasDisplay.className}`}
            >
              ABOUT FIELD LOG{' '}
              <span className={`italic underline ${halTimezone.className}`}>
                Contact Us.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`mb-12 text-lg text-gray-600 italic ${halTimezone.className}`}
            >
              Who we are, our values and how to work with us.
            </p>

            {/* Large Header Image */}
            <div className="mb-16 flex justify-center">
              <div className="relative border-[10px] border-black">
                <Image
                  src="/images/bigWindow.png"
                  alt="Mountain view through window"
                  width={300}
                  height={400}
                  className="object-cover"
                  style={{ height: '400px', width: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Magazine Layout */}
          <div
            ref={slideRef}
            className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-8"
          >
            {/* Left Column - Image (1/5 width on desktop) */}
            <div className="space-y-4 md:col-span-2">
              {/* Purple/Pink Color Bar */}
              <div className="h-3 w-20 rounded border border-black bg-[#B55F92]"></div>

              {/* Attribution */}
              <div>
                <p
                  className={`mb-2 text-xs text-gray-600 ${neueHaasDisplay.className}`}
                >
                  Words by:
                </p>
                <p
                  className={`text-xs font-semibold text-gray-800 ${neueHaasDisplay.className}`}
                >
                  FIELD LOG Team
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] w-48 border-2 border-black md:w-full">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Attribution under image */}
              <p
                className={`mt-2 text-xs text-gray-600 ${neueHaasDisplay.className}`}
              >
                {currentSlide.attribution}
              </p>
            </div>

            {/* Right Column - Text (4/5 width on desktop) */}
            <div className="space-y-6 pl-0 text-black sm:pl-12 md:col-span-6">
              {/* Yellow Color Bar */}
              <div className="h-3 w-20 rounded border border-black bg-[#FFF8BA]"></div>

              {/* Title */}
              <h1 className={`text-xl font-bold ${neueHaasDisplay.className}`}>
                {currentSlide.title}
              </h1>

              {/* Main Text with Staggered Spacing */}
              <div
                className={`text-md leading-relaxed ${halTimezone.className}`}
              >
                {currentSlide.id === 1 ? (
                  // Special freeform poem layout for DEAR [READER]
                  <div className="space-y-2 md:space-y-4">
                    {/* Line 1 - minimal indent */}
                    <div className="ml-0 text-left text-[12px] md:ml-0 md:text-base">
                      We are students—
                    </div>

                    {/* Line 2 - slight indent */}
                    <div className="ml-4 text-left text-[12px] md:ml-6 md:text-base">
                      building, creating, and shaping amid uncertainty.
                    </div>

                    {/* Line 3 - deep indent */}
                    <div className="ml-12 text-left text-[12px] md:ml-32 md:text-base">
                      Not in spite of it, but with it.
                    </div>

                    {/* Line 4 - deep indent */}
                    <div className="ml-12 text-left text-[12px] md:ml-32 md:text-base">
                      Uncertainty doesn't scare us -
                    </div>

                    {/* Line 5 - deep indent */}
                    <div className="ml-12 text-left text-[12px] md:ml-32 md:text-base">
                      It keeps us curious, present, and paying attention.
                    </div>

                    {/* Spacing */}
                    <div className="h-4"></div>

                    {/* Line 6 - center-ish */}
                    <div className="ml-8 text-left text-[12px] md:ml-28 md:text-base">
                      Imagine this:
                    </div>

                    {/* Line 7 - center-ish */}
                    <div className="ml-8 text-left text-[12px] md:ml-28 md:text-base">
                      There's a thunderstorm- lightning cracking
                    </div>

                    {/* Line 8 - center-ish */}
                    <div className="ml-8 text-left text-[12px] md:ml-28 md:text-base">
                      And you—you're in a room, watching the storm
                    </div>

                    {/* Line 9 - minimal indent */}
                    <div className="ml-3 text-left text-[12px] md:ml-8 md:text-base">
                      And that's the difference.
                    </div>

                    {/* Line 10 - deep indent */}
                    <div className="ml-12 text-left text-[12px] md:ml-32 md:text-base">
                      Lightning doesn't strike those who sit still.
                    </div>

                    {/* Line 11 - deep indent */}
                    <div className="ml-12 text-left text-[12px] md:ml-32 md:text-base">
                      It finds the ones in motion—
                    </div>

                    {/* Line 12 - moderate indent */}
                    <div className="ml-8 text-left text-[12px] md:ml-24 md:text-base">
                      who observe, who listen,
                    </div>

                    {/* Line 13 - slight indent */}
                    <div className="ml-6 text-left text-[12px] md:ml-16 md:text-base">
                      who move toward mystery.
                    </div>

                    {/* Spacing */}
                    <div className="h-4"></div>

                    {/* Line 14 - slight indent */}
                    <div className="ml-2 text-left text-[12px] md:ml-6 md:text-base">
                      Our work is guided by that same motion.
                    </div>

                    {/* Line 15 - slight indent */}
                    <div className="ml-2 text-left text-[12px] md:ml-6 md:text-base">
                      We chase ideas.
                    </div>

                    {/* Line 16 - moderate indent */}
                    <div className="ml-10 text-left text-[12px] md:ml-24 md:text-base">
                      We embrace the what-ifs,
                    </div>

                    {/* Line 17 - deep indent */}
                    <div className="ml-16 text-left text-[12px] md:ml-36 md:text-base">
                      We honor instinct.
                    </div>

                    {/* Spacing */}
                    <div className="h-4"></div>

                    {/* Line 18 - moderate indent */}
                    <div className="ml-8 text-left text-[12px] md:ml-20 md:text-base">
                      We do our fieldwork —
                    </div>

                    {/* Line 19 - moderate indent */}
                    <div className="ml-8 text-left text-[12px] md:ml-20 md:text-base">
                      observing, archiving, logging in
                    </div>

                    {/* Line 20 - moderate indent */}
                    <div className="ml-8 text-left text-[12px] md:ml-20 md:text-base">
                      all the information around us.
                    </div>

                    {/* Spacing */}
                    <div className="h-6"></div>

                    {/* Final line - centered emphasis */}
                    <div className="ml-12 text-left text-[12px] font-medium md:ml-32 md:text-base">
                      Welcome to Field Log
                    </div>
                  </div>
                ) : currentSlide.id === 2 ? (
                  // Special layout for WHAT TO EXPECT with bold headers
                  <div className="space-y-4">
                    <p className="mb-6 text-[12px] md:text-base">
                      (What to expect an artisan from Field-Log Book)
                    </p>

                    <p className="mb-6 text-[12px] md:text-base">
                      This book connects you with artisans so you can bring your
                      vision to life. Here's what to expect - and what's
                      expected of you - if you want to collaborate with an
                      artisan:
                    </p>

                    <div className="space-y-6">
                      {/* Section 1 */}
                      <div>
                        <h3 className="mb-2 text-[12px] font-semibold md:text-base">
                          i. RESPECT + COMMUNICATION
                        </h3>
                        <p className="text-[12px] md:text-base">
                          Start with respect. Understand the artisan's craft,
                          materials, and design process. Communicate clearly and
                          set expectations. Many artisans primarily speak
                          Spanish - be ready to use Spanish or a translator.
                        </p>
                      </div>

                      {/* Section 2 */}
                      <div>
                        <h3 className="mb-2 text-[12px] font-bold md:text-base">
                          ii. SMALL BATCHES + TIMELINES
                        </h3>
                        <p className="text-[12px] md:text-base">
                          Most artisans work in small batches - under 100 units
                          - to ensure quality. If you need higher volumes,
                          discuss it early. Handcrafted work takes time, and
                          timelines can shift. Stay flexible.
                        </p>
                      </div>

                      {/* Section 3 */}
                      <div>
                        <h3 className="mb-2 text-[12px] font-bold md:text-base">
                          iii. SUPPORT
                        </h3>
                        <p className="text-[12px] md:text-base">
                          We are a studio dedicated to amplifying artisans'
                          stories - bringing their culture to life through
                          brand, design, and communication. Field Log is here to
                          guide you. Reach out anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : currentSlide.id === 3 ? (
                  // Special layout for MANIFESTO with numbers on left
                  <div className="space-y-4">
                    <p className="mb-6 text-left text-[12px] md:text-base">
                      (How to connect with an artisan from Field-Log Book)
                    </p>

                    <div className="space-y-3">
                      {/* Each manifesto item */}
                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          i.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          If you're here for craft,
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          ii.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          start with respect.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          iii.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          If you're here for speed,
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          iv.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          you're in the wrong book.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          v.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          If you want to connect with an artisan -
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          vi.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          and need help, contact us for an introduction.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          vii.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          Come with curiosity.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          viii.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          Come with care.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          ix.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          Come with patience.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          x.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          Each taller, is not just a place of production.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          xi.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          Each taller, is a world.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          xii.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          a culture.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          xiii.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          a community.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          xiv.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          We are observers, learning from the field.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          xv.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          We are listeners.
                        </span>
                      </div>

                      <div className="flex flex-row items-start gap-2 md:gap-4">
                        <span className="w-6 flex-shrink-0 text-right text-[12px] md:w-8 md:text-sm">
                          xvii.
                        </span>
                        <span className="flex-1 text-left text-[12px] md:text-base">
                          We are Field-Log.
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Default layout for other slides
                  <pre className="font-[inherit] whitespace-pre-wrap">
                    {currentSlide.text}
                  </pre>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-8 flex items-center justify-center gap-8">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="flex h-8 w-8 cursor-none items-center justify-center rounded-full border border-gray-400 transition-colors hover:border-gray-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Navigation Dots */}
            <div className="flex space-x-2">
              {magazineSpreads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-2 w-2 cursor-none rounded-full transition-colors ${
                    index === activeSlideIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="flex h-8 w-8 cursor-none items-center justify-center rounded-full border border-gray-400 transition-colors hover:border-gray-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Bottom Thumbnail Images */}
          <div className="flex justify-center space-x-4">
            {magazineSpreads.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`relative aspect-[4/5] w-24 cursor-none overflow-hidden border-2 transition-all ${
                  index === activeSlideIndex
                    ? 'border-black'
                    : 'border-gray-300'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;