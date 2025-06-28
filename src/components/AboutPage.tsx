'use client';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';
import { gsap } from 'gsap';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <div ref={containerRef} className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-8 py-16">
          {/* Header */}
          <div className="mb-16">
            <h1
              className={`mb-6 text-4xl font-bold ${neueHaasDisplay.className}`}
            >
              About Field Log
            </h1>
            <div className="mb-8 h-1 w-24 bg-black"></div>
          </div>

          {/* Main Content */}
          <div className="grid gap-16 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2
                  className={`mb-4 text-xl font-semibold ${neueHaasDisplay.className}`}
                >
                  Our Mission
                </h2>
                <p className="leading-relaxed text-gray-700">
                  <strong>FIELD LOG</strong> documents history, craft, and
                  heritage through storytelling. We work across multiple mediums
                  including documentation, oral history, essays, brand writing,
                  photography, video, and visual documentation.
                </p>
              </div>

              <div>
                <h2
                  className={`mb-4 text-xl font-semibold ${neueHaasDisplay.className}`}
                >
                  Our Services
                </h2>
                <ul className="space-y-2 leading-relaxed text-gray-700">
                  <li>• Concept + Strategy</li>
                  <li>• Brand Identity</li>
                  <li>• Photography (Digital + Film)</li>
                  <li>• Art Direction</li>
                  <li>• Editorial Design</li>
                  <li>• Film Production</li>
                </ul>
              </div>

              <div>
                <h2
                  className={`mb-4 text-xl font-semibold ${neueHaasDisplay.className}`}
                >
                  Contact
                </h2>
                <p className="text-gray-700">
                  Reach out to{' '}
                  <a
                    href="mailto:hello@field-log.com"
                    className="underline transition-colors hover:text-black"
                  >
                    hello@field-log.com
                  </a>{' '}
                  to work with us.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h2
                  className={`mb-4 text-xl font-semibold ${neueHaasDisplay.className}`}
                >
                  Field Log 01: The Book
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  FIELD LOG is a curated chronicle of Latin American craft meets
                  contemporary design. This edition explores eight "talleres" —
                  local artisan workshops across Perú and Colombia, where
                  tradition is not preserved but embodied, not frozen in time
                  but carried into the present.
                </p>
                <p className="leading-relaxed text-gray-700">
                  Amica and Pedro spent a year getting to know and, vetting
                  artisans who work with leather, alpaca, crochet, tula weaving,
                  and wood carving, exploring the cultural boundaries of their
                  craft. More than places of production, these workshops embody
                  generational skill, cultural resilience, and pure artistry.
                </p>
              </div>

              <div>
                <h2
                  className={`mb-4 text-xl font-semibold ${neueHaasDisplay.className}`}
                >
                  Our Process
                </h2>
                <p className="leading-relaxed text-gray-700">
                  We travel. We listen. We document. In workshops across Latin
                  America, we meet artisans who carry forward centuries of
                  knowledge. Their hands shape clay, weave textiles, craft
                  leather, create beauty. We capture these moments. We share
                  these stories. We bridge cultures.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div
              className={`inline-block border-b-2 border-neutral-500 italic ${halTimezone.className}`}
            >
              <span className="text-lg">Coming Soon 2025. Preorder Now</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;