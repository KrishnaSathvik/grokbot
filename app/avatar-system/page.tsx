import type { Metadata } from "next";
import { AvatarStudio } from "@/components/avatar/AvatarStudio";
import { HeroAvatar } from "@/components/avatar/HeroAvatar";
import { HowItIsDrawn } from "@/components/avatar/HowItIsDrawn";
import { Moods } from "@/components/avatar/Moods";
import { StateExplorer } from "@/components/avatar/StateExplorer";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { SectionNav } from "@/components/layout/SectionNav";
import { EXPORTED_STATES } from "@/data/avatar-assets";
import { COLORS, EXPRESSIONS, SHAPES } from "@/lib/avatar";
import { pageMetadata } from "@/lib/site";

const HREF = "/avatar-system";
export const metadata: Metadata = pageMetadata(HREF);

const FACTS = [
  { n: SHAPES.length, label: "Shapes", href: "#shapes" },
  { n: COLORS.length, label: "Colours", href: "#colours" },
  { n: EXPRESSIONS.length, label: "Expressions", href: "#expressions" },
  { n: EXPORTED_STATES.length, label: "Animations", href: "#states" },
];

export default function Page() {
  return (
    <>
      <PageHeader
        href={HREF}
        title={
          <>
            One character.
            <br />
            Hundreds of combinations.
          </>
        }
        aside={<HeroAvatar />}
      >
        <p>
          Every helper gets a face: one simple shape, two eyes. Pick a body, an expression and a colour, and the product
          animates it through what the helper is doing. Explore the supplied artwork and try combinations in the studio.
        </p>
        <ul className="mt-8 grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-4">
          {FACTS.map((f) => (
            <li key={f.label}>
              <a
                href={f.href}
                className="arrow-link row-link flex flex-col border border-rule px-4 py-3 font-display no-underline hover:border-ink"
              >
                <span className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-none tracking-tight">{f.n}</span>
                <span className="mt-1.5 text-[13px] font-semibold text-muted">
                  {f.label}{" "}
                  <span className="arrow" aria-hidden="true">
                    ↓
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </PageHeader>
      <SectionNav
        items={[
          { id: "studio", label: "Studio" },
          { id: "states", label: "Animations" },
          { id: "moods", label: "Status" },
          { id: "engine", label: "Under the hood" },
        ]}
      />
      <main id="main">
        <Section id="studio" labelledBy="studio-title">
          <Container>
            <p className="eyebrow text-muted">Studio</p>
            <h2 id="studio-title" className="mt-3 max-w-[16ch] text-section">
              Make your own
            </h2>
            <p className="container-read mt-5">
              Pick a shape, an expression and a colour. The character keeps up.
            </p>
            <div className="mt-10">
              <AvatarStudio />
            </div>
          </Container>
        </Section>

        <Section id="states" tone="wash">
          <SectionHead id="states" label="Motion" title={`${EXPORTED_STATES.length} animation states`}>
            <p className="container-read mt-5">
              Fifteen state previews, including Swirl. Pick one to see its exported artwork in red or cream. These are
              still images of animation states.
            </p>
            <div className="mt-10">
              <StateExplorer />
            </div>
          </SectionHead>
        </Section>

        <Section id="moods">
          <SectionHead id="moods" label="How you read them" title="How states communicate status">
            <Moods />
          </SectionHead>
        </Section>

        <Section id="engine" tone="wash">
          <SectionHead id="engine" label="Under the hood" title="Curious how it's drawn?">
            <p className="container-read mt-5">
              The artwork comes from the supplied avatar exports. For combinations without an export, the studio uses
              an approximate generated preview. The details are for developers and the curious.
            </p>
            <HowItIsDrawn />
            <p className="mt-10 max-w-[64ch] text-[16.5px] leading-[1.6] text-muted">
              Want to keep one?{" "}
              <a href="https://grokbots.ai/studio" target="_blank" rel="noopener">
                grokbots.ai/studio
              </a>{" "}
              lets you pick a shape, expression and colour, play every animation, and download it as a picture. It&rsquo;s a
              community project, not xAI&rsquo;s, built on Jérémy Perret&rsquo;s{" "}
              <a href="https://github.com/jeremy-prt/bloub" target="_blank" rel="noopener">
                open-source recreation
              </a>{" "}
              of the avatar. xAI&rsquo;s own{" "}
              <a href="https://x.ai/news/designing-grok-bot" target="_blank" rel="noopener">
                design write-up
              </a>{" "}
              is the source for the six working moods.
            </p>
          </SectionHead>
        </Section>
        <RelatedPosts
          title="Further reading"
          slugs={["grok-bot-github-projects", "real-grok-bot-projects"]}
        />
      </main>
    </>
  );
}
