# Promo Card Demo - NextJS

A NextJS application showcasing interactive Promo Cards for radio stations with conditional rendering based on station metadata.

## Features

- **Card**: Vibrant, gradient design for stations with color values
- **Responsive Design**: Cards are hidden on mobile devices (desktop-only display)
- **Interactive Station Selection**: Switch between different stations to see various card types
- **URL Parameter Support**: Change station via URL parameter `?id=station-1`
- **TypeScript**: Full type safety with interfaces and proper typing
- **Tailwind CSS**: Modern, responsive styling with hover effects

### Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page with station selector
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── PromoCard/
│       ├── index.tsx     # Main PromoCard component
│       ├── Card.tsx      #  Card variant
├── data/
│   └── stations.json     # Station metadata
├── types/
│   └── station.ts        # TypeScript interfaces
└── utils/
    └── stationUtils.ts   # Utility functions
```

## Technical Details

- **Framework**: NextJS 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Responsive**: Mobile-first design (cards hidden on mobile)
- **State Management**: React hooks (useState, useEffect)
- **URL Handling**: Next.js useSearchParams

### Build for Production

```bash
npm run build
npm start
```

## Requirements Fulfilled

✅ **Default and Dynamic Cards**: Conditional rendering based on color presence  
✅ **Desktop Only**: Cards hidden on mobile devices  
✅ **Station Metadata**: Title, color, logo support  
✅ **NextJS Implementation**: Built with NextJS 15 and TypeScript  
✅ **Hardcoded JSON Data**: Station data in JSON format  
✅ **Parameter Support**: Station switching via URL parameters  
✅ **Responsive Design**: Tailwind CSS with proper breakpoints  
✅ **Clean Architecture**: Modular components with TypeScript interfaces
