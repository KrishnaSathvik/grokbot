import { projectEye } from "./face";
import { profileToPath } from "./morph";
import type { AvatarPose, Effect } from "./types";

export const VIEW = 100;
export const CENTER = 50;
/** Unit radius in viewBox units. Leaves room for rings and marks around the body. */
export const UNIT = 30;

export interface SvgEye {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rotation: number;
}

export interface SvgModel {
  viewBox: string;
  bodyPath: string;
  /** transform applied to body + eyes together */
  bodyTransform: string;
  fill: string;
  eyes: SvgEye[];
  back: Effect[];
  front: Effect[];
}

const r2 = (n: number) => Math.round(n * 100) / 100;

export function u(v: number): number {
  return r2(CENTER + v * UNIT);
}

export function poseToSvg(pose: AvatarPose): SvgModel {
  const bodyPath = profileToPath(pose.profile, 0, 0, UNIT);
  const sx = pose.scale * pose.scaleX;
  const sy = pose.scale * pose.scaleY;
  const bodyTransform = `translate(${u(pose.x)} ${u(pose.y)}) rotate(${r2(pose.rotation)}) scale(${r2(sx)} ${r2(sy)})`;

  const eyes: SvgEye[] = [];
  if (pose.face) {
    for (const side of ["left", "right"] as const) {
      const e = projectEye(pose.face, side);
      if (e.depth <= 0.02) continue;
      eyes.push({
        cx: r2(e.x * UNIT),
        cy: r2(e.y * UNIT),
        rx: r2(e.rx * UNIT),
        ry: r2(e.ry * UNIT),
        rotation: r2(e.rotation),
      });
    }
  }

  return {
    viewBox: `0 0 ${VIEW} ${VIEW}`,
    bodyPath,
    bodyTransform,
    fill: pose.fill,
    eyes,
    back: pose.effects.filter((e) => e.layer === "back"),
    front: pose.effects.filter((e) => e.layer === "front"),
  };
}
