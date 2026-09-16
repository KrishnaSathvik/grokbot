import { clamp01 } from "./morph";
import type { EyePose, FacePose } from "./types";

const DEG = Math.PI / 180;

export function lerpEye(a: EyePose, b: EyePose, t: number): EyePose {
  const k = clamp01(t);
  return {
    width: a.width + (b.width - a.width) * k,
    height: a.height + (b.height - a.height) * k,
    tilt: a.tilt + (b.tilt - a.tilt) * k,
    openness: a.openness + (b.openness - a.openness) * k,
  };
}

export function lerpFace(a: FacePose, b: FacePose, t: number): FacePose {
  const k = clamp01(t);
  return {
    yaw: a.yaw + (b.yaw - a.yaw) * k,
    pitch: a.pitch + (b.pitch - a.pitch) * k,
    roll: a.roll + (b.roll - a.roll) * k,
    eyeSpacing: a.eyeSpacing + (b.eyeSpacing - a.eyeSpacing) * k,
    left: lerpEye(a.left, b.left, k),
    right: lerpEye(a.right, b.right, k),
  };
}

export function mapFace(f: FacePose, fn: (e: EyePose, side: "left" | "right") => EyePose): FacePose {
  return { ...f, left: fn(f.left, "left"), right: fn(f.right, "right") };
}

export interface ProjectedEye {
  /** Centre, unit-radius space. */
  x: number;
  y: number;
  /** Half-axes, unit-radius space. */
  rx: number;
  ry: number;
  /** Rotation in degrees. */
  rotation: number;
  /** Depth factor 0..1 — used to fade an eye that turns away. */
  depth: number;
}

/**
 * Place an eye on a unit sphere and rotate the sphere by yaw/pitch/roll, then
 * project orthographically. Eyes sit a little forward and above centre so a
 * head turn moves them along a curve rather than a straight slide.
 */
export function projectEye(face: FacePose, side: "left" | "right"): ProjectedEye {
  const eye = side === "left" ? face.left : face.right;
  const sign = side === "left" ? -1 : 1;

  // Base position on the sphere (x right, y down, z toward viewer).
  const bx = sign * face.eyeSpacing;
  const by = -0.06;
  const bz = Math.sqrt(Math.max(0, 1 - bx * bx - by * by));

  const yaw = face.yaw * DEG;
  const pitch = face.pitch * DEG;
  const roll = face.roll * DEG;

  // Yaw about y.
  let x = bx * Math.cos(yaw) + bz * Math.sin(yaw);
  let z = -bx * Math.sin(yaw) + bz * Math.cos(yaw);
  let y = by;
  // Pitch about x.
  const y2 = y * Math.cos(pitch) - z * Math.sin(pitch);
  const z2 = y * Math.sin(pitch) + z * Math.cos(pitch);
  y = y2;
  z = z2;
  // Roll about z.
  const x3 = x * Math.cos(roll) - y * Math.sin(roll);
  const y3 = x * Math.sin(roll) + y * Math.cos(roll);
  x = x3;
  y = y3;

  const depth = clamp01(z);
  const foreshorten = 0.55 + 0.45 * depth;
  const rx = (eye.width / 2) * foreshorten;
  const ryOpen = Math.max(0.012, (eye.height / 2) * eye.openness);

  // Face-plane scale: eyes sit inside the silhouette, not at its rim.
  const FACE_SCALE = 0.78;
  return {
    x: x * FACE_SCALE,
    y: y * FACE_SCALE,
    rx,
    ry: ryOpen,
    rotation: sign * eye.tilt + face.roll,
    depth,
  };
}
