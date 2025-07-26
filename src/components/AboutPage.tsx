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
              <div className="relative aspect-[4/5] border-2 border-black">
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
            <div className="space-y-6 pl-12 text-black md:col-span-6">
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
                <pre className="font-[inherit] whitespace-pre-wrap">
                  {currentSlide.text}
                </pre>
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