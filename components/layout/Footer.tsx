import Link from "next/link";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="container section-pad !pt-16 !pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-[clamp(1.85rem,4vw,3rem)] font-bold tracking-tight leading-[1.1]">
              Let&apos;s build something
              <span className="font-serif italic text-[var(--accent)]"> unforgettable</span>.
            </p>
            <Link
              href="/contact"
              data-cursor="hover"
              className="line-link mt-8 inline-flex text-sm tracking-[0.16em] uppercase text-[var(--fg-muted)]"
            >
              Start a project →
            </Link>
          </div>

          <div className="flex flex-col justify-between gap-10 md:items-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
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
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--fg-muted)]">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
