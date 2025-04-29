'use client'; // Ensure this is present if using hooks like useState
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { Dot } from './Dot';
import { neueHaasDisplay } from '@/lib/fonts';
import { gsap } from 'gsap';

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
  const leftImgRef = useRef<HTMLImageElement>(null);
  const rightImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (leftImgRef.current && rightImgRef.current && activeIndex !== null) {
      const tl = gsap.timeline();
      tl.to([leftImgRef.current, rightImgRef.current], {
        opacity: 0.7,
        duration: 0.6,
        ease: 'sine.inOut',
        onComplete: () => {
          if (leftImgRef.current) {
            leftImgRef.current.src = leftImages[activeIndex];
          }
          if (rightImgRef.current) {
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

  return (
    <>
      <CustomCursor />
      <section className="mt-10 flex flex-col items-center gap-8">
        <div className="flex flex-col justify-center overflow-hidden rounded-lg border border-neutral-300 bg-[#EBEDDFE5] p-8 pb-8 transition-shadow duration-300 ease-in-out hover:shadow-md md:flex-row md:items-stretch">
          {/* Left Image Container */}
          <div className="relative w-full md:w-[439px]">
            <div className="aspect-[439/477] w-full shadow-md">
              <img
                ref={leftImgRef}
                src={leftImages[activeIndex ?? 0]}
                alt="Thumbnail"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center text-2xl font-bold text-yellow-200 ${neueHaasDisplay.className}`}
            >
              FIELD
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="mx-4 hidden w-px bg-neutral-300 md:block"></div>

          {/* Right Image Container */}
          <div className="relative mt-4 w-full md:mt-0 md:w-[439px]">
            <div className="aspect-[439/284] w-full shadow-md">
              <img
                ref={rightImgRef}
                src={rightImages[activeIndex ?? 0]}
                alt="Thumbnail"
                className="h-full w-full object-cover"
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
        <div className="flex justify-center gap-4 max-sm:flex-wrap max-sm:justify-center">
          {leftImages.map((image, index) => (
            <div
              key={`thumb-${index}`}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative h-[200px] w-[150px] origin-bottom-left cursor-none bg-zinc-100 transition-all duration-300 ${
                activeIndex === index
                  ? 'z-10 scale-[1.01] bg-zinc-200 shadow-lg'
                  : 'z-0 scale-100'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
