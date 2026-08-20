import { motion } from "framer-motion";
import { Container } from "./Container";

export function StatCallout({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <section className="bg-charcoal text-offwhite py-24 md:py-32 overflow-hidden">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-amber uppercase tracking-[0.3em] text-xs mb-6">{label}</p>
          <h2 className="font-display font-bold leading-[0.9] tracking-tighter text-[clamp(4rem,14vw,12rem)]">
            {value}
          </h2>
          {detail && <p className="mt-8 text-offwhite/70 max-w-2xl mx-auto text-lg">{detail}</p>}
        </motion.div>
      </Container>
    </section>
  );
}
