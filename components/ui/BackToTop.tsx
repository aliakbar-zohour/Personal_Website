"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@/components/providers/SmoothScroll";

export function BackToTop() {
  const { lenis } = useLenis();
  const lenisRef = useRef(lenis);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  lenisRef.current = lenis;

  useEffect(() => {
    const update = () => {
      const y = lenisRef.current?.scroll ?? window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setVisible(y > 420);
      setProgress(Math.min(1, Math.max(0, y / max)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setVisible(lenis.scroll > 420);
      setProgress(Math.min(1, Math.max(0, lenis.scroll / max)));
    };

    const unsubscribe = lenis.on("scroll", update);
    return () => {
      unsubscribe?.();
    };
  }, [lenis]);

  const scrollTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.35 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 21;
  const dashOffset = circumference * (1 - progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          data-cursor="hover"
          data-cursor-label="Top"
          onClick={scrollTop}
          initial={{ opacity: 0, x: -24, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -16, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="back-to-top"
        >
          <span className="back-to-top__ring" aria-hidden>
            <svg viewBox="0 0 48 48">
              <circle className="back-to-top__track" cx="24" cy="24" r="21" />
              <circle
                className="back-to-top__progress"
                cx="24"
                cy="24"
                r="21"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: dashOffset,
                }}
              />
            </svg>
          </span>

          <span className="back-to-top__core">
            <span className="back-to-top__arrow" aria-hidden>
              <span />
            </span>
            <span className="back-to-top__label">Top</span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
