"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

type Props = { className?: string };

export function LanguageToggle({ className = "" }: Props) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-cream/20 bg-ink/40 p-0.5 backdrop-blur ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("mn")}
        aria-pressed={lang === "mn"}
        className={`rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wider transition ${
          lang === "mn"
            ? "bg-cream text-ink"
            : "text-cream/70 hover:text-cream"
        }`}
      >
        МОН
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wider transition ${
          lang === "en"
            ? "bg-cream text-ink"
            : "text-cream/70 hover:text-cream"
        }`}
      >
        EN
      </button>
    </div>
  );
}
