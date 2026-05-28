"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// ───────────────── Tokens ─────────────────

const CREAM = "#F1E7D2";
const CREAM_SOFT = "#EFE3CB";
const POSTER_RED = "#E04B22";
const INK = "#0A0A0A";

const POSTER_GRADIENT =
  "linear-gradient(90deg, #1f0805 0%, #6a1a0d 15%, #b13a1e 32%, #d45f3e 55%, #ea6f44 80%, #f58361 100%)";

// 🎛 Orange card width — tweak this value to resize the bottom card.
// Accepts any CSS width: "100%", "1260px", "92%", "min(100%, 1320px)", etc.
const ORANGE_CARD_MAX_WIDTH = "95%";

const MARQUEE_WORDS = [
  "DESIGNING TYPE",
  "WRITING CODE",
  "SHIPPING PRODUCTS",
  "BAKING BREAD",
  "ARRANGING PIXELS",
  "SOLVING PROBLEMS",
];

const TECH_STACK = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "React",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Shadcn UI",
  "Redux Toolkit",
  "Docker",
];

type Stat = { value: string; label: string; shortLabel: string };

const STATS: Stat[] = [
  { value: "2+", label: "Years\nExperience", shortLabel: "Years\nexp." },
  { value: "10+", label: "Projects\nDelivered", shortLabel: "Projects" },
  {
    value: "400+",
    label: "Contributions\non GitHub",
    shortLabel: "GitHub\ncommits",
  },
  { value: "∞", label: "Cups of\nCoffee", shortLabel: "Cups of\ncoffee" },
];

const BAR_HEIGHTS = [
  18, 32, 26, 48, 38, 60, 44, 72, 55, 80, 62, 90, 70, 85, 58, 74, 46, 62, 38,
  28, 50, 42, 66,
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
      className="relative grid w-full min-h-0 flex-1 grid-rows-[auto_minmax(0,0.9fr)_minmax(0,1.1fr)] overflow-hidden sm:grid-rows-[auto_minmax(0,1fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_minmax(0,0.95fr)_minmax(0,1fr)]"
      style={{ backgroundColor: CREAM }}
    >
      <TopMarquee />

      {/* Cream hero — fixed proportion via grid row */}
      <div
        className="paper-grain relative flex min-h-0 flex-col justify-between overflow-hidden"
        style={{ backgroundColor: CREAM }}
      >
        <CornerLabels />
        <HeroHeadline />
        <HeroFooter />
      </div>

      {/* Orange card — bottom proportion via grid row */}
      <div
        className="relative flex min-h-0 flex-col overflow-hidden px-2 sm:px-3 lg:px-5"
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
            className="flex items-center font-mono text-[8.5px] uppercase tracking-[0.28em] sm:text-[10px] md:text-[11px]"
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
// Cream hero — corner labels, headline, footer row
// ═════════════════════════════════════════════════════════

function CornerLabels() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
      className="pointer-events-none relative z-20 flex shrink-0 items-center justify-between px-3 pt-2 sm:px-6 sm:pt-3 lg:px-12 lg:pt-4"
      style={{ color: INK }}
    >

    </motion.div>
  );
}

function HeroHeadline() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-3 pt-1 pb-1 sm:px-6 sm:pt-2 sm:pb-1 lg:items-start lg:px-12 lg:pt-3"
    >
      <div
        className="font-display text-center font-black leading-[0.94] tracking-[-0.035em] lg:text-left"
        style={{
          color: INK,
          fontSize: "clamp(1.35rem, 4.4vw + 0.15rem, 4.9rem)",
        }}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-x-[0.16em] gap-y-1 lg:flex-nowrap lg:justify-start lg:whitespace-nowrap"
        >
          <span className="font-bold">Hello</span>
          <FacePill />
          <span className="sm:whitespace-nowrap font-bold">I&rsquo;m Aditya</span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-0.5 flex flex-wrap items-center justify-center gap-x-[0.16em] gap-y-1 sm:mt-1 lg:flex-nowrap lg:justify-start lg:whitespace-nowrap"
        >
          <span className="font-bold">I build</span>
          <BlueBlob />
          <span className="sm:whitespace-nowrap font-bold">digital experiences</span>
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.p
        variants={fadeUpSubtle}
        className="mt-1.5 max-w-[56ch] text-center font-mono text-[9px] leading-[1.55] tracking-[0.02em] sm:mt-2 sm:text-[10px] md:text-[11px] lg:text-left lg:text-[12px]"
        style={{ color: INK, opacity: 0.78 }}
      >
        Full-stack developer crafting high-performance, interactive web
        experiences with scalable backends and clean interfaces.
      </motion.p>
    </motion.div>
  );
}

