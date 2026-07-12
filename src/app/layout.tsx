import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://secretosdebelleza.com"),
  title: {
    default: "Secretos de Belleza — Coloración, Corte y Tratamientos en Córdoba",
    template: "%s | Secretos de Belleza",
  },
  description:
    "Salón de peluquería en Villa Ciudad Parque, Córdoba, Argentina. Especialistas en coloración premium, corte de precisión y tratamientos capilares.",
  keywords: [
    "salon de belleza cordoba",
    "peluqueria villa ciudad parque",
    "coloracion balayage cordoba",
    "corte de cabello cordoba",
    "tratamientos capilares",
    "secretos de belleza",
  ],
  authors: [{ name: "Secretos de Belleza" }],
  creator: "Secretos de Belleza",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://secretosdebelleza.com",
    siteName: "Secretos de Belleza",
    title: "Secretos de Belleza — Coloración, Corte y Tratamientos en Córdoba",
    description:
      "Tu mejor versión, a cargo de expertos. Coloración premium, corte y tratamientos capilares en Córdoba.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Secretos de Belleza — Salón de peluquería en Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secretos de Belleza — Coloración, Corte y Tratamientos en Córdoba",
    description:
      "Tu mejor versión, a cargo de expertos. Coloración premium, corte y tratamientos capilares en Córdoba.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://secretosdebelleza.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Secretos de Belleza",
  description:
    "Salón de peluquería en Villa Ciudad Parque, Córdoba, Argentina. Especialistas en coloración premium, corte y tratamientos capilares.",
  url: "https://secretosdebelleza.com",
  priceRange: "$$",
  image: "https://secretosdebelleza.com/images/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Villa Ciudad Parque",
    addressRegion: "Córdoba",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de peluquería",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Corte Unisex" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "ARS",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Coloración Premium" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "ARS",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Tratamientos" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "ARS",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Styling" },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "ARS",
        },
      },
    ],
  },
  sameAs: ["https://www.instagram.com/secretosdebellezaok/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
