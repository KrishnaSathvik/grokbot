import Link from "next/link";
import {
  WILD_PROJECTS,
  WILD_SECTIONS,
  wildProjectsInSection,
  type WildProject,
  type WildSection,
} from "@/data/wild";

function WildCard({ project }: { project: WildProject }) {
  return (
    <article className="border-t border-ink pt-5">
      <h3 className="font-display text-[clamp(1.25rem,2vw,1.5rem)] font-extrabold leading-tight">
        <Link href={`/in-the-wild/${project.slug}`} className="arrow-link no-underline hover:underline">
          {project.project}
        </Link>
      </h3>
      <p className="mt-3 text-[15.5px] leading-[1.55] text-muted">{project.whatItDoes}</p>
    </article>
  );
}

function SectionBlock({ id }: { id: WildSection }) {
  const meta = WILD_SECTIONS.find((s) => s.id === id);
  const projects = wildProjectsInSection(id);
  if (!meta || projects.length === 0) return null;

  return (
    <section aria-labelledby={`${id}-title`} className="mt-14 first:mt-0 md:mt-16">
      <h2 id={`${id}-title`} className="text-section">
        {meta.title}
      </h2>
      <p className="mt-3 max-w-[52ch] text-lede font-light text-muted">{meta.blurb}</p>
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <WildCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

export function WildExplorer() {
  return (
    <div>
      <p className="font-display text-[14px] text-muted">
        {WILD_PROJECTS.length} {WILD_PROJECTS.length === 1 ? "entry" : "entries"}
      </p>
      {WILD_SECTIONS.map((s) => (
        <SectionBlock key={s.id} id={s.id} />
      ))}
    </div>
  );
}
