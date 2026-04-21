import localFont from "next/font/local";
import { Source_Serif_4 } from "next/font/google";

// Söhne (Klim Test build) — Buch + Halbfett, upright only.
// Brief: no italic headlines, no black weight.
export const sohne = localFont({
  src: [
    { path: "./fonts/Sohne-Buch.otf", weight: "400", style: "normal" },
    { path: "./fonts/Sohne-Halbfett.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// Source Serif 4 — closest free stand-in for Tiempos Text.
// Higher contrast than the default; honors the brief's warm-serif intent.
export const serif = Source_Serif_4({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
