import type { ComponentType, SVGProps } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
  SiVercel,
  SiPython,
  SiGraphql,
} from "react-icons/si";
import type { TechIconKey, TechItem } from "../types";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap: Record<TechIconKey, IconComponent> = {
  react: SiReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  node: SiNodedotjs,
  tailwind: SiTailwindcss,
  postgres: SiPostgresql,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  docker: SiDocker,
  vercel: SiVercel,
  python: SiPython,
  graphql: SiGraphql,
};

const iconColorMap: Partial<Record<TechIconKey, string>> = {
  react: "#61DAFB",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  node: "#5FA04E",
  tailwind: "#38BDF8",
  postgres: "#4169E1",
  git: "#F05033",
  figma: "#F24E1E",
  docker: "#2496ED",
  python: "#3776AB",
  graphql: "#E10098",
};

const themeAwareIcons = new Set<TechIconKey>(["next", "github", "vercel", "graphql"]);

interface TechStackProps {
  items: TechItem[];
}

function TechCard({ item }: { item: TechItem }) {
  const Icon = iconMap[item.icon];
  const isThemeAware = themeAwareIcons.has(item.icon);

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border/40 bg-surface/30 px-3 py-5 sm:gap-4 sm:px-4 sm:py-6">
      <Icon
        className={`h-10 w-10 shrink-0 sm:h-12 sm:w-12${isThemeAware ? " text-text" : ""}`}
        style={isThemeAware ? undefined : { color: iconColorMap[item.icon] }}
        aria-hidden="true"
      />
      <span className="text-center text-[10px] font-medium uppercase tracking-wider text-text-muted sm:text-xs">
        {item.name}
      </span>
    </div>
  );
}

export function TechStack({ items }: TechStackProps) {
  return (
    <div
      className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 md:gap-5"
      aria-label="Tech stack"
    >
      {items.map((item) => (
        <TechCard key={item.name} item={item} />
      ))}
    </div>
  );
}
