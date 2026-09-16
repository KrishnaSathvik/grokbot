export function HowItIsDrawn() {
  return (
    <details className="mt-8 border-t border-ink">
      <summary className="cursor-pointer py-5 font-display text-[18px] font-extrabold">See the technical details</summary>
      <div className="prose-flow max-w-[65ch] pb-6 text-[16.5px]">
        <p>The supplied PNGs provide eight shape thumbnails, sixteen face thumbnails, and fifteen state previews. Red and cream have a complete set of state exports, including Swirl.</p>
        <p>The studio uses the exact exported image whenever its shape, face and colour match. Other combinations use the original SVG renderer and are labelled as approximate. PNGs are still images; they cannot reproduce the original animation or morph between arbitrary combinations.</p>
        <p>The fallback renderer samples 64 points around each body and projects two eyes onto its surface. Its fourteen procedural animation loops are approximations and are separate from the fifteen exported state previews.</p>
      </div>
    </details>
  );
}
