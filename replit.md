# Balıkesir Pet Oteli - Pet Hotel Management System

## Overview

A modern full-stack web application for a pet hotel business in Balıkesir, Turkey. The system provides a professional online presence with booking capabilities, service information, and customer management features. Built with a React frontend and Express.js backend, utilizing modern web technologies and a PostgreSQL database for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development experience
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **UI Components**: Radix UI primitives through shadcn/ui for accessible, customizable components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript throughout the application for consistency and type safety
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot module replacement with Vite for fast development cycles

### Data Storage
- **Database**: PostgreSQL as the primary database system
- **ORM**: Drizzle ORM with migrations support for schema evolution
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Development Storage**: In-memory storage implementation for development and testing

### Authentication & Authorization
- **User Management**: Basic user system with username/password authentication
- **Session Handling**: Server-side sessions stored in PostgreSQL
- **Schema Validation**: Zod schemas for input validation and type safety

### Build & Development
- **Build Tool**: Vite for fast builds and development server
- **Bundling**: ESBuild for production server bundling
- **Development**: Concurrent client and server development with hot reloading
- **TypeScript**: Strict TypeScript configuration across frontend, backend, and shared code

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Cloud PostgreSQL database connection
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **drizzle-kit**: Database migration and introspection tools
- **express**: Web application framework for Node.js
- **react**: Frontend framework for building user interfaces
- **@tanstack/react-query**: Server state management and caching

### UI and Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Headless UI component primitives
- **class-variance-authority**: Utility for managing component variants
- **lucide-react**: Icon library for consistent iconography
- **react-icons**: Additional icon collections including Font Awesome

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **tsx**: TypeScript execution for Node.js development

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings
- **embla-carousel-react**: Carousel/slider component
- **cmdk**: Command menu component for search interfaces