import Link from "next/link";
import { BLOG_INTRO, BLOG_POSTS, BLOG_SECTIONS, blogPostsInGroup } from "@/data/blog";
import { AroundTheWeb } from "@/components/blog/AroundTheWeb";
import { ContentHeader } from "@/components/layout/ContentHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";

const HREF = "/blog";
export const metadata: Metadata = pageMetadata(HREF);

const FEATURED = BLOG_POSTS[0];

export default function BlogIndexPage() {
  return (
    <>
      <ContentHeader eyebrow="Blog" title="Explainers that don’t repeat the pillars">
        <p>{BLOG_INTRO}</p>
      </ContentHeader>
      <main id="main">
        <Section id="featured" labelledBy="featured-title">
          <Container>
            <p className="eyebrow text-muted">{FEATURED.category}</p>
            <h2 id="featured-title" className="visually-hidden">
              Featured post
            </h2>
            <Link
              href={`/blog/${FEATURED.slug}`}
              className="arrow-link row-link mt-3 block border-t border-ink no-underline"
            >
              <div className="-mx-4 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 px-4 py-8 md:py-10">
                <div>
                  <span className="block font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.05] tracking-tight">
                    {FEATURED.title}
                  </span>
                  <span className="mt-4 block max-w-[56ch] font-display text-[16.5px] leading-[1.55] text-muted">
                    {FEATURED.description}
                  </span>
                </div>
                <span aria-hidden="true" className="arrow pt-2 font-display text-[32px] font-light leading-none">
                  →
                </span>
              </div>
            </Link>
          </Container>
        </Section>

        {BLOG_SECTIONS.map((section) => {
          const posts = blogPostsInGroup(section.id).filter((p) => p.slug !== FEATURED.slug);
          if (posts.length === 0) return null;
          return (
            <Section key={section.id} id={section.id} labelledBy={`${section.id}-title`}>
              <Container>
                <h2 id={`${section.id}-title`} className="text-section">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-[48ch] text-lede font-light text-muted">{section.blurb}</p>
                <ul className="mt-8 m-0 list-none border-t border-ink p-0">
                  {posts.map((post) => (
                    <li key={post.slug} className="border-b border-rule">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="arrow-link row-link -mx-4 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 px-4 py-7 no-underline md:py-8"
                      >
                        <div>
                          <span className="eyebrow text-muted">{post.category}</span>
                          <span className="mt-2 block font-display text-[clamp(1.25rem,2.2vw,1.625rem)] font-extrabold leading-tight tracking-tight">
                            {post.title}
                          </span>
                          <span className="mt-3 block max-w-[56ch] font-display text-[15px] leading-[1.55] text-muted">
                            {post.description}
                          </span>
                        </div>
                        <span aria-hidden="true" className="arrow pt-7 font-display text-[28px] font-light leading-none">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            </Section>
          );
        })}
        <AroundTheWeb />
      </main>
    </>
  );
}
