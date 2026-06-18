import { SECTION_HEADING_CLASS } from "@/lib/typography";

const MARQUEE_ITEMS = [
  "building products",
  "crafting ui",
  "solving problems",
  "shipping features",
  "scaling systems",
  "optimizing performance",
  "continuous learning and innovation",
] as const;

function StarSeparator() {
  return (
    <span aria-hidden className="shrink-0 text-[0.72em] leading-none opacity-90">
      ✦
    </span>
  );
}

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-4 px-4 sm:gap-5 sm:px-5 md:gap-6 md:px-6">
      {MARQUEE_ITEMS.map((item) => (
        <span
          key={item}
          className={`inline-flex items-center gap-4 sm:gap-5 md:gap-6 ${SECTION_HEADING_CLASS}`}
        >
          <span>{item}</span>
          <StarSeparator />
        </span>
      ))}
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <section
      aria-label="Interests and focus areas"
      className="w-full bg-background"
    >
      <div className="w-full overflow-hidden bg-black py-2.5 text-white sm:py-3">
        <div
          className="flex w-max animate-home-marquee items-center whitespace-nowrap will-change-transform motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-5 motion-reduce:whitespace-normal motion-reduce:px-6 motion-reduce:text-center motion-reduce:animate-none"
        >
          <MarqueeTrack />
          <MarqueeTrack aria-hidden />
        </div>
      </div>
    </section>
  );
}
