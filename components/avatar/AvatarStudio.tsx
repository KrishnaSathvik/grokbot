"use client";

import { exportedAvatarAsset, EXPORTED_APPEARANCES } from "@/data/avatar-assets";
import { useState, type ReactNode } from "react";
import { AnimatedAvatar } from "@/components/avatar/AnimatedAvatar";
import { Avatar } from "@/components/avatar/Avatar";
import {
  COLORS,
  EXPRESSIONS,
  SHAPES,
  type AvatarAppearance,
  type AvatarColor,
  type AvatarExpression,
  type AvatarShape,
  type AvatarState,
} from "@/lib/avatar";

const DEFAULT: AvatarAppearance = { shape: "pebble", color: "blue", expression: "happy" };
const PREVIEW_STATES: { id: AvatarState; label: string }[] = [
  { id: "idle", label: "Idle" },
  { id: "thinking", label: "Thinking" },
  { id: "notification", label: "Needs you" },
];

function Tile({
  selected,
  label,
  onClick,
  children,
  caption,
}: {
  selected: boolean;
  label: string;
  onClick: () => void;
  children: ReactNode;
  caption?: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-label={label}
      onClick={onClick}
      className="tile flex min-h-11 w-[88px] flex-none snap-start flex-col items-center gap-1.5 p-2.5 sm:w-auto"
    >
      {children}
      <span className={`font-display text-[12.5px] leading-none ${selected ? "font-semibold text-ink" : "text-muted"}`}>{label}</span>
      {caption ? <span className="font-display text-[10px] uppercase tracking-[0.06em] text-subtle">{caption}</span> : null}
    </button>
  );
}

function Group({ id, title, count, children }: { id: string; title: string; count: number; children: ReactNode }) {
  return (
    <div id={id} data-anchor className="scroll-mt-[248px] border-t border-rule pt-5 first:border-t-0 first:pt-0 lg:scroll-mt-32">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[17px] font-extrabold tracking-tight">{title}</h3>
        <span className="eyebrow text-muted">{count}</span>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/**
 * Live character on the left, controls on the right: see it, change it, watch
 * it change. The three catalogues double as the controls.
 */
export function AvatarStudio() {
  const [look, setLook] = useState<AvatarAppearance>(DEFAULT);
  const [state, setState] = useState<AvatarState>("idle");
  const set = <K extends keyof AvatarAppearance>(key: K, value: AvatarAppearance[K]) =>
    setLook((l) => ({ ...l, [key]: value }));

  const shapeName = SHAPES.find((s) => s.id === look.shape)!.name;
  const colourName = COLORS.find((c) => c.id === look.color)!.name;
  const expressionName = EXPRESSIONS.find((e) => e.id === look.expression)!.name;

  const row = "no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:overflow-visible sm:px-0";

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,6fr)_minmax(320px,6fr)] lg:gap-14">
      {/* Live avatar: a compact sticky strip on mobile, the hero of the section on desktop.
          A direct grid child so it can stick for the full height of the controls. */}
      <div className="sticky top-[125px] z-20 -mx-5 flex items-center gap-5 self-start border-b border-rule bg-paper px-5 py-3 lg:mx-0 lg:flex-col lg:items-center lg:border lg:border-rule lg:bg-wash lg:px-8 lg:pb-8 lg:pt-10">
          <AnimatedAvatar
            appearance={look}
            state={state}
            className="h-[88px] w-[88px] flex-none lg:h-[min(30vw,380px)] lg:w-[min(30vw,380px)]"
            title={`${shapeName} ${colourName} avatar, ${expressionName}`}
          />
          <div className="min-w-0 flex-1 font-display lg:mt-6 lg:w-full lg:text-center">
            <p className="eyebrow text-muted">Your avatar</p>
            <p className="mt-1 text-[16px] font-semibold leading-snug" aria-live="polite">
              {shapeName} · {expressionName} · {colourName}
            </p>
            <p className="mt-2 text-[13px] text-muted" aria-live="polite">
              {exportedAvatarAsset(look, state) ? "Exported artwork · still preview" : "Approximate preview · no export for this combination"}
            </p>
            <div className="mt-3 hidden flex-wrap gap-2 lg:flex lg:justify-center" role="group" aria-label="Preview animation">
              {PREVIEW_STATES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={state === s.id}
                  onClick={() => setState(s.id)}
                  className="pill min-h-9 px-3.5 text-[13px]"
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-4 lg:justify-center">
            <button type="button" className="min-h-11 text-[14px] font-semibold underline underline-offset-4" onClick={() => {
              setLook(EXPORTED_APPEARANCES[Math.floor(Math.random() * EXPORTED_APPEARANCES.length)]);
              setState("idle");
            }}>Randomize</button>
            <button
              type="button"
              className="min-h-11 underline mt-2 text-[13px] font-semibold text-muted underline-offset-4 hover:text-ink hover:underline lg:mt-4"
              onClick={() => {
                setLook(DEFAULT);
                setState("idle");
              }}
            >
              Reset
            </button>
            </div>
          </div>
      </div>

      <div className="flex min-w-0 flex-col gap-7">
        <p className="eyebrow text-muted">Customise</p>
        <Group id="shapes" title="Shape" count={SHAPES.length}>
          <div role="radiogroup" aria-label="Shape" className={`${row} sm:grid-cols-4`}>
            {SHAPES.map((s) => (
              <Tile key={s.id} label={s.name} selected={look.shape === s.id} onClick={() => set("shape", s.id as AvatarShape)}>
                <Avatar appearance={{ shape: s.id, color: "blue", expression: "neutral" }} time={0} size={48} tight />
              </Tile>
            ))}
          </div>
        </Group>

        <Group id="expressions" title="Expression" count={EXPRESSIONS.length}>
          <div role="radiogroup" aria-label="Expression" className={`${row} sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-8`}>
            {EXPRESSIONS.map((e) => (
              <Tile
                key={e.id}
                label={e.name}
                selected={look.expression === e.id}
                onClick={() => set("expression", e.id as AvatarExpression)}
              >
                <Avatar appearance={{ shape: "circle", color: "blue", expression: e.id }} time={0} size={48} tight />
              </Tile>
            ))}
          </div>
        </Group>

        <Group id="colours" title="Colour" count={COLORS.length}>
          <div role="radiogroup" aria-label="Colour" className={`${row} sm:grid-cols-6`}>
            {COLORS.map((c) => (
              <Tile
                key={c.id}
                label={c.name}
                caption={c.hex}
                selected={look.color === c.id}
                onClick={() => set("color", c.id as AvatarColor)}
              >
                <span className="block h-9 w-9 rounded-full border border-rule" style={{ background: c.hex }} aria-hidden="true" />
              </Tile>
            ))}
          </div>
        </Group>
        <p className="font-display text-[14px] text-muted">
          Try a different shape, expression or colour. Your selections appear in the live preview.
        </p>
      </div>
    </div>
  );
}
