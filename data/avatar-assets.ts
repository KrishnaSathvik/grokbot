// Supplied PNG exports. See docs/avatar-asset-map.json for original filenames.
import type { AvatarAppearance, AvatarState } from "@/lib/avatar";
export type ExportedState = AvatarState | "swirl";
export const EXPORTED_STATES: { id: ExportedState; name: string }[] = [
  {
    "id": "idle",
    "name": "Idle"
  },
  {
    "id": "thinking",
    "name": "Thinking"
  },
  {
    "id": "wink",
    "name": "Wink"
  },
  {
    "id": "wideEyes",
    "name": "Wide eyes"
  },
  {
    "id": "alert",
    "name": "Alert"
  },
  {
    "id": "notification",
    "name": "Notification"
  },
  {
    "id": "exclamation",
    "name": "Exclamation"
  },
  {
    "id": "sleep",
    "name": "Sleep"
  },
  {
    "id": "egg",
    "name": "Egg"
  },
  {
    "id": "hexagon",
    "name": "Hexagon"
  },
  {
    "id": "play",
    "name": "Play"
  },
  {
    "id": "orbit",
    "name": "Orbit"
  },
  {
    "id": "swirl",
    "name": "Swirl"
  },
  {
    "id": "burst",
    "name": "Burst"
  },
  {
    "id": "comet",
    "name": "Comet"
  }
];
export const APPEARANCE_ASSETS: Record<string, string> = {
  "capsule-attentive-blue": "/avatars/capsule-attentive-blue.png",
  "capsule-excited-blue": "/avatars/capsule-excited-blue.png",
  "capsule-happy-blue": "/avatars/capsule-happy-blue.png",
  "capsule-neutral-blue": "/avatars/capsule-neutral-blue.png",
  "capsule-surprised-blue": "/avatars/capsule-surprised-blue.png",
  "circle-angry-blue": "/avatars/circle-angry-blue.png",
  "circle-angry-cream": "/avatars/circle-angry-cream.png",
  "circle-angry-red": "/avatars/circle-angry-red.png",
  "circle-attentive-blue": "/avatars/circle-attentive-blue.png",
  "circle-attentive-cream": "/avatars/circle-attentive-cream.png",
  "circle-attentive-red": "/avatars/circle-attentive-red.png",
  "circle-confused-blue": "/avatars/circle-confused-blue.png",
  "circle-confused-cream": "/avatars/circle-confused-cream.png",
  "circle-confused-red": "/avatars/circle-confused-red.png",
  "circle-curious-blue": "/avatars/circle-curious-blue.png",
  "circle-curious-cream": "/avatars/circle-curious-cream.png",
  "circle-curious-red": "/avatars/circle-curious-red.png",
  "circle-excited-blue": "/avatars/circle-excited-blue.png",
  "circle-excited-cream": "/avatars/circle-excited-cream.png",
  "circle-excited-red": "/avatars/circle-excited-red.png",
  "circle-happy-blue": "/avatars/circle-happy-blue.png",
  "circle-happy-cream": "/avatars/circle-happy-cream.png",
  "circle-happy-red": "/avatars/circle-happy-red.png",
  "circle-laughing-blue": "/avatars/circle-laughing-blue.png",
  "circle-laughing-cream": "/avatars/circle-laughing-cream.png",
  "circle-laughing-red": "/avatars/circle-laughing-red.png",
  "circle-neutral-blue": "/avatars/circle-neutral-blue.png",
  "circle-neutral-cream": "/avatars/circle-neutral-cream.png",
  "circle-neutral-red": "/avatars/circle-neutral-red.png",
  "circle-proud-blue": "/avatars/circle-proud-blue.png",
  "circle-proud-cream": "/avatars/circle-proud-cream.png",
  "circle-proud-red": "/avatars/circle-proud-red.png",
  "circle-sad-blue": "/avatars/circle-sad-blue.png",
  "circle-sad-cream": "/avatars/circle-sad-cream.png",
  "circle-sad-red": "/avatars/circle-sad-red.png",
  "circle-scared-blue": "/avatars/circle-scared-blue.png",
  "circle-scared-cream": "/avatars/circle-scared-cream.png",
  "circle-scared-red": "/avatars/circle-scared-red.png",
  "circle-shy-blue": "/avatars/circle-shy-blue.png",
  "circle-shy-cream": "/avatars/circle-shy-cream.png",
  "circle-shy-red": "/avatars/circle-shy-red.png",
  "circle-sleepy-blue": "/avatars/circle-sleepy-blue.png",
  "circle-sleepy-cream": "/avatars/circle-sleepy-cream.png",
  "circle-sleepy-red": "/avatars/circle-sleepy-red.png",
  "circle-surprised-blue": "/avatars/circle-surprised-blue.png",
  "circle-surprised-cream": "/avatars/circle-surprised-cream.png",
  "circle-surprised-red": "/avatars/circle-surprised-red.png",
  "circle-suspicious-blue": "/avatars/circle-suspicious-blue.png",
  "circle-suspicious-cream": "/avatars/circle-suspicious-cream.png",
  "circle-suspicious-red": "/avatars/circle-suspicious-red.png",
  "circle-unimpressed-blue": "/avatars/circle-unimpressed-blue.png",
  "circle-unimpressed-cream": "/avatars/circle-unimpressed-cream.png",
  "circle-unimpressed-red": "/avatars/circle-unimpressed-red.png",
  "cloud-angry-blue": "/avatars/cloud-angry-blue.png",
  "cloud-attentive-blue": "/avatars/cloud-attentive-blue.png",
  "cloud-confused-blue": "/avatars/cloud-confused-blue.png",
  "cloud-curious-blue": "/avatars/cloud-curious-blue.png",
  "cloud-excited-blue": "/avatars/cloud-excited-blue.png",
  "cloud-happy-blue": "/avatars/cloud-happy-blue.png",
  "cloud-laughing-blue": "/avatars/cloud-laughing-blue.png",
  "cloud-neutral-blue": "/avatars/cloud-neutral-blue.png",
  "cloud-proud-blue": "/avatars/cloud-proud-blue.png",
  "cloud-sad-blue": "/avatars/cloud-sad-blue.png",
  "cloud-scared-blue": "/avatars/cloud-scared-blue.png",
  "cloud-shy-blue": "/avatars/cloud-shy-blue.png",
  "cloud-sleepy-blue": "/avatars/cloud-sleepy-blue.png",
  "cloud-surprised-blue": "/avatars/cloud-surprised-blue.png",
  "cloud-suspicious-blue": "/avatars/cloud-suspicious-blue.png",
  "cloud-unimpressed-blue": "/avatars/cloud-unimpressed-blue.png",
  "droplet-attentive-blue": "/avatars/droplet-attentive-blue.png",
  "droplet-excited-blue": "/avatars/droplet-excited-blue.png",
  "droplet-happy-blue": "/avatars/droplet-happy-blue.png",
  "droplet-neutral-blue": "/avatars/droplet-neutral-blue.png",
  "droplet-surprised-blue": "/avatars/droplet-surprised-blue.png",
  "hexagon-attentive-blue": "/avatars/hexagon-attentive-blue.png",
  "hexagon-excited-blue": "/avatars/hexagon-excited-blue.png",
  "hexagon-happy-blue": "/avatars/hexagon-happy-blue.png",
  "hexagon-neutral-blue": "/avatars/hexagon-neutral-blue.png",
  "hexagon-surprised-blue": "/avatars/hexagon-surprised-blue.png",
  "pebble-attentive-blue": "/avatars/pebble-attentive-blue.png",
  "pebble-excited-blue": "/avatars/pebble-excited-blue.png",
  "pebble-happy-blue": "/avatars/pebble-happy-blue.png",
  "pebble-neutral-blue": "/avatars/pebble-neutral-blue.png",
  "pebble-surprised-blue": "/avatars/pebble-surprised-blue.png",
  "squircle-attentive-blue": "/avatars/squircle-attentive-blue.png",
  "squircle-excited-blue": "/avatars/squircle-excited-blue.png",
  "squircle-happy-blue": "/avatars/squircle-happy-blue.png",
  "squircle-neutral-blue": "/avatars/squircle-neutral-blue.png",
  "squircle-surprised-blue": "/avatars/squircle-surprised-blue.png",
  "triangle-attentive-blue": "/avatars/triangle-attentive-blue.png",
  "triangle-excited-blue": "/avatars/triangle-excited-blue.png",
  "triangle-happy-blue": "/avatars/triangle-happy-blue.png",
  "triangle-neutral-blue": "/avatars/triangle-neutral-blue.png",
  "triangle-surprised-blue": "/avatars/triangle-surprised-blue.png"
};
export const STATE_ASSETS: Record<string, string> = {
  "idle-cream": "/avatars/state-idle-cream.png",
  "hexagon-cream": "/avatars/state-hexagon-cream.png",
  "play-cream": "/avatars/state-play-cream.png",
  "orbit-cream": "/avatars/state-orbit-cream.png",
  "swirl-cream": "/avatars/state-swirl-cream.png",
  "burst-cream": "/avatars/state-burst-cream.png",
  "comet-cream": "/avatars/state-comet-cream.png",
  "thinking-cream": "/avatars/state-thinking-cream.png",
  "wink-cream": "/avatars/state-wink-cream.png",
  "wideEyes-cream": "/avatars/state-wideEyes-cream.png",
  "alert-cream": "/avatars/state-alert-cream.png",
  "notification-cream": "/avatars/state-notification-cream.png",
  "exclamation-cream": "/avatars/state-exclamation-cream.png",
  "sleep-cream": "/avatars/state-sleep-cream.png",
  "egg-cream": "/avatars/state-egg-cream.png",
  "idle-red": "/avatars/state-idle-red.png",
  "hexagon-red": "/avatars/state-hexagon-red.png",
  "play-red": "/avatars/state-play-red.png",
  "orbit-red": "/avatars/state-orbit-red.png",
  "swirl-red": "/avatars/state-swirl-red.png",
  "burst-red": "/avatars/state-burst-red.png",
  "comet-red": "/avatars/state-comet-red.png",
  "thinking-red": "/avatars/state-thinking-red.png",
  "wink-red": "/avatars/state-wink-red.png",
  "wideEyes-red": "/avatars/state-wideEyes-red.png",
  "alert-red": "/avatars/state-alert-red.png",
  "notification-red": "/avatars/state-notification-red.png",
  "exclamation-red": "/avatars/state-exclamation-red.png",
  "sleep-red": "/avatars/state-sleep-red.png",
  "egg-red": "/avatars/state-egg-red.png",
  "idle-blue": "/avatars/state-idle-blue.png",
  "thinking-blue": "/avatars/state-thinking-blue.png",
  "notification-blue": "/avatars/state-notification-blue.png",
  "orbit-blue": "/avatars/state-orbit-blue.png"
};
export function appearanceAsset(look: AvatarAppearance): string | undefined {
  return APPEARANCE_ASSETS[`${look.shape}-${look.expression}-${look.color}`];
}
export function stateAsset(state: ExportedState, color: string = "red"): string {
  return STATE_ASSETS[`${state}-${color}`] ?? STATE_ASSETS[`${state}-red`];
}
export function exportedAvatarAsset(look: AvatarAppearance, state: AvatarState = "idle"): string | undefined {
  return state === "idle" ? appearanceAsset(look) : STATE_ASSETS[`${state}-${look.color}`];
}
export const EXPORTED_APPEARANCES: AvatarAppearance[] = Object.keys(APPEARANCE_ASSETS).map((key) => {
  const [shape, expression, color] = key.split("-");
  return { shape, expression, color } as AvatarAppearance;
});
