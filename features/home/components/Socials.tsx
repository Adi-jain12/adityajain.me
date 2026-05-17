import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function Socials() {
  return (
    <section className="border-t border-border py-10 sm:py-12">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted">
            elsewhere
          </p>

          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {siteConfig.socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-text transition-colors hover:text-foreground sm:text-base"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="inline-block text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
