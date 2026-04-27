"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

const PHONES = ["77136633", "91172769", "89136633"];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-cream/10 px-5 py-12 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-3 border-b border-cream/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow">{t.footer.phoneLabel}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6">
            {PHONES.map((p) => (
              <a
                key={p}
                href={`tel:+976${p}`}
                className="font-display text-xl text-gold transition hover:text-cream sm:text-2xl"
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#" className="font-display text-2xl text-cream">
              Уудам<span className="text-gold">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/60">
              {t.footer.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-cream/70 sm:grid-cols-3 sm:gap-x-12">
            <a href="#packages" className="transition hover:text-cream">
              {t.footer.links.journeys}
            </a>
            <a href="#story" className="transition hover:text-cream">
              {t.footer.links.philosophy}
            </a>
            <a
              href="mailto:concierge@uudam.travel"
              className="transition hover:text-cream"
            >
              {t.footer.links.concierge}
            </a>
            <a href="#" className="transition hover:text-cream">
              {t.footer.links.press}
            </a>
            <a href="#" className="transition hover:text-cream">
              {t.footer.links.membership}
            </a>
            <a href="#" className="transition hover:text-cream">
              {t.footer.links.journal}
            </a>
          </div>
        </div>

        <div className="divider-line mt-12 sm:mt-14" />

        <div className="mt-5 flex flex-col gap-2 text-xs text-mist/40 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <p>{t.footer.cities}</p>
        </div>
      </div>
    </footer>
  );
}
