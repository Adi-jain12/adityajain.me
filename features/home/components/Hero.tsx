import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuBrainCircuit,
  LuCalendarDays,
  LuCode,
  LuCodeXml,
  LuCoffee,
  LuRocket,
  LuZap,
} from "react-icons/lu";

// ───────────────── Tokens ─────────────────

const CREAM = "#F1E7D2";
const POSTER_RED = "#E04B22";
const CTA_RED = "#cd5230";
const CODE_PILL_BLUE = "#1e3a8a";
const INK = "#0A0A0A";

const BINARY_DIGIT_TILE_INK = createBinaryDigitTile(INK, 0.2);
const BINARY_DIGIT_TILE_CREAM = createBinaryDigitTile(CREAM, 0.34);

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

// 🎛 Orange card width — tweak this value to resize the bottom card.
// Accepts any CSS width: "100%", "1260px", "92%", "min(100%, 1320px)", etc.
const ORANGE_CARD_MAX_WIDTH = "94%";

function createBinaryDigitTile(fill: string, fillOpacity: number) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <g fill="${fill}" fill-opacity="${fillOpacity}" font-family="monospace" font-size="11" font-weight="700" text-anchor="middle" dominant-baseline="middle">
        <text x="10" y="10">1</text>
        <text x="30" y="10">0</text>
        <text x="10" y="30">0</text>
        <text x="30" y="30">1</text>
      </g>
    </svg>
  `;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

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

type ExperienceItem = {
  icon: IconType;
  value: string;
  label: string;
};

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  { icon: LuCalendarDays, value: "2+", label: "Years Experience" },
  { icon: LuRocket, value: "10+", label: "Projects Delivered" },
  { icon: LuCode, value: "End-to-End", label: "Development" },
];

type FocusItem = {
  icon: IconType;
  title: string;
  description: string;
  color: string;
};

const FOCUS_ITEMS: FocusItem[] = [
  {
    icon: LuCodeXml,
    title: "Currently Coding",
    description: "Modern Frontend & Backend Applications",
    color: "#20e7ff",
  },
  {
    icon: LuBrainCircuit,
    title: "Learning",
    description: "Advanced AI Agents & LLM Integration",
    color: "#be38ff",
  },
  {
    icon: LuZap,
    title: "Building",
    description: "Scalable Fullstack Architectures",
    color: "#f5df22",
  },
  {
    icon: LuCoffee,
    title: "Focusing On",
    description: "Clean Code & Performance Optimization",
    color: "#18df78",
  },
];

// ═════════════════════════════════════════════════════════
// Main
// ═════════════════════════════════════════════════════════

export function Hero() {
  return (
    <section
      data-fit-viewport
      aria-label="Aditya Jain — portfolio"
      className="relative grid min-h-svh w-full grid-rows-[auto_auto_auto] overflow-visible md:min-h-0 md:flex-1 md:grid-rows-[auto_minmax(0,1.1fr)_minmax(0,0.9fr)] md:overflow-hidden lg:grid-rows-[auto_minmax(0,1.12fr)_minmax(0,0.88fr)]"
      style={{ backgroundColor: CREAM }}
    >
      <TopMarquee />

      {/* Cream hero — headline + CTAs, left-aligned with top margin */}
      <div
        className="relative flex min-h-0 flex-col overflow-visible md:overflow-hidden"
        style={{ backgroundColor: CREAM }}
      >
        <BinaryDigitBackdrop variant="cream" />
        <HeroIntro />
      </div>

      {/* Orange card — bottom proportion via grid row */}
      <div
        className="relative flex min-h-0 flex-col overflow-visible px-2 sm:px-3 md:overflow-hidden lg:px-5"
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
// Cream hero — left-aligned headline + CTAs, top margin only
// ═════════════════════════════════════════════════════════

function HeroIntro() {
  return (
    <div className="relative z-10 mx-auto mt-10 w-full max-w-[1200px] flex flex-col items-start gap-4 px-3 sm:mt-14 sm:gap-5 sm:px-6 md:mt-16 lg:mt-18 lg:gap-6 lg:px-12">
      <HeroHeadline />
      <HeroFooter />
    </div>
  );
}

function HeroHeadline() {
  return (
    <div className="flex w-full flex-col items-start">
      <div
        className="font-display flex flex-col gap-[0.14em] text-left font-black leading-[0.90] tracking-[-0.035em] sm:gap-[0.20em] md:gap-[0.20em]"
        style={{
          color: INK,
          fontSize: "clamp(1.35rem, 4.8vw + 0.15rem, 4.9rem)",
        }}
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

      <p
        className="mt-2 max-w-[80ch] text-left font-mono text-[9px] leading-[1.55] tracking-[0.02em] sm:mt-4.5 sm:text-[10px] md:text-[11px] lg:text-[12px]"
        style={{ color: INK, opacity: 0.78 }}
      >
        Full-stack developer crafting high-performance, interactive web
        experiences with scalable backends and clean interfaces.
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
    <HeadlinePill style={HEADLINE_PILL_SHELL_STYLE}>
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
    <HeadlinePill aria-hidden style={HEADLINE_PILL_BLUE_SHELL_STYLE}>
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
    <div
      className="inline-grid min-w-[17rem] grid-cols-2 gap-2 sm:min-w-[20rem] sm:gap-3 md:min-w-[25rem] lg:min-w-[26rem]"
      style={{ color: INK }}
    >
      <CtaPrimary href="/projects" label="View My Work" />
      <CtaSecondary href="/about" label="About Me" />
    </div>
  );
}

// ═════════════════════════════════════════════════════════
// Hero CTA buttons
// ═════════════════════════════════════════════════════════

const CTA_BUTTON_CLASS =
  "btn-magnetic group relative inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full px-4 py-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] sm:px-5 sm:py-2.5 sm:text-[11px] md:px-6 md:py-3";

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
    <div
      className="relative mx-auto flex min-h-fit w-full flex-col overflow-hidden rounded-t-[1.4rem] sm:rounded-t-[1.8rem] md:min-h-0 md:flex-1 lg:rounded-t-[2.2rem]"
      style={{
        backgroundImage: POSTER_GRADIENT,
        maxWidth: ORANGE_CARD_MAX_WIDTH,
      }}
    >
      <BinaryDigitBackdrop variant="poster" />

      <CornerMark className="absolute left-3 top-3 sm:left-5 sm:top-5" />
      <CornerMark className="absolute right-3 top-3 sm:right-5 sm:top-5" />

      <div
        className="no-scrollbar relative grid h-auto min-h-0 grid-cols-1 content-start gap-x-3 gap-y-4 overflow-visible px-4 py-4 sm:gap-x-4 sm:gap-y-4 sm:px-5 sm:py-4 md:h-full md:grid-cols-[1.14fr_0.86fr_1fr] md:content-stretch md:gap-x-5 md:gap-y-2.5 md:overflow-y-auto md:px-6 md:py-4 lg:gap-x-7 lg:px-9 lg:py-5"
        style={{ color: CREAM }}
      >
        {/* Col 1 - intro */}
        <div className="flex min-w-0 flex-col justify-center gap-8 sm:gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(241,231,210,0.32)] bg-[rgba(241,231,210,0.08)] px-2.5 py-1 backdrop-blur-[2px] sm:px-3 sm:py-1.5">
            <span aria-hidden className="presence-dot" />
            <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] sm:text-[9.5px]">
              Available for full-time opportunities
            </span>
          </div>

          <h2
            className="max-w-[16ch] font-display text-[1.25rem] font-black leading-[1.12] tracking-[-0.02em] sm:text-[1.6rem] md:text-[1.35rem] lg:text-[1.75rem] xl:text-[2rem]"
            style={{ color: CREAM }}
          >
            I build products that scale and solve real problems.
          </h2>

          {/* <p className="max-w-[42ch] font-mono text-[9px] leading-[1.55] tracking-[0.02em] opacity-95 sm:text-[10px] md:max-w-[36ch] md:text-[11px] lg:text-[12px]">
            From idea to production, I help startups and teams build fast,
            reliable and user-focused web applications.
          </p> */}
        </div>

        {/* Col 2 - experience */}
        <div className="flex min-w-0 flex-col justify-center gap-2 border-t border-[rgba(241,231,210,0.16)] pt-3 md:border-l md:border-t-0 md:pl-5 md:pt-0 lg:pl-8">
          <span className='font-display font-bold'>Experience</span>
          <ul className="flex flex-col">
            {EXPERIENCE_ITEMS.map((item, index) => (
              <ExperienceRow
                key={item.label}
                item={item}
                showDivider={index > 0}
              />
            ))}
          </ul>
        </div>

        {/* Col 3 - current focus */}
        <div className="flex min-w-0 flex-col justify-center gap-2 border-t border-[rgba(241,231,210,0.16)] pt-3 md:border-l md:border-t-0 md:pl-5 md:pt-0 lg:pl-8">
          <span className='font-display font-bold'>Current Focus</span>
          <ul className="flex flex-col">
            {FOCUS_ITEMS.map((item, index) => (
              <FocusRow
                key={item.title}
                item={item}
                showDivider={index > 0}
              />
            ))}
          </ul>
        </div>
      </div>

      <CornerMark className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5" />
      <CornerMark className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5" />
    </div>
  );
}

// ═════════════════════════════════════════════════════════
// Sub-pieces
// ═════════════════════════════════════════════════════════

function OrangeCardHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] opacity-95 sm:text-[10px] lg:text-[11px]"
      style={{ color: CREAM }}
    >
      {children}
    </h3>
  );
}

function BinaryDigitBackdrop({ variant }: { variant: "cream" | "poster" }) {
  const isPoster = variant === "poster";
  const maskImage = isPoster
    ? "linear-gradient(to bottom, transparent 0%, black 18%, black 90%, transparent 100%)"
    : "radial-gradient(ellipse at center, black 58%, transparent 100%)";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      style={{
        opacity: isPoster ? 0.62 : 0.5,
        WebkitMaskImage: maskImage,
        maskImage,
      }}
    >
      <div
        className="absolute -inset-8"
        style={{
          backgroundImage: isPoster
            ? BINARY_DIGIT_TILE_CREAM
            : BINARY_DIGIT_TILE_INK,
          backgroundPosition: isPoster ? "0 0" : "10px 4px",
          backgroundSize: isPoster ? "42px 42px" : "36px 36px",
        }}
      />
    </div>
  );
}

function IconTile({
  icon: Icon,
  color = CREAM,
}: {
  icon: IconType;
  color?: string;
}) {
  return (
    <span
      aria-hidden
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[15px] sm:h-9 sm:w-9 sm:text-[17px] lg:h-10 lg:w-10 lg:text-[18px]"
      style={{
        backgroundColor: "rgba(10,10,10,0.78)",
        color,
        boxShadow: "0 10px 24px -14px rgba(0,0,0,0.6)",
      }}
    >
      <Icon />
    </span>
  );
}

function ExperienceRow({
  item,
  showDivider,
}: {
  item: ExperienceItem;
  showDivider: boolean;
}) {
  const isLongValue = item.value.length > 4;

  return (
    <li
      className={`flex min-w-0 items-center gap-3 py-2.5 sm:gap-3.5 sm:py-3 ${
        showDivider ? "border-t border-[rgba(241,231,210,0.12)]" : ""
      }`}
    >
      <IconTile icon={item.icon} />
      <div className="min-w-0">
        <p
          className={`font-mono font-bold leading-none tracking-[0.02em] ${
            isLongValue
              ? "text-[15px] sm:text-[16px] lg:text-[18px]"
              : "text-[1.45rem] sm:text-[1.65rem] lg:text-[2rem]"
          }`}
        >
          {item.value}
        </p>
        <p className="mt-1 font-mono text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] opacity-95 sm:text-[10px] lg:text-[11px]">
          {item.label}
        </p>
      </div>
    </li>
  );
}

function FocusRow({
  item,
  showDivider,
}: {
  item: FocusItem;
  showDivider: boolean;
}) {
  return (
    <li
      className={`flex min-w-0 items-start gap-2.5 py-2 sm:gap-3 sm:py-2.5 ${
        showDivider ? "border-t border-[rgba(241,231,210,0.12)]" : ""
      }`}
    >
      <IconTile icon={item.icon} color={item.color} />
      <div className="min-w-0 pt-[1px]">
        <p className="font-mono text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] opacity-95 sm:text-[11px] lg:text-[12px]">
          {item.title}
        </p>
        <p className="mt-0.5 break-words font-mono text-[9px] leading-[1.55] tracking-[0.02em] opacity-90 sm:text-[10px] lg:text-[11px]">
          {item.description}
        </p>
      </div>
    </li>
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
