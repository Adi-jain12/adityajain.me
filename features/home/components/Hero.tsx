"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CREAM = "#f1e6cf";
const POSTER_RED = "#e23a26";
const INK = "#0a0a0a";

// Horizontal gradient using the app's accent palette
// (--color-accent-dark #d45f3e, --color-accent #f58361, --color-accent-light #f9a88e)
// extended with a darkened tone on the left to mirror the reference image.
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

export function Hero() {
  return (
    <section
      aria-label="Aditya Jain — portfolio poster"
      className="relative flex w-full flex-1 flex-col overflow-hidden"
    >
      {/* Top black marquee */}
      <TopMarquee />

      {/* Cream poster area — grows to fill remaining viewport */}
      <div
        className="relative flex min-h-0 flex-1 flex-col justify-center"
        style={{ backgroundColor: CREAM }}
      >
        {/* Dotted background pattern — scoped to cream area only */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(10,10,10,0.22) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            backgroundPosition: "0 0",
            maskImage:
              "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          }}
        />

        {/* Main poster content */}
        <div className="relative w-full px-4 py-6 sm:px-10 sm:py-10 lg:px-16 lg:py-12">
          {/* Centered composition — ADITYA + tag (row), JAIN indented under "YA" (row 2), whole block centered on page */}
          <div className="mx-auto flex w-fit max-w-full flex-col">
            {/* Top row: ADITYA + tag — stacked on small screens, inline on lg+ */}
            <div className="flex flex-col items-start lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
              {/* ADITYA */}
              <motion.h1
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="z-20 self-start font-heading font-bold italic leading-[0.85] tracking-tight text-[clamp(3rem,15vw,10rem)] md:text-[clamp(4rem,11vw,10rem)]"
                style={{ color: POSTER_RED }}
              >
                ADITYA
              </motion.h1>

              {/* Black tag — centered below ADITYA on small screens, beside ADITYA on lg+ */}
              <motion.div
                initial={{ opacity: 0, y: 12, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="z-30 mt-3 flex items-start self-center lg:mt-4 lg:self-start"
              >
                <div
                  className="relative inline-flex flex-col items-start"
                  style={{
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  <span
                    className="relative z-20 inline-flex items-center justify-center rounded-[0.7rem] px-5 py-2 text-center leading-[1] tracking-[-0.04em] sm:rounded-[0.9rem] sm:px-8 sm:py-3"
                    style={{
                      backgroundColor: INK,
                      color: CREAM,
                      boxShadow: "0 18px 40px -22px rgba(0,0,0,0.45)",
                      fontSize: "clamp(1.2rem, 4.8vw, 2.4rem)",
                    }}
                  >
                    Full - stack
                  </span>
                  <span
                    className="relative z-10 -mt-3 ml-10 inline-flex items-center justify-center rounded-[0.7rem] px-5 py-2 text-center leading-[1] tracking-[-0.04em] sm:-mt-5 sm:ml-20 sm:rounded-[0.9rem] sm:px-8 sm:py-3 md:ml-24"
                    style={{
                      backgroundColor: INK,
                      color: CREAM,
                      boxShadow: "0 18px 40px -22px rgba(0,0,0,0.45)",
                      fontSize: "clamp(1.2rem, 4.8vw, 2.4rem)",
                    }}
                  >
                    developer
                  </span>
                </div>
              </motion.div>
            </div>

            {/* JAIN — indented so its left edge starts under "YA" of ADITYA */}
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="z-20 ml-[2.6em] mt-1 self-start font-heading font-bold italic leading-[0.85] tracking-tight text-[clamp(3rem,15vw,10rem)] sm:mt-2 md:mt-0 md:text-[clamp(4rem,11vw,10rem)]"
              style={{ color: POSTER_RED }}
            >
              JAIN
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Cream band with the lifted orange card sitting on top */}
      <div
        className="relative shrink-0 px-4 pt-6 sm:px-8 sm:pt-10 lg:px-12 lg:pt-14"
        style={{ backgroundColor: CREAM }}
      >
        {/* Gradient panel — content (paragraph + CTAs + sunburst) */}
        <motion.div
          initial={{ scaleY: 0.5, opacity: 0.4 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full origin-top flex-col overflow-hidden rounded-t-4xl min-h-[36svh] sm:rounded-t-[2.5rem] sm:min-h-[40svh] lg:rounded-t-[3rem] lg:min-h-[42svh]"
          style={{ backgroundImage: POSTER_GRADIENT }}
        >
        {/* Subtle dotted texture for depth, scoped to the red strip */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        />

        <div className="relative w-full px-4 pt-14 pb-20 sm:px-10 sm:pt-20 sm:pb-28 lg:px-16 lg:pt-24 lg:pb-32">
          <div className="grid grid-cols-12 items-start gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {/* Left — description + stats */}
            <div className="col-span-12 sm:col-span-7 lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[52ch] text-[14px] leading-[1.65] sm:text-base sm:leading-[1.7] lg:text-[17px]"
                style={{ color: CREAM }}
              >
                Fullstack Developer crafting high-performance, interactive web
                experiences. Focusing on scalable backend systems and seamless
                user interfaces.
              </motion.p>

              <Stats />
            </div>

            {/* Right — CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="col-span-12 flex flex-col gap-3 sm:col-span-5 sm:ml-auto sm:w-full sm:max-w-[320px] sm:gap-4 lg:col-span-4"
            >
              <CtaButton href="/projects" label="View Projects" variant="primary" />
              <CtaButton href="/about" label="About Me" variant="secondary" />
            </motion.div>
          </div>

          {/* Rotating sun — bottom right of the red panel */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 right-4 scale-75 sm:bottom-8 sm:right-8 sm:scale-100 lg:bottom-10 lg:right-10"
          >
            <Sunburst color={CREAM} />
          </motion.div>
        </div>
        </motion.div>
      </div>

      {/* Bottom metadata strip on dark page bg */}
      {/* <div className="bg-background px-6 py-5 sm:px-10 sm:py-6 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted sm:grid-cols-3 sm:items-center sm:gap-y-0 sm:text-[11px]">
          <span className="max-w-md justify-self-start normal-case tracking-normal text-[11px] leading-relaxed">
            In the mess of work &amp; life — crafted with care, shipped with
            intent.
          </span>
          <span className="hidden justify-self-center text-foreground sm:block">
            Aditya Jain
          </span>
          <span className="justify-self-start sm:justify-self-end">
            Software Engineer
          </span>
        </div>
      </div> */}
    </section>
  );
}

function CtaButton({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";
  return (
    <Link
      href={href}
      className="group relative inline-flex w-full items-center justify-between gap-4 overflow-hidden rounded-full px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-3.5 sm:text-xs md:px-7 md:py-4 md:text-sm"
      style={
        isPrimary
          ? { backgroundColor: CREAM, color: INK }
          : {
              backgroundColor: "transparent",
              color: CREAM,
              boxShadow: `inset 0 0 0 2px ${CREAM}`,
            }
      }
    >
      <span className="relative z-10">{label}</span>
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
        aria-hidden
        className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M0 6 H18 M14 1 L20 6 L14 11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

const STATS: Array<{ value: string; label: string }> = [
  { value: "2+ years", label: "Experience" },
  { value: "10+", label: "Projects" },
  { value: "400+", label: "Contributions" },
  { value: "∞", label: "Coffee" },
];

function Stats() {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-8 grid max-w-[52ch] grid-cols-4 gap-x-2 sm:mt-10 sm:gap-x-4"
      style={{ color: CREAM }}
    >
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={
            "flex flex-col gap-1.5 sm:gap-2" +
            (i === 0
              ? ""
              : " border-l border-[rgba(241,230,207,0.18)] pl-2 sm:pl-4")
          }
        >
          <dd className="font-heading text-[1.25rem] font-bold leading-none tracking-tight sm:text-2xl lg:text-[1.75rem]">
            {stat.value}
          </dd>
          <dt className="font-mono text-[9px] uppercase tracking-[0.18em] opacity-70 sm:text-[10px] sm:tracking-[0.22em]">
            {stat.label}
          </dt>
        </div>
      ))}
    </motion.dl>
  );
}

function Sunburst({ color }: { color: string }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className="animate-[spin_24s_linear_infinite]"
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <g key={i} transform={`rotate(${angle} 28 28)`}>
            <path
              d="M28 4 L30 22 L28 28 L26 22 Z"
              fill={color}
            />
          </g>
        );
      })}
      <circle cx="28" cy="28" r="3.5" fill={color} />
    </svg>
  );
}

function TopMarquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      <div
        className="marquee-track flex w-max items-center py-3 sm:py-4"
        style={{ ["--marquee-duration" as string]: "45s" }}
        aria-hidden="true"
      >
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center font-playfair font-black italic uppercase text-[12px] leading-none tracking-[0.01em] sm:text-[14px] md:text-[16px] lg:text-[18px]"
            style={{ color: CREAM }}
          >
            <span className="px-4 sm:px-6 lg:px-7">{word}</span>
            <span
              aria-hidden
              className="not-italic text-[9px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
              style={{ color: CREAM }}
            >
              &#10042;
            </span>
          </span>
        ))}
      </div>
      {/* Bottom vignette to match the layered poster feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-6 sm:h-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
