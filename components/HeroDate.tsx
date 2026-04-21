"use client";

import { useEffect, useState } from "react";

// Auto-updating date stamp. Server render produces empty space to avoid
// hydration mismatches across timezones; the date populates on mount.
export default function HeroDate() {
  const [stamp, setStamp] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setStamp(fmt.format(new Date()));
  }, []);

  return (
    <span className="text-tiny text-ink-muted tabular-nums" aria-live="polite">
      {stamp || " "}
    </span>
  );
}
