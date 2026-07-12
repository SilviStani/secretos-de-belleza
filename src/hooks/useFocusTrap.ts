"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

/**
 * Traps keyboard focus within `containerRef` when `isActive` is true.
 *
 * - Moves focus to the first focusable element on activation
 * - Tab wraps forward from last → first
 * - Shift+Tab wraps backward from first → last
 * - Restores focus to the previously focused element on deactivation
 *
 * Used by: Lightbox, MobileNav
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  isActive: boolean
): void {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;

    const getFocusable = (): HTMLElement[] =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter(
        (el) => !el.closest("[aria-hidden='true']") && el.offsetParent !== null
      );

    // Store the element that had focus before the trap activated
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Focus first focusable element
    const focusable = getFocusable();
    focusable[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      // Re-query each keydown — DOM may have changed
      const current = getFocusable();
      if (current.length === 0) return;

      const first = current[0];
      const last = current[current.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Return focus to the element that triggered the modal/menu
      previouslyFocused?.focus();
    };
  }, [containerRef, isActive]);
}
