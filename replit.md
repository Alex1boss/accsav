# Overview

The Innovisionary World is a futuristic coming-soon website for an educational platform targeting ages 13-25. The application is designed as a single-page landing site with a modern tech aesthetic inspired by companies like SpaceX, Tesla, and Apple. It features a waitlist signup system, animated particle backgrounds, and a premium anticipation-building experience. The platform positions itself as "not a school, not a university, but a movement" focused on real-world skills and innovation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based architecture with TypeScript:
- **React 18** with functional components and hooks
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query** for state management and API interactions
- **Tailwind CSS** with a custom design system for styling
- **Shadcn/ui** component library for consistent UI components

## Component Structure
The frontend follows a modular component architecture:
- **Page Components**: Single `ComingSoonPage` as the main landing page
- **Feature Components**: `HeroSection`, `WaitlistForm`, `AboutSection`, `SocialMediaSection`, `Footer`
- **Visual Effects**: `ParticleBackground` for animated canvas effects
- **UI Components**: Comprehensive shadcn/ui component library

## Styling System
Custom design system built on Tailwind CSS:
- **Dark/Light Theme Support**: CSS custom properties with theme switching
- **Color Palette**: Deep space blue, electric blue, cosmic purple with gradients
- **Typography**: Montserrat for headers, Poppins for body text
- **Animations**: Hover effects, glow animations, and particle systems

## Backend Architecture
Express.js-based server with modular routing:
- **Express.js** server with TypeScript
- **Modular Route System**: Centralized route registration in `registerRoutes`
- **Storage Interface**: Abstract storage layer with database operations
- **Development Integration**: Vite middleware for hot reloading in development

## Data Layer
PostgreSQL database with Drizzle ORM:
- **Drizzle ORM** for type-safe database operations
- **Neon Database** as the PostgreSQL provider
- **Schema Definition**: Shared schema between client and server
- **User Management**: Basic user table structure with UUID primary keys

## State Management
Client-side state handled through multiple approaches:
- **React Query**: Server state management and caching
- **Local Storage**: Theme preferences and waitlist data (for demo)
- **React Hooks**: Component-level state management
- **Toast System**: User feedback and notifications

## Development Tools
Comprehensive development environment:
- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code quality and formatting
- **Vite Plugins**: Development enhancements including error overlays
- **Path Aliases**: Clean imports with @ prefixes

# External Dependencies

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Type-safe styling variants

## Development and Build Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety and developer experience
- **PostCSS**: CSS processing with Tailwind integration
- **ESBuild**: Fast JavaScript bundling for production

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database platform
- **Drizzle ORM**: Type-safe SQL ORM with schema management
- **Drizzle Kit**: Database migration and schema management tools

## Server and API
- **Express.js**: Web server framework with middleware support
- **Serverless HTTP**: Netlify Functions compatibility layer
- **WebSocket Support**: Real-time communication capabilities

## Fonts and Assets
- **Google Fonts**: Montserrat and Poppins font families
- **Custom Logo**: Integrated brand assets with proper optimization

## Social Media Integration
- **Platform Links**: LinkedIn, Twitter, Instagram, YouTube integration
- **External Link Handling**: Secure external navigation with proper attributes