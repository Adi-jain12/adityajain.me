import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl"
        >
          {siteConfig.name}
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
