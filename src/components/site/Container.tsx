import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-[min(87vw,1440px)] px-1 sm:px-0", className)} {...rest}>
      {children}
    </div>
  );
}
