"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ContactPageClient() {
  const [sent, setSent] = useState(false);
  const { dict } = useLanguage();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`${dict.contact.mailSubject} ${name}`);
    const body = encodeURIComponent(
      `${dict.contact.mailName}: ${name}\n${dict.contact.mailEmail}: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="container grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="mb-3 text-xs tracking-[0.22em] uppercase text-[var(--accent)]">
            {dict.contact.eyebrow}
          </p>
          <TextReveal
            text={dict.contact.headline}
            className="font-display max-w-xl text-4xl font-bold tracking-tight md:text-6xl"
          />
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--fg-muted)]">
              {dict.contact.body}
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-12 space-y-6">
              <div>
                <p className="text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                  {dict.contact.email}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  data-cursor="hover"
                  className="line-link mt-2 inline-flex font-display text-xl font-semibold md:text-2xl"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                  {dict.contact.social}
                </p>
                <ul className="mt-3 flex flex-wrap gap-5">
                  {site.socials.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="line-link text-sm tracking-[0.12em] uppercase text-[var(--fg-muted)]"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="border border-[var(--line)] p-6 md:p-8"
          >
            <label className="mb-6 block">
              <span className="mb-2 block text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                {dict.contact.name}
              </span>
              <input
                required
                name="name"
                type="text"
                data-cursor="hover"
                className="w-full border-b border-[var(--line)] bg-transparent py-3 outline-none transition-colors focus:border-[var(--accent)]"
                placeholder={dict.contact.namePlaceholder}
              />
            </label>
            <label className="mb-6 block">
              <span className="mb-2 block text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                {dict.contact.emailLabel}
              </span>
              <input
                required
                name="email"
                type="email"
                data-cursor="hover"
                className="w-full border-b border-[var(--line)] bg-transparent py-3 outline-none transition-colors focus:border-[var(--accent)]"
                placeholder={dict.contact.emailPlaceholder}
              />
            </label>
            <label className="mb-8 block">
              <span className="mb-2 block text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                {dict.contact.message}
              </span>
              <textarea
                required
                name="message"
                rows={5}
                data-cursor="hover"
                className="w-full resize-none border-b border-[var(--line)] bg-transparent py-3 outline-none transition-colors focus:border-[var(--accent)]"
                placeholder={dict.contact.messagePlaceholder}
              />
            </label>
            <button
              type="submit"
              data-cursor="hover"
              className="btn-accent inline-flex w-full items-center justify-center px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase transition-opacity hover:opacity-90"
            >
              {sent ? dict.contact.sending : dict.contact.send}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
