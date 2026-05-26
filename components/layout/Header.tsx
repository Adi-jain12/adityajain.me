import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";

const INK = "#1a1a1a";
const POSTER_RED = "#e23a26";

export function Header() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: INK }}>
      <div className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-4 lg:px-12">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — Home`}
          className="shrink-0 transition-opacity duration-300 hover:opacity-90"
        >
          <span
            className="font-heading text-lg font-bold italic tracking-tight sm:text-xl md:text-[22px]"
            style={{ color: POSTER_RED }}
          >
            {siteConfig.name}
          </span>
        </Link>
        <div className="flex flex-1 justify-center">
          <Navigation />
        </div>
        <Link
          href="mailto:hello@adityajain.me"
          className="group hidden shrink-0 items-center gap-2 rounded-full border border-white/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10 sm:inline-flex sm:px-5 sm:py-2.5 sm:text-[11px]"
        >
          Let&apos;s Connect
          <svg
            width="18"
            height="10"
            viewBox="0 0 24 12"
            fill="none"
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
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
      </div>
    </header>
  );
}
