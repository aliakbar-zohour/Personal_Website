"use client";

import { SmoothScrollProvider } from "./SmoothScroll";
import { CustomCursor } from "./CustomCursor";
import { Atmosphere } from "./Atmosphere";
import { ThemeProvider } from "./ThemeProvider";
import { IntroProvider } from "./IntroProvider";
import { IntroLoader } from "./IntroLoader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <IntroProvider>
        <SmoothScrollProvider>
          <Atmosphere />
          <CustomCursor />
          <IntroLoader />
          {children}
        </SmoothScrollProvider>
      </IntroProvider>
    </ThemeProvider>
  );
}
