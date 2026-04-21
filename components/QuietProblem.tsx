import Reveal from "./Reveal";

// Section 2 — left-weighted: heading column, body column.
export default function QuietProblem() {
  return (
    <section
      className="flex min-h-screen items-center px-6 py-24 md:px-12 md:py-48"
      aria-labelledby="quiet-problem-heading"
    >
      <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-16 md:grid-cols-12 md:gap-24">
        <Reveal as="div" className="md:col-span-5">
          <h2
            id="quiet-problem-heading"
            className="font-sans font-halbfett text-ink text-balance
              text-[36px] leading-[44px] tracking-[-0.015em]
              sm:text-[44px] sm:leading-[52px]
              md:text-section"
          >
            Everything changes. Nothing explains itself.
          </h2>
        </Reveal>
        <Reveal as="div" variant="rise-sm" delay={120} className="md:col-span-6 md:col-start-7">
          <p className="font-serif text-body text-ink">
            The phone updates overnight and the buttons move. The email says something alarming
            and you can&rsquo;t tell if it&rsquo;s real. The printer refuses. The password wants
            fifteen characters with a symbol you don&rsquo;t know how to type. It&rsquo;s
            exhausting, and it isn&rsquo;t your fault.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
