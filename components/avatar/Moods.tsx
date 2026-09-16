import { ExportedAvatar } from "./ExportedAvatar";
import { stateAsset } from "@/data/avatar-assets";
import { MOOD_LEGEND, PRODUCT_MOODS } from "@/data/moods";

const list = (names: string[]) => names.slice(0, -1).join(", ") + " and " + names[names.length - 1];

/**
 * Expressions are the face you choose. Animation states are what the engine
 * plays. In the product, four of those states tell you the helper's status at a glance.
 */
export function Moods() {
  return (
    <>
      <p className="container-read mt-5">
        An <strong className="font-semibold">expression</strong> is the face you pick. An{" "}
        <strong className="font-semibold">animation state</strong> is what the engine plays over it. In the product, the
        state is how you read the roster: six working moods, {list(PRODUCT_MOODS)}. These four are the ones you&rsquo;ll see most.
      </p>
      <ul className="mt-10 max-w-[880px] list-none border-t border-ink p-0">
        {MOOD_LEGEND.map((m) => (
          <li
            key={m.name}
            className="grid grid-cols-[80px_minmax(0,1fr)] items-center gap-x-5 border-b border-rule py-4 font-display sm:grid-cols-[80px_minmax(9rem,22%)_minmax(0,1fr)] sm:gap-x-8"
          >
            <ExportedAvatar src={stateAsset(m.state)} title={`${m.name} status icon`} size={80} />
            <h3 className="text-[20px]">{m.name}</h3>
            <p className="col-start-2 text-[16px] text-muted sm:col-start-3">{m.meaning}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
