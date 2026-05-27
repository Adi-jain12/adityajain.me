"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiCode } from "react-icons/fi";

const CREAM = "#f3ead8";

const TICKER_WORDS = [
  "Designing type",
  "Writing code",
  "Shipping products",
  "Baking bread",
  "Arranging pixels",
  "Solving problems",
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

const STATS = [
  { value: "2+", label: "Years experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "400+", label: "Contributions on GitHub" },
  { value: "\u221e", label: "Cups of coffee" },
];

const ACTIVITY_BARS = [14, 31, 25, 44, 62, 35, 70, 42, 58, 79, 45, 88, 50, 67, 38, 73, 57, 49, 77, 36, 63, 52, 32, 46];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export function Hero() {
  return (
    <section
      aria-label="Aditya Jain portfolio home"
      className="home-poster relative h-[calc(100svh-4rem)] overflow-hidden bg-[#f3ead8] text-[#080808] sm:h-[calc(100svh-5rem)]"
    >
      <TopTicker />

      <div className="home-canvas relative h-[calc(100%-44px)] overflow-hidden sm:h-[calc(100%-50px)]">
        <BinaryBackdrop />
        <Annotations />

        <div className="home-stage relative z-10 mx-auto h-full w-full max-w-[1488px] px-5 sm:px-10 lg:px-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="home-headline-block"
          >
            <PosterHeadline />

            <motion.p
              variants={fadeUp}
              className="home-subcopy font-mono"
            >
              Full-stack developer crafting high-performance, interactive web experiences
              <br className="hidden sm:block" /> with scalable backends and clean interfaces.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="home-cta-row"
            >
              <PosterButton href="/projects" variant="primary">
                View my work
              </PosterButton>
              <PosterButton href="/about" variant="secondary">
                About me
              </PosterButton>
            </motion.div>
          </motion.div>

          <div className="home-canvas-notes pointer-events-none">
            <span>Est. 2024</span>
            <span className="inline-flex items-center gap-2">
              Scroll <FiArrowRight className="rotate-90" aria-hidden />
            </span>
          </div>

          <InfoPanel />
        </div>

        <div
          aria-hidden
          className="home-n-badge pointer-events-none absolute bottom-7 left-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full bg-[#111] font-mono text-sm font-bold text-white shadow-[0_18px_35px_rgba(0,0,0,0.2)] sm:flex"
        >
          N
        </div>
      </div>
    </section>
  );
}

function TopTicker() {
  const words = [...TICKER_WORDS, ...TICKER_WORDS, ...TICKER_WORDS];

  return (
    <div className="relative h-11 overflow-hidden border-y border-white/10 bg-[#090909] sm:h-[50px]">
      <div
        className="marquee-track flex h-full w-max items-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#d6c7ad]/75 sm:text-[12px]"
        style={{ ["--marquee-duration" as string]: "58s" }}
        aria-hidden
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-flex items-center">
            <span className="px-5 sm:px-8">{word}</span>
            <span className="h-1 w-1 rounded-full bg-[#f1d7b8]" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#090909] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#090909] to-transparent" />
    </div>
  );
}

function Annotations() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden justify-between px-10 pt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-black/35 lg:flex xl:px-20">
      <span className="inline-flex items-center gap-3">
        <span className="h-px w-7 bg-current" />
        Portfolio / Vol. 01
      </span>
      <span className="inline-flex items-center gap-3">
        India
        <span className="h-1 w-1 rounded-full bg-current" />
        UTC+5:30
        <span className="h-px w-7 bg-current" />
      </span>
    </div>
  );
}

function BinaryBackdrop() {
  const columns = Array.from({ length: 36 });
  const digitLines = "0 1 1 0 1 0 0 1 1 0 1 0 1 1 0 0 1 0 1 0";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.18]"
      style={{ backgroundColor: CREAM }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),rgba(255,255,255,0)_58%)]" />
      {columns.map((_, index) => (
        <span
          key={index}
          className="absolute top-0 whitespace-pre-line font-mono text-[11px] leading-[1.58] text-black/15"
          style={{
            left: `${(index / columns.length) * 100}%`,
            transform: `translateY(-${(index % 5) * 18}px)`,
          }}
        >
          {digitLines.replaceAll(" ", "\n")}
        </span>
      ))}
    </div>
  );
}

