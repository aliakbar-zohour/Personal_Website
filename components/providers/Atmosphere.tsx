"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Atmosphere() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const orbs = root.querySelectorAll<HTMLElement>(".atmosphere__orb");

    const ctx = gsap.context(() => {
      gsap.to(orbs[0], {
        x: 80,
        y: 40,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orbs[1], {
        x: -60,
        y: 70,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orbs[2], {
        x: 40,
        y: -50,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="atmosphere" aria-hidden>
      <div className="atmosphere__orb atmosphere__orb--a" />
      <div className="atmosphere__orb atmosphere__orb--b" />
      <div className="atmosphere__orb atmosphere__orb--c" />
    </div>
  );
}
