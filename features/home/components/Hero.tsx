"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const CREAM = "#f5e9d3";
const POSTER_RED = "#e23a26";
const INK = "#1a1a1a";

const MARQUEE_WORDS = [
  "BAKING BREAD",
  "DESIGNING TYPE",
  "WRITING CODE",
  "SHIPPING PRODUCTS",
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

const STATS: Array<{ value: string; label: string }> = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "400+", label: "Contributions on GitHub" },
  { value: "∞", label: "Cups of Coffee" },
];

const GITHUB_BARS = [3, 5, 2, 6, 4, 7, 3, 5, 8, 4, 6, 3, 5, 7, 4, 6, 5, 8, 4, 7];

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

export function Hero() {
  return (
    <section
      aria-label="Aditya Jain — portfolio home"
      className="relative flex w-full flex-1 flex-col overflow-hidden"
    >
      <SkillsTicker />

      <div
        className="relative flex min-h-0 flex-1 flex-col"
        style={{ backgroundColor: CREAM }}
      >
        <BinaryBackdrop />

        <div className="relative w-full px-5 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <HeroContent />
        </div>
      </div>

      <div
        className="relative shrink-0 px-4 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5 lg:px-12 lg:pb-10"
        style={{ backgroundColor: CREAM }}
      >
        <InfoDashboard />
      </div>
    </section>
  );
}

function SkillsTicker() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div
      className="relative w-full overflow-hidden border-b border-[rgba(26,26,26,0.08)]"
      style={{ backgroundColor: CREAM }}
    >
      <div
        className="marquee-track flex w-max items-center py-2.5 sm:py-3"
        style={{ ["--marquee-duration" as string]: "55s" }}
        aria-hidden="true"
      >
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center font-mono text-[9px] font-medium uppercase tracking-[0.22em] sm:text-[10px] md:text-[11px]"
            style={{ color: INK, opacity: 0.75 }}
          >
            <span className="px-4 sm:px-6">{word}</span>
            <span aria-hidden className="text-[6px] opacity-50">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function BinaryBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ctext x='8' y='22' font-family='monospace' font-size='11' fill='%231a1a1a'%3E01001%3C/text%3E%3Ctext x='48' y='52' font-family='monospace' font-size='11' fill='%231a1a1a'%3E10110%3C/text%3E%3Ctext x='12' y='82' font-family='monospace' font-size='11' fill='%231a1a1a'%3E01101%3C/text%3E%3Ctext x='62' y='108' font-family='monospace' font-size='11' fill='%231a1a1a'%3E11010%3C/text%3E%3C/svg%3E")`,
        backgroundSize: "120px 120px",
      }}
    />
  );
}

function HeroContent() {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      animate="visible"
      className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 lg:gap-10"
    >
      <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_minmax(280px,380px)] lg:gap-12 xl:grid-cols-[1fr_minmax(300px,420px)] xl:gap-16">
        <div className="flex flex-col gap-1">
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold italic leading-[0.88] tracking-[-0.03em] text-[clamp(3.5rem,14vw,9.5rem)]"
            style={{ color: POSTER_RED }}
          >
            ADITYA
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold italic leading-[0.88] tracking-[-0.03em] text-[clamp(3.5rem,14vw,9.5rem)]"
            style={{ color: POSTER_RED }}
          >
            JAIN
          </motion.h1>
        </div>

        <motion.div variants={fadeUpSubtle} className="lg:pb-2">
          <DescriptionBlock />
        </motion.div>
      </div>

      <motion.div
        variants={fadeUpSubtle}
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
      >
        <CtaButton href="/projects" label="View Projects" variant="primary" />
        <CtaButton href="/about" label="About Me" variant="secondary" />
      </motion.div>
    </motion.div>
  );
}

function DescriptionBlock() {
  return (
    <div className="relative pl-5 sm:pl-6">
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2"
        style={{ borderColor: POSTER_RED }}
      />
      <p
        className="font-heading text-lg font-semibold leading-snug sm:text-xl"
        style={{ color: INK }}
      >
        Full-stack developer
      </p>
      <p
        className="mt-3 max-w-[36ch] text-[14px] leading-[1.65] sm:text-[15px] sm:leading-[1.7]"
        style={{ color: INK, opacity: 0.85 }}
      >
        I build high-performance, interactive web experiences — scalable backends
        meeting interfaces tuned for motion, rhythm and the quiet details that
        make software feel inevitable.
      </p>
    </div>
  );
}