function PosterHeadline() {
  return (
    <motion.h1
      variants={fadeUp}
      className="home-title text-balance font-black tracking-[0]"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <span className="home-title-row">
        <span>Hello</span>
        <MediaPill src="/images/home/pill-portrait.png" alt="" />
        <span>I&apos;m Aditya</span>
      </span>
      <span className="home-title-row home-title-row-second">
        <span>I build</span>
        <MediaPill src="/images/home/pill-abstract.png" alt="" />
        <span>digital experiences</span>
      </span>
    </motion.h1>
  );
}

function MediaPill({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="home-media-pill relative inline-flex shrink-0 overflow-hidden rounded-full align-middle">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 640px) 96px, (max-width: 1024px) 168px, 216px"
        className="object-cover"
      />
    </span>
  );
}

function PosterButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: ReactNode;
}) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      className={[
        "group inline-flex h-12 items-center justify-between rounded-full px-7 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-14 sm:min-w-[225px] sm:text-[12px]",
        isPrimary
          ? "bg-[#e34528] text-white shadow-[0_18px_38px_rgba(212,63,35,0.32)] hover:bg-[#f05a38]"
          : "border border-black/45 text-black hover:border-black hover:bg-black/5",
      ].join(" ")}
    >
      <span>{children}</span>
      <FiArrowUpRight
        aria-hidden
        className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

function InfoPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: EASE }}
      className="home-info-panel"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,142,78,0.65),transparent_38%),linear-gradient(100deg,#230805_0%,#7d210f_32%,#d84223_66%,#f05835_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen [background-image:radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="home-info-grid relative z-10">
        <section className="home-panel-section home-panel-intro">
          <div className="home-pill-badge">
            <span className="presence-dot" />
            Available for select work
            <span className="hidden sm:inline">Q2 2026</span>
          </div>

          <p className="home-panel-copy">
            I help startups and teams build fast, scalable products with clean code,
            intuitive interfaces and thoughtful UX.
          </p>

          <dl className="home-stats">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd>{stat.value}</dd>
                <dt>{stat.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        <section className="home-panel-section home-panel-tech">
          <PanelKicker>Tech stack</PanelKicker>
          <ul className="home-tech-list">
            {TECH_STACK.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <p className="home-mini-note">and more...</p>
        </section>

        <section className="home-panel-section home-panel-explore">
          <PanelKicker>Currently exploring</PanelKicker>
          <div className="home-code-icon">
            <FiCode aria-hidden />
          </div>
          <p className="home-explore-copy">
            Design systems, AI tooling and serverless architectures. Building things
            that merge performance with experience.
          </p>
          <Link href="/about" className="home-text-link">
            <FiArrowRight aria-hidden /> More on my journey
          </Link>
        </section>

        <section className="home-panel-section home-panel-connect">
          <PanelKicker>Let&apos;s connect</PanelKicker>
          <div className="home-connect-actions">
            <PanelButton href="/projects" primary label="View projects" meta="Featured / 06" />
            <PanelButton href="/about" label="About me" meta="Story / Stack / Process" />
          </div>

          <div className="home-activity">
            <p>GitHub activity</p>
            <div aria-hidden className="home-activity-bars">
              {ACTIVITY_BARS.map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <span>400+ contributions</span>
          </div>
        </section>
      </div>

      <span aria-hidden className="home-sparkle" />
    </motion.div>
  );
}

function PanelKicker({ children }: { children: ReactNode }) {
  return (
    <h2 className="home-panel-kicker">
      <span className="h-1 w-1 rounded-full bg-current" />
      {children}
    </h2>
  );
}

function PanelButton({
  href,
  label,
  meta,
  primary = false,
}: {
  href: string;
  label: string;
  meta: string;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "group inline-flex w-full items-center justify-between rounded-full border px-5 py-3 font-mono uppercase transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        primary
          ? "border-black/20 bg-[#f3ead8] text-black hover:bg-white"
          : "border-[#f3ead8]/45 text-[#f3ead8] hover:bg-[#f3ead8]/10",
      ].join(" ")}
    >
      <span className="flex flex-col items-start">
        <span className="text-[12px] font-bold tracking-[0.16em]">{label}</span>
        <span className="text-[8px] tracking-[0.18em] opacity-65">{meta}</span>
      </span>
      <FiArrowRight
        aria-hidden
        className="text-lg transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
