import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const chipMobileTextOffset = "max-sm:mb-2";

export const chipVariants = {
  accent: cn(
    "rounded-full font-mono text-[10px] text-accent",
    "border border-accent/15 bg-accent/10 px-2.5 pt-2.5 pb-0.5 uppercase tracking-[0.16em]",
    "sm:border-0 sm:bg-accent/10 sm:uppercase sm:tracking-wider"
  ),
  muted: cn(
    "rounded-full font-mono text-[10px] text-text-muted",
    "border border-border bg-background/40 px-2.5 pt-2.5 pb-0.5 uppercase tracking-[0.18em]",
    "sm:uppercase sm:tracking-wider"
  ),
  success: cn(
    "inline-flex items-center gap-2 rounded-full font-mono text-[10px] uppercase",
    "border border-green-400/25 bg-green-500/10 px-2.5 pt-2.5 pb-0.5 tracking-[0.22em] text-green-400",
    "sm:border-0 sm:bg-green-500/20 sm:uppercase sm:tracking-wider sm:text-green-500"
  ),
  accentOutline: cn(
    "inline-flex items-center gap-2 rounded-full font-mono text-[10px] text-accent",
    "border border-accent/25 bg-accent/10 px-2.5 pt-2.5 pb-0.5 uppercase tracking-[0.16em]",
    "transition-colors hover:bg-accent hover:text-background",
    "[&_svg]:mb-2",
    "sm:uppercase sm:tracking-wider"
  ),
  outline: cn(
    "inline-flex items-center gap-2 rounded-full font-mono text-[10px] text-text-muted",
    "border border-border px-2.5 pt-2.5 pb-0.5 uppercase tracking-[0.16em]",
    "transition-colors hover:border-accent/25 hover:text-accent",
    "[&_svg]:mb-2",
    "sm:uppercase sm:tracking-wider"
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
  const mobileTextOffset = chipMobileTextOffset;

  const textContent =
    showDot && variant === "success" ? (
      <span className={cn("presence-text", mobileTextOffset)}>{children}</span>
    ) : (
      <span className={mobileTextOffset}>{children}</span>
    );

  const content = (
    <>
      {showDot && (
        <span aria-hidden className="presence-dot max-sm:mb-2 sm:mb-2.5" />
      )}
      {textContent}
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
