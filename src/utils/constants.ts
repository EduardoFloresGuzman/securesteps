// Crime types and their associated colors and icons
export const CRIME_TYPES = {
  THEFT: {
    name: "Theft",
    color: "#f59e0b",
    bgColor: "#fef3c7",
    icon: "🔓",
    severity: "medium",
  },
  ASSAULT: {
    name: "Assault",
    color: "#dc2626",
    bgColor: "#fee2e2",
    icon: "⚡",
    severity: "high",
  },
  VANDALISM: {
    name: "Vandalism",
    color: "#7c3aed",
    bgColor: "#ede9fe",
    icon: "🔨",
    severity: "low",
  },
  BURGLARY: {
    name: "Burglary",
    color: "#ea580c",
    bgColor: "#fed7aa",
    icon: "🏠",
    severity: "high",
  },
  ROBBERY: {
    name: "Robbery",
    color: "#b91c1c",
    bgColor: "#fecaca",
    icon: "💰",
    severity: "critical",
  },
  FRAUD: {
    name: "Fraud",
    color: "#059669",
    bgColor: "#d1fae5",
    icon: "💳",
    severity: "medium",
  },
  DRUG_OFFENSE: {
    name: "Drug Offense",
    color: "#7c2d12",
    bgColor: "#fed7aa",
    icon: "💊",
    severity: "medium",
  },
  TRAFFIC_VIOLATION: {
    name: "Traffic Violation",
    color: "#0891b2",
    bgColor: "#cffafe",
    icon: "🚗",
    severity: "low",
  },
  OTHER: {
    name: "Other",
    color: "#6b7280",
    bgColor: "#f3f4f6",
    icon: "❓",
    severity: "medium",
  },
} as const;

export type CrimeType = keyof typeof CRIME_TYPES;

// Severity levels
export const SEVERITY_LEVELS = {
  LOW: {
    name: "Low",
    color: "#10b981",
    value: 1,
  },
  MEDIUM: {
    name: "Medium",
    color: "#f59e0b",
    value: 2,
  },
  HIGH: {
    name: "High",
    color: "#ef4444",
    value: 3,
  },
  CRITICAL: {
    name: "Critical",
    color: "#dc2626",
    value: 4,
  },
} as const;

export type SeverityLevel = keyof typeof SEVERITY_LEVELS;

// Data sources
export const DATA_SOURCES = {
  NEWS_API: "news_api",
  POLICE_REPORT: "police_report",
  COMMUNITY: "community",
  GOVERNMENT: "government",
} as const;

// Map configuration
export const MAP_CONFIG = {
  DEFAULT_CENTER: {
    lat: 40.7128,
    lng: -74.006, // New York City as default
  },
  DEFAULT_ZOOM: 12,
  MIN_ZOOM: 8,
  MAX_ZOOM: 18,
  MARKER_CLUSTER_DISTANCE: 50,
  SEARCH_RADIUS_KM: 10,
} as const;

// API endpoints
export const API_ENDPOINTS = {
  CRIMES: "/api/crimes",
  CRIMES_SEARCH: "/api/crimes/search",
  CRIME_DETAIL: (id: string) => `/api/crimes/${id}`,
  DATA_SYNC: "/api/data-sync",
  HEALTH: "/api/health",
} as const;

// Date ranges for filtering
export const DATE_RANGES = {
  LAST_24_HOURS: {
    name: "Last 24 Hours",
    days: 1,
  },
  LAST_WEEK: {
    name: "Last Week",
    days: 7,
  },
  LAST_MONTH: {
    name: "Last Month",
    days: 30,
  },
  LAST_3_MONTHS: {
    name: "Last 3 Months",
    days: 90,
  },
  LAST_YEAR: {
    name: "Last Year",
    days: 365,
  },
  CUSTOM: {
    name: "Custom Range",
    days: 0,
  },
} as const;

// App-wide constants
export const APP_CONFIG = {
  NAME: "SecureSteps",
  VERSION: "1.0.0",
  SUPPORT_EMAIL: "support@securesteps.app",
  PRIVACY_EMAIL: "privacy@securesteps.app",
  LEGAL_EMAIL: "legal@securesteps.app",
  MAX_MARKERS_PER_REQUEST: 1000,
  DEBOUNCE_DELAY_MS: 300,
  TOAST_DURATION_MS: 5000,
} as const;
