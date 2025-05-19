'use client'; // Ensure this is present if using hooks like useState
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { Dot } from './Dot';
import { neueHaasDisplay } from '@/lib/fonts';
import { gsap } from 'gsap';
import Image from 'next/image';

export const leftImages = [
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F502f64d86de04a469c99cedb0d6186b7',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Ffaa44ef70c9f4d79a090933b23756acc',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F9f8044b847744ee1b994921567a8d6cb',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F3a186006e712412fa455839f3b84a4c1',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F920e34bad5ee45ce9a62c77bdee36a69',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Fcb3d888062704b399549c87c7f87e5b0',
];

export const rightImages = [
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F7501141f47b84c6884303cea36ea2606',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F92050eb2b0b2490485f975c1c3e34a30',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F8508e2afcb0f48888e1877acd4844108',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Fb4b61b0802c3434aa44430f98373c41b',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F7beab63cf9a74330aeb2e5d941600aef',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Feb575d4221b344f9aeff586d5ef8833e',
];

export const ThumbnailGrid: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const leftImgRef = useRef<HTMLImageElement>(null);
  const rightImgRef = useRef<HTMLImageElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const mainImagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial fade-in animation for the entire component
    if (containerRef.current) {
      // Set initial opacity to 0
      gsap.set(containerRef.current, { opacity: 0 });

      // Fade in with a delay (after header and about section animations)
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 1.2,
        delay: 1.2, // Delay to allow other animations to complete first
        ease: 'power2.inOut',
      });
    }

    // Fade in the thumbnail grid all at once (not staggered)
    if (gridRef.current) {
      gsap.set(gridRef.current, { opacity: 0, y: 15 });

      gsap.to(gridRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1.2, // Same delay as the main images
        ease: 'power2.out',
      });
    }

    // Fade in main images with a slight delay
    if (mainImagesRef.current) {
      gsap.set(mainImagesRef.current, { opacity: 0, scale: 0.95 });

      gsap.to(mainImagesRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 1.2, // Slightly after the container starts fading in
        ease: 'power2.out',
      });
    }
  }, []);

  useEffect(() => {
    if (leftImgRef.current && rightImgRef.current && activeIndex !== null) {
      const tl = gsap.timeline();
      tl.to([leftImgRef.current, rightImgRef.current], {
        opacity: 0.9,
        duration: 0.6,
        ease: 'sine.inOut',
        onComplete: () => {
          if (leftImgRef.current && activeIndex !== null) {
            leftImgRef.current.src = leftImages[activeIndex];
          }
          if (rightImgRef.current && activeIndex !== null) {
            rightImgRef.current.src = rightImages[activeIndex];
          }
        },
      }).to([leftImgRef.current, rightImgRef.current], {
        opacity: 1,
        duration: 0.3,
        ease: 'sine.inOut',
        delay: 0.05,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    if (containerRef.current && lineRef.current && activeIndex !== null) {
      const leftImgElement = leftImgRef.current;
      if (!leftImgElement) return;

      const leftImgRect = leftImgElement.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const endX =
        leftImgRect.left + leftImgRect.width / 2 - containerRect.left;
      const endY = leftImgRect.bottom - containerRect.top;

      const activeThumbnail = document.querySelector(
        `[data-index="${activeIndex}"]`
      ) as HTMLElement;
      if (!activeThumbnail) return;

      const thumbnailRect = activeThumbnail.getBoundingClientRect();

      const startX =
        thumbnailRect.left + thumbnailRect.width / 2 - containerRect.left;
      const startY = thumbnailRect.top - containerRect.top;

      const midY = (startY + endY) / 2;

      // Create the path data - same as before
      const pathData = `M ${startX},${startY} L ${startX},${midY} L ${endX},${midY} L ${endX},${endY}`;

      // Set the path data
      lineRef.current.setAttribute('d', pathData);

      // Calculate the total length of the path for precise animation
      const pathLength = lineRef.current.getTotalLength();

      // Set the dash array and offset to the path length
      lineRef.current.style.strokeDasharray = `${pathLength}`;
      lineRef.current.style.strokeDashoffset = `${pathLength}`;

      // Reset any previous animations
      gsap.killTweensOf(lineRef.current);

      // Animate the drawing of the line
      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        duration: 0.3, // Slightly longer duration for more visible drawing effect
        ease: 'power1.inOut',
      });
    }
  }, [activeIndex]);

  const totalImages = leftImages.length;

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === 0 ? totalImages - 1 : prevIndex - 1;
    });
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === totalImages - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <>
      <CustomCursor />
      <section
        ref={containerRef}
        className="relative mt-4 flex cursor-none flex-col items-center gap-8"
      >
        {/* <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          style={{ overflow: 'visible' }}
        >
          <path
            ref={lineRef}
            d="M 0,0 L 0,0 L 0,0 L 0,0"
            fill="none"
            stroke="rgba(0, 0, 0, 0.2)"
            strokeWidth="1"
            strokeDasharray="2000"
            strokeDashoffset="2000"
          />
        </svg> */}

        <div
          ref={mainImagesRef}
          className="flex cursor-none flex-col justify-center overflow-hidden rounded-lg border border-neutral-300 bg-[#EBEDDFE5] p-8 pb-8 md:flex-row md:items-stretch"
        >
          <div
            className="relative w-full cursor-none md:w-[439px]"
            onClick={goToPrevious}
          >
            <div className="aspect-[439/477] w-full shadow-md">
              <Image
                ref={leftImgRef}
                src={leftImages[activeIndex ?? 0]}
                alt="Thumbnail"
                className="h-full w-full object-cover"
                width={439}
                height={477}
              />
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center text-2xl font-bold text-yellow-200 ${neueHaasDisplay.className}`}
            >
              FIELD
            </div>
          </div>

          <div className="mx-4 hidden w-px bg-neutral-300 md:block"></div>

          <div
            className="relative mt-4 w-full cursor-none md:mt-0 md:w-[439px]"
            onClick={goToNext}
          >
            <div className="aspect-[439/284] w-full shadow-md">
              <Image
                ref={rightImgRef}
                src={rightImages[activeIndex ?? 0]}
                alt="Thumbnail"
                className="h-full w-full object-cover"
                width={439}
                height={284}
              />
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center text-2xl font-bold text-yellow-200 ${neueHaasDisplay.className}`}
            >
              LOG
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          {leftImages.map((_, index) => (
            <div
              key={`dot-${index}`}
              className="cursor-none"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <Dot isActive={activeIndex === index} />
            </div>
          ))}
        </div>
        <div
          ref={gridRef}
          className="z-20 flex w-full max-w-[1200px] flex-wrap justify-center gap-4 px-10 pb-20 [perspective:1000px]"
        >
          {leftImages.map((image, index) => (
            <div
              key={`thumb-${index}`}
              data-index={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`thumbnail-item transform-preserve-3d relative h-[220px] w-[170px] origin-center cursor-none bg-zinc-100 transition-all duration-300 ${
                activeIndex === index
                  ? 'z-10 scale-[1.0] rotate-y-0 bg-zinc-200 shadow-lg'
                  : 'z-0 scale-100 rotate-y-0'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index}`}
                className="h-full w-full object-cover backface-hidden"
                width={170}
                height={220}
              />
              {activeIndex === index && (
                <>
                  {/* Black overlay with 20% opacity */}
                  <div className="pointer-events-none absolute inset-0 bg-black opacity-20 transition-all duration-300"></div>
                  {/* Border */}
                  <div className="pointer-events-none absolute inset-0 border-[3px] border-[#DFE2D0] transition-all duration-300"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
