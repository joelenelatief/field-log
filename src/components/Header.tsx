'use client';

import * as React from 'react';
import Link from 'next/link';
import { neueHaasDisplay } from '@/lib/fonts';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    if (headerRef.current) {
      // Create a separate element for the border animation
      const borderElement = document.createElement('div');
      borderElement.style.position = 'absolute';
      borderElement.style.left = '0';
      borderElement.style.right = '0';
      borderElement.style.bottom = '0';
      borderElement.style.height = '1px';
      borderElement.style.opacity = '0.2';
      borderElement.style.backgroundColor = 'black';
      borderElement.style.transform = 'scaleX(0)';
      borderElement.style.transformOrigin = 'left';

      // Append it to the header
      headerRef.current.appendChild(borderElement);

      // Animate it
      gsap.to(borderElement, {
        scaleX: 1,
        duration: 1,
        ease: 'power2.inOut',
        delay: 0.7, // Slightly later than other animations
      });
    }
  }, []);

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      ref={headerRef}
      className="relative flex w-full items-center justify-between p-5 text-black"
    >
      {/* Left side navigation */}
      <nav className="flex gap-8">
        <Link
          href="/"
          className={`text-md relative font-bold ${neueHaasDisplay.className} text-black/70 ${
            isActive('/') ? 'active-link' : ''
          }`}
        >
          HOME
          {isActive('/') && (
            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-black/70"></span>
          )}
        </Link>
        <Link
          href="/about"
          className={`text-md relative font-bold ${neueHaasDisplay.className} text-black/70 ${
            isActive('/about') ? 'active-link' : ''
          }`}
        >
          ABOUT US
          {isActive('/about') && (
            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-black/70"></span>
          )}
        </Link>
      </nav>

      {/* Right side navigation */}
      <nav>
        <Link
          href="/shop"
          className={`text-md relative font-bold ${neueHaasDisplay.className} text-black/70 ${
            isActive('/shop') ? 'active-link' : ''
          }`}
        >
          SHOP ALL
          {isActive('/shop') && (
            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-black/70"></span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
