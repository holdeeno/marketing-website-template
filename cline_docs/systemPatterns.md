# System Patterns

## System Architecture
The website follows a modern web application architecture with the following key components:

### Frontend Architecture
- **App Router Pattern**: Utilizes Next.js 14+ App Router for file-based routing
- **Server Components**: Leverages React Server Components for improved performance
- **Client Components**: Uses Client Components for interactive elements with the `"use client"` directive
- **Hybrid Rendering**: Combines Static Site Generation (SSG), Server-Side Rendering (SSR), and Client-Side Rendering (CSR) as appropriate

### Content Management Architecture
- **Headless CMS**: Sanity CMS provides structured content management separate from presentation
- **Studio Integration**: Sanity Studio embedded within Next.js app at /studio route
- **Content Schemas**: Structured content modeling with typed schemas
- **GROQ Queries**: Content fetching using Sanity's GROQ query language
- **Image Pipeline**: Optimization and transformation of images through Sanity's image pipeline

### Backend Architecture
- **API Routes**: Next.js API routes for backend functionality
- **Serverless Functions**: Deployed as serverless functions on Vercel
- **Database Access**: Direct connection to Supabase from both server and client components as needed

### Data Flow
- **Content Pipeline**: Content authored in Sanity Studio → stored in Sanity dataset → queried by frontend components
- **Server-First Approach**: Data fetching primarily happens on the server when possible
- **Client-Side Updates**: Optimistic UI updates with server validation
- **Real-time Capabilities**: Supabase subscriptions for real-time data where required

## Design Patterns

### Component Patterns
- **Composition Pattern**: Building complex components from smaller, focused components
- **Container/Presentational Pattern**: Separating data fetching from presentation when appropriate
- **Render Props/Higher-Order Components**: Used sparingly when component logic needs to be shared
- **Custom Hooks**: Extracting reusable logic into custom React hooks
- **Schema-Driven Components**: Components structured to match Sanity content schemas

### Content Modeling Patterns
- **Portable Text**: Rich text content using Sanity's Portable Text format
- **References**: Content relationships using references between documents
- **Slices/Sections**: Modular page building with section-based content models
- **Content Reusability**: Shared content fragments referenced across multiple pages
- **Field Validation**: Schema-level validation for content consistency

### State Management
- **Server State**: Primarily managed through React Server Components and data fetching
- **Client State**: React's built-in state management with `useState` and `useReducer`
- **Global State**: Minimal global state with React Context API when needed
- **Form State**: Managed with form libraries optimized for React

### Data Fetching
- **GROQ Queries**: Structured queries against Sanity content lake
- **Server Actions**: Utilizing Next.js Server Actions for server-side mutations
- **SWR Pattern**: Stale-while-revalidate pattern for client-side data fetching where appropriate
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with client-side features

## Component Relationships

### Core Component Structure
```
Layout
├── Header (from Sanity schema)
├── Main Content
│   ├── Hero (from Sanity schema)
│   ├── Features (from Sanity schema)
│   ├── CTA (from Sanity schema)
│   ├── Contact (from Sanity schema)
│   └── Other content sections
└── Footer (from Sanity schema)
```

### Content Component Relationship
```
Sanity Schema
├── Hero Schema
│   └── Hero Component (renders Hero content)
├── Features Schema
│   ├── Features Component (container)
│   └── Feature Component (individual feature)
├── CTA Schema
│   └── CTA Component
├── Contact Schema
│   └── Contact Component
├── Header Schema
│   └── Header Component
└── Footer Schema
    └── Footer Component
```

### Data Component Structure
```
DataProvider
├── Sanity Client
│   ├── GROQ Queries
│   └── Image URL Builder
├── Supabase Client
│   ├── API Clients
│   └── Data Transformers
└── Data Consumers (Components)
```

## Critical Implementation Paths

### Content Retrieval Flow
1. Server component fetches data using GROQ queries
2. Sanity delivers structured content
3. Content is typed using TypeScript interfaces
4. Components render content with appropriate styling
5. Images are transformed and optimized through Sanity image pipeline

### Form Submission Flow
1. Data entered through form components
2. Validation performed on client side
3. Server action called or API route triggered
4. Data validation repeated on server
5. Data stored in Supabase database
6. Response returned to client
7. UI updated to reflect changes

### Content Management Flow
1. Content editor accesses Sanity Studio at /studio route
2. Authentication against Sanity project
3. Content creation/editing through schema-defined forms
4. Content validation through schema constraints
5. Content published to Sanity dataset
6. Frontend components receive updated content

### Asset Optimization Path
1. Images uploaded through Sanity Studio
2. Stored in Sanity's CDN
3. Transformed and optimized on-demand via URL parameters
4. Delivered to frontend with appropriate optimization
5. Rendered through Next.js Image or Sanity image components

## Reusable Patterns

### Content Patterns
- **Portable Text Rendering**: Converting Portable Text to React components
- **Image Handling**: Consistent image optimization and responsive sizing
- **Reference Resolution**: Handling references between content types
- **Frontend Querying**: Consistent patterns for GROQ queries

### Error Handling
- **Boundary Pattern**: Error boundaries to catch and display errors gracefully
- **Try-Catch Pattern**: Structured error handling in async operations
- **Status-Based UI**: Different UI states based on data loading/error status
- **Fallback Content**: Default content when Sanity data is unavailable

### Performance Optimization
- **Code Splitting**: Automatic code splitting based on routes
- **Partial Hydration**: Selective hydration of interactive components
- **Incremental Static Regeneration**: Updating static content without full rebuilds
- **Edge Caching**: Caching at the network edge for faster delivery
- **Asset Optimization**: Optimizing images and other assets through CDNs
