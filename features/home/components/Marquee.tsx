const KEYWORDS = [
  "clean code",
  "thoughtful design",
  "shipping products",
  "design systems",
  "typescript",
  "next.js",
  "motion",
  "AI tooling",
];

export function Marquee() {
  const items = [...KEYWORDS, ...KEYWORDS];

  return (
    <div className="relative my-6 overflow-hidden border-y border-border py-6 sm:my-10 sm:py-8">
      <div
        className="marquee-track flex w-max items-center font-heading text-3xl font-bold lowercase tracking-tight sm:text-4xl md:text-5xl"
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="px-6 text-foreground sm:px-10">{item}</span>
            <span className="text-accent/70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
