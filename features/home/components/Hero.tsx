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
const INK = "#0A0A0A";

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

const MARQUEE_WORDS = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AI Applications",
  "Performance Optimization",
  "Full-Stack Development",
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
  { icon: LuCode, value: "Coffee", label: "Coffee" },
];

type FocusItem = {
  icon: IconType;
  title: string;
  description: string;
  // color: string;
};

const FOCUS_ITEMS: FocusItem[] = [
  {
    icon: LuCodeXml,
    title: "Currently Coding",
    description: "Modern Frontend & Backend Applications",
    // color: "#20e7ff",
  },
  {
    icon: LuBrainCircuit,
    title: "Learning",
    description: "Advanced AI Agents & LLM Integration",
    // color: "#be38ff",
  },
  {
    icon: LuZap,
    title: "Building",
    description: "Scalable Fullstack Architectures",
    // color: "#f5df22",
  },
  {
    icon: LuCoffee,
    title: "Focusing On",
    description: "Clean Code & Performance Optimization",
    // color: "#18df78",
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
      className="relative grid min-h-svh w-full grid-rows-[auto_auto] overflow-visible bg-background transition-colors duration-300 md:min-h-0 md:flex-1 md:grid-rows-[minmax(0,1fr)_auto] md:overflow-hidden"
    >
      {/* <TopMarquee /> */}

      {/* Cream hero — headline + CTAs, left-aligned with top margin */}
      <div className="paper-grain relative flex min-h-0 flex-col overflow-visible bg-background transition-colors duration-300 md:justify-center md:overflow-hidden">
        <HeroIntro />
      </div>

      {/* Orange card */}
      <div className="relative flex min-h-0 flex-col overflow-visible bg-background px-4 pt-4 pb-7 transition-colors duration-300 sm:px-3 sm:pt-5 md:overflow-hidden md:pt-6 md:pb-0 lg:px-5 3xl:pt-0">
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
      className="relative w-full shrink-0 overflow-hidden bg-marquee-bg transition-colors duration-300"
    >
      <div
        className="marquee-track flex w-max items-center py-1 sm:py-1.5"
        style={{ ["--marquee-duration" as string]: "70s" }}
      >
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center font-heading text-[11px] font-bold tracking-tight text-marquee-fg/70 sm:text-xs md:text-[13px]"
          >
            <span className="px-3 sm:px-4 md:px-6">{word}</span>
            <span aria-hidden className="opacity-60">
              ·
            </span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="hero-marquee-fade-l pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16"
      />
      <div
        aria-hidden
        className="hero-marquee-fade-r pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16"
      />
    </div>
  );
}

// ═════════════════════════════════════════════════════════
// Cream hero — left-aligned headline + CTAs, top margin only
// ═════════════════════════════════════════════════════════

function HeroIntro() {
  return (
    <div className="relative z-10 mx-auto mt-6 w-full max-w-[1200px] flex flex-col items-center gap-3 px-4 sm:mt-8 sm:gap-4 sm:px-6 md:my-0 md:items-start md:gap-4 lg:px-12 xl:pt-12 3xl:pt-0">
      <MobileAvailabilityBadge />
      <HeroHeadline />
      <HeroFooter />
      {/* <MobileEstablishedLine /> */}
    </div>
  );
}

// Mobile-only pieces (hidden on md+)

function MobileAvailabilityBadge() {
  return (
    <div className="mx-auto inline-flex w-fit items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 md:hidden">
      <span aria-hidden className="presence-dot" />
      <span className="presence-text font-mono text-[8.5px] uppercase tracking-[0.22em] text-text">
        Available for full-time opportunities
      </span>
    </div>
  );
}

function MobileEstablishedLine() {
  return (
    <div
      className="flex w-full items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-text-muted md:hidden"
    >
      <span>Est. 2024</span>
      <span aria-hidden>•</span>
      <span>India</span>
    </div>
  );
}

