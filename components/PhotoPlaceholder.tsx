import Reveal from "./Reveal";

type Props = {
  /** Aspect ratio as `w / h`, e.g. "4 / 5", "16 / 9". */
  aspect?: string;
  /** Alt text — written in brand voice for the eventual real photo. */
  alt: string;
  className?: string;
};

// Hairline-block stand-in. Real photographs will replace these one-for-one.
// The alt text is the spec for the photographer, in voice.
export default function PhotoPlaceholder({ aspect = "4 / 5", alt, className }: Props) {
  return (
    <Reveal variant="photo" className={className} style={{ aspectRatio: aspect }}>
      <div className="photo-inner h-full w-full bg-hairline" role="img" aria-label={alt}>
        <span className="sr-only">{alt}</span>
      </div>
    </Reveal>
  );
}
