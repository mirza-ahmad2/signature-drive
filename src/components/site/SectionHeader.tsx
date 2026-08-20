import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-amber uppercase tracking-[0.28em] text-xs font-medium mb-4">{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-display font-bold text-3xl md:text-5xl leading-[1.05] tracking-tight text-balance",
          tone === "light" ? "text-offwhite" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {intro && (
        <div
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            tone === "light" ? "text-offwhite/70" : "text-warmgray",
          )}
        >
          {intro}
        </div>
      )}
    </div>
  );
}
