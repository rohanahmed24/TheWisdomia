# TheWisdomia

## Overview

TheWisdomia is a storytelling and content platform that delivers articles across categories like history, crime, politics, and culture. The application features a premium subscription model, audio narration for stories, and a newsletter signup. Built as a hybrid Next.js and Vite application with a PostgreSQL database backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The project has a dual frontend setup:

1. **Next.js App Router** (`src/app/`) - Primary frontend using Next.js with the App Router pattern
   - Pages defined in `src/app/page.tsx` with layout in `src/app/layout.tsx`
   - Uses React Server Components where applicable
   - Custom fonts: Fraunces (headings), Merriweather Sans (body text)

2. **Vite/React SPA** (`client/`) - Secondary client using Vite with React
   - Entry point at `client/src/main.tsx`
   - Uses wouter for client-side routing
   - React Query for server state management

**UI Component Library**: shadcn/ui with Radix UI primitives
- Components located in `src/components/ui/` and `client/src/components/ui/`
- Styling uses Tailwind CSS with CSS variables for theming
- New York style variant configured in `components.json`

### Backend Architecture

**Server Entry** (`server/index.ts`): Spawns Next.js dev server on the configured port

**API Layer** (`server/routes.ts`): Express-based route registration (currently minimal, designed for extension)

**Storage Pattern** (`server/storage.ts`): 
- Interface-based storage abstraction (`IStorage`)
- In-memory implementation (`MemStorage`) as default
- Designed to swap for database-backed implementation

### Data Storage

**Database**: PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)

**ORM**: Drizzle ORM with drizzle-zod for schema validation

**Schema** (`shared/schema.ts`):
- Users table with UUID primary key, username, and password
- Zod schemas generated from Drizzle schemas for validation

**Migrations**: Output to `./migrations` directory via `drizzle-kit push`

### Build Configuration

- **Vite** for client bundling with path aliases (`@/`, `@shared/`, `@assets/`)
- **esbuild** for server bundling in production
- **TypeScript** with bundler module resolution
- Tailwind CSS with custom design tokens

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless Postgres (`@neondatabase/serverless`)
- Requires `DATABASE_URL` environment variable

### UI/Component Libraries
- **Radix UI**: Full primitive set for accessible components
- **shadcn/ui**: Pre-built component patterns
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library

### State Management
- **TanStack React Query**: Server state and caching
- **React Hook Form** with Zod resolvers: Form handling

### Additional Services
- **connect-pg-simple**: PostgreSQL session storage (available but not yet integrated)
- Google Fonts: Fraunces, Merriweather Sans, DM Sans, Fira Code, Geist Mono