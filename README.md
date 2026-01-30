# Dynamic Landing Page

A modern, responsive landing page built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- Modern React 18 with TypeScript
- Vite for fast development and optimized builds
- Tailwind CSS for utility-first styling
- Radix UI components for accessible UI primitives
- Framer Motion for smooth animations
- ESLint for code quality
- Responsive design with mobile-first approach

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.18
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint 9 with TypeScript support

## Project Structure

```
.
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── components/      # React components
│   │   ├── ui/          # Reusable UI components (Radix UI based)
│   │   └── ...          # Feature components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and helpers
│   │   └── utils.ts     # cn() utility for className merging
│   ├── services/        # API services and external integrations
│   ├── styles/          # Global styles and CSS configuration
│   │   └── globals.css  # Global CSS variables
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Root application component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Tailwind directives and base styles
│   └── vite-env.d.ts    # Vite type declarations
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript config for Node
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Building for Production

Build the application:
```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

Fix linting issues automatically:
```bash
npm run lint:fix
```

## Key Configuration Files

### Vite Configuration (`vite.config.ts`)
- React SWC plugin for fast refresh
- Path alias `@` pointing to `./src`
- Production build optimizations

### TypeScript Configuration (`tsconfig.json`)
- Strict mode enabled for type safety
- Path aliases configured (`@/*` → `./src/*`)
- Modern ES2020 target
- React JSX transformation

### Tailwind Configuration (`tailwind.config.js`)
- Custom color palette with CSS variables
- Dark mode support
- Extended theme with custom colors and border radius
- Content paths for all source files

### ESLint Configuration (`eslint.config.js`)
- TypeScript ESLint parser and plugin
- React Hooks rules
- React Refresh plugin for fast refresh compatibility

## Styling Approach

This project uses Tailwind CSS with a utility-first approach:

1. **Custom CSS Variables**: Defined in `src/index.css` for theme colors
2. **Utility Classes**: Tailwind utilities for most styling
3. **Component Composition**: Radix UI primitives composed with Tailwind
4. **cn() Helper**: In `src/lib/utils.ts` for conditional className merging

## Component Library

The project includes pre-built UI components in `src/components/ui/`:

- Accordion
- Alert Dialog
- Avatar
- Button
- Calendar
- Card
- Checkbox
- Dialog
- Dropdown Menu
- Form
- Input
- Label
- Navigation Menu
- Popover
- Progress
- Radio Group
- Scroll Area
- Select
- Separator
- Sheet
- Slider
- Switch
- Tabs
- Toast/Sonner
- Tooltip
- And more...

All components are built on Radix UI primitives for accessibility and customized with Tailwind CSS.

## Migration Notes

This project has been migrated to a modern Vite + React + Tailwind CSS setup with the following improvements:

### Changes Made

1. **Build System**: Migrated to Vite 6 with React SWC plugin
2. **TypeScript**: Added proper TypeScript configuration with strict mode
3. **Tailwind CSS**: Set up Tailwind CSS v3 with PostCSS and Autoprefixer
4. **Dependencies**: Updated all dependencies to latest stable versions
5. **Project Structure**: Organized code into proper folders (lib/, hooks/, services/, types/)
6. **Configuration**: Added ESLint, PostCSS, and proper TypeScript configs
7. **Import Fixes**:
   - Removed Figma-generated version suffixes from imports
   - Fixed asset imports to use proper paths
   - Changed `motion/react` to `framer-motion`
8. **Utilities**: Created `cn()` utility in `src/lib/utils.ts`
9. **Type Safety**: Added Vite environment types and image module declarations

### Breaking Changes

- Import paths now use `@/` alias instead of relative paths
- `motion/react` changed to `framer-motion`
- Figma asset imports changed to normal asset imports
- Build output directory changed from `build` to `dist`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ support required

## License

Private project

## Contributing

This is a private project. Please contact the project owner for contribution guidelines.
