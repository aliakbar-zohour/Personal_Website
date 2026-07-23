"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { themes, type ThemeId } from "@/lib/themes";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { dict } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    return () => window.removeEventListener("mousedown", onPointer);
  }, []);

  const current = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        data-cursor="hover"
        data-cursor-label={dict.common.theme}
        aria-label={dict.common.changeTheme}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 border border-[var(--line)] px-3 py-2 text-[10px] tracking-[0.16em] uppercase transition-colors hover:border-[var(--accent)]"
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: current.swatch }}
        />
        {current.label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute end-0 top-[calc(100%+0.5rem)] z-[70] min-w-[148px] border border-[var(--line)] bg-[var(--bg-elevated)] p-2 shadow-2xl"
          >
            {themes.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  data-cursor="hover"
                  onClick={() => {
                    setTheme(item.id as ThemeId);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-start text-xs tracking-[0.12em] uppercase transition-colors ${
                    theme === item.id
                      ? "text-[var(--accent)]"
                      : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: item.swatch }}
                  />
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
