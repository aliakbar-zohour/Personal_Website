"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { IranMap } from "@/components/home/IranMap";
import { site } from "@/lib/data";
import { useIntro } from "@/components/providers/IntroProvider";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const { ready } = useIntro();

  useEffect(() => {
    if (!ready) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [".hero-meta", ".hero-sub", ".hero-cta", ".hero-scroll", ".hero-visual"],
        { opacity: 0 },
      );
      gsap.set(".hero-brand-line", { y: 48, opacity: 0 });
      gsap.set(".hero-meta", { y: 20, filter: "blur(8px)" });
      gsap.set(".hero-sub", { y: 24, filter: "blur(6px)" });
      gsap.set(".hero-cta", { y: 18, scale: 0.96 });
      gsap.set(".hero-visual", { scale: 0.96, filter: "blur(8px)" });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(".hero-meta", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
      })
        .to(
          ".hero-brand-line",
          { y: 0, opacity: 1, duration: 1.15, stagger: 0.1 },
          "-=0.35",
        )
        .to(
          ".hero-sub",
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
          "-=0.5",
        )
        .to(
          ".hero-cta",
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1 },
          "-=0.4",
        )
        .to(
          ".hero-visual",
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1 },
          "-=1",
        )
        .to(".hero-scroll", { opacity: 1, duration: 0.55 }, "-=0.25");
    }, root);

    return () => {
      ctx.revert();
    };
  }, [ready]);

  return (
    <section ref={rootRef} className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-meta">
            {site.role} · {site.location}
          </p>

          <h1 className="hero-title font-display">
            <span className="hero-brand-line">ALIAKBAR</span>
            <span className="hero-brand-line hero-brand-line--accent">
              ZOHOUR
            </span>
          </h1>

          <div className="hero-actions">
            <p className="hero-sub">{site.tagline}</p>
            <div className="hero-ctas">
              <MagneticButton
                href="/work"
                data-cursor-label="Work"
                className="hero-cta btn-accent inline-flex items-center px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase"
              >
                View work
              </MagneticButton>
              <MagneticButton
                href="/contact"
                data-cursor-label="Talk"
                className="hero-cta hero-cta--ghost inline-flex items-center px-6 py-3.5 text-xs tracking-[0.16em] uppercase"
              >
                Contact
              </MagneticButton>
            </div>
          </div>

          <div className="hero-scroll">
            <span className="hero-scroll-line" aria-hidden>
              <span />
            </span>
            Scroll to explore
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-visual">
            <IranMap />
          </div>
        </div>
      </div>
    </section>
  );
}
