"use client";

import React from "react";
import useGoogleMaps from "../../hooks/useGoogleMaps";
import { LoadingState } from "../ui/LoadingSpinner";

interface MapContainerProps {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  className?: string;
  onMapLoad?: (map: google.maps.Map) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({
  center = { lat: 40.7128, lng: -74.006 }, // NYC default
  zoom = 12,
  className = "",
  onMapLoad,
}) => {
  // Check for API key
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { map, mapRef, isLoaded, error } = useGoogleMaps({
    apiKey: API_KEY || "",
    center,
    zoom,
  });

  // Notify parent component when map is loaded
  React.useEffect(() => {
    if (map && onMapLoad) {
      onMapLoad(map);
    }
  }, [map, onMapLoad]);

  // If there's any issue with the map, show user-friendly error
  if (!API_KEY || API_KEY === "demo-key" || error) {
    return (
      <div
        className={`bg-blue-50 border border-blue-200 rounded-xl p-8 ${className}`}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Map Temporarily Unavailable
          </h3>
          <p className="text-blue-700 mb-6 text-lg">
            Were working on getting the interactive crime map back online.
          </p>
          <p className="text-blue-600 mb-6">
            Please check back in a few minutes to explore crime data in your
            area.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-200"
        style={{ minHeight: "400px" }}
      />

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center">
          <LoadingState message="Loading interactive map..." />
        </div>
      )}

      {/* Map Controls Overlay (for future features) */}
      {isLoaded && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
            <span className="text-sm font-medium text-gray-700">
              SecureSteps Map
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapContainer;
