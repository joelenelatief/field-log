'use client';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

const MapComponent = () => {
  const [borderData, setBorderData] = useState(null);

  useEffect(() => {
    // Fetch South America border as GeoJSON
    fetch(
      'https://nominatim.openstreetmap.org/search?continent=south+america&format=geojson'
    )
      .then((response) => response.json())
      .then((data) => setBorderData(data));
  }, []);

  return (
    <MapContainer
      center={[-15, -60]}
      zoom={3}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {borderData && (
        <GeoJSON
          key="south-america"
          data={borderData}
          style={{ color: 'red', weight: 2, fillOpacity: 0 }}
        />
      )}
    </MapContainer>
  );
};

export default MapComponent;
