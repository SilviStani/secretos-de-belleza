"use client";

import { useState, useEffect } from "react";

/**
 * Returns true when window.scrollY exceeds the given threshold.
 * Used by Header to add shadow/elevation on scroll.
 *
 * @param threshold - scroll distance in pixels before returning true (default: 10)
 */
export function useScrolled(threshold = 10): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const check = () => setIsScrolled(window.scrollY > threshold);

    // Sync with initial scroll position (e.g. page refresh mid-scroll)
    check();

    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);

  return isScrolled;
}
