import { SAMPLE_COUNT, type RadialProfile } from "./types";
import { sampleAngle } from "./shapes";

export function clamp01(t: number): number {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}

export function easeInOut(t: number): number {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}

/** Linear interpolation of matching radial samples. */
export function lerpProfile(a: RadialProfile, b: RadialProfile, t: number): RadialProfile {
  const k = clamp01(t);
  const out = new Float64Array(SAMPLE_COUNT);
  for (let i = 0; i < SAMPLE_COUNT; i++) out[i] = a[i] + (b[i] - a[i]) * k;
  return out;
}

export function scaleProfile(p: RadialProfile, sx: number, sy: number): RadialProfile {
  const out = new Float64Array(SAMPLE_COUNT);
  for (let i = 0; i < SAMPLE_COUNT; i++) {
    const t = sampleAngle(i);
    const x = Math.cos(t) * p[i] * sx;
    const y = Math.sin(t) * p[i] * sy;
    // Radius along the *original* direction after anisotropic scale; keeps sample alignment.
    out[i] = Math.hypot(x, y);
  }
  return out;
}

export interface Point {
  x: number;
  y: number;
}

export function profilePoints(p: RadialProfile, cx: number, cy: number, r: number): Point[] {
  const pts: Point[] = [];
  for (let i = 0; i < SAMPLE_COUNT; i++) {
    const t = sampleAngle(i);
    pts.push({ x: cx + Math.cos(t) * p[i] * r, y: cy + Math.sin(t) * p[i] * r });
  }
  return pts;
}

const f = (n: number) => (Math.round(n * 100) / 100).toString();

/** Closed Catmull-Rom spline through the 64 samples, emitted as cubic Béziers. */
export function profileToPath(p: RadialProfile, cx: number, cy: number, r: number): string {
  const pts = profilePoints(p, cx, cy, r);
  const n = pts.length;
  let d = `M${f(pts[0].x)} ${f(pts[0].y)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += `C${f(c1x)} ${f(c1y)} ${f(c2x)} ${f(c2y)} ${f(p2.x)} ${f(p2.y)}`;
  }
  return d + "Z";
}

/** Radius of the profile at an arbitrary angle (radians), linearly interpolated. */
export function radiusAt(p: RadialProfile, theta: number): number {
  const TAU = Math.PI * 2;
  const a = (((theta % TAU) + TAU) % TAU) / TAU * SAMPLE_COUNT;
  const i = Math.floor(a);
  const frac = a - i;
  const r0 = p[i % SAMPLE_COUNT];
  const r1 = p[(i + 1) % SAMPLE_COUNT];
  return r0 + (r1 - r0) * frac;
}
