'use client';
import * as React from 'react';
import { ThumbnailGrid } from './ThumbnailGrid';
import { CustomCursor } from './CustomCursor';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';

const FieldLogPage: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <div className="w-full cursor-none p-5 text-neutral-700">
        <h2 className="mx-0 text-center text-3xl font-bold max-sm:text-2xl">
          <span className={neueHaasDisplay.className}>Coming Soon 2025. </span>
          <span
            className={`ml-2 border-b-2 border-neutral-500 italic ${halTimezone.className}`}
          >
            Preorder Now
          </span>
        </h2>
        <ThumbnailGrid />
      </div>
    </>
  );
};

export default FieldLogPage;
