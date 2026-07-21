"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_THEME,
  themes,
  type ThemeId,
} from "@/lib/themes";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "az-theme";

function applyTheme(id: ThemeId) {
  const definition = themes.find((t) => t.id === id) ?? themes[0];
  const root = document.documentElement;
  root.setAttribute("data-theme", definition.id);
  Object.entries(definition.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    const initial =
      stored && themes.some((t) => t.id === stored) ? stored : DEFAULT_THEME;
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    applyTheme(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const index = themes.findIndex((t) => t.id === current);
      const next = themes[(index + 1) % themes.length];
      applyTheme(next.id);
      window.localStorage.setItem(STORAGE_KEY, next.id);
      return next.id;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme }),
    [theme, setTheme, cycleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
