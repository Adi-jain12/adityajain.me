"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { OrangeCard } from "./OrangeCard";

// ───────────────── Tokens ─────────────────

const CREAM = "#F1E7D2";
const POSTER_RED = "#E04B22";
const CTA_RED = "#cd5230";
const CODE_PILL_BLUE = "#1e3a8a";
const INK = "#0A0A0A";

// Headline inline pills (face + blob) — shared box so both scale with the title
const HEADLINE_PILL = {
  height: "0.98em",
  width: "2.35em",
} as const;

const HEADLINE_PILL_SHELL_STYLE: React.CSSProperties = {
  backgroundColor: POSTER_RED,
  boxShadow:
    "0 12px 28px -16px rgba(224, 75, 34, 0.6), inset 0 0 0 1px rgba(0,0,0,0.04)",
};

const HEADLINE_PILL_BLUE_SHELL_STYLE: React.CSSProperties = {
  backgroundColor: CODE_PILL_BLUE,
  boxShadow:
    "0 12px 28px -16px rgba(30, 58, 138, 0.55), inset 0 0 0 1px rgba(0,0,0,0.04)",
};

const HEADLINE_PILL_INNER_RING: React.CSSProperties = {
  boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.18)",
};

const MARQUEE_WORDS = [
  "DESIGNING TYPE",
  "WRITING CODE",
  "SHIPPING PRODUCTS",
  "BAKING BREAD",
  "ARRANGING PIXELS",
  "SOLVING PROBLEMS",
];

// ───────────────── Motion presets ─────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

// ═════════════════════════════════════════════════════════
// Main
// ═════════════════════════════════════════════════════════

export function Hero() {
  return (
    <section
      data-fit-viewport
      aria-label="Aditya Jain — portfolio"
      className="relative grid h-full min-h-0 w-full flex-1 grid-rows-[auto_minmax(0,1.08fr)_minmax(0,0.92fr)] overflow-hidden sm:grid-rows-[auto_minmax(0,1.1fr)_minmax(0,0.9fr)] lg:grid-rows-[auto_minmax(0,1.12fr)_minmax(0,0.88fr)] 2xl:grid-rows-[auto_minmax(0,1.14fr)_minmax(0,0.86fr)] [@media(max-height:900px)]:grid-rows-[auto_minmax(0,1.02fr)_minmax(0,0.98fr)]"
      style={{ backgroundColor: CREAM }}
    >
      <TopMarquee />

      {/* Cream hero — headline + CTAs, left-aligned with top margin */}
      <div
        className="paper-grain relative flex min-h-0 flex-1 flex-col overflow-hidden"
        style={{ backgroundColor: CREAM }}
      >
        <HeroIntro />
      </div>

      {/* Orange card — fills bottom grid row, no overflow */}
      <div
        className="relative flex min-h-0 flex-1 flex-col overflow-hidden"
        style={{ backgroundColor: CREAM }}
      >
        <OrangeCard />
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════
// Top marquee
// ═════════════════════════════════════════════════════════

function TopMarquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div
      aria-hidden
      className="relative w-full shrink-0 overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      <div
        className="marquee-track flex w-max items-center py-1.5 sm:py-2"
        style={{ ["--marquee-duration" as string]: "70s" }}
      >
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center font-mono text-[8.5px] uppercase tracking-[0.28em] sm:text-[10px] md:text-[11px] 2xl:text-[12px]"
            style={{ color: CREAM, opacity: 0.7 }}
          >
            <span className="px-4 sm:px-6 md:px-8">{word}</span>
            <span aria-hidden className="opacity-60">
              ·
            </span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16"
        style={{
          background: `linear-gradient(to right, ${INK} 0%, rgba(10,10,10,0) 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16"
        style={{
          background: `linear-gradient(to left, ${INK} 0%, rgba(10,10,10,0) 100%)`,
        }}
      />
    </div>
  );
}

// ═════════════════════════════════════════════════════════
// Cream hero — left-aligned headline + CTAs, top margin only
// ═════════════════════════════════════════════════════════

function HeroIntro() {
  return (
    <div className="home-shell relative z-10 mt-6 flex min-h-0 flex-1 flex-col items-start justify-center gap-3 px-3 sm:mt-8 sm:gap-4 sm:px-6 md:mt-9 lg:mt-10 lg:gap-5 lg:px-12 2xl:mt-11 2xl:gap-6 2xl:px-14">
      <HeroHeadline />
      <HeroFooter />
    </div>
  );
}

function HeroHeadline() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-start"
    >
      <div
        className="home-headline font-display flex flex-col gap-[0.14em] text-left font-black leading-[0.90] tracking-[-0.035em] sm:gap-[0.20em] md:gap-[0.20em] 2xl:gap-[0.22em] 2xl:tracking-[-0.038em]"
        style={{ color: INK }}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-start gap-x-[0.16em] gap-y-1 md:flex-nowrap md:whitespace-nowrap"
        >
          <span className="font-bold">Hello</span>
          <FacePill />
          <span className="sm:whitespace-nowrap font-bold">I&rsquo;m Aditya</span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-start gap-x-[0.16em] gap-y-1 md:flex-nowrap md:whitespace-nowrap"
        >
          <span className="font-bold">I build</span>
          <BlueBlob />
          <span className="sm:whitespace-nowrap font-bold">web experiences</span>
        </motion.div>
      </div>

      <motion.p
        variants={fadeUpSubtle}
        className="mt-2 max-w-[80ch] text-left font-mono text-[9px] leading-[1.55] tracking-[0.02em] sm:mt-4.5 sm:text-[10px] md:text-[11px] lg:text-[12px] 2xl:mt-5 2xl:max-w-[72ch]"
        style={{ color: INK, opacity: 0.78 }}
      >
        Full-stack developer crafting high-performance, interactive web
        experiences with scalable backends and clean interfaces.
      </motion.p>
    </motion.div>
  );
}

function HeadlinePill({
  children,
  className = "",
  style,
  initial,
  animate,
  transition,
  "aria-hidden": ariaHidden,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  initial?: { scale?: number; opacity?: number; rotate?: number };
  animate?: { scale?: number; opacity?: number; rotate?: number };
  transition?: { duration?: number; delay?: number; ease?: [number, number, number, number] };
  "aria-hidden"?: boolean;
}) {
  return (
    <motion.span
      initial={initial}
      animate={animate}
      transition={transition}
      aria-hidden={ariaHidden}
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden align-middle ${className}`}
      style={{
        height: HEADLINE_PILL.height,
        width: HEADLINE_PILL.width,
        borderRadius: "9999px",
        ...style,
      }}
    >
      {children}
    </motion.span>
  );
}

function HeadlinePillInner({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="absolute inset-[8%] overflow-hidden rounded-full"
      style={HEADLINE_PILL_INNER_RING}
    >
      {children}
    </span>
  );
}

function FacePill() {
  return (
    <HeadlinePill
      initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.7, ease: EASE }}
      style={HEADLINE_PILL_SHELL_STYLE}
    >
      <HeadlinePillInner>
        <Image
          src="/images/about/profile.jpeg"
          alt=""
          width={140}
          height={140}
          priority
          className="h-full w-full object-cover"
        />
      </HeadlinePillInner>
    </HeadlinePill>
  );
}

