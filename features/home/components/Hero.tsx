"use client";

import Link from "next/link";
import Image from "next/image";
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
      className="relative w-full overflow-hidden"
    >
      {/* Top black marquee */}
      <TopMarquee />

      {/* Cream poster area */}
      <div className="relative" style={{ backgroundColor: CREAM }}>
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
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-10 pb-12 sm:px-10 sm:pt-14 sm:pb-16 lg:px-16 lg:pt-16 lg:pb-20">
        <div className="relative grid grid-cols-12 gap-x-4 sm:gap-x-6 lg:gap-x-8">
          {/* HELLO — top left */}
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 z-20 font-heading font-bold italic leading-[0.85] tracking-tight text-[20vw] sm:text-[16vw] md:col-span-5 md:text-[10vw] lg:text-[9.5vw] xl:text-[9rem]"
            style={{ color: POSTER_RED }}
          >
            ADITYA
          </motion.h1>

          {/* Black tag — top right (stacked rounded pills) */}
          <motion.div
            initial={{ opacity: 0, y: 12, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="z-30 col-span-12 mt-4 flex items-start justify-start md:col-span-7 md:col-start-6 md:mt-2 md:justify-end"
          >
            <div className="relative inline-flex flex-col items-start leading-none">
              {/* top pill — "software" */}
              <span
                className="relative z-20 inline-flex items-center rounded-full px-6 pt-1.5 pb-2 font-script italic leading-none sm:px-7 sm:pt-2 sm:pb-2.5"
                style={{
                  backgroundColor: INK,
                  color: CREAM,
                  boxShadow: "0 18px 40px -20px rgba(0,0,0,0.4)",
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                }}
              >
                software
              </span>
              {/* bottom pill — "engineer", nudged right + pulled up to overlap */}
              <span
                className="relative z-10 -mt-6 ml-16 inline-flex items-center rounded-full px-6 pt-1.5 pb-2 font-script italic leading-none sm:-mt-7 sm:ml-24 sm:px-7 sm:pt-2 sm:pb-2.5 md:ml-28"
                style={{
                  backgroundColor: INK,
                  color: CREAM,
                  boxShadow: "0 18px 40px -20px rgba(0,0,0,0.4)",
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                }}
              >
                engineer
              </span>
            </div>
          </motion.div>

          {/* I'M and ADITYA row — typography flanking the centered image */}
          <div className="col-span-12 mt-2 grid grid-cols-12 items-center gap-x-4 sm:mt-4 sm:gap-x-6 lg:gap-x-8">
            {/* I'M — left */}
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="col-span-3 z-20 font-heading font-bold italic leading-[0.85] tracking-tight text-[18vw] sm:text-[14vw] md:text-[9vw] lg:text-[8.5vw] xl:text-[8rem]"
              style={{ color: POSTER_RED }}
            >
           
            </motion.h2>

            {/* Center photo */}

            {/* ADITYA — right */}
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="col-span-4 z-20 font-heading font-bold italic leading-[0.85] tracking-tight text-[18vw] sm:text-[14vw] md:col-span-5 md:text-[10vw] lg:text-[9.5vw] xl:text-[9rem]"
              style={{ color: POSTER_RED }}
            >
              JAIN
            </motion.h2>
          </div>

        </div>
        </div>
      </div>

      {/* Gradient panel — content (paragraph + CTAs + sunburst) */}
      <motion.div
        initial={{ scaleY: 0.5, opacity: 0.4 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full origin-top overflow-hidden"
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

        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-12 pb-20 sm:px-10 sm:pt-14 sm:pb-24 lg:px-16 lg:pt-16 lg:pb-28">
          <div className="grid grid-cols-12 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
            {/* Left — CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="col-span-12 flex flex-col gap-y-5 sm:col-span-5"
            >
              <PosterLink
                href="/contact-us"
                label="SCHEDULE A CALL"
                tone={CREAM}
              />
              <PosterLink
                href="/projects"
                label="MY PORTFOLIO"
                tone={CREAM}
                indent
              />
            </motion.div>

            {/* Right — paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="col-span-12 max-w-[44ch] text-[15px] leading-[1.7] sm:col-span-7 sm:col-start-6 sm:text-base md:col-span-6 md:col-start-7 md:text-justify"
              style={{ color: CREAM }}
            >
              A software engineer based in India, currently at{" "}
              <span className="font-bold underline decoration-2 underline-offset-4">
                Yudiz Solutions
              </span>
              , where I architect and ship production-grade web apps from the
              first commit to the live URL. I care about clean code, thoughtful
              design, and software that feels{" "}
              <em className="font-semibold">inevitable</em>.
            </motion.p>
          </div>

          {/* Rotating sun — bottom right of the red panel */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10"
          >
            <Sunburst color={CREAM} />
          </motion.div>
        </div>
      </motion.div>

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

function PosterLink({
  href,
  label,
  indent = false,
  tone = POSTER_RED,
}: {
  href: string;
  label: string;
  indent?: boolean;
  tone?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-3 self-start font-mono text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm ${
        indent ? "pl-12 sm:pl-16" : ""
      }`}
      style={{ color: tone }}
    >
      <span className="border-b-2 pb-1" style={{ borderColor: tone }}>
        {label}
      </span>
      <svg
        width="44"
        height="14"
        viewBox="0 0 44 14"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      >
        <path
          d="M0 7 H38 M30 1 L40 7 L30 13"
          stroke={tone}
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </Link>
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
