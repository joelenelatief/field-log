'use client';

import * as React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';

interface ManifestoPageProps {
  image: string;
  attribution: string;
}

const ManifestoPage: React.FC<ManifestoPageProps> = ({
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
          <Image src={image} alt="MANIFESTO" fill className="object-cover" />
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
          MANIFESTO
        </h1>

        {/* Main Text */}
        <div className={`text-md leading-relaxed ${halTimezone.className}`}>
          <div className="text-left">
            <p className="text-[12px] leading-relaxed italic md:text-[14px]">
              This book is a field log.
              <br />
              A log of candid encounters—
              <br />
              the hum of a sewing machine,
              <br />
              the pause for coffee,
              <br />
              the dance on the pedal loom.
              <br />
              We give space for gestures to speak.
              <br />
              What you&apos;ll find are slow, unhurried stores—
              <br />
              of cultures, rituals and environments.
              <br />
              Stories shaped by the same drives that move us all:
              <br />
              the call to protect heritage, to keep a tradition alive;
              <br />
              the pull to start over, to follow a new calling.
              <br />
              It offers stories of artesanía today—
              <br />
              how we&apos;ve observed and learned to listen.
              <br />
              We step into each taller as guests,
              <br />
              listening before speaking, watching before asking.
              <br />
              We enter each taller quietly, letting its rhythm set the pace.
              <br />
              Each is its own world. A culture, A community.
              <br />
              We give space for gestures to speak—
              <br />
              the work-worn hand,
              <br />
              the click of knitting needles,
              <br />
              the half-smile shared across the table—
              <br />
              binding not just the work, but the people,
              <br />
              into the fabric of something lasting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManifestoPage;
