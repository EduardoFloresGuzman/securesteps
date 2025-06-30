/**
 * Calculate distance between two points using Haversine formula
 */
export const calculateDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Convert degrees to radians
 */
const toRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

/**
 * Get the center point of multiple coordinates
 */
export const getCenterOfCoordinates = (
  coordinates: google.maps.LatLngLiteral[]
): google.maps.LatLngLiteral => {
  if (coordinates.length === 0) {
    return { lat: 0, lng: 0 };
  }

  if (coordinates.length === 1) {
    return coordinates[0];
  }

  let lat = 0;
  let lng = 0;

  coordinates.forEach((coord) => {
    lat += coord.lat;
    lng += coord.lng;
  });

  return {
    lat: lat / coordinates.length,
    lng: lng / coordinates.length,
  };
};

/**
 * Check if a point is within map bounds
 */
export const isPointInBounds = (
  point: google.maps.LatLngLiteral,
  bounds: google.maps.LatLngBounds
): boolean => {
  return bounds.contains(new google.maps.LatLng(point.lat, point.lng));
};

/**
 * Convert map bounds to a simple object
 */
export const boundsToObject = (bounds: google.maps.LatLngBounds) => {
  const ne = bounds.getNorthEast();
  const sw = bounds.getSouthWest();

  return {
    northeast: { lat: ne.lat(), lng: ne.lng() },
    southwest: { lat: sw.lat(), lng: sw.lng() },
  };
};

/**
 * Create bounds from coordinates array
 */
export const createBoundsFromCoordinates = (
  coordinates: google.maps.LatLngLiteral[]
): google.maps.LatLngBounds => {
  const bounds = new google.maps.LatLngBounds();

  coordinates.forEach((coord) => {
    bounds.extend(new google.maps.LatLng(coord.lat, coord.lng));
  });

  return bounds;
};

/**
 * Format coordinates for display
 */
export const formatCoordinates = (
  lat: number,
  lng: number,
  precision: number = 6
): string => {
  return `${lat.toFixed(precision)}, ${lng.toFixed(precision)}`;
};

/**
 * Geocode an address (requires Google Maps API)
 */
export const geocodeAddress = async (
  address: string,
  geocoder: google.maps.Geocoder
): Promise<google.maps.LatLngLiteral | null> => {
  try {
    const result = await new Promise<google.maps.GeocoderResult[]>(
      (resolve, reject) => {
        geocoder.geocode({ address }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK && results) {
            resolve(results);
          } else {
            reject(new Error(`Geocoding failed: ${status}`));
          }
        });
      }
    );

    if (result.length > 0) {
      const location = result[0].geometry.location;
      return { lat: location.lat(), lng: location.lng() };
    }

    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
};

/**
 * Reverse geocode coordinates to get address
 */
export const reverseGeocode = async (
  lat: number,
  lng: number,
  geocoder: google.maps.Geocoder
): Promise<string | null> => {
  try {
    const result = await new Promise<google.maps.GeocoderResult[]>(
      (resolve, reject) => {
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK && results) {
            resolve(results);
          } else {
            reject(new Error(`Reverse geocoding failed: ${status}`));
          }
        });
      }
    );

    if (result.length > 0) {
      return result[0].formatted_address;
    }

    return null;
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return null;
  }
};
