import { CrimeIncident } from "../types/crime";
import { CRIME_TYPES } from "./constants";

/**
 * Generate mock crime data for testing
 */
export const generateMockCrimeData = (count: number = 50): CrimeIncident[] => {
  const crimes: CrimeIncident[] = [];
  const crimeTypes = Object.keys(CRIME_TYPES);
  // const sources = Object.values(DATA_SOURCES);

  // Base coordinates for NYC area
  const baseCoords = {
    lat: 40.7128,
    lng: -74.006,
  };

  const mockTitles = [
    "Theft reported at local business",
    "Vehicle break-in incident",
    "Residential burglary investigation",
    "Assault case under review",
    "Vandalism damages public property",
    "Fraud case reported",
    "Drug-related arrest made",
    "Traffic violation incident",
    "Robbery at convenience store",
    "Property damage reported",
  ];

  const mockDescriptions = [
    "Police responded to reports of suspicious activity in the area.",
    "Witnesses reported seeing individuals acting suspiciously near the location.",
    "Investigation is ongoing with multiple leads being pursued.",
    "Local authorities are asking for any information from the public.",
    "Security footage is being reviewed as part of the investigation.",
    "No injuries were reported in connection with this incident.",
    "The suspect fled the scene before police arrival.",
    "Multiple units responded to the emergency call.",
    "Evidence is being processed by the forensics team.",
    "Community members are advised to remain vigilant.",
  ];

  const mockNewsUrls = [
    "https://example-news.com/crime-report-1",
    "https://local-news.com/incident-update",
    "https://city-news.com/police-report",
    "https://breaking-news.com/crime-alert",
    "https://community-news.com/safety-update",
  ];

  for (let i = 0; i < count; i++) {
    const randomCrimeType =
      crimeTypes[Math.floor(Math.random() * crimeTypes.length)];
    const crimeTypeInfo =
      CRIME_TYPES[randomCrimeType as keyof typeof CRIME_TYPES];

    // Generate random coordinates within ~10km of base location
    const latOffset = (Math.random() - 0.5) * 0.1; // ~5.5km range
    const lngOffset = (Math.random() - 0.5) * 0.1;

    const dateOccurred = new Date();
    dateOccurred.setDate(
      dateOccurred.getDate() - Math.floor(Math.random() * 90)
    ); // Last 90 days
    dateOccurred.setHours(Math.floor(Math.random() * 24));
    dateOccurred.setMinutes(Math.floor(Math.random() * 60));

    const dateReported = new Date(dateOccurred);
    dateReported.setHours(
      dateReported.getHours() + Math.floor(Math.random() * 48)
    ); // Reported within 48 hours

    const crime: CrimeIncident = {
      _id: `mock-crime-${i + 1}`,
      title: mockTitles[Math.floor(Math.random() * mockTitles.length)],
      description:
        mockDescriptions[Math.floor(Math.random() * mockDescriptions.length)],
      crimeType: randomCrimeType
        .toLowerCase()
        .replace("_", " ") as CrimeIncident["crimeType"],
      severity: crimeTypeInfo.severity,
      location: {
        type: "Point",
        coordinates: [baseCoords.lng + lngOffset, baseCoords.lat + latOffset],
      },
      address: `${Math.floor(Math.random() * 999) + 1} ${
        ["Main St", "Broadway", "Park Ave", "First Ave", "Second Ave"][
          Math.floor(Math.random() * 5)
        ]
      }, New York, NY`,
      dateOccurred,
      dateReported,
      newsArticleUrl:
        mockNewsUrls[Math.floor(Math.random() * mockNewsUrls.length)],
      // source: sources[Math.floor(Math.random() * sources.length)],
      verified: Math.random() > 0.2, // 80% verified
      createdAt: dateReported,
      updatedAt: dateReported,
      tags: [
        randomCrimeType.toLowerCase(),
        Math.random() > 0.5 ? "under-investigation" : "resolved",
        ...(Math.random() > 0.7 ? ["high-priority"] : []),
      ],
      reportedBy: `Source ${Math.floor(Math.random() * 5) + 1}`,
    };

    crimes.push(crime);
  }

  // Sort by date (newest first)
  return crimes.sort(
    (a, b) =>
      new Date(b.dateOccurred).getTime() - new Date(a.dateOccurred).getTime()
  );
};

/**
 * Generate mock crime data for a specific area
 */
export const generateMockCrimeDataForArea = (
  centerLat: number,
  centerLng: number,
  radiusKm: number = 5,
  count: number = 20
): CrimeIncident[] => {
  const crimes = generateMockCrimeData(count);

  // Adjust coordinates to be within the specified area
  return crimes.map((crime) => ({
    ...crime,
    location: {
      ...crime.location,
      coordinates: [
        centerLng + (Math.random() - 0.5) * (radiusKm / 111), // Rough conversion to degrees
        centerLat + (Math.random() - 0.5) * (radiusKm / 111),
      ],
    },
  }));
};
