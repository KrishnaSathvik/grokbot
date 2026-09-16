import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { PAGE_SEO, type SeoPath } from "@/data/seo";

export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(PAGE_SEO).map((path) => ({ slug: path === "/" ? "overview" : path.slice(1) }));
}
const blue = "#2463eb";
const rows: Record<string, string[]> = {
  overview: ["Working", "Thinking", "Waiting on you", "Done", "Idle"],
  "how-it-works": ["You assign", "Helper works", "Uses tools", "Returns / asks"],
  jobs: ["Inbox clean-up", "Competitor research", "Morning catch-up", "Expense summary", "Travel planning", "Pipeline check"],
  "getting-started": ["Observe", "Delegate", "Refine", "Loosen"],
  "trust-and-cost": ["Hand over", "Review", "Approve"],
  sources: ["Official pages", "Community avatar research", "Independent review", "Methodology"],
};

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const path = (slug === "overview" ? "/" : `/${slug}`) as SeoPath;
  const page = PAGE_SEO[path];
  if (!page) return new Response("Not found", { status: 404 });
  const logo = await readFile(join(process.cwd(), "public/android-chrome-192x192.png"));
  const avatar = slug === "avatar-system" ? await readFile(join(process.cwd(), "public/avatars/state-idle-blue.png")) : null;
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#fcfcfa", color: "#111", padding: "48px 56px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* Supplied logo is preserved unchanged. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={40} height={40} alt="" />
        <div style={{ fontSize: 19, fontWeight: 700 }}>Grok Bot Explained</div>
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 604 }}>
          <div style={{ fontSize: 13, letterSpacing: 2, color: blue, marginBottom: 22 }}>GROK BOT, EXPLAINED</div>
          <div style={{ fontSize: slug === "overview" ? 78 : 64, fontWeight: 700, textShadow: "1px 0 0 #111", lineHeight: 1.02, letterSpacing: -3 }}>{page.headline}</div>
          <div style={{ fontSize: 24, lineHeight: 1.4, color: "#626262", marginTop: 26 }}>{page.support}</div>
          {avatar && <div style={{ fontSize: 17, marginTop: 26, color: "#626262" }}>8 shapes · 12 colours · 16 expressions · 15 states</div>}
        </div>
        <div style={{ display: "flex", flexDirection: slug === "jobs" ? "row" : "column", flexWrap: "wrap", gap: slug === "jobs" ? 12 : 0, width: 368 }}>
          {avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`data:image/png;base64,${avatar.toString("base64")}`} width={340} height={340} alt="" />
          ) : (rows[slug] ?? []).map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, width: slug === "jobs" ? 178 : "100%", ...(slug === "jobs" ? { minHeight: 106 } : {}), padding: slug === "jobs" ? "14px" : "21px 0", ...(slug === "jobs" ? { border: "1px solid #d6d6d3" } : {}), borderTop: "1px solid #d6d6d3", fontSize: slug === "jobs" ? 20 : label.length > 22 ? 20 : 24 }}>
              {slug === "overview" ? <div style={{ width: 8, height: 8, borderRadius: 8, background: i === 2 ? blue : "#999" }} /> : <div style={{ color: blue, fontSize: 14 }}>{String(i + 1).padStart(2, "0")}</div>}
              <div style={{ display: "flex", flex: 1 }}>{label}</div>
              {(slug === "how-it-works" || slug === "getting-started") && <div style={{ color: "#999" }}>→</div>}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #d6d6d3", paddingTop: 18, fontSize: 14, color: "#777", justifyContent: "space-between" }}>
        <div>A practical guide to xAI’s always-on helpers</div><div>{path === "/" ? "Overview" : path}</div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
