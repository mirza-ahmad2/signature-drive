import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Handshake, MessagesSquare, Users, Truck, Image as ImageIcon } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import { Hero } from "@/components/site/Hero";
import { Container } from "@/components/site/Container";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StatCallout } from "@/components/site/StatCallout";
import { Carousel } from "@/components/site/Carousel";
import { TeamMemberCard } from "@/components/site/TeamMemberCard";
import { team } from "@/lib/data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About & Meet the Team",
      description:
        "Signature Vans Direct is a family-run North East dealership led by Daryl Harris. Meet the team behind 40+ years of honest, no-pressure van and truck sales.",
      path: "/about",
      keywords:
        "Daryl Harris, Signature Vans Direct team, family-run van dealership Newcastle, about Signature Vans Direct",
    }),
  component: AboutPage,
});

const values = [
  {
    icon: Handshake,
    title: "No-pressure sales",
    copy: "You'll never be pushed into a vehicle that isn't right for you.",
  },
  {
    icon: MessagesSquare,
    title: "Honest advice",
    copy: "Straight answers on condition, spec, and price — every time.",
  },
  {
    icon: Users,
    title: "Family-run accountability",
    copy: "One team, one owner, one phone number. We stand behind every sale.",
  },
  {
    icon: Truck,
    title: "Nationwide reach",
    copy: "Sourced from anywhere in the UK, delivered to your door.",
  },
];

function AboutPage() {
  return (
    <>
      <Hero
        image={heroAbout}
        imageAlt="The Signature Vans Direct team at the Team Valley, Gateshead prep centre"
        eyebrow="About Signature Vans Direct"
        title="Family-run since day one."
        subtitle="Meet the people behind the forecourt at Team Valley, Gateshead."
      />

      <section className="bg-offwhite py-24 md:py-32">
        <Container className="grid gap-14 md:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6 relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal grid place-items-center shadow-xl shadow-charcoal/10"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,149,42,0.18),transparent_55%)]" />
            <div className="relative grid place-items-center">
              <div className="h-28 w-28 md:h-36 md:w-36 rounded-3xl bg-amber/15 border border-amber/30 grid place-items-center">
                <ImageIcon className="h-14 w-14 md:h-16 md:w-16 text-amber" strokeWidth={1.4} />
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-6">
            <p className="text-amber uppercase tracking-[0.28em] text-xs font-medium mb-4">
              Daryl Harris — Owner
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-charcoal text-balance">
              40 years in the trade. One handshake at a time.
            </h2>
            <div className="mt-6 space-y-5 text-warmgray text-lg leading-relaxed">
              <p>
                Daryl started in the motor trade in the mid-1980s. Four decades later, he's still
                doing it the same way — buying the right vehicles, prepping them properly, and
                treating buyers like people, not leads.
              </p>
              <p>
                Signature Vans Direct grew out of that approach. Today the team sources vans and
                trucks nationwide, preps them at our Team Valley centre, and delivers across the UK.
                It's still a family business — and it still runs on trust.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <StatCallout
        value="8"
        label="People. One team."
        detail="From sales and sourcing to prep, hire and delivery — every job at Signature Vans is done by someone who cares whether you come back."
      />

      <section className="bg-offwhite py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Meet the Team"
            title="The people you'll actually speak to."
            intro="Scroll through the team — every one of them will happily talk you through a vehicle in person, on the phone, or over WhatsApp."
          />
          <div className="mt-14">
            <Carousel ariaLabel="Team members">
              {team.map((m, i) => (
                <TeamMemberCard key={m.name} m={m} index={i} />
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      <section className="bg-steel text-offwhite py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="What we stand for"
            title="Four things we don't compromise on."
            align="center"
            tone="light"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl bg-charcoal/40 border border-white/5 p-8 hover:border-amber/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-amber text-amber-foreground grid place-items-center mb-5">
                  <v.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-offwhite/70 text-sm leading-relaxed">{v.copy}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
