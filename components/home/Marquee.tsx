import { skills } from "@/lib/data";

export function Marquee() {
  const items = [...skills, ...skills];

  return (
    <div className="border-y border-[var(--line)] py-5">
      <div className="marquee">
        <div className="marquee__track">
          {items.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="font-display text-2xl font-semibold tracking-tight text-[var(--fg-muted)] md:text-3xl"
            >
              {skill}
              <span className="mx-6 text-[var(--accent)]">✦</span>
            </span>
          ))}
        </div>
        <div className="marquee__track" aria-hidden>
          {items.map((skill, index) => (
            <span
              key={`dup-${skill}-${index}`}
              className="font-display text-2xl font-semibold tracking-tight text-[var(--fg-muted)] md:text-3xl"
            >
              {skill}
              <span className="mx-6 text-[var(--accent)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
