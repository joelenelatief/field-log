'use client';

import * as React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';

interface DearReaderPageProps {
  image: string;
  attribution: string;
}

const DearReaderPage: React.FC<DearReaderPageProps> = ({
  image,
  attribution,
}) => {
  const slideRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div
      ref={slideRef}
      className="mb-12 grid grid-cols-1 gap-8 sm:px-12 md:grid-cols-6"
    >
      {/* Left Column - Image (1/6 width on desktop) */}
      <div className="space-y-4 md:col-span-1">
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
        <div className="relative aspect-[4/5] w-[100px] border-2 border-[#D6D7CE] md:w-[150px]">
          <Image
            src={image}
            alt="DEAR [READER]"
            fill
            className="object-cover"
          />
        </div>

        {/* Attribution under image */}
        <p
          className={`bold mt-2 text-xs text-gray-600 ${neueHaasDisplay.className}`}
        >
          {attribution}
        </p>
      </div>

      {/* Right Column - Text (5/6 width on desktop) */}
      <div className="space-y-6 pl-0 text-black sm:pl-24 md:col-span-5 md:pr-32">
        {/* Yellow Color Bar */}
        <div className="h-3 w-20 rounded border border-black bg-[#FFF8BA]"></div>

        {/* Title */}
        <h1 className={`text-xl font-bold ${neueHaasDisplay.className}`}>
          DEAR [READER]
        </h1>

        {/* Main Text with Staggered Spacing */}
        <div className={`text-md leading-relaxed ${halTimezone.className}`}>
          <div className="space-y-2 md:space-y-4">
            {/* Line 1 - minimal indent */}
            <div className="mb-2">
              <div className="mb-0 ml-0 text-left text-[12px] md:ml-0 md:text-[14px]">
                We are students—
              </div>
              <div className="mb-0 text-left text-[12px] md:text-[14px]">
                building, creating, and shaping amid uncertainty.
              </div>
              <div className="mb-0 ml-24 text-left text-[12px] md:ml-48 md:text-[14px]">
                Not in spite of it, but with it.
              </div>
            </div>

            <div className="mb-2">
              <div className="mb-0 ml-12 text-left text-[12px] md:ml-24 md:text-[14px]">
                Uncertainty doesn&apos;t scare us -
              </div>
              <div className="mb-0 ml-12 text-left text-[12px] md:ml-24 md:text-[14px]">
                It keeps us curious, present, and paying attention.
              </div>
            </div>

            {/* Line 6 - center-ish */}
            <div className="mb-2 ml-8">
              <div className="mb-0 ml-8 text-left text-[12px] italic md:ml-28 md:text-[14px]">
                Imagine this:
              </div>

              <div className="mb-0 ml-8 text-left text-[12px] md:ml-28 md:text-[14px]">
                There&apos;s a thunderstorm—lightning cracking—
              </div>

              <div className="mb-0 ml-8 text-left text-[12px] md:ml-28 md:text-[14px]">
                And you—you&apos;re in a room, watching the storm
              </div>
              <div className="mb-0 ml-8 text-left text-[12px] md:ml-28 md:text-[14px]">
                But then, curious, you step outside.
              </div>
            </div>

            {/* Line 10 - minimal indent */}
            <div className="ml-4">
              <div className="mb-0 ml-3 text-left text-[12px] md:ml-8 md:text-[14px]">
                And that&apos;s the difference.
              </div>

              <div className="mb-2 ml-12 text-left text-[12px] md:ml-32 md:text-[14px]">
                Lightning doesn&apos;t strike those who sit still.
              </div>

              <div className="mb-2">
                <div className="mb-0 ml-12 pb-0 text-left text-[12px] md:ml-32 md:text-[14px]">
                  It finds the ones in motion—
                </div>

                <div className="mb-0 ml-8 text-left text-[12px] md:ml-32 md:text-[14px]">
                  who observe, who listen,
                </div>

                <div className="mb-0 ml-6 text-left text-[12px] md:ml-32 md:text-[14px]">
                  who move toward mystery.
                </div>
              </div>
            </div>

            {/* Line 15 - slight indent */}
            <div className="mb-2 ml-2 text-left text-[12px] md:ml-6 md:text-[14px]">
              Our work is guided by that same motion.
            </div>

            {/* Line 16 - slight indent */}
            <div className="ml-12">
              <div className="mb-0 ml-2 text-left text-[12px] md:ml-16 md:text-[14px]">
                We chase ideas.
              </div>

              {/* Line 17 - moderate indent */}
              <div className="mb-0 ml-10 text-left text-[12px] md:ml-28 md:text-[14px]">
                We embrace the what-ifs,
              </div>

              {/* Line 18 - deep indent */}
              <div className="mb-0 ml-16 text-left text-[12px] md:ml-48 md:text-[14px]">
                We honor instinct.
              </div>
            </div>

            <div className="ml-12">
              <div className="mb-0 ml-8 text-left text-[12px] md:ml-16 md:text-[14px]">
                We do our fieldwork —
              </div>
              <div className="mb-0 ml-8 text-left text-[12px] md:ml-16 md:text-[14px]">
                observing, archiving, logging in
              </div>
              <div className="mb-0 ml-8 text-left text-[12px] md:ml-16 md:text-[14px]">
                all the information around us.
              </div>
            </div>

            {/* Final line - centered emphasis */}
            <div className="mt-4 mb-0 ml-16 text-left text-[12px] font-medium italic md:ml-32 md:text-[14px]">
              Welcome to Field Log
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DearReaderPage;
