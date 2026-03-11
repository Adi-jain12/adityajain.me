import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navigation() {
  return (
    <nav className="flex gap-6">
      {siteConfig.navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-foreground transition-opacity hover:opacity-80"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
