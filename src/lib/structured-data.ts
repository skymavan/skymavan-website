import { faqItems, siteConfig } from "@/content/site";

export function createStructuredData() {
  const organizationId = `${siteConfig.canonicalUrl}#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.canonicalUrl,
        email: siteConfig.email,
        description:
          "Skymavan builds custom AI agents, workflow automation, and AI software for businesses that need reliable systems, human oversight, and measurable results.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.canonicalUrl}#website`,
        url: siteConfig.canonicalUrl,
        name: siteConfig.name,
        publisher: { "@id": organizationId },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.canonicalUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  } as const;
}
