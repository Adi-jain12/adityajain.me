import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section className="py-16 sm:py-24">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted md:col-span-3 md:pt-3">
            <span className="text-accent">(01)</span> &mdash; about
          </p>

          <div className="space-y-5 text-lg leading-relaxed text-text md:col-span-9 md:text-xl">
            <p>
              I&apos;m a web developer based in India, currently at{" "}
              <a
                href="https://www.yudiz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              >
                Yudiz Solutions
              </a>
              . I care about clean code, thoughtful design, and shipping
              products that feel <em className="text-foreground">inevitable</em>.
            </p>

            <p>
              These days I&apos;m shipping production apps with Next.js and
              TypeScript, building reusable{" "}
              <Link
                href="/projects"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              >
                design systems
              </Link>
              , and exploring AI-powered developer tooling &mdash; for the joy
              of it.
            </p>

            <p className="pt-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-foreground"
              >
                <span className="border-b border-foreground/30 transition-colors group-hover:border-foreground">
                  more about me
                </span>
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
