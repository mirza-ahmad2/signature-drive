import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CalendarRange, Building2 } from "lucide-react";
import heroHire from "@/assets/hero-hire.jpg";
import { Hero } from "@/components/site/Hero";
import { Container } from "@/components/site/Container";
import { SectionHeader } from "@/components/site/SectionHeader";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/hire")({
  head: () =>
    pageHead({
      title: "Van & Truck Hire in Newcastle & Gateshead",
      description:
        "Short-term, long-term and trade van & truck hire from Team Valley, Gateshead. Straightforward rates, clean vehicles, family-run service.",
      path: "/hire",
      keywords:
        "van hire Newcastle, truck hire Gateshead, Team Valley van hire, trade hire North East, long-term van hire",
    }),
  component: HirePage,
});

const options = [
  {
    icon: CalendarDays,
    title: "Short-Term Hire",
    copy: "By the day or by the week. Ideal for one-off jobs, moves, or covering a vehicle that's off the road.",
  },
  {
    icon: CalendarRange,
    title: "Long-Term Hire",
    copy: "Monthly hire with flexible rolling terms — get a reliable van without tying capital up in a purchase.",
  },
  {
    icon: Building2,
    title: "Trade Hire",
    copy: "Preferential rates for local trades and businesses running fleet cover. Talk to us about your needs.",
  },
];

function HirePage() {
  return (
    <>
      <Hero
        image={heroHire}
        imageAlt="Clean vans and trucks available to hire from Signature Vans Direct in Team Valley"
        eyebrow="Van & Truck Hire"
        title="A clean, reliable van — for as long as you need it."
        subtitle="Short-term, long-term or trade hire from our Team Valley depot. Straight rates. No hidden extras."
      />

      <section className="bg-offwhite py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Hire Options"
            title="Three ways to hire from us."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {options.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm hover:border-amber/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-charcoal text-amber grid place-items-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  <o.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-charcoal">{o.title}</h3>
                <p className="mt-3 text-warmgray leading-relaxed">{o.copy}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-steel text-offwhite py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-amber uppercase tracking-[0.28em] text-xs font-medium mb-4">
              Request a Quote
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              Tell us what you need. We'll come back today.
            </h2>
            <p className="mt-6 text-offwhite/70 leading-relaxed">
              Give us a vehicle type, rough dates, and a phone number — Nicola or Scott will get
              back to you with availability and a straight price. No pushy follow-ups.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber hover:text-offwhite transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-sm"
            >
              Prefer to call? Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7 rounded-2xl bg-white p-6 md:p-10 text-charcoal shadow-lg">
            <EnquiryForm variant="hire" />
          </div>
        </Container>
      </section>
    </>
  );
}
