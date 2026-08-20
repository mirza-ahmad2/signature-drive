import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Truck, KeyRound, MapPinned, Quote } from "lucide-react";
import heroForecourt from "@/assets/hero-forecourt.jpg";
import { Hero } from "@/components/site/Hero";
import { Container } from "@/components/site/Container";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StatCallout } from "@/components/site/StatCallout";
import { VehicleCard } from "@/components/site/VehicleCard";
import { Carousel } from "@/components/site/Carousel";
import { vehicles } from "@/lib/data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Signature Vans Direct — Vans & Trucks You Can Trust",
      description:
        "Family-run van and truck dealership serving Newcastle, Gateshead and the North East for over 40 years. Sale, hire and nationwide sourcing.",
      path: "/",
      keywords:
        "van sales Newcastle, truck sales Gateshead, van hire North East, commercial vehicles Team Valley, Signature Vans Direct",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero
        image={heroForecourt}
        parallax
        fullScreen={false}
        imageAlt="Signature Vans Direct forecourt with vans and trucks ready for sale and hire in Newcastle"
        eyebrow="Newcastle · Gateshead · Team Valley"
        title="Vans & Trucks You Can Trust."
        subtitle="Family-run, no-pressure, straight-talking — serving the North East for over 40 years."
        cta={
          <>
            <Link
              to="/for-sale"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-semibold text-amber-foreground min-h-12 transition-all duration-300 hover:bg-amber/90 hover:shadow-lg hover:shadow-amber/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offwhite"
            >
              Browse Our Stock <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/hire"
              className="inline-flex items-center gap-2 rounded-full border border-offwhite/30 px-7 py-4 text-sm font-semibold text-offwhite min-h-12 transition-all duration-300 hover:bg-offwhite hover:text-charcoal active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offwhite"
            >
              Van & Truck Hire
            </Link>
          </>
        }
      />

      <StatCallout
        value="40+"
        label="Years in the motor trade"
        detail="Built one honest deal at a time by owner Daryl Harris and a team that's been in the game since long before online-only dealerships turned up."
      />

      <section className="bg-offwhite py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="In Stock Now"
              title="Featured vans and trucks"
              intro="A rotating look at what's currently on the forecourt and in prep. Every vehicle is inspected, cleaned, and ready to work."
            />
            <Link
              to="/for-sale"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-amber transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-sm"
            >
              View all stock <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Carousel ariaLabel="Featured stock">
            {vehicles.slice(0, 5).map((v) => (
              <VehicleCard key={v.title} v={v} />
            ))}
          </Carousel>
        </Container>
      </section>

      <section className="bg-steel text-offwhite py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <p className="text-amber uppercase tracking-[0.28em] text-xs font-medium mb-4">
              Why Signature Vans
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              A family business, not a sales pitch.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-5 text-offwhite/80 text-lg leading-relaxed">
            <p>
              Signature Vans Direct is run by Daryl Harris and a small team who have known the North
              East trade for decades. We source vans and trucks the way we always have — buying
              carefully, prepping them properly at our Team Valley centre, and pricing them
              honestly.
            </p>
            <p>
              You'll get a straight answer on the phone, a proper look at the vehicle when you
              visit, and the same person on the other end of the line after you drive it away.
              That's the whole idea.
            </p>
            <div className="flex items-start gap-3 pt-4 border-t border-offwhite/10 mt-6">
              <Quote className="h-5 w-5 text-amber shrink-0 mt-1" aria-hidden="true" />
              <p className="text-offwhite/70 italic">
                "If it's not the right van for you, I'll tell you. That's how we've done it for 40
                years."
                <span className="not-italic block mt-2 text-sm text-offwhite/50">
                  — Daryl Harris, Owner
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Sale, hire, and nationwide sourcing."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Truck,
                title: "Vehicle Sales",
                copy: "Small box vans through to 26-tonners. Every vehicle prepped, inspected and honestly described.",
                to: "/for-sale",
                cta: "Browse stock",
              },
              {
                icon: KeyRound,
                title: "Van & Truck Hire",
                copy: "Short-term, long-term and trade hire. Straightforward rates, clean vehicles, no surprises.",
                to: "/hire",
                cta: "See hire options",
              },
              {
                icon: MapPinned,
                title: "Sourcing & Delivery",
                copy: "Can't find the right van? We'll source it nationwide and deliver to your door across the UK.",
                to: "/contact",
                cta: "Tell us what you need",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm hover:border-amber/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-charcoal text-amber grid place-items-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-charcoal">{s.title}</h3>
                <p className="mt-3 text-warmgray leading-relaxed">{s.copy}</p>
                <Link
                  to={s.to}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal group-hover:text-amber transition-colors duration-300"
                >
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-amber text-amber-foreground py-24 md:py-28">
        <Container className="grid md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-8">
            <p className="uppercase tracking-[0.28em] text-xs font-medium mb-4 text-charcoal/70">
              Ready when you are
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1] tracking-tight text-balance">
              Enquire today. We'll pick up the phone.
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold text-offwhite min-h-12 transition-all duration-300 hover:bg-charcoal/90 hover:shadow-lg active:scale-[0.98]"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
