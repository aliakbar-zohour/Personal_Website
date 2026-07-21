"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/lib/data";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-meta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.55 },
      )
        .fromTo(
          ".hero-brand-line",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.15, stagger: 0.08 },
          "-=0.35",
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.55",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
          "-=0.45",
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2",
        );

      gsap.to(".hero-visual-ring", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-visual-core", {
        scale: 1.06,
        duration: 4.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-28 md:pb-14 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8%] top-[18%] hidden aspect-square w-[min(48vw,560px)] md:block">
          <div className="hero-visual-ring absolute inset-0 rounded-full border border-[var(--line)]" />
          <div className="hero-visual-ring absolute inset-[12%] rounded-full border border-dashed border-[rgba(214,255,75,0.28)]" />
          <div className="hero-visual-core absolute inset-[28%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(214,255,75,0.35),rgba(90,120,170,0.12)_55%,transparent_70%)]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-[rgba(235,232,225,0.25)] to-transparent" />
        </div>
      </div>

      <div className="container relative z-10">
        <p className="hero-meta mb-6 text-xs tracking-[0.22em] uppercase text-[var(--fg-muted)] opacity-0 md:mb-8">
          {site.role} · {site.location}
        </p>

        <h1 className="font-display font-bold leading-[0.88] tracking-[-0.04em]">
          <span className="reveal-clip block">
            <span className="hero-brand-line block text-[clamp(3.4rem,12vw,9.5rem)]">
              ALIAKBAR
            </span>
          </span>
          <span className="reveal-clip block">
            <span className="hero-brand-line block text-[clamp(3.4rem,12vw,9.5rem)] text-[var(--accent)]">
              ZOHOUR
            </span>
          </span>
        </h1>

        <div className="mt-8 flex max-w-3xl flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p className="hero-sub max-w-md text-lg leading-relaxed text-[var(--fg-muted)] opacity-0 md:text-xl">
            {site.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <MagneticButton
              href="/work"
              className="hero-cta inline-flex items-center bg-[var(--accent)] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#0a0c10] opacity-0"
            >
              View work
            </MagneticButton>
            <MagneticButton
              href="/contact"
              className="hero-cta inline-flex items-center border border-[var(--line)] px-6 py-3.5 text-xs tracking-[0.16em] uppercase opacity-0 transition-colors hover:border-[var(--fg)]"
            >
              Contact
            </MagneticButton>
          </div>
        </div>

        <div className="hero-scroll mt-16 flex items-center gap-3 text-[10px] tracking-[0.24em] uppercase text-[var(--fg-muted)] opacity-0 md:mt-20">
          <span className="relative block h-10 w-px overflow-hidden bg-[var(--line)]">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollPulse_1.6s_ease-in-out_infinite] bg-[var(--accent)]" />
          </span>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
