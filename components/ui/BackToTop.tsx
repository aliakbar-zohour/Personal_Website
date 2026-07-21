"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/components/providers/SmoothScroll";

export function BackToTop() {
  const { lenis } = useLenis();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = lenis?.scroll ?? window.scrollY;
      setVisible(y > 480);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    const unsubscribe = lenis?.on("scroll", update);

    return () => {
      window.removeEventListener("scroll", update);
      unsubscribe?.();
    };
  }, [lenis]);

  const scrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.25 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          data-cursor="hover"
          data-cursor-label="Top"
          onClick={scrollTop}
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          className="back-to-top"
        >
          <ArrowUp size={18} strokeWidth={1.75} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
