"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getRouteTitle } from "@/lib/i18n";
import { useIntro } from "./IntroProvider";
import { useLanguage } from "./LanguageProvider";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { ready } = useIntro();
  const { locale, dict } = useLanguage();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [title, setTitle] = useState(getRouteTitle(pathname, locale));
  const [active, setActive] = useState(false);
  const isFirst = useRef(true);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      setDisplayChildren(children);
      setTitle(getRouteTitle(pathname, locale));
      prevPath.current = pathname;
      return;
    }

    // Language swaps are handled by LanguageTransition — skip route overlay
    if (prevPath.current === pathname) {
      setDisplayChildren(children);
      setTitle(getRouteTitle(pathname, locale));
      return;
    }

    prevPath.current = pathname;
    setTitle(getRouteTitle(pathname, locale));
    setActive(true);

    const swap = window.setTimeout(() => {
      setDisplayChildren(children);
      window.scrollTo(0, 0);
    }, 520);

    const end = window.setTimeout(() => {
      setActive(false);
    }, 1400);

    return () => {
      window.clearTimeout(swap);
      window.clearTimeout(end);
    };
  }, [pathname, children, locale]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            className="page-transition"
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            exit={{ visibility: "hidden" }}
            aria-hidden
          >
            <div className="page-transition__panels">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="page-transition__panel"
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

            <div className="page-transition__center">
              <motion.p
                className="page-transition__eyebrow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: [0, 1, 1, 0], y: [12, 0, 0, -8] }}
                transition={{ duration: 1.1, times: [0, 0.25, 0.7, 1], delay: 0.28 }}
              >
                {dict.site.name}
              </motion.p>
              <motion.h2
                className="page-transition__title font-display"
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
                transition={{ duration: 1.15, times: [0, 0.3, 0.68, 1], delay: 0.32 }}
              >
                {title}
              </motion.h2>
              <motion.div
                className="page-transition__line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{ duration: 1.05, times: [0, 0.35, 0.7, 1], delay: 0.4 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={`content-${pathname}-${locale}`}
        initial={false}
        animate={
          ready
            ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.85,
                  delay: active ? 0.55 : 0,
                  ease: [0.16, 1, 0.3, 1],
                },
              }
            : { opacity: 0, y: 20, filter: "blur(8px)" }
        }
      >
        {displayChildren}
      </motion.div>
    </>
  );
}
