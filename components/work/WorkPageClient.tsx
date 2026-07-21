"use client";

import { projects } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";

export function WorkPageClient() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="container">
        <p className="mb-3 text-xs tracking-[0.22em] uppercase text-[var(--accent)]">
          Portfolio
        </p>
        <TextReveal
          text="A selection of builds, experiments, and product craft."
          className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl"
        />
        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-[var(--fg-muted)]">
            From realtime interfaces to creative tools — each project is a study in clarity,
            motion, and engineering taste.
          </p>
        </FadeIn>

        <ul className="mt-16 md:mt-24">
          {projects.map((project, index) => (
            <li key={project.slug} className="project-row group">
              <FadeIn delay={index * 0.05}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="view"
                  data-cursor-label="Open"
                  className="group grid gap-6 py-10 transition-transform duration-500 md:grid-cols-[100px_1.2fr_1fr_auto] md:items-start md:gap-10 md:py-14 group-hover:md:translate-x-3"
                >
                  <span
                    className="font-display text-4xl font-bold opacity-30 transition-opacity group-hover:opacity-100"
                    style={{ color: project.accent }}
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <p className="mb-2 text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                      {project.category} · {project.year}
                    </p>
                    <h2 className="font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)] md:text-4xl">
                      {project.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-[var(--line)] px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase text-[var(--fg-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-[var(--fg-muted)] md:pt-8">
                    {project.summary}
                  </p>
                  <span className="text-sm tracking-[0.14em] uppercase text-[var(--fg-muted)] transition-colors group-hover:text-[var(--accent)] md:pt-8">
                    View →
                  </span>
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
