import { LevelDots } from "@/components/ui/LevelDots";
import { TRUST_LEVELS } from "@/data/trust";

/** The three levels as a compact scale for the page hero. Static. */
export function TrustScale() {
  return (
    <ol className="m-0 grid list-none grid-cols-3 gap-2 p-0 font-display" aria-label="Three levels of trust">
      {TRUST_LEVELS.map((l, i) => (
        <li key={l.id} className="border-t-2 border-ink pt-3">
          <span className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</span>
          <a href={`#${l.id}`} className="mt-1 flex min-h-11 items-center text-[18px] font-extrabold uppercase leading-tight tracking-tight no-underline hover:underline sm:text-[20px]">
            {l.title}
          </a>
          <LevelDots level={l.oversight} label={`Oversight ${l.oversight} of 3`} className="mt-2.5" />
          <span className="mt-2 block text-[13px] leading-snug text-muted">{l.tagline}</span>
        </li>
      ))}
    </ol>
  );
}
