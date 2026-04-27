import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element when it scrolls into view. Returns a ref to attach to the
 * element and a boolean indicating whether it has entered the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
          break;
        }
      }
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible };
}

/** Tracks whether the window has scrolled past a threshold (default 12px). */
export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/**
 * Tracks scroll direction. Returns "up" | "down" | "idle".
 * Uses a small delta to avoid jitter, and stays "idle" near the top.
 */
export function useScrollDirection(topOffset = 80, delta = 6) {
  const [direction, setDirection] = useState<"up" | "down" | "idle">("idle");
  const lastY = useRef(0);
  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < topOffset) {
        setDirection("idle");
        lastY.current = y;
        return;
      }
      const diff = y - lastY.current;
      if (Math.abs(diff) < delta) return;
      setDirection(diff > 0 ? "down" : "up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [topOffset, delta]);
  return direction;
}
