"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FloatingBlob } from "@/components/ui/floating-blob";

interface BrandCardProps {
  tag: string;
  name: string;
  desc: string;
  link: string;
  linkLabel: string;
  logo?: React.ReactNode;
  rttTitle?: string;
  rttBody?: string;
  index: number;
}

function BrandCard({
  tag,
  name,
  desc,
  link,
  linkLabel,
  logo,
  rttTitle,
  rttBody,
  index,
}: BrandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative border border-blue-border bg-bg-card rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-DEFAULT/70 hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]">
        {/* Main content */}
        <div className="px-8 md:px-10 py-10 md:py-12">
          <span className="inline-flex items-center px-2.5 py-1 rounded border border-blue-border font-sans text-[10px] uppercase tracking-[0.18em] text-text-secondary mb-6 bg-blue-subtle">
            {tag}
          </span>
          <h3 className="font-display text-display-md text-text-primary mb-5 leading-tight">
            {name}
          </h3>
          <p className="font-sans text-text-secondary leading-relaxed mb-7 text-sm md:text-base max-w-xl">
            {desc}
          </p>

          {rttTitle && rttBody && (
            <div className="border-l-2 border-blue-DEFAULT bg-blue-subtle rounded-r-lg px-5 py-4 mb-7">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-blue-label mb-1.5">
                {rttTitle}
              </p>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {rttBody}
              </p>
            </div>
          )}

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary border border-blue-border hover:border-blue-DEFAULT rounded-lg px-4 py-2.5 transition-all duration-200 min-h-[44px] group/link"
          >
            <span
              className="transition-transform duration-200 group-hover/link:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
            {linkLabel}
          </a>
        </div>

        {/* Right panel — logo */}
        <div className="relative md:border-l border-t md:border-t-0 border-blue-border bg-bg-surface flex flex-col items-center justify-center px-8 py-10 overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-60" aria-hidden="true" />
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full max-w-[180px] flex items-center justify-center">
              {logo}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Brands() {
  const { t } = useTranslation();

  return (
    <section
      id="varumarken"
      className="relative overflow-hidden bg-bg-surface border-t border-blue-border py-28 md:py-36"
    >
      <FloatingBlob
        className="top-0 right-0 w-[520px] h-[380px] bg-gradient-to-bl from-blue-500/12 to-indigo-600/8 blur-[120px]"
        delay={0}
        breathDuration={12}
        driftDuration={24}
        driftX={-38}
        driftY={40}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[420px] h-[380px] bg-gradient-to-tr from-sky-400/10 to-blue-600/7 blur-[110px]"
        delay={2.5}
        breathDuration={15}
        driftDuration={28}
        driftX={32}
        driftY={-28}
      />
      <FloatingBlob
        className="top-[45%] left-[30%] w-[300px] h-[300px] bg-gradient-to-br from-indigo-400/7 to-blue-500/5 blur-[90px]"
        delay={4.5}
        breathDuration={9}
        driftDuration={20}
        driftX={-25}
        driftY={30}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-4">
            {t("brands.label")}
          </p>
          <h2 className="font-display text-display-md text-text-primary leading-tight">
            {t("brands.heading")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-text-secondary leading-relaxed max-w-2xl mb-16"
        >
          {t("brands.lead")}
        </motion.p>

        <div className="flex flex-col gap-6">
          <BrandCard
            tag={t("brands.tmeeting_tag")}
            name={t("brands.tmeeting_name")}
            desc={t("brands.tmeeting_desc")}
            link="https://www.tmeeting.se"
            linkLabel={t("brands.tmeeting_url")}
            rttTitle={t("brands.tmeeting_rtt_title")}
            rttBody={t("brands.tmeeting_rtt_body")}
            logo={
              <Image
                src="/tmeeting.jpg"
                alt={t("brands.tmeeting_name")}
                width={180}
                height={80}
                className="w-full h-auto object-contain rounded dark:brightness-90"
              />
            }
            index={0}
          />
          <BrandCard
            tag={t("brands.ease_tag")}
            name={t("brands.ease_name")}
            desc={t("brands.ease_desc")}
            link="https://www.easeaccess24.com"
            linkLabel={t("brands.ease_url")}
            logo={
              <Image
                src="/easeaccess24.svg"
                alt={t("brands.ease_name")}
                width={180}
                height={80}
                className="w-full h-auto object-contain dark:brightness-0 dark:invert"
              />
            }
            index={1}
          />
          <BrandCard
            tag={t("brands.infiniuum_tag")}
            name={t("brands.infiniuum_name")}
            desc={t("brands.infiniuum_desc")}
            link="https://infiniuum.com"
            linkLabel={t("brands.infiniuum_url")}
            logo={
              <span
                className="font-display text-display-md leading-none bg-brand-gradient bg-clip-text text-transparent select-none"
                aria-label={t("brands.infiniuum_name")}
              >
                {t("brands.infiniuum_name")}
              </span>
            }
            index={2}
          />
        </div>
      </div>
    </section>
  );
}
