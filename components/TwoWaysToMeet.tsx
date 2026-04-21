import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";

// Section 5 — split layout, stacks on mobile.
export default function TwoWaysToMeet() {
  return (
    <section
      className="flex min-h-screen items-center px-6 py-24 md:px-12 md:py-48"
      aria-labelledby="meet-heading"
    >
      <div className="mx-auto w-full max-w-content">
        <Reveal as="h2" className="sr-only">
          <span id="meet-heading">Two ways to meet</span>
        </Reveal>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-16">
          {/* In person */}
          <article className="flex flex-col gap-8">
            <PhotoPlaceholder
              aspect="4 / 3"
              alt="The Boonton workspace: a small wooden desk by a window, two chairs, a notebook, a steady lamp. Lived in, not staged."
            />
            <Reveal as="div" variant="rise-sm">
              <h3 className="font-sans font-halbfett text-ink text-[36px] leading-[44px] tracking-[-0.015em] md:text-[44px] md:leading-[52px]">
                In person.
              </h3>
              <p className="mt-6 font-serif text-body text-ink max-w-[42ch]">
                We meet at a quiet desk in Boonton, New Jersey. Bring whatever&rsquo;s giving you
                trouble &mdash; the phone, the laptop, the envelope of passwords, the printer if
                you can carry it. Sessions run an hour. We start where you are.
              </p>
            </Reveal>
          </article>

          {/* By video */}
          <article className="flex flex-col gap-8">
            <PhotoPlaceholder
              aspect="4 / 3"
              alt="A laptop open on a kitchen counter, a mug of tea beside it, afternoon light. The video call is already connected."
            />
            <Reveal as="div" variant="rise-sm" delay={120}>
              <h3 className="font-sans font-halbfett text-ink text-[36px] leading-[44px] tracking-[-0.015em] md:text-[44px] md:leading-[52px]">
                By video.
              </h3>
              <p className="mt-6 font-serif text-body text-ink max-w-[42ch]">
                Anywhere with a steady connection. If you&rsquo;ve never joined a video call
                before, we&rsquo;ll walk you through it on the phone first, slowly, and stay on
                the line until you&rsquo;re comfortable.
              </p>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  );
}
