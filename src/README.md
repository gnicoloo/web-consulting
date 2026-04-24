# Do.Ma. Consulenza & Formazione - Website

A modern, responsive business website for a professional consulting and training company built with cutting-edge web technologies.

## 🎯 Project Overview

This is a full-stack React application showcasing a professional consulting firm's services, team, and contact information. The site features smooth animations, mobile-first design, and SEO-friendly architecture with **dynamic content powered by Google Drive and Google Sheets**.

**Company**: Do.Ma. Consulenza & Formazione  
**Year**: 2025-2026

### 🌐 Live Website
**🔗 [Visit the Live Site](https://gnicoloo.github.io/web-consulting/)**

✨ The website dynamically pulls content from Google Drive and Google Sheets, allowing real-time updates without redeploying.

## 🛠 Tech Stack

### Frontend Framework
- **React** 19.2.4 - UI library with hooks and modern patterns
- **TypeScript** 5.9.3 - Type-safe JavaScript development
- **Vite** 8.0.1 - Lightning-fast build tool with HMR

### Styling & Design
- **Tailwind CSS** 4.2.2 - Utility-first CSS framework
- **PostCSS** 8.5.8 - CSS transformations and optimization
- **Autoprefixer** 10.4.27 - Browser compatibility

### UI & Interactions
- **Framer Motion** 12.38.0 - Production-ready animation library
- **Lucide React** 0.577.0 - Beautiful icon library
- **React Router DOM** 7.13.1 - Client-side routing

### Development & Quality
- **ESLint** 9.39.4 - Code quality and style enforcement
- **TypeScript ESLint** 8.57.0 - Type-aware linting
- **Node** 24.12.0+ - Runtime environment

## 📋 Project Structure

```
web-consulting/
├── src/
│   ├── components/              # React components
│   │   ├── Home/                # Landing page with hero section
│   │   ├── Navbar.tsx           # Navigation bar with mobile support
│   │   ├── ChiSiamo.tsx         # About us page
│   │   ├── Servizi.tsx          # Services page
│   │   └── Contatti.tsx         # Contact form & information
│   ├── config/
│   │   └── driveConfig.ts       # External service configuration
│   ├── lib/
│   │   └── constants.ts         # Global constants and color palette
│   ├── types/
│   │   ├── contacts.ts          # Contact form types
│   │   └── faq.ts               # FAQ types
│   ├── utils/
│   │   └── DriveUtils.ts        # Utility functions
│   ├── App.tsx                  # Main app component with routing
│   └── main.tsx                 # React DOM entry point
├── public/                       # Static assets
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind customization
└── eslint.config.js             # ESLint rules
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (tested with 24.12.0)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint checks
npm run lint
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (default: http://localhost:5173) |
| `npm run build` | Build for production with type checking |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |

## 🎨 Key Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Mode Ready**: Custom color palette in `constants.ts`
- **Smooth Animations**: Framer Motion for professional interactions
- **Type Safety**: Full TypeScript coverage
- **SEO Optimized**: Clean routing and semantic HTML
- **Performance**: Optimized builds with Vite, code splitting
- **Multi-language Ready**: Italian UI with extensible i18n structure
- **Accessibility**: WCAG compliant components

## 🗺 Routing

- `/` - Home page with hero section
- `/servizi` - Services showcase
- `/chi-siamo` - Company information and team
- `/contatti` - Contact form and information

## 🎨 Customization

### Color Palette
Modify colors in [src/lib/constants.ts](src/lib/constants.ts):
```typescript
export const COLORS = {
  primary: '#2563eb',
  secondary: '#64748b',
  dark: '#1e293b',
  // ...
};
```

### Base URL
The site is configured to run at `/web-consulting/`. To change this, update [vite.config.ts](vite.config.ts):
```typescript
base: '/your-path/',
```

## 📈 Performance

- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code removed during build
- **Minification**: Production builds are fully optimized
- **HMR**: Instant updates during development

## 🔒 Quality Assurance

- ESLint configuration enforces code standards
- TypeScript provides compile-time type checking
- React strict mode catches potential issues
- ESLint React plugins optimize component patterns

## 📝 Development Workflow

### Adding a New Page
1. Create component in `src/components/NewPage.tsx`
2. Add route in `App.tsx`
3. Add navigation link in `Navbar.tsx`
4. Style with Tailwind classes

### Adding Animations
Framer Motion is ready to use:
```typescript
import { motion } from 'framer-motion';

<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
  Content
</motion.div>
```

### ESLint & Code Quality
```bash
npm run lint          # Check for issues
npm run lint -- --fix # Auto-fix issues
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output is generated in `dist/` directory, ready to be deployed to any static hosting:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Traditional web servers

### Environment Variables
Create `.env.local` for sensitive data (not tracked by git):
```
VITE_API_KEY=your_key_here
```

## 📚 Dependencies Overview

| Package | Purpose | Version |
|---------|---------|---------|
| react | UI library | ^19.2.4 |
| react-router-dom | Client routing | ^7.13.1 |
| typescript | Type system | ~5.9.3 |
| tailwindcss | Styling | ^4.2.2 |
| framer-motion | Animations | ^12.38.0 |
| lucide-react | Icons | ^0.577.0 |
| vite | Build tool | ^8.0.1 |
| eslint | Code quality | ^9.39.4 |

## 🔗 Google Drive Integration

### Dynamic Content Management
The website uses Google Drive and Google Sheets as a **headless CMS**, enabling real-time content updates:

**Google Sheets** (Data Management):
- `HOME - STATISTICHE` - Statistics and metrics displayed on homepage
- `HOME - FAQ` - FAQ data for home page
- `CHISIAMO - BIOGRAFIE` - Team member biographies
- `CONTATTI - RECAPITI` - Contact information and phone numbers

**Google Drive** (Media Management):
- Team member photos and company images
- Logos and branding assets
- Organized in public shared folders for easy access

### Content Update Workflow
1. Update Google Sheets with new data
2. Publish as CSV via Google Sheets "publish to web" feature
3. Website automatically fetches and displays updated content
4. No build or deployment needed!

**Configuration File**: [src/config/driveConfig.ts](src/config/driveConfig.ts)

### Publishing Google Sheets as CSV
To make a Google Sheet accessible:
1. Open the sheet in Google Drive
2. Click `File > Share > Publish to web`
3. Select "Entire spreadsheet" and CSV format
4. Copy the published URL and add to `driveConfig.ts`

## 📖 Documentation

### Technical Documentation
- **🇮🇹 [Italian Version](TECNICO_ITA.md)** - Documentazione Tecnica Completa
- **🇬🇧 [English Version](TECHNICAL.md)** - Complete Technical Documentation



## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Fails
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear Vite cache: `rm -rf .vite`
3. Type check: `tsc --noEmit`

### Hot Module Replacement (HMR) Not Working
Ensure `vite.config.ts` is properly configured and browser isn't caching.

## 📄 License

© 2025-2026 Do.Ma. Consulenza & Formazione - Tutti i diritti riservati

---

**Last Updated**: April 2026  
**Maintainer**: Development Team
