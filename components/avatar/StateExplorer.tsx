"use client";

import { useState } from "react";
import { EXPORTED_STATES, stateAsset, type ExportedState } from "@/data/avatar-assets";
import { ExportedAvatar } from "./ExportedAvatar";

export function StateExplorer() {
  const [state, setState] = useState<ExportedState>("idle");
  const [color, setColor] = useState<"red" | "cream">("red");
  const active = EXPORTED_STATES.find((s) => s.id === state)!;

  return (
    <div>
      <div className="flex flex-col items-center gap-4 border border-rule bg-paper px-6 py-10 sm:flex-row sm:justify-center sm:gap-12 sm:py-12">
        <ExportedAvatar src={stateAsset(state, color)} size="min(60vw, 260px)" title={`${active.name} state preview`} />
        <div className="text-center font-display sm:text-left">
          <p className="eyebrow text-muted">State preview</p>
          <p className="mt-1 text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight" aria-live="polite">{active.name}</p>
          <p className="mt-2 max-w-[30ch] text-[14px] text-muted">An exported still of this animation state.</p>
          <div role="group" aria-label="State preview colour" className="mt-5 flex justify-center gap-2 sm:justify-start">
            {(["red", "cream"] as const).map((c) => (
              <button type="button" key={c} className="pill capitalize" aria-pressed={color === c} onClick={() => setColor(c)}>{c}</button>
            ))}
          </div>
        </div>
      </div>
      <div role="radiogroup" aria-label="Animation state" className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5">
        {EXPORTED_STATES.map((s) => {
          const selected = s.id === state;
          return (
            <button key={s.id} type="button" role="radio" aria-label={s.name} aria-checked={selected} onClick={() => setState(s.id)} className="tile flex min-h-11 flex-col items-center gap-2 bg-paper p-3">
              <ExportedAvatar src={stateAsset(s.id, color)} size={80} />
              <span className={`font-display text-[13px] leading-tight ${selected ? "font-semibold text-ink" : "text-muted"}`}>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
