'use client';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';
import { gsap } from 'gsap';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

// Define the magazine spreads data
const magazineSpreads = [
  {
    id: 0,
    image: '/images/bigWindow.png',
    title: 'DEAR [READER]',
    content: {
      mainText: `We are students.

Building, editing and shaping amid uncertainty.
This is our price of it, but with it,
    Uncertainty doesn't scare us
    It keeps us curious, present, and paying attention.

    *Imagine this:*
        There's a thunderstorm - lightning crackling.
            And you - you're in a room, watching the storm

              And that's the difference.
                  We are the curious ones who go outside
                      It finds the ones it needs
                      the ones who observe, who listen,
                          who move towards mystery.

Our work is guided by that same motion.
    We chase ideas.
        We capture the what-ifs,
        the almost-instinct.

We do our fieldwork —
    observing, archiving, logging in
    all the information around us.

Welcome to Field Log`,
      sidebar: {
        title: 'OUR SERVICES',
        content: `Concept + Strategy / Brand Identity / Photography (Digital + Film) / Art Direction / Editorial Design / Film Production

Reach out to hello@field-log.com to work with us.`,
      },
    },
  },
  {
    id: 1,
    image: '/images/shoes.png',
    title: 'HOW TO WORK WITH US',
    content: {
      mainText: `If you're here for craft,
start with respect.

If you're here for speed,
you're in the wrong book.

If you want to connect with an artisan - 
contact us for an introduction.

If you want to learn more about our work,
read on.

If you want to collaborate,
we'd love to hear from you.

Every piece tells a story.
Every artisan has a voice.
Every collaboration builds something meaningful.

This is how we work.
This is who we are.`,
      sidebar: {
        title: 'OUR VALUES',
        content: `Respect for craft and tradition
Fair compensation for artisans
Sustainable practices
Cultural preservation through evolution
Quality over quantity
Storytelling through objects`,
      },
    },
  },
  {
    id: 2,
    image: '/images/women.png',
    title: 'THE PROCESS',
    content: {
      mainText: `We travel.
We listen.
We document.

In workshops across Latin America,
we meet artisans who carry forward
centuries of knowledge.

Their hands shape clay,
weave textiles,
craft leather,
create beauty.

We capture these moments.
We share these stories.
We bridge cultures.

From Perú to Colombia,
from Guatemala to beyond,
we chronicle the makers
who keep tradition alive
while pushing it forward.

This is fieldwork.
This is our log.`,
      sidebar: {
        title: 'OUR APPROACH',
        content: `Deep cultural immersion
Long-term relationships with artisans
Comprehensive documentation
Contemporary design perspective
Collaborative creation process
Global storytelling platform`,
      },
    },
  },
];

