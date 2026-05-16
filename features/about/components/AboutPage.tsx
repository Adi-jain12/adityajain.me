import Image from "next/image";
import { aboutData } from "../data/about";
import type { AboutEntry, AboutSection } from "../types";
import { AnimatedHeadline } from "./AnimatedHeadline";
import { TechStack } from "./TechStack";
import { Reveal } from "@/components/ui/Reveal";

function EntryCard({
  entry,
  mutedOrganization = false,
}: {
  entry: AboutEntry;
  mutedOrganization?: boolean;
}) {
  const hasMeta = entry.organization || entry.location;

  const titleEl = entry.url ? (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-accent"
    >
      {entry.title}
    </a>
  ) : (
    entry.title
  );

  const orgColor = mutedOrganization ? "text-text" : "text-accent";
  const orgHover = mutedOrganization
    ? "hover:text-accent"
    : "hover:text-accent-light";

  const orgEl = entry.organizationUrl ? (
    <a
      href={entry.organizationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${orgColor} transition-colors ${orgHover}`}
    >
      {entry.organization}
    </a>
  ) : (
    <span className={orgColor}>{entry.organization}</span>
  );

  return (
    <article className="group rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-border/80 hover:bg-surface sm:p-7">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {titleEl}
          </h2>
          {hasMeta && (
            <p className="mt-1 text-sm sm:text-base">
              {entry.organization && orgEl}
              {entry.organization && entry.location && (
                <span className="mx-2 text-text-muted">·</span>
              )}
              {entry.location && (
                <span className="text-text-muted">{entry.location}</span>
              )}
            </p>
          )}
        </div>

        {(entry.duration || entry.current) && (
          <div className="flex shrink-0 items-center gap-2">
            {entry.duration && (
              <span className="font-mono text-xs text-text-muted sm:text-sm">
                {entry.duration}
              </span>
            )}
            {entry.current && (
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent sm:text-xs">
                Current
              </span>
            )}
          </div>
        )}
      </header>

      {entry.achievements && entry.achievements.length > 0 && (
        <ul className="mt-4 space-y-2">
          {entry.achievements.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm sm:text-base">
              <span className="block h-1 w-1 shrink-0 rounded-full bg-accent/60" />
              <span className="text-text">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {entry.technologies && entry.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {entry.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-xs text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function Section({ section }: { section: AboutSection }) {
  const mutedOrganization = section.heading === "education";

  return (
    <section className="mt-16 sm:mt-24">
      <Reveal>
        <h3 className="text-2xl font-bold lowercase tracking-tight text-text sm:text-3xl">
          {section.heading}
        </h3>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5">
        {section.entries.map((entry, i) => (
          <Reveal key={`${section.heading}-${i}`} delay={i * 0.08}>
            <EntryCard
              entry={entry}
              mutedOrganization={mutedOrganization}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <AnimatedHeadline
        text={aboutData.headline}
        className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-text sm:text-7xl md:text-8xl"
      />

      <div className="mt-14 grid grid-cols-1 gap-10 sm:mt-20 md:grid-cols-2 md:gap-14 lg:gap-20">
        <Reveal className="order-2 md:order-1" delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-text md:text-[15px]">
            {aboutData.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2">
          <figure>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
              <Image
                src="/images/about/profile.jpeg"
                alt="Aditya Jain"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </figure>
        </Reveal>
      </div>

      {aboutData.techStack && aboutData.techStack.length > 0 && (
        <section className="mx-auto mt-16 max-w-3xl sm:mt-24">
          <Reveal>
            <h3 className="text-center text-2xl font-bold lowercase tracking-tight text-text sm:text-3xl">
              tech stack
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6">
              <TechStack items={aboutData.techStack} />
            </div>
          </Reveal>
        </section>
      )}

      <div className="mx-auto mt-8 max-w-6xl sm:mt-12">
        {aboutData.sections.map((section) => (
          <Section key={section.heading} section={section} />
        ))}
      </div>
    </div>
  );
}
