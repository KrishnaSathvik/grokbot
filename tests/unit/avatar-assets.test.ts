import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { APPEARANCE_ASSETS, STATE_ASSETS, EXPORTED_STATES, appearanceAsset, exportedAvatarAsset } from "@/data/avatar-assets";
import { SHAPES, EXPRESSIONS } from "@/lib/avatar";
import { PROMPTS } from "@/data/prompts";
import { ROSTER, ROSTER_STATUS } from "@/data/hero";
import { CATEGORY_AVATAR } from "@/components/jobs/JobCard";

describe("supplied avatar assets", () => {
  it("serves every referenced image from public", () => {
    for (const src of [...Object.values(APPEARANCE_ASSETS), ...Object.values(STATE_ASSETS)]) {
      expect(existsSync(join(process.cwd(), "public", src)), src).toBe(true);
    }
  });
  it("covers the reference shapes, faces and all fifteen states including Swirl", () => {
    for (const { id } of SHAPES) expect(appearanceAsset({ shape: id, expression: "neutral", color: "blue" })).toBeTruthy();
    for (const { id } of EXPRESSIONS) expect(appearanceAsset({ shape: "circle", expression: id, color: "blue" })).toBeTruthy();
    expect(EXPORTED_STATES).toHaveLength(15);
    expect(EXPORTED_STATES.some((state) => state.id === "swirl")).toBe(true);
    for (const state of EXPORTED_STATES) for (const color of ["red", "cream"]) expect(STATE_ASSETS[`${state.id}-${color}`]).toBeTruthy();
  });
  it("uses supplied art throughout jobs, prompts and every roster status", () => {
    for (const appearance of Object.values(CATEGORY_AVATAR)) expect(appearanceAsset(appearance)).toBeTruthy();
    for (const prompt of PROMPTS) expect(appearanceAsset(prompt.avatar)).toBeTruthy();
    for (const entry of ROSTER) for (const status of Object.values(ROSTER_STATUS)) expect(exportedAvatarAsset(entry.avatar, status.state)).toBeTruthy();
  });
  it("does not silently substitute a different unexported studio combination", () => {
    expect(appearanceAsset({ shape: "triangle", color: "red", expression: "sleepy" })).toBeUndefined();
  });
});
