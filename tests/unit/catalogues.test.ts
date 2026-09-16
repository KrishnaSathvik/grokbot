import { describe, expect, it } from "vitest";
import { COLORS, EXPRESSIONS, SHAPES, STATES } from "@/lib/avatar";

describe("shape catalogue", () => {
  it("has the eight public shapes in order", () => {
    expect(SHAPES.map((s) => s.name)).toEqual([
      "Circle",
      "Pebble",
      "Squircle",
      "Capsule",
      "Triangle",
      "Hexagon",
      "Cloud",
      "Droplet",
    ]);
  });
});

describe("colour catalogue", () => {
  it("has twelve colours with the published hex values", () => {
    expect(COLORS).toHaveLength(12);
    const byName = Object.fromEntries(COLORS.map((c) => [c.name, c.hex]));
    expect(byName).toEqual({
      Ink: "#0a0a0c",
      Brown: "#8b5e3c",
      Red: "#e8483f",
      Orange: "#f08a24",
      Amber: "#f0b429",
      Green: "#3ecf8e",
      Turquoise: "#2fbfa0",
      Blue: "#3b93f0",
      Purple: "#8b5cf6",
      Pink: "#e152b0",
      Grey: "#a3a3a3",
      Cream: "#f1efe9",
    });
  });
});

describe("expression catalogue", () => {
  it("has the sixteen expressions in order", () => {
    expect(EXPRESSIONS.map((e) => e.name)).toEqual([
      "Neutral",
      "Attentive",
      "Surprised",
      "Excited",
      "Happy",
      "Laughing",
      "Angry",
      "Sad",
      "Scared",
      "Suspicious",
      "Confused",
      "Curious",
      "Proud",
      "Shy",
      "Unimpressed",
      "Sleepy",
    ]);
  });
  it("keeps every eye within sane bounds", () => {
    for (const e of EXPRESSIONS) {
      for (const eye of [e.face.left, e.face.right]) {
        expect(eye.openness).toBeGreaterThanOrEqual(0);
        expect(eye.openness).toBeLessThanOrEqual(1);
        expect(eye.width).toBeGreaterThan(0);
        expect(eye.height).toBeGreaterThan(0);
      }
    }
  });
});

describe("state catalogue", () => {
  it("has the fourteen public states in order and no swirl", () => {
    expect(STATES.map((s) => s.name)).toEqual([
      "Idle",
      "Thinking",
      "Wink",
      "Wide eyes",
      "Alert",
      "Notification",
      "Exclamation",
      "Sleep",
      "Egg",
      "Hexagon",
      "Play",
      "Orbit",
      "Burst",
      "Comet",
    ]);
    expect(STATES.map((s) => s.id)).not.toContain("swirl");
  });

  it("applies the baseBody rule", () => {
    const base = STATES.filter((s) => s.baseBody).map((s) => s.id);
    expect(base).toEqual(["idle", "wink", "wideEyes", "notification"]);
  });
});