function HeroHeadline() {
  return (
    <div className="flex w-full flex-col items-start">
      {/* Mobile headline — stacked like the poster layout */}
      <div
        className="font-heading flex w-full flex-col items-start text-left font-bold tracking-tight md:hidden"
        style={{ color: INK }}
      >
        <div
          className="flex items-center justify-start gap-x-[0.16em] font-bold"
          style={{
            fontSize: "clamp(2.2rem, 10.2vw, 3rem)",
            lineHeight: 0.95,
          }}
        >
          <span>Hello,</span>
          <FacePill />
        </div>
        <span
          className="mt-1 font-bold"
          style={{
            fontSize: "clamp(2.55rem, 12vw, 3.55rem)",
            lineHeight: 0.95,
          }}
        >
          I&rsquo;m Aditya
        </span>
        <span
          className="mt-3 flex max-w-[12ch] flex-wrap items-center justify-start gap-x-[0.18em] gap-y-1 font-bold"
          style={{
            fontSize: "clamp(1.75rem, 8.2vw, 2.35rem)",
            lineHeight: 1.02,
          }}
        >
          <span>I build</span>
          <BlueBlob />
          <span>web experiences</span>
        </span>
      </div>

      {/* Desktop headline — fixed on laptop; scales only on wide desktop monitors (1700px+) */}
      <div
        className="font-heading hidden flex-col gap-[0.14em] text-left text-[clamp(1.35rem,4.15vw+0.1rem,4.25rem)] font-bold leading-[0.90] tracking-tight text-text sm:gap-[0.20em] md:flex md:gap-[0.20em] min-[1700px]:text-[clamp(2.75rem,5vw+0.2rem,5.75rem)] min-[1920px]:text-[clamp(3rem,5.2vw+0.2rem,6.25rem)]"
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
        className="mt-3 w-full max-w-none text-left text-base leading-relaxed tracking-tight text-text/80 sm:mt-4 md:max-w-[80ch] lg:text-lg"
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

function FacePill() {
  return (
    <HeadlinePill style={HEADLINE_PILL_SHELL_STYLE}>
      <span
        className="absolute top-1/2 left-[6%] aspect-square h-[84%] -translate-y-1/2 overflow-hidden rounded-full"
        style={HEADLINE_PILL_INNER_RING}
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
    </HeadlinePill>
  );
}

function BlueBlob() {
  return (
    <HeadlinePill aria-hidden style={HEADLINE_PILL_BLUE_SHELL_STYLE}>
      <span
        className="flex h-full w-full items-center justify-center font-mono font-bold leading-none tracking-tight"
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

      <div
        className="relative mx-auto hidden min-h-fit w-full flex-col overflow-hidden rounded-t-[1.4rem] sm:rounded-t-[1.8rem] md:flex md:min-h-[44vh] lg:min-h-[48vh] lg:rounded-t-[2.2rem]"
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

        <div
          className="no-scrollbar relative grid h-full min-h-0 items-start gap-y-2.5 overflow-y-auto px-6 py-5 md:grid-cols-[1.14fr_0.86fr_1fr] md:content-center md:gap-x-4 md:py-6 lg:gap-x-6 lg:px-9 lg:py-7"
          style={{ color: CREAM }}
        >
          {/* Col 1 - intro */}
          <div className="flex min-w-0 flex-col justify-start gap-8 sm:gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-2.5 py-1 backdrop-blur-[2px] sm:px-3 sm:py-1.5">
              <span aria-hidden className="presence-dot" />
              <span className="presence-text font-mono text-[7.5px] uppercase tracking-[0.22em] text-green-400 sm:text-[8.5px]">
                Available for full-time opportunities
              </span>
            </div>

            <h2
              className="max-w-[16ch] font-heading text-[1.1rem] font-bold leading-[1.12] tracking-tight sm:text-[1.35rem] md:text-[1.15rem] lg:text-[1.5rem] xl:text-[1.65rem]"
              style={{ color: CREAM }}
            >
              Build. Innovate. Scale.
            </h2>

            {/* <p className="max-w-[42ch] font-mono text-[9px] leading-[1.55] tracking-[0.02em] opacity-95 sm:text-[10px] md:max-w-[36ch] md:text-[11px] lg:text-[12px]">
              From idea to production, I help startups and teams build fast,
              reliable and user-focused web applications.
            </p> */}
          </div>

          {/* Col 2 - experience */}
          <div className="flex min-w-0 flex-col justify-start gap-2 md:border-l md:border-[rgba(241,231,210,0.16)] md:pl-5 lg:pl-8">
            {/* <OrangeCardHeading compact>experience</OrangeCardHeading> */}
            <ul className="flex flex-col">
              {EXPERIENCE_ITEMS.map((item, index) => (
                <ExperienceRow
                  key={item.label}
                  item={item}
                  showDivider={index > 0}
                  compact
                />
              ))}
            </ul>
          </div>

          {/* Col 3 - current focus */}
          <div className="flex min-w-0 flex-col justify-start gap-2 md:border-l md:border-[rgba(241,231,210,0.16)] md:pl-5 lg:pl-8">
            {/* <OrangeCardHeading compact>current focus</OuncrangeCardHeading> */}
            <ul className="flex flex-col">
              {FOCUS_ITEMS.map((item, index) => (
                <FocusRow
                  key={item.title}
                  item={item}
                  showDivider={index > 0}
                  compact
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// ═════════════════════════════════════════════════════════
// Mobile card stack — poster-style boxes (hidden on md+)
// ═════════════════════════════════════════════════════════

function MobileCardStack() {
  return (
    <div className="mx-auto flex w-full max-w-136 flex-col gap-3 pb-7 md:hidden">
      {/* Box 1 — orange statement card */}
      <div
        className="relative overflow-hidden rounded-[1.4rem] px-5 py-7"
        style={{ backgroundImage: POSTER_GRADIENT, color: CREAM }}
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
        <span
          aria-hidden
          className="absolute right-4 top-4 text-[16px] opacity-90"
        >
          ✦
        </span>

        <h2
          className="relative max-w-[18ch] font-display text-[1.2rem] font-black leading-[1.15] tracking-[-0.02em]"
          style={{ color: CREAM }}
        >
          I build products that scale and solve real problems.
        </h2>
      </div>

      {/* Box 2 — dark experience card */}
      <div
        className="relative overflow-hidden rounded-[1.4rem] px-5 py-6"
        style={{ backgroundColor: INK, color: CREAM }}
      >
        <OrangeCardHeading style={{ color: "#ff6b3d" }}>
          experience
        </OrangeCardHeading>
        <ul className="mt-2 flex flex-col">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <ExperienceRow
              key={item.label}
              item={item}
              showDivider={index > 0}
            />
          ))}
        </ul>
      </div>

      {/* Box 3 — light current focus card */}
      <div className="relative overflow-hidden rounded-[1.4rem] border border-border bg-surface px-5 py-6 text-text shadow-[0_18px_40px_-28px_rgba(10,10,10,0.25)]">
        <OrangeCardHeading className="opacity-85">
          current focus
        </OrangeCardHeading>
        <ul className="mt-2 flex flex-col">
          {FOCUS_ITEMS.map((item, index) => (
            <FocusRow
              key={item.title}
              item={item}
              showDivider={index > 0}
              dividerClassName="border-border"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════
// Sub-pieces
// ═════════════════════════════════════════════════════════

function OrangeCardHeading({
  children,
  className = "",
  style,
  compact = false,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  compact?: boolean;
}) {
  return (
    <h3
      className={`font-heading font-bold lowercase tracking-tight opacity-95 ${
        compact
          ? "text-lg sm:text-xl md:text-lg lg:text-xl"
          : "text-xl sm:text-2xl md:text-xl lg:text-2xl"
      } ${className}`}
      style={style}
    >
      {children}
    </h3>
  );
}

const ORANGE_CARD_LIST_ROW_CLASS =
  "flex min-w-0 items-center gap-3 py-2.5 sm:gap-3.5 sm:py-2.5";

const ORANGE_CARD_LIST_TITLE_CLASS = (compact: boolean) =>
  `font-heading font-bold leading-tight tracking-tight ${
    compact
      ? "text-sm sm:text-base lg:text-lg"
      : "text-base sm:text-lg lg:text-xl"
  }`;

const ORANGE_CARD_LIST_DETAIL_CLASS = (compact: boolean) =>
  `mt-1 leading-tight opacity-95 ${
    compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"
  }`;

function IconTile({
  icon: Icon,
  color = CREAM,
  compact = false,
}: {
  icon: IconType;
  color?: string;
  compact?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center rounded-md ${
        compact
          ? "h-7 w-7 text-[13px] sm:h-8 sm:w-8 sm:text-[15px] lg:h-9 lg:w-9 lg:text-[16px]"
          : "h-8 w-8 text-[15px] sm:h-9 sm:w-9 sm:text-[17px] lg:h-10 lg:w-10 lg:text-[18px]"
      }`}
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
  compact = false,
}: {
  item: ExperienceItem;
  showDivider: boolean;
  compact?: boolean;
}) {
  return (
    <li
      className={`${ORANGE_CARD_LIST_ROW_CLASS} ${
        showDivider ? "border-t border-[rgba(241,231,210,0.12)]" : ""
      }`}
    >
      <IconTile icon={item.icon} compact={compact} />
      <div className="min-w-0">
        <p className={ORANGE_CARD_LIST_TITLE_CLASS(compact)}>{item.value}</p>
        <p className={ORANGE_CARD_LIST_DETAIL_CLASS(compact)}>{item.label}</p>
      </div>
    </li>
  );
}

function FocusRow({
  item,
  showDivider,
  dividerClassName = "border-[rgba(241,231,210,0.12)]",
  compact = false,
}: {
  item: FocusItem;
  showDivider: boolean;
  dividerClassName?: string;
  compact?: boolean;
}) {
  return (
    <li
      className={`${ORANGE_CARD_LIST_ROW_CLASS} ${
        showDivider ? `border-t ${dividerClassName}` : ""
      }`}
    >
      <IconTile icon={item.icon} compact={compact} />
      <div className="min-w-0">
        <p className={ORANGE_CARD_LIST_TITLE_CLASS(compact)}>{item.title}</p>
        <p className={`${ORANGE_CARD_LIST_DETAIL_CLASS(compact)} wrap-break-word`}>
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
