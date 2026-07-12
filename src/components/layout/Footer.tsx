import Link from "next/link";
import { SITE_CONFIG, FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Pie de página"
      className="bg-inverse-surface border-t border-inverse-on-surface/10"
    >
      <div className="container-page">
        {/* Top grid: brand + link columns */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-12 md:py-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl text-inverse-on-surface tracking-tight block mb-3"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="text-body-sm text-inverse-on-surface/60 mb-1">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-body-sm text-inverse-on-surface/50">
              {SITE_CONFIG.address}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.id}>
              <p className="text-label text-inverse-on-surface/50 mb-4">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) =>
                  link.external ? (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-sm text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body-sm text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-inverse-on-surface/10">
          <p className="text-body-sm text-inverse-on-surface/40">
            © {year} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label text-inverse-on-surface/50 hover:text-inverse-on-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
