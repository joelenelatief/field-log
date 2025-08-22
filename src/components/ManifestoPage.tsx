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
          <div className="grid grid-cols-[auto_1fr] gap-x-4 text-left">
            <div className="text-[12px] leading-relaxed font-bold italic md:text-[14px]">
              <div>i.</div>
              <div>ii.</div>
              <div>iii.</div>
              <div>iv.</div>
              <div>v.</div>
              <div>vi.</div>
              <div>vii.</div>
              <div>viii.</div>
              <div>ix.</div>
              <div>x.</div>
              <div>xi.</div>
              <div>xii.</div>
              <div>xiii.</div>
              <div>xiv.</div>
              <div>xv.</div>
              <div>xvi.</div>
              <div>xvii.</div>
              <div>xviii.</div>
              <div>xix.</div>
              <div>xx.</div>
              <div>xxi.</div>
              <div>xxii.</div>
              <div>xxiii.</div>
            </div>
            <div className="text-[12px] leading-relaxed italic md:text-[14px]">
              <div>This book is a field log.</div>
              <div>A log of candid encounters—</div>
              <div>the hum of a sewing machine,</div>
              <div>the pause for coffee,</div>
              <div>the dance on the pedal loom.</div>
              <div>We give space for gestures to speak.</div>
              <div>What you&apos;ll find are slow, unhurried stores—</div>
              <div>of cultures, rituals and environments.</div>
              <div>Stories shaped by the same drives that move us all:</div>
              <div>
                the call to protect heritage, to keep a tradition alive;
              </div>
              <div>the pull to start over, to follow a new calling.</div>
              <div>It offers stories of artesanía today—</div>
              <div>how we&apos;ve observed and learned to listen.</div>
              <div>We step into each taller as guests,</div>
              <div>listening before speaking, watching before asking.</div>
              <div>
                We enter each taller quietly, letting its rhythm set the pace.
              </div>
              <div>Each is its own world. A culture, A community.</div>
              <div>We give space for gestures to speak—</div>
              <div>the work-worn hand,</div>
              <div>the click of knitting needles,</div>
              <div>the half-smile shared across the table—</div>
              <div>binding not just the work, but the people,</div>
              <div>into the fabric of something lasting.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManifestoPage;
