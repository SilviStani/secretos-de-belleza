import type {
  NavLinkItem,
  ServiceItem,
  PromoItem,
  GalleryImage,
  FooterColumn,
  SocialLink,
  SiteConfig,
} from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const SITE_CONFIG: SiteConfig = {
  name: "Secretos de Belleza",
  tagline: "Coloración · Corte · Tratamientos",
  whatsapp:
    "https://wa.me/5493546540992?text=Hola!%20Quiero%20consultar%20sobre%20(completar)",
  whatsappDisplay: "3546 54-0992",
  address: "Villa Ciudad Parque, Córdoba, Argentina",
  instagram: "https://www.instagram.com/secretos_debelleza2/",
  // pinterest: not ready yet
};

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLinkItem[] = [
  { label: "Servicios", href: "#servicios" },
  // { label: "Story", href: "#story" }, // future section — needs real content
  { label: "Galería", href: "#gallery" },
  // { label: "Artistas", href: "#artists" }, // future section
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// iconName maps to a Lucide React component name.
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICES: ServiceItem[] = [
  {
    id: "corte-unisex",
    iconName: "Scissors",
    title: "Corte Unisex",
    description:
      "Arquitectura capilar adaptada a tus facciones y estilo de vida.",
    priceFrom: 14000,
    currency: "ARS",
  },
  {
    id: "coloracion-premium",
    iconName: "Palette",
    title: "Coloración Premium",
    description:
      "Color global desde $35.000.- Balayage desde $50.000.-",
    priceFrom: 35000,
    currency: "ARS",
  },
  {
    id: "tratamientos",
    iconName: "Leaf",
    title: "Tratamientos",
    description:
      "Rituales de cuidado intensivo para la salud del cuero cabelludo.",
    priceFrom: 30000,
    currency: "ARS",
  },
  {
    id: "styling",
    iconName: "Paintbrush",
    title: "Styling",
    description:
      "Peinados para eventos o simplemente para un día especial.",
    priceFrom: 45000,
    currency: "ARS",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PROMOTIONS
// Two cards: one image-overlay (wide), one text-only (narrow).
// ─────────────────────────────────────────────────────────────────────────────
export const PROMOTIONS: PromoItem[] = [
  {
    id: "apertura",
    variant: "image",
    badge: "Próximamente",
    title: "¡Se viene algo grande!",
    description:
      "Estate atento: cualquier servicio incluirá corte o nutrición sin costo adicional.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNh800AbGz_T7urrzPNhPyfAd0grZG1FWB7NyvlB7nnobIkTy6K6QE2u4DfoZbgX6m5mTJ1d7wyUObLNJ_EJ_g04dOtqhBNu0QOgpRdyoew_4tO1jpa497AllKnu8mwH-kA6MnANoie3KGomocbKe7edpqMvDYSeAWdM9c3ejWerL6AEOGcajfX7qh8bCfjAeWhFAdV_YEQSBDW0fcOf2-kPSZgBwvf_JoU2FgbZAlwIBdhrXm9OthMg",
      alt: "Herramientas profesionales de peluquería sobre superficie oscura",
    },
  },
  {
    id: "hidratacion",
    variant: "text",
    title: "Tratamientos de Hidratación",
    description:
      "Recupera el brillo y la vitalidad de tu cabello con fórmulas botánicas premium.",
    iconName: "Droplets",
    cta: {
      label: "Ver tratamientos",
      href: "#servicios",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY
// Alt text is descriptive Spanish — meets WCAG 1.1.1.
// Dimensions match the source images (square aspect ratio).
// ─────────────────────────────────────────────────────────────────────────────
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gallery-01",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB49QxFYy-Kt-YQNUXuQnk-TUg6Z3YXNguERUEHx_L5R5ASJVQ4Tc1l--wqLxANlgzsUIcc8Ah_cqpow1H8ZzC6Nh0eOPn9LiOlChPGLgQpmeOJhJliJrO0wJrH5NFeyR9vI5JUlAPsYiCdUS6Ec3ayKDVygTEl7ZRmYtzmpZxqdEliqwM3j3SjT35iD3eF4zEo45PxPwub0J5cTm-zF-4HTGHcPCAXlPKwMP6-JSAvyEEsfZweAZ5HA",
    alt: "Corte de cabello minimalista y elegante — estilo natural con textura suave",
    width: 800,
    height: 800,
  },
  {
    id: "gallery-02",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2LfYPQpOo3DmAMh1AH-p22ufVK6nf4UqGFp3qmB-NRhKsTHLmrgCI6D8MlsBazagU3MBUeZEVUy4PUMBvfDYA1xXtKHroG9yWJ_i2M6ybdDc1gkYPOiDhekEUWA4DbauhZlYgsq2B4JYGE7HC0tiZLOhUA-MuooE2qxpLFK3MYw2_o3JTEStSYfHk4FDhWnUGLrim5SP1iWsKcebrotUljIUXFaZ5YKnmnRO_APLwnHTT-qjFpFQijA",
    alt: "Coloración premium con técnica balayage — resultado natural y luminoso",
    width: 800,
    height: 800,
  },
  {
    id: "gallery-03",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByef0nkGLe_4t38x5PFRrpU6MHOMD82P0N1jBr66rMkYT5X7yVtXS0iq3dXJ2WFGA7uiyOXgybPiIvi8136K-8BgUTzN8kZ-_BzYyPhaHlJ387HQ6bfGG6bQNmSjTdiGNIclX7V6qHyb_bdzlG50JSWAdJhJlUKEGnurhT4zCYksktWIBUpBmG8VaLalMZsRXZGzWhCTcakI6z3Yb8jlNQKwJQ7_e2THr7WDv6H2P2vlgBBXW02guuKg",
    alt: "Styling avant-garde minimalista — textura y movimiento natural del cabello",
    width: 800,
    height: 800,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "contacto",
    title: "Contacto",
    links: [
      {
        label: "WhatsApp: 3546 54-0992",
        href: "https://wa.me/5493546540992?text=Hola!%20Quiero%20consultar%20sobre%20(completar)",
        external: true,
      },
      {
        label: "@secretos_debelleza2",
        href: "https://www.instagram.com/secretos_debelleza2/",
        external: true,
      },
    ],
  },
  {
    id: "salon",
    title: "Salón",
    links: [
      { label: "Servicios", href: "#servicios" },
      // { label: "Artistas", href: "#artists" }, // future section
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/secretos_debelleza2/" },
  // { label: "Pinterest", href: "..." }, // not ready yet
];
