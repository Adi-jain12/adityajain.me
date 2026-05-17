import {
  Hero,
  Marquee,
  Intro,
  ContactCTA,
  Socials,
} from "@/features/home";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Hero />
      </div>

      <Marquee />

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Intro />
        <ContactCTA />
        <Socials />
      </div>
    </>
  );
}
