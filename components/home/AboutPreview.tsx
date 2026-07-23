"use client";

import Link from "next/link";
import { about, site } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function AboutPreview() {
  return (
    <section className="section-pad border-t border-[var(--line)]">
      <div className="container grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="mb-3 text-xs tracking-[0.22em] uppercase text-[var(--accent)]">
            About
          </p>
          <TextReveal
            text="Builder. Operator. One-person army."
            className="font-display max-w-xl text-4xl font-bold tracking-tight md:text-5xl"
          />
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--fg-muted)]">
              {about.intro}
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton
                href="/about"
                className="inline-flex border border-[var(--line)] px-6 py-3.5 text-xs tracking-[0.16em] uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                More about me
              </MagneticButton>
              <Link
                href={site.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex px-2 py-3.5 text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)] line-link"
              >
                GitHub
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 gap-px bg-[var(--line)]">
          {about.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.08 * index}>
              <div className="flex min-h-[140px] flex-col justify-between bg-[var(--bg)] p-6 md:min-h-[180px] md:p-8">
                <p className="text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                  {stat.label}
                </p>
                <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {stat.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
