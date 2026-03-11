import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#141414]">
      <div className="mx-auto flex py-4 w-full items-center justify-between px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
