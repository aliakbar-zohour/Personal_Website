"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { IRAN_PATH } from "@/lib/iranPath";

type City = {
  id: string;
  name: string;
  x: number;
  y: number;
};

const CITIES: City[] = [
  { id: "teh", name: "Tehran", x: 435, y: 335 },
  { id: "isf", name: "Isfahan", x: 450, y: 470 },
  { id: "shi", name: "Shiraz", x: 420, y: 585 },
  { id: "tab", name: "Tabriz", x: 265, y: 245 },
  { id: "mas", name: "Mashhad", x: 730, y: 310 },
  { id: "aha", name: "Ahvaz", x: 300, y: 555 },
  { id: "ker", name: "Kerman", x: 600, y: 555 },
  { id: "ras", name: "Rasht", x: 385, y: 275 },
  { id: "yaz", name: "Yazd", x: 535, y: 505 },
  { id: "ban", name: "Bandar Abbas", x: 555, y: 695 },
];

const LINKS: [string, string][] = [
  ["tab", "ras"],
  ["ras", "teh"],
  ["tab", "teh"],
  ["teh", "mas"],
  ["teh", "isf"],
  ["teh", "yaz"],
  ["isf", "shi"],
  ["isf", "aha"],
  ["isf", "yaz"],
  ["shi", "ban"],
  ["yaz", "ker"],
  ["ker", "ban"],
  ["aha", "shi"],
  ["mas", "yaz"],
];

