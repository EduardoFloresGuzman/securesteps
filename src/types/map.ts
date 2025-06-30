// Google Maps related type definitions
export interface MapConfig {
  center: google.maps.LatLngLiteral;
  zoom: number;
  mapTypeId: google.maps.MapTypeId;
  styles?: google.maps.MapTypeStyle[];
}

// Map bounds
export interface MapBounds {
  northeast: google.maps.LatLngLiteral;
  southwest: google.maps.LatLngLiteral;
}

// Custom marker data
export interface CrimeMarkerData {
  id: string;
  position: google.maps.LatLngLiteral;
  title: string;
  crimeType: string;
  severity: string;
  date: string;
  verified: boolean;
}

// Marker cluster data
export interface MarkerCluster {
  position: google.maps.LatLngLiteral;
  count: number;
  crimes: CrimeMarkerData[];
  bounds: MapBounds;
}

// Map event handlers
export interface MapEventHandlers {
  onBoundsChanged?: (bounds: MapBounds) => void;
  onZoomChanged?: (zoom: number) => void;
  onCenterChanged?: (center: google.maps.LatLngLiteral) => void;
  onMarkerClick?: (markerId: string) => void;
  onMapClick?: (position: google.maps.LatLngLiteral) => void;
}

// Search result
export interface LocationSearchResult {
  address: string;
  position: google.maps.LatLngLiteral;
  placeId: string;
  types: string[];
}

// Map component props
export interface MapContainerProps {
  crimes: CrimeMarkerData[];
  config: MapConfig;
  onBoundsChanged?: (bounds: MapBounds) => void;
  onMarkerClick?: (crimeId: string) => void;
  loading?: boolean;
  className?: string;
}
