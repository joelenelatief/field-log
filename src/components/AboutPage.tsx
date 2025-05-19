'use client';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { Dot } from './Dot'; // Import the Dot component from ThumbnailGrid
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';
import { gsap } from 'gsap';
import Image from 'next/image';

// Define the section images
const SECTION_IMAGES = [
  {
    id: 'manifesto',
    title: 'Manifesto',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F502f64d86de04a469c99cedb0d6186b7',
    description: 'Our values and how to work with us',
  },
  {
    id: 'artisans',
    title: 'Artisans',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Ffaa44ef70c9f4d79a090933b23756acc',
    description: 'The craftspeople behind our products',
  },
  {
    id: 'story',
    title: 'Our Story',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F9f8044b847744ee1b994921567a8d6cb',
    description: 'The journey of Field Log',
  },
];

// Roman numerals for the manifesto section
const ROMAN_NUMBERS = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
];

// Manifesto text
const MANIFESTO = [
  "If you're here for craft,",
  'start with respect.',
  "If you're here for speed,",
  "you're in the wrong book.",
  'If you want to connect with an artisan - ',
  'contact us for an introduction.',
  'If you want to learn more about our work,',
  'read on.',
  'If you want to collaborate,',
  "we'd love to hear from you.",
];

const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('manifesto');
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the section grid
    if (gridRef.current) {
      gsap.set(gridRef.current, { opacity: 0, y: 15 });

      gsap.to(gridRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out',
      });
    }

    // Animate section change
    if (sectionContainerRef.current) {
      gsap.fromTo(
        sectionContainerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, [activeSection]);

  // Render the active section content
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'manifesto':
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-opacity-90 flex w-full flex-col gap-8 rounded-sm p-8 md:flex-row md:gap-16">
              <div
                className={`w-1/2 border-r border-r-2 border-neutral-300 text-sm text-neutral-700 ${halTimezone.className}`}
              >
                <div className="flex flex-col items-start md:flex-row md:gap-6">
                  <div className="md:w-4/6">
                    <p className="mb-4 text-sm">
                      Eating the Last of the Wild is my interpretation of a
                      lifetime spent wandering in wild places, and the work
                      being done by so many to piece together a resilient fabric
                      of nature from pole to pole. It is part memoir, and part
                      assessment of what has worked, and what has not, and what
                      we must now do to continue on through a changing climate,
                      a diminishing nature, and a fragile balance of health and
                      livelihoods.
                    </p>
                    <p className="mb-4 text-sm">
                      The stories shared follow my journeys through many of the
                      earth&apos;s wildest places, and then use these
                      experiences to frame the story of our work to keep nature
                      resilient. Collectively, the stories provide a first
                      person view through the window of nature based solutions
                      to show how conservation happens, and why it is more
                      essential than ever to get us through our technologically
                      obsessed twenty-first century, and far beyond.
                    </p>
                  </div>
                  <div className="mt-4 pr-6 md:mt-0 md:w-2/7">
                    <Image
                      src="/images/car.png"
                      alt="Land Rover in landscape"
                      className="h-auto w-full rounded-md shadow-sm"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
                <div className="mt-6 px-12 text-center text-lg italic">
                  &quot; Eating the Last of the Wild, is a wonderful collection
                  of essays reflecting on his lifetime of work with nature
                  conservation. &quot;
                </div>
              </div>
              <div className="flex-1">
                <div className="flex w-full flex-col md:flex-row">
                  <div className="w-full pt-18 md:w-1/6 md:pr-4">
                    <div className="text-left">
                      {ROMAN_NUMBERS.map((number, index) => (
                        <p
                          key={index}
                          className={`${halTimezone.className} mb-3 text-sm font-thin text-neutral-400 italic`}
                        >
                          {number}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-full items-start justify-center md:w-4/6">
                    <div className="mx-auto w-full max-w-md text-center">
                      <div className="mb-6">
                        <div className="text-center text-xl font-bold text-neutral-700">
                          MANIFESTO
                        </div>
                        <div
                          className={`${halTimezone.className} text-md mb-4 text-center text-neutral-400 italic`}
                        >
                          (How to work with us)
                        </div>
                      </div>
                      {MANIFESTO.map((line, index) => (
                        <p
                          key={index}
                          className={`${halTimezone.className} mb-2 text-sm font-thin text-neutral-800 italic`}
                        >
                          <span className="manifesto-text-container relative inline-block pb-1 whitespace-nowrap">
                            {line}
                            <span className="manifesto-underline"></span>
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-1/6"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'artisans':
        return (
          <div className="flex flex-col items-center justify-center text-neutral-700">
            <p
              className={`mb-8 ${halTimezone.className} text-xl font-thin text-neutral-500 italic`}
            >
              The craftspeople behind our products.
            </p>
            <div className="flex w-full flex-col gap-8 rounded-sm p-8 md:flex-row md:gap-16">
              <div className="w-full">
                <h2
                  className={`mb-6 text-2xl font-bold ${neueHaasDisplay.className}`}
                >
                  Our Artisan Partners
                </h2>
                <p className={`mb-4 text-sm ${halTimezone.className}`}>
                  Field Log works directly with skilled artisans from around the
                  world. Each product in our collection is handcrafted using
                  traditional techniques passed down through generations.
                </p>
                <p className={`mb-4 text-sm ${halTimezone.className}`}>
                  We believe in fair compensation, sustainable practices, and
                  preserving cultural heritage. By supporting our artisan
                  partners, you&apos;re helping to maintain these valuable
                  traditions.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-sm bg-white p-4 shadow-sm">
                    <h3
                      className={`mb-2 text-lg font-bold ${neueHaasDisplay.className}`}
                    >
                      Textile Weavers
                    </h3>
                    <p className={`text-sm ${halTimezone.className}`}>
                      Our textile products are created by master weavers using
                      traditional looms and natural dyes.
                    </p>
                  </div>
                  <div className="rounded-sm bg-white p-4 shadow-sm">
                    <h3
                      className={`mb-2 text-lg font-bold ${neueHaasDisplay.className}`}
                    >
                      Leather Craftspeople
                    </h3>
                    <p className={`text-sm ${halTimezone.className}`}>
                      Our leather goods are hand-stitched by artisans who have
                      perfected their craft over decades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'story':
        return (
          <div className="flex flex-col items-center justify-center">
            <p
              className={`mb-8 ${halTimezone.className} text-xl font-thin text-neutral-500 italic`}
            >
              The journey of Field Log.
            </p>
            <div className="flex w-full flex-col gap-8 rounded-sm p-8 md:flex-row md:gap-16">
              <div className="w-full">
                <h2
                  className={`mb-6 text-2xl font-bold ${neueHaasDisplay.className}`}
                >
                  Our Journey
                </h2>
                <div className="flex flex-col md:flex-row md:gap-8">
                  <div className="md:w-1/2">
                    <p className={`mb-4 text-sm ${halTimezone.className}`}>
                      Field Log began as a documentation project, capturing the
                      stories of artisans and their crafts from around the
                      world. What started as a passion for storytelling evolved
                      into a platform that connects these skilled craftspeople
                      with those who appreciate their work.
                    </p>
                    <p className={`mb-4 text-sm ${halTimezone.className}`}>
                      Our founder spent years traveling to remote regions,
                      learning about traditional crafts and the people who
                      maintain them. These experiences formed the foundation of
                      what Field Log is today: a bridge between ancient
                      techniques and contemporary appreciation.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <p className={`mb-4 text-sm ${halTimezone.className}`}>
                      Today, we continue to explore, document, and collaborate
                      with artisans globally. Each product in our collection
                      tells a story of cultural heritage, skilled hands, and
                      sustainable practices.
                    </p>
                    <p className={`mb-4 text-sm ${halTimezone.className}`}>
                      We believe that by preserving these crafts and supporting
                      the artisans who create them, we&apos;re helping to
                      maintain important cultural traditions while providing
                      unique, meaningful products to our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="cursor-pointer p-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <h1
              className={`text-center text-4xl font-bold text-neutral-700 ${neueHaasDisplay.className}`}
            >
              ABOUT FIELD LOG.
            </h1>
            <h1
              className={`${halTimezone.className} border-b-2 border-neutral-500 text-4xl font-thin text-neutral-700 italic`}
            >
              Contact us
            </h1>
          </div>
          <p
            className={`mb-8 ${halTimezone.className} text-center text-xl font-thin text-neutral-500 italic`}
          >
            Who we are, our values and how to work with us.
          </p>

          {/* Active Section Content */}
          <div
            ref={sectionContainerRef}
            className="relative mb-16 p-6"
            style={{
              position: 'relative',
              border: '2px solid #DFE2D0',
              borderRadius: '6px',
              backgroundColor: '#EBEDDFE5',
            }}
          >
            {/* Background pseudo-element with 20% opacity */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("/images/about-page-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                filter: 'blur(1.5px)',
              }}
            ></div>

            {/* Content with 100% opacity */}
            <div className="relative z-10">{renderActiveSection()}</div>
          </div>
          {/* Dots navigation like in ThumbnailGrid */}
          <div className="mb-8 flex justify-center gap-4">
            {SECTION_IMAGES.map((section, index) => (
              <div
                key={`dot-${index}`}
                className="cursor-none"
                onClick={() => setActiveSection(section.id)}
              >
                <Dot isActive={activeSection === section.id} />
              </div>
            ))}
          </div>
        </div>
        {/* Section Navigation Grid - styled like ThumbnailGrid */}
        <div
          ref={gridRef}
          className="z-20 mx-auto my-12 flex w-full max-w-[1200px] flex-wrap justify-center gap-4 px-10"
        >
          {SECTION_IMAGES.map((section, index) => (
            <div
              key={section.id}
              data-index={index}
              onClick={() => setActiveSection(section.id)}
              className={`thumbnail-item transform-preserve-3d relative h-[220px] w-[170px] origin-center cursor-none bg-zinc-100 transition-all duration-300 ${
                activeSection === section.id
                  ? 'z-10 scale-[1.0] rotate-y-0 bg-zinc-200 shadow-lg'
                  : 'z-0 scale-100 rotate-y-0'
              }`}
            >
              <Image
                src={section.image}
                alt={section.title}
                className="h-full w-full object-cover backface-hidden"
                width={170}
                height={220}
              />
              {activeSection === section.id && (
                <>
                  {/* Black overlay with 20% opacity */}
                  <div className="pointer-events-none absolute inset-0 bg-black opacity-20 transition-all duration-300"></div>
                  {/* Border */}
                  <div className="pointer-events-none absolute inset-0 border-[3px] border-[#DFE2D0] transition-all duration-300"></div>
                </>
              )}
              <div className="bg-opacity-90 absolute right-0 bottom-0 left-0 bg-white p-3">
                <h4
                  className={`text-sm font-bold ${neueHaasDisplay.className}`}
                >
                  {section.title}
                </h4>
                <p
                  className={`text-xs text-neutral-500 ${halTimezone.className} italic`}
                >
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
