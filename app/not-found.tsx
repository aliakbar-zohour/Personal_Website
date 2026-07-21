import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.22em] uppercase text-[var(--accent)]">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">
        Lost in the void
      </h1>
      <p className="mt-4 max-w-md text-[var(--fg-muted)]">
        This page doesn&apos;t exist — or it moved somewhere more interesting.
      </p>
      <Link
        href="/"
        data-cursor="hover"
        className="mt-10 inline-flex bg-[var(--accent)] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#0a0c10]"
      >
        Back home
      </Link>
    </section>
  );
}
