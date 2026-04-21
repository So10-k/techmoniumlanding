import Reveal from "./Reveal";

const ROWS = [
  { label: "Single session", price: "$65 / hour" },
  { label: "Monthly support (up to 4 hours)", price: "$180 / month" },
  { label: "Family plan (up to 3 people)", price: "$250 / month" },
];

// Section 7 — typographic menu with leader dots, not tier cards.
// Leader dots done with flex-1 + repeating dotted border for clean alignment
// across line widths.
export default function Pricing() {
  return (
    <section
      className="flex min-h-screen items-center px-6 py-24 md:px-12 md:py-48"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <Reveal as="h2" id="pricing-heading" className="sr-only">
          Pricing
        </Reveal>
        <div className="border-y border-hairline">
          {ROWS.map((row, i) => (
            <Reveal
              key={row.label}
              delay={i * 100}
              className="flex items-baseline gap-4 border-b border-hairline py-8 last:border-b-0 md:gap-6 md:py-12"
            >
              <span className="font-serif text-body text-ink md:text-subhead">{row.label}</span>
              <span
                aria-hidden="true"
                className="leader-dots flex-1 self-end translate-y-[-6px]"
              />
              <span className="font-sans font-halbfett text-body text-ink md:text-subhead tabular-nums">
                {row.price}
              </span>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" variant="rise-sm" delay={400} className="mt-8 font-serif text-tiny text-ink-muted italic">
          No auto&#8209;renewal. Cancel by email or phone.
        </Reveal>
      </div>

      <style>{`
        .leader-dots {
          height: 1px;
          background-image: radial-gradient(circle, #6B6458 1px, transparent 1.5px);
          background-size: 8px 8px;
          background-repeat: repeat-x;
          background-position: left center;
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
}
