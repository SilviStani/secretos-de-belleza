import type { Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// EASING CURVES
// Defined once — referenced by all variants for consistency.
// ─────────────────────────────────────────────────────────────────────────────

/** Natural deceleration — used for entrance animations */
const EASE_OUT_SMOOTH = [0.21, 0.47, 0.32, 0.98] as const;

/** Standard ease-in-out — used for toggles and transitions */
const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// CORE VARIANTS
// Used with motion.div variants prop.
// Reduced-motion is handled globally via globals.css @media rule —
// no JS branching needed in components.
// ─────────────────────────────────────────────────────────────────────────────

/** Fade up from 24px — primary entrance animation for text and cards */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_SMOOTH },
  },
};

/** Opacity fade — for overlays, images, subtle reveals */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Scale + fade — for modals and lightbox */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: EASE_OUT_SMOOTH },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER CONTAINER
// Wrap a list of children with this variant; each child uses fadeInUp.
// ─────────────────────────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE DOWN
// For AnimatePresence-driven toggles (mobile nav, accordions).
// Use as direct props, not a variants object, since height: "auto" requires it.
// ─────────────────────────────────────────────────────────────────────────────
export const slideDown = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: EASE_IN_OUT },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: EASE_IN_OUT },
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX
// Two separate variants: overlay (full-screen backdrop) + content (image panel)
// ─────────────────────────────────────────────────────────────────────────────
export const lightboxOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

export const lightboxContent: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_OUT_SMOOTH },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// VIEWPORT CONFIG
// Shared whileInView viewport options — apply once, trigger once.
// ─────────────────────────────────────────────────────────────────────────────
export const VIEWPORT_ONCE = { once: true, amount: 0.15 } as const;
