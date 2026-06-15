"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="mt-auto border-t border-border py-6">
      <p className="text-center text-sm tracking-wide opacity-60">
        Built and crafted by {siteConfig.name}
      </p>
    </footer>
  );
}
