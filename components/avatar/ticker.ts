type Tick = (seconds: number) => void;

const subscribers = new Set<Tick>();
let raf = 0;

function loop(nowMs: number) {
  const s = nowMs / 1000;
  for (const cb of subscribers) cb(s);
  raf = subscribers.size ? requestAnimationFrame(loop) : 0;
}

/** One shared requestAnimationFrame loop for every animated avatar on the page. */
export function subscribe(cb: Tick): () => void {
  subscribers.add(cb);
  if (!raf) raf = requestAnimationFrame(loop);
  return () => {
    subscribers.delete(cb);
    if (!subscribers.size && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

export function now(): number {
  return (typeof performance !== "undefined" ? performance.now() : Date.now()) / 1000;
}
