# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev` or `npm run dev`
- **Build**: `pnpm build` or `npm run build` 
- **Start production**: `pnpm start` or `npm run start`
- **Lint**: `pnpm lint` or `npm run lint`
- **Package manager**: This project uses `pnpm` (pnpm-lock.yaml present)

## Project Architecture

This is a **Next.js 15** project with **TypeScript** for AWStudio, a Norwegian web design business website. The architecture follows Next.js App Router conventions:

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom color palette (pink, yellow, turquoise)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Icons**: Lucide React
- **Typography**: Inter font
- **Theme**: Light theme with theme provider support

### Directory Structure
```
app/                    # Next.js App Router pages
  ├── globals.css       # Global styles and CSS variables
  ├── layout.tsx        # Root layout with theme provider
  ├── page.tsx          # Homepage
  ├── om-meg/           # About page
  └── tjenester/        # Services page

components/             # React components
  ├── Header.tsx        # Navigation with mobile menu
  ├── Footer.tsx        # Site footer
  ├── theme-provider.tsx # Theme context provider
  └── ui/               # Shadcn/ui components (30+ components)

hooks/                  # Custom React hooks
lib/                    # Utilities (utils.ts with cn function)
public/                 # Static assets (logos, images)
styles/                 # Additional stylesheets
```

### Key Features
- **Responsive design** with mobile-first approach
- **Sticky navigation** with mobile hamburger menu
- **Custom color system**: Pink (#f55fad), Yellow (#ffdd65), Turquoise (#5ce1e6)
- **Gradient backgrounds** and modern visual design
- **Norwegian content** throughout the site
- **Contact CTA** prominently featured across pages

### Component Patterns
- Uses Shadcn/ui design system with consistent styling
- Components follow React best practices with TypeScript
- Responsive layouts using Tailwind CSS grid and flexbox
- Custom color variants defined in tailwind.config.ts
- CSS variables for theme consistency defined in globals.css

### Content & Pages
- **Homepage**: Hero, services showcase, process steps, FAQ
- **Services page** (/tjenester): Detailed service offerings  
- **About page** (/om-meg): Personal information with contact form
- All content is in Norwegian for Norwegian business audience

### Build Configuration
- **TypeScript errors ignored** during build (ignoreBuildErrors: true)
- **ESLint ignored** during build (ignoreDuringBuilds: true)
- **Image optimization disabled** (unoptimized: true)
- **Webpack build worker** and parallel compilation enabled
- **User config override** support via v0-user-next.config

### Styling Notes
- CSS custom properties used for consistent theming
- Tailwind config extends default colors with custom AWStudio palette
- Component-specific styling follows Shadcn/ui patterns
- Responsive breakpoints follow Tailwind defaults