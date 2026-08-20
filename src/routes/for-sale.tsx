import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroForSale from "@/assets/hero-forsale.jpg";
import { Hero } from "@/components/site/Hero";
import { Container } from "@/components/site/Container";
import { SectionHeader } from "@/components/site/SectionHeader";
import { VehicleCard } from "@/components/site/VehicleCard";
import { vehicles } from "@/lib/data";
import { pageHead } from "@/lib/seo";

const categories = [
  "All",
  "Box Van",
  "Panel Van",
  "Tipper",
  "Truck up to 26T",
  "Camper Base",
] as const;

export const Route = createFileRoute("/for-sale")({
  head: () =>
    pageHead({
      title: "Vans & Trucks For Sale",
      description:
        "Browse vans and trucks for sale in Newcastle & Gateshead. Panel vans, Lutons, tippers, 18T and 26T trucks, and camper-conversion base vehicles.",
      path: "/for-sale",
      keywords:
        "vans for sale Newcastle, trucks for sale Gateshead, Luton van, panel van, tipper, 18T curtainside, camper base van",
    }),
  component: ForSalePage,
});

function ForSalePage() {
  return (
    <>
      <Hero
        image={heroForSale}
        imageAlt="Vans and trucks for sale at Signature Vans Direct in Newcastle and Gateshead"
        eyebrow="Current Stock"
        title="Vans & Trucks For Sale"
        subtitle="From compact box vans to 26-tonners — every vehicle prepped at our Team Valley centre and honestly described."
      />

      <section className="bg-offwhite py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeader
              eyebrow="Filter by type"
              title="What are you looking for?"
              intro="Stock changes weekly. If you don't see it here, we'll source it nationwide."
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Vehicle types">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm min-h-11 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber ${
                  i === 0
                    ? "bg-charcoal text-offwhite border-charcoal"
                    : "bg-transparent text-charcoal border-charcoal/15 hover:border-amber hover:text-amber"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {vehicles.map((v) => (
              <VehicleCard key={v.title + v.type} v={v} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-charcoal text-offwhite p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold">
                Can't see the right one?
              </h2>
              <p className="text-offwhite/70 mt-2 max-w-xl">
                Tell us your spec and budget — Alex sources vehicles nationwide and Colin delivers
                to your door.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-semibold text-amber-foreground min-h-12 transition-all duration-300 hover:bg-amber/90 hover:shadow-lg hover:shadow-amber/25 active:scale-[0.98]"
            >
              Request a Vehicle <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
