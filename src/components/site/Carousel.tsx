import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Carousel({ children, ariaLabel }: { children: ReactNode; ariaLabel: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    duration: 22,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slides = Children.toArray(children);

  return (
    <div className="relative">
      <div
        ref={emblaRef}
        className="overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <div className="flex -ml-6">
          {slides.map((child, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              className="min-w-0 shrink-0 grow-0 pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full">{child}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={!canPrev}
          onClick={() => emblaApi?.scrollPrev()}
          className={cn(
            "h-11 w-11 grid place-items-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-300",
            "hover:bg-charcoal hover:text-offwhite hover:border-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2",
            "active:scale-95 disabled:opacity-35 disabled:pointer-events-none",
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          disabled={!canNext}
          onClick={() => emblaApi?.scrollNext()}
          className={cn(
            "h-11 w-11 grid place-items-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-300",
            "hover:bg-charcoal hover:text-offwhite hover:border-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2",
            "active:scale-95 disabled:opacity-35 disabled:pointer-events-none",
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
