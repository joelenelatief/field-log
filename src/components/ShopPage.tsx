'use client';

import * as React from 'react';
import { useState } from 'react';
import { CustomCursor } from './CustomCursor';
import { neueHaasDisplay, halTimezone } from '@/lib/fonts';
import Image from 'next/image';

// Sample product data (placeholder)
const PRODUCTS = [
  {
    id: 1,
    name: 'Field Log Book',
    price: '$65.00 USD',
    caption: 'Free shipping on pre-orders',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F14e4de3fb3de41cb9b63aafffa2d269a',
    description:
      'Limited edition hardcover book featuring artisan stories and photography. Each book is hand-bound with premium materials and includes exclusive content not available in the digital edition.',
    status: 'Pre-order',
  },
  {
    id: 2,
    name: 'Alpaca Throw Blanket',
    price: '$120.00 USD',
    caption: 'Limited availability',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2Ff84931ffaac0432ead4cfac7a5301080',
    description:
      'Handwoven alpaca wool throw blanket from Peruvian highlands. Each blanket is crafted by skilled artisans using traditional techniques passed down through generations.',
    status: 'Coming Soon',
  },
  {
    id: 3,
    name: 'Leather Journal Cover',
    price: '$85.00 USD',
    caption: 'Artisan crafted',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F76aa161b23fc4d92ab515a1736010543',
    description:
      'Hand-stitched leather journal cover with traditional patterns. Made from sustainably sourced leather and embossed with designs inspired by indigenous Colombian art.',
    status: 'Coming Soon',
  },
  {
    id: 4,
    name: 'Woven Wall Hanging',
    price: '$150.00 USD',
    caption: 'Each piece unique',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F3a186006e712412fa455839f3b84a4c1',
    description:
      'Traditional telar-woven wall hanging with natural dyes. Created by master weavers using techniques that have been preserved for centuries.',
    status: 'Coming Soon',
  },
];

const ShopPage: React.FC = () => {
  // State to track the selected product
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  return (
    <>
      <CustomCursor />
      <div className="cursor-none p-8 text-neutral-700">
        <div className="container mx-auto px-4">
          {/* 3-column product display with middle column 1.5x larger */}
          <div className="mb-12 w-full rounded-sm p-8">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-7">
              {/* Left column - Product info (2/7 width) */}
              <div className="flex flex-col md:col-span-2">
                <h2
                  className={`mb-4 text-2xl font-bold ${neueHaasDisplay.className}`}
                >
                  {selectedProduct.name}
                </h2>
                <p
                  className={`mb-6 text-sm text-neutral-700 ${halTimezone.className} italic`}
                >
                  {selectedProduct.description}
                </p>
                <div className={`text-sm ${halTimezone.className}`}>
                  <p className="mb-2">• Handcrafted by artisans</p>
                  <p className="mb-2">• Limited edition</p>
                  <p className="mb-2">• Ethically sourced materials</p>
                </div>
              </div>

              {/* Center column - Product image (3/7 width = 1.5x the side columns) */}
              <div className="flex justify-center md:col-span-3">
                <div className="aspect-square w-full overflow-hidden border-1 border-black bg-[#EBEDDFE5] p-3">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

              {/* Right column - Price and cart (2/7 width) */}
              <div className="flex flex-col md:col-span-2">
                <div className="mb-6">
                  <span
                    className={`text-3xl font-semibold ${neueHaasDisplay.className}`}
                  >
                    {selectedProduct.price}
                  </span>
                  <p
                    className={`mt-1 text-sm text-neutral-500 ${halTimezone.className} italic`}
                  >
                    {selectedProduct.caption}
                  </p>
                </div>
                <button
                  className={`w-full cursor-pointer rounded-sm border border-black bg-transparent px-4 py-3 text-sm font-bold transition-colors hover:bg-black hover:text-white ${neueHaasDisplay.className}`}
                >
                  ORDER NOW
                </button>
                <div className="mt-8">
                  <p className={`text-sm ${halTimezone.className} italic`}>
                    Shipping worldwide. Expected delivery: Fall 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product selection grid */}
          <div className="mb-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PRODUCTS.slice(0, 3).map((product) => (
                <div
                  key={product.id}
                  className={`cursor-pointer overflow-hidden rounded-sm transition-all ${
                    selectedProduct.id === product.id ? 'ring-1 ring-black' : ''
                  }`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="bg-white p-3">
                    <h4
                      className={`text-sm font-bold ${neueHaasDisplay.className}`}
                    >
                      {product.name}
                    </h4>
                    <div className="flex flex-col">
                      <p className="text-sm">{product.price}</p>
                      <p
                        className={`text-xs text-neutral-500 ${halTimezone.className} italic`}
                      >
                        {product.caption}
                      </p>
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="rounded-md bg-neutral-100 p-8 text-center">
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
                className="flex-1 rounded-sm border border-neutral-300 px-4 py-2 focus:border-black focus:outline-none"
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
