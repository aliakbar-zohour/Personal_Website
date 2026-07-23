import { en } from "./en";
import { fa } from "./fa";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale, ProjectCopy, ExperienceCopy } from "./types";

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALES: Locale[] = ["en", "fa"];

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  fa,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === "en" ? "fa" : "en";
}

export function getRouteTitle(pathname: string, locale: Locale = DEFAULT_LOCALE) {
  const dict = getDictionary(locale);
  const map: Record<string, string> = {
    "/": dict.routes.home,
    "/work": dict.routes.work,
    "/about": dict.routes.about,
    "/contact": dict.routes.contact,
  };
  return map[pathname] ?? "Aliakbar";
}

export function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.lang = locale;
  root.dir = locale === "fa" ? "rtl" : "ltr";
  root.dataset.locale = locale;
}
