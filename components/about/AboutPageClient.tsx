"use client";

import { skills, site } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AboutPageClient() {
  const { dict } = useLanguage();

  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="container">
        <p className="mb-3 text-xs tracking-[0.22em] uppercase text-[var(--accent)]">
          {dict.about.eyebrow}
        </p>
        <TextReveal
          text={dict.about.headline}
          className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-6">
            <FadeIn>
              <p className="text-xl leading-relaxed text-[var(--fg)] md:text-2xl">
                {dict.about.intro}
              </p>
            </FadeIn>
            {dict.about.body.map((paragraph, index) => (
              <FadeIn key={`${index}-${paragraph.slice(0, 16)}`} delay={0.08 * (index + 1)}>
                <p className="text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <aside className="border border-[var(--line)] p-6 md:p-8">
              <p className="text-xs tracking-[0.18em] uppercase text-[var(--fg-muted)]">
                {dict.about.currently}
              </p>
              <p className="mt-4 font-display text-2xl font-bold">{dict.site.role}</p>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">{dict.site.location}</p>
              <a
                href={`mailto:${site.email}`}
                data-cursor="hover"
                className="line-link mt-8 inline-flex text-sm text-[var(--accent)]"
              >
                {site.email}
              </a>
            </aside>
          </FadeIn>
        </div>

        <div className="mt-24 border-t border-[var(--line)] pt-16">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {dict.about.experience}
          </h2>
          <ul className="mt-10">
            {dict.experience.map((item, index) => (
              <li key={`${item.company}-${item.role}`} className="project-row">
                <FadeIn delay={index * 0.06}>
                  <div className="grid gap-4 py-8 md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-10">
                    <div>
                      <p className="font-display text-xl font-bold md:text-2xl">
                        {item.role}
                      </p>
                      <p className="mt-1 text-sm text-[var(--accent)]">{item.company}</p>
                      <p className="mt-2 text-xs tracking-[0.14em] uppercase text-[var(--fg-muted)]">
                        {item.period}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--fg-muted)] md:text-base">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 border-t border-[var(--line)] pt-16">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {dict.about.capabilities}
          </h2>
          <FadeIn>
            <ul className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border border-[var(--line)] px-4 py-2.5 text-sm tracking-[0.08em] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
