"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { slideDown } from "@/lib/animations";

export default function Navbar() {
  const isScrolled = useScrolled(10);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useFocusTrap(menuRef, mobileOpen);

  const close = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
        "bg-surface-container-lowest border-b border-outline-variant/30",
        isScrolled && "shadow-header"
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg md:text-xl text-on-surface tracking-tight"
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-5 py-2.5 text-label bg-primary text-on-primary rounded hover:bg-primary-hover transition-colors"
            >
              Consulta
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 text-on-surface rounded"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            {...slideDown}
            className="md:hidden overflow-hidden bg-surface-container-lowest border-t border-outline-variant/30"
          >
            <nav
              className="container-page py-4 flex flex-col"
              aria-label="Menú móvil"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="text-label py-3 text-on-surface-variant hover:text-on-surface transition-colors border-b border-outline-variant/20 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-4 inline-flex items-center justify-center px-5 py-3 text-label bg-primary text-on-primary rounded hover:bg-primary-hover transition-colors"
              >
                Consulta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
