"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  User,
  Briefcase,
  Rocket,
  CheckCircle2,
  Coffee,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const CREAM = "#f1e7d2";

const POSTER_GRADIENT = `
  radial-gradient(
    circle at 82% 50%,
    rgba(255,140,70,0.22) 0%,
    rgba(255,140,70,0.10) 24%,
    transparent 46%
  ),
  linear-gradient(
    90deg,
    #2a120d 0%,
    #3a1710 14%,
    #562014 32%,
    #742817 48%,
    #94311b 64%,
    #bc4122 82%,
    #e85a2f 100%
  )
`;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const STATS = [
  { value: "2+", label: "Years Experience", Icon: User },
  { value: "10+", label: "Projects Delivered", Icon: Briefcase },
  { value: "400+", label: "Features Shipped", Icon: Rocket },
  { value: "∞", label: "Cups of Coffee", Icon: Coffee },
];

const WHAT_I_BRING = [
  { title: "End-to-End Development", sub: "From idea to production" },
  { title: "Clean & Maintainable Code", sub: "Built to scale" },
  { title: "Problem Solving", sub: "Analytical approach" },
  { title: "User-Centered Thinking", sub: "Better products, happier users" },
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z"
        fill={CREAM}
        opacity={0.85}
      />
    </svg>
  );
}

function IconTile({
  Icon,
}: {
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 2xl:h-10 2xl:w-10"
      style={{
        backgroundColor: "#0e0e0e",
        color: CREAM,
        boxShadow: "0 10px 24px -14px rgba(0,0,0,0.55)",
      }}
    >
      <Icon className="h-3.5 w-3.5 2xl:h-4 2xl:w-4" strokeWidth={1.6} />
    </span>
  );
}

function IconRing({
  Icon,
}: {
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <span
      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full 2xl:h-8 2xl:w-8"
      style={{
        border: "1px solid rgba(241,231,210,0.35)",
        backgroundColor: "rgba(241,231,210,0.06)",
        color: CREAM,
      }}
    >
      <Icon className="h-3 w-3 2xl:h-3.5 2xl:w-3.5" strokeWidth={1.6} />
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mb-1 shrink-0 font-mono text-[9.5px] uppercase tracking-[0.26em] 2xl:mb-1.5 2xl:text-[10.5px]"
      style={{ color: CREAM, opacity: 0.7 }}
    >
      {children}
    </div>
  );
}

