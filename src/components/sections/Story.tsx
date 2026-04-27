"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Story() {
  const { t } = useLanguage();

  return (
    <section id="story" className="relative z-10 px-5 py-20 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="eyebrow">{t.story.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-tightest text-cream sm:mt-5 sm:text-5xl">
            {t.story.titleA}{" "}
            <em className="italic text-[#e7d4a6]">{t.story.titleAccent}</em>{" "}
            {t.story.titleB}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:mt-20 sm:gap-10 md:grid-cols-3">
          {t.story.pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <span className="font-display text-xl text-gold">{p.n}</span>
              <h3 className="font-display text-xl leading-tight text-cream sm:text-2xl">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-mist/65">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
