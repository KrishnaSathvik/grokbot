import { colorHex, NOTIFICATION_BLUE } from "./colors";
import { expressionFace } from "./expressions";
import { lerpFace, mapFace } from "./face";
import { easeInOut, lerpProfile, scaleProfile } from "./morph";
import { circle, cometBody, egg, flatPebble, hexagon, shapeProfile, squircle } from "./shapes";
import type { AvatarAppearance, AvatarPose, AvatarState, Effect, FacePose, RadialProfile } from "./types";

export interface StateContext {
  appearance: AvatarAppearance;
  /** The user's chosen silhouette. */
  baseProfile: RadialProfile;
  /** The user's chosen expression. */
  baseFace: FacePose;
  fill: string;
}

export interface StateDefinition {
  id: AvatarState;
  name: string;
  /** True when the state keeps the user's chosen shape. */
  baseBody: boolean;
  /** Loop length in seconds. */
  duration: number;
  /** A time (seconds) at which a still frame reads well as a thumbnail. */
  previewAt: number;
  sample(t: number, ctx: StateContext): AvatarPose;
}

const TAU = Math.PI * 2;
const still = (ctx: StateContext, profile: RadialProfile, face: FacePose | null): AvatarPose => ({
  profile,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  x: 0,
  y: 0,
  rotation: 0,
  fill: ctx.fill,
  face,
  effects: [],
});

/** Periodic blink: 1 most of the time, dips to 0 briefly every `period` seconds. */
export function blink(t: number, period = 3.8, length = 0.16, phase = 0): number {
  const local = ((t + phase) % period + period) % period;
  if (local > length) return 1;
  const u = local / length; // 0..1
  return 1 - Math.sin(u * Math.PI);
}

export function breathe(t: number, amount = 0.015, period = 3.2): number {
  return 1 + Math.sin((t / period) * TAU) * amount;
}

const NEUTRAL = expressionFace("neutral");
const CLOSED = mapFace(NEUTRAL, (e) => ({ ...e, openness: 0 }));

const idle: StateDefinition = {
  id: "idle",
  name: "Idle",
  baseBody: true,
  duration: 6,
  previewAt: 0.6,
  sample(t, ctx) {
    const s = breathe(t);
    const look = Math.sin((t / 6) * TAU) * 6;
    const b = blink(t);
    const face = mapFace({ ...ctx.baseFace, yaw: ctx.baseFace.yaw + look }, (e) => ({
      ...e,
      openness: e.openness * b,
    }));
    return { ...still(ctx, ctx.baseProfile, face), scale: s, scaleX: 1, scaleY: 1 };
  },
};

const thinking: StateDefinition = {
  id: "thinking",
  name: "Thinking",
  baseBody: false,
  duration: 1.2,
  previewAt: 0.25,
  sample(t, ctx) {
    const effects: Effect[] = [];
    for (let i = 0; i < 3; i++) {
      const phase = (t / 1.2 - i * 0.18) % 1;
      const bob = Math.max(0, Math.sin(phase * TAU)) * 0.14;
      effects.push({
        kind: "dot",
        layer: "front",
        x: (i - 1) * 0.36,
        y: -bob + 0.02,
        r: 0.11,
        fill: "#ffffff",
        opacity: 0.6 + 0.4 * Math.max(0, Math.sin(phase * TAU)),
      });
    }
    return { ...still(ctx, circle(), null), scale: breathe(t, 0.02, 1.2), effects };
  },
};

const wink: StateDefinition = {
  id: "wink",
  name: "Wink",
  baseBody: true,
  duration: 2.4,
  previewAt: 0.9,
  sample(t, ctx) {
    const local = t % 2.4;
    // closed from 0.5s → 1.3s with soft edges
    const shut = easeInOut((local - 0.4) / 0.2) * (1 - easeInOut((local - 1.2) / 0.25));
    const face = mapFace({ ...ctx.baseFace, roll: ctx.baseFace.roll - 6 * shut }, (e, side) =>
      side === "right"
        ? { ...e, openness: e.openness * (1 - shut) + 0.0, tilt: e.tilt + 14 * shut }
        : { ...e, openness: e.openness * blink(t, 5, 0.16, 2) },
    );
    return { ...still(ctx, ctx.baseProfile, face), scale: breathe(t), rotation: -3 * shut };
  },
};

