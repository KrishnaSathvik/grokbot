import Link from "next/link";
import { blogPost } from "@/data/blog";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/** Compact related-article band for pillar pages — 2–3 links max. */
export function RelatedPosts({ title, slugs }: { title: string; slugs: string[] }) {
  const posts = slugs.map((s) => blogPost(s)).filter(Boolean);
  if (posts.length === 0) return null;

  return (
    <Section id="go-deeper" labelledBy="go-deeper-title" tone="wash">
      <Container>
        <h2 id="go-deeper-title" className="text-section">
          {title}
        </h2>
        <ul className="mt-8 list-none border-t border-ink p-0">
          {posts.map((post) =>
            post ? (
              <li key={post.slug} className="border-b border-rule">
                <Link
                  href={`/blog/${post.slug}`}
                  className="arrow-link row-link -mx-4 flex items-baseline justify-between gap-6 px-4 py-5 no-underline"
                >
                  <span className="min-w-0">
                    <span className="eyebrow text-muted">{post.category}</span>
                    <span className="mt-1 block font-display text-[17px] font-semibold">{post.title}</span>
                  </span>
                  <span aria-hidden="true" className="arrow shrink-0 font-display text-[22px] font-light">
                    →
                  </span>
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      </Container>
    </Section>
  );
}