export function IranMap() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoverCity, setHoverCity] = useState<string | null>(null);

  const cityMap = useMemo(
    () => Object.fromEntries(CITIES.map((c) => [c.id, c])),
    [],
  );

  const connections = useMemo(
    () =>
      LINKS.map(([a, b]) => ({
        id: `${a}-${b}`,
        from: cityMap[a],
        to: cityMap[b],
      })),
    [cityMap],
  );

  useEffect(() => {
    const root = rootRef.current;
    const svg = svgRef.current;
    if (!root || !svg) return;

    const outline = svg.querySelector(".iran-outline") as SVGPathElement | null;
    const outlineSoft = svg.querySelector(
      ".iran-outline-soft",
    ) as SVGPathElement | null;
    const fill = svg.querySelector(".iran-fill") as SVGPathElement | null;
    const nodes = svg.querySelectorAll(".iran-city");
    const lines = svg.querySelectorAll(".iran-link");

    const ctx = gsap.context(() => {
      [outline, outlineSoft].forEach((path, index) => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.6,
          delay: index * 0.12,
          ease: "power2.inOut",
          onComplete: () => {
            if (index === 0 && outline) {
              gsap.set(outline, {
                strokeDasharray: "28 18",
                strokeDashoffset: 0,
              });
              gsap.to(outline, {
                strokeDashoffset: -92,
                duration: 8,
                repeat: -1,
                ease: "none",
              });
            }
          },
        });
      });

      gsap.fromTo(
        fill,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, delay: 0.7, ease: "power2.out" },
      );

      gsap.fromTo(
        ".iran-aura",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 1.6, delay: 0.35, ease: "power3.out" },
      );

      gsap.to(".iran-aura", {
        scale: 1.06,
        duration: 5.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 2,
      });

      gsap.fromTo(
        lines,
        { opacity: 0 },
        {
          opacity: 0.45,
          duration: 0.85,
          stagger: 0.04,
          delay: 1.15,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(lines, {
              strokeDashoffset: -48,
              duration: 2.8,
              repeat: -1,
              ease: "none",
              stagger: {
                each: 0.18,
                repeat: -1,
              },
            });
          },
        },
      );

      gsap.fromTo(
        nodes,
        { scale: 0, opacity: 0, transformOrigin: "center" },
        {
          scale: 1,
          opacity: 1,
          duration: 0.55,
          stagger: 0.05,
          delay: 1.25,
          ease: "back.out(1.8)",
        },
      );

      gsap.to(".iran-node-ring", {
        scale: 2.2,
        opacity: 0,
        duration: 2.4,
        repeat: -1,
        ease: "power1.out",
        stagger: {
          each: 0.35,
          repeat: -1,
        },
        transformOrigin: "center",
      });

      gsap.to(".iran-orbit--a", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to(".iran-orbit--b", {
        rotate: -360,
        duration: 52,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to(".iran-orbit--c", {
        rotate: 360,
        duration: 70,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to(".iran-float-dot", {
        y: "random(-16, 16)",
        x: "random(-14, 14)",
        opacity: "random(0.15, 0.7)",
        duration: "random(2.8, 5.2)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.08,
      });

      gsap.to(".iran-beacon", {
        opacity: 0.15,
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.fromTo(
        ".iran-sheen",
        { xPercent: -140, opacity: 0 },
        {
          xPercent: 140,
          opacity: 0.5,
          duration: 5,
          repeat: -1,
          repeatDelay: 2.8,
          ease: "power1.inOut",
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="iran-map">
      <div className="iran-aura" aria-hidden />
      <div className="iran-beacon iran-beacon--1" aria-hidden />
      <div className="iran-beacon iran-beacon--2" aria-hidden />
      <div className="iran-beacon iran-beacon--3" aria-hidden />
      <div className="iran-orbit iran-orbit--a" aria-hidden />
      <div className="iran-orbit iran-orbit--b" aria-hidden />
      <div className="iran-orbit iran-orbit--c" aria-hidden />

      <div className="iran-stage">
        <div className="iran-sheen" aria-hidden />

        <svg
          ref={svgRef}
          className="iran-svg"
          viewBox="0 0 1024 1024"
          role="img"
          aria-label="Animated map of Iran"
        >
          <defs>
            <linearGradient id="iranFill" x1="15%" y1="10%" x2="90%" y2="95%">
              <stop offset="0%" stopColor="rgba(214,255,75,0.24)" />
              <stop offset="40%" stopColor="rgba(90,140,190,0.14)" />
              <stop offset="100%" stopColor="rgba(214,255,75,0.07)" />
            </linearGradient>
            <linearGradient id="iranStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(214,255,75,0.25)" />
              <stop offset="50%" stopColor="rgba(214,255,75,1)" />
              <stop offset="100%" stopColor="rgba(140,200,255,0.4)" />
            </linearGradient>
            <filter id="iranGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <clipPath id="iranClip">
              <path
                transform="translate(0 1024) scale(0.1 -0.1)"
                d={IRAN_PATH}
              />
            </clipPath>
          </defs>

          <g className="iran-grid" clipPath="url(#iranClip)">
            {Array.from({ length: 22 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="160"
                x2="880"
                y1={200 + i * 30}
                y2={200 + i * 30}
                stroke="var(--accent)"
                strokeWidth="0.5"
                opacity="0.12"
              />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={`v-${i}`}
                y1="200"
                y2="840"
                x1={200 + i * 34}
                x2={200 + i * 34}
                stroke="var(--fg)"
                strokeWidth="0.5"
                opacity="0.08"
              />
            ))}
          </g>

          <path
            className="iran-fill"
            transform="translate(0 1024) scale(0.1 -0.1)"
            d={IRAN_PATH}
            fill="url(#iranFill)"
            opacity="0"
          />

          <path
            className="iran-outline-soft"
            transform="translate(0 1024) scale(0.1 -0.1)"
            d={IRAN_PATH}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="42"
            strokeOpacity="0.18"
            strokeLinejoin="round"
            filter="url(#iranGlow)"
          />

          <path
            className="iran-outline"
            transform="translate(0 1024) scale(0.1 -0.1)"
            d={IRAN_PATH}
            fill="none"
            stroke="url(#iranStroke)"
            strokeWidth="16"
            strokeLinejoin="round"
            filter="url(#iranGlow)"
          />

          {connections.map(({ id, from, to }) => (
            <line
              key={id}
              className="iran-link"
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--accent)"
              strokeWidth={
                hoverCity === from.id || hoverCity === to.id ? 1.7 : 0.8
              }
              strokeOpacity={
                hoverCity
                  ? hoverCity === from.id || hoverCity === to.id
                    ? 0.95
                    : 0.08
                  : 0.35
              }
              strokeDasharray="6 8"
            />
          ))}

          {CITIES.map((city) => (
            <g
              key={city.id}
              className={`iran-city ${hoverCity === city.id ? "is-active" : ""}`}
              transform={`translate(${city.x} ${city.y})`}
              onPointerEnter={() => setHoverCity(city.id)}
              onPointerLeave={() => setHoverCity(null)}
            >
              <circle
                className="iran-node-ring"
                r="9"
                fill="var(--accent)"
                opacity="0.28"
              />
              <circle
                r="3.8"
                fill="var(--fg)"
                stroke="var(--accent)"
                strokeWidth="1.4"
              />
              <text className="iran-city-label" x="12" y="4" fill="currentColor">
                {city.name}
              </text>
            </g>
          ))}
        </svg>

        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="iran-float-dot"
            style={{
              left: `${8 + ((i * 13) % 84)}%`,
              top: `${12 + ((i * 19) % 76)}%`,
            }}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}
