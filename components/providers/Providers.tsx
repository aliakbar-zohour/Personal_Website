"use client";

import { SmoothScrollProvider } from "./SmoothScroll";
import { CustomCursor } from "./CustomCursor";
import { Atmosphere } from "./Atmosphere";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <Atmosphere />
      <CustomCursor />
      {children}
    </SmoothScrollProvider>
  );
}
