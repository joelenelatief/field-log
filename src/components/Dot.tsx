import * as React from 'react';

interface DotProps {
  isActive?: boolean;
}

export const Dot: React.FC<DotProps> = ({ isActive = false }) => {
  return (
    <div
      className={`h-2 w-2 rounded-full transition-all duration-300 ${
        isActive ? 'bg-black' : 'bg-neutral-300'
      }`}
    />
  );
};
