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
    <div
      className="pointer-events-none fixed z-50 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black opacity-20"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '0',
          height: '0',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderLeft: '20px solid white',
        }}
      />
    </div>
  );
};
