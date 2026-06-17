"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { TechCategory, TechCategoryKey, TechItem } from "../types";
import { cn } from "@/lib/utils";

type Edge = "top" | "bottom";

const FLOW_TRANSITION = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

const overlayVariants: Variants = {
  hidden: (edge: Edge) => ({
    y: edge === "top" ? "-101%" : "101%",
  }),
  visible: {
    y: "0%",
  },
};

const innerVariants: Variants = {
  hidden: (edge: Edge) => ({
    y: edge === "top" ? "101%" : "-101%",
  }),
  visible: {
    y: "0%",
  },
};

function findClosestEdge(
  mouseX: number,
  mouseY: number,
  width: number,
  height: number
): Edge {
  const topEdgeDist =
    (mouseX - width / 2) ** 2 + mouseY ** 2;
  const bottomEdgeDist =
    (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;

  return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
}

function formatMarqueeLabel(items: TechItem[]): string {
  return items
    .map((item) =>
      item.name
        .toUpperCase()
        .replace(/\s+/g, " ")
        .replace(/\./g, "")
    )
    .join(" • ");
}

interface MarqueeTrackProps {
  text: string;
  speed: number;
  isActive: boolean;
}

function MarqueeTrack({ text, speed, isActive }: MarqueeTrackProps) {
  const partRef = useRef<HTMLDivElement>(null);
  const [repetitions, setRepetitions] = useState(4);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!partRef.current) return;

      const width = partRef.current.offsetWidth;
      if (width === 0) return;

      setContentWidth(width);

      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / width) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);

    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text]);

  return (
    <motion.div
      className="flex h-full w-fit items-center"
      animate={
        isActive && contentWidth > 0
          ? { x: [0, -contentWidth] }
          : { x: 0 }
      }
      transition={
        isActive && contentWidth > 0
          ? {
              x: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              },
            }
          : undefined
      }
    >
      {Array.from({ length: repetitions }).map((_, index) => (
        <div
          key={`${text}-${index}`}
          ref={index === 0 ? partRef : undefined}
          className="marquee-part flex shrink-0 items-center"
          aria-hidden={index > 0}
        >
          <span className="whitespace-nowrap px-4 font-heading text-xl font-bold uppercase tracking-[0.08em] text-background sm:px-6 sm:text-2xl md:text-3xl lg:text-4xl">
            {text}
            <span className="px-3 text-accent/80 sm:px-4">•</span>
          </span>
        </div>
      ))}
    </motion.div>
  );
}

interface FlowingMenuItemProps {
  category: TechCategory;
  isFirst: boolean;
  speed: number;
  prefersClick: boolean;
  isTappedOpen: boolean;
  onTap: () => void;
}

function FlowingMenuItem({
  category,
  isFirst,
  speed,
  prefersClick,
  isTappedOpen,
  onTap,
}: FlowingMenuItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [edge, setEdge] = useState<Edge>("top");

  const isOpen = prefersClick ? isTappedOpen : isHovered;
  const marqueeText = formatMarqueeLabel(category.items);

  const updateEdgeFromEvent = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!itemRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const nextEdge = findClosestEdge(
      event.clientX - rect.left,
      event.clientY - rect.top,
      rect.width,
      rect.height
    );

    setEdge(nextEdge);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersClick) return;

    updateEdgeFromEvent(event);
    setIsHovered(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersClick) return;

    updateEdgeFromEvent(event);
    setIsHovered(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!prefersClick) return;

    updateEdgeFromEvent(event);
    onTap();
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        "relative min-h-[4.75rem] flex-1 overflow-hidden text-center sm:min-h-[5.75rem] md:min-h-[6.5rem]",
        !isFirst && "border-t border-border/80"
      )}
    >
      <button
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-label={`${category.label} technologies`}
        className={cn(
          "relative flex h-full w-full cursor-pointer items-center justify-center px-4",
          "font-heading text-2xl font-bold uppercase tracking-tight text-text sm:text-3xl md:text-4xl lg:text-[2.75rem]",
          "transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isOpen && "text-text-muted"
        )}
      >
        {category.label}
      </button>

      <motion.div
        custom={edge}
        variants={overlayVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={FLOW_TRANSITION}
        className="pointer-events-none absolute inset-0 overflow-hidden bg-accent"
        aria-hidden={!isOpen}
      >
        <div className="h-full w-full overflow-hidden">
          <motion.div
            custom={edge}
            variants={innerVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            transition={FLOW_TRANSITION}
            className="h-full w-full overflow-hidden"
          >
            <MarqueeTrack
              text={marqueeText}
              speed={speed}
              isActive={isOpen}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

interface TechStackProps {
  categories: TechCategory[];
  speed?: number;
}

export function TechStack({ categories, speed = 18 }: TechStackProps) {
  const [prefersClick, setPrefersClick] = useState(false);
  const [activeTappedId, setActiveTappedId] = useState<TechCategoryKey | null>(
    null
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none)");

    const updateInteractionMode = () => {
      setPrefersClick(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setActiveTappedId(null);
      }
    };

    updateInteractionMode();
    mediaQuery.addEventListener("change", updateInteractionMode);

    return () => mediaQuery.removeEventListener("change", updateInteractionMode);
  }, []);

  const handleTap = (id: TechCategoryKey) => {
    setActiveTappedId((current) => (current === id ? null : id));
  };

  return (
    <div
      className="w-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface/80 shadow-[0_28px_60px_-36px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:rounded-4xl"
      aria-label="Tech stack"
    >
      <nav className="flex min-h-[24rem] flex-col sm:min-h-[28rem] md:min-h-[32rem]">
        {categories.map((category, index) => (
          <FlowingMenuItem
            key={category.id}
            category={category}
            isFirst={index === 0}
            speed={speed}
            prefersClick={prefersClick}
            isTappedOpen={activeTappedId === category.id}
            onTap={() => handleTap(category.id)}
          />
        ))}
      </nav>
    </div>
  );
}
