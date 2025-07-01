// Crime incident type definitions
export interface CrimeIncident {
  _id: string;
  title: string;
  description: string;
  crimeType: CrimeType;
  severity: SeverityLevel;
  location: GeoLocation;
  address: string;
  dateOccurred: Date;
  dateReported: Date;
  newsArticleUrl?: string;
  // source: DataSource;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  reportedBy: string;
}

// Geographic location with GeoJSON Point format
export interface GeoLocation {
  type: "Point";
  coordinates: [number, number]; // [longitude, latitude]
}

// Crime type categories
export type CrimeType =
  | "theft"
  | "assault"
  | "vandalism"
  | "burglary"
  | "fraud"
  | "drug-related"
  | "domestic-violence"
  | "robbery"
  | "vehicle-theft"
  | "other";

// Severity levels
export type SeverityLevel = "low" | "medium" | "high" | "critical";

// Data source types
export type DataSource = "news_api" | "police_report" | "community" | "manual";

// Crime statistics
export interface CrimeStats {
  totalCrimes: number;
  crimesByType: Record<CrimeType, number>;
  crimesBySeverity: Record<SeverityLevel, number>;
  recentCrimes: number; // crimes in last 30 days
  dateRange: {
    earliest: Date;
    latest: Date;
  };
}

// Filter criteria for crime search
export interface CrimeFilters {
  crimeTypes: CrimeType[];
  severityLevels: SeverityLevel[];
  dateRange: {
    start: Date;
    end: Date;
  };
  bounds?: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
  radius?: {
    center: { lat: number; lng: number };
    radiusKm: number;
  };
  verified?: boolean;
}

// API response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
