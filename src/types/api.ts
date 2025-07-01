// API request and response types
export interface ApiRequest<T = unknown> {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  data?: T;
  params?: Record<string, string | number | boolean>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
  timestamp: string;
}

// Crime search API types
export interface CrimeSearchParams {
  bounds?: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
  crimeTypes?: string[];
  severityLevels?: string[];
  dateStart?: string;
  dateEnd?: string;
  verified?: boolean;
  page?: number;
  limit?: number;
}

import type { CrimeIncident } from "./crime";

export interface CrimeSearchResponse {
  crimes: CrimeIncident[];
  total: number;
  bounds: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
  statistics: {
    totalInBounds: number;
    byType: Record<string, number>;
    bySeverity: Record<string, number>;
  };
}
