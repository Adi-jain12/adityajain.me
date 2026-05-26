"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const CREAM = "#f1e6cf";
const POSTER_RED = "#e23a26";
const INK = "#0a0a0a";

const POSTER_GRADIENT =
  "linear-gradient(90deg, #1f0805 0%, #6a1a0d 15%, #b13a1e 32%, #d45f3e 55%, #ea6f44 80%, #f58361 100%)";

const MARQUEE_WORDS = [
  "SHIPPING PRODUCTS",
  "BAKING BREAD",
  "DESIGNING TYPE",
  "WAXING POETICALLY",
  "ARRANGING PIXELS",
  "WRITING CODE",
];

const TECH_STACK = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Motion",
];

const STATS: Array<{ value: string; label: string }> = [
  { value: "2+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "400+", label: "Commits" },
  { value: "∞", label: "Coffee" },
];

// ───────────────── Motion presets ─────────────────

const EASE_OUT_QUART: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_OUT_QUART },
  },
};

const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_QUART },
  },
};

const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// ───────────────── Main ─────────────────

export function Hero() {
  return (
    <section
      aria-label="Aditya Jain — portfolio poster"
      className="relative flex w-full flex-1 flex-col overflow-hidden"
    >
      <TopMarquee />

      {/* Cream poster — grows to fill remaining viewport */}
      <div
        className="relative flex min-h-0 flex-1 flex-col justify-center"
        style={{ backgroundColor: CREAM }}
      >
        {/* Dotted backdrop, vignette-masked */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(10,10,10,0.22) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse at center, black 55%, transparent 100%)",
          }}
        />

        {/* Top annotation strip — premium "edition" markers */}
        <AnnotationStrip />

        {/* Centerpiece composition */}
        <div className="relative w-full px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <PosterHeading />
        </div>

        {/* Bottom annotation strip — scroll cue */}
        <BottomAnnotation />
      </div>

      {/* Cream pad holding the gradient card */}
      <div
        className="relative shrink-0 px-4 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10"
        style={{ backgroundColor: CREAM }}
      >
        <GradientCard />
      </div>
    </section>
  );
}

// ───────────────── Top marquee (supportive, slowed, softened) ─────────────────

function TopMarquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      <div
        className="marquee-track flex w-max items-center py-3 sm:py-3.5"
        style={{ ["--marquee-duration" as string]: "70s" }}
        aria-hidden="true"
      >
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center font-playfair font-black italic uppercase text-[10px] leading-none tracking-[0.06em] sm:text-[11px] md:text-[13px] lg:text-[14px]"
            style={{ color: CREAM, opacity: 0.6 }}
          >
            <span className="px-5 sm:px-7 lg:px-8">{word}</span>
            <span
              aria-hidden
              className="not-italic text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]"
              style={{ color: CREAM, opacity: 0.7 }}
            >
              &#10042;
            </span>
          </span>
        ))}
      </div>
      {/* Edge fades for a softer, less-dominant feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24"
        style={{
          background: `linear-gradient(to right, ${INK} 0%, rgba(10,10,10,0) 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24"
        style={{
          background: `linear-gradient(to left, ${INK} 0%, rgba(10,10,10,0) 100%)`,
        }}
      />
      {/* Bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-5 sm:h-7"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}

// ───────────────── Cream-area annotation strips ─────────────────

function AnnotationStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: EASE_OUT_QUART }}
      className="pointer-events-none absolute inset-x-0 top-0 z-20 hidden items-start justify-between px-6 pt-5 sm:flex sm:px-10 sm:pt-6 lg:px-16 lg:pt-7"
      style={{ color: INK }}
    >
      <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] opacity-55 lg:text-[10px]">
        <span className="inline-block h-px w-6 bg-current opacity-60" />
        <span>Portfolio / Vol. 01</span>
      </div>
      <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] opacity-55 lg:text-[10px]">
        <span>India · UTC+5:30</span>
        <span className="inline-block h-px w-6 bg-current opacity-60" />
      </div>
    </motion.div>
  );
}

function BottomAnnotation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1, ease: EASE_OUT_QUART }}
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden items-end justify-between px-6 pb-4 sm:flex sm:px-10 sm:pb-5 lg:px-16 lg:pb-6"
      style={{ color: INK }}
    >
      <div className="font-mono text-[9px] uppercase tracking-[0.32em] opacity-55 lg:text-[10px]">
        Est. 2024
      </div>
      <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] opacity-55 lg:text-[10px]">
        <span>Scroll</span>
        <motion.span
          aria-hidden
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
          className="inline-block"
        >
          ↓
        </motion.span>
      </div>
    </motion.div>
  );
}

// ───────────────── Poster heading: ADITYA · tag · JAIN ─────────────────

function PosterHeading() {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      animate="visible"
      className="mx-auto flex w-fit max-w-full flex-col"
    >
      {/* Row 1: ADITYA + black "Full-stack developer" tag */}
      <div className="flex flex-col items-start gap-2 sm:gap-3 lg:flex-row lg:items-end lg:gap-8 xl:gap-10">
        <motion.h1
          variants={fadeUp}
          className="z-20 self-start font-heading font-bold italic leading-[0.85] tracking-[-0.03em] text-[clamp(3.25rem,15vw,10rem)] md:text-[clamp(4rem,11vw,10rem)]"
          style={{ color: POSTER_RED }}
        >
          ADITYA
        </motion.h1>

        {/* Tag — anchored bottom on lg+ so it tucks against ADITYA & nests into JAIN's row */}
        <motion.div
          variants={fadeUpSubtle}
          className="z-30 self-center lg:mb-[0.55em] lg:self-end"
        >
          <BlackTag />
        </motion.div>
      </div>

      {/* Row 2: JAIN — indented to align under "YA" of ADITYA */}
      <motion.h2
        variants={fadeUp}
        className="z-20 -mt-1 ml-[2.6em] self-start font-heading font-bold italic leading-[0.85] tracking-[-0.03em] text-[clamp(3.25rem,15vw,10rem)] sm:mt-0 md:text-[clamp(4rem,11vw,10rem)]"
        style={{ color: POSTER_RED }}
      >
        JAIN
      </motion.h2>
    </motion.div>
  );
}

