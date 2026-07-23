"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function NotFoundClient() {
  const { dict } = useLanguage();

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.22em] uppercase text-[var(--accent)]">
        {dict.common.notFoundEyebrow}
      </p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">
        {dict.common.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md text-[var(--fg-muted)]">
        {dict.common.notFoundBody}
      </p>
      <Link
        href="/"
        data-cursor="hover"
        className="btn-accent mt-10 inline-flex px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase"
      >
        {dict.common.notFoundCta}
      </Link>
    </section>
  );
}
