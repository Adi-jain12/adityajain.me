import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuBrainCircuit,
  LuBriefcase,
  LuCodeXml,
  LuGithub,
  LuRocket,
  LuUser,
  LuZap,
} from "react-icons/lu";
import { Chip } from "@/components/ui/Chip";

// ───────────────── Tokens ─────────────────

const CREAM = "#F1E7D2";
const CTA_RED = "#cd5230";
const HEADLINE_PILL_BLUE_GRADIENT = `
  radial-gradient(
    circle at 72% 40%,
    rgba(59, 130, 246, 0.18) 0%,
    transparent 48%
  ),
  linear-gradient(
    118deg,
    #0f172a 0%,
    #1e293b 18%,
    #1e3a8a 48%,
    #2563eb 78%,
    #1d4ed8 100%
  )
`;
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

const ORANGE_CARD_DIVIDER = "rgba(241,231,210,0.16)";

// Headline inline pills (face + blob) — shared box so both scale with the title
const HEADLINE_PILL = {
  height: "0.98em",
  width: "2.35em",
} as const;

const HEADLINE_PILL_SHELL_STYLE: React.CSSProperties = {
  background: POSTER_GRADIENT,
  boxShadow:
    "0 12px 28px -16px rgba(224, 75, 34, 0.6), inset 0 0 0 1px rgba(0,0,0,0.04)",
};

const HEADLINE_PILL_BLUE_SHELL_STYLE: React.CSSProperties = {
  background: HEADLINE_PILL_BLUE_GRADIENT,
  boxShadow:
    "0 12px 28px -16px rgba(2, 6, 23, 0.65), inset 0 0 0 1px rgba(255,255,255,0.06)",
};  

const HEADLINE_PILL_INNER_RING: React.CSSProperties = {
  boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.18)",
};

type DesktopHighlightItem = {
  icon: IconType;
  title: string;
  value: string;
  description: string;
  largeValue?: boolean;
};

const DESKTOP_HIGHLIGHT_ITEMS: DesktopHighlightItem[] = [
  {
    icon: LuBriefcase,
    title: "Years Experience",
    value: "2+",
    description: "Years Experience",
    largeValue: true,
  },
  {
    icon: LuRocket,
    title: "Projects Built",
    value: "10+",
    description: "Projects Built",
    largeValue: true,
  },
  {
    icon: LuGithub,
    title: "GitHub Contributions",
    value: "500+",
    description: "GitHub Contributions",
    largeValue: true,
  },
  {
    icon: LuCodeXml,
    title: "Development",
    value: "End-to-End Development",
    description: "Frontend, backend & databases",
  },
  {
    icon: LuBrainCircuit,
    title: "Engineering Mindset",
    value: "Problem Solving",
    description: "Turning requirements into solutions",
  },
  {
    icon: LuZap,
    title: "Optimization",
    value: "Performance Optimization",
    description: "Fast and responsive experiences",
  },
];

// ═════════════════════════════════════════════════════════
// Main
// ═════════════════════════════════════════════════════════

const HERO_SECTION_PADDING = "px-4 sm:px-8 lg:px-10";
// Wider than section cards (7xl / 1280px), still capped on ultrawide
const ORANGE_CARD_CONTAINER = "mx-auto w-full max-w-[min(94%,1520px)]";

