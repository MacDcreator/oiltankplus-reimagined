import { useEffect, useRef, useState } from "react";

/**
 * Lightweight parallax — translateY a child element based on element progress
 * through the viewport. Strength is in px (default 40).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 40) {
  const ref = useRef<T | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: -1 (just entered top) → 1 (just leaving bottom)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      setY(Math.max(-1, Math.min(1, progress)) * strength);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return { ref, y } as const;
}
