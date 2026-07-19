import { CurrentExperienceSection } from "./CurrentExperienceSection";
import { Hero } from "./Hero";
import { MarqueeBanner } from "./MarqueeBanner";

export function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-24 sm:gap-28 sm:pb-28 md:gap-32 md:pb-32 lg:gap-40 lg:pb-40">
      <Hero />
      <MarqueeBanner />
      <CurrentExperienceSection />
    </div>
  );
}
