# SecureSteps - Crime Mapping Application

## Project Overview

SecureSteps is an interactive web application designed to enhance community safety awareness by providing real-time visualization of crime incidents through an intuitive map interface. The platform aims to empower citizens with accessible information about local security incidents, helping them make informed decisions about their daily routes and activities.

## Purpose & Vision

The primary goal of SecureSteps is to create a transparent, user-friendly platform that:

- **Increases Public Awareness**: Provides citizens with up-to-date information about crime incidents in their area
- **Enhances Community Safety**: Enables users to identify high-risk areas and plan safer routes
- **Promotes Transparency**: Offers easy access to crime data typically buried in police reports or news articles
- **Supports Data-Driven Decisions**: Helps residents, businesses, and visitors make informed choices about locations and timing of activities

## Core Features

### Interactive Crime Map

- **Visual Crime Markers**: Interactive pins/markers on a map indicating locations where crimes have occurred
- **Incident Details**: Each marker contains comprehensive information including:
  - Crime title/type
  - Detailed description of the incident
  - Date and time of occurrence
  - Direct link to related news articles or official reports
  - Severity level indicators

### User Experience

- **Popover Information Display**: Clicking on any crime marker triggers a popover/modal with detailed incident information
- **Intuitive Navigation**: Smooth map interaction with zoom, pan, and search capabilities
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Real-time Updates**: Dynamic loading of new crime data as it becomes available

### Information Architecture

- **Structured Data**: Organized crime information with consistent categorization
- **Source Attribution**: Clear links to original news articles and official reports
- **Temporal Filtering**: Ability to view crimes by date ranges
- **Category Filtering**: Filter by crime type (theft, assault, vandalism, etc.)

## Technical Specifications

### Technology Stack

- **Frontend Framework**: Next.js with React
- **Styling**: CSS modules with PostCSS
- **Language**: TypeScript for type safety
- **Build Tool**: Next.js built-in bundler
- **Linting**: ESLint for code quality
- **Database**: MongoDB with Mongoose ODM
- **Maps**: Google Maps JavaScript API
- **Authentication**: (To be determined - NextAuth.js or similar)
- **Deployment**: Vercel (frontend) + MongoDB Atlas (database)

### Map Integration

- **Mapping Service**: Google Maps API
- **Map Features**: Interactive markers, clustering, custom styling
- **Geolocation**: Precise latitude/longitude coordinates for crime incidents
- **Clustering**: Intelligent grouping of nearby incidents to prevent map overcrowding
- **Map Controls**: Zoom, pan, search, and location-based filtering

### Database & Data Management

- **Database**: MongoDB for flexible document storage
- **Data Sources**: News APIs, police reports, community submissions
- **Data Validation**: Verification process for crime incident accuracy
- **Update Frequency**: Regular synchronization with data sources
- **Data Storage**: Geospatial indexing for efficient location-based queries

### MongoDB Schema Definitions

#### Crime Incident Schema

```javascript
{
  _id: ObjectId,
  title: String,           // Crime title/headline
  description: String,     // Detailed description of the incident
  crimeType: String,       // Category: "theft", "assault", "vandalism", etc.
  severity: String,        // "low", "medium", "high", "critical"
  location: {
    type: "Point",
    coordinates: [Number, Number]  // [longitude, latitude]
  },
  address: String,         // Human-readable address
  dateOccurred: Date,      // When the crime occurred
  dateReported: Date,      // When the crime was reported
  newsArticleUrl: String,  // Link to news article or report
  source: String,          // Data source: "news_api", "police_report", "community"
  verified: Boolean,       // Whether the incident has been verified
  createdAt: Date,
  updatedAt: Date,
  tags: [String],          // Additional categorization tags
  reportedBy: String       // Source attribution
}
```

#### User Schema (for future features)

```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  role: String,            // "user", "moderator", "admin"
  preferences: {
    notificationRadius: Number,  // km radius for notifications
    crimeTypes: [String],        // Types of crimes to be notified about
    severityLevel: String        // Minimum severity level for notifications
  },
  location: {
    type: "Point",
    coordinates: [Number, Number]  // User's general location (optional)
  },
  createdAt: Date,
  lastLogin: Date
}
```

#### Data Source Schema

```javascript
{
  _id: ObjectId,
  name: String,            // Source name (e.g., "Local News API", "Police Department")
  type: String,            // "api", "manual", "scraper"
  url: String,             // Source URL or API endpoint
  lastSync: Date,          // Last synchronization timestamp
  isActive: Boolean,       // Whether source is currently active
  reliability: Number,     // Reliability score (1-10)
  syncFrequency: String,   // "hourly", "daily", "weekly"
  apiKey: String,          // Encrypted API key if needed
  createdAt: Date,
  updatedAt: Date
}
```

### Performance Requirements

- **Load Time**: Map should load within 3 seconds
- **Responsiveness**: Smooth interaction on devices with varying performance capabilities
- **Scalability**: Support for thousands of crime markers without performance degradation

## Target Audience

- **Primary Users**: Local residents seeking safety information
- **Secondary Users**: Visitors and tourists planning routes
- **Tertiary Users**: Local businesses assessing location security
- **Stakeholders**: Community organizations and local authorities

