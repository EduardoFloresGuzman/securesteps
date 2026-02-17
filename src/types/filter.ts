// Filter-related type definitions
export interface FilterState {
  crimeTypes: string[];
  severityLevels: string[];
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  showVerifiedOnly: boolean;
  searchQuery: string;
}

// Filter panel component props
export interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
  isOpen: boolean;
  onToggle: () => void;
  crimeStats?: {
    totalCrimes: number;
    filteredCrimes: number;
  };
}

// Date filter props
export interface DateFilterProps {
  startDate: Date | null;
  endDate: Date | null;
  onDateChange: (start: Date | null, end: Date | null) => void;
  maxDate?: Date;
  minDate?: Date;
}

// Category filter props
export interface CategoryFilterProps {
  selectedTypes: string[];
  onTypesChange: (types: string[]) => void;
  availableTypes: Array<{
    id: string;
    label: string;
    count: number;
    color: string;
  }>;
}

// Severity filter props
export interface SeverityFilterProps {
  selectedLevels: string[];
  onLevelsChange: (levels: string[]) => void;
  availableLevels: Array<{
    id: string;
    label: string;
    count: number;
    color: string;
  }>;
}
