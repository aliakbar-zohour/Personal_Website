"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/lib/data";
import { useIntro } from "@/components/providers/IntroProvider";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const { ready } = useIntro();
  const started = useRef(false);

  useEffect(() => {
    if (!ready || started.current) return;
    const root = rootRef.current;
    if (!root) return;
    started.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-meta",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
      )
        .fromTo(
          ".hero-brand-line",
          { yPercent: 120, rotate: 4 },
          { yPercent: 0, rotate: 0, duration: 1.25, stagger: 0.1 },
          "-=0.4",
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 32, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.95 },
          "-=0.55",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 24, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.1 },
          "-=0.45",
        )
        .fromTo(
          ".hero-visual",
          { opacity: 0, scale: 0.85, rotate: -8 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.2 },
          "-=1.1",
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2",
        );

      gsap.to(".hero-visual-ring", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-visual-ring-alt", {
        rotate: -360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-visual-core", {
        scale: 1.08,
        duration: 3.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      }, root);

    const visual = root.querySelector(".hero-visual") as HTMLElement | null;
    const onMove = (event: MouseEvent) => {
      if (!visual) return;
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(visual, {
        x: x * 36,
        y: y * 28,
        duration: 1.1,
        ease: "power3.out",
      });
      gsap.to(root.querySelectorAll(".hero-brand-line"), {
        x: x * 12,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.04,
      });
    };

    root.addEventListener("mousemove", onMove);

    return () => {
      root.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, [ready]);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-28 md:pb-14 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-visual absolute right-[-8%] top-[18%] hidden aspect-square w-[min(48vw,560px)] opacity-0 md:block">
          <div className="hero-visual-ring absolute inset-0 rounded-full border border-[var(--line)]" />
          <div className="hero-visual-ring-alt absolute inset-[12%] rounded-full border border-dashed border-[color-mix(in_srgb,var(--accent)_40%,transparent)]" />
          <div className="hero-visual-core absolute inset-[28%] rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,var(--accent)_40%,transparent),color-mix(in_srgb,var(--orb-a)_50%,transparent)_55%,transparent_70%)]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--fg)_25%,transparent)] to-transparent" />
          <div className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-[var(--accent)]" />
          <div className="absolute bottom-[24%] right-[20%] h-1.5 w-1.5 rounded-full bg-[var(--fg)] opacity-50" />
        </div>
      </div>

      <div className="container relative z-10">
        <p className="hero-meta mb-6 text-xs tracking-[0.22em] uppercase text-[var(--fg-muted)] opacity-0 md:mb-8">
          {site.role} · {site.location}
        </p>

        <h1 className="font-display font-bold leading-[0.88] tracking-[-0.04em]">
          <span className="reveal-clip block">
            <span className="hero-brand-line block origin-left text-[clamp(3.4rem,12vw,9.5rem)]">
              ALIAKBAR
            </span>
          </span>
          <span className="reveal-clip block">
            <span className="hero-brand-line block origin-left text-[clamp(3.4rem,12vw,9.5rem)] text-[var(--accent)]">
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
              data-cursor-label="Work"
              className="hero-cta btn-accent inline-flex items-center px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase opacity-0"
            >
              View work
            </MagneticButton>
            <MagneticButton
              href="/contact"
              data-cursor-label="Talk"
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
