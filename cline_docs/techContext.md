# Technical Context

## Technologies Used

### Frontend
- **Next.js 14+**: React framework with App Router for server components and routing
- **React**: UI library for component-based development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: Typed JavaScript for improved developer experience and code quality

### Content Management
- **Sanity CMS**: Headless CMS for structured content management
  - Custom schemas for various content types
  - Sanity Studio embedded in Next.js app
  - Image handling and optimization
  - Content querying with GROQ

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **Supabase**: Backend-as-a-Service platform providing:
  - PostgreSQL database
  - Authentication services
  - Storage solutions
  - Realtime subscriptions

### Infrastructure
- **Vercel**: Deployment platform optimized for Next.js applications
  - Edge functions
  - CDN for static assets
  - Serverless functions for API routes
- **GitHub**: Version control and CI/CD workflows

## Development Setup

### Local Environment
- **Node.js**: v18+ LTS recommended
- **Package Manager**: npm or yarn (consistent usage required)
- **Environment Variables**: Stored in `.env.local` (not committed to repository)
- **Git**: Local version control 

### Development Workflow
1. Run `npm install` to install dependencies
2. Set up local environment variables in `.env.local`
3. Run `npm run dev` to start development server
4. Access the application at `http://localhost:3000`
5. Access Sanity Studio at `http://localhost:3000/studio`

### Build Process
- **Development**: `npm run dev` - Starts Next.js development server
- **Build**: `npm run build` - Creates optimized production build
- **Start**: `npm start` - Runs the built application
- **Lint**: `npm run lint` - Runs ESLint to check code quality
- **Test**: `npm test` - Runs test suite (Jest/React Testing Library)

## Technical Constraints

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- No support for Internet Explorer
- Mobile browsers on iOS and Android

### Performance Targets
- Lighthouse Performance score: 90+
- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

### Security Requirements
- HTTPS only
- CSRF protection on all forms
- Content Security Policy implementation
- Regular dependency updates
- Secure authentication practices

### Accessibility Standards
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast
- Proper semantic HTML

## Dependencies

### Core Dependencies
- next
- react
- react-dom
- typescript
- tailwindcss
- @supabase/supabase-js
- @sanity/client
- @sanity/image-url
- next-sanity

### Development Dependencies
- eslint
- prettier
- typescript
- jest
- @testing-library/react
- postcss
- autoprefixer

### Key Third-Party Libraries
- **Form Handling**: react-hook-form
- **Validation**: zod
- **UI Components**: Optional UI component library (e.g., shadcn/ui)
- **Date Management**: date-fns
- **Icons**: heroicons or other icon libraries

## Tool Usage Patterns

### Sanity Usage
- Schema definitions for structured content
- GROQ queries for content fetching
- Image handling with @sanity/image-url
- Studio customization for content editors
- Content portability across environments

### Supabase Usage
- Direct database access via Supabase client
- RLS (Row Level Security) for data protection
- Supabase Auth for authentication
- Storage for user-generated content

### Tailwind CSS Implementation
- Custom theme configuration in `tailwind.config.js`
- Component-based design system
- Responsive design using Tailwind breakpoints
- Dark mode support

### Next.js Patterns
- App directory for routing
- Server Components as the default
- Client Components marked with "use client"
- Image optimization with Next.js Image component
- Metadata API for SEO

### State Management
- Server state: primarily through RSC and data fetching
- Client state: React hooks (useState, useReducer)
- Form state: react-hook-form
- Global state: React Context (minimal use)

### Testing Strategy
- Unit tests for utilities and hooks
- Component tests with React Testing Library
- Integration tests for key user flows
- E2E tests with Playwright for critical paths

### Development Tools
- VS Code as primary editor
- ESLint for code quality
- Prettier for code formatting
- TypeScript for type checking
- Husky for pre-commit hooks