const wideEyes: StateDefinition = {
  id: "wideEyes",
  name: "Wide eyes",
  baseBody: true,
  duration: 3,
  previewAt: 0.8,
  sample(t, ctx) {
    const pop = 1 + 0.15 * easeInOut(Math.sin((t / 3) * TAU) * 0.5 + 0.5);
    const face = mapFace({ ...ctx.baseFace, pitch: -6, eyeSpacing: 0.38 }, (e) => ({
      ...e,
      width: 0.3 * pop,
      height: 0.34 * pop,
      openness: 1,
      tilt: 0,
    }));
    return { ...still(ctx, ctx.baseProfile, face), scale: 1.03, scaleX: 1, scaleY: 1 };
  },
};

const alert: StateDefinition = {
  id: "alert",
  name: "Alert",
  baseBody: false,
  duration: 1.6,
  previewAt: 0.15,
  sample(t, ctx) {
    const local = t % 1.6;
    const jitter = local < 0.6 ? Math.sin(local * 40) * 0.04 * (1 - local / 0.6) : 0;
    const tall = scaleProfile(shapeProfile("capsule"), 0.9, 1.08);
    const face = mapFace({ ...NEUTRAL, pitch: -8, eyeSpacing: 0.3 }, (e) => ({
      ...e,
      width: 0.14,
      height: 0.44,
      openness: 1,
    }));
    return { ...still(ctx, tall, face), x: jitter, y: -0.04, scale: 0.98 };
  },
};

const notification: StateDefinition = {
  id: "notification",
  name: "Notification",
  baseBody: true,
  duration: 2,
  previewAt: 0.5,
  sample(t, ctx) {
    const pulse = 1 + 0.12 * Math.sin((t / 2) * TAU);
    const face = mapFace({ ...ctx.baseFace, yaw: 16, pitch: -10 }, (e) => ({
      ...e,
      openness: Math.max(e.openness, 0.9) * blink(t, 4.2, 0.16, 1),
    }));
    const effects: Effect[] = [
      { kind: "dot", layer: "front", x: 0.74, y: -0.74, r: 0.19 * pulse, fill: NOTIFICATION_BLUE },
      { kind: "dot", layer: "front", x: 0.74, y: -0.74, r: 0.19 * pulse + 0.06, fill: NOTIFICATION_BLUE, opacity: 0.25 },
    ];
    return { ...still(ctx, ctx.baseProfile, face), scale: breathe(t), effects };
  },
};

const exclamation: StateDefinition = {
  id: "exclamation",
  name: "Exclamation",
  baseBody: false,
  duration: 2,
  previewAt: 0.5,
  sample(t, ctx) {
    const local = t % 2;
    const drop = easeInOut(local / 0.35); // 0 → 1
    const squash = 1 - 0.12 * Math.sin(Math.min(1, local / 0.5) * Math.PI);
    const face = mapFace({ ...NEUTRAL, pitch: -14, eyeSpacing: 0.36 }, (e) => ({
      ...e,
      width: 0.24,
      height: 0.36,
      openness: 1,
    }));
    const markY = -1.55 + (1 - drop) * -0.6;
    const effects: Effect[] = [
      { kind: "bar", layer: "front", x: 0, y: markY, w: 0.2, h: 0.52, rotation: 0, fill: ctx.fill, opacity: drop },
      { kind: "dot", layer: "front", x: 0, y: markY + 0.5, r: 0.11, fill: ctx.fill, opacity: drop },
    ];
    return { ...still(ctx, squircle(), face), scaleX: 1 / squash, scaleY: squash, y: 0.12, effects };
  },
};

