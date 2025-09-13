'use client';

import * as React from 'react';
import Link from 'next/link';
import { neueHaasDisplay } from '@/lib/fonts';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      ref={headerRef}
      className="relative z-[9998] flex w-full items-center justify-between border-b border-black/32 px-4 pr-8 sm:px-0 sm:pr-4"
    >
      {/* Left side - FIELD LOG branding */}
      <div className="flex items-center">
        <div className="justify-left relative flex items-center px-8 py-4 sm:w-80">
          {/* Vertical border that extends full height */}
          <div className="absolute top-0 right-0 bottom-0 w-px bg-black/32"></div>
          <Link
            href="/"
            className={`text-lg font-semibold ${neueHaasDisplay.className} flex items-center space-x-3 text-black`}
          >
            <span>FIELD</span>
            <div className="h-px w-16 bg-black"></div>
            <span>LOG</span>
          </Link>
        </div>

        <nav className="hidden space-x-6 py-4 pl-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-medium ${neueHaasDisplay.className} text-black transition-colors hover:text-gray-600 ${
              isActive('/') ? 'border-b border-black' : ''
            }`}
          >
            HOME
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium ${neueHaasDisplay.className} text-black transition-colors hover:text-gray-600 ${
              isActive('/about') ? 'border-b border-black' : ''
            }`}
          >
            ABOUT US
          </Link>
        </nav>
      </div>

      {/* Desktop Right side navigation */}
      <nav className="hidden md:block">
        <Link
          href="/shop"
          className={`text-sm font-medium ${neueHaasDisplay.className} text-black transition-colors hover:text-gray-600 ${
            isActive('/shop') ? 'border-b border-black' : ''
          }`}
        >
          SHOP ALL
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="relative z-[9999] md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`text-sm font-medium ${neueHaasDisplay.className} flex cursor-none items-center gap-2 text-black transition-colors hover:text-gray-600`}
        >
          MENU
          <div
            className={`transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-16 right-8 z-[99999] w-48 border border-black bg-[#F6F7EF] shadow-lg">
            <div className="py-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium ${neueHaasDisplay.className} text-black transition-colors hover:bg-gray-100 ${
                  isActive('/') ? 'border-l-2 border-black underline' : ''
                }`}
              >
                HOME
              </Link>
              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium ${neueHaasDisplay.className} text-black transition-colors hover:bg-gray-100 ${
                  isActive('/shop') ? 'border-l-2 border-black underline' : ''
                }`}
              >
                SHOP ALL
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium ${neueHaasDisplay.className} text-black transition-colors hover:bg-gray-100 ${
                  isActive('/about') ? 'border-l-2 border-black underline' : ''
                }`}
              >
                ABOUT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
