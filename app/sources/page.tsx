import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Methodology } from "@/components/sources/Methodology";
import { SourceList } from "@/components/sources/SourceList";
import { SOURCES_INTRO } from "@/data/sources";
import { pageMetadata } from "@/lib/site";

const HREF = "/sources";
export const metadata: Metadata = pageMetadata(HREF);

export default function Page() {
  return (
    <>
      <PageHeader href={HREF} title="Sources & methodology">
        <p>Where the information in this guide came from. {SOURCES_INTRO}</p>
      </PageHeader>
      <main id="main">
        <SourceList />
        <Methodology />
      </main>
    </>
  );
}