export function Hero() {
  return (
    <section
      aria-label="Aditya Jain — portfolio"
      className="relative grid min-h-[calc(100svh-var(--header-height))] w-full grid-rows-[auto_auto] overflow-visible bg-background transition-colors duration-300 md:h-[calc(100svh-var(--header-height))] md:grid-rows-[minmax(0,1fr)_auto]"
    >
      {/* Cream hero — headline + CTAs, centered like laptop on all desktop widths */}
      <div className="relative flex min-h-0 flex-col overflow-visible bg-background transition-colors duration-300 md:justify-center">
        <HeroIntro />
      </div>

      {/* Orange card — same container + padding as CurrentExperienceSection */}
      <div
        className={`relative flex min-h-0 shrink-0 flex-col overflow-visible bg-background pt-3 pb-4 transition-colors duration-300 sm:pt-4 md:pt-4 md:pb-4 lg:pb-6 ${HERO_SECTION_PADDING}`}
      >
        <div className={ORANGE_CARD_CONTAINER}>
          <OrangeCard />
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════
// Cream hero — left-aligned headline + CTAs, top margin only
// ═════════════════════════════════════════════════════════

function HeroIntro() {
  return (
    <div className="relative z-10 mx-auto mt-6 w-full max-w-[1200px] flex flex-col items-center gap-4 px-4 sm:mt-8 sm:gap-5 sm:px-6 md:my-0 md:min-h-0 md:items-start md:gap-3 lg:gap-4 lg:px-12 3xl:-translate-x-32">
      <MobileAvailabilityBadge />
      <HeroHeadline />
      <HeroFooter />
    </div>
  );
}

function MobileAvailabilityBadge() {
  return (
    <Chip
      variant="success"
      showDot
      className="mx-auto w-fit justify-center md:hidden"
    >
      Available for full-time opportunities
    </Chip>
  );
}

function HeroHeadline() {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <h1 className="contents">
        {/* Mobile headline — centered poster layout with clear hierarchy */}
        <div className="font-heading flex w-full flex-col items-center text-center font-bold tracking-tight text-text md:hidden">
          <div
            className="flex flex-wrap items-center justify-center gap-x-[0.18em] gap-y-1"
            style={{
              fontSize: "clamp(1.85rem, 7.5vw, 2.35rem)",
              lineHeight: 1.08,
            }}
          >
            <span>Hello,</span>
            <FacePill />
          </div>

          <span
            className="mt-2 font-bold"
            style={{
              fontSize: "clamp(2.85rem, 13vw, 3.75rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            I&rsquo;m Aditya
          </span>

          <div
            className="mt-5 flex flex-wrap items-center justify-center gap-x-[0.2em] gap-y-2 px-1"
            style={{
              fontSize: "clamp(1.55rem, 6.8vw, 2.1rem)",
              lineHeight: 1.12,
            }}
          >
            <span>I build</span>
            <BlueBlob />
            <span>web experiences</span>
          </div>
        </div>

        {/* Desktop headline — scales on wide monitors; locked at 3xl (1800px+) */}
        <div
          className="font-heading hidden flex-col gap-[0.14em] text-left text-[clamp(1.35rem,4.15vw+0.1rem,4.25rem)] font-bold leading-[0.90] tracking-tight text-text sm:gap-[0.20em] md:flex md:gap-[0.20em] min-[1700px]:text-[clamp(2.75rem,5vw+0.2rem,5.75rem)] 3xl:text-[5.75rem]"
        >
          <div className="flex flex-wrap items-center justify-start gap-x-[0.16em] gap-y-1 md:flex-nowrap md:whitespace-nowrap">
            <span className="font-bold">Hello</span>
            <FacePill />
            <span className="sm:whitespace-nowrap font-bold">I&rsquo;m Aditya</span>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-x-[0.16em] gap-y-1 md:flex-nowrap md:whitespace-nowrap">
            <span className="font-bold">I build</span>
            <BlueBlob />
            <span className="sm:whitespace-nowrap font-bold">web experiences</span>
          </div>
        </div>
      </h1>

      <p
        className="mt-5 w-full max-w-[36ch] text-center text-base text-text/80 sm:mt-6 md:mt-4 md:max-w-[80ch] md:text-left lg:text-lg"
      >
       Full-Stack Developer building modern web applications from frontend to backend, focused on performance, scalability, and user experience.
      </p>
    </div>
  );
}

function HeadlinePill({
  children,
  className = "",
  style,
  "aria-hidden": ariaHidden,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
}) {
  return (
    <span
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
    </span>
  );
}

function FacePill() {
  return (
    <HeadlinePill style={HEADLINE_PILL_SHELL_STYLE}>
      <span
        className="absolute top-1/2 left-[6%] aspect-square h-[84%] -translate-y-1/2 overflow-hidden rounded-full"
        style={HEADLINE_PILL_INNER_RING}
      >
        <Image
          src="/images/about/profile.webp"
          alt=""
          width={140}
          height={140}
          priority
          className="h-full w-full object-cover"
        />
      </span>
    </HeadlinePill>
  );
}

function BlueBlob() {
  return (
    <HeadlinePill aria-hidden style={HEADLINE_PILL_BLUE_SHELL_STYLE}>
      <span
        className="flex h-full w-full items-center justify-center font-bold leading-none tracking-tight"
        style={{ color: CREAM, fontSize: "0.54em" }}
      >
        {"</>"}
      </span>
    </HeadlinePill>
  );
}

function HeroFooter() {
  return (
    <div
      className="grid w-full grid-cols-1 gap-2.5 text-text md:inline-grid md:w-auto md:min-w-100 md:grid-cols-2 md:gap-3 lg:min-w-104"
    >
      <CtaPrimary href="/projects" label="View My Work" />
      <CtaSecondary href="/contact" label="Hire Me" />
    </div>
  );
}

// ═════════════════════════════════════════════════════════
// Hero CTA buttons
// ═════════════════════════════════════════════════════════

const CTA_BUTTON_CLASS =
  "btn-magnetic group relative inline-flex min-h-11 w-full min-w-0 flex-row items-center justify-center gap-2 rounded-full px-5 text-base leading-none tracking-tight whitespace-nowrap sm:min-h-12 sm:px-6";

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
      <span className="relative z-10 mt-2 shrink-0">{label}</span>
      <ArrowUpRight className="relative z-10 block h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
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
      className={`${CTA_BUTTON_CLASS} border border-text/65 text-text transition-colors duration-300 hover:bg-text hover:text-background`}
    >
      <span className="mt-2 shrink-0">{label}</span>
      <ArrowUpRight className="block h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
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
    <>
      <MobileCardStack />

      <article
        className="relative hidden w-full overflow-hidden rounded-[1.4rem] sm:rounded-[1.8rem] md:block lg:rounded-[2.2rem]"
        style={{ backgroundImage: POSTER_GRADIENT }}
      >
        <div
          className="relative grid items-stretch md:grid-cols-[minmax(0,0.88fr)_minmax(0,2.12fr)]"
          style={{ color: CREAM }}
        >
          {/* Left intro */}
          <div className="flex min-w-0 flex-col px-6 py-8 sm:px-8 md:border-r md:border-[rgba(241,231,210,0.16)] md:py-8 lg:px-8 lg:py-10">
            <Chip variant="success" showDot className="w-fit">
              Available for full-time opportunities
            </Chip>

            <h2
              className="mt-6 max-w-[16ch] text-left font-heading text-[1.45rem] font-bold leading-[1.1] tracking-tight sm:text-[1.6rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.2rem]"
              style={{ color: CREAM }}
            >
              Build.
              <br />
              Ship.
              <br />
              Improve.
            </h2>
          </div>

          {/* Right grid — 3×2 equal cells */}
          <div className="grid h-full min-h-0 grid-cols-3 grid-rows-[1fr_1fr]">
            {DESKTOP_HIGHLIGHT_ITEMS.map((item, index) => (
              <DesktopHighlightCell
                key={item.title}
                item={item}
                column={index % 3}
                row={Math.floor(index / 3)}
              />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

function DesktopHighlightCell({
  item,
  column,
  row,
}: {
  item: DesktopHighlightItem;
  column: number;
  row: number;
}) {
  const cellStyle: React.CSSProperties = {};

  if (column > 0) {
    cellStyle.borderLeft = `1px solid ${ORANGE_CARD_DIVIDER}`;
  }

  if (row > 0) {
    cellStyle.borderTop = `1px solid ${ORANGE_CARD_DIVIDER}`;
  }

  return (
    <div
      className="flex h-full min-h-0 items-center gap-x-3 gap-y-2 px-4 py-5 sm:gap-x-3.5 sm:px-5 sm:py-6 lg:px-6 lg:py-7"
      style={cellStyle}
    >
      <span
        aria-hidden
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[17px] sm:h-11 sm:w-11 sm:text-[19px] lg:h-12 lg:w-12 lg:text-[21px]"
        style={{
          backgroundColor: "rgba(10,10,10,0.78)",
          color: CREAM,
          boxShadow: "0 10px 24px -14px rgba(0,0,0,0.6)",
        }}
      >
        <item.icon />
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-2.5">
        <p
          className={`font-heading font-semibold leading-tight tracking-tight ${
            item.largeValue
              ? "text-2xl sm:text-3xl md:text-4xl"
              : "text-base sm:text-lg md:text-xl"
          }`}
        >
          {item.value}
        </p>
        <p className="text-sm leading-tight opacity-95 sm:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════
// Mobile card stack — poster-style boxes (hidden on md+)
// ═════════════════════════════════════════════════════════

function MobileCardStack() {
  return (
    <div className="flex w-full flex-col gap-3 md:hidden">
      <MobileOrangeIntroCard />
      <MobileHighlightsCard />
    </div>
  );
}

function MobileOrangeIntroCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[1.4rem] px-5 py-7"
      style={{ backgroundImage: POSTER_GRADIENT, color: CREAM }}
    >
      <h2
        className="relative max-w-[16ch] text-left font-heading text-[1.45rem] font-bold leading-[1.1] tracking-tight sm:text-[1.6rem]"
        style={{ color: CREAM }}
      >
        Build.
        <br />
        Ship.
        <br />
        Improve.
      </h2>
    </div>
  );
}

function MobileHighlightsCard() {
  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-border bg-surface px-5 pt-2 pb-0 text-text shadow-[0_18px_40px_-28px_rgba(10,10,10,0.25)]">
      <ul className="flex flex-col">
        {DESKTOP_HIGHLIGHT_ITEMS.map((item, index) => (
          <MobileHighlightRow
            key={item.title}
            item={item}
            showDivider={index > 0}
          />
        ))}
      </ul>
    </div>
  );
}

function MobileHighlightRow({
  item,
  showDivider,
}: {
  item: DesktopHighlightItem;
  showDivider: boolean;
}) {
  return (
    <li
      className={`flex min-w-0 items-center gap-3 py-3.5 ${
        showDivider ? "border-t border-border" : ""
      }`}
    >
      <span
        aria-hidden
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[17px]"
        style={{
          backgroundColor: "rgba(10,10,10,0.78)",
          color: CREAM,
          boxShadow: "0 10px 24px -14px rgba(0,0,0,0.6)",
        }}
      >
        <item.icon />
      </span>
      <div className="min-w-0 flex-1">
        <p
          className={`font-heading font-semibold leading-tight tracking-tight ${
            item.largeValue
              ? "text-2xl sm:text-3xl"
              : "text-base"
          }`}
        >
          {item.value}
        </p>
        <p className="mt-1 text-sm leading-tight text-text/80 sm:text-base">
          {item.description}
        </p>
      </div>
    </li>
  );
}

