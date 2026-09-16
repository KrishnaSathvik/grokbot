import type { AvatarColor } from "./types";

export interface ColorEntry {
  id: AvatarColor;
  name: string;
  hex: string;
}

export const COLORS: readonly ColorEntry[] = [
  { id: "ink", name: "Ink", hex: "#0a0a0c" },
  { id: "brown", name: "Brown", hex: "#8b5e3c" },
  { id: "red", name: "Red", hex: "#e8483f" },
  { id: "orange", name: "Orange", hex: "#f08a24" },
  { id: "amber", name: "Amber", hex: "#f0b429" },
  { id: "green", name: "Green", hex: "#3ecf8e" },
  { id: "turquoise", name: "Turquoise", hex: "#2fbfa0" },
  { id: "blue", name: "Blue", hex: "#3b93f0" },
  { id: "purple", name: "Purple", hex: "#8b5cf6" },
  { id: "pink", name: "Pink", hex: "#e152b0" },
  { id: "grey", name: "Grey", hex: "#a3a3a3" },
  { id: "cream", name: "Cream", hex: "#f1efe9" },
] as const;

export const COLOR_IDS = COLORS.map((c) => c.id) as AvatarColor[];

export function colorHex(id: AvatarColor): string {
  const entry = COLORS.find((c) => c.id === id);
  if (!entry) throw new Error(`Unknown avatar colour: ${id}`);
  return entry.hex;
}

/** Accent used for the notification badge; it is part of the product's own language. */
export const NOTIFICATION_BLUE = "#3b93f0";
