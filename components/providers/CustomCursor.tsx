"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "hover" | "view" | "drag";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);
    const onChange = () => setEnabled(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;
    let visible = false;
    let mode: CursorMode = "default";

    const trails = trailRefs.current.filter(Boolean) as HTMLDivElement[];
    const trailPositions = trails.map(() => ({ x: mouseX, y: mouseY }));

    const setMode = (next: CursorMode, text = "") => {
      mode = next;
      dot.dataset.mode = next;
      ring.dataset.mode = next;
      label.textContent = text;
      label.dataset.visible = text ? "true" : "false";
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      trailPositions.forEach((pos, i) => {
        const target = i === 0 ? { x: mouseX, y: mouseY } : trailPositions[i - 1];
        const ease = 0.18 - i * 0.02;
        pos.x += (target.x - pos.x) * ease;
        pos.y += (target.y - pos.y) * ease;
        const el = trails[i];
        if (el) {
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
          el.style.opacity = visible ? String(0.35 - i * 0.06) : "0";
        }
      });

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!visible) {
        visible = true;
        dot.classList.remove("is-hidden");
        ring.classList.remove("is-hidden");
      }
    };

    const onLeave = () => {
      visible = false;
      dot.classList.add("is-hidden");
      ring.classList.add("is-hidden");
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [data-cursor], input, textarea",
      ) as HTMLElement | null;

      if (!interactive) {
        setMode("default");
        return;
      }

      const cursor = interactive.getAttribute("data-cursor") || "hover";
      const cursorLabel = interactive.getAttribute("data-cursor-label") || "";

      if (cursor === "view") setMode("view", cursorLabel || "View");
      else if (cursor === "drag") setMode("drag", cursorLabel || "Drag");
      else setMode("hover", cursorLabel);
    };

    const onDown = () => {
      dot.classList.add("is-down");
      ring.classList.add("is-down");
    };
    const onUp = () => {
      dot.classList.remove("is-down");
      ring.classList.remove("is-down");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="cursor-root" aria-hidden>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="cursor-trail"
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
        />
      ))}
      <div ref={ringRef} className="cursor-ring is-hidden" data-mode="default">
        <span ref={labelRef} className="cursor-label" data-visible="false" />
      </div>
      <div ref={dotRef} className="cursor-dot is-hidden" data-mode="default" />
    </div>
  );
}
