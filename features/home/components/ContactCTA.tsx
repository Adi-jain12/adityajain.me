import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted">
          <span className="text-accent">(02)</span> &mdash; say hi
        </p>

        <Link
          href="/contact-us"
          className="group mt-6 block focus:outline-none"
          aria-label="Get in touch"
        >
          <h2 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-text transition-colors duration-500 group-hover:text-foreground sm:text-7xl md:text-8xl">
            Got an idea?
            <br />
            <span className="italic text-foreground">Let&apos;s</span>{" "}
            build it
            <span
              aria-hidden
              className="inline-block pl-3 transition-transform duration-500 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </h2>
        </Link>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          Always open to new projects, collaborations, or just a friendly chat
          about software, design, or coffee.
        </p>
      </Reveal>
    </section>
  );
}
