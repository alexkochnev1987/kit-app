// Station data interface for Promo Card component
export interface Station {
  id: number;
  title: string;
  color?: string | null; // Optional - if present, shows Dynamic card
  logo: string;
  description?: string;
}

// Props for individual card variants
export interface CardProps {
  station: Station;
  className?: string;
}
