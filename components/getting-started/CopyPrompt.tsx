"use client";

import { useEffect, useRef, useState } from "react";

export function CopyPrompt({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // Clipboard unavailable (insecure context or denied). Leave the button as-is.
    }
  };

  return (
    <button type="button" onClick={copy} className="pill" aria-label={`Copy: ${label}`}>
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
