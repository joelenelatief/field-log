'use client';
import * as React from 'react';
import { ThumbnailGrid } from './ThumbnailGrid';
import { CustomCursor } from './CustomCursor';
import { halTimezone, neueHaasDisplay } from '@/lib/fonts';

const FieldLogPage: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <div className="w-full cursor-none pt-5 text-neutral-700">
        <h2 className="mx-0 mb-0 pb-2 text-center text-3xl font-bold max-sm:text-2xl sm:pb-0">
          <span className={`${neueHaasDisplay.className}`}>
            Coming Soon 2025.{' '}
          </span>
          <br className="sm:hidden" />
          <span
            className={`border-b-2 border-neutral-500 italic sm:ml-2 ${halTimezone.className}`}
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