## Success Metrics

- User engagement with map interactions
- Accuracy and timeliness of crime data
- Community feedback and adoption rates
- Reduction in crime-related incidents through increased awareness

---

## Application Architecture

### Pages Structure (Next.js App Router)

#### Core Pages

- **`/` (Home/Map Page)**: Main interface displaying the interactive crime map
- **`/about`**: Information about the project, data sources, and methodology
- **`/privacy`**: Privacy policy and data usage information
- **`/terms`**: Terms of service and usage guidelines

#### API Routes

- **`/api/crimes`**: CRUD operations for crime data
- **`/api/crimes/[id]`**: Individual crime incident details
- **`/api/crimes/search`**: Search and filter crimes by location, date, type
- **`/api/data-sync`**: Endpoints for syncing data from external sources
- **`/api/health`**: Health check for monitoring

#### Admin Pages (Future Feature)

- **`/admin`**: Admin dashboard for data management
- **`/admin/crimes`**: Manage crime incidents
- **`/admin/sources`**: Manage data sources
- **`/admin/users`**: User management (if authentication is added)

### Component Architecture

#### Layout Components

```
src/components/layout/
├── Header.tsx              // Navigation and branding
├── Footer.tsx              // Footer with links and attribution
├── Sidebar.tsx             // Collapsible sidebar for filters
└── Layout.tsx              // Main layout wrapper
```

#### Map Components

```
src/components/map/
├── MapContainer.tsx        // Main Google Maps wrapper
├── CrimeMarker.tsx         // Individual crime marker
├── MarkerCluster.tsx       // Clustering functionality
├── MapControls.tsx         // Zoom, center, search controls
└── LocationSearch.tsx      // Address/location search input
```

#### UI Components

```
src/components/ui/
├── CrimePopover.tsx        // Crime details popover/modal
├── FilterPanel.tsx         // Main filter container
├── DateFilter.tsx          // Date range picker
├── CategoryFilter.tsx      // Crime type checkboxes
├── SeverityFilter.tsx      // Severity level selector
├── SearchBar.tsx           // General search functionality
├── LoadingSpinner.tsx      // Loading states
├── ErrorBoundary.tsx       // Error handling
├── Button.tsx              // Reusable button component
├── Modal.tsx               // Generic modal component
└── Toast.tsx               // Notification component
```

#### Data Components

```
src/components/data/
├── CrimeList.tsx           // List view of crimes (optional)
├── CrimeCard.tsx           // Individual crime card
├── StatsPanel.tsx          // Crime statistics display
└── Legend.tsx              // Map legend for crime types
```

### Custom Hooks

```
src/hooks/
├── useGoogleMaps.ts        // Google Maps API integration
├── useCrimeData.ts         // Fetch and manage crime data
├── useFilters.ts           // Filter state management
├── useGeolocation.ts       // User location detection
├── useDebounce.ts          // Debounce search inputs
└── useLocalStorage.ts      // Persist user preferences
```

### Utility Functions

```
src/utils/
├── mapHelpers.ts           // Map-related utilities
├── dateHelpers.ts          // Date formatting and validation
├── crimeHelpers.ts         // Crime data processing
├── geocoding.ts            // Address to coordinates conversion
├── constants.ts            // App constants (crime types, colors, etc.)
└── validation.ts           // Data validation schemas
```

### Type Definitions

```
src/types/
├── crime.ts                // Crime incident interfaces
├── map.ts                  // Map-related types
├── user.ts                 // User and preferences types
├── api.ts                  // API response types
└── filter.ts               // Filter-related types
```

### State Management Structure

#### Context Providers

```
src/context/
├── MapContext.tsx          // Map state (zoom, center, bounds)
├── FilterContext.tsx       // Filter state management
├── CrimeDataContext.tsx    // Crime data and caching
└── UserContext.tsx         // User preferences (future)
```

### Key Component Interactions

1. **MapContainer** → Contains all map-related functionality

   - Integrates with Google Maps API
   - Manages markers and clustering
   - Handles map events (zoom, pan, click)

2. **FilterPanel** → Controls data display

   - Communicates with CrimeDataContext
   - Updates map markers based on filters
   - Persists filter state

3. **CrimePopover** → Shows detailed crime information

   - Triggered by marker clicks
   - Displays formatted crime data
   - Includes link to news articles

4. **MapControls** → User interaction tools
   - Search functionality
   - Location centering
   - Map style toggles

### Mobile-First Responsive Design

- **Mobile (< 768px)**: Full-screen map with collapsible filters
- **Tablet (768px - 1024px)**: Split view with sidebar filters
- **Desktop (> 1024px)**: Full layout with persistent sidebar

### Performance Optimizations

- **Marker Virtualization**: Only render visible markers
- **Data Pagination**: Load crimes in chunks based on map bounds
- **Image Lazy Loading**: Defer loading of non-critical assets
- **Code Splitting**: Route-based code splitting with Next.js
- **Caching Strategy**: Cache crime data with SWR or React Query

---

_Document Version: 1.0_
_Last Updated: June 30, 2025_
