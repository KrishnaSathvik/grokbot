import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-rule pb-12 pt-8">
      <Container>
        <p className="max-w-[36ch] font-display text-[14px] text-muted">
          A practical guide to Grok Bot, xAI&rsquo;s always-on helpers. Not affiliated with xAI.
        </p>
      </Container>
    </footer>
  );
}
