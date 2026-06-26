import type { Metadata } from "next";
import { AboutPage } from "@/features/about";
import { Container } from "@/components/ui/Container";
import { canonicalMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...canonicalMetadata("/about"),
};

export default function About() {
  return (
    <Container>
      <AboutPage />
    </Container>
  );
}
