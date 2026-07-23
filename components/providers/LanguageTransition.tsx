"use client";

import { AnimatePresence, motion } from "framer-motion";

type LanguageTransitionProps = {
  active: boolean;
  label: string;
  isFa: boolean;
};

export function LanguageTransition({
  active,
  label,
  isFa,
}: LanguageTransitionProps) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="lang-transition"
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          exit={{ visibility: "hidden" }}
          aria-hidden
        >
          <div className="lang-transition__panels">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                className="lang-transition__panel"
                initial={{ y: "100%" }}
                animate={{ y: ["100%", "0%", "0%", "-101%"] }}
                transition={{
                  duration: 1.35,
                  times: [0, 0.32, 0.55, 1],
                  delay: index * 0.045,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
          </div>

          <div className="lang-transition__center">
            <motion.p
              className={`lang-transition__eyebrow ${isFa ? "lang-transition__eyebrow--fa" : ""}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: [0, 1, 1, 0], y: [12, 0, 0, -8] }}
              transition={{
                duration: 1.1,
                times: [0, 0.25, 0.7, 1],
                delay: 0.28,
              }}
            >
              {isFa ? "زبان" : "Language"}
            </motion.p>
            <motion.h2
              className={`lang-transition__title ${isFa ? "lang-transition__title--fa" : "font-display"}`}
              dir={isFa ? "rtl" : "ltr"}
              lang={isFa ? "fa" : "en"}
              initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [40, 0, 0, -20],
                clipPath: [
                  "inset(0 0 100% 0)",
                  "inset(0 0 0% 0)",
                  "inset(0 0 0% 0)",
                  "inset(100% 0 0% 0)",
                ],
              }}
              transition={{
                duration: 1.15,
                times: [0, 0.3, 0.68, 1],
                delay: 0.32,
              }}
            >
              {label}
            </motion.h2>
            <motion.div
              className="lang-transition__line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{
                duration: 1.05,
                times: [0, 0.35, 0.7, 1],
                delay: 0.4,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
