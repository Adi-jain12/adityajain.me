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
      <Marquee />

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Hero />
        <Intro />
        <ContactCTA />
        <Socials />
      </div>
    </>
  );
}
