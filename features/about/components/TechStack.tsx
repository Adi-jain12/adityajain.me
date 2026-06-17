import type { ComponentType, SVGProps } from "react";
import { DiAws } from "react-icons/di";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiOpenapiinitiative,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { TechCategory, TechIconKey, TechItem } from "../types";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap: Record<TechIconKey, IconComponent> = {
  react: SiReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  openapi: SiOpenapiinitiative,
  jwt: SiJsonwebtokens,
  mongodb: SiMongodb,
  postgres: SiPostgresql,
  aws: DiAws,
  docker: SiDocker,
  vercel: SiVercel,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  vscode: VscVscode,
};

const iconColorMap: Partial<Record<TechIconKey, string>> = {
  react: "#61DAFB",
  typescript: "#3178C6",
  redux: "#764ABC",
  node: "#5FA04E",
  tailwind: "#38BDF8",
  postgres: "#4169E1",
  mongodb: "#47A248",
  git: "#F05033",
  docker: "#2496ED",
  postman: "#FF6C37",
  aws: "#FF9900",
  openapi: "#6BA539",
};

const themeAwareIcons = new Set<TechIconKey>([
  "next",
  "github",
  "vercel",
  "vscode",
  "express",
  "jwt",
]);

interface TechStackProps {
  categories: TechCategory[];
}

function RowDivider() {
  return (
    <div
      aria-hidden
      className="relative hidden shrink-0 self-stretch sm:mx-2 md:mx-4 lg:mx-6 sm:block"
    >
      <div className="h-full w-px bg-border" />
      <div className="absolute top-1/2 left-0 h-14 w-px -translate-y-1/2 bg-accent md:h-16" />
    </div>
  );
}

function TechIcon({ item }: { item: TechItem }) {
  const Icon = iconMap[item.icon];
  const useTextColor = themeAwareIcons.has(item.icon);

  return (
    <div className="flex w-[4.75rem] flex-col items-center gap-2.5 sm:w-20 md:w-[5.25rem]">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-surface/50 sm:h-16 sm:w-16">
        <Icon
          className={cn(
            "h-6 w-6 shrink-0 sm:h-7 sm:w-7",
            useTextColor && "text-text"
          )}
          style={useTextColor ? undefined : { color: iconColorMap[item.icon] }}
          aria-hidden="true"
        />
      </span>
      <span className="max-w-full text-center text-[11px] font-medium leading-tight text-text-muted sm:text-xs">
        {item.name}
      </span>
    </div>
  );
}

function TechStackRow({
  category,
  index,
}: {
  category: TechCategory;
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 py-4 sm:flex-row sm:items-center sm:gap-0 sm:py-5 md:py-6",
        index > 0 && "border-t border-border"
      )}
    >
      <div className="w-full shrink-0 sm:w-44 md:w-52 lg:w-56">
        <h3 className="font-heading text-xl font-bold tracking-tight text-text sm:text-2xl">
          {category.label}
        </h3>
      </div>

      <RowDivider />

      <div className="flex min-w-0 flex-1 flex-wrap gap-x-4 gap-y-6 sm:gap-x-8 sm:pl-2 md:gap-x-10 md:pl-4 lg:gap-x-12">
        {category.items.map((item) => (
          <TechIcon key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export function TechStack({ categories }: TechStackProps) {
  return (
    <div aria-label="Tech stack">
      {categories.map((category, index) => (
        <TechStackRow key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}