function FacePill() {
  return (
    <motion.span
      initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.7, ease: EASE }}
      className="relative inline-flex shrink-0 items-center align-middle"
      style={{
        height: "0.78em",
        width: "1.55em",
        backgroundColor: POSTER_RED,
        borderRadius: "9999px",
        boxShadow:
          "0 12px 28px -16px rgba(224, 75, 34, 0.6), inset 0 0 0 1px rgba(0,0,0,0.04)",
      }}
    >
      <span
        className="absolute inset-y-[6%] left-[6%] aspect-square overflow-hidden rounded-full"
        style={{ boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.18)" }}
      >
        <Image
          src="/images/about/profile.jpeg"
          alt=""
          width={140}
          height={140}
          priority
          className="h-full w-full object-cover"
        />
      </span>
    </motion.span>
  );
}

function BlueBlob() {
  return (
    <motion.span
      initial={{ scale: 0.55, opacity: 0, rotate: 12 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 1.05, delay: 0.85, ease: EASE }}
      className="relative inline-flex shrink-0 items-center align-middle"
      style={{ height: "0.82em", width: "1.5em" }}
      aria-hidden
    >
      <span className="blob-float relative block h-full w-full">
        <svg
          viewBox="0 0 200 110"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <radialGradient id="blob-core" cx="0.32" cy="0.28" r="0.95">
              <stop offset="0%" stopColor="#A9C0FF" />
              <stop offset="22%" stopColor="#5C7CF5" />
              <stop offset="55%" stopColor="#1F36C0" />
              <stop offset="82%" stopColor="#0A1376" />
              <stop offset="100%" stopColor="#02062E" />
            </radialGradient>
            <radialGradient id="blob-spec" cx="0.22" cy="0.22" r="0.32">
              <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <linearGradient id="blob-rim" x1="0" y1="0.5" x2="1" y2="0.5">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="55%" stopColor="rgba(124, 152, 255, 0.0)" />
              <stop offset="100%" stopColor="rgba(255, 187, 130, 0.55)" />
            </linearGradient>
          </defs>
          <path
            d="M30 55 Q 18 18, 78 14 Q 130 9, 168 28 Q 198 46, 188 76 Q 175 102, 122 102 Q 70 104, 42 92 Q 12 78, 30 55 Z"
            fill="url(#blob-core)"
          />
          <path
            d="M30 55 Q 18 18, 78 14 Q 130 9, 168 28 Q 198 46, 188 76 Q 175 102, 122 102 Q 70 104, 42 92 Q 12 78, 30 55 Z"
            fill="url(#blob-rim)"
            opacity="0.6"
          />
          <ellipse cx="68" cy="38" rx="32" ry="14" fill="url(#blob-spec)" />
          <ellipse
            cx="135"
            cy="78"
            rx="22"
            ry="6"
            fill="rgba(255,255,255,0.18)"
          />
        </svg>
      </span>
    </motion.span>
  );
}

function HeroFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
      className="relative z-10 mx-auto grid w-full max-w-[1200px] shrink-0 grid-cols-[auto_1fr_auto] items-center gap-2 px-3 pb-2.5 pt-1 sm:gap-3 sm:px-6 sm:pb-3 sm:pt-2 lg:px-12 lg:pb-3.5 lg:pt-2"
      style={{ color: INK }}
    >

      <div className="col-span-3 flex items-center justify-center gap-2 sm:col-span-1 sm:justify-start sm:gap-3">
        <CtaPrimary href="/projects" label="View My Work" />
        <CtaSecondary href="/about" label="About Me" />
      </div>

    </motion.div>
  );
}

// ═════════════════════════════════════════════════════════
// Hero CTA buttons
// ═════════════════════════════════════════════════════════

