import type { TechCategory, TechIconKey, TechItem } from "../types";
import { cn } from "@/lib/utils";

const iconPathMap: Partial<Record<TechIconKey, string>> = {
  javascript: "/tech/javascript.svg",
  typescript: "/tech/typescript.svg",
  react: "/tech/react.svg",
  next: "/tech/nextdotjs.svg",
  tailwind: "/tech/tailwindcss.svg",
  node: "/tech/nodedotjs.svg",
  express: "/tech/express.svg",
  graphql: "/tech/graphql.svg",
  socketio: "/tech/socketdotio.svg",
  mongodb: "/tech/mongodb.svg",
  postgres: "/tech/postgresql.svg",
  redis: "/tech/icons8-redis.svg",
  aws: "/tech/icons8-aws.svg",
  docker: "/tech/docker.svg",
  git: "/tech/git.svg",
  github: "/tech/github.svg",
};

/** Dark/black logos — CSS invert in dark mode only; colored icons stay untouched. */
const darkModeInvertIcons = new Set<TechIconKey>([
  "next",
  "express",
  "github",
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
  const src = iconPathMap[item.icon];
  const invertInDarkMode = darkModeInvertIcons.has(item.icon);

  return (
    <div className="group flex shrink-0 flex-col items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 sm:h-11 sm:w-11 md:h-12 md:w-12">
        {src ? (
          <img
            src={src}
            alt=""
            className={cn(
              "h-[1.65rem] w-[1.65rem] shrink-0 sm:h-7 sm:w-7 md:h-8 md:w-8",
              invertInDarkMode && "tech-icon-invert-dark"
            )}
            style={{ colorScheme: "only light" }}
            aria-hidden
          />
        ) : null}
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
