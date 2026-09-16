# Supplied avatar integration

Updated September 15, 2026 against the four reference screenshots and the `avatar icons` folder.

## Wired

- All 124 supplied PNGs copied unchanged to `public/avatars/` under descriptive filenames: 94 appearance combinations and 30 state previews (15 each in red and cream).
- The four previously supplied blue state images are also available through the shared map.
- `data/avatar-assets.ts` maps shape/face/colour combinations and named states. `docs/avatar-asset-map.json` records each original source filename.
- All eight shape thumbnails and sixteen face thumbnails now use the blue exported artwork. The horizontal Capsule and rounded Cloud match the supplied references.
- All fifteen state thumbnails and the large state preview use exported images, including Swirl. Red and cream are selectable.
- The status legend uses the same state mapping as the selector.
- Home roster, hero avatar, job cards, job dialogs and starter prompts use supplied images for their displayed configurations. The roster still changes status, swapping the appropriate exported image.
- The studio shows exact PNGs for exported combinations and explicitly labels unexported combinations as approximate. Randomize chooses an exported combination.

## Numbered state export mapping

The source exporter reused `grok-bot-circle-sleepy-{red|cream}` for state filenames. The parenthesized suffix maps as follows, checked against the artwork and reference order:

| Suffix | State |
| --- | --- |
| 1 | Idle |
| 2 | Thinking |
| 3 | Wink |
| 4 | Wide eyes |
| 5 | Alert |
| 6 | Notification |
| 7 | Exclamation |
| 8 | Sleep |
| 9 | Egg |
| 10 | Hexagon |
| 11 | Play |
| 12 | Orbit |
| 13 | Swirl |
| 14 | Burst |
| 15 | Comet |

These are sampled frames, so moving rings and face angles can differ from the exact frame in a screenshot. Artwork is served without cropping, recolouring or editing. In particular, Play and Orbit both show triangle forms in the provided exports, while Swirl retains the circle.

## Visual differences in the supplied exports

The new PNGs have dark eyes, whereas the reference sheets show white eyes. The exported `circle-excited-blue.png` has nearly closed eyes rather than the more open eyes in the face reference. This may reflect an animation frame captured during export; the filename mapping has been preserved rather than guessed or swapped. Exact screenshot matching will require corrected exports if these differences are unintended.

## Remaining source limitations

- PNG exports are stills. The state explorer says so and does not offer a misleading Replay control. Original animated WebP/GIF/Lottie or renderer assets would be needed for faithful original motion.
- The folder covers 94 of the 1,536 possible 8-shape × 16-face × 12-colour combinations. Circle has all faces in blue/red/cream; Cloud has all faces in blue; the other shapes have Neutral, Attentive, Surprised, Excited and Happy in blue. The remaining combinations use the original procedural preview, clearly labelled. Layered/vector source artwork is preferable to downloading every possible combination.
- The existing logo still has a baked-in checkerboard. No replacement logo was present in the supplied folder; a clean transparent master is still needed for the header/favicon family.
- No additional files are needed for CSS colour swatches, search, navigation arrows, checks or trust dots.

## Verification

Unit checks cover image-path existence, all reference catalogue entries, all public card/prompt/roster configurations, and absence of silent substitutions for missing combinations. Browser checks cover the state selector and studio, alongside the site’s existing responsive tests.
