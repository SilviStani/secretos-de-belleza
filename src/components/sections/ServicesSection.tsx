"use client";

import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import type { ServiceItem } from "@/types";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

function ServiceCard({ item }: { item: ServiceItem }) {
  const Icon = LucideIcons[
    item.iconName as keyof typeof LucideIcons
  ] as IconComponent;

  const href = `${SITE_CONFIG.whatsapp}${encodeURIComponent(item.title)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      className="group flex flex-col bg-surface-container-lowest rounded-md p-6 border border-outline-variant/20 hover:border-outline-variant/60 hover:shadow-card-hover transition-all duration-200"
    >
      {Icon && <Icon size={28} className="text-primary mb-5 shrink-0" />}

      <h3 className="font-serif text-headline-sm text-on-surface mb-2">
        {item.title}
      </h3>

      <p className="text-body-sm text-on-surface-variant mb-6 grow">
        {item.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
        <span className="text-label text-primary">
          Desde ${item.priceFrom.toLocaleString("es-AR")}
        </span>
        <span className="text-label text-on-surface-variant group-hover:text-primary transition-colors">
          Consultar →
        </span>
      </div>
    </motion.a>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-label="Servicios"
      className="py-section-mobile md:py-section-desktop bg-surface-container-low"
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
            Lo que hacemos
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-headline-md md:text-display-mob text-on-surface"
          >
            Servicios
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} item={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
