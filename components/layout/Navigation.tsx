"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { themes, type ThemeId } from "@/lib/themes";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="container nav-bar">
          <Link
            href="/"
            data-cursor="hover"
            className="nav-brand font-display"
          >
            {site.name}
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor="hover"
                  className={`nav-link ${active ? "nav-link--active" : ""}`}
                >
                  {link.label}
                  {active && (
                    <motion.span layoutId="nav-dot" className="nav-dot" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="nav-actions">
            <ThemeSwitcher />
            <MagneticButton
              href="/contact"
              data-cursor-label="Talk"
              className="nav-cta"
            >
              Let&apos;s talk
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            data-cursor="hover"
          >
            <span className={open ? "is-open" : undefined} />
            <span className={open ? "is-open" : undefined} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="nav-mobile-links">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-5xl font-bold tracking-tight"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="nav-mobile-themes">
              {themes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTheme(item.id as ThemeId)}
                  className={`nav-theme-chip ${
                    theme === item.id ? "nav-theme-chip--active" : ""
                  }`}
                >
                  <span style={{ background: item.swatch }} />
                  {item.label}
                </button>
              ))}
            </div>

            <p className="mt-10 text-sm text-[var(--fg-muted)]">{site.location}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
