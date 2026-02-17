import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface UseGoogleMapsProps {
  apiKey: string;
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  mapId?: string;
}

interface UseGoogleMapsReturn {
  map: google.maps.Map | null;
  mapRef: React.RefObject<HTMLDivElement | null>;
  isLoaded: boolean;
  error: string | null;
}

const useGoogleMaps = ({
  apiKey,
  center = { lat: 40.7128, lng: -74.006 }, // NYC default
  zoom = 12,
  mapId,
}: UseGoogleMapsProps): UseGoogleMapsReturn => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapRef.current || !apiKey) {
        setError("Map container or API key not available");
        return;
      }

      try {
        const loader = new Loader({
          apiKey,
          version: "weekly",
          libraries: ["places", "geometry"],
        });

        const google = await loader.load();

        const mapOptions: google.maps.MapOptions = {
          center,
          zoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          streetViewControl: false,
          mapTypeControl: true,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            {
              featureType: "poi.business",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text",
              stylers: [{ visibility: "off" }],
            },
          ],
          ...(mapId && { mapId }),
        };

        const mapInstance = new google.maps.Map(mapRef.current, mapOptions);

        setMap(mapInstance);
        setIsLoaded(true);
        setError(null);
      } catch (err) {
        console.error("Error loading Google Maps:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load Google Maps"
        );
        setIsLoaded(false);
      }
    };

    initializeMap();
  }, [apiKey, center, zoom, mapId]);

  return {
    map,
    mapRef,
    isLoaded,
    error,
  };
};

export default useGoogleMaps;
