import { useState } from "react";
import { Send, Check } from "lucide-react";

export function EnquiryForm({ variant = "sale" }: { variant?: "sale" | "hire" | "contact" }) {
  const [sent, setSent] = useState(false);
  const label =
    variant === "hire"
      ? "Request a Hire Quote"
      : variant === "sale"
        ? "Enquire About This Vehicle"
        : "Send Enquiry";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4"
      noValidate={false}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your Name" name="name" autoComplete="name" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <Field
        label="Vehicle of Interest"
        name="vehicle"
        placeholder="e.g. 3.5t Luton, Sprinter, 18T box…"
      />
      <Field label="Message" name="message" as="textarea" rows={5} />

      <button
        type="submit"
        disabled={sent}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-semibold text-amber-foreground min-h-12 transition-all duration-300 hover:bg-amber/90 hover:shadow-md hover:shadow-amber/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none"
      >
        {sent ? (
          <>
            <Check className="h-4 w-4" aria-hidden="true" /> Thanks — we'll be in touch shortly
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" /> {label}
          </>
        )}
      </button>
      <p className="text-xs text-warmgray">
        By submitting you agree to be contacted about your enquiry. We don't pass your details on
        and we don't do hard sell.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  required,
  rows,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
  rows?: number;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = `field-${name}`;
  const base =
    "w-full rounded-xl border border-charcoal/15 bg-offwhite px-4 py-3.5 text-charcoal text-sm placeholder:text-warmgray/70 transition duration-300 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/30";
  return (
    <label className="block" htmlFor={id}>
      <span className="block text-xs font-medium uppercase tracking-wider text-warmgray mb-2">
        {label}
        {required ? <span className="text-amber"> *</span> : null}
      </span>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={base}
        />
      )}
    </label>
  );
}
