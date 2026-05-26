import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — Home`}
          className="group inline-flex items-baseline gap-2.5 transition-opacity duration-300 hover:opacity-90"
        >
          <span className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-[26px]">
            {siteConfig.name}
          </span>
          <span
            aria-hidden
            className="hidden font-mono text-[9px] uppercase tracking-[0.28em] text-foreground/45 transition-colors duration-300 group-hover:text-foreground/70 sm:inline-block"
          >
            <span className="mr-1.5 inline-block h-1 w-1 -translate-y-[3px] rounded-full bg-foreground/40 align-baseline" />
            Portfolio · &lsquo;26
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
