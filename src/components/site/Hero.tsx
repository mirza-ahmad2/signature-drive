import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Container } from "./Container";

export function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  cta,
  fullScreen = true,
  parallax = false,
  imageAlt,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: ReactNode;
  fullScreen?: boolean;
  parallax?: boolean;
  imageAlt?: string;
}) {
  const heightClass = fullScreen ? "min-h-[100svh]" : "min-h-[92svh]";

  return (
    <section
      className={`relative w-full ${heightClass} flex items-center justify-center overflow-hidden bg-charcoal`}
      aria-label={title}
    >
      <motion.div
        initial={parallax ? { scale: 1.08 } : { scale: 1.03, opacity: 0.88 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={imageAlt || title}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/90" />

      <Container className="relative z-10 text-center py-28">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-amber uppercase tracking-[0.28em] text-xs md:text-sm font-medium mb-5"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-offwhite font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-5xl mx-auto text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="mt-6 text-offwhite/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {cta}
          </motion.div>
        )}
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div className="h-10 w-px bg-gradient-to-b from-amber/70 to-transparent" />
      </div>
    </section>
  );
}
