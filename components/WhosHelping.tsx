import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";

// Section 6 — portrait left, letter right. Reads like a letter, not an About.
export default function WhosHelping() {
  return (
    <section
      className="flex min-h-screen items-center px-6 py-24 md:px-12 md:py-48"
      aria-labelledby="whos-heading"
    >
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-24">
        <div className="md:col-span-5">
          <PhotoPlaceholder
            aspect="4 / 5"
            alt="A portrait of the founder at the workspace. Looking at the camera, half-smiling, no props. Photographed against the window, the light doing most of the work."
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal as="h2" id="whos-heading" className="sr-only">
            Who&rsquo;s helping
          </Reveal>
          <Reveal as="div">
            <p className="font-serif text-body text-ink max-w-[44ch]">
              I started Techmonium because the people I love most kept apologizing for not
              understanding things they were never given a fair chance to understand. My mother
              would call about a notification. My uncle would mute himself for a week, sure
              he&rsquo;d broken his phone. They are sharp, careful, capable people, and the
              tools were the problem, not them.
            </p>
            <p className="mt-6 font-serif text-body text-ink max-w-[44ch]">
              So I sit with people. I show them once. I write it down if they&rsquo;d like.
              I answer the same question a third time without sighing, because it&rsquo;s a
              good question and it deserves a good answer. There is no script and no upsell.
              We take as long as you need.
            </p>
            <p className="mt-6 font-serif text-body text-ink max-w-[44ch]">
              If any of this sounds like what you&rsquo;ve been looking for, I&rsquo;d be glad
              to meet you.
            </p>
          </Reveal>
          <Reveal as="div" variant="rise-sm" delay={200} className="mt-12">
            {/* Signature placeholder — replace with a scanned PNG/SVG asset.
                Hairline block at signature aspect; alt is the spec. */}
            <div
              className="bg-hairline"
              style={{ width: 220, height: 64 }}
              role="img"
              aria-label="Signature: a single-stroke first name in dark ink, slightly slanted."
            />
            <p className="mt-3 text-tiny uppercase tracking-[0.08em] text-ink-muted font-halbfett">
              Founder, Techmonium
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
