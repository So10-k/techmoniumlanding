import Reveal from "./Reveal";

const ITEMS = [
  "Your phone.",
  "Your email.",
  "Your photos, and where they went.",
  "Your passwords.",
  "Your printer, honestly.",
  "Your bank's app after their redesign.",
  "Anything that used to work and suddenly doesn't.",
];

// Section 4 — vertical typographic list. No icons, no cards.
// Hairline rule between each line.
export default function WhatWeHelpWith() {
  return (
    <section
      className="flex min-h-screen items-center px-6 py-24 md:px-12 md:py-48"
      aria-labelledby="help-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <Reveal as="h2" className="sr-only">
          <span id="help-heading">What we help with</span>
        </Reveal>
        <ul className="border-t border-hairline">
          {ITEMS.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 90}
              className="border-b border-hairline
                font-sans font-buch text-ink
                py-6 text-[28px] leading-[40px]
                sm:py-8 sm:text-[36px] sm:leading-[52px]
                md:py-12 md:text-list"
            >
              {item}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
