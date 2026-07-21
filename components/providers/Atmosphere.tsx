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
        x: 90,
        y: 50,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orbs[1], {
        x: -70,
        y: 80,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orbs[2], {
        x: 50,
        y: -60,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 28;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(root, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 1.4,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="atmosphere" aria-hidden>
      <div className="atmosphere__orb atmosphere__orb--a" />
      <div className="atmosphere__orb atmosphere__orb--b" />
      <div className="atmosphere__orb atmosphere__orb--c" />
    </div>
  );
}
