'use client';

import * as React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';

interface WhatToExpectPageProps {
  image: string;
  attribution: string;
}

const WhatToExpectPage: React.FC<WhatToExpectPageProps> = ({
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
        <div className="relative aspect-[4/5] w-48 border-2 border-black md:w-full">
          <Image
            src={image}
            alt="WHAT TO EXPECT"
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
          "ERS"
        </h1>

        {/* Definition Style Content */}
        <div className={`text-md leading-relaxed ${halTimezone.className}`}>
          <div className="space-y-6">
            {/* Definition Header */}
            <div className="mb-4">
              <p
                className={`text-sm text-gray-600 ${neueHaasDisplay.className}`}
              >
                suffix /3ːrs/ 
              </p>
            </div>

            {/* Definition Body */}
            <div className="space-y-4">
              <p
                className={`text-[12px] md:text-[14px] ${halTimezone.className}`}
              >
                <span className={`${neueHaasDisplay.className} font-bold`}>
                  REFERS TO
                </span>{' '}
                nouns for people who perform a particular action, engage in a
                practice, or belong to a group defined by behavior or mindset.
                They’re people who do—who explore, observe, listen, and log the
                world around them. At Field Log, we’re the “-ers.” 
              </p>

              <p
                className={`text-[12px] md:text-[14px] ${halTimezone.className}`}
              >
                Explorers. Observers. Listeners. We never sit still. 
              </p>
            </div>

            {/* Horizontal Line */}
            <div className="my-6 border-t border-gray-300"></div>

            {/* Examples */}
            <div className="space-y-4">
              <p className={`text-sm ${halTimezone.className} italic`}>ex.</p>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span
                    className={`text-[12px] italic md:text-[14px] ${halTimezone.className}`}
                  >
                    /Explorers/ Excavating stories, and sifting through archives
                    —lost, buried, and overlooked.
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span
                    className={`text-[12px] italic md:text-[14px] ${halTimezone.className}`}
                  >
                    /Observers/ Noticing the unspoken, the in-between
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span
                    className={`text-[12px] italic md:text-[14px] ${halTimezone.className}`}
                  >
                    /Listeners/ Listening to what’s said, what’s withheld, to
                    rhythm, and to what memory leaves behind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToExpectPage;
