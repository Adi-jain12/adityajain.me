import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — Home`}
          className="group inline-flex items-baseline gap-2 transition-opacity duration-300 hover:opacity-90 sm:gap-2.5"
        >
          <span className="font-heading text-[15px] font-semibold tracking-tight text-foreground sm:text-lg md:text-xl">
            {siteConfig.name}
          </span>
          <span
            aria-hidden
            className="hidden items-baseline font-mono text-[8.5px] uppercase tracking-[0.32em] text-foreground/55 transition-colors duration-300 group-hover:text-foreground/80 md:inline-flex md:text-[9.5px]"
          >
            <span className="mr-1.5 inline-block h-1 w-1 -translate-y-[3px] rounded-full bg-foreground/55 align-baseline" />
            Portfolio · &lsquo;26
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}