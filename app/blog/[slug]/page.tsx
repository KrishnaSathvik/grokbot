import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { ContentHeader } from "@/components/layout/ContentHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { BLOG_POSTS, blogPost } from "@/data/blog";
import { absoluteUrl, articleMetadata, SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPost(slug);
  if (!post) return {};
  return articleMetadata({
    href: `/blog/${post.slug}`,
    title: post.seoTitle,
    description: post.description,
    ogTitle: post.ogTitle,
    ogDescription: post.ogDescription,
    ogImageHref: "/blog",
    publishedAt: post.publishedAt,
    modifiedAt: post.modifiedAt,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPost(slug);
  if (!post) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.seoTitle,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.modifiedAt,
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
      mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
      url: absoluteUrl(`/blog/${post.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContentHeader eyebrow={post.category} title={post.title} wideTitle>
        <p>{post.description}</p>
      </ContentHeader>
      <main id="main">
        <Section id="article" labelledBy="article-title">
          <h2 id="article-title" className="visually-hidden">
            Article
          </h2>
          <Container>
            <BlogArticle post={post} />
          </Container>
        </Section>
      </main>
    </>
  );
}
