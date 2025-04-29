'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});

const Map = () => {
  return <MapComponent />;
};

export default Map;
