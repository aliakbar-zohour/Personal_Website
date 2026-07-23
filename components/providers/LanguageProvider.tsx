"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  applyDocumentLocale,
  DEFAULT_LOCALE,
  getDictionary,
  getOppositeLocale,
  LOCALES,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";
import { LanguageTransition } from "./LanguageTransition";

type LanguageContextValue = {
  locale: Locale;
  dict: Dictionary;
  isRtl: boolean;
  transitioning: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "az-locale";
const SWAP_MS = 520;
const END_MS = 1400;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [transitioning, setTransitioning] = useState(false);
  const [pendingLabel, setPendingLabel] = useState("English");
  const [pendingIsFa, setPendingIsFa] = useState(false);
  const localeRef = useRef<Locale>(DEFAULT_LOCALE);
  const busyRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    const initial =
      stored && LOCALES.includes(stored) ? stored : DEFAULT_LOCALE;
    localeRef.current = initial;
    setLocaleState(initial);
    applyDocumentLocale(initial);
  }, []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const setLocale = useCallback((next: Locale) => {
    if (busyRef.current || next === localeRef.current) return;

    busyRef.current = true;
    const nextDict = getDictionary(next);
    setPendingLabel(nextDict.meta.languageName);
    setPendingIsFa(next === "fa");
    setTransitioning(true);

    timersRef.current.forEach((id) => window.clearTimeout(id));

    const swap = window.setTimeout(() => {
      localeRef.current = next;
      applyDocumentLocale(next);
      setLocaleState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
      window.scrollTo(0, 0);
    }, SWAP_MS);

    const end = window.setTimeout(() => {
      setTransitioning(false);
      busyRef.current = false;
    }, END_MS);

    timersRef.current = [swap, end];
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(getOppositeLocale(localeRef.current));
  }, [setLocale]);

  const dict = getDictionary(locale);

  const value = useMemo(
    () => ({
      locale,
      dict,
      isRtl: locale === "fa",
      transitioning,
      setLocale,
      toggleLocale,
    }),
    [locale, dict, transitioning, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      <LanguageTransition
        active={transitioning}
        label={pendingLabel}
        isFa={pendingIsFa}
      />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