const AboutPage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeSpreadIndex, setActiveSpreadIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const spreadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

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
  }, [isMounted]);

  useEffect(() => {
    if (!spreadRef.current) return;

    gsap.fromTo(
      spreadRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, [activeSpreadIndex]);

  const handleSpreadChange = (index: number) => {
    setActiveSpreadIndex(index);
  };

  const goToPrevious = () => {
    setActiveSpreadIndex((prev) =>
      prev === 0 ? magazineSpreads.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveSpreadIndex((prev) =>
      prev === magazineSpreads.length - 1 ? 0 : prev + 1
    );
  };

  // Function to render text with italic formatting
  const renderTextWithItalics = (text: string) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        const italicText = part.slice(1, -1);
        return (
          <em key={index} className="italic">
            {italicText}
          </em>
        );
      }
      return part;
    });
  };

  const currentSpread = magazineSpreads[activeSpreadIndex];

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-[#F6F7EF]">
        <div ref={containerRef} className="mx-auto max-w-7xl">
          {/* Magazine-Style Header */}
          <div className="px-8 py-8 text-center">
            <h1
              className={`mb-4 text-4xl font-bold ${neueHaasDisplay.className} text-black`}
            >
              ABOUT FIELD LOG
            </h1>
            <h2
              className={`text-xl text-gray-600 italic ${halTimezone.className}`}
            >
              Contact Us.
            </h2>
          </div>

          {/* Main Magazine Spread */}
          <div className="relative px-8">
            {/* Left Navigation Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-8 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-all lg:left-12 lg:h-16 lg:w-16"
              style={{
                backdropFilter: 'blur(12.307692527770996px)',
                boxShadow: '0px 9.85px 24.62px 0px #0000004D',
                border: '0.62px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(0, 0, 0, 0.06)',
              }}
            >
              <svg
                width="20"
                height="20"
                className="relative z-10 lg:h-6 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="rgba(255, 255, 255, 0.8)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-8 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-all lg:right-12 lg:h-16 lg:w-16"
              style={{
                backdropFilter: 'blur(12.307692527770996px)',
                boxShadow: '0px 9.85px 24.62px 0px #0000004D',
                border: '0.62px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(0, 0, 0, 0.06)',
              }}
            >
              <svg
                width="20"
                height="20"
                className="relative z-10 lg:h-6 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="rgba(255, 255, 255, 0.8)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="relative mx-auto max-w-[937px] overflow-hidden border border-black bg-white shadow-2xl"
              style={{
                width: '1000px',
                height: '680px',
                maxWidth: '100%',
                aspectRatio: '937 / 680',
              }}
            >
              <div
                ref={spreadRef}
                className="grid h-full grid-cols-1 lg:grid-cols-2"
              >
                {/* Left Side - Full Image */}
                <div className="relative bg-white">
                  <div className="relative h-full w-full">
                    <Image
                      src={currentSpread.image}
                      alt={currentSpread.title}
                      fill
                      className="object-cover"
                    />

                    {/* Shadow gradient overlay - mirrored from right side */}
                    <div
                      className="pointer-events-none absolute inset-0 z-0"
                      style={{
                        background:
                          'linear-gradient(270deg, rgba(114, 115, 98, 0.7) 0%, rgba(255, 255, 255, 0) 50%)',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Center Divider */}
                <div className="absolute top-0 bottom-0 left-1/2 z-20 hidden w-px -translate-x-1/2 transform bg-gradient-to-b from-transparent via-black/40 to-transparent shadow-lg lg:block"></div>

                {/* Right Side - Content */}
                <div
                  className="relative flex flex-col overflow-y-auto p-4 lg:p-8"
                  style={{ backgroundColor: '#FBFCF2E5' }}
                >
                  {/* Shadow gradient overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(114, 115, 98, 0.7) 0%, rgba(255, 255, 255, 0) 50%)',
                    }}
                  ></div>

                  {/* Content wrapper with higher z-index */}
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Spread Title */}
                    <div className="mb-2 lg:mb-2">
                      <h4
                        className={`mb-2 text-sm font-bold text-black lg:text-sm ${neueHaasDisplay.className}`}
                      >
                        {currentSpread.title}
                      </h4>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-4 lg:space-y-6">
                      {/* Main Text */}
                      <div className="flex-1">
                        <div
                          className={`text-xs leading-relaxed whitespace-pre-wrap text-black lg:text-xs ${halTimezone.className}`}
                        >
                          {renderTextWithItalics(
                            currentSpread.content.mainText
                          )}
                        </div>
                      </div>

                      {/* Sidebar Content */}
                      {/* <div className="border-t border-black/20 pt-3 lg:pt-4">
                        <h4
                          className={`mb-2 text-sm font-bold text-black lg:mb-4 lg:text-lg ${neueHaasDisplay.className}`}
                        >
                          {currentSpread.content.sidebar.title}
                        </h4>
                        <div
                          className={`text-xs leading-relaxed whitespace-pre-wrap text-black lg:text-sm ${halTimezone.className}`}
                        >
                          {currentSpread.content.sidebar.content}
                        </div>
                      </div> */}
                    </div>

                    {/* Spread indicator */}
                    <div className="mt-4 text-center lg:mt-6">
                      <span
                        className={`text-xs text-black/60 ${halTimezone.className}`}
                      >
                        {activeSpreadIndex + 1} / {magazineSpreads.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="px-8 py-12">
            <div className="flex items-center justify-center gap-8">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="rounded-full border border-gray-300 p-2 transition-all hover:border-gray-600"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Thumbnail Images */}
              <div className="flex gap-4">
                {magazineSpreads.map((spread, index) => (
                  <button
                    key={spread.id}
                    onClick={() => handleSpreadChange(index)}
                    className={`relative h-16 w-24 overflow-hidden rounded-lg border-2 transition-all ${
                      activeSpreadIndex === index
                        ? 'scale-105 border-black'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <Image
                      src={spread.image}
                      alt={`Spread ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    {activeSpreadIndex === index && (
                      <div className="absolute inset-0 bg-black/20"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="rounded-full border border-gray-300 p-2 transition-all hover:border-gray-600"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

            {/* Dots Navigation */}
            <div className="mt-6 flex justify-center gap-3">
              {magazineSpreads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSpreadChange(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    activeSpreadIndex === index
                      ? 'scale-110 bg-black'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;