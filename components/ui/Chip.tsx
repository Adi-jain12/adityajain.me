import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Optically centers chip text by trimming the custom font's vertical
 * metrics (see `.chip-label` in globals.css). Apply to the text span of any
 * link-based chip built with `getChipClassName`.
 */
export const chipLabel = "chip-label";

const CHIP_BASE =
  "inline-flex items-center justify-center rounded-full font-mono text-[10px] leading-none uppercase";

export const chipVariants = {
  accent: cn(
    CHIP_BASE,
    "border border-accent/15 bg-accent/10 px-4 py-2.5 tracking-[0.16em] text-accent",
    "sm:border-0 sm:tracking-wider"
  ),
  muted: cn(
    CHIP_BASE,
    "border border-border bg-background/40 px-4 py-2.5 tracking-[0.18em] text-text-muted",
    "sm:tracking-wider"
  ),
  success: cn(
    CHIP_BASE,
    "gap-2 border border-green-400/25 bg-green-500/10 px-4 py-2.5 tracking-[0.22em] text-green-400",
    "sm:border-0 sm:bg-green-500/20 sm:tracking-wider sm:text-green-500"
  ),
  accentOutline: cn(
    CHIP_BASE,
    "gap-2 border border-accent/25 bg-accent/10 px-4.5 py-2.5 tracking-[0.16em] text-accent",
    "transition-colors hover:bg-accent hover:text-background",
    "sm:tracking-wider"
  ),
  outline: cn(
    CHIP_BASE,
    "gap-2 border border-border px-4.5 py-2.5 tracking-[0.16em] text-text-muted",
    "transition-colors hover:border-accent/25 hover:text-accent",
    "sm:tracking-wider"
  ),
} as const;

export type ChipVariant = keyof typeof chipVariants;

export function getChipClassName(variant: ChipVariant, className?: string) {
  return cn(chipVariants[variant], className);
}

type ChipProps = {
  variant?: ChipVariant;
  showDot?: boolean;
  className?: string;
  children: ReactNode;
};

type ChipSpanProps = ChipProps & HTMLAttributes<HTMLSpanElement> & { href?: undefined };
type ChipAnchorProps = ChipProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Chip({
  variant = "accent",
  showDot = false,
  className,
  children,
  href,
  ...props
}: ChipSpanProps | ChipAnchorProps) {
  const classes = getChipClassName(variant, className);

  const content = (
    <>
      {showDot && <span aria-hidden className="presence-dot shrink-0" />}
      <span
        className={cn(showDot && variant === "success" && "presence-text", chipLabel)}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <span className={classes} {...(props as HTMLAttributes<HTMLSpanElement>)}>
      {content}
    </span>
  );
}
