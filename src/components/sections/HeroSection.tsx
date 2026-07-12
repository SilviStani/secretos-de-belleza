"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG, GALLERY_IMAGES } from "@/lib/constants";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";

const heroImage = GALLERY_IMAGES[0];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="flex flex-col md:flex-row-reverse min-h-screen pt-16 md:pt-20 bg-surface"
    >
      {/* Image — top on mobile, right on desktop */}
      <motion.div
        className="relative h-72 sm:h-96 md:h-auto md:w-1/2 shrink-0"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </motion.div>

      {/* Text — bottom on mobile, left on desktop */}
      <div className="flex-1 flex flex-col justify-center px-6 py-16 md:py-24 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-lg"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            className="text-label text-primary mb-4 md:mb-6"
          >
            Villa Ciudad Parque · Córdoba
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-display-mob md:text-display-lg text-on-surface mb-5 md:mb-8"
          >
            Tu mejor versión,
            <br />
            <span className="italic text-primary">
              a cargo de expertos.
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-on-surface-variant mb-8 md:mb-10"
          >
            Coloración, corte y tratamientos capilares pensados para vos.
            Pedí tu turno y viví la experiencia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 text-label bg-primary text-on-primary rounded hover:bg-primary-hover transition-colors"
            >
              Consulta
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-7 py-3.5 text-label text-on-surface border border-outline-variant rounded hover:bg-surface-container-low transition-colors"
            >
              Ver servicios
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