function BlueBlob() {
  return (
    <HeadlinePill
      initial={{ scale: 0.55, opacity: 0, rotate: 12 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 1.05, delay: 0.85, ease: EASE }}
      aria-hidden
      style={HEADLINE_PILL_BLUE_SHELL_STYLE}
    >
      <HeadlinePillInner>
        <span
          className="flex h-full w-full items-center justify-center font-mono font-bold leading-none tracking-tight"
          style={{ color: CREAM, fontSize: "0.54em" }}
        >
          {"</>"}
        </span>
      </HeadlinePillInner>
    </HeadlinePill>
  );
}

function HeroFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
      className="inline-grid min-w-[17rem] grid-cols-2 gap-2 sm:min-w-[20rem] sm:gap-3 md:min-w-[25rem] lg:min-w-[26rem] 2xl:min-w-[30rem] 2xl:gap-4"
      style={{ color: INK }}
    >
      <CtaPrimary href="/projects" label="View My Work" />
      <CtaSecondary href="/about" label="About Me" />
    </motion.div>
  );
}

// ═════════════════════════════════════════════════════════
// Hero CTA buttons
// ═════════════════════════════════════════════════════════

const CTA_BUTTON_CLASS =
  "btn-magnetic group relative inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full px-4 py-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] sm:px-5 sm:py-2.5 sm:text-[11px] md:px-6 md:py-3 2xl:gap-2.5 2xl:px-7 2xl:py-3.5 2xl:text-[12px] 2xl:tracking-[0.2em]";

function CtaPrimary({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={`${CTA_BUTTON_CLASS} overflow-hidden`}
      style={{
        backgroundColor: CTA_RED,
        color: CREAM,
        boxShadow: "0 14px 32px -16px rgba(224,75,34,0.65)",
      }}
    >
      <span className="relative z-10">{label}</span>
      <ArrowUpRight className="relative z-10 h-3 w-3 sm:h-3.5 sm:w-3.5" />
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0))",
        }}
      />
    </Link>
  );
}

function CtaSecondary({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={`${CTA_BUTTON_CLASS} border transition-colors duration-300 hover:bg-[#0a0a0a] hover:text-[#F1E7D2]`}
      style={{
        color: INK,
        borderColor: "rgba(10,10,10,0.65)",
      }}
    >
      <span>{label}</span>
      <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 2xl:h-4 2xl:w-4" />
    </Link>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={`transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
      aria-hidden
    >
      <path
        d="M3 9 L9 3 M4 3 H9 V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
