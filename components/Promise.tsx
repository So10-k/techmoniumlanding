import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";

// Section 3 — sticky-pinned for ~1.5x scroll distance.
// Right-weighted photo, left-weighted copy.
export default function Promise() {
  return (
    <section
      className="relative h-[250vh]"
      aria-labelledby="promise-heading"
    >
      <div className="sticky top-0 flex h-screen items-center px-6 py-12 md:px-12">
        <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <Reveal as="div">
              <h2
                id="promise-heading"
                className="font-sans font-halbfett text-ink text-balance
                  text-[36px] leading-[44px] tracking-[-0.015em]
                  sm:text-[44px] sm:leading-[52px]
                  md:text-section"
              >
                We sit with you until it makes sense.
              </h2>
            </Reveal>
            <Reveal as="div" variant="rise-sm" delay={120} className="mt-12 max-w-[44ch]">
              <p className="font-serif italic text-body text-ink">
                Not a ticket. Not a chat&#8209;bot. A real person, across a table or on a video
                call, who will show you once, write it down if you&rsquo;d like, and answer the
                same question a third time without sighing.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <PhotoPlaceholder
              aspect="4 / 5"
              alt="Two pairs of hands and a phone resting on a wooden table, lit by north window light. Unhurried. Mid-conversation."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
