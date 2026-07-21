"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-[rgba(8,10,14,0.72)]" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-5 md:py-6">
          <Link
            href="/"
            data-cursor="hover"
            className="font-display text-[1.05rem] font-bold tracking-[0.08em] uppercase"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor="hover"
                  className={`relative text-sm tracking-[0.14em] uppercase transition-colors ${
                    active ? "text-[var(--accent)]" : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              href="/contact"
              className="inline-flex items-center gap-2 border border-[var(--line)] px-5 py-2.5 text-xs tracking-[0.16em] uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Let&apos;s talk
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            data-cursor="hover"
          >
            <span
              className={`block h-px w-6 bg-[var(--fg)] transition-transform duration-400 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[var(--fg)] transition-transform duration-400 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-[#050608] px-6 pb-12 pt-28 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col gap-2">
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
            <p className="mt-16 text-sm text-[var(--fg-muted)]">{site.location}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
