"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.45, 0.6], [1, 1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const captionOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.7, 0.95, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={ref} className="relative h-[360vh] sm:h-[420vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroScene progress={progress} />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(6,9,15,0.85)_85%)]" />
        </div>

        <Nav />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 text-center sm:px-6">
          <motion.div
            style={{ opacity: subOpacity }}
            className="eyebrow mb-5 sm:mb-6"
          >
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="font-display text-balance text-[2.5rem] leading-[1.05] tracking-tightest text-cream sm:text-7xl md:text-[5.5rem]"
          >
            {t.hero.titleLine1}
            <br />
            <span className="italic text-[#e7d4a6]">{t.hero.titleAccent}</span>{" "}
            {t.hero.titleLine2}
          </motion.h1>

          <motion.p
            style={{ opacity: subOpacity }}
            className="mt-6 max-w-[20rem] text-balance text-sm leading-relaxed text-mist/70 sm:mt-8 sm:max-w-xl sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            style={{ opacity: subOpacity }}
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <a href="#packages" className="btn-gold justify-center">
              {t.hero.ctaPrimary}
              <span aria-hidden>→</span>
            </a>
            <a href="#story" className="btn-ghost justify-center">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            style={{ opacity: captionOpacity }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 sm:bottom-24"
          >
            <p className="eyebrow text-[0.65rem] sm:text-xs">
              {t.hero.nowCharting}
            </p>
          </motion.div>
        </div>

        <ScrollHint label={t.hero.scroll} />
      </div>
    </section>
  );
}

function Nav() {
  const { t } = useLanguage();
  return (
    <header className="absolute left-0 right-0 top-0 z-30 px-4 py-4 sm:px-10 sm:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a
          href="#"
          className="font-display text-lg tracking-wide text-cream sm:text-xl"
        >
          Уудам<span className="text-gold">.</span>
        </a>

        <nav className="hidden gap-9 text-sm text-cream/70 md:flex">
          <a href="#packages" className="transition hover:text-cream">
            {t.nav.journeys}
          </a>
          <a href="#story" className="transition hover:text-cream">
            {t.nav.atelier}
          </a>
          <a href="#contact" className="transition hover:text-cream">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden text-sm text-gold lg:inline"
          >
            {t.nav.concierge}
          </a>
        </div>
      </div>
    </header>
  );
}

function ScrollHint({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.6, y: 0 }}
      transition={{ delay: 1.5, duration: 1.4 }}
      className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 sm:bottom-8"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="eyebrow text-[0.6rem] sm:text-xs">{label}</span>
        <div className="h-8 w-px bg-gradient-to-b from-cream/40 to-transparent sm:h-10" />
      </div>
    </motion.div>
  );
}
