const MARQUEE_ITEMS = [
  "BUILDING APPS",
  "WRITING CODE",
  "ANIMATING SITES",
  "CRAFTING UI",
  "SHIPPING FAST",
] as const;

function FlowerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="h-[0.72em] w-[0.72em] shrink-0"
    >
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="5.5" rx="2.8" ry="4.2" />
      <ellipse cx="12" cy="18.5" rx="2.8" ry="4.2" />
      <ellipse cx="5.5" cy="12" rx="4.2" ry="2.8" />
      <ellipse cx="18.5" cy="12" rx="4.2" ry="2.8" />
      <ellipse cx="7.2" cy="7.2" rx="2.8" ry="4.2" transform="rotate(-45 7.2 7.2)" />
      <ellipse cx="16.8" cy="7.2" rx="2.8" ry="4.2" transform="rotate(45 16.8 7.2)" />
      <ellipse cx="7.2" cy="16.8" rx="2.8" ry="4.2" transform="rotate(45 7.2 16.8)" />
      <ellipse cx="16.8" cy="16.8" rx="2.8" ry="4.2" transform="rotate(-45 16.8 16.8)" />
    </svg>
  );
}

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-5 px-5 sm:gap-6 sm:px-6 md:gap-8 md:px-8">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="inline-flex items-center gap-5 sm:gap-6 md:gap-8">
          <span>{item}</span>
          <FlowerIcon />
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
      <div className="w-full overflow-hidden bg-black py-4 text-white sm:py-5">
        <div className="home-marquee flex w-max items-center">
          <MarqueeTrack />
          <MarqueeTrack aria-hidden />
        </div>
      </div>
    </section>
  );
}
