// User preferences and settings
export interface UserPreferences {
  notificationRadius: number; // km radius for notifications
  crimeTypes: string[]; // Types of crimes to be notified about
  severityLevel: string; // Minimum severity level for notifications
  mapStyle: "default" | "satellite" | "terrain";
  autoCenter: boolean; // Auto-center map on user location
  showClusters: boolean; // Enable/disable marker clustering
}

// User data (for future authentication features)
export interface User {
  _id: string;
  username: string;
  email: string;
  role: "user" | "moderator" | "admin";
  preferences: UserPreferences;
  location?: {
    type: "Point";
    coordinates: [number, number];
  };
  createdAt: Date;
  lastLogin: Date;
}

// Theme and UI preferences
export interface UIPreferences {
  theme: "light" | "dark" | "system";
  language: string;
  timeFormat: "12h" | "24h";
  dateFormat: "MM/DD/YYYY" | "DD/MM/YYYY" | "YYYY-MM-DD";
}
