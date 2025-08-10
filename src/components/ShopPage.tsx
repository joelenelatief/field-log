'use client';

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { CustomCursor } from './CustomCursor';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';

// Shop products data
const SHOP_PRODUCTS = [
  {
    id: 1,
    name: 'DARKSLIDE BELT',
    subtitle: 'Burgundy',
    price: '$198 USD',
    image: '/images/belt1.jpg', // Using one of the field log images for the belt
    description: 'Handcrafted leather belt with traditional artisan techniques',
  },
  {
    id: 2,
    name: 'FIELD LOG BOOK',
    subtitle: 'Limited Edition',
    price: '$65 USD',
    image: '/images/field_log_book.png',
    description: 'Curated chronicle of Latin American textile artisans',
  },
];

const ShopPage: React.FC = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const currentProduct = SHOP_PRODUCTS[activeProductIndex];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleProductChange = (index: number) => {
    setActiveProductIndex(index);
  };

  const scrollToProduct = (index: number) => {
    const productElement = productRefs.current[index];
    if (productElement && scrollContainerRef.current) {
      productElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  };

  const handleNumberClick = (numberIndex: number) => {
    // Switch to the selected product and scroll to it
    setActiveProductIndex(numberIndex);
    scrollToProduct(numberIndex);
  };

  const scrollToNext = () => {
    const nextIndex = Math.min(
      activeProductIndex + 1,
      SHOP_PRODUCTS.length - 1
    );
    if (nextIndex !== activeProductIndex) {
      setActiveProductIndex(nextIndex);
      scrollToProduct(nextIndex);
    }
  };

  const scrollToPrevious = () => {
    const prevIndex = Math.max(activeProductIndex - 1, 0);
    if (prevIndex !== activeProductIndex) {
      setActiveProductIndex(prevIndex);
      scrollToProduct(prevIndex);
    }
  };

  // Handle scroll-based highlighting with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      // Clear previous timeout
      clearTimeout(timeoutId);

      // Debounce the scroll detection
      timeoutId = setTimeout(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        // Account for fixed header height (80px) when calculating center
        const headerHeight = 80;
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

            // Only consider products that are significantly in view
            if (distance < closestDistance && distance < 200) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        });

        // Only update if there's a clear winner and it's different
        if (closestDistance < 200 && closestIndex !== activeProductIndex) {
          setActiveProductIndex(closestIndex);
        }
      }, 100); // 100ms debounce
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutId);
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
  }, [activeProductIndex]);

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
              <div className="mb-4 pb-4 text-center lg:hidden">
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
              </div>

              {/* Mobile Layout */}
              <div className="flex items-center gap-2 lg:hidden">
                {/* Left Numbers */}
                <div className="flex flex-col justify-center space-y-2">
                  {SHOP_PRODUCTS.slice(0, 1).map((_, index) => (
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
                        className={`text-sm font-bold ${neueHaasDisplay.className}`}
                      >
                        [0{index + 1}]
                      </span>
                    </button>
                  ))}
                </div>

                {/* Center Image */}
                <div className="relative flex flex-1 justify-center">
                  <div className="relative">
                    <Link
                      href={`/shop/${currentProduct.id}`}
                      className="cursor-none"
                    >
                      <div className="relative inline-block border-[8px] border-black">
                        <Image
                          src={currentProduct.image}
                          alt={currentProduct.name}
                          width={800}
                          height={800}
                          className="object-cover transition-opacity hover:opacity-90"
                          priority
                          style={{ height: '400px', width: 'auto' }}
                        />
                      </div>
                    </Link>

                    {/* Buy Now Button - Mobile (above dots) */}
                    <div className="flex justify-center py-4">
                      <a
                        href={`/shop/${currentProduct.id}`}
                        className="flex w-full max-w-xs cursor-none items-center justify-between border-2 border-black px-4 py-2 text-black transition-colors hover:bg-black hover:text-white"
                      >
                        <span
                          className={`text-sm font-medium ${neueHaasDisplay.className}`}
                        >
                          ADD TO CART
                        </span>
                        <span
                          className={`text-sm font-bold ${neueHaasDisplay.className}`}
                        >
                          {currentProduct.price}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Numbers */}
                <div className="flex flex-col justify-center space-y-2">
                  {SHOP_PRODUCTS.slice(1, 2).map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handleNumberClick(index + 1)}
                      className={`cursor-none transition-all duration-300 ${
                        activeProductIndex === index + 1
                          ? 'text-black'
                          : 'text-gray-400'
                      }`}
                    >
                      <span
                        className={`text-sm font-bold ${neueHaasDisplay.className}`}
                      >
                        [0{index + 2}]
                      </span>
                    </button>
                  ))}
                </div>
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
                  <div className="space-y-12 py-8 pb-24">
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
                                width={1200}
                                height={1200}
                                className="object-cover transition-opacity hover:opacity-90"
                                priority={index === 0}
                                style={{ height: '700px', width: 'auto' }}
                              />
                            </div>
                          </Link>

                          {/* Buy Now Button */}
                          <div className="flex justify-center py-4">
                            <a
                              href={`/shop/${product.id}`}
                              className="flex w-full cursor-none items-center justify-between border-2 border-black px-6 py-3 text-black transition-colors hover:bg-black hover:text-white"
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
                <div className="sticky top-0 h-screen lg:col-span-1">
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

            {/* Bottom Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {SHOP_PRODUCTS.map((product, index) => (
                <Link
                  key={index}
                  href={`/shop/${product.id}`}
                  className="relative mx-auto aspect-[3/4] max-w-xs cursor-none overflow-hidden border-2 border-black transition-opacity hover:opacity-80 lg:max-w-sm"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-102"
                  />
                  {/* Active indicator */}
                  {index === activeProductIndex && (
                    <div className="absolute inset-0 border-2 border-black"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="rounded-md bg-neutral-100 p-8 text-center text-black">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
