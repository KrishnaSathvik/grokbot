import Link from "next/link";
import type { BlogBlock, BlogPost } from "@/data/blog";
import { ReadingContainer } from "@/components/layout/ReadingContainer";

function HeadingLink({ href, text, className }: { href?: string; text?: string; className: string }) {
  if (!href) return <span className={className}>{text}</span>;
  return (
    <a href={href} target="_blank" rel="noopener" className={`${className} text-ink no-underline hover:underline`}>
      {text}
      <span aria-hidden="true" className="ml-2 font-display text-[0.75em] font-semibold text-muted">
        ↗
      </span>
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return (
        <h2 className="!mt-12 text-[clamp(1.375rem,2.2vw,1.625rem)]">
          <HeadingLink href={block.href} text={block.text} className="" />
        </h2>
      );
    case "h3":
      return (
        <h3 className="!mt-8 text-[clamp(1.125rem,1.8vw,1.25rem)]">
          <HeadingLink href={block.href} text={block.text} className="" />
        </h3>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-ink pl-4 font-display text-[17px] font-semibold leading-snug">
          {block.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5">
          {(block.items ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left font-display text-[14px]">
            <thead>
              <tr className="border-b border-ink">
                {(block.headers ?? []).map((h) => (
                  <th key={h} className="py-2 pr-4 font-extrabold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(block.rows ?? []).map((row) => (
                <tr key={row.join("|")} className="border-b border-rule">
                  {row.map((cell, i) => (
                    <td key={`${row[0]}-${i}`} className="py-2.5 pr-4 align-top text-muted first:font-semibold first:text-ink">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default: {
      const _exhaustive: never = block.type;
      return _exhaustive;
    }
  }
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article>
      <ReadingContainer className="prose-flow text-body">
        {post.blocks.map((block, i) => (
          <Block key={`${block.type}-${i}`} block={block} />
        ))}
      </ReadingContainer>
      <ReadingContainer>
        <nav aria-label="Related guide pages" className="mt-10 border-t border-rule pt-6">
          <ul className="flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
            {post.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="font-display text-[15px] font-semibold no-underline hover:underline">
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </ReadingContainer>
    </article>
  );
}
