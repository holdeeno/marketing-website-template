# System Patterns

## System Architecture
The website follows a modern web application architecture with the following key components:

### Frontend Architecture
- **App Router Pattern**: Utilizes Next.js 14+ App Router for file-based routing
- **Server Components**: Leverages React Server Components for improved performance
- **Client Components**: Uses Client Components for interactive elements with the `"use client"` directive
- **Hybrid Rendering**: Combines Static Site Generation (SSG), Server-Side Rendering (SSR), and Client-Side Rendering (CSR) as appropriate

### Backend Architecture
- **API Routes**: Next.js API routes for backend functionality
- **Serverless Functions**: Deployed as serverless functions on Vercel
- **Database Access**: Direct connection to Supabase from both server and client components as needed

### Data Flow
- **Server-First Approach**: Data fetching primarily happens on the server when possible
- **Client-Side Updates**: Optimistic UI updates with server validation
- **Real-time Capabilities**: Supabase subscriptions for real-time data where required

## Design Patterns

### Component Patterns
- **Composition Pattern**: Building complex components from smaller, focused components
- **Container/Presentational Pattern**: Separating data fetching from presentation when appropriate
- **Render Props/Higher-Order Components**: Used sparingly when component logic needs to be shared
- **Custom Hooks**: Extracting reusable logic into custom React hooks

### State Management
- **Server State**: Primarily managed through React Server Components and data fetching
- **Client State**: React's built-in state management with `useState` and `useReducer`
- **Global State**: Minimal global state with React Context API when needed
- **Form State**: Managed with form libraries optimized for React

### Data Fetching
- **Server Actions**: Utilizing Next.js Server Actions for server-side mutations
- **SWR Pattern**: Stale-while-revalidate pattern for client-side data fetching where appropriate
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with client-side features

## Component Relationships

### Core Component Structure
```
Layout
├── Navigation
│   ├── NavLink
│   ├── MobileMenu
│   └── AuthStatus
├── Main Content
│   ├── Page-specific components
│   └── Shared components
└── Footer
    ├── FooterLinks
    └── SocialLinks
```

### Data Component Structure
```
DataProvider
├── Service Layer
│   ├── API Clients
│   └── Data Transformers
├── Auth Context
└── Data Consumers (Components)
```

## Critical Implementation Paths

### Authentication Flow
1. User initiates login through AuthUI component
2. Authentication request sent to Supabase Auth
3. Upon success, JWT stored and user data retrieved
4. UI updated to reflect authenticated state
5. Protected routes/content now accessible

### Data Persistence Flow
1. Data entered through form components
2. Validation performed on client side
3. Server action called or API route triggered
4. Data validation repeated on server
5. Data stored in Supabase database
6. Response returned to client
7. UI updated to reflect changes

### Asset Optimization Path
1. Static assets stored in /public directory
2. Images processed through Next.js Image component
3. Automatic optimization based on device/viewport
4. Caching at the edge through Vercel's CDN
5. Delivered to client with appropriate optimization

## Reusable Patterns

### Error Handling
- **Boundary Pattern**: Error boundaries to catch and display errors gracefully
- **Try-Catch Pattern**: Structured error handling in async operations
- **Status-Based UI**: Different UI states based on data loading/error status

### Performance Optimization
- **Code Splitting**: Automatic code splitting based on routes
- **Partial Hydration**: Selective hydration of interactive components
- **Incremental Static Regeneration**: Updating static content without full rebuilds
- **Edge Caching**: Caching at the network edge for faster delivery