const sleep: StateDefinition = {
  id: "sleep",
  name: "Sleep",
  baseBody: false,
  duration: 4,
  previewAt: 1,
  sample(t, ctx) {
    const s = breathe(t, 0.03, 4);
    const effects: Effect[] = [];
    for (let i = 0; i < 3; i++) {
      const phase = ((t / 4) + i / 3) % 1;
      effects.push({
        kind: "text",
        layer: "front",
        text: "z",
        x: 0.75 + phase * 0.35 + Math.sin(phase * TAU) * 0.08,
        y: -0.7 - phase * 0.9,
        size: 0.24 + phase * 0.2,
        fill: ctx.fill,
        opacity: Math.sin(phase * Math.PI) * 0.9,
        rotation: -10,
      });
    }
    return { ...still(ctx, flatPebble(), { ...CLOSED, pitch: 6 }), scaleX: s, scaleY: 2 - s, y: 0.1, effects };
  },
};

const eggState: StateDefinition = {
  id: "egg",
  name: "Egg",
  baseBody: false,
  duration: 2.6,
  previewAt: 0.4,
  sample(t, ctx) {
    const rock = Math.sin((t / 2.6) * TAU) * 9;
    const face = mapFace({ ...NEUTRAL, pitch: 4, eyeSpacing: 0.3 }, (e) => ({
      ...e,
      width: 0.14,
      height: 0.2,
      openness: blink(t, 3.1, 0.14, 0.7),
    }));
    return { ...still(ctx, egg(), face), rotation: rock, y: 0.04 };
  },
};

const hexagonState: StateDefinition = {
  id: "hexagon",
  name: "Hexagon",
  baseBody: false,
  duration: 6,
  previewAt: 0.7,
  sample(t, ctx) {
    const face = mapFace(NEUTRAL, (e) => ({ ...e, openness: blink(t, 4, 0.16, 1.4) }));
    return { ...still(ctx, hexagon(), face), rotation: (t / 6) * 360, scale: breathe(t, 0.01, 6) };
  },
};

const play: StateDefinition = {
  id: "play",
  name: "Play",
  baseBody: false,
  duration: 1.4,
  previewAt: 0.2,
  sample(t, ctx) {
    const pulse = 1 + 0.08 * Math.sin((t / 1.4) * TAU);
    const effects: Effect[] = [
      { kind: "tri", layer: "front", x: 0.06, y: 0, size: 0.46 * pulse, rotation: 0, fill: "#ffffff" },
    ];
    return { ...still(ctx, circle(), null), scale: breathe(t, 0.02, 1.4), effects };
  },
};

const orbit: StateDefinition = {
  id: "orbit",
  name: "Orbit",
  baseBody: false,
  duration: 3,
  previewAt: 0.6,
  sample(t, ctx) {
    const a = (t / 3) * 360;
    const stroke = ctx.appearance.color === "cream" ? colorHex("grey") : ctx.fill;
    const effects: Effect[] = [
      { kind: "ring", layer: "back", rx: 1.5, ry: 0.5, rotation: a, stroke, width: 0.06, opacity: 0.55 },
      { kind: "ring", layer: "back", rx: 1.5, ry: 0.5, rotation: a + 60, stroke, width: 0.06, opacity: 0.55 },
      { kind: "ring", layer: "back", rx: 1.5, ry: 0.5, rotation: a + 120, stroke, width: 0.06, opacity: 0.55 },
      { kind: "dot", layer: "front", x: Math.cos((a * Math.PI) / 180) * 1.5, y: Math.sin((a * Math.PI) / 180) * 0.5, r: 0.1, fill: stroke },
    ];
    const face = mapFace({ ...NEUTRAL, yaw: Math.cos((a * Math.PI) / 180) * 18, pitch: Math.sin((a * Math.PI) / 180) * 8 }, (e) => ({
      ...e,
      openness: blink(t, 3.5, 0.14, 0.3),
    }));
    return { ...still(ctx, circle(), face), scale: 0.86, effects };
  },
};

