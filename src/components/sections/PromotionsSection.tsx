"use client";

import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { PROMOTIONS } from "@/lib/constants";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import type { PromoItem } from "@/types";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

function ImageCard({ item }: { item: PromoItem }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="relative overflow-hidden rounded-md aspect-[3/2] md:aspect-auto"
    >
      {item.image && (
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-on-surface/30 to-transparent"
        aria-hidden="true"
      />
      {item.badge && (
        <div className="absolute top-5 left-5">
          <span className="text-label bg-primary text-on-primary px-3 py-1.5 rounded-full">
            {item.badge}
          </span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h2 className="font-serif text-headline-sm md:text-headline-md text-surface-container-lowest mb-2">
          {item.title}
        </h2>
        <p className="text-body-md text-surface-container-lowest/75">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

function TextCard({ item }: { item: PromoItem }) {
  const Icon = item.iconName
    ? (LucideIcons[item.iconName as keyof typeof LucideIcons] as IconComponent)
    : null;

  return (
    <motion.article
      variants={fadeInUp}
      className="bg-primary-container rounded-md p-7 md:p-8 flex flex-col"
    >
      {Icon && <Icon size={32} className="text-on-primary-container mb-6" />}
      <h2 className="font-serif text-headline-sm md:text-headline-md text-on-primary-container mb-3">
        {item.title}
      </h2>
      <p className="text-body-md text-on-primary-container/80 mb-8 grow">
        {item.description}
      </p>
      {item.cta && (
        <a
          href={item.cta.href}
          className="self-start inline-flex items-center px-6 py-3 text-label bg-primary text-on-primary rounded hover:bg-primary-hover transition-colors"
        >
          {item.cta.label}
        </a>
      )}
    </motion.article>
  );
}

export default function PromotionsSection() {
  const imageCard = PROMOTIONS.find((p) => p.variant === "image");
  const textCard = PROMOTIONS.find((p) => p.variant === "text");

  return (
    <section
      id="promociones"
      aria-label="Promociones"
      className="py-section-mobile md:py-section-desktop bg-surface"
    >
      <div className="container-page">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-6"
        >
          {imageCard && <ImageCard item={imageCard} />}
          {textCard && <TextCard item={textCard} />}
        </motion.div>
      </div>
    </section>
  );
}