function BlackTag() {
  // Two-line offset pill — kept editorial, with proper hyphenation
  const pillBase =
    "relative inline-flex items-center justify-center rounded-[0.65rem] px-4 py-1.5 text-center font-heading italic leading-[1] tracking-[-0.03em] sm:rounded-[0.85rem] sm:px-7 sm:py-2.5";
  return (
    <div className="relative inline-flex flex-col items-start">
      <span
        className={pillBase}
        style={{
          backgroundColor: INK,
          color: CREAM,
          boxShadow:
            "0 14px 32px -18px rgba(0,0,0,0.55), 0 2px 0 rgba(0,0,0,0.25)",
          fontSize: "clamp(1.1rem, 4.4vw, 2.1rem)",
        }}
      >
        Full-stack
      </span>
      <span
        className={`${pillBase} -mt-2 ml-9 sm:-mt-3.5 sm:ml-16 md:ml-20`}
        style={{
          backgroundColor: INK,
          color: CREAM,
          boxShadow:
            "0 14px 32px -18px rgba(0,0,0,0.55), 0 2px 0 rgba(0,0,0,0.25)",
          fontSize: "clamp(1.1rem, 4.4vw, 2.1rem)",
        }}
      >
        developer
      </span>
    </div>
  );
}

// ───────────────── Lower gradient card ─────────────────

