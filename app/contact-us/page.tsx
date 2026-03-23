import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/features/contact/components/ContactForm";

export default function ContactPage() {
  return (
    <Container>
      <div className="py-16">
        <div className="mx-auto max-w-2xl">
          <SectionHeading>Get in touch</SectionHeading>
          <p className="mt-3 text-lg leading-relaxed text-text-muted">
            Have a project in mind, want to collaborate, or just want to say
            hello? Drop me a message and I&apos;ll get back to you.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
