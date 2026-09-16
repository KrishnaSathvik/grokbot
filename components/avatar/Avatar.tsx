import { exportedAvatarAsset } from "@/data/avatar-assets";
import { ExportedAvatar } from "./ExportedAvatar";
import { useId } from "react";
import { poseToSvg, samplePose, type AvatarAppearance, type AvatarPose, type AvatarState, type Effect } from "@/lib/avatar";
import { CENTER, UNIT, u } from "@/lib/avatar/renderer";

export interface AvatarProps {
  appearance: AvatarAppearance;
  state?: AvatarState;
  /** Explicit pose overrides appearance/state sampling (used by the animated wrapper). */
  pose?: AvatarPose;
  /** Sample time for a static render. Defaults to the state's preview time. */
  time?: number;
  size?: number | string;
  className?: string;
  title?: string;
  /** Crop the viewBox to the body for small thumbnails that carry no effects. */
  tight?: boolean;
}

function EffectNode({ e }: { e: Effect }) {
  const o = e.opacity ?? 1;
  switch (e.kind) {
    case "dot":
      return <circle cx={u(e.x)} cy={u(e.y)} r={e.r * UNIT} fill={e.fill} opacity={o} />;
    case "ring":
      return (
        <ellipse
          cx={CENTER}
          cy={CENTER}
          rx={e.rx * UNIT}
          ry={e.ry * UNIT}
          fill="none"
          stroke={e.stroke}
          strokeWidth={e.width * UNIT}
          opacity={o}
          transform={`rotate(${e.rotation} ${CENTER} ${CENTER})`}
        />
      );
    case "bar":
      return (
        <rect
          x={u(e.x) - (e.w * UNIT) / 2}
          y={u(e.y) - (e.h * UNIT) / 2}
          width={e.w * UNIT}
          height={e.h * UNIT}
          rx={(e.w * UNIT) / 2}
          fill={e.fill}
          opacity={o}
          transform={`rotate(${e.rotation} ${u(e.x)} ${u(e.y)})`}
        />
      );
    case "ray": {
      const a = (e.angle * Math.PI) / 180;
      return (
        <line
          x1={u(Math.cos(a) * e.from)}
          y1={u(Math.sin(a) * e.from)}
          x2={u(Math.cos(a) * e.to)}
          y2={u(Math.sin(a) * e.to)}
          stroke={e.stroke}
          strokeWidth={e.width * UNIT}
          strokeLinecap="round"
          opacity={o}
        />
      );
    }
    case "tri": {
      const s = e.size * UNIT;
      const cx = u(e.x);
      const cy = u(e.y);
      const pts = `${cx - s * 0.45},${cy - s * 0.5} ${cx + s * 0.55},${cy} ${cx - s * 0.45},${cy + s * 0.5}`;
      return <polygon points={pts} fill={e.fill} opacity={o} transform={`rotate(${e.rotation} ${cx} ${cy})`} />;
    }
    case "text":
      return (
        <text
          x={u(e.x)}
          y={u(e.y)}
          fontSize={e.size * UNIT}
          fill={e.fill}
          opacity={o}
          fontFamily="var(--font-display), sans-serif"
          fontWeight={800}
          textAnchor="middle"
          transform={`rotate(${e.rotation ?? 0} ${u(e.x)} ${u(e.y)})`}
        >
          {e.text}
        </text>
      );
  }
}

/**
 * Exact supplied artwork when available; otherwise renders a procedural SVG pose.
 */
export function Avatar({ appearance, state = "idle", pose, time, size = 64, className, title, tight = false }: AvatarProps) {
  const id = useId();
  const maskId = `m${id.replace(/[^a-zA-Z0-9]/g, "")}`;
  const exported = !pose ? exportedAvatarAsset(appearance, state) : undefined;
  if (exported) return <ExportedAvatar src={exported} size={size} title={title} className={className} />;
  const model = poseToSvg(pose ?? samplePose(appearance, state, time));

  return (
    <svg
      viewBox={tight ? "16 16 68 68" : model.viewBox}
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <g transform={model.bodyTransform}>
            <path d={model.bodyPath} fill="#fff" />
            {model.eyes.map((e, i) => (
              <ellipse
                key={i}
                cx={e.cx}
                cy={e.cy}
                rx={e.rx}
                ry={e.ry}
                fill="#000"
                transform={`rotate(${e.rotation} ${e.cx} ${e.cy})`}
              />
            ))}
          </g>
        </mask>
      </defs>
      {model.back.map((e, i) => (
        <EffectNode key={`b${i}`} e={e} />
      ))}
      <rect x="0" y="0" width="100" height="100" fill={model.fill} mask={`url(#${maskId})`} />
      {model.front.map((e, i) => (
        <EffectNode key={`f${i}`} e={e} />
      ))}
    </svg>
  );
}
