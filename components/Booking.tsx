import Reveal from "./Reveal";

// Section 8 — single clear CTA, two plain links (no side-by-side buttons).
export default function Booking() {
  return (
    <section
      className="flex min-h-screen items-center px-6 py-24 md:px-12 md:py-48"
      aria-labelledby="booking-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <Reveal as="h2" id="booking-heading" className="sr-only">
          Book a session
        </Reveal>
        <div className="flex flex-col gap-12">
          <Reveal as="div">
            <a
              href="/book"
              className="book-btn inline-block rounded-btn bg-ink px-12 py-6 font-sans font-halbfett text-[22px] leading-[28px] text-paper no-underline"
            >
              Book a session &rarr;
            </a>
          </Reveal>
          <Reveal as="div" variant="rise-sm" delay={120}>
            <a
              href="tel:+19735550142"
              className="font-sans text-[28px] leading-[36px] text-ink no-underline hover:text-accent"
            >
              Or call us: (973) 555&#8209;0142
            </a>
          </Reveal>
          <Reveal as="p" variant="rise-sm" delay={240} className="font-serif italic text-body text-ink-muted max-w-[44ch]">
            We pick up Tuesday through Saturday, 9am to 5pm Eastern. If we miss you, we call
            back.
          </Reveal>
        </div>
      </div>

      <style>{`
        .book-btn {
          transition: background-color 120ms linear, transform 80ms ease-out;
        }
        .book-btn:hover { background-color: var(--accent); }
        .book-btn:active { transform: scale(0.98); }
        .book-btn:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 4px;
        }
      `}</style>
    </section>
  );
}
