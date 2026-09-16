import { describe, expect, it } from "vitest";
import { lerpProfile, profileToPath, radiusAt, SAMPLE_COUNT, shapeProfile } from "@/lib/avatar";
import { SHAPE_IDS } from "@/lib/avatar";

describe("radial profiles", () => {
  it("every shape has 64 positive samples with max radius 1", () => {
    for (const id of SHAPE_IDS) {
      const p = shapeProfile(id);
      expect(p).toHaveLength(SAMPLE_COUNT);
      let max = 0;
      for (const r of p) {
        expect(r).toBeGreaterThan(0.3);
        max = Math.max(max, r);
      }
      expect(max).toBeCloseTo(1, 6);
    }
  });

  it("circle is uniform", () => {
    const p = shapeProfile("circle");
    for (const r of p) expect(r).toBeCloseTo(1, 9);
  });

  it("droplet points up: top radius exceeds bottom radius", () => {
    const p = shapeProfile("droplet");
    expect(radiusAt(p, -Math.PI / 2)).toBeGreaterThan(radiusAt(p, Math.PI / 2));
  });
});

describe("lerpProfile", () => {
  const a = shapeProfile("circle");
  const b = shapeProfile("triangle");

  it("returns endpoints at t=0 and t=1", () => {
    expect(Array.from(lerpProfile(a, b, 0))).toEqual(Array.from(a));
    expect(Array.from(lerpProfile(a, b, 1))).toEqual(Array.from(b));
  });

  it("is the sample-wise midpoint at t=0.5", () => {
    const m = lerpProfile(a, b, 0.5);
    for (let i = 0; i < SAMPLE_COUNT; i++) expect(m[i]).toBeCloseTo((a[i] + b[i]) / 2, 9);
  });

  it("clamps t outside 0..1", () => {
    expect(Array.from(lerpProfile(a, b, -2))).toEqual(Array.from(a));
    expect(Array.from(lerpProfile(a, b, 5))).toEqual(Array.from(b));
  });
});

describe("profileToPath", () => {
  it("emits a closed cubic path with one segment per sample", () => {
    const d = profileToPath(shapeProfile("pebble"), 50, 50, 30);
    expect(d.startsWith("M")).toBe(true);
    expect(d.endsWith("Z")).toBe(true);
    expect((d.match(/C/g) ?? []).length).toBe(SAMPLE_COUNT);
    expect(d).not.toMatch(/NaN/);
  });
});
