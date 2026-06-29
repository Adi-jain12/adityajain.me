"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack/ScrollStack";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AboutEntry } from "../types";
import { EntryCard } from "./EntryCard";

interface ExperienceSectionProps {
  heading: string;
  entries: AboutEntry[];
  index?: number;
}

export function ExperienceSection({
  heading,
  entries,
  index,
}: ExperienceSectionProps) {
  return (
    <section className="relative z-20 mt-12 bg-background sm:mt-16 md:mt-24">
      <Reveal>
        <SectionHeading index={index}>{heading}</SectionHeading>
      </Reveal>

      <div className="mt-5 sm:mt-6">
        <ScrollStack
          useWindowScroll
          itemDistance={20}
          itemStackDistance={16}
          stackPosition="96px"
          scaleEndPosition="12%"
          baseScale={0.94}
          itemScale={0.02}
        >
          {entries.map((entry, i) => (
            <ScrollStackItem key={`${heading}-${i}`}>
              <EntryCard entry={entry} solid />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
