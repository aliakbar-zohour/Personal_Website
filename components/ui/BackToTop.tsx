"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLenis } from "@/components/providers/SmoothScroll";
import { useLanguage } from "@/components/providers/LanguageProvider";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const appearSpring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 16,
  mass: 0.85,
};

const exitTransition = {
  type: "spring" as const,
  stiffness: 320,
  damping: 28,
  mass: 0.7,
};

export function BackToTop() {
  const { lenis } = useLenis();
  const { dict } = useLanguage();
  const lenisRef = useRef(lenis);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 14, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 180, damping: 14, mass: 0.35 });

  // Inner content lags behind for a stretchy magnetic feel
  const innerX = useSpring(rawX, { stiffness: 120, damping: 12, mass: 0.45 });
  const innerY = useSpring(rawY, { stiffness: 120, damping: 12, mass: 0.45 });
  const contentX = useTransform(innerX, (v) => v * 0.55);
  const contentY = useTransform(innerY, (v) => v * 0.55);
  const iconX = useTransform(innerX, (v) => v * 0.9);
  const iconY = useTransform(innerY, (v) => v * 0.9);

  lenisRef.current = lenis;

  useEffect(() => {
    const update = () => {
      const scrollY = lenisRef.current?.scroll ?? window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setVisible(scrollY > 420);
      setProgress(Math.min(1, Math.max(0, scrollY / max)));
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
    rawX.set(0);
    rawY.set(0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.35 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    rawX.set(offsetX * 0.38);
    rawY.set(offsetY * 0.38);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="back-to-top-slot"
          initial={{ opacity: 0, scale: 0.35, y: 48, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            scale: 0.55,
            y: 28,
            filter: "blur(10px)",
            transition: exitTransition,
          }}
          transition={appearSpring}
        >
          <motion.button
            ref={buttonRef}
            type="button"
            aria-label={dict.common.backToTop}
            data-cursor="none"
            onClick={scrollTop}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ x, y }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="back-to-top"
          >
            <span className="back-to-top__glow" aria-hidden />

            <svg
              className="back-to-top__ring"
              viewBox="0 0 52 52"
              aria-hidden
            >
              <circle
                className="back-to-top__track"
                cx="26"
                cy="26"
                r={RADIUS}
              />
              <circle
                className="back-to-top__meter"
                cx="26"
                cy="26"
                r={RADIUS}
                style={{
                  strokeDasharray: CIRCUMFERENCE,
                  strokeDashoffset: dashOffset,
                }}
              />
            </svg>

            <motion.span
              className="back-to-top__core"
              style={{ x: contentX, y: contentY }}
            >
              <motion.span
                className="back-to-top__icon-wrap"
                style={{ x: iconX, y: iconY }}
                aria-hidden
              >
                <svg
                  className="back-to-top__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 19V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.5 10.5L12 5l5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
              <span className="back-to-top__label">{dict.common.top}</span>
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
