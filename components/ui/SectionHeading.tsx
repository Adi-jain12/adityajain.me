import { cn } from "@/lib/utils";
import { FONT_CODE } from "@/lib/typography";

interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
  index?: number | string;
  className?: string;
}

function formatIndex(index: number | string) {
  return typeof index === "number" ? String(index).padStart(2, "0") : index;
}

export function SectionHeading({
  children,
  id,
  index,
  className,
}: SectionHeadingProps) {
  const displayIndex = index !== undefined ? formatIndex(index) : null;

  return (
    <div className={cn("relative", className)}>
      <div>
        <h2
          id={id}
          className={cn(
            "font-heading text-xl font-bold lowercase tracking-tight text-text sm:text-2xl md:text-3xl",
            displayIndex ? "mt-1.5 sm:mt-2" : "mt-0"
          )}
        >
          <span
            className={cn(
              FONT_CODE,
              "mr-2 text-[0.62em] font-normal text-text sm:text-[0.6em]"
            )}
            aria-hidden
          >
            &gt;
          </span>
          <span className="text-text">{children}</span>
          <span
            className="section-heading-cursor ml-0.5 inline-block align-[-0.08em]"
            aria-hidden
          />
        </h2>
      </div>

      <div
        className="mt-3 flex items-center gap-2 pl-4 sm:mt-4 sm:pl-5"
        aria-hidden
      >
        <span className="h-px max-w-40 flex-1 bg-linear-to-r from-accent/45 via-border to-transparent sm:max-w-xs md:max-w-sm" />
      </div>
    </div>
  );
}
