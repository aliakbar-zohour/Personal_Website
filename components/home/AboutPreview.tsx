"use client";

import Link from "next/link";
import { site } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AboutPreview() {
  const { dict } = useLanguage();

  const stats = [
    { label: dict.stats.years, value: dict.stats.yearsValue },
    { label: dict.stats.repos, value: dict.stats.reposValue },
    { label: dict.stats.focus, value: dict.stats.focusValue },
    { label: dict.stats.based, value: dict.stats.basedValue },
  ];

  return (
    <section className="section-pad border-t border-[var(--line)]">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="mb-3 text-xs tracking-[0.22em] uppercase text-[var(--accent)]">
            {dict.aboutPreview.eyebrow}
          </p>
          <TextReveal
            text={dict.aboutPreview.headline}
            className="font-display max-w-xl text-4xl font-bold tracking-tight md:text-5xl"
          />
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--fg-muted)]">
              {dict.aboutPreview.intro}
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton
                href="/about"
                className="inline-flex border border-[var(--line)] px-6 py-3.5 text-xs tracking-[0.16em] uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {dict.aboutPreview.more}
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
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.08 * index}>
              <div className="flex min-h-[132px] flex-col justify-between bg-[var(--bg)] p-5 md:min-h-[180px] md:p-8">
                <p className="text-[11px] tracking-[0.14em] uppercase text-[var(--fg-muted)] md:text-xs md:tracking-[0.16em]">
                  {stat.label}
                </p>
                <p className="font-display text-[1.85rem] font-bold tracking-tight md:text-4xl">
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
