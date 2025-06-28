'use client';

import * as React from 'react';
import Link from 'next/link';
import { neueHaasDisplay } from '@/lib/fonts';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

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
      className="relative flex w-full items-center justify-between border-b border-black px-8 py-4"
    >
      {/* Left side - FIELD LOG branding */}
      <div className="flex items-center space-x-8">
        <Link
          href="/"
          className={`text-lg font-semibold ${neueHaasDisplay.className} flex items-center space-x-3 text-black`}
        >
          <span>FIELD</span>
          <div className="h-px w-16 bg-black"></div>
          <span>LOG</span>
        </Link>

        <nav className="hidden space-x-6 md:flex">
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

      {/* Right side navigation */}
      <nav>
        <Link
          href="/shop"
          className={`text-sm font-medium ${neueHaasDisplay.className} text-black transition-colors hover:text-gray-600 ${
            isActive('/shop') ? 'border-b border-black' : ''
          }`}
        >
          SHOP ALL
        </Link>
      </nav>
    </header>
  );
};

export default Header;
