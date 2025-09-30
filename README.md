# Promo Card Demo - NextJS

A NextJS application showcasing interactive Promo Cards for radio stations with conditional rendering based on station metadata.

## Features

- **Two Card Types:**

  - **Default Card**: Clean, minimal design for stations without color values
  - **Dynamic Card**: Vibrant, gradient design for stations with color values

- **Responsive Design**: Cards are hidden on mobile devices (desktop-only display)
- **Interactive Station Selection**: Switch between different stations to see various card types
- **URL Parameter Support**: Change station via URL parameter `?id=station-1`
- **TypeScript**: Full type safety with interfaces and proper typing
- **Tailwind CSS**: Modern, responsive styling with hover effects

## Station Data

The application includes 5 sample stations with different configurations:

- **Station 1** (Alpha): Dynamic card with blue color
- **Station 2** (Beta): Default card (no color)
- **Station 3** (Gamma): Dynamic card with green color
- **Station 4** (Delta): Default card (no color)
- **Station 5** (Epsilon): Dynamic card with purple color

## Usage

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

### URL Parameters

You can specify a station directly via URL:

- `http://localhost:3000?id=station-1` - Shows Station Alpha (Dynamic)
- `http://localhost:3000?id=station-2` - Shows Station Beta (Default)
- `http://localhost:3000?id=station-3` - Shows Station Gamma (Dynamic)

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
│       ├── DefaultCard.tsx # Default card variant
│       └── DynamicCard.tsx # Dynamic card variant
├── data/
│   └── stations.json     # Station metadata
├── types/
│   └── station.ts        # TypeScript interfaces
└── utils/
    └── stationUtils.ts   # Utility functions
```

## Key Components

### PromoCard

Main component that conditionally renders Default or Dynamic cards based on station color presence.

### DefaultCard

Clean, minimal design with subtle styling for stations without color values.

### DynamicCard

Vibrant design with gradient backgrounds and enhanced styling for stations with color values.

## Technical Details

- **Framework**: NextJS 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Responsive**: Mobile-first design (cards hidden on mobile)
- **State Management**: React hooks (useState, useEffect)
- **URL Handling**: Next.js useSearchParams

## Deployment

The application is ready for deployment on platforms like:

- Vercel (recommended for NextJS)
- Netlify
- Render
- Any Node.js hosting platform

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
