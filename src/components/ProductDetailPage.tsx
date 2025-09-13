'use client';

import * as React from 'react';
import { useState } from 'react';
import { CustomCursor } from './CustomCursor';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Product data matching the shop page products
const PRODUCT_DATA = {
  book: {
    id: 'book',
    name: 'FIELD LOG BOOK',
    subtitle: 'Limited Edition',
    price: '$75 USD',
    images: ['/images/book-gif3.gif', '/images/field_log_book.jpg'],
    description: `FIELD LOG is a curated chronicle of Latin American artisans—a reimagined
          directory where craft meets contemporary design. This edition explores
          eight—talleres—workshops across Perú and Colombia, where
          tradition is not preserved but evolved—woven, stitched, and sculpted
          into the present.`,
    description2: `Annick Maria and Pedro Pablo spent a year getting to
          know and documenting artisans working in leather, alpaca, crochet, and
          more—preserving tradition while pushing the boundaries of their craft.
          More than sites of production, these talleres embody generational
          skill, cultural resilience, and pure artistry. This book is not just
          an archive; it is an invitation to immerse in craftsmanship as it
          exists today.`,
    designTeam: 'Editorial Design by Annick Maria',
    manufacturer: 'All images shot on Medium Format Film by Pedro Pablo ',
    technicalDesigner: 'Printed in Mexico by Nocaut LLC ',
    copyEdited: 'Copy edited by Armando Chardiet ',
  },
  belt: {
    id: 'belt',
    name: 'DARKSLIDE BELT',
    subtitle: 'Burgundy',
    price: '$210 USD',
    images: ['/images/belt1.jpg', '/images/belt2.jpg', '/images/belt3.jpg'],
    description: `The Darkslide Belt is a refined take on the classic utility belt, designed with photographers in mind. Crafted from high-quality 100% Peruvian leather, this belt features a dedicated darkslide pocket and secure snap loops to hold rolls of film, making it an ideal companion for both analog and hybrid shooters.`,
    description2: `Whether you're working in a fast-paced studio or shooting on location, the Darkslide Belt ensures that your essential tools are always within reach.`,
    designTeam: 'Creative Direction: Pedro Pablo | MDE, COL',
    manufacturer: 'Art Direction: Annick Saralegui | NYC, USA',
    technicalDesigner: 'Technical Design: Tom Chaverra | MDE, USA',
    copyEdited: 'Manufacturer: Pelusa Caballero | LMA, PE',
  },
};

interface ProductDetailPageProps {
  productId: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  // Ensure component only renders once
  const componentKey = `product-${productId}`;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const router = useRouter();
  const product = PRODUCT_DATA[productId as keyof typeof PRODUCT_DATA];

  // Get all product IDs for navigation
  const productIds = Object.keys(PRODUCT_DATA);
  const currentProductIndex = productIds.indexOf(productId);
  const nextProductId =
    currentProductIndex < productIds.length - 1
      ? productIds[currentProductIndex + 1]
      : productIds[0]; // Loop back to first product

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className={`text-lg ${neueHaasDisplay.className}`}>
          Product not found
        </p>
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const goToNextProduct = () => {
    router.push(`/shop/${nextProductId}`);
  };