function CtaPrimary({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="btn-magnetic group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-3.5 py-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] sm:px-5 sm:py-2.5 sm:text-[11px] md:px-6 md:py-3"
      style={{
        backgroundColor: POSTER_RED,
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
      className="btn-magnetic group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-[#0a0a0a] hover:text-[#F1E7D2] sm:px-5 sm:py-2.5 sm:text-[11px] md:px-6 md:py-3"
      style={{
        color: INK,
        borderColor: "rgba(10,10,10,0.65)",
      }}
    >
      <span>{label}</span>
      <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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

// ═════════════════════════════════════════════════════════
// Orange Card
// ═════════════════════════════════════════════════════════

function OrangeCard() {
  return (
    <motion.div
      initial={{ scaleY: 0.6, opacity: 0.45, y: 12 }}
      animate={{ scaleY: 1, opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: EASE }}
      className="relative mx-auto flex min-h-0 w-full flex-1 origin-top flex-col overflow-hidden rounded-t-[1.4rem] sm:rounded-t-[1.8rem] lg:rounded-t-[2.2rem]"
      style={{
        backgroundImage: POSTER_GRADIENT,
        maxWidth: ORANGE_CARD_MAX_WIDTH,
      }}
    >
      {/* dotted texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 22%, black 92%, transparent 100%)",
        }}
      />

      <CornerMark className="absolute left-3 top-3 sm:left-5 sm:top-5" />
      <CornerMark className="absolute right-3 top-3 sm:right-5 sm:top-5" />

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.45 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="relative grid h-full grid-cols-12 gap-x-3 gap-y-3 px-4 py-4 sm:gap-x-4 sm:gap-y-2.5 sm:px-5 sm:py-4 md:gap-x-5 md:px-6 md:py-4 lg:gap-x-7 lg:px-9 lg:py-5"
        style={{ color: CREAM }}
      >
        {/* Col 1 — bio + stats */}
        <motion.div
          variants={fadeUpSubtle}
          className="col-span-12 flex flex-col gap-1.5 sm:col-span-12 sm:gap-2 md:col-span-6 lg:col-span-4"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(241,231,210,0.32)] bg-[rgba(241,231,210,0.08)] px-2.5 py-1 backdrop-blur-[2px] sm:px-3 sm:py-1.5">
            <span aria-hidden className="presence-dot" />
            <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] sm:text-[9.5px]">
              Available for select work · Q2 2026
            </span>
          </div>

          <p
            className="max-w-[38ch] font-display text-[12px] font-medium leading-normal tracking-[-0.005em] sm:text-[12.5px] md:text-[13px] lg:text-[14px]"
            style={{ color: CREAM }}
          >
            I help startups and teams build fast, scalable products with clean
            code, intuitive interfaces and thoughtful UX.
          </p>

          <dl className="grid grid-cols-4 gap-1.5 pt-2 sm:gap-3 lg:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-0 flex-col"
              >
                <dd className="font-display text-[1.05rem] font-bold leading-none tracking-tight sm:text-[1.15rem] md:text-[1.25rem] lg:text-[1.5rem]">
                  {stat.value}
                </dd>
                <dt className="mt-1 whitespace-pre-line font-mono text-[7px] uppercase leading-tight tracking-[0.14em] opacity-80 sm:text-[8px] sm:tracking-[0.18em] lg:text-[8.5px] lg:tracking-[0.2em]">
                  <span className="lg:hidden">{stat.shortLabel}</span>
                  <span className="hidden lg:inline">{stat.label}</span>
                </dt>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Col 2 — tech stack */}
        <motion.div
          variants={fadeUpSubtle}
          className="col-span-12 flex flex-col gap-1.5 sm:col-span-6 md:col-span-6 lg:col-span-3 lg:border-l lg:border-[rgba(241,231,210,0.16)] lg:pl-8"
        >
          <SectionLabel>Tech Stack</SectionLabel>
          <ul className="flex flex-wrap gap-1 sm:gap-1.5">
            {TECH_STACK.map((tech) => (
              <li
                key={tech}
                className="group inline-flex cursor-default items-center rounded-full border border-[rgba(241,231,210,0.32)] bg-[rgba(241,231,210,0.06)] px-2 py-[3px] font-mono text-[9px] tracking-[0.04em] backdrop-blur-[2px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[rgba(241,231,210,0.16)] sm:px-2.5 sm:py-1 sm:text-[10px] lg:text-[10.5px]"
                style={{ color: CREAM }}
              >
                {tech}
              </li>
            ))}
          </ul>
          <span className="mt-auto font-mono text-[9px] italic opacity-70 sm:text-[9.5px]">
            and more...
          </span>
        </motion.div>

        {/* Col 3 — currently exploring */}
        <motion.div
          variants={fadeUpSubtle}
          className="col-span-12 flex flex-col gap-1.5 sm:col-span-6 md:col-span-6 lg:col-span-2 lg:border-l lg:border-[rgba(241,231,210,0.16)] lg:pl-8"
        >
          <SectionLabel>Currently Exploring</SectionLabel>
          <div className="flex items-start gap-2">
            <span
              aria-hidden
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-mono text-[10px] sm:h-9 sm:w-9 sm:text-[12px]"
              style={{
                backgroundColor: "rgba(10,10,10,0.7)",
                color: CREAM,
                boxShadow: "0 10px 24px -14px rgba(0,0,0,0.6)",
              }}
            >
              {"</>"}
            </span>
            <p className="font-display text-[10.5px] leading-[1.4] tracking-[-0.005em] opacity-95 sm:text-[11px] lg:text-[11.5px]">
              Design systems, AI tooling and serverless architectures. Building
              things that merge performance with experience.
            </p>
          </div>
          <a
            href="/about"
            className="group mt-auto inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.22em] opacity-85 transition-opacity hover:opacity-100 sm:text-[9.5px]"
            style={{ color: CREAM }}
          >
            <span aria-hidden>→</span>
            <span className="link-underline">More on my journey</span>
          </a>
        </motion.div>

        {/* Col 4 — let's connect */}
        <motion.div
          variants={fadeUpSubtle}
          className="col-span-12 flex flex-col gap-1.5 sm:col-span-12 md:col-span-6 lg:col-span-3 lg:border-l lg:border-[rgba(241,231,210,0.16)] lg:pl-8"
        >
          <SectionLabel>Let&rsquo;s Connect</SectionLabel>

          <div className="grid grid-cols-1 gap-1.5">
            {/* GitHub bar chart */}
            <div className="flex items-end justify-between gap-3 pt-1 lg:mt-1 lg:items-end lg:justify-between lg:pl-0">
              <div className="flex flex-col gap-0.5">
                <div className="font-mono text-[7.5px] uppercase tracking-[0.22em] opacity-75 sm:text-[8.5px] lg:text-[9.5px]">
                  GitHub Activity
                </div>
                <BarChart />
                <div className="font-mono text-[8px] tracking-[0.04em] opacity-80 sm:text-[8.5px] lg:text-[9.5px]">
                  400+ contributions
                </div>
              </div>
              <Sparkle className="hidden shrink-0 lg:block" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <CornerMark className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5" />
      <CornerMark className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5" />
    </motion.div>
  );
}

// ═════════════════════════════════════════════════════════
// Sub-pieces
// ═════════════════════════════════════════════════════════

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.28em] opacity-80 sm:text-[9.5px]">
      <span aria-hidden className="opacity-80">
        ·
      </span>
      <span>{children}</span>
    </div>
  );
}

function BarChart() {
  return (
    <div
      aria-hidden
      className="flex h-5 items-end gap-[2px] sm:h-6 md:h-7 lg:h-8"
      style={{ width: "min(100%, 220px)", maxWidth: "100%" }}
    >
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="bar-rise inline-block w-[2.5px] rounded-[1px] sm:w-[3px] lg:w-[4px]"
          style={{
            height: `${h}%`,
            backgroundColor: "rgba(241,231,210,0.85)",
            ["--bar-h" as string]: "1",
            animationDelay: `${0.6 + i * 0.025}s`,
          }}
        />
      ))}
    </div>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <motion.span
      animate={{ rotate: [0, 12, 0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
      className={className}
      style={{ color: CREAM_SOFT }}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2 L12.6 9.4 L20 11 L12.6 12.6 L11 20 L9.4 12.6 L2 11 L9.4 9.4 Z"
          fill="currentColor"
        />
      </svg>
    </motion.span>
  );
}

function CornerMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none inline-block opacity-30 ${className}`}
      style={{ color: CREAM }}
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 1 V11 M1 6 H11"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}