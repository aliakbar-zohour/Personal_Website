"use client";

import { SmoothScrollProvider } from "./SmoothScroll";
import { CustomCursor } from "./CustomCursor";
import { Atmosphere } from "./Atmosphere";
import { ThemeProvider } from "./ThemeProvider";
import { LanguageProvider } from "./LanguageProvider";
import { IntroProvider } from "./IntroProvider";
import { IntroLoader } from "./IntroLoader";
import { BackToTop } from "@/components/ui/BackToTop";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <IntroProvider>
          <SmoothScrollProvider>
            <Atmosphere />
            <CustomCursor />
            <IntroLoader />
            {children}
            <BackToTop />
          </SmoothScrollProvider>
        </IntroProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
