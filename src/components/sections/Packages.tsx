"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { packages, type PackageMeta } from "@/data/packages";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Packages() {
  return (
    <section id="packages" className="relative z-10 px-5 py-20 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-7 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <PackageCard key={p.slug} pkg={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="eyebrow"
      >
        {t.packages.eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-4 font-display text-3xl leading-[1.05] tracking-tightest text-cream sm:mt-5 sm:text-6xl"
      >
        {t.packages.titleA}{" "}
        <em className="italic text-[#e7d4a6]">{t.packages.titleAccent}</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 max-w-md text-balance text-sm text-mist/65 sm:mt-5 sm:max-w-xl sm:text-base"
      >
        {t.packages.description}
      </motion.p>

      <div className="divider-line mt-10 w-32 sm:mt-12 sm:w-40" />
    </div>
  );
}

function PackageCard({ pkg, index }: { pkg: PackageMeta; index: number }) {
  const { t } = useLanguage();
  const data = t.packageData[pkg.slug];

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="card-glass group overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={pkg.image}
          alt={data.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cream/15 bg-ink/40 px-2.5 py-1 backdrop-blur sm:left-5 sm:top-5 sm:px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-[10px] uppercase tracking-[0.18em] text-cream/80 sm:text-[11px]">
            {data.duration}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="eyebrow text-[0.6rem] sm:text-[0.65rem]">{data.region}</p>
          <h3 className="mt-2 font-display text-xl leading-tight tracking-tight text-cream sm:text-[1.7rem]">
            {data.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-6">
        <p className="text-sm leading-relaxed text-mist/70">{data.blurb}</p>

        <div className="divider-line" />

        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="eyebrow text-[0.6rem] sm:text-[0.65rem]">
              {t.packages.departure}
            </p>
            <p className="mt-1 text-[13px] leading-snug text-cream/85 sm:text-sm">
              {data.date}
            </p>
          </div>
          <div className="text-right">
            <p className="eyebrow text-[0.6rem] sm:text-[0.65rem]">
              {t.packages.from}
            </p>
            <p className="mt-1 whitespace-nowrap font-display text-base text-gold sm:text-lg">
              {pkg.price}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-1 inline-flex items-center gap-2 self-start text-sm text-cream/85 transition hover:text-gold"
        >
          {t.packages.cta}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </motion.article>
  );
}
