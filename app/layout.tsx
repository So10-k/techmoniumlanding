import type { Metadata } from "next";
import { sohne, serif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techmonium — Technology, one patient conversation at a time.",
  description:
    "One-on-one technology help for adults who are tired of guessing. In-person in Boonton, NJ, or by video anywhere.",
  themeColor: "#F5F0E6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sohne.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
