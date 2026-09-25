import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentHeader } from "@/components/layout/ContentHeader";
import { Container } from "@/components/layout/Container";
import { ReadingContainer } from "@/components/layout/ReadingContainer";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { WILD_PROJECTS, relatedWildProjects, wildProject } from "@/data/wild";
import { absoluteUrl, articleMetadata, SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WILD_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = wildProject(slug);
  if (!project) return {};
  return articleMetadata({
    href: `/in-the-wild/${project.slug}`,
    title: `${project.project} — Grok Bot in the Wild`,
    description: project.whatItDoes,
    ogTitle: project.project,
    ogDescription: project.whatItDoes,
    ogImageHref: "/in-the-wild",
    modifiedAt: project.lastChecked,
  });
}

export default async function WildProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = wildProject(slug);
  if (!project) notFound();

  const related = relatedWildProjects(project.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: project.project,
      description: project.whatItDoes,
      dateModified: project.lastChecked,
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
      mainEntityOfPage: absoluteUrl(`/in-the-wild/${project.slug}`),
      url: absoluteUrl(`/in-the-wild/${project.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "In the wild", item: absoluteUrl("/in-the-wild") },
        {
          "@type": "ListItem",
          position: 3,
          name: project.project,
          item: absoluteUrl(`/in-the-wild/${project.slug}`),
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContentHeader eyebrow="In the wild" title={project.project} wideTitle>
        <p>{project.whatItDoes}</p>
      </ContentHeader>
      <main id="main">
        <Section id="entry" labelledBy="entry-title">
          <h2 id="entry-title" className="visually-hidden">
            Project entry
          </h2>
          <Container>
            <ReadingContainer>
              <div className="prose-flow text-body">
                <p>{project.summary}</p>
                {project.status === "Community" ? (
                  <p>
                    This entry is community-reported. We link the public evidence we found; we have not independently
                    audited the claims.
                  </p>
                ) : null}
                <h3>What to take from it</h3>
                <ul className="list-disc space-y-2 pl-5">
                  {project.takeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <nav
                aria-label="Related guide pages"
                className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-rule pt-6"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener"
                  className="font-display text-[15px] font-semibold no-underline hover:underline"
                >
                  View original ↗<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
                {project.relatedJobsHref ? (
                  <Link
                    href={project.relatedJobsHref}
                    className="font-display text-[15px] font-semibold no-underline hover:underline"
                  >
                    Jobs →
                  </Link>
                ) : null}
                {project.relatedGuideHref ? (
                  <Link
                    href={project.relatedGuideHref}
                    className="font-display text-[15px] font-semibold no-underline hover:underline"
                  >
                    Related guide →
                  </Link>
                ) : null}
                <Link
                  href="/in-the-wild"
                  className="font-display text-[15px] font-semibold text-muted no-underline hover:text-ink hover:underline"
                >
                  ← All projects
                </Link>
              </nav>
            </ReadingContainer>
          </Container>
        </Section>

        {related.length > 0 ? (
          <Section id="related" labelledBy="related-title" tone="wash">
            <Container>
              <h2 id="related-title" className="text-section">
                More in this group
              </h2>
              <ul className="mt-8 m-0 list-none border-t border-ink p-0">
                {related.map((p) => (
                  <li key={p.slug} className="border-b border-rule">
                    <Link
                      href={`/in-the-wild/${p.slug}`}
                      className="arrow-link row-link -mx-4 flex items-baseline justify-between gap-6 px-4 py-5 no-underline"
                    >
                      <span className="min-w-0">
                        <span className="block font-display text-[17px] font-semibold">{p.project}</span>
                        <span className="mt-1 block max-w-[48ch] text-[15px] leading-[1.5] text-muted">
                          {p.whatItDoes}
                        </span>
                      </span>
                      <span aria-hidden="true" className="arrow shrink-0 font-display text-[22px] font-light">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </Section>
        ) : null}
      </main>
    </>
  );
}
