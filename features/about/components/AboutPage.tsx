import Image from "next/image";
import { aboutData } from "../data/about";

export function AboutPage() {
  return (
    <div className="py-16">
      <div className="flex flex-col items-center">
        <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-zinc-200 dark:ring-zinc-700 sm:h-52 sm:w-52">
          <Image
            src="/images/about/profile.jpg"
            alt="Aditya Jain"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          Aditya Jain
        </h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">
          Developer &amp; Creator
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
        {aboutData.bio.map((paragraph, i) => (
          <p key={i} className="text-lg leading-relaxed">
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
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
