import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";
import { Hero } from "@/components/site/Hero";
import { Container } from "@/components/site/Container";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SocialConnect } from "@/components/site/SocialConnect";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Signature Vans Direct — Newcastle & Team Valley",
      description:
        "Get in touch with Signature Vans Direct. Showroom on West Road, Newcastle. Prep centre at Team Valley, Gateshead. Call in — no appointment needed.",
      path: "/contact",
      keywords:
        "contact Signature Vans Direct, van dealership Newcastle, Team Valley Gateshead, West Road Newcastle vans",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Hero
        image={heroContact}
        imageAlt="Visit Signature Vans Direct in Newcastle and Team Valley, Gateshead"
        eyebrow="Get in Touch"
        title="Call in, no appointment needed — or drop us a message."
      />

      <section className="bg-offwhite py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="text-amber uppercase tracking-[0.28em] text-xs font-medium mb-4">
                Visit
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-[1.05] tracking-tight text-charcoal">
                Two sites across the North East.
              </h2>
            </div>

            <div className="grid gap-6">
              <ContactBlock
                icon={MapPin}
                title="Showroom"
                lines={["388 West Road", "Newcastle Upon Tyne", "NE5 2ER"]}
              />
              <ContactBlock
                icon={MapPin}
                title="Prep Centre"
                lines={["Team Valley", "Gateshead"]}
              />
              <ContactBlock icon={Phone} title="Phone" lines={["Add here text"]} />
              <ContactBlock icon={Mail} title="Email" lines={["Add here text"]} />
              <ContactBlock
                icon={Clock}
                title="Opening Hours"
                lines={["Mon–Fri · 9:00 – 17:30", "Sat · 10:00 – 15:00", "Sun · By appointment"]}
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="rounded-2xl border border-charcoal/10 bg-white p-6 md:p-10 shadow-sm">
              <p className="text-charcoal font-display text-lg mb-2">Send us an enquiry</p>
              <p className="text-warmgray text-sm mb-6">
                Whether you're after a specific van, quote for hire, or just a second opinion —
                we'll come back to you today.
              </p>
              <EnquiryForm variant="contact" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 md:py-32 border-t border-charcoal/5">
        <Container>
          <p className="text-amber uppercase tracking-[0.28em] text-xs font-medium mb-8">
            Social Media
          </p>
          <SocialConnect />
        </Container>
      </section>
    </>
  );
}

function ContactBlock({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof MapPin;
  title: string;
  lines: ReactNode[];
}) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 rounded-xl bg-charcoal text-amber grid place-items-center shrink-0">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-display text-charcoal font-semibold">{title}</h3>
        <div className="text-warmgray text-sm mt-1 space-y-0.5">
          {lines.map((l, i) => (
            <p key={i}>{l}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
