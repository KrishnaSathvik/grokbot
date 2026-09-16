"use client";

import { useEffect, useState, useSyncExternalStore, type RefObject } from "react";
import { createEngine, type AvatarAppearance, type AvatarEngine, type AvatarPose, type AvatarState } from "@/lib/avatar";
import { now, subscribe } from "./ticker";

const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getReduced = () => window.matchMedia(REDUCED).matches;
const getReducedServer = () => false;

/**
 * Drives one engine from the shared ticker. Pauses when the element is off
 * screen, when `paused` is set, or when the visitor prefers reduced motion
 * (in which case a single representative frame is shown).
 */
export function useAvatarClock(
  ref: RefObject<Element | null>,
  appearance: AvatarAppearance,
  state: AvatarState,
  paused = false,
): AvatarPose {
  const [engine] = useState<AvatarEngine>(() => createEngine(appearance, state, 0));
  const [pose, setPose] = useState<AvatarPose>(() => engine.sample(0));
  const [visible, setVisible] = useState(true);
  const reduced = useSyncExternalStore(subscribeReduced, getReduced, getReducedServer);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "80px" });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  useEffect(() => {
    // Sync the engine with props; the next tick (or the frame below) picks it up.
    engine.setAppearance(appearance, now());
    engine.setState(state, now());
    if (paused || !visible || reduced) {
      // Still frame: render one sample after the transition would have settled.
      const t = now();
      const id = window.setTimeout(() => setPose(engine.sample(t + 1)), 0);
      return () => window.clearTimeout(id);
    }
    return subscribe((t) => setPose(engine.sample(t)));
  }, [engine, appearance, state, paused, visible, reduced]);

  return pose;
}
