"use client";

import { motion, useScroll } from "motion/react";
import { useCallback, useSyncExternalStore } from "react";

export function PageProgress() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="page-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function usePrefersReducedMotion() {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    media.addEventListener("change", onStoreChange);
    return () => media.removeEventListener("change", onStoreChange);
  }, []);
  const getSnapshot = useCallback(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
