import { colorHex } from "./colors";
import { expressionFace } from "./expressions";
import { shapeProfile } from "./shapes";
import { lerpPose, stateDefinition, type StateContext } from "./states";
import type { AvatarAppearance, AvatarPose, AvatarState } from "./types";

export const TRANSITION_SECONDS = 0.28;

export interface AvatarEngine {
  readonly appearance: AvatarAppearance;
  readonly state: AvatarState;
  setAppearance(next: AvatarAppearance, now?: number): void;
  setState(next: AvatarState, now: number): void;
  /** Pure with respect to (appearance, state, stateStart): returns the pose at absolute time `now`. */
  sample(now: number): AvatarPose;
}

function contextFor(appearance: AvatarAppearance): StateContext {
  return {
    appearance,
    baseProfile: shapeProfile(appearance.shape),
    baseFace: expressionFace(appearance.expression),
    fill: colorHex(appearance.color),
  };
}

export function createEngine(appearance: AvatarAppearance, state: AvatarState = "idle", now = 0): AvatarEngine {
  let ctx = contextFor(appearance);
  let current = state;
  let stateStart = now;
  let transitionFrom: AvatarPose | null = null;
  let transitionAt = now;

  const raw = (id: AvatarState, t: number) => stateDefinition(id).sample(Math.max(0, t), ctx);

  const engine: AvatarEngine = {
    get appearance() {
      return ctx.appearance;
    },
    get state() {
      return current;
    },
    setAppearance(next, at) {
      ctx = contextFor(next);
      if (at !== undefined) {
        // Appearance changes morph too.
        transitionFrom = engine.sample(at);
        transitionAt = at;
      }
    },
    setState(next, at) {
      if (next === current) return;
      transitionFrom = engine.sample(at);
      transitionAt = at;
      current = next;
      stateStart = at;
    },
    sample(at) {
      const pose = raw(current, at - stateStart);
      if (transitionFrom) {
        const k = (at - transitionAt) / TRANSITION_SECONDS;
        if (k < 1) return lerpPose(transitionFrom, pose, k);
        transitionFrom = null;
      }
      return pose;
    },
  };
  return engine;
}

/** One-shot, allocation-light sample for static rendering (server components, thumbnails). */
export function samplePose(appearance: AvatarAppearance, state: AvatarState = "idle", t?: number): AvatarPose {
  const def = stateDefinition(state);
  return def.sample(t ?? def.previewAt, contextFor(appearance));
}
