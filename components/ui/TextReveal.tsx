"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
};

export function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
}: TextRevealProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const lines = root.querySelectorAll(".reveal-line");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { yPercent: 120, rotate: 3, opacity: 0.2 },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.07,
          delay,
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [delay, text]);

  const words = text.split(" ");

  return (
    <Tag ref={rootRef as never} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="reveal-clip inline-block mr-[0.28em]">
          <span className="reveal-line inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
