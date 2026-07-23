"use client";

import { getOppositeLocale, getDictionary } from "@/lib/i18n";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function LanguageSwitcher() {
  const { locale, toggleLocale, transitioning } = useLanguage();
  const target = getOppositeLocale(locale);
  const targetDict = getDictionary(target);

  return (
    <button
      type="button"
      data-cursor="hover"
      data-cursor-label={targetDict.meta.triggerLabel}
      aria-label={targetDict.meta.switchAria}
      disabled={transitioning}
      onClick={toggleLocale}
      className="lang-switch"
    >
      <span className="lang-switch__code" lang={target === "fa" ? "fa" : "en"}>
        {targetDict.meta.triggerLabel}
      </span>
    </button>
  );
}
