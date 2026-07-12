"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      aria-label="Newsletter"
      className="py-section-mobile md:py-section-desktop bg-inverse-surface"
    >
      <div className="container-page">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="max-w-xl mx-auto text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-label text-inverse-primary mb-3"
          >
            Newsletter
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-headline-md md:text-display-mob text-inverse-on-surface mb-4"
          >
            Novedades y tips de belleza
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-body-md text-inverse-on-surface/70 mb-8"
          >
            Seguinos en Instagram para recibir promociones exclusivas, novedades
            del salón y consejos de cuidado capilar.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a
              href="https://www.instagram.com/stories/highlights/17905435971155826/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 text-label bg-primary text-on-primary rounded hover:bg-primary-hover transition-colors"
            >
              Seguir en Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
