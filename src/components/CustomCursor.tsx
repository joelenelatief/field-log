'use client';
import React, { useState, useEffect } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== 'undefined') {
      const updateCursorPosition = (e: MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', updateCursorPosition);
      return () =>
        window.removeEventListener('mousemove', updateCursorPosition);
    }
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Main cursor with outer border */}
      <div
        className="pointer-events-none fixed z-100 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full sm:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          border: '1px solid',
          backdropFilter: 'blur(10px)',
          borderColor: 'rgba(128, 128, 128, 0.3)',
          boxShadow: '0px 16px 40px 0px #0000004D',
          opacity: 0.8,
          borderImageSource:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
        }}
      >
        {/* Inner gray border */}
        <div
          className="pointer-events-none absolute inset-[1px] rounded-full"
          style={{
            border: '1px solid',
            borderColor: '#00000029',
          }}
        />

        {/* Arrow SVG */}
        {/* <svg
          width="14"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-100 ease-in-out ${
            cursorSide === 'left' ? 'scale-x-[-1]' : ''
          }`}
        >
          <path
            d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM9 12L9 13.5L12 13.5L12 12L12 10.5L9 10.5L9 12Z"
            fill="white"
            fillOpacity="0.9"
          />
        </svg> */}
      </div>
    </>
  );
};
