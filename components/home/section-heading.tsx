interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  tone?: "default" | "inverse";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  tone = "default",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const headingColor = tone === "inverse" ? "text-background" : "text-text";
  const descriptionColor = tone === "inverse" ? "text-background/70" : "text-muted";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 id={id} className={`mt-4 text-3xl sm:text-4xl lg:text-5xl ${headingColor}`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-7 sm:text-lg ${descriptionColor}`}>{description}</p> : null}
    </div>
  );
}
