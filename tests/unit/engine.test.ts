import { describe, expect, it } from "vitest";
import {
  createEngine,
  expressionFace,
  poseToSvg,
  projectEye,
  radiusAt,
  samplePose,
  shapeProfile,
  STATE_IDS,
  stateDefinition,
  TRANSITION_SECONDS,
  type AvatarAppearance,
} from "@/lib/avatar";

const look: AvatarAppearance = { shape: "triangle", color: "blue", expression: "happy" };

describe("engine", () => {
  it("samples are deterministic for the same time", () => {
    const e = createEngine(look, "idle", 0);
    const a = poseToSvg(e.sample(1.234));
    const b = poseToSvg(e.sample(1.234));
    expect(a).toEqual(b);
  });

  it("baseBody states keep the user's silhouette; others own theirs", () => {
    const tri = shapeProfile("triangle");
    for (const id of STATE_IDS) {
      const def = stateDefinition(id);
      const pose = samplePose(look, id, def.previewAt + 0.01);
      const same = Array.from(pose.profile).every((r, i) => Math.abs(r - tri[i]) < 1e-9);
      expect(same, `${id} baseBody=${def.baseBody}`).toBe(def.baseBody);
    }
  });

  it("restores the chosen expression after returning to idle", () => {
    const e = createEngine(look, "idle", 0);
    e.setState("wink", 1);
    e.setState("idle", 5);
    const settled = e.sample(5 + TRANSITION_SECONDS + 3.0);
    const base = expressionFace("happy");
    // idle only adds a small yaw sway and blink on top of the chosen expression
    expect(settled.face?.left.tilt).toBeCloseTo(base.left.tilt, 6);
    expect(settled.face?.left.width).toBeCloseTo(base.left.width, 6);
    expect(settled.face?.pitch).toBeCloseTo(base.pitch, 6);
  });

  it("morphs across a state change instead of jumping", () => {
    const e = createEngine(look, "idle", 0);
    const before = e.sample(2);
    e.setState("thinking", 2);
    const mid = e.sample(2 + TRANSITION_SECONDS / 2);
    const after = e.sample(2 + TRANSITION_SECONDS * 2);
    const b0 = radiusAt(before.profile, 0);
    const m = radiusAt(mid.profile, 0);
    const a1 = radiusAt(after.profile, 0);
    expect(m).toBeGreaterThan(Math.min(b0, a1));
    expect(m).toBeLessThan(Math.max(b0, a1));
  });

  it("every state renders a valid SVG model at several times", () => {
    for (const id of STATE_IDS) {
      const def = stateDefinition(id);
      for (const t of [0, def.previewAt, def.duration * 0.5, def.duration * 1.5]) {
        const model = poseToSvg(samplePose(look, id, t));
        expect(model.bodyPath).not.toMatch(/NaN/);
        expect(model.bodyTransform).not.toMatch(/NaN/);
        for (const eye of model.eyes) {
          expect(eye.rx).toBeGreaterThan(0);
          expect(eye.ry).toBeGreaterThan(0);
        }
      }
    }
  });
});

describe("face projection", () => {
  it("eyes stay inside the unit silhouette for every expression", () => {
    for (const exp of ["neutral", "shy", "curious", "suspicious", "surprised"] as const) {
      const f = expressionFace(exp);
      for (const side of ["left", "right"] as const) {
        const e = projectEye(f, side);
        expect(Math.hypot(e.x, e.y) + Math.max(e.rx, e.ry)).toBeLessThan(1);
      }
    }
  });

  it("a yaw to the right moves both eyes right and foreshortens the far eye", () => {
    const base = expressionFace("neutral");
    const turned = { ...base, yaw: 30 };
    const l0 = projectEye(base, "left");
    const l1 = projectEye(turned, "left");
    const r1 = projectEye(turned, "right");
    expect(l1.x).toBeGreaterThan(l0.x);
    expect(r1.x).toBeGreaterThan(projectEye(base, "right").x);
    expect(l1.depth).toBeGreaterThan(r1.depth);
  });
});
