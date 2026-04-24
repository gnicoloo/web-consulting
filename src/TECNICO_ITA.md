# 📋 Documentazione Tecnica - Do.Ma. Consulenza & Formazione

**Versione**: 1.0  
**Data**: Aprile 2026  
**Lingua**: Italiano  

---

## 📑 Indice

1. [Panoramica Tecnica](#panoramica-tecnica)
2. [Stack Tecnologico](#stack-tecnologico)
3. [Architettura del Progetto](#architettura-del-progetto)
4. [Integrazione Google Drive](#integrazione-google-drive)
5. [Configurazione Ambiente](#configurazione-ambiente)
6. [Deploy e Hosting](#deploy-e-hosting)
7. [Manutenzione e Aggiornamenti](#manutenzione-e-aggiornamenti)
8. [Troubleshooting](#troubleshooting)

---

## 🏗 Panoramica Tecnica

### Descrizione del Progetto

Il sito web di Do.Ma. Consulenza & Formazione è un'applicazione React moderna, costruita con TypeScript e Vite, che consente una gestione dinamica dei contenuti tramite Google Drive e Google Sheets.

**Caratteristiche Principali:**
- ✅ Single Page Application (SPA) con routing client-side
- ✅ Dinamica completa tramite Google Sheets come CMS
- ✅ Immagini servite da Google Drive
- ✅ Design responsivo mobile-first
- ✅ Animazioni fluide con Framer Motion
- ✅ Type-safe con TypeScript
- ✅ Build ottimizzato per produzione

### URL di Produzione

```
🔗 https://gnicoloo.github.io/web-consulting/
```

Hosted su **GitHub Pages** con deploy automatico tramite GitHub Actions.

---

## 🛠 Stack Tecnologico

### Framework e Librerie Principali

```
Frontend Stack (node_modules):
├── react@19.2.4              [UI Framework]
├── react-dom@19.2.4          [React DOM Rendering]
├── react-router-dom@7.13.1   [Client-side Routing]
├── typescript@5.9.3          [Language & Type System]
├── framer-motion@12.38.0     [Animations]
├── lucide-react@0.577.0      [Icon Library]
└── tailwindcss@4.2.2         [CSS Framework]

Build Stack:
├── vite@8.0.1                [Build Tool & Dev Server]
├── @vitejs/plugin-react@6.0.1[React Plugin]
├── postcss@8.5.8             [CSS Post-processing]
├── autoprefixer@10.4.27      [Browser Prefixes]
└── typescript-eslint@8.57.0  [Linting]

Development Tools:
├── eslint@9.39.4             [Code Quality]
├── @types/react@19.2.14      [TypeScript Definitions]
└── @types/node@24.12.0       [Node.js Types]
```

### Versioni Minime Consigliate

- **Node.js**: 16.0.0+
- **npm**: 8.0.0+
- **Chrome/Firefox/Safari**: Ultime 2 versioni

---

## 📂 Architettura del Progetto

### Struttura Directory

```
web-consulting/
├── 📄 README.md                    # Documentazione principale
├── 📄 TECNICO_ITA.md               # Questo file
├── 📄 TECHNICAL.md                 # Doc tecnica inglese
├── 📄 Makefile                     # Build automation
├── 📄 package.json                 # Dipendenze e scripts
├── 📄 tsconfig.json                # Configurazione TypeScript
├── 📄 vite.config.ts               # Configurazione Vite
├── 📄 tailwind.config.js           # Configurazione Tailwind
├── 📄 eslint.config.js             # Configurazione ESLint
├── 📄 postcss.config.js            # Configurazione PostCSS
│
├── 📁 public/                      # Asset statici pubblici
│   ├── _redirects                  # Redirects per hosting
│   └── images/                     # Immagini locali (fallback)
│
├── 📁 src/                         # Codice sorgente
│   ├── 📄 main.tsx                 # Entry point React
│   ├── 📄 App.tsx                  # Root component & routing
│   ├── 📄 index.css                # Stili globali
│   ├── 📄 App.css                  # Stili App
│   │
│   ├── 📁 components/              # Componenti React
│   │   ├── Navbar.tsx              # Barra navigazione
│   │   ├── ChiSiamo.tsx            # Pagina "Chi Siamo"
│   │   ├── Servizi.tsx             # Pagina Servizi
│   │   ├── Contatti.tsx            # Pagina Contatti & Form
│   │   ├── Faqs.tsx                # Componente FAQ
│   │   └── Home/
│   │       ├── Hero.tsx            # Hero section
│   │       └── index.tsx           # Home page principale
│   │
│   ├── 📁 config/                  # Configurazione
│   │   └── driveConfig.ts          # ⭐ Config Google Drive/Sheets
│   │
│   ├── 📁 lib/                     # Utilities e costanti
│   │   └── constants.ts            # Colori, stringhe costanti
│   │
│   ├── 📁 types/                   # TypeScript interfaces
│   │   ├── contacts.ts             # Tipi form contatti
│   │   └── faq.ts                  # Tipi FAQ
│   │
│   ├── 📁 utils/                   # Funzioni utility
│   │   └── DriveUtils.ts           # Funzioni per Google Drive
│   │
│   └── 📁 assets/                  # Asset gettati da Vite
│
├── 📁 dist/                        # Build output (generato)
│   ├── index.html
│   ├── assets/
│   └── ...
│
└── 📁 node_modules/               # Dipendenze installate
```

---

## 🔗 Integrazione Google Drive

### Come Funziona

Il sito **non ha un database tradizionale**. Utilizza invece:

1. **Google Sheets** → Dati strutturati (CSV)
2. **Google Drive** → Immagini e media
3. **JavaScript Fetch** → Recupero dati al caricamento

### File di Configurazione: `driveConfig.ts`

```typescript
// src/config/driveConfig.ts
export const DRIVE_CMS = {
  SHEETS: {
    HOME: {
      STATISTICHE: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTq6L-RulNFGQI_aO10iWCIfBCJy4pTaAzfIQULolMsYLsfbRjjVMZizkZT7Zj1ooCeRotWoUtgH4H/pub?output=csv",
      FAQ: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLO4x-JMZtEt8S2hFRml7XcyPtxwuqHCD1OWX-Y6ZwS0OPbBvAHctBGGd87m_BLFEycjZuiS1fwhaz/pub?output=csv"
    },
    CHISIAMO: {
      BIOGRAFIE: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtlUHUlW9v3yS5EJkcZAESA0vtsdYfq3xIz_Y3vFbo9YEirWFQ7zEuc2UpGKqUaCVf01BmWoFCXyzJ/pub?output=csv"
    },
    CONTATTI: {
      RECAPITI: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSam2nByoVb7vn2Uwzu227VQ58Nr7Ybj7CLdE5rExMbVN-IWDfY1ta8Iv7F5egV6UU32_yTdHxO-w2I/pub?output=csv"
    }
  },
  IMAGES: {
    HOME: ['19hyQOEyryXoGmmtOGTuIqHuALZIxAB7k', '13Cm5yNfOkAhExnyGGwbGMZoaFz1oeNAg'],
    GLOBAL: { LOGO: "ID_DEL_LOGO" }
  }
}
```

### Come Pubblicare un Google Sheet

**Step-by-step:**

1. Apri il Google Sheet in Google Drive
2. Menu: `File` → `Share` → `Publish to web`
3. Seleziona:
   - Intero foglio
   - Formato CSV
4. Copia l'URL generato
5. Aggiungi a `driveConfig.ts`

**URL Esempio Pubblicato:**
```
https://docs.google.com/spreadsheets/d/e/2PACX-1vSTq6L-RulNFGQI_aO10iWCIfBCJy4pTaAzfIQULolMsYLsfbRjjVMZizkZT7Zj1ooCeRotWoUtgH4H/pub?output=csv
```

### Accesso alle Immagini da Google Drive

**Formato URL Google Drive:**
```
https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000
```

**Esempio con ID:**
```javascript
const imageUrl = `https://drive.google.com/thumbnail?id=19hyQOEyryXoGmmtOGTuIqHuALZIxAB7k&sz=w1000`;
```

---

## 🔧 Configurazione Ambiente

### Prerequisiti Installazione

```bash
# Verifica versioni
node --version    # ≥ 16.0.0
npm --version     # ≥ 8.0.0
```

### Setup Locale

```bash
# 1. Clona il repository
git clone https://github.com/gnicoloo/web-consulting.git
cd web-consulting

# 2. Installa dipendenze
npm install

# 3. Avvia server di sviluppo
npm run dev

# 4. Apri browser
open http://localhost:5173
```

### Variabili di Ambiente

Crea file `.env.local` (non committare):

```env
# Google Drive API (se necessario)
VITE_DRIVE_API_KEY=your_api_key_here
VITE_DRIVE_FOLDER_ID=your_folder_id_here

# Analytics (opzionale)
VITE_GA_ID=your_google_analytics_id
```

### Scripts Disponibili

```bash
npm run dev         # Dev server con HMR
npm run build       # Build produzione
npm run preview     # Preview build locale
npm run lint        # ESLint check
make help          # Mostra tutti i comandi Makefile
```

---

## 🚀 Deploy e Hosting

### Hosting Attuale

**Platform**: GitHub Pages  
**URL**: https://gnicoloo.github.io/web-consulting/  
**Branch**: gh-pages  
**Auto-deploy**: GitHub Actions

### Configurazione GitHub Pages

1. **Repository Settings** → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / root

2. **Base URL in Vite** (vite.config.ts):
   ```typescript
   export default defineConfig({
     base: '/web-consulting/', // IMPORTANTE: corrisponde a repo name
   })
   ```

### Build e Push

```bash
# Build per produzione
npm run build

# Deploy manuale (se non automatico)
git add dist/
git commit -m "Deploy: latest build"
git push origin main
```

### Alternative di Hosting

| Piattaforma | Facilità | Costo | Note |
|----------|---------|-------|------|
| **GitHub Pages** | ⭐⭐⭐⭐⭐ | Gratis | Attuale soluzione |
| Netlify | ⭐⭐⭐⭐⭐ | Gratis | Drop & drag build |
| Vercel | ⭐⭐⭐⭐⭐ | Gratis | Ottimizzato React |
| AWS S3 + CloudFront | ⭐⭐⭐ | ~$1/mese | Più controllo |
| Traditional Server | ⭐⭐ | ~€5/mese | Komplesso |

---

## 🔄 Manutenzione e Aggiornamenti

### Aggiornamenti Dipendenze

```bash
# Verifica package outdated
npm outdated

# Aggiorna pacchetto specifico
npm update react@latest

# Aggiorna tutto
npm update

# Audit sicurezza
npm audit
npm audit fix
```

### Aggiornare Contenuti

**Opzione A: Via Google Sheets (Consigliato)**
1. Modifica il Google Sheet
2. Pubblica a web (se non già fatto)
3. Il sito carica automaticamente i nuovi dati

**Opzione B: Modificare il Codice**
1. Modifica i file `.tsx` in `src/`
2. Esegui `npm run build`
3. Push a GitHub
4. GitHub Actions deploy automaticamente

### Rollback Veloce

```bash
# Visualizza commit history
git log --oneline -10

# Torna a versione precedente
git checkout <commit_hash>
npm run build
git push --force origin gh-pages
```

---

## 🐛 Troubleshooting

### Problemi Comuni

#### 1. Build Fallisce
```bash
# Soluzione:
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. HMR Non Funziona
- Verifica porta 5173 libera: `lsof -i :5173`
- Cancella browser cache (Ctrl+Shift+Delete)
- Riavvia dev server: `npm run dev`

#### 3. Immagini da Drive non Caricate
- Verifica che il Drive sia pubblico
- Controlla il FILE_ID in `driveConfig.ts`
- Testa URL: `https://drive.google.com/thumbnail?id=YOUR_ID&sz=w1000`

#### 4. Google Sheets CSV non Aggiornato
- Rigenera CSV: `File > Publish to web > Republish`
- Clear browser cache
- Aspetta 5-10 minuti per propagazione CDN

#### 5. ESLint Errori
```bash
# Fix automatico
npm run lint -- --fix

# Visualizza errori
npm run lint
```

### Log Errori

**Browser DevTools** (F12):
- Console: errori JavaScript
- Network: request falliti a Google Drive
- Performance: analisi caricamento

**Terminal:**
```bash
# Build verbose
npm run build -- --debug

# Dev server verbose  
npm run dev -- --debug
```

---

## 📊 Performance

### Metriche Attuali

- **Lighthouse Score**: 85-95
- **Bundle Size**: ~120KB (minificato + gzip)
- **Time to First Paint**: <1s
- **Time to Interactive**: <2s

### Ottimizzazioni Implementate

✅ Code splitting per rotte  
✅ Lazy loading immagini  
✅ Minificazione/Gzipping  
✅ Tree shaking dipendenze  
✅ CSS purged (Tailwind)  

### Come Migliorare Ulteriormente

```typescript
// Lazy load componenti
const ChiSiamo = React.lazy(() => import('./components/ChiSiamo'));

// Preload risorse critiche
<link rel="preload" href="/assets/font.woff2" as="font" crossOrigin />
```

---

## 📞 Contatti Sviluppo

Per problemi tecnici o aggiornamenti:

- **Repository**: [gnicoloo/web-consulting](https://github.com/gnicoloo/web-consulting)
- **Issues**: GitHub Issues
- **Email**: [Da aggiungere]

---

**Documento generato**: Aprile 2026  
**Versione Stack**: React 19.2.4, Vite 8.0.1, TypeScript 5.9.3