  return (
    <>
      <CustomCursor />
      <div
        className="min-h-screen cursor-none bg-[#F6F7EF] p-4 sm:p-8"
        key={componentKey}
      >
        <div className="mx-auto max-w-6xl">
          {/* Back/Next Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/shop"
              className={`text-sm font-medium text-black underline ${neueHaasDisplay.className}`}
            >
              BACK
            </Link>
            <button
              className={`text-sm font-medium text-black underline ${neueHaasDisplay.className}`}
              onClick={goToNextProduct}
            >
              NEXT
            </button>
          </div>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side - Product Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                  width={600}
                  height={750}
                  unoptimized
                  key={`${product.images[currentImageIndex]}-${currentImageIndex}`}
                />
                {/* Navigation arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevious}
                      className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white/80 p-2 text-black transition-all duration-200 hover:bg-white/90"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white/80 p-2 text-black transition-all duration-200 hover:bg-white/90"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Image Navigation Dots */}
              {product.images.length > 1 && (
                <div className="mt-4 flex justify-center space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'bg-black'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Product Info */}
            <div className="space-y-6">
              <div className="mb-6">
                <h1
                  className={`text-2xl font-bold text-black ${neueHaasDisplay.className}`}
                >
                  {product.name}
                </h1>
                <p
                  className={`text-lg text-gray-600 ${halTimezone.className} italic`}
                >
                  {product.subtitle}
                </p>
              </div>
              <div className="space-y-4">
                <p
                  className={`text-sm leading-relaxed text-gray-800 ${neueHaasDisplay.className}`}
                >
                  {product.description}
                </p>
                <p
                  className={`text-sm leading-relaxed text-gray-800 ${neueHaasDisplay.className}`}
                >
                  {product.description2}
                </p>
              </div>

              <div className="space-y-1 text-xs text-gray-600 italic">
                <p>{product.designTeam}</p>
                <p>{product.manufacturer}</p>
                <p>{product.technicalDesigner}</p>
                <p>{product.copyEdited}</p>
              </div>
              <a
                href={
                  product.id === 'book'
                    ? 'https://udsbfd-e7.myshopify.com/cart/45098492297413:1?channel=buy_button'
                    : 'https://udsbfd-e7.myshopify.com/cart/45098493280453:1?channel=buy_button'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md border border-black bg-black p-3 text-white transition-colors hover:bg-gray-800"
              >
                <span
                  className={`text-sm font-medium ${neueHaasDisplay.className}`}
                >
                  BUY NOW
                </span>
                <span
                  className={`text-sm font-bold ${neueHaasDisplay.className}`}
                >
                  {product.price}
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Section - View Options */}
          {/* <div className="mt-12 flex items-center justify-between border-t border-gray-300 pt-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setViewMode('grid')}
                className={`text-sm transition-all ${neueHaasDisplay.className} ${
                  viewMode === 'grid'
                    ? 'font-bold text-black underline'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                GRID VIEW
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`text-sm transition-all ${neueHaasDisplay.className} ${
                  viewMode === 'list'
                    ? 'font-bold text-black underline'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                LIST VIEW
              </button>
            </div>
          </div> */}

          {/* Related Images - Grid/List View */}
          <div className="mt-8 sm:hidden">
            {/* {viewMode === 'grid' ? ( */}
            {/* // Grid View */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {Object.values(PRODUCT_DATA).map((currentProduct, index) => (
                <div
                  key={index}
                  className={`aspect-square overflow-hidden bg-white transition-transform hover:scale-105 ${
                    index === currentProductIndex
                      ? 'border-2 border-black opacity-60'
                      : ''
                  }`}
                  onClick={() => router.push(`/shop/${currentProduct.id}`)}
                >
                  <Image
                    src={currentProduct.images[0]}
                    alt={currentProduct.name}
                    className="h-full w-full object-cover"
                    width={200}
                    height={200}
                    unoptimized={true}
                  />
                </div>
              ))}
            </div>
            {/* ) : (
              // List View
              <div className="space-y-6">
                {Object.values(PRODUCT_DATA).map((currentProduct, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-6 border-b border-gray-200 pb-6"
                  >
                    <div
                      className={`h-24 w-24 flex-shrink-0 overflow-hidden bg-white ${
                        index === currentProductIndex
                          ? 'border-2 border-black opacity-60'
                          : ''
                      }`}
                    >
                      <Image
                        src={currentProduct.images[0]}
                        alt={currentProduct.name}
                        className="h-full w-full object-cover"
                        width={96}
                        height={96}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-sm font-medium text-black ${neueHaasDisplay.className}`}
                      >
                        {currentProduct.name}
                      </h4>
                      <p
                        className={`text-xs text-gray-600 ${halTimezone.className} mt-1 italic`}
                      >
                        {currentProduct.subtitle}
                      </p>
                      <p
                        className={`text-sm font-bold text-black ${neueHaasDisplay.className} mt-2`}
                      >
                        {currentProduct.price}
                      </p>
                    </div>
                    <button
                      className={`border border-black px-3 py-1 text-xs text-black transition-colors hover:bg-black hover:text-white ${neueHaasDisplay.className}`}
                    >
                      VIEW
                    </button>
                  </div>
                ))}
              </div>
            )} */}
          </div>

          {/* Footer */}
          <div className="mt-16 border-t border-gray-300 pt-4 pb-4">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className={neueHaasDisplay.className}>FIELD LOG LLC</span>
              <span className={neueHaasDisplay.className}>
                ESTABLISHED c. 2025
              </span>
              <a
                href="https://www.instagram.com/field__log/"
                className={`underline transition-colors hover:text-gray-700 ${neueHaasDisplay.className}`}
              >
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
