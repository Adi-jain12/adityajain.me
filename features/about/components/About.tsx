import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section className="py-20">
      <div className="grid items-center gap-12 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
        <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-2xl ring-2 ring-border md:w-full">
          <Image
            src="/images/about/profile.jpg"
            alt="Aditya Jain"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 224px, 320px"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            About Me
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text">
            I&apos;m Aditya Jain — a developer and creator who loves building
            things for the web. I care deeply about clean code, thoughtful
            design, and shipping products that people enjoy using.
          </p>

          <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">
            I&apos;m drawn to the intersection of engineering and design, where
            technical decisions shape user experience. Whether it&apos;s a
            polished UI, a performant API, or a well-structured codebase — I
            believe the details matter.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-surface px-3 py-1 text-sm font-medium text-text"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
          >
            More about me
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
