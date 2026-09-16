import type { AvatarExpression, EyePose, FacePose } from "./types";

export interface ExpressionEntry {
  id: AvatarExpression;
  name: string;
  face: FacePose;
}

const eye = (width: number, height: number, tilt = 0, openness = 1): EyePose => ({
  width,
  height,
  tilt,
  openness,
});

const face = (
  left: EyePose,
  right: EyePose,
  extra: Partial<Omit<FacePose, "left" | "right">> = {},
): FacePose => ({
  yaw: 0,
  pitch: 0,
  roll: 0,
  eyeSpacing: 0.36,
  left,
  right,
  ...extra,
});

/** Baseline eye: a tall oval, slightly wider than a pupil. */
const base = eye(0.2, 0.34);

export const EXPRESSIONS: readonly ExpressionEntry[] = [
  { id: "neutral", name: "Neutral", face: face(base, base) },
  { id: "attentive", name: "Attentive", face: face(eye(0.2, 0.38), eye(0.2, 0.38), { pitch: -4 }) },
  { id: "surprised", name: "Surprised", face: face(eye(0.26, 0.4), eye(0.26, 0.4), { pitch: -8, eyeSpacing: 0.38 }) },
  { id: "excited", name: "Excited", face: face(eye(0.24, 0.42, 6), eye(0.24, 0.42, 6), { pitch: -6, eyeSpacing: 0.37 }) },
  { id: "happy", name: "Happy", face: face(eye(0.24, 0.3, 10, 0.55), eye(0.24, 0.3, 10, 0.55), { pitch: 2 }) },
  { id: "laughing", name: "Laughing", face: face(eye(0.26, 0.26, 14, 0.25), eye(0.26, 0.26, 14, 0.25), { pitch: -10, roll: 3 }) },
  { id: "angry", name: "Angry", face: face(eye(0.22, 0.34, -22, 0.8), eye(0.22, 0.34, -22, 0.8), { pitch: 6, eyeSpacing: 0.33 }) },
  { id: "sad", name: "Sad", face: face(eye(0.2, 0.32, 18, 0.85), eye(0.2, 0.32, 18, 0.85), { pitch: 10 }) },
  { id: "scared", name: "Scared", face: face(eye(0.16, 0.42, 12), eye(0.16, 0.42, 12), { pitch: -6, eyeSpacing: 0.4 }) },
  { id: "suspicious", name: "Suspicious", face: face(eye(0.22, 0.32, -6, 0.45), eye(0.22, 0.32, -6, 0.7), { yaw: 10, roll: -3 }) },
  { id: "confused", name: "Confused", face: face(eye(0.2, 0.36, 8), eye(0.2, 0.3, -10, 0.7), { roll: 8, yaw: -6 }) },
  { id: "curious", name: "Curious", face: face(eye(0.22, 0.38, 4), eye(0.22, 0.38, 4), { roll: -10, yaw: 12 }) },
  { id: "proud", name: "Proud", face: face(eye(0.22, 0.3, 8, 0.6), eye(0.22, 0.3, 8, 0.6), { pitch: -12 }) },
  { id: "shy", name: "Shy", face: face(eye(0.18, 0.3, 12, 0.7), eye(0.18, 0.3, 12, 0.7), { pitch: 14, yaw: -14, eyeSpacing: 0.34 }) },
  { id: "unimpressed", name: "Unimpressed", face: face(eye(0.22, 0.34, -2, 0.45), eye(0.22, 0.34, -2, 0.45), { pitch: 2 }) },
  { id: "sleepy", name: "Sleepy", face: face(eye(0.22, 0.34, 6, 0.28), eye(0.22, 0.34, 6, 0.28), { pitch: 8, roll: 4 }) },
] as const;

export const EXPRESSION_IDS = EXPRESSIONS.map((e) => e.id) as AvatarExpression[];

export function expressionFace(id: AvatarExpression): FacePose {
  const entry = EXPRESSIONS.find((e) => e.id === id);
  if (!entry) throw new Error(`Unknown expression: ${id}`);
  return entry.face;
}
