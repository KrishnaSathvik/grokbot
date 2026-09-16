import { SAMPLE_COUNT, type AvatarShape, type RadialProfile } from "./types";

const TAU = Math.PI * 2;

export interface ShapeEntry {
  id: AvatarShape;
  name: string;
}

export const SHAPES: readonly ShapeEntry[] = [
  { id: "circle", name: "Circle" },
  { id: "pebble", name: "Pebble" },
  { id: "squircle", name: "Squircle" },
  { id: "capsule", name: "Capsule" },
  { id: "triangle", name: "Triangle" },
  { id: "hexagon", name: "Hexagon" },
  { id: "cloud", name: "Cloud" },
  { id: "droplet", name: "Droplet" },
] as const;

export const SHAPE_IDS = SHAPES.map((s) => s.id) as AvatarShape[];

/** Angle (radians, SVG orientation: 0 = right, +π/2 = down) for sample i. */
export function sampleAngle(i: number): number {
  return (i / SAMPLE_COUNT) * TAU;
}

export function profileFrom(fn: (theta: number) => number): RadialProfile {
  const out = new Float64Array(SAMPLE_COUNT);
  for (let i = 0; i < SAMPLE_COUNT; i++) out[i] = fn(sampleAngle(i));
  return out;
}

/** Circular moving-average; rounds corners without changing sample count. */
export function smoothProfile(p: RadialProfile, passes = 1, radius = 1): RadialProfile {
  let cur = p;
  for (let k = 0; k < passes; k++) {
    const next = new Float64Array(SAMPLE_COUNT);
    for (let i = 0; i < SAMPLE_COUNT; i++) {
      let sum = 0;
      let n = 0;
      for (let d = -radius; d <= radius; d++) {
        sum += cur[(i + d + SAMPLE_COUNT) % SAMPLE_COUNT];
        n++;
      }
      next[i] = sum / n;
    }
    cur = next;
  }
  return cur;
}

/** Scale so the largest radius is exactly 1. */
export function normalizeProfile(p: RadialProfile): RadialProfile {
  let max = 0;
  for (let i = 0; i < SAMPLE_COUNT; i++) max = Math.max(max, p[i]);
  const out = new Float64Array(SAMPLE_COUNT);
  for (let i = 0; i < SAMPLE_COUNT; i++) out[i] = p[i] / max;
  return out;
}

/** Regular n-gon with one vertex pointing at `pointAt` radians. */
export function polygonRadius(theta: number, n: number, pointAt: number): number {
  const step = TAU / n;
  const a = (((theta - pointAt) % step) + step) % step;
  return Math.cos(Math.PI / n) / Math.cos(a - Math.PI / n);
}

/** Superellipse |x|^n + |y|^n = 1. */
export function superellipseRadius(theta: number, n: number): number {
  const c = Math.abs(Math.cos(theta));
  const s = Math.abs(Math.sin(theta));
  return Math.pow(Math.pow(c, n) + Math.pow(s, n), -1 / n);
}

/** Stadium: two semicircles of radius r joined by a straight section of half-length h, vertical. */
export function capsuleRadius(theta: number, r: number, h: number): number {
  const dx = Math.cos(theta);
  const dy = Math.sin(theta);
  // Ray-vs-stadium: try both caps and the straight walls, take the farthest hit.
  let best = 0;
  for (const cy of [-h, h]) {
    // |(t*d) - (0,cy)|^2 = r^2 → t^2 - 2 t (dy*cy) + cy^2 - r^2 = 0
    const b = -2 * dy * cy;
    const c = cy * cy - r * r;
    const disc = b * b - 4 * c;
    if (disc >= 0) {
      const t = (-b + Math.sqrt(disc)) / 2;
      const y = t * dy;
      if (t > best && ((cy < 0 && y <= cy) || (cy > 0 && y >= cy))) best = t;
    }
  }
  if (Math.abs(dx) > 1e-9) {
    const t = r / Math.abs(dx);
    const y = t * dy;
    if (t > best && Math.abs(y) <= h) best = t;
  }
  return best;
}

export const circle = () => profileFrom(() => 1);

export const pebble = () =>
  normalizeProfile(
    profileFrom(
      (t) => 1 + 0.07 * Math.cos(2 * t + 0.6) + 0.045 * Math.cos(3 * t - 1.1) + 0.02 * Math.cos(5 * t),
    ),
  );

export const squircle = () => normalizeProfile(profileFrom((t) => superellipseRadius(t, 4)));

export const capsule = () => normalizeProfile(profileFrom((t) => capsuleRadius(t, 0.72, 0.36)));

export const triangle = () =>
  normalizeProfile(smoothProfile(profileFrom((t) => polygonRadius(t, 3, -Math.PI / 2)), 3, 2));

export const hexagon = () =>
  normalizeProfile(smoothProfile(profileFrom((t) => polygonRadius(t, 6, -Math.PI / 2)), 1, 1));

export const cloud = () =>
  normalizeProfile(
    profileFrom((t) => {
      const lobes = 0.86 + 0.14 * Math.abs(Math.cos(2 * t + 0.3)) + 0.06 * Math.abs(Math.cos(3 * t - 0.8));
      // flatten the underside a little
      const bottom = Math.sin(t) > 0.5 ? 1 - 0.08 * (Math.sin(t) - 0.5) : 1;
      return lobes * bottom;
    }),
  );

export const droplet = () =>
  normalizeProfile(
    profileFrom((t) => {
      // Round at the bottom, tapering to a point at the top (-π/2).
      const up = -Math.sin(t); // 1 at top
      const pinch = up > 0 ? 1 - 0.45 * Math.pow(up, 1.6) * Math.abs(Math.cos(t)) : 1;
      const stretch = up > 0 ? 1 + 0.32 * Math.pow(up, 3) : 1;
      return pinch * stretch;
    }),
  );

const builders: Record<AvatarShape, () => RadialProfile> = {
  circle,
  pebble,
  squircle,
  capsule,
  triangle,
  hexagon,
  cloud,
  droplet,
};

const cache = new Map<AvatarShape, RadialProfile>();

export function shapeProfile(shape: AvatarShape): RadialProfile {
  let p = cache.get(shape);
  if (!p) {
    p = builders[shape]();
    cache.set(shape, p);
  }
  return p;
}

/** Extra silhouettes owned by animation states (not part of the public shape catalogue). */
export const egg = () =>
  normalizeProfile(
    profileFrom((t) => {
      const up = -Math.sin(t);
      return up > 0 ? 1 + 0.18 * up * up - 0.1 * up * Math.abs(Math.cos(t)) : 1;
    }),
  );

export const flatPebble = () =>
  normalizeProfile(profileFrom((t) => (Math.sin(t) > 0 ? 1 - 0.3 * Math.sin(t) : 1 + 0.02 * Math.cos(2 * t))));

export const cometBody = () =>
  normalizeProfile(
    profileFrom((t) => {
      // Round head on the right, tapering tail to the left.
      const left = -Math.cos(t);
      return left > 0 ? 1 + 0.9 * Math.pow(left, 2.2) * (1 - 0.7 * Math.abs(Math.sin(t))) : 1;
    }),
  );
