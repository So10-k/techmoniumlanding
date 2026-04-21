import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    // Replace defaults — only the brief's tokens exist.
    screens: {
      sm: "640px",
      md: "900px",
      lg: "1200px",
    },
    colors: {
      transparent: "transparent",
      paper: "#F5F0E6",
      ink: "#1A1814",
      "ink-muted": "#6B6458",
      accent: "#1F4E4F",
      hairline: "#D8D0BF",
    },
    spacing: {
      0: "0",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      6: "24px",
      8: "32px",
      12: "48px",
      16: "64px",
      24: "96px",
      32: "128px",
      48: "192px",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0",
      btn: "6px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
    },
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      serif: ["var(--font-serif)", "Georgia", "serif"],
    },
    fontWeight: {
      buch: "400",
      halbfett: "600",
    },
    fontSize: {
      // [size, { lineHeight, letterSpacing }]
      caption: ["15px", { lineHeight: "22px", letterSpacing: "0.08em" }],
      body: ["22px", { lineHeight: "34px", letterSpacing: "0" }],
      subhead: ["28px", { lineHeight: "38px", letterSpacing: "-0.005em" }],
      section: ["56px", { lineHeight: "64px", letterSpacing: "-0.015em" }],
      hero: ["96px", { lineHeight: "104px", letterSpacing: "-0.02em" }],
      list: ["48px", { lineHeight: "72px", letterSpacing: "-0.01em" }],
      tiny: ["13px", { lineHeight: "18px", letterSpacing: "0.02em" }],
    },
    extend: {
      maxWidth: { content: "1280px" },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
