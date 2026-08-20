import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
import { Container } from "./Container";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/for-sale", label: "For Sale" },
  { to: "/hire", label: "Hire" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite/80">
      <Container className="py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
            <span className="text-sm font-display font-semibold uppercase tracking-wide text-offwhite">
              Signature Vans Direct
            </span>
          </div>
          <p className="text-sm text-offwhite/60 max-w-md leading-relaxed">
            A family-run van and truck dealership serving the North East for over 40 years. Honest
            advice, no pressure, and vehicles you can trust with your business.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-offwhite text-sm uppercase tracking-wider mb-4">
            Navigate
          </h2>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="hover:text-amber transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-offwhite text-sm uppercase tracking-wider mb-4">
            Visit Us
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-amber" aria-hidden="true" />
              388 West Road, Newcastle Upon Tyne, NE5 2ER
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-amber" aria-hidden="true" />
              Prep Centre — Team Valley, Gateshead
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-amber" aria-hidden="true" />
              <span>Add here text</span>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-amber" aria-hidden="true" />
              <span>Add here text</span>
            </li>
            <li className="flex gap-2">
              <Share2 className="h-4 w-4 shrink-0 mt-0.5 text-amber" aria-hidden="true" />
              <span>Add here text</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-offwhite/50">
          <p>© {new Date().getFullYear()} Signature Vans Direct. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-sm"
            >
              The Innovations
            </a>
            .
          </p>
        </Container>
      </div>
    </footer>
  );
}
