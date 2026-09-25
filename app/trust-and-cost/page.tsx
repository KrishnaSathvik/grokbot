import type { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionNav } from "@/components/layout/SectionNav";
import { CostControls } from "@/components/trust/CostControls";
import { CostExplainer } from "@/components/trust/CostExplainer";
import { TrustLevels } from "@/components/trust/TrustLevels";
import { TrustLists } from "@/components/trust/TrustLists";
import { TrustMatrix } from "@/components/trust/TrustMatrix";
import { TrustScale } from "@/components/trust/TrustScale";
import { pageMetadata } from "@/lib/site";

const HREF = "/trust-and-cost";
export const metadata: Metadata = pageMetadata(HREF);

export default function Page() {
  return (
    <>
      <PageHeader
        href={HREF}
        title={
          <>
            What should you hand over?
            <br className="hidden lg:block" /> And what should you keep control of?
          </>
        }
        aside={<TrustScale />}
      >
        <p>
          Both halves of this page are about boundaries: how much rope to give a helper, and how much it costs to keep one
          on. The two are connected. The jobs that need the least watching are also the cheapest to run.
        </p>
      </PageHeader>
      <SectionNav
        items={[
          { id: "levels", label: "Trust" },
          { id: "trust", label: "What to delegate" },
          { id: "matrix", label: "Oversight" },
          { id: "cost", label: "Cost" },
          { id: "cost-control", label: "Cost control" },
        ]}
      />
      <main id="main">
        <TrustLevels />
        <TrustLists />
        <TrustMatrix />
        <CostExplainer />
        <CostControls />
        <RelatedPosts
          title="Boundaries and teams"
          slugs={["grok-bot-security-shared-computer", "grok-bot-team-workflows"]}
        />
      </main>
    </>
  );
}
