interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-2xl font-bold tracking-tight sm:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}
