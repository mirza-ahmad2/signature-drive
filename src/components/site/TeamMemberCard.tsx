import { motion } from "framer-motion";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export function TeamMemberCard({ m, index }: { m: TeamMember; index: number }) {
  const initials = m.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.06 }}
      className="h-full"
    >
      <div className="rounded-2xl bg-white border border-black/5 p-6 h-full shadow-sm hover:shadow-lg hover:shadow-charcoal/10 hover:border-amber/30 hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div
            className="h-14 w-14 rounded-full bg-charcoal text-offwhite grid place-items-center font-display font-bold"
            aria-hidden="true"
          >
            {initials}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal leading-tight">
              {m.name}
            </h3>
            <p className="text-sm text-amber">{m.role}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-warmgray leading-relaxed">{m.bio}</p>
      </div>
    </motion.article>
  );
}