function GradientCard() {
  return (
    <motion.div
      initial={{ scaleY: 0.55, opacity: 0.35, y: 12 }}
      animate={{ scaleY: 1, opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: EASE_OUT_QUART }}
      className="relative flex w-full origin-top flex-col overflow-hidden rounded-t-4xl min-h-[42svh] sm:rounded-t-[2.5rem] sm:min-h-[46svh] lg:rounded-t-[3rem] lg:min-h-[48svh]"
      style={{ backgroundImage: POSTER_GRADIENT }}
    >
      {/* Soft dotted texture for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 80%, transparent 100%)",
        }}
      />

      {/* Decorative corner marks (top-left & top-right) */}
      <CornerMark className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-8 lg:top-8" />
      <CornerMark className="absolute right-4 top-4 sm:right-6 sm:top-6 lg:right-8 lg:top-8" />

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.55 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="relative w-full px-5 pt-10 pb-12 sm:px-10 sm:pt-12 sm:pb-16 lg:px-16 lg:pt-14 lg:pb-20"
      >
        {/* Status row — availability + currently building */}
        <motion.div
          variants={fadeUpSubtle}
          className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          style={{ color: CREAM }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(241,230,207,0.28)] bg-[rgba(241,230,207,0.06)] px-3.5 py-1.5 backdrop-blur-[2px]">
            <span aria-hidden className="presence-dot" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] sm:text-[11px]">
              Available for select work · Q2 2026
            </span>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] opacity-85 sm:text-[11px]">
            <span aria-hidden className="opacity-70">
              ↳ Now
            </span>
            <span>Shipping design systems &amp; AI tooling</span>
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="mt-10 grid grid-cols-12 items-start gap-x-4 gap-y-10 sm:mt-12 sm:gap-x-8 lg:mt-14 lg:gap-x-12">
          {/* Left — pitch, stack, stats */}
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              variants={fadeUpSubtle}
              className="max-w-[58ch] text-[15px] leading-[1.7] sm:text-[16px] sm:leading-[1.75] lg:text-[18px]"
              style={{ color: CREAM }}
            >
              I build high-performance, interactive web experiences — scalable
              backends meeting interfaces tuned for motion, rhythm and the
              quiet details that make software feel{" "}
              <em className="italic">inevitable</em>.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div variants={fadeUpSubtle} className="mt-8 sm:mt-10">
              <div className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.28em] opacity-65 sm:text-[10px]"
                style={{ color: CREAM }}
              >
                <span>Stack</span>
                <span className="h-px flex-1 bg-[rgba(241,230,207,0.25)]" />
              </div>
              <ul className="no-scrollbar -mx-1 flex flex-wrap gap-2 overflow-x-auto sm:gap-2.5">
                {TECH_STACK.map((tech) => (
                  <li
                    key={tech}
                    className="group inline-flex shrink-0 cursor-default items-center rounded-full border border-[rgba(241,230,207,0.32)] bg-[rgba(241,230,207,0.05)] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-[2px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[rgba(241,230,207,0.14)] sm:text-[11px]"
                    style={{ color: CREAM }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats — inline, refined */}
            <motion.dl
              variants={fadeUpSubtle}
              className="mt-10 grid max-w-[44ch] grid-cols-4 gap-x-2 sm:mt-12 sm:gap-x-5"
              style={{ color: CREAM }}
            >
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    "flex flex-col gap-1.5 sm:gap-2" +
                    (i === 0
                      ? ""
                      : " border-l border-[rgba(241,230,207,0.22)] pl-2 sm:pl-5")
                  }
                >
                  <dd className="font-heading text-[1.35rem] font-bold leading-none tracking-tight sm:text-[1.65rem] lg:text-[1.85rem]">
                    {stat.value}
                  </dd>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-70 sm:text-[10px] sm:tracking-[0.22em]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right — CTAs */}
          <motion.div
            variants={fadeUpSubtle}
            className="col-span-12 flex flex-col gap-3 sm:max-w-[340px] lg:col-span-4 lg:ml-auto lg:w-full lg:gap-3.5"
          >
            <CtaButton
              href="/projects"
              label="View Projects"
              hint="Featured · 06"
              variant="primary"
            />
            <CtaButton
              href="/about"
              label="About Me"
              hint="Story · Stack · Process"
              variant="secondary"
            />
            <a
              href="mailto:hello@adityajain.me"
              className="group mt-1 inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-[0.22em] opacity-80 transition-opacity duration-300 hover:opacity-100 sm:text-[11px]"
              style={{ color: CREAM }}
            >
              <span className="link-underline">or write me a note</span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Rotating sun — bottom right */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: EASE_OUT_QUART }}
          className="absolute bottom-4 right-4 scale-75 sm:bottom-6 sm:right-6 sm:scale-100 lg:bottom-8 lg:right-8"
        >
          <Sunburst color={CREAM} />
        </motion.div>
      </motion.div>

      {/* Decorative corner marks (bottom) */}
      <CornerMark className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8" />
    </motion.div>
  );
}

// ───────────────── CTA button ─────────────────

function CtaButton({
  href,
  label,
  hint,
  variant = "primary",
}: {
  href: string;
  label: string;
  hint?: string;
  variant?: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";
  return (
    <Link
      href={href}
      className="btn-magnetic group relative inline-flex w-full items-center justify-between gap-4 overflow-hidden rounded-full px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] sm:px-6 sm:py-4 sm:text-[12px] md:px-7 md:text-[13px]"
      style={
        isPrimary
          ? {
              backgroundColor: CREAM,
              color: INK,
              boxShadow:
                "0 18px 40px -22px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(0,0,0,0.06)",
            }
          : {
              backgroundColor: "transparent",
              color: CREAM,
              boxShadow: `inset 0 0 0 1.5px ${CREAM}`,
            }
      }
    >
      {/* Sliding wash on hover */}
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
        style={{
          background: isPrimary
            ? "linear-gradient(90deg, rgba(10,10,10,0.06), rgba(10,10,10,0.0))"
            : "linear-gradient(90deg, rgba(241,230,207,0.16), rgba(241,230,207,0.0))",
        }}
      />
      <span className="relative z-10 flex flex-col items-start gap-0.5">
        <span>{label}</span>
        {hint ? (
          <span className="font-mono text-[8.5px] tracking-[0.28em] opacity-60 sm:text-[9px]">
            {hint}
          </span>
        ) : null}
      </span>
      <svg
        width="24"
        height="12"
        viewBox="0 0 24 12"
        fill="none"
        aria-hidden
        className="relative z-10 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
      >
        <path
          d="M0 6 H20 M15 1 L21 6 L15 11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

// ───────────────── Decorative bits ─────────────────

function Sunburst({ color }: { color: string }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className="animate-[spin_30s_linear_infinite]"
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <g key={i} transform={`rotate(${angle} 28 28)`}>
            <path d="M28 4 L30 22 L28 28 L26 22 Z" fill={color} />
          </g>
        );
      })}
      <circle cx="28" cy="28" r="3.5" fill={color} />
    </svg>
  );
}

function CornerMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none inline-block opacity-30 ${className}`}
      style={{ color: CREAM }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
