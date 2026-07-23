"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function SelectedWork() {
  const { dict } = useLanguage();
  const featured = projects.slice(0, 4);

  return (
    <section className="section-pad">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs tracking-[0.22em] uppercase text-[var(--accent)]">
              {dict.selectedWork.eyebrow}
            </p>
            <TextReveal
              text={dict.selectedWork.headline}
              className="font-display max-w-xl text-4xl font-bold tracking-tight md:text-5xl"
            />
          </div>
          <FadeIn>
            <Link
              href="/work"
              data-cursor="hover"
              className="line-link text-sm tracking-[0.16em] uppercase text-[var(--fg-muted)]"
            >
              {dict.selectedWork.all}
            </Link>
          </FadeIn>
        </div>

        <ul>
          {featured.map((project, index) => {
            const copy = dict.projects[project.slug];
            return (
              <li key={project.slug} className="project-row group">
                <FadeIn delay={index * 0.06}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="view"
                    data-cursor-label={dict.selectedWork.view}
                    className="grid grid-cols-1 items-center gap-4 py-8 transition-transform duration-500 md:grid-cols-[80px_1.4fr_1fr_100px] md:gap-8 md:py-10 group-hover:md:translate-x-2"
                  >
                    <span className="text-xs tracking-[0.16em] text-[var(--fg-muted)]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)] md:text-3xl">
                        {copy?.title ?? project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--fg-muted)] md:hidden">
                        {copy?.category ?? project.category} · {project.year}
                      </p>
                    </div>
                    <p className="hidden text-sm leading-relaxed text-[var(--fg-muted)] md:block">
                      {copy?.summary ?? project.summary}
                    </p>
                    <span className="hidden text-right text-xs tracking-[0.14em] uppercase text-[var(--fg-muted)] md:block rtl:text-left">
                      {project.year}
                    </span>
                  </a>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
