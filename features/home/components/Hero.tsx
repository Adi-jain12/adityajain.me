"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CREAM = "#f1e6cf";
const POSTER_RED = "#e23a26";
const INK = "#0a0a0a";

const MARQUEE_WORDS = [
  "SOFTWARE ENGINEER",
  "ENGINEERING & DESIGN",
  "BUILT WITH CARE",
  "TYPESCRIPT · NEXT.JS",
  "SHIPPING PRODUCTS",
  "INDEPENDENT MAKER",
];

export function Hero() {
  return (
    <section
      aria-label="Aditya Jain — portfolio poster"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: CREAM }}
    >
      {/* Top black marquee */}
      <TopMarquee />

      {/* Dotted background pattern */}
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
      <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-10 pb-14 sm:px-10 sm:pt-14 sm:pb-20 lg:px-16 lg:pt-16 lg:pb-24">
        <div className="relative grid grid-cols-12 gap-x-4 sm:gap-x-6 lg:gap-x-8">
          {/* HELLO — top left */}
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 z-20 font-heading font-bold italic leading-[0.85] tracking-tight text-[20vw] sm:text-[16vw] md:col-span-5 md:text-[10vw] lg:text-[9.5vw] xl:text-[9rem]"
            style={{ color: POSTER_RED }}
          >
            HELLO
          </motion.h1>

          {/* Black tag — top right */}
          <motion.div
            initial={{ opacity: 0, y: 12, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="z-30 col-span-12 mt-4 flex items-start justify-start md:col-span-7 md:col-start-6 md:mt-2 md:justify-end"
          >
            <span
              className="relative inline-flex items-center rounded-[28px] px-7 py-3 font-script text-3xl leading-none text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
              style={{
                backgroundColor: INK,
                boxShadow: "0 18px 40px -20px rgba(0,0,0,0.35)",
              }}
            >
              <span className="block">
                software
                <br />
                engineer
              </span>
            </span>
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
              I&rsquo;M
            </motion.h2>

            {/* Center photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-5 z-10 self-center md:col-span-4"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]">
                <Image
                  src="/images/about/profile.jpeg"
                  alt="Portrait of Aditya Jain"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 32vw, 42vw"
                  className="object-cover object-[center_25%]"
                />
                {/* subtle warm tint to harmonize with cream bg */}
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(241,230,207,0.05) 0%, rgba(226,58,38,0.06) 100%)",
                  }}
                />
              </div>
            </motion.div>

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
              ADITYA
            </motion.h2>
          </div>

          {/* Bottom row — CTAs (left) and paragraph (right) */}
          <div className="col-span-12 mt-8 grid grid-cols-12 gap-x-4 gap-y-8 sm:mt-10 sm:gap-x-6 md:mt-12 lg:gap-x-8">
            {/* Bottom-left CTAs with arrows */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="col-span-12 flex flex-col gap-y-5 sm:col-span-5"
            >
              <PosterLink href="/contact-us" label="SCHEDULE A CALL" />
              <PosterLink
                href="/projects"
                label="MY PORTFOLIO"
                indent
              />
            </motion.div>

            {/* Bottom-right paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="col-span-12 max-w-[44ch] text-[15px] leading-[1.7] sm:col-span-7 sm:col-start-6 sm:text-base md:col-span-6 md:col-start-7 md:text-justify"
              style={{ color: INK }}
            >
              A software engineer based in India, currently at{" "}
              <span className="font-semibold" style={{ color: POSTER_RED }}>
                Yudiz Solutions
              </span>
              , where I architect and ship production-grade web apps from the
              first commit to the live URL. I care about clean code, thoughtful
              design, and software that feels{" "}
              <em style={{ color: POSTER_RED }}>inevitable</em>.
            </motion.p>
          </div>
        </div>

        {/* Decorative red sunburst — bottom right */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 lg:bottom-14 lg:right-14"
        >
          <Sunburst color={POSTER_RED} />
        </motion.div>
      </div>
    </section>
  );
}

function PosterLink({
  href,
  label,
  indent = false,
}: {
  href: string;
  label: string;
  indent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-3 self-start font-mono text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm ${
        indent ? "pl-12 sm:pl-16" : ""
      }`}
      style={{ color: POSTER_RED }}
    >
      <span className="border-b-2 pb-1" style={{ borderColor: POSTER_RED }}>
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
          stroke={POSTER_RED}
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
      className="relative w-full overflow-hidden border-y"
      style={{ backgroundColor: INK, borderColor: INK }}
    >
      <div
        className="marquee-track flex w-max items-center py-2.5 sm:py-3"
        style={{ ["--marquee-duration" as string]: "40s" }}
        aria-hidden="true"
      >
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-white sm:text-xs"
          >
            <span className="px-6 sm:px-10">{word}</span>
            <span className="text-white/70">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
