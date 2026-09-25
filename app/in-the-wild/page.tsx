import type { Metadata } from "next";
import { ContentHeader } from "@/components/layout/ContentHeader";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { WildExplorer } from "@/components/wild/WildExplorer";
import { WILD_INTRO, WILD_PROJECTS } from "@/data/wild";
import { absoluteUrl, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/site";

const HREF = "/in-the-wild";
export const metadata: Metadata = pageMetadata(HREF);

export default function InTheWildPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Grok Bot in the wild",
    description: WILD_INTRO,
    url: absoluteUrl(HREF),
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
    numberOfItems: WILD_PROJECTS.length,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContentHeader eyebrow="In the wild" title="Grok Bot in the wild" wideTitle>
        <p>{WILD_INTRO}</p>
      </ContentHeader>
      <main id="main">
        <section id="projects" aria-labelledby="projects-title" className="pb-20 pt-2 md:pb-28">
          <Container>
            <h2 id="projects-title" className="visually-hidden">
              Projects
            </h2>
            <WildExplorer />
          </Container>
        </section>
      </main>
    </>
  );
}
