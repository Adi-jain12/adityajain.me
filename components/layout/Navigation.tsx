import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navigation() {
  return (
    <nav className="flex items-center gap-3 sm:gap-5 md:gap-6">
      {siteConfig.navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-xs font-medium text-foreground transition-opacity hover:opacity-80 sm:text-sm"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
