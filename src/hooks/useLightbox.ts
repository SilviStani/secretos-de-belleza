"use client";

import { useState, useCallback, useEffect } from "react";

interface UseLightboxReturn {
  isOpen: boolean;
  currentIndex: number;
  open: (index: number) => void;
  close: () => void;
  next: (total: number) => void;
  prev: (total: number) => void;
}

/**
 * Manages gallery lightbox state: open/close, current image index,
 * and body scroll locking.
 *
 * Keyboard navigation (Escape, ArrowLeft, ArrowRight) is handled inside
 * the Lightbox component itself, not here, to keep this hook side-effect free.
 */
export function useLightbox(): UseLightboxReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lock body scroll when lightbox is open — prevents background scroll on iOS
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll"; // prevents layout shift from scrollbar

    return () => {
      const savedScrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, parseInt(savedScrollY || "0", 10) * -1);
    };
  }, [isOpen]);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const next = useCallback((total: number) => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, []);

  const prev = useCallback((total: number) => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, []);

  return { isOpen, currentIndex, open, close, next, prev };
}
