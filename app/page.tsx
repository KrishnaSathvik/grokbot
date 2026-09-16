import type { Metadata } from "next";
import { GuideNavigation } from "@/components/home/GuideNavigation";
import { Hero } from "@/components/home/Hero";
import { KeyConcepts } from "@/components/home/KeyConcepts";
import { QuickIntro } from "@/components/home/QuickIntro";
import { StartHere } from "@/components/home/StartHere";
import { LAST_UPDATED_ISO, pageMetadata, SITE_DESCRIPTION, SITE_SHORT_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#page`,
      url: `${SITE_URL}/`,
      name: SITE_SHORT_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      dateModified: LAST_UPDATED_ISO,
      about: {
        "@type": "SoftwareApplication",
        name: "Grok Bot",
        applicationCategory: "BusinessApplication",
        operatingSystem: "macOS, Windows, Linux, iOS, Android",
        author: { "@type": "Organization", name: "xAI", url: "https://x.ai" },
        url: "https://x.ai/bot",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Grok Bot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grok Bot is xAI's team of always-on AI helpers. They work on a cloud computer, sign into the tools you use, and finish jobs while you're away, coming back only when they need a decision from you. Helpers on one account share that computer.",
          },
        },
        {
          "@type": "Question",
          name: "How is Grok Bot different from Grok or @grok on X?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grok is the chat assistant at grok.com. @grok is the reply account you tag on X. Grok Bot is a separate product: helpers that do jobs inside your own accounts, around the clock.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Grok Bot cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can't be bought on its own. It comes with SuperGrok (from $30 a month, not Lite), Cursor Pro (from $20 a month), Cursor Teams (from $40 per person), or by linking X Premium+. Helper usage is a weekly allowance of its own, then extra on demand if you turn that on. Larger companies get it on request.",
          },
        },
        {
          "@type": "Question",
          name: "What can Grok Bot do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "xAI offers 56 ready-made helpers across everyday admin, sales, marketing, support, hiring, finance, product, technical and personal tasks — from sorting your inbox and prepping meetings to chasing receipts, screening candidates and booking travel.",
          },
        },
        {
          "@type": "Question",
          name: "What should I not let Grok Bot do on its own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anything that spends money, messages customers or the public, deletes things, grants access, or involves legal or official decisions. Keep those behind your approval, especially while the product is in beta.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <main id="main">
        <QuickIntro />
        <KeyConcepts />
        <GuideNavigation />
        <StartHere />
      </main>
    </>
  );
}
