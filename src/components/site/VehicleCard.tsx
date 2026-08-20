import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export type Vehicle = {
  title: string;
  type: string;
  image: string;
  specs: string[];
  price?: string;
};

export function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm hover:border-amber/40 hover:shadow-xl hover:shadow-charcoal/10 hover:-translate-y-1 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eeece7]">
        <img
          src={v.image}
          alt={`${v.title} — ${v.type} for sale at Signature Vans Direct`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-charcoal/90 backdrop-blur text-offwhite text-[10px] uppercase tracking-widest px-3 py-1">
          {v.type}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-charcoal">{v.title}</h3>
          {v.price && <span className="text-sm text-warmgray whitespace-nowrap">{v.price}</span>}
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-warmgray">
          {v.specs.map((s) => (
            <li key={s} className="before:content-['—'] before:mr-1.5 before:text-amber">
              {s}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal group-hover:text-amber transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-sm"
        >
          Enquire About This Vehicle
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
