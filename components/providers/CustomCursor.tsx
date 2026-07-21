"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) {
      cursor.classList.add("is-hidden");
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let currentX = x;
    let currentY = y;
    let raf = 0;

    const render = () => {
      currentX += (x - currentX) * 0.22;
      currentY += (y - currentY) * 0.22;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.remove("is-hidden");
    };

    const onLeave = () => cursor.classList.add("is-hidden");

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [data-cursor='hover'], input, textarea",
      );
      cursor.classList.toggle("is-hover", Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor is-hidden" aria-hidden />;
}