const burst: StateDefinition = {
  id: "burst",
  name: "Burst",
  baseBody: false,
  duration: 1.8,
  previewAt: 0.35,
  sample(t, ctx) {
    const local = (t % 1.8) / 1.8;
    const grow = easeInOut(local / 0.25);
    const fade = 1 - easeInOut((local - 0.3) / 0.5);
    const effects: Effect[] = [];
    for (let i = 0; i < 8; i++) {
      const angle = i * 45 + 22.5;
      effects.push({
        kind: "ray",
        layer: "back",
        angle,
        from: 1.05 + grow * 0.4,
        to: 1.25 + grow * 0.75,
        width: 0.07,
        stroke: ctx.fill,
        opacity: Math.max(0, fade) * grow,
      });
    }
    const pop = 1 + 0.12 * Math.sin(Math.min(1, local / 0.3) * Math.PI);
    const face = mapFace({ ...NEUTRAL, pitch: -6 }, (e) => ({ ...e, width: 0.26, height: 0.36, tilt: 8, openness: 1 }));
    return { ...still(ctx, circle(), face), scale: 0.86 * pop, effects };
  },
};

const comet: StateDefinition = {
  id: "comet",
  name: "Comet",
  baseBody: false,
  duration: 2.2,
  previewAt: 0.9,
  sample(t, ctx) {
    const phase = (t / 2.2) % 1;
    const path = Math.sin(phase * TAU);
    const effects: Effect[] = [];
    for (let i = 0; i < 3; i++) {
      const off = 0.12 + i * 0.28;
      effects.push({
        kind: "ray",
        layer: "back",
        angle: 180 + 18 * (i - 1),
        from: 1.2 + off,
        to: 1.7 + off + 0.2 * Math.sin(t * 9 + i),
        width: 0.05,
        stroke: ctx.fill,
        opacity: 0.55 - i * 0.15,
      });
    }
    const face = mapFace({ ...NEUTRAL, yaw: 14, pitch: -4, eyeSpacing: 0.3 }, (e) => ({
      ...e,
      width: 0.18,
      height: 0.3,
      tilt: 6,
      openness: blink(t, 2.9, 0.12, 0.9),
    }));
    return { ...still(ctx, cometBody(), face), rotation: -18, scale: 0.72, x: 0.16 + 0.08 * path, y: -0.12 * path, effects };
  },
};

export const STATES: readonly StateDefinition[] = [
  idle,
  thinking,
  wink,
  wideEyes,
  alert,
  notification,
  exclamation,
  sleep,
  eggState,
  hexagonState,
  play,
  orbit,
  burst,
  comet,
] as const;

export const STATE_IDS = STATES.map((s) => s.id) as AvatarState[];

export function stateDefinition(id: AvatarState): StateDefinition {
  const def = STATES.find((s) => s.id === id);
  if (!def) throw new Error(`Unknown avatar state: ${id}`);
  return def;
}

/** Blend two poses, used for the transition into a new state. */
export function lerpPose(a: AvatarPose, b: AvatarPose, t: number): AvatarPose {
  const k = easeInOut(t);
  const face =
    a.face && b.face ? lerpFace(a.face, b.face, k) : k < 0.5 ? a.face : b.face;
  return {
    profile: lerpProfile(a.profile, b.profile, k),
    scale: a.scale + (b.scale - a.scale) * k,
    scaleX: a.scaleX + (b.scaleX - a.scaleX) * k,
    scaleY: a.scaleY + (b.scaleY - a.scaleY) * k,
    x: a.x + (b.x - a.x) * k,
    y: a.y + (b.y - a.y) * k,
    rotation: a.rotation + (b.rotation - a.rotation) * k,
    fill: b.fill,
    face,
    effects: k < 0.5 ? a.effects.map((e) => ({ ...e, opacity: (e.opacity ?? 1) * (1 - 2 * k) })) : b.effects.map((e) => ({ ...e, opacity: (e.opacity ?? 1) * (2 * k - 1) })),
  };
}
