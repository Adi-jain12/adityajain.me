import type { Metadata } from "next";
import { ContactPage } from "@/features/contact";
import { Container } from "@/components/ui/Container";
import { canonicalMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...canonicalMetadata("/contact"),
};

export default function Contact() {
  return (
    <Container>
      <ContactPage />
    </Container>
  );
}
