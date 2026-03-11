import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutData } from "../data/about";

export function AboutPage() {
  return (
    <div className="py-16">
      <SectionHeading>About Me</SectionHeading>

      <div className="mt-8 space-y-4">
        {aboutData.bio.map((paragraph, i) => (
          <p
            key={i}
            className="text-lg leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">
          Skills &amp; Technologies
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {aboutData.skills.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                {group.category}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-foreground dark:bg-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">
          What I&apos;m up to
        </h3>
        <ul className="mt-4 space-y-2">
          {aboutData.currently.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3"
            >
              <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