export function OrangeCard() {
  return (
    <motion.div
      initial={{ scaleY: 0.6, opacity: 0.45, y: 12 }}
      animate={{ scaleY: 1, opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.15, ease: EASE }}
      className="home-shell @container/orange relative flex min-h-0 max-h-full w-full flex-1 origin-top flex-col overflow-hidden rounded-t-[1.4rem] sm:rounded-t-[1.8rem] lg:rounded-t-[2.2rem] 2xl:rounded-t-[2.4rem]"
      style={{
        backgroundImage: POSTER_GRADIENT,
        color: CREAM,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
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

      <Sparkle className="pointer-events-none absolute bottom-3 right-4 h-4 w-4 2xl:bottom-5 2xl:right-6 2xl:h-5 2xl:w-5" />

      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
        }}
        initial="hidden"
        animate="visible"
        className="relative grid h-full max-h-full min-h-0 w-full grid-cols-12 gap-x-4 gap-y-4 overflow-hidden px-5 py-4 sm:px-6 md:gap-x-5 md:px-7 md:py-4 lg:gap-x-6 [@media(max-height:900px)]:gap-y-3 [@media(max-height:900px)]:py-3 [@media(max-height:780px)]:gap-y-2.5 [@media(max-height:780px)]:py-2.5 2xl:gap-x-10 2xl:px-10 2xl:py-5 min-[2560px]:gap-x-12 min-[2560px]:px-12"
      >
        {/* Col 1 — Headline + CTA */}
        <motion.div
          variants={fadeUp}
          className="col-span-12 flex min-h-0 min-w-0 flex-col justify-center gap-2.5 md:col-span-5 md:gap-3 [@media(max-height:900px)]:gap-2 2xl:gap-3.5"
        >
          <div
            className="inline-flex max-w-full w-fit items-center gap-1.5 rounded-full px-2.5 py-1 2xl:gap-2 2xl:px-3 2xl:py-1.5"
            style={{
              border: "1px solid rgba(241,231,210,0.35)",
              backgroundColor: "rgba(241,231,210,0.06)",
            }}
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{
                backgroundColor: "#4ade80",
                boxShadow: "0 0 8px rgba(74,222,128,0.9)",
              }}
            />
            <span className="min-w-0 font-mono text-[8.5px] uppercase leading-tight tracking-[0.18em] 2xl:text-[9.5px]">
              Available for full-time opportunities
            </span>
          </div>

          <h1
            className="min-w-0 text-balance text-[15px] font-semibold leading-[1.2] tracking-[-0.02em] lg:text-[16px] [@media(max-height:900px)]:text-[14px] [@media(max-height:900px)]:leading-[1.18] 2xl:text-[19px] min-[2560px]:text-[20px]"
            style={{ color: CREAM }}
          >
            Building scalable products with clean architecture and thoughtful
            user experiences.
          </h1>

          <div
            className="h-px w-full shrink-0"
            style={{ backgroundColor: "rgba(241,231,210,0.22)" }}
          />

          <p
            className="min-w-0 font-mono text-[10px] leading-[1.55] 2xl:text-[11.5px]"
            style={{ color: "rgba(241,231,210,0.85)" }}
          >
            I help businesses and teams turn ideas into production-ready web
            applications that are fast, reliable and built to grow.
          </p>

          <div className="flex min-w-0 flex-wrap items-center gap-2 pt-0.5">
            <a
              href="#projects"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] transition-transform hover:-translate-y-0.5 2xl:gap-2 2xl:px-4 2xl:py-2 2xl:text-[10px]"
              style={{ backgroundColor: CREAM, color: "#1a1a1a" }}
            >
              View Projects
              <ArrowUpRight className="h-3 w-3 2xl:h-3.5 2xl:w-3.5" strokeWidth={2} />
            </a>
            <a
              href="#resume"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] transition-transform hover:-translate-y-0.5 2xl:gap-2 2xl:px-4 2xl:py-2 2xl:text-[10px]"
              style={{
                border: "1px solid rgba(241,231,210,0.4)",
                color: CREAM,
              }}
            >
              Download Resume
              <Download className="h-3 w-3 2xl:h-3.5 2xl:w-3.5" strokeWidth={2} />
            </a>
          </div>
        </motion.div>

        {/* Col 2 — Stats */}
        <motion.div
          variants={fadeUp}
          className="col-span-12 flex min-h-0 min-w-0 flex-col justify-center gap-2.5 md:col-span-3 md:gap-3 md:border-l md:pl-5 lg:pl-6 2xl:gap-3.5 2xl:pl-8"
          style={{ borderColor: "rgba(241,231,210,0.18)" }}
        >
          {STATS.map(({ value, label, Icon }) => (
            <div key={label} className="flex min-w-0 items-center gap-2.5 2xl:gap-3">
              <IconTile Icon={Icon} />
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <div
                  className="text-[1.15rem] font-semibold leading-none tracking-tight lg:text-[1.2rem] 2xl:text-[1.35rem]"
                  style={{ color: CREAM }}
                >
                  {value}
                </div>
                <div
                  className="min-w-0 font-mono text-[8.5px] leading-snug 2xl:text-[9.5px]"
                  style={{ color: "rgba(241,231,210,0.78)" }}
                >
                  {label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Col 3 — What I Bring */}
        <motion.div
          variants={fadeUp}
          className="col-span-12 flex min-h-0 min-w-0 flex-col justify-center overflow-hidden md:col-span-4 md:border-l md:pl-5 lg:pl-6 2xl:pl-8"
          style={{ borderColor: "rgba(241,231,210,0.18)" }}
        >
          <SectionLabel>What I Bring</SectionLabel>
          <ul className="flex min-h-0 min-w-0 flex-col gap-2 2xl:gap-2.5">
            {WHAT_I_BRING.map(({ title, sub }) => (
              <li key={title} className="flex min-w-0 items-start gap-2 2xl:gap-2.5">
                <IconRing Icon={CheckCircle2} />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span
                    className="min-w-0 text-[11px] font-medium leading-[1.2] 2xl:text-[12px]"
                    style={{ color: CREAM }}
                  >
                    {title}
                  </span>
                  <span
                    className="min-w-0 font-mono text-[8.5px] leading-snug 2xl:text-[9.5px]"
                    style={{ color: "rgba(241,231,210,0.7)" }}
                  >
                    {sub}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default OrangeCard;
