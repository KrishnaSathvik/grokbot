export const SAMPLE_COUNT = 64;

/** 64 radii, one per angular step, starting at angle 0 (3 o'clock) going clockwise in SVG space. */
export type RadialProfile = Float64Array;

export type AvatarShape =
  | "circle"
  | "pebble"
  | "squircle"
  | "capsule"
  | "triangle"
  | "hexagon"
  | "cloud"
  | "droplet";

export type AvatarColor =
  | "ink"
  | "brown"
  | "red"
  | "orange"
  | "amber"
  | "green"
  | "turquoise"
  | "blue"
  | "purple"
  | "pink"
  | "grey"
  | "cream";

export type AvatarExpression =
  | "neutral"
  | "attentive"
  | "surprised"
  | "excited"
  | "happy"
  | "laughing"
  | "angry"
  | "sad"
  | "scared"
  | "suspicious"
  | "confused"
  | "curious"
  | "proud"
  | "shy"
  | "unimpressed"
  | "sleepy";

export type AvatarState =
  | "idle"
  | "thinking"
  | "wink"
  | "wideEyes"
  | "alert"
  | "notification"
  | "exclamation"
  | "sleep"
  | "egg"
  | "hexagon"
  | "play"
  | "orbit"
  | "burst"
  | "comet";

export interface EyePose {
  /** Eye width as a fraction of body radius. */
  width: number;
  /** Eye height as a fraction of body radius (before openness). */
  height: number;
  /** Tilt in degrees; positive lifts the outer corner. */
  tilt: number;
  /** 0 = shut, 1 = fully open. */
  openness: number;
}

export interface FacePose {
  /** Head turn, degrees. Positive looks to the viewer's right. */
  yaw: number;
  /** Head nod, degrees. Positive looks down. */
  pitch: number;
  /** Head tilt, degrees. */
  roll: number;
  /** Horizontal distance from centre to each eye, fraction of radius. */
  eyeSpacing: number;
  left: EyePose;
  right: EyePose;
}

export interface AvatarAppearance {
  shape: AvatarShape;
  color: AvatarColor;
  expression: AvatarExpression;
}

export interface AvatarRuntime {
  state: AvatarState;
  elapsed: number;
}

export type Layer = "back" | "front";

export type Effect =
  | { kind: "dot"; layer: Layer; x: number; y: number; r: number; fill: string; opacity?: number }
  | {
      kind: "ring";
      layer: Layer;
      rx: number;
      ry: number;
      rotation: number;
      stroke: string;
      width: number;
      opacity?: number;
    }
  | { kind: "bar"; layer: Layer; x: number; y: number; w: number; h: number; rotation: number; fill: string; opacity?: number }
  | { kind: "ray"; layer: Layer; angle: number; from: number; to: number; width: number; stroke: string; opacity?: number }
  | { kind: "tri"; layer: Layer; x: number; y: number; size: number; rotation: number; fill: string; opacity?: number }
  | { kind: "text"; layer: Layer; x: number; y: number; size: number; text: string; fill: string; opacity?: number; rotation?: number };

export interface AvatarPose {
  /** Silhouette in unit-radius space. */
  profile: RadialProfile;
  /** Uniform body scale on top of the profile. */
  scale: number;
  scaleX: number;
  scaleY: number;
  /** Body offset in unit-radius space. */
  x: number;
  y: number;
  /** Body rotation, degrees. */
  rotation: number;
  fill: string;
  face: FacePose | null;
  effects: Effect[];
}
