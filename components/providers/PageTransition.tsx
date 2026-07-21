"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDisplayChildren(children);
      window.scrollTo(0, 0);
    }, 400);
    return () => window.clearTimeout(timer);
  }, [pathname, children]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="page-transition-overlay"
          initial="initial"
          animate="animate"
          aria-hidden
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { scaleY: 0 },
                animate: {
                  scaleY: [0, 1, 1, 0],
                  transition: {
                    duration: 1.05,
                    times: [0, 0.38, 0.55, 1],
                    delay: index * 0.05,
                    ease: [0.76, 0, 0.24, 1],
                  },
                },
              }}
              style={{ transformOrigin: "bottom" }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] },
        }}
      >
        {displayChildren}
      </motion.div>
    </>
  );
}
