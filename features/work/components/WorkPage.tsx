import { workData } from "../data/work";
import type { WorkExperience } from "../types";

function WorkCard({ experience, isLast }: { experience: WorkExperience; isLast: boolean }) {
  const isCurrent = experience.endDate === null;

  return (
    <div className="relative flex gap-6 pb-12 sm:gap-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-[18px] h-full w-px bg-border sm:left-[9px]" />
      )}

      {/* Timeline dot */}
      <div className="relative z-10 mt-[6px] shrink-0">
        <div
          className={`h-[15px] w-[15px] rounded-full border-2 sm:h-[19px] sm:w-[19px] ${
            isCurrent
              ? "border-accent bg-accent/20"
              : "border-zinc-600 bg-surface"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex-1 -mt-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
              {experience.role}
            </h3>
            <p className="mt-0.5 text-base">
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-colors hover:text-accent-light"
                >
                  {experience.company}
                </a>
              ) : (
                <span className="text-accent">{experience.company}</span>
              )}
              <span className="mx-2 text-text-muted">·</span>
              <span className="text-text-muted">{experience.location}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 sm:shrink-0">
            <span className="font-mono text-sm text-text-muted">
              {experience.startDate} — {experience.endDate ?? "Present"}
            </span>
            {isCurrent && (
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                Current
              </span>
            )}
          </div>
        </div>

        <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 text-xs text-text-muted">
          {experience.type}
        </span>

        <p className="mt-3 leading-relaxed text-text-muted">
          {experience.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent/60" />
              <span className="text-text">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkPage() {
  return (
    <div className="py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Work Experience
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-text-muted">
          A timeline of my professional journey — the companies I&apos;ve worked
          with, the roles I&apos;ve held, and the impact I&apos;ve made along
          the way.
        </p>
      </div>

      <div className="mt-14">
        {workData.experiences.map((experience, i) => (
          <WorkCard
            key={`${experience.company}-${experience.role}`}
            experience={experience}
            isLast={i === workData.experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
