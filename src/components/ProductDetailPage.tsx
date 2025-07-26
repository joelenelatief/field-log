'use client';

import * as React from 'react';
import { useState } from 'react';
import { CustomCursor } from './CustomCursor';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Sample product data (this would typically come from an API or database)
const PRODUCT_DATA = {
  '1': {
    id: '1',
    name: 'DARKSLIDE BELT',
    subtitle: 'burgundy',
    price: '$158 USD',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F14e4de3fb3de41cb9b63aafffa2d269a',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Ff84931ffaac0432ead4cfac7a5301080',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F76aa161b23fc4d92ab515a1736010543',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F3a186006e712412fa455839f3b84a4c1',
    ],
    description: `The Darkslide Belt is a refined take on the classic utility belt, featuring intricate hand-stitched details. Crafted from high-quality 100% Argentinian leather, this belt features a dedicated utilitarian pocket and secret snap loops to hold supplies while keeping you chic in any occasion.

Whether you're exploring the far-flung abroad or strolling an location, the Darkslide Belt ensures that your essential tools are always within reach.`,
    designTeam: 'TB LI COI Creative Director: Paulo Risco | AOC COI',
    director: 'Creative Director: Paulo Risco | NYC, USA',
    manufacturer: 'Manufactured: Pulisa Culambia | CUA, PERU',
    technicalDesigner: 'Technical Designer: Tomies Chanez | REIII, COI',
  },
  '2': {
    id: '2',
    name: 'ALPACA THROW BLANKET',
    subtitle: 'natural white',
    price: '$120 USD',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Ff84931ffaac0432ead4cfac7a5301080',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F76aa161b23fc4d92ab515a1736010543',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F3a186006e712412fa455839f3b84a4c1',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F14e4de3fb3de41cb9b63aafffa2d269a',
    ],
    description: `Handwoven alpaca wool throw blanket from Peruvian highlands. Each blanket is crafted by skilled artisans using traditional techniques passed down through generations.

The natural fibers provide exceptional warmth and softness, making this the perfect companion for cool evenings.`,
    designTeam: 'TB LI COI Creative Director: Maria Santos | AOC COI',
    director: 'Creative Director: Maria Santos | LIMA, PERU',
    manufacturer: 'Manufactured: Alpaca Heritage Co. | CUSCO, PERU',
    technicalDesigner: 'Technical Designer: Carlos Mendez | LIMA, PERU',
  },
  '3': {
    id: '3',
    name: 'LEATHER JOURNAL COVER',
    subtitle: 'rustic brown',
    price: '$85 USD',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F76aa161b23fc4d92ab515a1736010543',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F3a186006e712412fa455839f3b84a4c1',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F14e4de3fb3de41cb9b63aafffa2d269a',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Ff84931ffaac0432ead4cfac7a5301080',
    ],
    description: `Hand-stitched leather journal cover with traditional patterns. Made from sustainably sourced leather and embossed with designs inspired by indigenous Colombian art.

Perfect for documenting your travels and thoughts in style.`,
    designTeam: 'TB LI COI Creative Director: Ana Rodriguez | AOC COI',
    director: 'Creative Director: Ana Rodriguez | BOGOTA, COL',
    manufacturer: 'Manufactured: Leather Craft Studio | BOGOTA, COL',
    technicalDesigner: 'Technical Designer: Diego Vargas | BOGOTA, COL',
  },
  '4': {
    id: '4',
    name: 'WOVEN WALL HANGING',
    subtitle: 'earth tones',
    price: '$150 USD',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F3a186006e712412fa455839f3b84a4c1',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F14e4de3fb3de41cb9b63aafffa2d269a',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Ff84931ffaac0432ead4cfac7a5301080',
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F76aa161b23fc4d92ab515a1736010543',
    ],
    description: `Traditional telar-woven wall hanging with natural dyes. Created by master weavers using techniques that have been preserved for centuries.

Each piece tells a story through its intricate patterns and vibrant colors.`,
    designTeam: 'TB LI COI Creative Director: Luis Morales | AOC COI',
    director: 'Creative Director: Luis Morales | QUITO, ECU',
    manufacturer: 'Manufactured: Weaving Collective | OTAVALO, ECU',
    technicalDesigner: 'Technical Designer: Isabel Torres | QUITO, ECU',
  },
};

const RELATED_IMAGES = [
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F14e4de3fb3de41cb9b63aafffa2d269a',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Ff84931ffaac0432ead4cfac7a5301080',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F76aa161b23fc4d92ab515a1736010543',
  'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F3a186006e712412fa455839f3b84a4c1',
];

interface ProductDetailPageProps {
  productId: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
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
      <div className="min-h-screen cursor-none bg-[#F6F7EF] p-8">
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Product Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                  width={600}
                  height={750}
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
              <div>
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
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <p>{product.designTeam}</p>
                <p>{product.director}</p>
                <p>{product.manufacturer}</p>
                <p>{product.technicalDesigner}</p>
              </div>

              <a
                href="https://shopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-black p-4 text-black transition-colors hover:bg-black hover:text-white"
              >
                <span
                  className={`text-sm font-medium ${neueHaasDisplay.className}`}
                >
                  SHOP
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
          <div className="mt-12 flex items-center justify-between border-t border-gray-300 pt-8">
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
          </div>

          {/* Related Images - Grid/List View */}
          <div className="mt-8">
            {viewMode === 'grid' ? (
              // Grid View
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {RELATED_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden bg-white transition-transform hover:scale-105"
                  >
                    <Image
                      src={image}
                      alt={`Related image ${index + 1}`}
                      className="h-full w-full object-cover"
                      width={200}
                      height={200}
                    />
                  </div>
                ))}
              </div>
            ) : (
              // List View
              <div className="space-y-6">
                {RELATED_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-6 border-b border-gray-200 pb-6"
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-white">
                      <Image
                        src={image}
                        alt={`Related image ${index + 1}`}
                        className="h-full w-full object-cover"
                        width={96}
                        height={96}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-sm font-medium text-black ${neueHaasDisplay.className}`}
                      >
                        Related Product {index + 1}
                      </h4>
                      <p
                        className={`text-xs text-gray-600 ${halTimezone.className} mt-1 italic`}
                      >
                        Curated artisan piece from our collection
                      </p>
                      <p
                        className={`text-sm font-bold text-black ${neueHaasDisplay.className} mt-2`}
                      >
                        ${[75, 120, 95, 140][index % 4]} USD
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
            )}
          </div>

          {/* Footer */}
          <div className="mt-16 border-t border-gray-300 pt-8">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>FIELD LOG LLC</span>
              <span>ESTABLISHED 2024</span>
              <a href="#" className="underline">
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
