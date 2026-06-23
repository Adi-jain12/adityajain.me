import type { ComponentType, SVGProps } from "react";
import { DiAws } from "react-icons/di";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiOpenapiinitiative,
  SiGraphql,
  SiSocketdotio,
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
  javascript: SiJavascript,
  react: SiReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  openapi: SiOpenapiinitiative,
  graphql: SiGraphql,
  socketio: SiSocketdotio,
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
  javascript: "#F7DF1E",
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
  graphql: "#E10098",
  socketio: "#010101",
};

const themeAwareIcons = new Set<TechIconKey>([
  "next",
  "github",
  "vercel",
  "vscode",
  "express",
  "jwt",
  "socketio",
]);

interface TechStackProps {
  categories: TechCategory[];
}

function SlashDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative hidden w-5 shrink-0 self-stretch sm:block md:w-6",
        className
      )}
    >
      <div className="absolute top-1/2 left-1/2 h-[120%] w-px -translate-x-1/2 -translate-y-1/2 rotate-[22deg] bg-border/90" />
    </div>
  );
}

function CategoryLabel({ label }: { label: string }) {
  return (
    <div className="flex min-w-0 items-center">
      <h3 className="font-heading text-lg font-bold italic tracking-tight text-text sm:text-xl md:text-[1.65rem]">
        {label}
      </h3>
    </div>
  );
}

function TechIcon({ item }: { item: TechItem }) {
  const Icon = iconMap[item.icon];
  const useTextColor = themeAwareIcons.has(item.icon);

  return (
    <div className="group flex shrink-0 flex-col items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 sm:h-11 sm:w-11 md:h-12 md:w-12">
        <Icon
          className={cn(
            "h-[1.65rem] w-[1.65rem] shrink-0 sm:h-7 sm:w-7 md:h-8 md:w-8",
            useTextColor && "text-text"
          )}
          style={useTextColor ? undefined : { color: iconColorMap[item.icon] }}
          aria-hidden="true"
        />
      </span>
      <span className="max-w-[4.75rem] text-center text-[10px] font-medium leading-tight text-text-muted transition-colors duration-300 group-hover:text-text sm:max-w-[5.25rem] sm:text-[11px]">
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
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        "border-y border-border transition-colors duration-300",
        isEven ? "bg-surface/35" : "bg-background"
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-5 sm:grid-cols-[13.5rem_auto_1fr] sm:items-center sm:gap-0 sm:px-6 sm:py-6 md:py-7">
        <CategoryLabel label={category.label} />

        <SlashDivider className="mx-3 md:mx-4 lg:mx-5" />

        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-5 sm:gap-x-0 sm:gap-y-0">
          {category.items.map((item, itemIndex) => (
            <div key={item.name} className="flex shrink-0 items-center">
              {itemIndex > 0 && (
                <SlashDivider className="mx-2 md:mx-3 lg:mx-4" />
              )}
              <TechIcon item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TechStack({ categories }: TechStackProps) {
  return (
    <div
      aria-label="Tech stack"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-clip border-y border-border"
    >
      {categories.map((category, index) => (
        <TechStackRow key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}
