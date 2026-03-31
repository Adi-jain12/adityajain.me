import { WorkPage } from "@/features/work";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Work — Aditya Jain",
  description: "My professional experience and career journey.",
};

export default function Work() {
  return (
    <Container>
      <WorkPage />
    </Container>
  );
}
