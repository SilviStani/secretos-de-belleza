"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLightbox } from "@/hooks/useLightbox";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { GALLERY_IMAGES } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  lightboxContent,
  VIEWPORT_ONCE,
} from "@/lib/animations";

export default function GallerySection() {
  const { isOpen, currentIndex, open, close, next, prev } = useLightbox();
  const lightboxRef = useRef<HTMLDivElement>(null);

  useFocusTrap(lightboxRef, isOpen);

  // Keyboard navigation: Escape · ArrowLeft · ArrowRight
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next(GALLERY_IMAGES.length);
      if (e.key === "ArrowLeft") prev(GALLERY_IMAGES.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close, next, prev]);

  return (
    <section
      id="gallery"
      aria-label="Galería"
      className="py-section-mobile md:py-section-desktop bg-surface"
    >
      <div className="container-page">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-12 md:mb-16"
        >
          <motion.p variants={fadeInUp} className="text-label text-primary mb-3">
            Galería
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-headline-md md:text-display-mob text-on-surface"
          >
            Nuestro trabajo
          </motion.h2>
        </motion.div>

        {/* Image grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={image.id}
              variants={fadeInUp}
              onClick={() => open(index)}
              className="group relative aspect-square overflow-hidden rounded-md"
              aria-label={`Ampliar: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/25 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-surface-container-lowest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50"
          >
            {/* Clickable backdrop */}
            <div
              className="absolute inset-0 bg-on-surface/90 cursor-pointer"
              onClick={close}
              aria-hidden="true"
            />

            {/* Dialog panel */}
            <div className="relative z-10 flex items-center justify-center min-h-full p-4 md:p-12">
              <motion.div
                ref={lightboxRef}
                role="dialog"
                aria-modal="true"
                aria-label="Galería de imágenes"
                variants={lightboxContent}
                initial="hidden"
                animate="visible"
                className="w-full max-w-2xl"
              >
                {/* Close */}
                <div className="flex justify-end mb-3">
                  <button
                    onClick={close}
                    className="p-1 text-surface-container-lowest hover:text-inverse-primary transition-colors"
                    aria-label="Cerrar galería"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-md">
                  <Image
                    key={currentIndex}
                    src={GALLERY_IMAGES[currentIndex].src}
                    alt={GALLERY_IMAGES[currentIndex].alt}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 2rem), 672px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Navigation row */}
                <div className="flex items-center justify-between mt-4 px-1">
                  <button
                    onClick={() => prev(GALLERY_IMAGES.length)}
                    className="flex items-center gap-1.5 text-label text-surface-container-lowest hover:text-inverse-primary transition-colors"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={18} />
                    Anterior
                  </button>
                  <span className="text-label text-surface-dim">
                    {currentIndex + 1} / {GALLERY_IMAGES.length}
                  </span>
                  <button
                    onClick={() => next(GALLERY_IMAGES.length)}
                    className="flex items-center gap-1.5 text-label text-surface-container-lowest hover:text-inverse-primary transition-colors"
                    aria-label="Imagen siguiente"
                  >
                    Siguiente
                    <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
