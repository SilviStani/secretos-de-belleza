// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
export interface NavLinkItem {
  label: string;
  href: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────
export interface ServiceItem {
  id: string;
  iconName: string; // Lucide component name e.g. "Scissors"
  title: string;
  description: string;
  priceFrom: number;
  currency: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// PROMOTIONS
// ─────────────────────────────────────────────────────────────────────────────
export type PromoVariant = "image" | "text";

export interface PromoCta {
  label: string;
  href: string;
}

export interface PromoItem {
  id: string;
  variant: PromoVariant;
  badge?: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  cta?: PromoCta;
  iconName?: string; // Lucide component name — used by text variant
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────────────────────────────────────
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export interface SiteConfig {
  name: string;
  tagline: string;
  whatsapp: string;
  whatsappDisplay: string;
  address: string;
  instagram: string;
  pinterest?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ARTISTS (future section)
// ─────────────────────────────────────────────────────────────────────────────
export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: {
    src: string;
    alt: string;
  };
  specialties: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT UTILITIES
// ─────────────────────────────────────────────────────────────────────────────
export interface WithClassName {
  className?: string;
}

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
