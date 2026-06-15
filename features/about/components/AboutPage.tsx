import Image from "next/image";
import type { IconType } from "react-icons";
import {
  LuBookOpen,
  LuCalendar,
  LuMapPin,
  LuPalette,
  LuRocket,
  LuZap,
} from "react-icons/lu";
import { aboutData } from "../data/about";
import type {
  AboutEntry,
  AboutHighlight,
  AboutSection,
  HighlightIconKey,
} from "../types";
import { TechStack } from "./TechStack";
import { Reveal } from "@/components/ui/Reveal";

const highlightIconMap: Record<HighlightIconKey, IconType> = {
  rocket: LuRocket,
  palette: LuPalette,
  zap: LuZap,
  book: LuBookOpen,
};

function HighlightCard({ highlight }: { highlight: AboutHighlight }) {
  const Icon = highlightIconMap[highlight.icon];

  return (
    <article
      className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 sm:gap-5 sm:p-6"
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent/20 to-accent/5 text-accent sm:h-14 sm:w-14"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
      <div className="min-w-0">
        <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
          {highlight.title}
        </h2>
        <p className="mt-1 text-sm text-text-muted sm:text-[15px]">
          {highlight.description}
        </p>
      </div>
    </article>
  );
}

function EntryCard({
  entry,
  mutedOrganization = false,
}: {
  entry: AboutEntry;
  mutedOrganization?: boolean;
}) {
  const hasMeta = entry.organization || entry.employmentType;

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
    <article className="group rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-border/80 hover:bg-surface sm:p-6 md:p-7">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg md:text-xl">
            {titleEl}
          </h2>
          {hasMeta && (
            <p className="mt-1 text-sm sm:text-base">
              {entry.organization && orgEl}
              {entry.organization && entry.employmentType && (
                <span className="mx-2 text-text-muted">·</span>
              )}
              {entry.employmentType && (
                <span className="text-text-muted">{entry.employmentType}</span>
              )}
            </p>
          )}
        </div>

        {(entry.duration || entry.location || entry.current) && (
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            {(entry.duration || entry.current) && (
              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                {entry.duration && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted sm:text-sm">
                    <LuCalendar className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {entry.duration}
                  </span>
                )}
                {entry.current && (
                  <span className="rounded-full bg-green-500/20  px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-green-500 sm:text-xs">
                    Current
                  </span>
                )}
              </div>
            )}
            {entry.location && (
              <span className="inline-flex items-center gap-1.5 text-xs text-text-muted sm:text-sm">
                <LuMapPin className="mb-3 h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {entry.location}
              </span>
            )}
          </div>
        )}
      </header>

      {entry.achievements && entry.achievements.length > 0 && (
        <ul className="mt-4 space-y-2">
          {entry.achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:items-center sm:text-base">
              <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent/60 sm:mt-0" />
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
              className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-accent sm:text-xs"
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
    <section className="mt-12 sm:mt-16 md:mt-24">
      <Reveal>
        <h3 className="text-xl font-bold lowercase tracking-tight text-text sm:text-2xl md:text-3xl">
          {section.heading}
        </h3>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-5">
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
    <div className="pt-16 pb-10 sm:pb-14 md:pb-20">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="mt-3 text-base text-text-muted sm:mt-4 sm:text-lg">
            Get to know more about my journey, experience, and passion.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] md:items-stretch md:gap-12 lg:gap-16">
          <Reveal delay={0.1}>
            <div>
              <div className="space-y-4 text-base leading-relaxed text-text sm:space-y-5">
                {aboutData.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {aboutData.highlights && aboutData.highlights.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  {aboutData.highlights.map((highlight) => (
                    <HighlightCard key={highlight.title} highlight={highlight} />
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.16} className="md:h-full">
            <figure className="relative mx-auto w-full max-w-sm sm:max-w-md md:mx-0 md:h-full md:max-w-none">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-surface shadow-sm md:aspect-auto md:h-full md:min-h-0">
                <Image
                  src="/images/about/profile.jpeg"
                  alt="Aditya Jain"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 384px, 480px"
                  priority
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-7xl sm:mt-16 md:mt-24">
        {aboutData.techStack && aboutData.techStack.length > 0 && (
          <section>
            <Reveal>
              <h3 className="text-xl font-bold lowercase tracking-tight text-text sm:text-2xl md:text-3xl">
                tech stack
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 sm:mt-6">
                <TechStack items={aboutData.techStack} />
              </div>
            </Reveal>
          </section>
        )}

        {aboutData.sections.map((section) => (
          <Section key={section.heading} section={section} />
        ))}
      </div>
    </div>
  );
}
