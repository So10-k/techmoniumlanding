import HeroDate from "./HeroDate";

const SENTENCE = "Technology, one patient conversation at a time.";

// Hero word reveal: pure CSS, fires on load. No JS, no IntersectionObserver
// needed — the hero is always above the fold.
// Wordmark reveals 300ms before the first word per the brief.
export default function Hero() {
  const words = SENTENCE.split(" ");
  const wordmarkDelay = 0;
  const firstWordDelay = 300;
  const wordStagger = 80;

  return (
    // Sticky-pin: 200vh outer, 100vh sticky inner. The user scrolls and the
    // hero holds for an extra ~1x viewport before releasing.
    <section className="relative h-[200vh]" aria-label="Techmonium">
      <div className="sticky top-0 flex h-screen flex-col">
        {/* Top bar: wordmark left */}
        <header className="flex items-start justify-between px-6 pt-6 md:px-12 md:pt-12">
          <span
            className="hero-load font-sans font-halbfett text-[24px] tracking-[0.01em] text-ink"
            style={{ animationDelay: `${wordmarkDelay}ms` }}
          >
            Techmonium
          </span>
        </header>

        {/* Centered sentence */}
        <div className="flex flex-1 items-center justify-center px-6 md:px-12">
          <h1
            className="font-serif italic text-ink text-balance text-center
              text-[40px] leading-[48px] tracking-[-0.015em]
              sm:text-[56px] sm:leading-[64px]
              md:text-[64px] md:leading-[72px]
              lg:text-[72px] lg:leading-[80px]
              max-w-[18ch]"
          >
            {words.map((w, i) => (
              <span
                key={i}
                className="hero-word inline-block"
                style={{ animationDelay: `${firstWordDelay + i * wordStagger}ms` }}
              >
                {w}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
        </div>

        {/* Caption above bottom row */}
        <div className="flex items-end justify-between px-6 pb-6 md:px-12 md:pb-12">
          <div className="flex flex-col gap-3">
            <span
              className="hero-load text-caption font-halbfett uppercase text-ink-muted"
              style={{ animationDelay: `${firstWordDelay + words.length * wordStagger + 100}ms` }}
            >
              In&#8209;person in Boonton · Video anywhere
            </span>
            <a
              href="tel:+19735550142"
              className="hero-load font-sans text-[22px] leading-[28px] text-ink no-underline hover:text-accent"
              style={{ animationDelay: `${firstWordDelay + words.length * wordStagger + 200}ms` }}
            >
              (973) 555&#8209;0142
            </a>
          </div>
          <div
            className="hero-load self-end text-right"
            style={{ animationDelay: `${firstWordDelay + words.length * wordStagger + 300}ms` }}
          >
            <HeroDate />
          </div>
        </div>
      </div>

      <style>{`
        .hero-word, .hero-load {
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          animation: heroRise 700ms var(--ease-apple) forwards;
        }
        @keyframes heroRise {
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-word, .hero-load {
            animation-duration: 300ms;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
