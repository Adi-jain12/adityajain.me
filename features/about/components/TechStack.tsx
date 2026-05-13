import type { ComponentType, CSSProperties, SVGProps } from "react";
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
  SiFramer,
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
  framer: SiFramer,
};

const iconColorMap: Record<TechIconKey, string> = {
  react: "#61DAFB",
  next: "#FFFFFF",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  node: "#5FA04E",
  tailwind: "#38BDF8",
  postgres: "#4169E1",
  git: "#F05033",
  github: "#FFFFFF",
  figma: "#F24E1E",
  docker: "#2496ED",
  vercel: "#FFFFFF",
  python: "#3776AB",
  framer: "#FFFFFF",
};

interface TechStackProps {
  items: TechItem[];
  /** Duration of one full loop in seconds. Higher = slower. */
  duration?: number;
}

function TechPill({ item }: { item: TechItem }) {
  const Icon = iconMap[item.icon];
  const color = iconColorMap[item.icon];

  return (
    <div className="flex w-28 shrink-0 flex-col items-center gap-3 sm:w-32 sm:gap-4">
      <Icon
        className="h-10 w-10 shrink-0 transition-transform duration-300 hover:scale-110 sm:h-12 sm:w-12"
        style={{ color }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-xs font-medium text-text-muted sm:text-sm">
        {item.name}
      </span>
    </div>
  );
}

export function TechStack({ items, duration = 35 }: TechStackProps) {
  const marqueeStyle: CSSProperties = {
    ["--marquee-duration" as string]: `${duration}s`,
  };

  const maskStyle: CSSProperties = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    maskImage:
      "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
  };

  return (
    <div className="relative overflow-hidden" style={maskStyle}>
      <div
        className="marquee-track flex w-max gap-8 sm:gap-12"
        style={marqueeStyle}
        aria-label="Tech stack"
      >
        {[...items, ...items].map((item, i) => (
          <TechPill key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
