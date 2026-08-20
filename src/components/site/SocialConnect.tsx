import { Mail, Phone, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PLACEHOLDER = "Add here text";

const items = [
  { icon: Share2, title: "Social Media", value: PLACEHOLDER },
  { icon: Mail, title: "Email", value: PLACEHOLDER },
  { icon: Phone, title: "Phone", value: PLACEHOLDER },
] as const;

export function SocialConnect({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className={cn(
            "group rounded-2xl border p-6 transition-all duration-300",
            dark
              ? "border-white/10 bg-white/5 hover:border-amber/40 hover:bg-white/8"
              : "border-charcoal/10 bg-offwhite hover:border-amber/50 hover:shadow-lg hover:shadow-charcoal/5 hover:-translate-y-0.5",
          )}
        >
          <div
            className={cn(
              "h-11 w-11 rounded-xl grid place-items-center mb-4 transition-transform duration-300 group-hover:scale-105",
              dark ? "bg-amber text-amber-foreground" : "bg-charcoal text-amber",
            )}
          >
            <item.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className={cn("font-display font-semibold", dark ? "text-offwhite" : "text-charcoal")}>
            {item.title}
          </p>
          <p className={cn("mt-1 text-sm", dark ? "text-offwhite/70" : "text-warmgray")}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
