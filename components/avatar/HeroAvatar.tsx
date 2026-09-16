"use client";

import { useEffect, useState } from "react";
import type { AvatarAppearance, AvatarState } from "@/lib/avatar";
import { AnimatedAvatar } from "./AnimatedAvatar";

const LOOK: AvatarAppearance = { shape: "pebble", color: "blue", expression: "happy" };
const CYCLE: AvatarState[] = ["idle", "thinking", "idle", "notification", "idle", "orbit"];

/** The live avatar in the page hero. Wanders through a few states so the page opens on motion. */
export function HeroAvatar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % CYCLE.length), 3200);
    return () => window.clearInterval(id);
  }, []);
  return (
    <AnimatedAvatar
      appearance={LOOK}
      state={CYCLE[i]}
      className="mx-auto h-[min(45vw,160px)] w-[min(45vw,160px)] lg:h-[min(22vw,300px)] lg:w-[min(22vw,300px)]"
      title="A live helper avatar"
    />
  );
}
