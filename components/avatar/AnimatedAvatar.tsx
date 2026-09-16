"use client";

import { exportedAvatarAsset } from "@/data/avatar-assets";
import { ExportedAvatar } from "./ExportedAvatar";
import { useRef } from "react";
import type { AvatarAppearance, AvatarState } from "@/lib/avatar";
import { Avatar } from "./Avatar";
import { useAvatarClock } from "./useAvatarClock";

function GeneratedAnimatedAvatar({
  appearance,
  state = "idle",
  size,
  paused = false,
  className,
  title,
}: {
  appearance: AvatarAppearance;
  state?: AvatarState;
  size?: number | string;
  paused?: boolean;
  className?: string;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const pose = useAvatarClock(ref, appearance, state, paused);
  return (
    <div ref={ref} className={className} style={size === undefined ? undefined : { width: size, height: size }}>
      <Avatar appearance={appearance} pose={pose} size="100%" title={title} />
    </div>
  );
}

/** Exact PNGs take precedence; the original engine covers unexported combinations. */
export function AnimatedAvatar(props: Parameters<typeof GeneratedAnimatedAvatar>[0]) {
  const src = exportedAvatarAsset(props.appearance, props.state);
  if (src) return <div className={props.className} style={props.size === undefined ? undefined : { width: props.size, height: props.size }}><ExportedAvatar src={src} size="100%" title={props.title} /></div>;
  return <GeneratedAnimatedAvatar {...props} />;
}
