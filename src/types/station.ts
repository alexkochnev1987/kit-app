// Station data interface for Promo Card component
export interface Station {
  id: number;
  title: string;
  color?: string | null; // Optional - if present, shows Dynamic card
  logo: string;
  description?: string;
}

// Props for PromoCard component
export interface PromoCardProps {
  station: Station;
  className?: string;
}

// Props for individual card variants
export interface DefaultCardProps {
  station: Station;
  className?: string;
}

export interface DynamicCardProps {
  station: Station;
  className?: string;
}
