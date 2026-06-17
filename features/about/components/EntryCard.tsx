import { LuCalendar, LuMapPin } from "react-icons/lu";
import type { AboutEntry } from "../types";

export function EntryCard({
  entry,
  mutedOrganization = false,
  solid = false,
}: {
  entry: AboutEntry;
  mutedOrganization?: boolean;
  solid?: boolean;
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
    <article
      className={`rounded-2xl border border-border p-5 sm:p-6 md:p-7 ${
        solid
          ? "bg-surface"
          : "group bg-surface/60 transition-colors hover:border-border/80 hover:bg-surface"
      }`}
    >
      <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg md:text-xl">
            {titleEl}
          </h3>
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
                    <LuCalendar
                      className="mb-2.5 h-3.5 w-3.5 text-accent"
                      aria-hidden="true"
                    />
                    {entry.duration}
                  </span>
                )}
                {entry.current && (
                  <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-green-500 sm:text-xs">
                    Current
                  </span>
                )}
              </div>
            )}
            {entry.location && (
              <span className="inline-flex items-center gap-1.5 text-xs text-text-muted sm:text-sm">
                <LuMapPin
                  className="mb-2.5 h-3.5 w-3.5 text-accent"
                  aria-hidden="true"
                />
                {entry.location}
              </span>
            )}
          </div>
        )}
      </header>

      {entry.achievements && entry.achievements.length > 0 && (
        <ul className="mt-4 space-y-2">
          {entry.achievements.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm sm:items-center sm:text-base"
            >
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
              className="rounded-full bg-accent/10 px-2.5 pt-2 font-mono text-[10px] tracking-wider text-accent sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
