"use client";

import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type Variant = "rise" | "rise-sm" | "photo";
type Tag = "div" | "section" | "article" | "header" | "footer" | "ul" | "li" | "h1" | "h2" | "h3" | "p" | "span";

type Props = HTMLAttributes<HTMLElement> & {
  as?: Tag;
  variant?: Variant;
  delay?: number; // ms
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  rootMargin?: string;
};

// Fires once when the element first enters view. Sets data-revealed="true"
// for CSS to pick up. Per the brief, animations play once — never on re-entry.
export default function Reveal({
  as = "div",
  variant = "rise",
  delay = 0,
  className,
  style,
  rootMargin = "0px 0px -10% 0px",
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.dataset.revealed === "true") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  const dataAttr =
    variant === "photo" ? { "data-photo": "" } : { "data-reveal": variant };

  return createElement(
    as,
    {
      ref,
      className,
      style: {
        ...style,
        ...(delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : {}),
      },
      ...dataAttr,
      ...rest,
    },
    children,
  );
}
