"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { greetings } from "@/lib/themes";
import { useIntro } from "./IntroProvider";

export function IntroLoader() {
  const { showIntro, completeIntro } = useIntro();
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLParagraphElement>(null);
  const played = useRef(false);

  useEffect(() => {
    if (!showIntro || played.current) return;
    const root = rootRef.current;
    const text = textRef.current;
    const lang = langRef.current;
    if (!root || !text || !lang) return;

    played.current = true;
    document.body.style.overflow = "hidden";

    const applyScript = (script: (typeof greetings)[number]["script"]) => {
      const isRtl = script === "arabic";
      text.classList.toggle("intro-text--fa", isRtl);
      text.setAttribute("dir", isRtl ? "rtl" : "ltr");
      text.setAttribute("lang", isRtl ? "fa" : "en");
    };

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        completeIntro();
      },
    });

    tl.fromTo(
      root,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.35, ease: "power2.out" },
    );

    greetings.forEach((greeting, index) => {
      tl.call(() => {
        text.textContent = greeting.text;
        lang.textContent = greeting.lang;
        applyScript(greeting.script);
      });
      tl.fromTo(
        text,
        { y: 60, opacity: 0, rotateX: -40, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.42,
          ease: "power3.out",
        },
      );
      tl.fromTo(
        lang,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.25 },
        "<",
      );
      tl.to({}, { duration: index === greetings.length - 1 ? 0.55 : 0.28 });
      if (index < greetings.length - 1) {
        tl.to([text, lang], {
          y: -40,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.28,
          ease: "power2.in",
        });
      }
    });

    tl.to(".intro-counter", { opacity: 0, duration: 0.25 }, "-=0.2");
    tl.to(text, {
      scale: 1.15,
      duration: 0.45,
      ease: "power2.inOut",
    });
    tl.to(
      ".intro-panel",
      {
        yPercent: -101,
        duration: 1.15,
        stagger: 0.08,
        ease: "power4.inOut",
      },
      "-=0.15",
    );
    tl.to(
      root,
      { autoAlpha: 0, duration: 0.2, pointerEvents: "none" },
      "-=0.35",
    );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [showIntro, completeIntro]);

  if (!showIntro) return null;

  return (
    <div
      ref={rootRef}
      className="intro-loader"
      aria-hidden
      data-lenis-prevent
    >
      <div className="intro-panels" aria-hidden>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="intro-panel" />
        ))}
      </div>

      <div className="intro-content">
        <p ref={langRef} className="intro-lang">
          {greetings[0].lang}
        </p>
        <div className="intro-text-wrap">
          <div
            ref={textRef}
            className="intro-text font-display"
            dir="ltr"
            lang="en"
          >
            {greetings[0].text}
          </div>
        </div>
        <p className="intro-counter">
          <span className="intro-counter-bar" />
        </p>
      </div>
    </div>
  );
}
