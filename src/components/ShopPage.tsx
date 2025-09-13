'use client';

import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { CustomCursor } from './CustomCursor';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';

// Shop products data
const SHOP_PRODUCTS = [
  {
    id: 'book',
    name: 'FIELD LOG BOOK',
    subtitle: 'Limited Edition',
    price: '$65 USD',
    image: '/images/book-gif3.gif',
    description: 'Curated chronicle of Latin American textile artisans',
  },
  {
    id: 'belt',
    name: 'DARKSLIDE BELT',
    subtitle: 'Burgundy',
    price: '$210 USD',
    image: '/images/belt1.jpg', // Using one of the field log images for the belt
    description: 'Handcrafted leather belt with traditional artisan techniques',
  },
];

const ShopPage: React.FC = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToProduct = useCallback((index: number) => {
    const productElement = productRefs.current[index];
    if (productElement && scrollContainerRef.current) {
      productElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, []);

  const handleNumberClick = (numberIndex: number) => {
    // Switch to the selected product and scroll to it
    setActiveProductIndex(numberIndex);
    scrollToProduct(numberIndex);
  };

  const scrollToNext = useCallback(() => {
    const nextIndex = Math.min(
      activeProductIndex + 1,
      SHOP_PRODUCTS.length - 1
    );
    if (nextIndex !== activeProductIndex) {
      setActiveProductIndex(nextIndex);
      scrollToProduct(nextIndex);
    }
  }, [activeProductIndex, scrollToProduct]);

  const scrollToPrevious = useCallback(() => {
    const prevIndex = Math.max(activeProductIndex - 1, 0);
    if (prevIndex !== activeProductIndex) {
      setActiveProductIndex(prevIndex);
      scrollToProduct(prevIndex);
    }
  }, [activeProductIndex, scrollToProduct]);

  // Handle scroll-based highlighting with optimized performance
  useEffect(() => {
    let rafId: number;
    let lastUpdateTime = 0;

    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      // Cancel previous animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Use requestAnimationFrame for smooth performance
      rafId = requestAnimationFrame(() => {
        const now = performance.now();

        // Throttle to ~60fps but allow immediate updates for better responsiveness
        if (now - lastUpdateTime < 16) return;
        lastUpdateTime = now;

        const container = scrollContainerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        // Account for fixed header height (60px based on user's changes) when calculating center
        const adjustedContainerTop = containerRect.top;
        const containerCenter = adjustedContainerTop + containerRect.height / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        productRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            // Account for header height when calculating element center
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(elementCenter - containerCenter);

            // More responsive threshold for faster updates
            if (distance < closestDistance && distance < 150) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        });

        // More responsive updates with smaller threshold
        if (closestDistance < 150 && closestIndex !== activeProductIndex) {
          setActiveProductIndex(closestIndex);
        }
      });
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      };
    }
  }, [activeProductIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        scrollToNext();
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProductIndex, scrollToNext, scrollToPrevious]);

  return (
    <>
      <CustomCursor />
      <div className="flex min-h-screen bg-[#F6F7EF]">
        {/* Main Content Area */}
        <div className="flex flex-1 flex-col">
          <div className="flex-1 p-8">
            {/* 3-Column Layout: Numbers | Image | Product Info */}
            <div className="mb-4 min-h-[400px] lg:mb-8 lg:min-h-[600px]">
              {/* Product Info for Mobile - Above Image */}
              {/* <div className="mb-4 pb-4 text-center lg:hidden">
                <h3
                  className={`mb-2 text-lg font-bold text-black ${neueHaasDisplay.className}`}
                >
                  {currentProduct.name}
                </h3>
                <p
                  className={`text-sm text-gray-600 italic ${halTimezone.className}`}
                >
                  {currentProduct.subtitle}
                </p>
              </div> */}

              {/* Mobile Layout - Stacked Products */}
              <div className="space-y-12 lg:hidden">
                {SHOP_PRODUCTS.map((product, index) => (
                  <div
                    key={product.id}
                    className="flex flex-col items-center pb-8"
                  >
                    {/* Product Info */}
                    <div className="mb-4 text-center">
                      <h3
                        className={`mb-2 text-lg font-bold text-black ${neueHaasDisplay.className}`}
                      >
                        {product.name}
                      </h3>
                      <p
                        className={`text-sm text-gray-600 italic ${halTimezone.className}`}
                      >
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Product Image */}
                    <div className="relative mb-2">
                      <Link
                        href={`/shop/${product.id}`}
                        className="cursor-none"
                      >
                        <div className="relative inline-block border-[8px] border-black">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={800}
                            height={700}
                            className="object-cover transition-opacity hover:opacity-90"
                            priority={index === 0}
                            style={{ height: '400px', width: 'auto' }}
                            unoptimized
                          />
                        </div>
                      </Link>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="mb-4 w-full max-w-sm">
                      <a
                        href={
                          product.id === 'book'
                            ? 'https://udsbfd-e7.myshopify.com/cart/45098492297413:1?channel=buy_button'
                            : 'https://udsbfd-e7.myshopify.com/cart/45098493280453:1?channel=buy_button'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full cursor-none items-center justify-between border-2 border-black px-6 py-2 text-black transition-colors hover:bg-black hover:text-white"
                      >
                        <span
                          className={`text-base font-bold ${neueHaasDisplay.className}`}
                        >
                          BUY NOW
                        </span>
                        <span
                          className={`text-base font-bold ${neueHaasDisplay.className}`}
                        >
                          {product.price}
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Layout - Scrollable Gallery */}
              <div className="hidden lg:grid lg:h-screen lg:grid-cols-5 lg:gap-2">
                {/* Column 1: Fixed Numbers Navigation (Left Side) */}
                <div className="sticky top-0 h-screen lg:col-span-1">
                  <div className="flex h-full flex-col justify-center space-y-4">
                    {SHOP_PRODUCTS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleNumberClick(index)}
                        className={`cursor-none transition-all duration-300 ${
                          activeProductIndex === index
                            ? 'text-black'
                            : 'text-gray-400'
                        }`}
                      >
                        <span
                          className={`text-xl font-bold ${neueHaasDisplay.className}`}
                        >
                          [0{index + 1}]
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Column 2: Scrollable Products Gallery (Center) */}
                <div
                  className="scrollbar-hide h-screen overflow-y-auto pb-24 lg:col-span-3"
                  ref={scrollContainerRef}
                  style={{
                    scrollbarWidth: 'none' /* Firefox */,
                    msOverflowStyle: 'none' /* Internet Explorer 10+ */,
                  }}
                >
                  <div className="space-y-12 py-2 pb-8">
                    {SHOP_PRODUCTS.map((product, index) => (
                      <div
                        key={product.id}
                        ref={(el) => {
                          productRefs.current[index] = el;
                        }}
                        className="flex flex-col items-center"
                      >
                        <div className="relative inline-block">
                          <Link
                            href={`/shop/${product.id}`}
                            className="cursor-none"
                          >
                            <div className="relative inline-block border-[14px] border-black">
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={1000}
                                height={1000}
                                className="object-cover transition-opacity hover:opacity-90"
                                priority={index === 0}
                                style={{ height: '600px', width: 'auto' }}
                                unoptimized
                              />
                            </div>
                          </Link>

                          {/* Buy Now Button */}
                          <div className="flex justify-center py-4">
                            <a
                              href={
                                product.id === 'book'
                                  ? 'https://udsbfd-e7.myshopify.com/cart/45098492297413:1?channel=buy_button'
                                  : 'https://udsbfd-e7.myshopify.com/cart/45098493280453:1?channel=buy_button'
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex w-full cursor-none items-center justify-between rounded-md border border-black px-6 py-3 text-black transition-colors hover:bg-black hover:text-white"
                            >
                              <span
                                className={`text-sm font-bold ${neueHaasDisplay.className}`}
                              >
                                ADD TO CART
                              </span>
                              <span
                                className={`text-sm font-bold ${neueHaasDisplay.className}`}
                              >
                                {product.price}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Product Information (Right Side) */}
                <div className="sticky top-0 ml-4 h-screen lg:col-span-1">
                  <div className="flex h-full flex-col justify-center text-left">
                    <h3
                      className={`mb-2 text-xl font-bold text-black ${neueHaasDisplay.className}`}
                    >
                      {SHOP_PRODUCTS[activeProductIndex].name}
                    </h3>
                    <p
                      className={`text-md mb-4 text-gray-600 italic ${halTimezone.className}`}
                    >
                      {SHOP_PRODUCTS[activeProductIndex].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Product - List View
            <div className="mt-8 hidden border-t border-gray-200 pt-8 lg:block">
              <h3
                className={`mb-4 text-lg font-bold text-black ${neueHaasDisplay.className}`}
              >
                RELATED PRODUCTS
              </h3>
              <div className="flex items-center space-x-4 border-2 border-black p-4">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden border border-gray-300">
                  <Image
                    src={SHOP_PRODUCTS[activeProductIndex === 0 ? 1 : 0].image}
                    alt={SHOP_PRODUCTS[activeProductIndex === 0 ? 1 : 0].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className={`text-sm font-bold text-black ${neueHaasDisplay.className}`}
                  >
                    {SHOP_PRODUCTS[activeProductIndex === 0 ? 1 : 0].name}
                  </h4>
                  <p
                    className={`text-xs text-gray-600 italic ${halTimezone.className}`}
                  >
                    {SHOP_PRODUCTS[activeProductIndex === 0 ? 1 : 0].subtitle}
                  </p>
                  <p
                    className={`text-xs font-bold text-black ${neueHaasDisplay.className}`}
                  >
                    {SHOP_PRODUCTS[activeProductIndex === 0 ? 1 : 0].price}
                  </p>
                </div>
                <Link
                  href={`/shop/${SHOP_PRODUCTS[activeProductIndex === 0 ? 1 : 0].id}`}
                  className="flex-shrink-0 border border-black px-4 py-2 text-xs font-bold text-black transition-colors hover:bg-black hover:text-white"
                >
                  VIEW
                </Link>
              </div>
            </div> */}
          </div>

          {/* Newsletter signup */}
          {/* <div className="rounded-md bg-neutral-100 p-8 text-center text-black">
            <h2
              className={`mb-4 text-2xl font-bold ${neueHaasDisplay.className}`}
            >
              JOIN OUR WAITLIST
            </h2>
            <p className={`mb-6 text-sm ${halTimezone.className} italic`}>
              Be the first to know when new products are available and receive
              exclusive offers.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-sm border border-neutral-300 px-4 py-2 text-black focus:border-black focus:outline-none"
              />
              <button
                className={`rounded-sm bg-black px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-80 ${neueHaasDisplay.className}`}
              >
                SUBSCRIBE
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4 pb-4">
        <div className="flex flex-col space-y-2 px-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <span className={neueHaasDisplay.className}>FIELD LOG LLC</span>
          <span className={neueHaasDisplay.className}>ESTABLISHED c. 2025</span>
          <a
            href="https://www.instagram.com/field__log/"
            className={`transition-colors hover:text-gray-700 ${neueHaasDisplay.className}`}
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
