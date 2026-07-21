"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CtaBand() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="relative overflow-hidden border border-[var(--line)] px-6 py-16 md:px-14 md:py-24">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_35%,transparent),transparent_70%)]"
            aria-hidden
          />
          <TextReveal
            text="Open to collaborations, product builds, and international opportunities."
            className="font-display relative z-10 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl"
          />
          <FadeIn delay={0.15}>
            <div className="relative z-10 mt-10">
              <MagneticButton
                href="/contact"
                data-cursor-label="Contact"
                strength={0.45}
                className="btn-accent inline-flex px-7 py-4 text-xs font-semibold tracking-[0.16em] uppercase"
              >
                Get in touch
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