function InfoDashboard() {
  return (
    <motion.div
      initial={{ scaleY: 0.96, opacity: 0.5, y: 16 }}
      animate={{ scaleY: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT_QUART }}
      className="relative w-full origin-top overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] lg:rounded-[2.25rem]"
      style={{ backgroundColor: POSTER_RED }}
    >
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.5 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="relative grid grid-cols-1 gap-0 divide-y divide-white/15 lg:grid-cols-4 lg:divide-x lg:divide-y-0"
      >
        <DashboardColumn className="lg:col-span-1">
          <ColumnLabel>Focused on building</ColumnLabel>
          <motion.p
            variants={fadeUpSubtle}
            className="mt-4 font-heading text-xl font-bold leading-snug text-white sm:text-2xl"
          >
            Scalable products with performance &amp; user experience in mind.
          </motion.p>
          <motion.dl
            variants={fadeUpSubtle}
            className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dd className="font-heading text-2xl font-bold leading-none text-white sm:text-[1.75rem]">
                  {stat.value}
                </dd>
                <dt className="font-mono text-[8px] uppercase leading-tight tracking-[0.14em] text-white/75 sm:text-[9px]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </DashboardColumn>

        <DashboardColumn>
          <ColumnLabel>Tech stack</ColumnLabel>
          <motion.ul
            variants={fadeUpSubtle}
            className="mt-5 flex flex-wrap gap-2"
          >
            {TECH_STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/35 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white sm:text-[10px]"
              >
                {tech}
              </li>
            ))}
          </motion.ul>
        </DashboardColumn>

        <DashboardColumn>
          <ColumnLabel>Currently building</ColumnLabel>
          <motion.div variants={fadeUpSubtle} className="mt-5 space-y-3">
            <span
              aria-hidden
              className="inline-block font-mono text-lg text-white/90"
            >
              &lt;/&gt;
            </span>
            <p className="max-w-[28ch] text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
              A developer toolkit to boost productivity and ship faster.
            </p>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
              Stay tuned for more
              <span aria-hidden>→</span>
            </span>
          </motion.div>
        </DashboardColumn>

        <DashboardColumn className="relative">
          <ColumnLabel>Availability</ColumnLabel>
          <motion.div variants={fadeUpSubtle} className="mt-5 space-y-6">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(0,0,0,0.2)] px-4 py-2">
              <span aria-hidden className="presence-dot" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                Open to work
              </span>
            </div>

            <div>
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
                GitHub activity
              </p>
              <div
                className="flex items-end gap-[3px]"
                aria-hidden
              >
                {GITHUB_BARS.map((h, i) => (
                  <span
                    key={i}
                    className="w-[5px] rounded-sm bg-white/35 sm:w-[6px]"
                    style={{ height: `${h * 3}px` }}
                  />
                ))}
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
                400+ contributions
              </p>
            </div>
          </motion.div>

          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-5 right-5 hidden sm:block lg:bottom-6 lg:right-6"
          >
            <Sunburst color="rgba(255,255,255,0.85)" />
          </motion.div>
        </DashboardColumn>
      </motion.div>
    </motion.div>
  );
}

function DashboardColumn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-6 py-8 sm:px-8 sm:py-10 lg:px-7 lg:py-9 xl:px-9 ${className}`}
    >
      {children}
    </div>
  );
}

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/65 sm:text-[10px]">
      {children}
    </p>
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
      className="btn-magnetic group inline-flex w-full items-center justify-between gap-4 rounded-full px-6 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-transform duration-300 sm:w-auto sm:min-w-[200px] sm:px-7 sm:py-4 sm:text-[12px]"
      style={
        isPrimary
          ? {
              backgroundColor: POSTER_RED,
              color: "#fff",
            }
          : {
              backgroundColor: "transparent",
              color: INK,
              boxShadow: `inset 0 0 0 1.5px ${INK}`,
            }
      }
    >
      <span>{label}</span>
      <svg
        width="22"
        height="10"
        viewBox="0 0 24 12"
        fill="none"
        aria-hidden
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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

function Sunburst({ color }: { color: string }) {
  return (
    <svg
      width="48"
      height="48"
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
