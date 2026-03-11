import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
