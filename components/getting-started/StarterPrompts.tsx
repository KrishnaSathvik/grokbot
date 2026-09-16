import { Avatar } from "@/components/avatar/Avatar";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { CopyPrompt } from "@/components/ui/CopyPrompt";
import { PROMPT_CTAS, PROMPTS } from "@/data/prompts";

export function StarterPrompts() {
  return (
    <Section id="day-one" tone="wash">
      <SectionHead id="day-one" label="Try it" title="Things to say on day one">
        <p className="container-read mt-5">
          Each of these is a real message you could send a helper. Copy it, or open xAI&rsquo;s ready-made version and add
          it to your own Grok Bot with one click.
        </p>
        <ul className="mt-10 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {PROMPTS.map((p) => (
            <li key={p.href} className="flex flex-col border border-rule bg-paper px-5 pb-5 pt-5 sm:px-6">
              <div className="flex items-center gap-3">
                <Avatar appearance={p.avatar} time={0} size={40} tight />
                <p className="eyebrow text-muted">{p.who}</p>
              </div>
              <p className="mt-4 flex-1 font-display text-[16px] leading-[1.5]">&ldquo;{p.text}&rdquo;</p>
              <div className="mt-5 flex flex-wrap items-center gap-2 font-display">
                <CopyPrompt text={p.text} label={p.who} className="pill min-h-11 text-[14px]">
                  Copy prompt
                </CopyPrompt>
                <a href={p.href} target="_blank" rel="noopener" className="pill min-h-11 text-[14px]">
                  Open in Grok Bot ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {PROMPT_CTAS.map((c) => (
            <a key={c.href} href={c.href} target="_blank" rel="noopener" className={`pill ${c.solid ? "pill-solid" : ""}`}>
              {c.label}
            </a>
          ))}
        </div>
      </SectionHead>
    </Section>
  );
}
