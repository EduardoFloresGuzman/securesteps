import { CrimeIncident } from "../types/crime";
import { CRIME_TYPES, SEVERITY_LEVELS } from "./constants";
import type { CrimeType, SeverityLevel } from "./constants";

/**
 * Get crime type information
 */
export const getCrimeTypeInfo = (crimeType: string) => {
  const type = crimeType.toUpperCase().replace(/\s+/g, "_") as CrimeType;
  return CRIME_TYPES[type] || CRIME_TYPES.OTHER;
};

/**
 * Get severity information
 */
export const getSeverityInfo = (severity: string) => {
  const sev = severity.toUpperCase() as SeverityLevel;
  return SEVERITY_LEVELS[sev] || SEVERITY_LEVELS.MEDIUM;
};

/**
 * Filter crimes by type
 */
export const filterCrimesByType = (
  crimes: CrimeIncident[],
  selectedTypes: string[]
): CrimeIncident[] => {
  if (selectedTypes.length === 0) return crimes;

  return crimes.filter((crime) =>
    selectedTypes.includes(crime.crimeType.toLowerCase())
  );
};

/**
 * Filter crimes by severity
 */
export const filterCrimesBySeverity = (
  crimes: CrimeIncident[],
  minSeverity: string
): CrimeIncident[] => {
  const minSeverityValue = getSeverityInfo(minSeverity).value;

  return crimes.filter((crime) => {
    const crimeTypeInfo = getCrimeTypeInfo(crime.crimeType);
    const crimeSeverityValue = getSeverityInfo(crimeTypeInfo.severity).value;
    return crimeSeverityValue >= minSeverityValue;
  });
};

/**
 * Filter crimes by date range
 */
export const filterCrimesByDateRange = (
  crimes: CrimeIncident[],
  startDate: Date,
  endDate: Date
): CrimeIncident[] => {
  return crimes.filter((crime) => {
    const crimeDate = new Date(crime.dateOccurred);
    return crimeDate >= startDate && crimeDate <= endDate;
  });
};

/**
 * Sort crimes by date (newest first)
 */
export const sortCrimesByDate = (crimes: CrimeIncident[]): CrimeIncident[] => {
  return [...crimes].sort(
    (a, b) =>
      new Date(b.dateOccurred).getTime() - new Date(a.dateOccurred).getTime()
  );
};

/**
 * Group crimes by type for statistics
 */
export const groupCrimesByType = (crimes: CrimeIncident[]) => {
  const groups = crimes.reduce((acc, crime) => {
    const type = crime.crimeType;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(groups)
    .map(([type, count]) => ({
      type,
      count,
      info: getCrimeTypeInfo(type),
    }))
    .sort((a, b) => b.count - a.count);
};

/**
 * Calculate crime statistics
 */
export const calculateCrimeStats = (crimes: CrimeIncident[]) => {
  const total = crimes.length;
  const groups = groupCrimesByType(crimes);

  const severityDistribution = crimes.reduce((acc, crime) => {
    const typeInfo = getCrimeTypeInfo(crime.crimeType);
    const severity = typeInfo.severity;
    acc[severity] = (acc[severity] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const last24Hours = crimes.filter((crime) => {
    const crimeDate = new Date(crime.dateOccurred);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return crimeDate >= yesterday;
  }).length;

  return {
    total,
    last24Hours,
    byType: groups,
    bySeverity: severityDistribution,
    mostCommonType: groups[0]?.type || "None",
    averagePerDay: total / 30, // Assuming we're looking at 30 days of data
  };
};

/**
 * Validate crime data
 */
export const validateCrimeIncident = (
  crime: Partial<CrimeIncident>
): boolean => {
  return !!(
    crime.title &&
    crime.description &&
    crime.crimeType &&
    crime.location?.coordinates &&
    crime.location.coordinates.length === 2 &&
    crime.dateOccurred
  );
};
