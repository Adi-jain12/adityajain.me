import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 shrink-0 border-b border-white/10 bg-[#090909] sm:h-20">
      <div className="flex h-full w-full items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label={`${siteConfig.name} - Home`}
          className="group inline-flex items-baseline gap-2.5 transition-opacity duration-300 hover:opacity-90"
        >
          <span className="font-heading text-xl font-bold tracking-[0] text-foreground sm:text-2xl md:text-[27px]">
            {siteConfig.name}
          </span>
          <span
            aria-hidden
            className="hidden font-mono text-[9px] uppercase tracking-[0.26em] text-foreground/80 transition-colors duration-300 group-hover:text-foreground sm:inline-block"
          >
            <span className="mr-3 inline-block h-1 w-1 -translate-y-[3px] rounded-full bg-foreground align-baseline" />
            Portfolio &apos;26
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
