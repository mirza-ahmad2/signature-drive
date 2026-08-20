import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "./Container";

const links = [
  { to: "/", label: "Home" },
  { to: "/for-sale", label: "For Sale" },
  { to: "/hire", label: "Hire" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-charcoal/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 md:h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-offwhite rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          aria-label="Signature Vans Direct home"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase">
            Signature Vans Direct
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative text-sm text-offwhite/80 hover:text-amber transition-colors duration-300 data-[status=active]:text-amber after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-amber after:transition-all after:duration-300 hover:after:w-full data-[status=active]:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+441912000000"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-4 py-2 text-sm font-semibold text-amber-foreground transition-all duration-300 hover:bg-amber/90 hover:shadow-md hover:shadow-amber/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Us
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden text-offwhite p-2 rounded-md min-h-11 min-w-11 grid place-items-center transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/5"
      >
        <Container className="py-6 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-offwhite/90 text-lg font-display py-2 data-[status=active]:text-amber rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+441912000000"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-4 py-3 text-sm font-semibold text-amber-foreground min-h-11"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Us
          </a>
        </Container>
      </div>
    </header>
  );
}
