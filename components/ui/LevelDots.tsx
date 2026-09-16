/** ●●○ style scale, 1–3 filled. Colour-free, reads on paper and dark bands. */
export function LevelDots({ level, of = 3, label, className = "" }: { level: number; of?: number; label: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} role="img" aria-label={label}>
      {Array.from({ length: of }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`block h-2.5 w-2.5 rounded-full border border-current ${i < level ? "bg-current" : "bg-transparent"}`}
        />
      ))}
    </span>
  );
}
